import { EventType } from "../../../tools/EventType";
import Utils from "../../../tools/Utils";
import ShopPanel_Generate from "../../../ui-generate/module/ShopModule/ShopPanel_generate";
import { ShopType } from "../ShopData";
import ShopModuleC from "../ShopModuleC";
import ShopItem from "./ShopItem";

export default class ShopPanel extends ShopPanel_Generate {
	private shopModuleC: ShopModuleC = null;
	private get getShopModuleC(): ShopModuleC {
		if (this.shopModuleC == null) {
			this.shopModuleC = ModuleService.getModule(ShopModuleC);
		}
		return this.shopModuleC;
	}
	private shopTypes: number[] = [15, 34, 63];

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		this.initUI();
		this.initModule();
		// this.initUIPanel();
		this.bindButtons();
	}

	private initModule(): void {
		this.shopModuleC = ModuleService.getModule(ShopModuleC);
	}

	// private initUIPanel(): void {

	// }

	private bindButtons(): void {
		this.mCloseButton.onClicked.add(this.onClickCloseButton.bind(this));
	}

	private mTabButtons: mw.Button[] = [];
	private initUI(): void {
		for (let i = 0; i < this.mTabCanvas.getChildrenCount(); ++i) {
			this.mTabButtons.push(this["mTabButton_" + i] as mw.Button);
			this.mTabButtons[i].onClicked.add(this.onClickTabButton.bind(this, i));
		}
		this.updateTabState();
	}

	private onClickTabButton(shopType: ShopType): void {
		// console.error(shopType);
		if (this.currentShopType == shopType) return;
		this.currentShopType = shopType;
		this.updateTabState();
		this.getShopModuleC.switchPreviewShopType(this.currentShopType);
	}

	private currentShopType: ShopType = ShopType.Gun;
	private onClickCloseButton(): void {
		// console.error("onClickCloseButton");
		this.hideTween();
		this.getShopModuleC.onSwitchCameraAction.call(0);
		Event.dispatchToLocal(EventType.OnOffMainHUD, true);
	}

	private currentTabButton: mw.Button = null;
	private updateTabState(): void {
		if (this.currentTabButton) Utils.setButtonEnable(this.currentTabButton, true);
		this.currentTabButton = this.mTabButtons[this.currentShopType];
		Utils.setButtonEnable(this.currentTabButton, false);
		this.updateShopItem();
	}

	private shopItems: ShopItem[] = [];
	private updateShopItem(): void {
		if (this.shopItems.length > this.shopTypes[this.currentShopType]) {
			for (let i = 0; i < this.shopTypes[this.currentShopType]; ++i) {
				this.shopItems[i].setData(i + 1, this.currentShopType);
				Utils.setWidgetVisibility(this.shopItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.shopTypes[this.currentShopType]; i < this.shopItems.length; ++i) {
				Utils.setWidgetVisibility(this.shopItems[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		} else {
			for (let i = 0; i < this.shopItems.length; ++i) {
				this.shopItems[i].setData(i + 1, this.currentShopType);
				Utils.setWidgetVisibility(this.shopItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.shopItems.length; i < this.shopTypes[this.currentShopType]; ++i) {
				let shopItem = UIService.create(ShopItem);
				shopItem.setData(i + 1, this.currentShopType);
				this.mContentCanvas.addChild(shopItem.uiObject);
				this.shopItems.push(shopItem);
			}
		}

		if (this.currentShopType == ShopType.Role) {
			Utils.setWidgetVisibility(this.shopItems[7].uiObject, mw.SlateVisibility.Collapsed);
			Utils.setWidgetVisibility(this.shopItems[9].uiObject, mw.SlateVisibility.Collapsed);
			Utils.setWidgetVisibility(this.shopItems[13].uiObject, mw.SlateVisibility.Collapsed);
			Utils.setWidgetVisibility(this.shopItems[32].uiObject, mw.SlateVisibility.Collapsed);
		}
	}

	protected onShow(...params: any[]): void {
		this.updateShopItem();
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

	//#region Rotete-Camera
	// protected onShow(...params: any[]): void {
	// 	this.canUpdate = true;
	// 	TouchScript.instance.addScreenListener(this.mTouchImage, this.onMoveTouchEvent.bind(this), false);
	// }

	// protected onHide(): void {
	// 	this.canUpdate = false;
	// 	TouchScript.instance.removeScreenListener(this.mTouchImage);
	// }

	// private initShopNpc(): void {
	// 	this.moveVec = [];
	// 	mw.TimeUtil.delayExecute(() => {
	// 		this.movePos = this.mTouchImage.position.multiply(1);
	// 	}, 3)
	// }

	// private moveId: number = -1;
	// private moveVec: number[] = [];
	// private dir: number = 0;
	// private movePos: mw.Vector2;
	// private onMoveTouchEvent = (widget: mw.Widget, event: Enums.TouchEvent, x: number, y: number, inPointerEvent: mw.PointerEvent) => {
	// 	if (this.movePos) {
	// 		if (event == Enums.TouchEvent.DOWN) {
	// 			if (this.moveId < 0) {
	// 				this.moveId = inPointerEvent.pointerIndex;
	// 				this.moveVec[0] = x;
	// 				this.moveVec[1] = y;
	// 			}
	// 		} else if (event == Enums.TouchEvent.MOVE) {
	// 			if (this.moveId >= 0) {
	// 				let xoffset = x - this.moveVec[0];
	// 				let yoffset = y - this.moveVec[1];
	// 				this.dir = 0;
	// 				if (Math.abs(xoffset) > Math.abs(yoffset)) {
	// 					this.dir = Math.floor(xoffset);
	// 				}
	// 				this.moveVec[0] = x;
	// 				this.moveVec[1] = y;
	// 			}
	// 		} else if (event == Enums.TouchEvent.UP) {
	// 			if (this.moveId >= 0) {
	// 				this.moveId = -1;
	// 				this.dir = 0;
	// 			}
	// 		}
	// 	}
	// }

	// protected onUpdate(dt: number): void {
	// 	if (this.dir != 0) {
	// 		this.getShopModuleC.addRoatation(this.dir * dt);
	// 		this.dir = 0;
	// 	}
	// }

	// onTouchStarted(inGemory: mw.Geometry, inPointerEvent: mw.PointerEvent): mw.EventReply {
	// 	return TouchScript.instance.onTouchStarted(inGemory, inPointerEvent);
	// }

	// onTouchMoved(inGemory: mw.Geometry, inPointerEvent: mw.PointerEvent): mw.EventReply {
	// 	return TouchScript.instance.onTouchMoved(inGemory, inPointerEvent);
	// }

	// onTouchEnded(inGemory: mw.Geometry, inPointerEvent: mw.PointerEvent): mw.EventReply {
	// 	return TouchScript.instance.onTouchEnded(inGemory, inPointerEvent);
	// }
	//#endregion
}