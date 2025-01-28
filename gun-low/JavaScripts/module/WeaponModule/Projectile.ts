import { Helper } from "../../tools/Helper";
import { PrefabEvent } from "../../tools/PrefabEvent";
import { ProjectileType } from "./WeaponData";

export class Projectile {
    private curCharacterId: string = null;
    private get getCurCharacterId(): string {
        if (this.curCharacterId == null) {
            this.curCharacterId = Player.localPlayer.character.gameObjectId;
        }
        return this.curCharacterId;
    }

    private characterId: string = "";
    private projectileId: string = "";
    private hitEffect: string = "";
    private hitEffectScale: mw.Vector = mw.Vector.one;
    private startPosition: mw.Vector = mw.Vector.zero;
    private startDirection: mw.Vector = mw.Vector.zero;
    private displacement: mw.Vector = mw.Vector.zero;
    private projectileType: ProjectileType = ProjectileType.Normal;
    private paths: mw.Vector[] = [];

    constructor(characterId: string, projectileId: string, hitEffect: string, hitEffectScale: mw.Vector, startPosition: mw.Vector, startDirection: mw.Vector,
        projectileType: ProjectileType, paths: mw.Vector[]) {
        this.characterId = characterId;
        this.projectileId = projectileId;
        this.hitEffect = hitEffect;
        this.hitEffectScale = hitEffectScale;
        this.startPosition = startPosition;
        this.startDirection = startDirection;
        this.displacement = mw.Vector.multiply(startDirection, 10000, this.displacement);
        this.projectileType = projectileType;
        this.paths = paths;
        this.pathIndex = 0;
        this.initBullet();
    }

    private projectile: mw.GameObject = null;
    private async initBullet(): Promise<void> {
        this.projectile = await GameObjPool.asyncSpawn(this.projectileId, mwext.GameObjPoolSourceType.Prefab);
        this.projectile.worldTransform.position = Helper.recyclePosition;
        this.prepareFire();
    }

    private checkTarget(hitTargets: mw.HitResult[]): void {
        if (!hitTargets || hitTargets.length == 0) return;
        // let isRecycle: boolean = true;
        for (let i = 0; i < hitTargets.length; ++i) {
            // isRecycle = true;
            let hitTarget = hitTargets[i]?.gameObject;
            if (hitTarget instanceof mw.Character) {
                if (hitTarget.gameObjectId != this.characterId) {
                    if (this.getCurCharacterId == this.characterId) {
                        PrefabEvent.PrefabEvtFight.hit(this.characterId, hitTarget.gameObjectId, Helper.damage, this.projectile.worldTransform.position);
                    }
                    break;
                }
            }
            // if (hitTarget.tag != `go`) isRecycle = false;
        }
        // if (isRecycle) 
        this.recycleThis();
    }

    private updateCheck(): void {
        let hitTargets = QueryUtil.lineTrace(this.preLocation, this.currentLocation, true, mw.SystemUtil.isPIE);
        if (!hitTargets || hitTargets.length == 0) return;
        this.checkTarget(hitTargets);
    }

    private onTriggerEnter(go: mw.GameObject): void {
        if (go instanceof mw.Character) {
            if (go.gameObjectId == this.characterId) return;//打到了自己
            if (go instanceof Character) {//打到了玩家
                if (this.getCurCharacterId == this.characterId) {//是自己发射的子弹
                    PrefabEvent.PrefabEvtFight.hit(this.characterId, go.gameObjectId, Helper.damage, this.projectile.worldTransform.position);
                    console.error("击中其他玩家");
                }
            }
        }
        this.recycleThis();
    }

    public initFire(ownerId: string, startPosition: mw.Vector, startDirection: mw.Vector,
        projectileType: ProjectileType, paths: mw.Vector[]): void {
        this.characterId = ownerId;
        this.startPosition = startPosition;
        this.startDirection = startDirection;
        this.displacement = mw.Vector.multiply(startDirection, 10000, this.displacement);
        this.projectileType = projectileType;
        this.paths = paths;
        this.pathIndex = 0;
        this.prepareFire();
        this.setThisVisibility(true);
    }

