import { GameConfig } from "../config/GameConfig";
import AdPanel from "../module/AdModule/ui/AdPanel";
import GlobalData from "../tools/GlobalData";
import Utils from "../tools/Utils";

@Component
export default class ChangeClothes extends Script {
    @mw.Property({ displayName: "ShareId", group: "脚本设置" })
    private shareId: number = 0;

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.onStartCS();
        if (mw.SystemUtil.isClient()) {
            this.useUpdate = false;
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.useUpdate = false;
            this.onStartS();
        }
    }

    /**客户端服务端的onStart */
    private onStartCS(): void {
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

    /**------------------------------------------- 客户端 ------------------------------------------------ */
    /**客户端的OnStart */
    private onStartC(): void {
        this.initNpc();
    }

    private initNpc(): void {
        let trigger = this.gameObject as mw.Trigger;
        let npc = trigger.parent as mw.Character;
        if (this.shareId > 0) Utils.applySharedIdByConfig(npc, this.shareId);
        trigger.onEnter.add((char: mw.Character) => {
            if (char.gameObjectId != Player.localPlayer.character.gameObjectId) return;
            if (!GlobalData.isOpenIAA) {
                Utils.applySharedIdByConfig(char, this.shareId, true);
            } else {
                mw.UIService.getUI(AdPanel).showRewardAd(() => {
                    Utils.applySharedIdByConfig(char, this.shareId, true);
                }, GameConfig.Language.FreeToUse.Value, GameConfig.Language.Cancel.Value, GameConfig.Language.FreeToUse.Value);
            }
        });
    }

    /**客户端的update */
    private onUpdateC(dt: number): void {

    }
    /**------------------------------------------- 客户端 ------------------------------------------------ */

    /**------------------------------------------- 服务端 ------------------------------------------------ */
    /**服务端的OnStart */
    private onStartS(): void {
    }

    /**服务端的update */
    private onUpdateS(dt: number): void {

    }
    /**------------------------------------------- 服务端 ------------------------------------------------ */
}