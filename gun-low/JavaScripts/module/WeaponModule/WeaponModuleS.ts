import { GameConfig } from "../../config/GameConfig";
import { MapEx } from "../../tools/MapEx";
import Utils from "../../tools/Utils";
import ShopData, { ShopType } from "../ShopModule/ShopData";
import Weapon from "./Weapon";
import { ProjectileType } from "./WeaponData";
import WeaponModuleC from "./WeaponModuleC";

export default class WeaponModuleS extends ModuleS<WeaponModuleC, null> {
    protected onPlayerEnterGame(player: mw.Player): void {
        let gunId = MapEx.get(DataCenterS.getData(player, ShopData).useShopIds, ShopType.Gun);
        this.initWeapon(player, gunId);
    }

    protected onPlayerLeft(player: mw.Player): void {
        let playerId = player.playerId;
        this.destoryWeapon(playerId);
    }

    //#region Normal Attack
    @Decorator.noReply()
    public net_fireNormalAttack(shootDir: mw.Vector, weaponId: number,
        attackIndex: number, projectileType: ProjectileType): void {
        this.fireNormalAttack(this.currentPlayer, shootDir, weaponId, attackIndex, projectileType);
    }

    private async fireNormalAttack(player: mw.Player, shootDir: mw.Vector,
        weaponId: number, attackIndex: number, projectileType: ProjectileType): Promise<void> {
        let weaponPropElement = GameConfig.WeaponProp.getElement(weaponId);
        let atkAnimation = weaponPropElement.NormalAnims[attackIndex];
        if (atkAnimation != "-1") {
            await Utils.asyncDownloadAsset(atkAnimation);
            player.character.loadAnimation(atkAnimation).play();
        }
        let atkTime = weaponPropElement.NormalAtkTime[attackIndex];
        TimeUtil.delaySecond(atkTime).then(() => {
            if (!this.playerWeaponMap.has(player.playerId)) return;
            let fireData = Utils.vectorToString(shootDir) + "|" + projectileType + "|" + attackIndex;
            this.playerWeaponMap.get(player.playerId).fireData = fireData;
        });
    }

    @Decorator.noReply()
    public net_reload(reloadAniId: string, reloadSoundId: string): void {
        this.reload(this.currentPlayer, reloadAniId, reloadSoundId);
    }

    private async reload(player: mw.Player, reloadAniId: string, reloadSoundId: string): Promise<void> {
        await Utils.asyncDownloadAsset(reloadAniId);
        player.character.loadAnimation(reloadAniId).play();
        SoundService.play3DSound(reloadSoundId, player.character.worldTransform.position);
    }
    //#endregion

    //#region Weapon
    private playerWeaponMap: Map<number, Weapon> = new Map<number, Weapon>();
    private initWeapon(player: mw.Player, weaponId: number): Promise<void> {
        let playerId = player.playerId;
        if (this.playerWeaponMap.has(playerId)) return;
        let weapon = player.character.addComponent(Weapon, true);
        let playerId_WeaponId = playerId + "|" + weaponId;
        weapon.playerId_WeaponId = playerId_WeaponId;
        this.playerWeaponMap.set(playerId, weapon);

        this.getClient(player).net_switchWeaponData(weaponId);
    }

    @Decorator.noReply()
    public net_switchWeapon(weaponId: number): void {
        let player = this.currentPlayer;
        this.switchWeapon(player, weaponId);
    }

    private async switchWeapon(player: mw.Player, weaponId: number): Promise<void> {
        let playerId = player.playerId;
        if (!this.playerWeaponMap.has(playerId)) this.initWeapon(player, weaponId);
        if (!this.playerWeaponMap.has(playerId)) return;
        let weapon = this.playerWeaponMap.get(playerId);
        if (!weapon) return;
        weapon.weaponId = weaponId;
    }

    private destoryWeapon(playerId: number): void {
        if (!this.playerWeaponMap.has(playerId)) return;
        let weapon = this.playerWeaponMap.get(playerId);
        if (!weapon) return;
        weapon.weaponId = -1;
    }

    public setWeaponState(playerId: number, isVisibility: boolean): void {
        if (!this.playerWeaponMap.has(playerId)) return;
        this.playerWeaponMap.get(playerId).isVisibility = isVisibility;
    }
    //#endregion
}