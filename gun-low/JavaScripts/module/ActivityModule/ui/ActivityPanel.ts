import ConfirmPanel from "../../../common/ConfirmPanel";
import { Notice } from "../../../common/notice/Notice";
import { GameConfig } from "../../../config/GameConfig";
import { EventType } from "../../../tools/EventType";
import GlobalData from "../../../tools/GlobalData";
import Utils from "../../../tools/Utils";
import ActivityPanel_Generate from "../../../ui-generate/module/ActivityModule/ActivityPanel_generate";
import AdPanel from "../../AdModule/ui/AdPanel";
import CoinModuleC from "../../CoinModule/CoinModuleC";
import { ShopType } from "../../ShopModule/ShopData";
import ActivityModuleC from "../ActivityModuleC";

export default class ActivityPanel extends ActivityPanel_Generate {
	private activityModuleC: ActivityModuleC = null;
	private get getActivityModuleC(): ActivityModuleC {
		if (!this.activityModuleC) {
			this.activityModuleC = ModuleService.getModule(ActivityModuleC);
		}
		return this.activityModuleC;
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

	private activityData: { shopId: number, shopType: ShopType, shopIcon: string }[] = [
		{ shopId: 2, shopType: ShopType.Gun, shopIcon: "155696" },
		{ shopId: 3, shopType: ShopType.Gun, shopIcon: "226214" },
		{ shopId: 4, shopType: ShopType.Gun, shopIcon: "138213" },
		{ shopId: 5, shopType: ShopType.Gun, shopIcon: "153110" },
		{ shopId: 6, shopType: ShopType.Gun, shopIcon: "226213" },
		{ shopId: 7, shopType: ShopType.Gun, shopIcon: "155702" },
		{ shopId: 8, shopType: ShopType.Gun, shopIcon: "318664" }
	];

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		this.initModule();
		this.initUIPanel();
		this.initUI();
		this.bindButtons();
	}

	private initModule(): void {
		this.activityModuleC = ModuleService.getModule(ActivityModuleC);
	}

	private initUIPanel(): void {
		this.adPanel = UIService.getUI(AdPanel);
	}

	private currentIndex: number = -1;
	private initUI(): void {
		this.currentIndex = Number(Utils.getWhatDay());
		this.updateIconTextUI();
	}

	private bindButtons(): void {
		this.mCloseButton.onClicked.add(this.onClickCloseButton.bind(this));
		this.mLeftButton.onClicked.add(this.onClickLeftButton.bind(this));
		this.mRightButton.onClicked.add(this.onClickRightButton.bind(this));
		this.mGetButton.onClicked.add(this.onClickGetButton.bind(this));
		this.mAdsGetButton.onClicked.add(this.onClickAdsGetButton.bind(this));
	}

	private onClickCloseButton(): void {
		this.hideTween();
		Event.dispatchToLocal(EventType.OnOffMainHUD, true);
	}

	private onClickLeftButton(): void {
		this.currentIndex--;
		if (this.currentIndex < 1) this.currentIndex = this.activityData.length;
		this.updateIconTextUI();
	}

	private onClickRightButton(): void {
		this.currentIndex++;
		if (this.currentIndex > this.activityData.length) this.currentIndex = 1;
		this.updateIconTextUI();
	}

	private onClickGetButton(): void {
		if (!this.isHasCondition(false)) return;
		if (this.minutes < 30) {
			Notice.showDownNotice("今日在线时长不足30分钟(" + this.minutes + "/30)");
			return;
		}
		this.setGetActivity();
	}

	private onClickAdsGetButton(): void {
		if (!this.isHasCondition(true)) return;
		if (GlobalData.isOpenIAA) {
			this.getAdPanel.showRewardAd(() => {
				this.setGetActivity();
			}, "免费领取" + this.getActicityShopTypeStr());
		} else {
			this.setGetActivity();
		}
	}

	private setGetActivity(): void {
		this.getActivityModuleC.setGetActivity(this.activityData[this.currentIndex - 1].shopId,
			this.activityData[this.currentIndex - 1].shopType);
		Notice.showDownNotice("领取成功");
	}

	private updateIconTextUI(): void {
		this.mIndexTextBlock.text = this.currentIndex + "/7";
		this.mWhatDayTextBlock.text = this.getWhatDayStr() + "\n(星期" + Utils.weekNumChangeToCN(this.currentIndex) + ")";
		Utils.setImageByAssetIconData(this.mIconImage, this.activityData[this.currentIndex - 1].shopIcon);
		this.mIconTextBlock.text = this.getActicityShopTypeStr();
	}

	private getWhatDayStr(): string {
		let whatDay = this.getActivityModuleC.getData();
		let offsetDay = this.currentIndex - whatDay;
		if (whatDay == 1 && offsetDay == 6) return "昨日奖励";
		if (whatDay == 7 && offsetDay == -6) return "明日奖励";
		if (offsetDay == 0) return "今日奖励";
		if (offsetDay == 1) return "明日奖励";
		if (offsetDay == -1) return "昨日奖励";
		return "星期" + Utils.weekNumChangeToCN(this.currentIndex) + "奖励";
	}

	private getActicityShopTypeStr(): string {
		switch (this.activityData[this.currentIndex - 1].shopType) {
			case ShopType.Gun:
				return "步枪";
			case ShopType.Role:
				return "皮肤";
			case ShopType.Trailing:
				return "拖尾";
		}
	}

	private minutes: number = 0;
	public updateMinutesUI(minutes: number): void {
		this.minutes = minutes;
		this.mMinutesTextBlock.text = "已在线 " + minutes + "/30(分钟)";
	}

	private isHasCondition(isAds: boolean): boolean {
		if (this.getActivityModuleC.isHasGet(this.activityData[this.currentIndex - 1].shopId,
			this.activityData[this.currentIndex - 1].shopType)) {
			Notice.showDownNotice("已领取");
			return false;
		}
		if (isAds) return true;
		let whatDay = this.getActivityModuleC.getData();
		if (whatDay != this.currentIndex) {
			Notice.showDownNotice("今天星期" + Utils.weekNumChangeToCN(whatDay));
			Notice.showDownNotice("不能领取星期" + Utils.weekNumChangeToCN(this.currentIndex) + "的奖励");
			return false;
		}
		return true;
	}

	protected onShow(...params: any[]): void {
		Utils.openUITween(
			this.rootCanvas,
			null,
			null
		);
	}

	/**
	 * 隐藏缓动
	 */
	public hideTween(): void {
		Utils.closeUITween(
			this.rootCanvas,
			null,
			() => {
				this.hide();
			});
	}
}
