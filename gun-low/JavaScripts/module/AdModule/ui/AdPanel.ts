import { Notice } from "../../../common/notice/Notice";
import { GameConfig } from "../../../config/GameConfig";
import GlobalData from "../../../tools/GlobalData";
import Utils from "../../../tools/Utils";
import AdPanel_Generate from "../../../ui-generate/module/AdModule/AdPanel_generate";

export default class AdPanel extends AdPanel_Generate {
    protected onStart(): void {
        this.canUpdate = false;
        this.layer = mw.UILayerDialog;

        this.bindButtons();
        this.initTextBlock();
    }

    private initTextBlock(): void {
        this.mTitleTxt.text = GameConfig.Language.FreeToReceive.Value;
        if (GlobalData.languageId == 0) {
            this.mTitleTxt.fontSize = 20;
            this.mContentTxt.fontSize = 30;
        }
    }

    private bindButtons(): void {
        this.mYesBtn.onClose.add(this.onClickYesButton.bind(this));
        this.mNoBtn.onClicked.add(this.onClickNoButton.bind(this));
    }

    private onClickYesButton(isSuccess: boolean): void {
        if (!isSuccess) {
            Notice.showDownNotice(GameConfig.Language.AcquisitionFailedPleaseTryAgain.Value);
            return;
        }
        this.hideAdPanel();
        if (this.callback) this.callback();
    }

    private onClickNoButton(): void {
        this.hideAdPanel();
    }

    private callback: () => void = null;
    public showRewardAd(callback: () => void, contentText: string, noText: string, yesText: string): void {
        this.callback = callback;
        this.mContentTxt.text = contentText;
        this.mNoBtn.text = noText;
        this.mYesBtn.text = yesText;
        this.showAdPanel();
    }

    public showAdPanel(): void {
        if (this.visible) return;
        this.show();
    }

    public hideAdPanel(): void {
        if (!this.visible) return;
        Utils.closeUITween(
            this.rootCanvas,
            null,
            () => {
                this.hide();
            }
        );
    }

    protected onShow(...params: any[]): void {
        Utils.openUITween(
            this.rootCanvas,
            null,
            null
        );
    }
}