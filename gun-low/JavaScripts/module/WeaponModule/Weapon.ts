import { GameConfig } from "../../config/GameConfig";
import { IProjectilePropElement } from "../../config/ProjectileProp";
import { IWeaponPropElement } from "../../config/WeaponProp";
import { Helper } from "../../tools/Helper";
import Utils from "../../tools/Utils";
import { Projectile } from "./Projectile";
import { ProjectileType } from "./WeaponData";
import WeaponModuleC from "./WeaponModuleC";

@Component
export default class Weapon extends Script {
    @mw.Property({ replicated: true, onChanged: "onWeaponChanged" })
    public weaponId: number = -1;

    @mw.Property({ replicated: true, onChanged: "initPlayerWeapon" })
    public playerId_WeaponId: string = "";

    @mw.Property({ replicated: true, onChanged: "fire" })
    public fireData: string = "";

    @mw.Property({ replicated: true, onChanged: "weaponState" })
    public isVisibility: boolean = true;

    private weaponModuleC: WeaponModuleC = null;
    private get getWeaponModuleC(): WeaponModuleC {
        if (this.weaponModuleC == null) {
            this.weaponModuleC = ModuleService.getModule(WeaponModuleC);
        }
        return this.weaponModuleC;
    }

    private player: mw.Player = null;
    private get getPlayer(): mw.Player {
        if (this.player == null) {
            this.player = Player.getPlayer(this.playerId);
        }
        return this.player;
    }

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (mw.SystemUtil.isServer()) return;
    }

    private async initPlayerWeapon(): Promise<void> {
        let data = this.playerId_WeaponId.split("|");
        if (data.length < 2) return;
        this.playerId = parseInt(data[0]);
        this.weaponId = parseInt(data[1]);
        await this.initPlayer();
        await this.onWeaponChanged();
    }

    private playerId: number = -1;
    private async initPlayer(): Promise<void> {
        if (!this.player) {
            this.player = await Player.asyncGetPlayer(this.playerId);
            console.error(`playerId = ${this.playerId}"的玩家 "${this.player ? "角色初始化完成" : "角色初始化失败"}`);
        }
    }

    //#region Switch Weapon
    private weaponPropElement: IWeaponPropElement = null;
    private async onWeaponChanged(): Promise<void> {
        if (this.weaponId == -1) {
            this.despawnWeapon();
            return;
        }
        if (!this.player) await this.initPlayer();
        if (!this.player) return;
        this.weaponPropElement = GameConfig.WeaponProp.getElement(this.weaponId);
        if (!this.weaponPropElement) return;
        this.despawnWeapon();
        await this.spawnWeapon(this.weaponPropElement.PrefabId, this.weaponPropElement.SlotType);
        this.playSubStance(this.weaponPropElement.GunAttitude);
    }

    private async playSubStance(gunAttitude: string): Promise<void> {
        await Utils.asyncDownloadAsset(gunAttitude);
        this.getPlayer.character.loadSubStance(gunAttitude).play();
    }

    private weaponModel: mw.Model = null;
    private fireAnchor: mw.Model = null;
    private async spawnWeapon(prefabId: string, slotType: mw.HumanoidSlotType): Promise<void> {
        this.weaponModel = await GameObjPool.asyncSpawn(prefabId, mwext.GameObjPoolSourceType.Prefab) as mw.Model;
        this.getPlayer.character.attachToSlot(this.weaponModel, slotType);
        this.weaponModel.localTransform.position = mw.Vector.zero;
        this.weaponModel.localTransform.rotation = mw.Rotation.zero;
        console.error(`playerId = ${this.playerId}的玩家 "${this.weaponModel ? "武器加载完成" : "武器加载失败"}`);
        this.fireAnchor = this.weaponModel.getChildByName("FireAnchor") as mw.Model;
        if (this.getPlayer.playerId == Player.localPlayer.playerId) this.getWeaponModuleC.setFireAnchor(this.fireAnchor);
    }

    private despawnWeapon(): void {
        if (!this.weaponModel) return;
        GameObjPool.despawn(this.weaponModel);
    }

    private weaponState(): void {
        if (!this.weaponModel) return;
        this.weaponModel.setVisibility(this.isVisibility);
    }
    //#endregion

    //#region Projectile
    private projectilePropElement: IProjectilePropElement = null;
    private fire(): void {
        if (!this.fireData) return;
        // console.error("fireData = " + this.fireData);
        let data = this.fireData.split("|");
        if (data.length < 3) return;
        let shootDir = Utils.stringToVector(data[0]);
        let projectileType = parseInt(data[1]);
        let attackIndex = parseInt(data[2]);

        if (!this.getPlayer || !this.fireAnchor) return;

        this.projectilePropElement = GameConfig.ProjectileProp.getElement(this.weaponId);
        if (!this.projectilePropElement || !this.weaponPropElement) return;

        console.error(`playerId = ${this.playerId}的玩家 发射一枚子弹`);
        this.prepareFire(this.getPlayer.character.gameObjectId, this.fireAnchor.worldTransform.position, shootDir, projectileType, attackIndex);
    }

    private async prepareFire(characterId: string, firePosition: mw.Vector, shootDir: mw.Vector, projectileType: ProjectileType, attackIndex: number): Promise<void> {
        let prefabId = this.projectilePropElement.PrefabId;
        let fireSound = this.projectilePropElement.FireSound;
        let hitEffect = this.projectilePropElement.HitEffect;
        let hitEffectScale = this.projectilePropElement.HitEffectScale;
        let projectileCount = this.weaponPropElement.NormalBulletCount[attackIndex];
        let fireInterval = this.weaponPropElement.NormalFireInterval[attackIndex];
        this.calculateFire(characterId, prefabId, hitEffect, hitEffectScale, firePosition, shootDir, projectileType, fireSound);
        for (let i = 0; i < projectileCount - 1; ++i) {
            await new Promise<void>((resolve: () => void) => {
                setTimeout(() => {
                    this.calculateFire(characterId, prefabId, hitEffect, hitEffectScale, firePosition, shootDir, projectileType, fireSound);
                    return resolve();
                }, fireInterval * 1000);
            });
        }
    }

    private calculateFire(characterId: string, prefabId: string, hitEffect: string, hitEffectScale: mw.Vector, firePosition: mw.Vector,
        shootDir: mw.Vector, projectileType: ProjectileType, fireSound: string): void {
        this.startFire(characterId, prefabId, hitEffect, hitEffectScale, firePosition, shootDir, projectileType);
        this.playFireSound(firePosition, fireSound);
    }

    private startFire(characterId: string, projectileId: string, hitEffect: string, hitEffectScale: mw.Vector, firePosition: mw.Vector, startDirection: mw.Vector, projectileType: ProjectileType): void {
        let projectile: Projectile = null;
        let targetPosition: mw.Vector = null;
        let paths: mw.Vector[] = null;
        if (projectileType == ProjectileType.ArcTracing_Weak) {
            targetPosition = Utils.getRecentPlayerLoc(characterId, firePosition, startDirection);
            if (!targetPosition) targetPosition = Utils.getRecentTargetLoc(firePosition, startDirection);
            paths = (targetPosition == null) ? null : Utils.getArcTracingPoints(firePosition, targetPosition);
            if (mw.SystemUtil.isPIE) this.testPaths(paths);
        }
        if (Helper.inactiveBullets.has(projectileId)) {
            let projectiles = Helper.inactiveBullets.get(projectileId);
            if (projectiles.length > 0) {
                projectile = projectiles.shift();
                projectile.initFire(characterId, firePosition, startDirection, projectileType, paths);
            } else {
                projectile = new Projectile(characterId, projectileId, hitEffect,
                    hitEffectScale, firePosition, startDirection, projectileType, paths);
            }
        } else {
            projectile = new Projectile(characterId, projectileId, hitEffect,
                hitEffectScale, firePosition, startDirection, projectileType, paths);
        }

        if (Helper.activeBulletMap.has(projectileId)) {
            Helper.activeBulletMap.get(projectileId).add(projectile);
        } else {
            Helper.activeBulletMap.set(projectileId, new Set<Projectile>().add(projectile));
        }
    }

    private playFireSound(firePosition: mw.Vector, fireSound: string): void {
        SoundService.play3DSound(fireSound, firePosition);
    }

    private gos: mw.GameObject[] = [];
    private async testPaths(paths: mw.Vector[]): Promise<void> {
        if (!paths) return;
        if (this.gos.length >= paths.length) {
            for (let i = 0; i < paths.length; ++i) {
                this.gos[i].worldTransform.scale = mw.Vector.one.multiply(0.1);
                this.gos[i].worldTransform.position = paths[i];
                this.gos[i].setVisibility(true);
            }
            for (let i = paths.length; i < this.gos.length; ++i) {
                this.gos[i].setVisibility(false);
            }
        } else {
            for (let i = 0; i < this.gos.length; ++i) {
                this.gos[i].worldTransform.scale = mw.Vector.one.multiply(0.1);
                this.gos[i].worldTransform.position = paths[i];
                this.gos[i].setVisibility(true);
            }
            for (let i = this.gos.length; i < paths.length; ++i) {
                let go = await mw.GameObject.asyncSpawn("197386") as mw.Model;
                go.setCollision(mw.PropertyStatus.Off);
                go.worldTransform.scale = mw.Vector.one.multiply(0.1);
                go.worldTransform.position = paths[i];
                this.gos.push(go);
            }
        }
    }

    //#endregion
}