    private prepareFire(): void {
        if (!this.projectile) return;
        if (this.projectileType == ProjectileType.ArcTracing_Weak && this.paths) {
            if (this.pathIndex + 1 < this.paths.length) {
                mw.Vector.subtract(this.paths[this.pathIndex + 1], this.paths[this.pathIndex], this.startDirection);
                this.startDirection = this.startDirection.normalized;
            }
        }
        this.projectile.worldTransform.position = this.startPosition;
        this.preLocation = this.startPosition;
        this.projectile.worldTransform.rotation = new mw.Rotation(this.startDirection, mw.Vector.up);
        this.isUpdate = true;
        this.setRecycleTimeout();
    }

    private isUpdate: boolean = false;
    public update(dt: number): void {
        if (!this.isUpdate) return;
        if (this.projectileType == ProjectileType.Normal || !this.paths) {
            this.updateThisPosition_Normal(dt);
        } else if (this.projectileType == ProjectileType.ArcTracing_Weak && this.paths) {
            this.updateThisPosition_ArcTracing();
        }
    }

    private stride: mw.Vector = mw.Vector.zero;
    private currentLocation: mw.Vector = mw.Vector.zero;
    private preLocation: mw.Vector = mw.Vector.zero;
    private updateThisPosition_Normal(dt: number): void {
        if (!this.projectile) return;
        this.stride = mw.Vector.multiply(this.displacement, dt, this.stride);
        this.currentLocation = this.projectile.worldTransform.position;
        this.currentLocation.x += this.stride.x;
        this.currentLocation.y += this.stride.y;
        this.currentLocation.z += this.stride.z;
        this.projectile.worldTransform.position = this.currentLocation;
        this.updateCheck();
        this.preLocation = this.currentLocation;
    }

    private pathIndex: number = 0;
    private updateThisPosition_ArcTracing(): void {
        if (!this.projectile || !this.paths || this.paths?.length == 0) return;
        this.currentLocation = this.projectile.worldTransform.position;
        if (mw.Vector.subtract(this.currentLocation, this.paths[this.pathIndex]).length <= 10) {
            if (this.pathIndex < this.paths.length - 1) {
                mw.Vector.subtract(this.paths[this.pathIndex + 1], this.paths[this.pathIndex], this.startDirection);
                this.startDirection = this.startDirection.normalized;
                this.projectile.worldTransform.rotation = new mw.Rotation(this.startDirection, mw.Vector.up);
                this.pathIndex++;
                // console.error("this.pathIndex", this.pathIndex);
            }
        }
        mw.Vector.lerp(this.currentLocation, this.paths[this.pathIndex], 0.6, this.currentLocation);
        this.projectile.worldTransform.position = this.currentLocation;
        if (mw.Vector.subtract(this.currentLocation, this.paths[this.paths.length - 1]).length <= 10) {
            this.recycleThis();
        }
    }

    private setThisVisibility(visible: boolean): void {
        if (!this.projectile) return;
        this.projectile.setVisibility(visible, true);
    }

    private recycleTimeOutId: any = null;
    private setRecycleTimeout(): void {
        this.clearRecycleTimeOut();
        this.recycleTimeOutId = setTimeout(() => {
            this.recycleThis();
        }, 10 * 1000);
    }

    private clearRecycleTimeOut(): void {
        if (!this.recycleTimeOutId) return;
        clearTimeout(this.recycleTimeOutId);
        this.recycleTimeOutId = null;
    }

    private recycleThis(): void {
        this.play3DSound("205238"); //208300
        this.playHitEffect();
        this.recycleProjectile();
        // console.error("recycle");
    }

    private play3DSound(soundId: string): void {
        SoundService.play3DSound(soundId, this.projectile.worldTransform.position);
    }

    private playHitEffect(): void {
        EffectService.playAtPosition(this.hitEffect, this.projectile.worldTransform.position, { scale: this.hitEffectScale });
    }

    private recycleProjectile(): void {
        if (!Helper.activeBulletMap.has(this.projectileId) || !Helper.activeBulletMap.get(this.projectileId).has(this)) return;
        Helper.activeBulletMap.get(this.projectileId).delete(this);
        if (Helper.inactiveBullets.has(this.projectileId)) {
            Helper.inactiveBullets.get(this.projectileId).push(this);
        } else {
            Helper.inactiveBullets.set(this.projectileId, [this]);
        }
        this.projectile.worldTransform.position = Helper.recyclePosition;
        this.setThisVisibility(false);
        this.clearRecycleTimeOut();
        this.isUpdate = false;
    }
}