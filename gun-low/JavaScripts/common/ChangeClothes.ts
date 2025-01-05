import { GameConfig } from "../config/GameConfig";
import AdPanel from "../module/AdModule/ui/AdPanel";
import GlobalData from "../tools/GlobalData";
import Utils from "../tools/Utils";

@Component
export default class ChangeClothes extends Script {
    @mw.Property({ displayName: "ShareId", group: "脚本设置" })
    private shareId: string = "";
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (mw.SystemUtil.isClient()) {
            let trigger = this.gameObject as mw.Trigger;
            let npc = trigger.parent as mw.Character;
            if (this.shareId && this.shareId != "") Utils.applySharedId(npc, this.shareId);
            trigger.onEnter.add((char: mw.Character) => {
                if (char.gameObjectId != Player.localPlayer.character.gameObjectId) return;
                if (!GlobalData.isOpenIAA) {
                    char.setDescription(npc.getDescription());
                    char.asyncReady().then(() => {
                        char.syncDescription();
                    });
                } else {
                    mw.UIService.getUI(AdPanel).showRewardAd(() => {
                        char.setDescription(npc.getDescription());
                        char.asyncReady().then(() => {
                            char.syncDescription();
                        });
                    }, GameConfig.Language.FreeToUse.Value, GameConfig.Language.Cancel.Value, GameConfig.Language.FreeToUse.Value);
                }
            });
        }
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {

    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}