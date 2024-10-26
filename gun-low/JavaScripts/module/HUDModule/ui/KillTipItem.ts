import Utils from "../../../tools/Utils";
import KillTipItem_Generate from "../../../ui-generate/module/HUDModule/KillTipItem_generate";
import { KillTipData, KillTipType } from "../HUDData";

export class KillTipItem extends KillTipItem_Generate {
    protected onAwake(): void {

    }

    public setInfo(killTipDatas: KillTipData): void {
        this.mKillerTextBlock.text = killTipDatas.killerName;
        this.mKilledTextBlock.text = killTipDatas.killedName;
        switch (killTipDatas.killTipType) {
            case KillTipType.None:
                this.mKillerTextBlock.fontColor = mw.LinearColor.white;
                this.mKillerTextBlock.shadowColor = mw.LinearColor.white;
                this.mKilledTextBlock.fontColor = mw.LinearColor.white;
                this.mKilledTextBlock.shadowColor = mw.LinearColor.white;
                break;
            case KillTipType.Killer:
                this.mKillerTextBlock.fontColor = mw.LinearColor.yellow;
                this.mKillerTextBlock.shadowColor = mw.LinearColor.red;
                this.mKilledTextBlock.fontColor = mw.LinearColor.white;
                this.mKilledTextBlock.shadowColor = mw.LinearColor.white;
                break;
            case KillTipType.Killed:
                this.mKillerTextBlock.fontColor = mw.LinearColor.white;
                this.mKillerTextBlock.shadowColor = mw.LinearColor.white;
                this.mKilledTextBlock.fontColor = mw.LinearColor.yellow;
                this.mKilledTextBlock.shadowColor = mw.LinearColor.red;
                break;
            default:
                break;
        }
        Utils.setWidgetVisibility(this.uiObject, mw.SlateVisibility.SelfHitTestInvisible);
        setTimeout(() => {
            this.mBgImage.size = new mw.Vector2(this.mMainCanvas.size.x + 20, this.mMainCanvas.size.y);
        }, 1);
    }
}