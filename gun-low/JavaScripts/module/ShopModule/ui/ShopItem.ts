import ConfirmPanel from "../../../common/ConfirmPanel";
import { Notice } from "../../../common/notice/Notice";
import { GameConfig } from "../../../config/GameConfig";
import Utils from "../../../tools/Utils";
import ShopItem_Generate from "../../../ui-generate/module/ShopModule/ShopItem_generate";
import { PriceType, ShopType } from "../ShopData";
import ShopModuleC from "../ShopModuleC";

export default class ShopItem extends ShopItem_Generate {
	private shopModuleC: ShopModuleC = null;
	private get getShopModuleC(): ShopModuleC {
		if (this.shopModuleC == null) {
			this.shopModuleC = ModuleService.getModule(ShopModuleC);
		}
		return this.shopModuleC;
	}

	private confirmPanel: ConfirmPanel = null;
	private get getConfirmPanel(): ConfirmPanel {
		if (this.confirmPanel == null) {
			this.confirmPanel = UIService.getUI(ConfirmPanel);
		}
		return this.confirmPanel;
	}

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		this.initModule();
		this.initUIPanel();
		this.bindBUttons();
	}

	private initModule(): void {
		this.shopModuleC = ModuleService.getModule(ShopModuleC);
	}

	private initUIPanel(): void {
		this.confirmPanel = UIService.getUI(ConfirmPanel);
	}

	private bindBUttons(): void {
		this.mCoinBuyButton.onClicked.add(this.onClickCoinBuyButton.bind(this));
		this.mDiamondBuyButton.onClicked.add(this.onClickDiamondBuyButton.bind(this));
		this.mUseButton.onClicked.add(this.onClickUseButton.bind(this));
		this.mPreButton.onClicked.add(this.onClickPreButton.bind(this));
	}

	private onClickCoinBuyButton(): void {
		if (!this.isCanSuccessfulClick()) return;
		this.getShopModuleC.previewShopItem(this.key, this.shopType);
		let contentText = "<size=80>确认花费</size>\n" + "<size=100><color=#yellow>" + this.getShopModuleC.getGoodPrice(this.key, this.shopType)[1] + "</color></size><size=80>金币</size>";
		this.getConfirmPanel.confirmTips(() => {
			if (!this.getShopModuleC.buyShopItemByCoin(this.key, this.shopType)) return;
			this.buyCompleted();
			this.getConfirmPanel.confirmTips(() => {
				this.getShopModuleC.useShopItem(this.key, this.shopType);
			}, "是否立即使用", "是", "否");
		}, contentText, "购买");
	}

	private onClickDiamondBuyButton(): void {
		if (!this.isCanSuccessfulClick()) return;
		this.getShopModuleC.previewShopItem(this.key, this.shopType);
		let contentText = "<size=80>确认花费</size>\n" + "<size=100><color=#blue>" + this.getShopModuleC.getGoodPrice(this.key, this.shopType)[0] + "</color></size><size=80>钻石</size>";
		this.getConfirmPanel.confirmTips(() => {
			if (!this.getShopModuleC.buyShopItemByDiamond(this.key, this.shopType)) return;
			this.buyCompleted();
			this.getConfirmPanel.confirmTips(() => {
				this.getShopModuleC.useShopItem(this.key, this.shopType);
			}, "是否立即使用", "是", "否");
		}, contentText, "购买");
	}

	private onClickUseButton(): void {
		if (!this.isCanSuccessfulClick()) return;
		this.getShopModuleC.useShopItem(this.key, this.shopType);
	}

	private onClickPreButton(): void {
		if (!this.isCanSuccessfulClick()) return;
		this.getShopModuleC.previewShopItem(this.key, this.shopType);
	}

	private buyCompleted(): void {
		this.isHas = true;
		this.mHasTextBlock.text = this.isHas ? "已获得" : "未获得";
		this.updateHasState();
	}

	private isCanSuccessfulClick(): boolean {
		if (this.key == null || this.shopType == null) {
			Notice.showDownNotice("出错啦");
			return false;
		}
		return true;
	}

	private key: number = null;
	private shopType: ShopType = null;
	public setData(key: number, shopType: ShopType): void {
		this.key = key;
		this.shopType = shopType;
		this.isHas = this.getShopModuleC.isHasShopId(this.key, this.shopType);
		this.mHasTextBlock.text = this.isHas ? "已获得" : "未获得";
		switch (this.shopType) {
			case ShopType.Gun:
				this.setGun(key);
				break;
			case ShopType.Role:
				this.setRole(key);
				break;
			case ShopType.Trailing:
				this.setTrailing(key);
				break;
		}
		Utils.setWidgetVisibility(this.mPropCanvas, shopType == ShopType.Gun ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
		this.updateHasState();
	}

	private isHas: boolean = false;
	private setGun(key: number): void {
		let weaponPropElement = GameConfig.WeaponProp.getElement(key);
		this.setIcon(weaponPropElement.WeaponIcon, true);
		if (key == 1) this.mICONImage.renderScale = mw.Vector2.one.multiply(0.8);
		else if (key == 14) this.mICONImage.renderTransformAngle = 90;
		else {
			this.mICONImage.renderScale = mw.Vector2.one;
			this.mICONImage.renderTransformAngle = 0;
		}
		this.mNameTextBlock.text = weaponPropElement.WeaponName;
		this.mHasTypeTextBlock.text = weaponPropElement.PriceType == PriceType.Ads ? "限时" : "永久";
		this.mHurtTextBlock.text = "伤害:" + weaponPropElement.Damage;
		this.mBulletCountTextBlock.text = "子弹:" + weaponPropElement.BulletCount + "/∞";
		if (this.isHas) return;
		this.updatePrice(weaponPropElement.PriceType, weaponPropElement.WeaponPrices);
	}

	private setRole(key: number): void {
		let roleElement = GameConfig.ROLE.getElement(key);
		this.setIcon(roleElement.ROLEID, false);
		this.mICONImage.renderScale = mw.Vector2.one;
		this.mICONImage.renderTransformAngle = 0;
		this.mNameTextBlock.text = roleElement.NAME;
		this.mHasTypeTextBlock.text = roleElement.PRICETYPE == PriceType.Ads ? "限时" : "永久";
		if (this.isHas) return;
		this.updatePrice(roleElement.PRICETYPE, roleElement.PRICE);
	}

	private setTrailing(key: number): void {
		let trailingElement = GameConfig.TRAILING.getElement(key);
		this.setIcon(trailingElement.TRAILING, false);
		this.mICONImage.renderScale = mw.Vector2.one;
		this.mICONImage.renderTransformAngle = 0;
		this.mNameTextBlock.text = trailingElement.NAME;
		this.mHasTypeTextBlock.text = trailingElement.PRICETYPE == PriceType.Ads ? "限时" : "永久";
		if (this.isHas) return;
		this.updatePrice(trailingElement.PRICETYPE, trailingElement.PRICE);
	}

	private setIcon(guid: string, isGunIcon: boolean): void {
		Utils.setImageByAssetIconData(this.mICONImage, guid);
		let size: mw.Vector2 = new mw.Vector2(200, 200);
		let position: mw.Vector2 = new mw.Vector2(100, 0);
		if (isGunIcon) {
			size = new mw.Vector2(300, 300);
			position = new mw.Vector2(50, -50);
		}
		this.mICONImage.size = size;
		this.mICONImage.position = position;
	}

	private updateHasState(): void {
		Utils.setWidgetVisibility(this.mUseCanvas, this.isHas ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mBuyCanvas, this.isHas ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible);
	}

	private updatePrice(priceType: PriceType, prices: number[]): void {
		if (priceType == PriceType.Ads) {
			Utils.setWidgetVisibility(this.mCoinBuyCanvas, mw.SlateVisibility.Collapsed);
			this.mDiamondBuyCanvas.position = new mw.Vector2(111, 0);
		} else {
			Utils.setWidgetVisibility(this.mCoinBuyCanvas, mw.SlateVisibility.SelfHitTestInvisible);
			this.mDiamondBuyCanvas.position = new mw.Vector2(0, 0);
			// console.error(this.key + "," + this.shopType);
			this.mCoinPriceTextBlock.text = prices[1] + "";
		}
		this.mDiamondBuyTextBlock.text = prices[0] + "";
	}
}
