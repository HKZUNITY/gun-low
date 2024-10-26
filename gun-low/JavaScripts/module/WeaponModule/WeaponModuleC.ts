import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../config/GameConfig";
import { IWeaponPropElement } from "../../config/WeaponProp";
import { Helper } from "../../tools/Helper";
import Utils from "../../tools/Utils";
import HUDModuleC from "../HUDModule/HUDModuleC";
import { Projectile } from "./Projectile";
import { ProjectileType } from "./WeaponData";
import WeaponModuleS from "./WeaponModuleS";

export default class WeaponModuleC extends ModuleC<WeaponModuleS, null> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private currentCamera: mw.Camera = null;
    private get getCurrentCamera(): mw.Camera {
        if (this.currentCamera == null) {
            this.currentCamera = Camera.currentCamera;
        }
        return this.currentCamera;
    }

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindEventAction();
    }

    private bindEventAction(): void {
        this.getHUDModuleC.onNormalAction.add(this.normalIntervalAttack.bind(this));
        this.getHUDModuleC.onReloadAction.add(this.reloadButtet.bind(this));
        //#region KeyDown
        let isNormal = true;
        InputUtil.onKeyDown(mw.Keys.R, () => {
            isNormal = !isNormal;
            this.switchProjectileType(isNormal ? ProjectileType.Normal : ProjectileType.ArcTracing_Weak);
        });
        //#endregion
    }

    //#region Switch Weapon
    private currentWeaponId: number = 0;
    private weaponPropElement: IWeaponPropElement = null;
    private bulletCount: number = 0;
    private weaponIcon: string = "278406";
    private weaponName: string = "神兵弓箭";
    public switchWeaponData(weaponId: number): void {
        if (this.currentWeaponId == weaponId) return;
        this.setWeaponPropData(weaponId);
        this.switchWeapon();
    }

    public net_switchWeaponData(weaponId: number): void {
        this.setWeaponPropData(weaponId);
    }

    private setWeaponPropData(weaponId: number): void {
        this.currentWeaponId = weaponId;
        this.weaponPropElement = GameConfig.WeaponProp.getElement(this.currentWeaponId);
        Helper.damage = this.weaponPropElement.Damage;
        this.updateNormalData();
        Notice.showDownNotice("武器装备成功");
    }

    private switchWeapon(): void {
        this.server.net_switchWeapon(this.currentWeaponId);
    }

    public switchProjectileType(projectileType: ProjectileType): void {
        this.currentProjectileType = projectileType;
    }

    private fireAnchor: mw.Model = null;
    public setFireAnchor(fireAnchor: mw.Model): void {
        this.fireAnchor = fireAnchor;
    }
    //#endregion

    //#region Normal
    private normalIntervalId: any = null;
    private normalIntervalAttack(isPress: boolean): void {
        if (isPress) {
            this.normalAttack();
            this.normalIntervalId = TimeUtil.setInterval(this.normalAttack.bind(this), 0.1);
            this.switchFireOn();
        } else {
            TimeUtil.clearInterval(this.normalIntervalId);
            this.switchFireOff();
        }
    }

    private normalAnims: string[] = [];
    private normalAttackLength: number = 0;
    private normalAnimTimes: number[] = [];
    private normalAtkTime: number[] = [];
    private normalAttackIndex: number = -1;
    private updateNormalData(): void {
        this.normalAnims = this.weaponPropElement.NormalAnims;
        this.normalAttackLength = this.normalAnims.length;
        this.normalAnimTimes = this.weaponPropElement.NormalAnimTimes;
        this.normalAtkTime = this.weaponPropElement.NormalAtkTime;
        this.normalAttackIndex = 0;
        this.bulletCount = this.weaponPropElement.BulletCount;
        this.weaponIcon = this.weaponPropElement.WeaponIcon;
        this.weaponName = this.weaponPropElement.WeaponName;
        this.getHUDModuleC.updateGunPropUI(this.weaponIcon, this.bulletCount, this.weaponName);
    }

    private isCanNormalAttack: boolean = true;
    private currentProjectileType: ProjectileType = ProjectileType.Normal;
    private normalAttack(): void {
        if (!this.isCanNormalAttack || !this.fireAnchor || this.bulletCount <= 0) return;
        if (this.normalAttackIndex >= this.normalAttackLength) this.normalAttackIndex = 0;
        this.updateNormalAttackState();
        this.resetNormalAttackIndex();
        let shootDir = this.calculateFireDirection(this.getCurrentCamera.worldTransform, this.fireAnchor.worldTransform.position);
        this.server.net_fireNormalAttack(shootDir, this.currentWeaponId, this.normalAttackIndex++, this.currentProjectileType);
        this.bulletCount--;
        if (this.bulletCount <= 0) this.reloadButtet(1);
        this.getHUDModuleC.updateBulletCount(this.bulletCount);
        TimeUtil.delaySecond(this.normalAtkTime[this.normalAttackIndex - 1]).then(() => {
            this.getHUDModuleC.startAimUITween();
        });
    }

    private updateNormalAttackState(): void {
        this.isCanNormalAttack = false;
        TimeUtil.delaySecond(this.normalAtkTime[this.normalAttackIndex]).then(() => {
            this.isCanNormalAttack = true;
        });
    }

    private normalAttackTimeoutId: any = null;
    private clearNormalAttackTimeout(): void {
        if (this.normalAttackTimeoutId) {
            clearTimeout(this.normalAttackTimeoutId);
            this.normalAttackTimeoutId = null;
        }
    }
    private resetNormalAttackIndex(): void {
        this.clearNormalAttackTimeout();
        this.normalAttackTimeoutId = setTimeout(() => {
            this.normalAttackIndex = 0;
            if (!this.isCanNormalAttack) this.isCanNormalAttack = true;
        }, this.normalAnimTimes[this.normalAttackIndex] * 1000);
    }
    //#endregion

    //#region Fov
    private camera: mw.Camera = null;
    private get getCamera(): mw.Camera {
        if (this.camera == null) {
            this.camera = Camera.currentCamera;
        }
        return this.camera;
    }
    /* 焦距变化标识 */
    private isZooming: boolean = false;
    /* 瞄准状态标识 */
    private isAimming: boolean = false;
    /**瞄准聚焦速度 */
    private aimSpeed: number = 90;
    /**瞄准FOV */
    private aimCameraFov: number = 90;
    /**装备FOV */
    private equipmentCameraFov = 110;

    private switchFireOn(): void {
        this.isZooming = true;
        this.zoomIn();
    }

    private switchFireOff(): void {
        this.isZooming = true;
        this.zoomOut();
    }

    private zoomIn() {
        if (this.getCamera == null) return;
        this.isAimming = true;
    }

    private zoomOut() {
        if (this.getCamera == null) return;
        this.isAimming = false;
    }

    private cameraUpdate(dt: number) {
        if (!this.isZooming) return;
        if (this.isAimming) {
            this.getCamera.fov -= dt * this.aimSpeed;
            if (this.getCamera.fov < this.aimCameraFov) {
                this.getCamera.fov = this.aimCameraFov;
                this.isZooming = false;
            }
        } else {
            this.getCamera.fov += dt * this.aimSpeed;
            if (this.getCamera.fov > this.equipmentCameraFov) {
                this.getCamera.fov = this.equipmentCameraFov;
                this.isZooming = false;
            }
        }
    }
    //#endregion

    //#region 
    private async reloadButtet(delaySecond: number = 0): Promise<void> {
        if (!this.weaponPropElement || this.bulletCount == this.weaponPropElement.BulletCount) return;
        await TimeUtil.delaySecond(delaySecond);
        this.server.net_reload(this.weaponPropElement.ReloadAnimation, this.weaponPropElement.ReloadSound);
        TimeUtil.delaySecond(1).then(this.addReloadBullet.bind(this));
    }

    private addReloadBullet(): void {
        if (!this.weaponPropElement) return;
        this.bulletCount = this.weaponPropElement.BulletCount;
        this.getHUDModuleC.updateBulletCount(this.bulletCount);
    }
    //#endregion

    protected onUpdate(dt: number): void {
        this.cameraUpdate(dt);
        if (Helper.activeBulletMap.size == 0) return;
        Helper.activeBulletMap.forEach((value: Set<Projectile>) => {
            value.forEach((projectile: Projectile) => {
                projectile.update(dt);
            });
        });
    }

    private calculateFireDirection(cameraWorldTransform: mw.Transform, firePosition: mw.Vector): mw.Vector {
        let cameraShootDir = Camera.currentCamera.worldTransform.clone().getForwardVector().clone();
        let endLoc = cameraShootDir.multiply(100000).add(cameraWorldTransform.clone().position);
        let shootDir = endLoc.clone().subtract(firePosition);
        let hitRes = QueryUtil.lineTrace(cameraWorldTransform.clone().position, endLoc, true, mw.SystemUtil.isPIE);
        hitRes = hitRes.filter(e => { return !(e.gameObject instanceof mw.Trigger); });
        console.error(`hitRes: ${hitRes.length}`);
        if (hitRes && hitRes.length > 0 && mw.Vector.dot(hitRes[0].gameObject.worldTransform.position.clone().subtract(firePosition), shootDir) > 0) {
            shootDir = hitRes[0].impactPoint.clone().subtract(firePosition);
        }
        return shootDir.normalized;
    }
}