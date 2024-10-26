import { Notice } from "../../../common/notice/Notice";
import Utils from "../../../tools/Utils";
import AdPanel_Generate from "../../../ui-generate/module/AdModule/AdPanel_generate";

export default class AdPanel extends AdPanel_Generate {
    protected onStart(): void {
        this.canUpdate = false;
        this.layer = mw.UILayerDialog;

        this.bindButtons();
    }

    private bindButtons(): void {
        this.mYesBtn.onClose.add(this.onClickYesButton.bind(this));
        // this.mYesBtn_1.onClose.add(this.onClickYesButton.bind(this));
        this.mNoBtn.onClicked.add(this.onClickNoButton.bind(this));
        Utils.setWidgetVisibility(this.mYesBtn_1, mw.SlateVisibility.Collapsed);
    }

    private onClickYesButton(isSuccess: boolean): void {
        if (!isSuccess) {
            Notice.showDownNotice("获取失败，请重试");
            return;
        }
        this.hideAdPanel();
        if (this.callback) this.callback();
    }

    private onClickNoButton(): void {
        this.hideAdPanel();
    }

    private callback: () => void = null;
    public showRewardAd(callback: () => void, contentText: string, noText: string = "取消", yesText = "免费领取", isAuto: boolean = true): void {
        this.callback = callback;
        this.mContentTxt.text = contentText;
        this.mNoBtn.text = noText;
        this.mYesBtn.text = yesText;
        this.mYesBtn_1.text = `${noText}`;
        this.showAdPanel();
        // let ran = Utils.randomInt(1, 3);
        // this.mYesBtn_1.visibility = (ran == 1) ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.Visible;
        // if (isAuto) this.autoYes();
    }

    private yesInterval: any = null;
    private autoYes(): void {
        this.clearAutoYesInterval();
        let time: number = 5;
        this.mYesBtn_1.text = "关闭(" + time + ")";
        this.yesInterval = TimeUtil.setInterval(() => {
            time--;
            this.mYesBtn_1.text = "关闭(" + time + ")";
            if (time <= 0) {
                this.hideAdPanel();
                this.clearAutoYesInterval();
            }
        }, 1);
    }

    private clearAutoYesInterval(): void {
        if (this.yesInterval) {
            TimeUtil.clearInterval(this.yesInterval);
            this.yesInterval = null;
        }
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