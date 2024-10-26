import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../config/GameConfig";
import { EventType } from "../../tools/EventType";
import { MapEx } from "../../tools/MapEx";
import Utils from "../../tools/Utils";
import CoinModuleC from "../CoinModule/CoinModuleC";
import HUDModuleC from "../HUDModule/HUDModuleC";
import WeaponModuleC from "../WeaponModule/WeaponModuleC";
import ShopData, { PriceType, ShopType } from "./ShopData";
import ShopModuleS from "./ShopModuleS";
import ShopPanel from "./ui/ShopPanel";

export default class ShopModuleC extends ModuleC<ShopModuleS, ShopData> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private coinModuleC: CoinModuleC = null;
    private get getCoinModuleC(): CoinModuleC {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }

    private shopPanel: ShopPanel = null;
    private get getShopPanel(): ShopPanel {
        if (this.shopPanel == null) {
            this.shopPanel = UIService.getUI(ShopPanel);
        }
        return this.shopPanel;
    }

    private weaponModuleC: WeaponModuleC = null;
    private get getWeaponModuleC(): WeaponModuleC {
        if (!this.weaponModuleC) {
            this.weaponModuleC = ModuleService.getModule(WeaponModuleC);
        }
        return this.weaponModuleC;
    }

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.initModule();
        this.bindActions();
        this.initEvent();
    }

    private initModule(): void {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.coinModuleC = ModuleService.getModule(CoinModuleC);
    }

    private bindActions(): void {
        this.getHUDModuleC.onOpenShopAction.add(this.bindOpenShopAction.bind(this));
    }

    private initEvent(): void {
        Event.addLocalListener(EventType.TryOutGun, this.setCharacterGun.bind(this));
    }

    private bindOpenShopAction(): void {
        if (this.getHUDModuleC.getIsMorph && !this.localPlayer.character.getVisibility()) {
            Notice.showDownNotice("变身状态不可打开商店");
            return;
        }
        this.getShopPanel.show();
        this.onSwitchCameraAction.call(1);
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }

    protected onEnterScene(sceneType: number): void {
        this.initShopData();
        this.initShopCamera();
        this.initShopAnchor();
        this.initShopNpc();
        this.initTrailingAnchor();
    }

    private shopIds: MapEx.MapExClass<number[]> = {};//1-Gun,2-Role,3-Trailing
    private useShopIds: MapEx.MapExClass<number> = {};//1-Gun,2-Role,3-Trailing
    private initShopData(): void {
        this.shopIds = this.data.shopIds;
        this.useShopIds = this.data.useShopIds;
        // console.error("shopIds = " + JSON.stringify(this.shopIds));
        this.initUseShopItem();
        this.shopPanel = UIService.getUI(ShopPanel);
    }

    private initUseShopItem(): void {
        // if (MapEx.has(this.useShopIds, ShopType.Gun)) this.setCharacterGun();
        if (MapEx.has(this.useShopIds, ShopType.Role)) this.setCharacterDescription(MapEx.get(this.useShopIds, ShopType.Role));
        if (MapEx.has(this.useShopIds, ShopType.Trailing)) this.setCharacterTrailing(MapEx.get(this.useShopIds, ShopType.Trailing));
    }

    private isAds(shopId: number, shopType: ShopType): boolean {
        switch (shopType) {
            case ShopType.Gun:
                return GameConfig.WeaponProp.getElement(shopId).PriceType == PriceType.Ads;
            case ShopType.Role:
                return GameConfig.ROLE.getElement(shopId).PRICETYPE == PriceType.Ads;
            case ShopType.Trailing:
                return GameConfig.TRAILING.getElement(shopId).PRICETYPE == PriceType.Ads;
            default:
                break;
        }
    }

    public setShopId(shopType: ShopType, shopId: number): void {
        if (MapEx.has(this.shopIds, shopType)) {
            MapEx.get(this.shopIds, shopType).push(shopId);
        } else {
            MapEx.set(this.shopIds, shopType, [shopId]);
        }
        if (this.isAds(shopId, shopType)) return;
        this.server.net_setShopId(shopType, shopId);
    }

    public isHasShopId(shopId: number, shopType: ShopType): boolean {
        return MapEx.has(this.shopIds, shopType) && MapEx.get(this.shopIds, shopType).includes(shopId);
    }

    public buyShopItemByCoin(shopId: number, shopType: ShopType): boolean {
        let costPrice = this.getGoodPrice(shopId, shopType);
        if (this.getCoinModuleC.getCoin >= costPrice[1]) {
            this.getCoinModuleC.setCoin(-costPrice[1]);
            this.setShopId(shopType, shopId);
            Notice.showDownNotice("购买成功");
            return true;
        } else {
            Notice.showDownNotice("金币不足");
            this.getCoinModuleC.getCoinByAd();
            return false;
        }
    }

    public buyShopItemByDiamond(shopId: number, shopType: ShopType): boolean {
        let costPrice = this.getGoodPrice(shopId, shopType);
        if (this.getCoinModuleC.getDiamond >= costPrice[0]) {
            this.getCoinModuleC.setDiamond(-costPrice[0]);
            this.setShopId(shopType, shopId);
            Notice.showDownNotice("购买成功");
            return true;
        } else {
            Notice.showDownNotice("钻石不足");
            this.getCoinModuleC.getDiamondByAd(costPrice[0]);
            return false;
        }
    }

    public getGoodPrice(shopId: number, shopType: ShopType): number[] {
        switch (shopType) {
            case ShopType.Gun:
                return GameConfig.WeaponProp.getElement(shopId).WeaponPrices;
            case ShopType.Role:
                return GameConfig.ROLE.getElement(shopId).PRICE;
            case ShopType.Trailing:
                return GameConfig.TRAILING.getElement(shopId).PRICE;
        }
    }

    public useShopItem(shopId: number, shopType: ShopType): void {
        this.previewShopItem(shopId, shopType);
        if (!this.setUseShopId(shopType, shopId)) {
            Notice.showDownNotice("穿戴中");
            return;
        }
        switch (shopType) {
            case ShopType.Gun:
                // this.setCharacterGun(shopId);
                break;
            case ShopType.Role:
                this.setCharacterDescription(shopId);
                break;
            case ShopType.Trailing:
                this.setCharacterTrailing(shopId);
                break;
            default:
                break;
        }
    }

    public setUseShopId_Gun(shopId: number): void {
        if (MapEx.has(this.useShopIds, ShopType.Gun) && MapEx.get(this.useShopIds, ShopType.Gun) == shopId) return;
        MapEx.set(this.useShopIds, ShopType.Gun, shopId);
    }

    public setUseShopId(shopType: ShopType, shopId: number): boolean {
        if (MapEx.has(this.useShopIds, shopType) && MapEx.get(this.useShopIds, shopType) == shopId) return false;
        MapEx.set(this.useShopIds, shopType, shopId);
        if (this.isAds(shopId, shopType)) return true;
        this.server.net_setUseShopId(shopType, shopId);
        return true;
    }

    private setCharacterGun(): void {
        if (this.getHUDModuleC.getIsMorph) return;
        let gunId = MapEx.get(this.useShopIds, ShopType.Gun);
        this.getWeaponModuleC.switchWeaponData(gunId);
    }

    private async setCharacterDescription(shopId: number): Promise<void> {
        let roleId = GameConfig.ROLE.getElement(shopId).ROLEID;
        await Utils.asyncDownloadAsset(roleId);
        this.localPlayer.character.setDescription([roleId]);
        this.localPlayer.character.syncDescription();
        Notice.showDownNotice("皮肤成功穿戴");
    }

    private setCharacterTrailing(shopId: number): void {
        let trailingId = GameConfig.TRAILING.getElement(shopId).TRAILING;
        this.server.net_setCharacterTrailing(trailingId);
        Notice.showDownNotice("尾迹成功穿戴");
    }

    public onSwitchCameraAction: Action1<number> = new Action1<number>();
    private async initShopCamera(): Promise<void> {
        let myCamera = Camera.currentCamera;
        let cameraAnchor = await GameObject.asyncFindGameObjectById("2CA24221");
        let shopCamera: mw.Camera = await GameObject.asyncSpawn<mw.Camera>("Camera",
            {
                replicates: false,
                transform: cameraAnchor.worldTransform
            });
        this.onSwitchCameraAction.add((cameraType: number) => {
            if (cameraType == 0) {
                Camera.switch(myCamera);
                this.shopNpcIntegratedMover.enable = false;
                this.trailingIntegratedMover.enable = false;
                this.setCharacterGun();
            } else {
                Camera.switch(shopCamera, 0.5, mw.CameraSwitchBlendFunction.Linear);
                this.shopNpcIntegratedMover.enable = true;
                this.trailingIntegratedMover.enable = true;
            }
        });
    }

    private shopAnchor: mw.Model = null;
    private shopNpcIntegratedMover: mw.IntegratedMover = null;
    private async initShopAnchor(): Promise<void> {
        this.shopAnchor = await GameObject.asyncFindGameObjectById("1694D9FB") as mw.Model;
        this.shopNpcIntegratedMover = await GameObject.asyncSpawn("IntegratedMover") as mw.IntegratedMover;
        this.shopNpcIntegratedMover.parent = this.shopAnchor;
        this.shopNpcIntegratedMover.localTransform.position = mw.Vector.zero;
        this.shopNpcIntegratedMover.rotationSpeed = new mw.Vector(0, 0, 90);
        this.switchGunModel(MapEx.get(this.useShopIds, ShopType.Gun));
    }

    public switchPreviewShopType(shopType: ShopType): void {
        this.setShopNpcGunState(shopType == ShopType.Gun);
    }

    public previewShopItem(key: number, shopType: ShopType): void {
        switch (shopType) {
            case ShopType.Gun:
                this.switchGunModel(key);
                break;
            case ShopType.Role:
                this.setShopNpcDescription(key);
                break;
            case ShopType.Trailing:
                this.switchTrailing(key);
                break;
            default:
                break;
        }
    }

    private gunModel: mw.Model = null;
    private gunkey: number = null;
    private async switchGunModel(key: number): Promise<void> {
        if (this.gunkey == key) {
            Notice.showDownNotice("正在预览");
            return;
        }
        this.gunkey = key;
        if (this.gunModel) GameObjPool.despawn(this.gunModel);
        let weaponPropElement = GameConfig.WeaponProp.getElement(key);
        let gunId = weaponPropElement.PrefabId;
        await Utils.asyncDownloadAsset(gunId);
        this.gunModel = await GameObjPool.asyncSpawn(gunId, mwext.GameObjPoolSourceType.Prefab);
        this.gunModel.parent = this.shopAnchor;
        this.gunModel.localTransform.position = weaponPropElement.GunLoc;
        this.gunModel.localTransform.rotation = new mw.Rotation(0, 15, 0);
        this.gunModel.localTransform.scale = weaponPropElement.GunScale;
        this.setShopNpcGunState(true);
    }

    private shopNpc: mw.Character = null;
    private async initShopNpc(): Promise<void> {
        this.shopNpc = await GameObject.asyncSpawn("Character") as mw.Character;
        this.shopNpc.parent = this.shopAnchor;
        this.shopNpc.localTransform.position = mw.Vector.zero;
        this.shopNpc.localTransform.rotation = mw.Rotation.zero;
        this.shopNpc.complexMovementEnabled = false;
        this.shopNpc.displayName = "";
        await this.setShopNpcDescription(MapEx.get(this.useShopIds, ShopType.Role));
        Utils.setGameObjectVisibility(this.shopNpc, false);
        Utils.setGameObjectVisibility(this.holdGun, false);
    }

    private roleKey: number = null;
    private async setShopNpcDescription(key: number): Promise<void> {
        if (this.roleKey == key) {
            Notice.showDownNotice("正在预览");
            return;
        }
        this.roleKey = key;
        let roleId = GameConfig.ROLE.getElement(key).ROLEID;
        await Utils.asyncDownloadAsset(roleId);
        this.shopNpc.setDescription([roleId]);
        this.setShopNpcGunState(false);
        await this.setShopNpcState();
    }

    private trailingAnchor: mw.Model = null;
    private trailingIntegratedMover: mw.IntegratedMover = null;
    private async initTrailingAnchor(): Promise<void> {
        this.trailingAnchor = await GameObject.asyncFindGameObjectById("15C7BAA0") as mw.Model;
        this.trailingIntegratedMover = await GameObject.asyncSpawn("IntegratedMover") as mw.IntegratedMover;
        this.trailingIntegratedMover.parent = this.trailingAnchor;
        this.trailingIntegratedMover.localTransform.position = mw.Vector.zero;
        this.trailingIntegratedMover.rotationSpeed = new mw.Vector(0, 0, 360);
    }

    private trailingEffect: number = null;
    private trailingKey: number = null;
    private switchTrailing(key: number): void {
        if (this.trailingKey == key) {
            Notice.showDownNotice("正在预览");
            return;
        }
        this.trailingKey = key;
        if (this.trailingEffect) EffectService.stop(this.trailingEffect);
        this.trailingEffect = EffectService.playOnGameObject(GameConfig.TRAILING.getElement(key).TRAILING, this.trailingAnchor, { loopCount: 0, position: new mw.Vector(50, 0, 0) });
        this.setShopNpcGunState(false);
    }

    private setShopNpcGunState(isShowGun: boolean): void {
        if (this.shopNpc) Utils.setGameObjectVisibility(this.shopNpc, !isShowGun);
        if (this.gunModel) Utils.setGameObjectVisibility(this.gunModel, isShowGun);
    }

    private async setShopNpcState(): Promise<void> {
        if (!this.shopNpc) return;
        await this.switchHoldGunModle();
        await this.switchShopNpcAnimation();
    }

    private holdGun: mw.Model = null;
    private holdGunModelIds: string[] = ["222534", "226213", "122720", "95676"];
    private holdGunScales: mw.Vector[] = [new mw.Vector(1.5, 1.5, 1.5), new mw.Vector(2, 2, 1.5), new mw.Vector(1, 1, 1), new mw.Vector(1, 1, 1)];
    private lastGunModelId: string = "";
    private async switchHoldGunModle(): Promise<void> {
        if (!this.shopNpc) return;
        if (this.holdGun) GameObjPool.despawn(this.holdGun);
        this.lastGunModelId = Utils.randomOneDifferentId(this.holdGunModelIds, this.lastGunModelId);
        await Utils.asyncDownloadAsset(this.lastGunModelId);
        this.holdGun = await GameObjPool.asyncSpawn(this.lastGunModelId, mwext.GameObjPoolSourceType.Asset);
        this.shopNpc.attachToSlot(this.holdGun, mw.HumanoidSlotType.RightHand);
        this.holdGun.localTransform.position = mw.Vector.zero;
        this.holdGun.localTransform.rotation = mw.Rotation.zero;
        this.holdGun.localTransform.scale = this.holdGunScales[this.holdGunModelIds.indexOf(this.lastGunModelId)];
    }

    private maleAnimationIds: string[] = ["97864", "180888", "181135", "97854", "287708"];
    private femaleAnimationIds: string[] = ["97863", "97865", "180888", "287708", "35438"];
    private lastAnimationId: string = "";
    private async switchShopNpcAnimation(): Promise<void> {
        if (!this.shopNpc) return;
        await this.shopNpc.asyncReady();
        let isFemale = (this.shopNpc.description.advance.base.characterSetting.somatotype % 2) == 0;
        this.lastAnimationId = Utils.randomOneDifferentId(isFemale ? this.femaleAnimationIds : this.maleAnimationIds, this.lastAnimationId);
        await Utils.asyncDownloadAsset(this.lastAnimationId);
        let shopNpcAnim = this.shopNpc.loadAnimation(this.lastAnimationId);
        shopNpcAnim.loop = 0;
        shopNpcAnim.play();
    }
    //#region Rotete-Camera
    // public addRoatation(dir: number) {
    //     if (this.npc) {
    //         this.npc.worldTransform.rotation = this.npc.worldTransform.rotation.add(new mw.Rotation(0, 0, -20 * dir))
    //     }
    // }
    //#endregion
}