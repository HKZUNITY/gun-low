import ConfirmPanel from "../../common/ConfirmPanel";
import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../config/GameConfig";
import GlobalData from "../../tools/GlobalData";
import Utils from "../../tools/Utils";
import AdPanel from "../AdModule/ui/AdPanel";
import CoinModuleC from "../CoinModule/CoinModuleC";
import { MorphModuleC } from "../MorphModule/MorphModule";
import ShopModuleC from "../ShopModule/ShopModuleC";
import WeaponModuleC from "../WeaponModule/WeaponModuleC";

@Component
export default class TryOutGun extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        } else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    /**--------------------------------【客户端】-------------------------------- */
    private morphModuleC: MorphModuleC = null;
    private get getMorphModuleC(): MorphModuleC {
        if (this.morphModuleC == null) {
            this.morphModuleC = ModuleService.getModule(MorphModuleC);
        }
        return this.morphModuleC;
    }

    private shopModuleC: ShopModuleC = null;
    private get getShopModuleC(): ShopModuleC {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }

    private adPanel: AdPanel = null;
    private get getAdPanel(): AdPanel {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }

    private confirmPanel: ConfirmPanel = null;
    private get getConfirmPanel(): ConfirmPanel {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }

    private coinModuleC: CoinModuleC = null;
    private get getCoinModuleC(): CoinModuleC {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }

    private weaponModuleC: WeaponModuleC = null;
    private get getWeaponModuleC(): WeaponModuleC {
        if (!this.weaponModuleC) {
            this.weaponModuleC = ModuleService.getModule(WeaponModuleC);
        }
        return this.weaponModuleC;
    }

    /**客户端的onStart */
    private async onStartC(): Promise<void> {
        await ModuleService.ready();
        this.useUpdate = false;
        this.initGunAnchor();
        this.initUIPanel();
        this.initTrigger();
    }

    private gunAnchor: mw.Model = null;
    private initGunAnchor(): void {
        this.gunAnchor = this.gameObject.getChildByName("gunAnchor") as mw.Model;
        this.switchGunModel(Utils.randomInt(10, 15));
    }

    private initUIPanel(): void {
        this.adPanel = UIService.getUI(AdPanel);
    }

    private initTrigger(): void {
        let trigger = this.gameObject as mw.Trigger;
        trigger.onEnter.add(this.onTriggerEnter.bind(this));
    }

    private onTriggerEnter(character: mw.Character): void {
        if (Player.localPlayer.character != character) return;
        let gunElement = GameConfig.WeaponProp.getElement(this.gunkey);
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                if (!this.gunkey) return;
                this.switchGun();
                this.switchGunModel(Utils.randomInt(10, 16));
            }, StringUtil.format(GameConfig.Language.FreeUseOfOneRound.Value, gunElement.WeaponName), GameConfig.Language.Cancel.Value, GameConfig.Language.FreeToUse.Value);
        } else {
            if (!this.gunkey) return;
            this.switchGun();
            this.switchGunModel(Utils.randomInt(10, 16));
        }
    }

    private switchGun(): void {
        if (this.getMorphModuleC.getIsMorph) {
            this.getShopModuleC.setUseShopId_Gun(this.gunkey);
        } else {
            this.getWeaponModuleC.switchWeaponData(this.gunkey);
        }
    }

    private gunModel: mw.Model = null;
    private gunkey: number = null;
    private async switchGunModel(key: number): Promise<void> {
        if (this.gunkey == key) return;
        this.gunkey = key;
        if (this.gunModel) GameObjPool.despawn(this.gunModel);
        let gunElement = GameConfig.WeaponProp.getElement(this.gunkey);
        let gunId = gunElement.PrefabId;
        await Utils.asyncDownloadAsset(gunId);
        this.gunModel = await GameObjPool.asyncSpawn(gunId, mwext.GameObjPoolSourceType.Prefab);
        this.gunModel.parent = this.gunAnchor;
        this.gunModel.localTransform.position = gunElement.GunLoc;
        this.gunModel.localTransform.rotation = new mw.Rotation(0, 15, 0);
        this.gunModel.localTransform.scale = gunElement.GunScale;
    }

    /**客户端的onUpdate */
    private onUpdateC(dt: number): void {

    }
    /**--------------------------------【客户端】-------------------------------- */

    /**--------------------------------【服务端】-------------------------------- */
    /**服务端的onStart */
    private onStartS(): void {
        this.useUpdate = false;
    }

    /**服务端的onUpdate */
    private onUpdateS(dt: number): void {

    }
    /**--------------------------------【服务端】-------------------------------- */

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}