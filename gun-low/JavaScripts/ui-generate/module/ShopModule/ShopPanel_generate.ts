﻿/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/ShopModule/ShopPanel.ui
 * TIME: 2025.01.02-22.17.23
 */
 
@UIBind('UI/module/ShopModule/ShopPanel.ui')
export default class ShopPanel_Generate extends UIScript {
		private mTabCanvas_Internal: mw.Canvas
	public get mTabCanvas(): mw.Canvas {
		if(!this.mTabCanvas_Internal&&this.uiWidgetBase) {
			this.mTabCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas') as mw.Canvas
		}
		return this.mTabCanvas_Internal
	}
	private mTabButton_0_Internal: mw.Button
	public get mTabButton_0(): mw.Button {
		if(!this.mTabButton_0_Internal&&this.uiWidgetBase) {
			this.mTabButton_0_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_0') as mw.Button
		}
		return this.mTabButton_0_Internal
	}
	private mTabTextBlock_0_Internal: mw.TextBlock
	public get mTabTextBlock_0(): mw.TextBlock {
		if(!this.mTabTextBlock_0_Internal&&this.uiWidgetBase) {
			this.mTabTextBlock_0_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_0/mTabTextBlock_0') as mw.TextBlock
		}
		return this.mTabTextBlock_0_Internal
	}
	private mTabButton_1_Internal: mw.Button
	public get mTabButton_1(): mw.Button {
		if(!this.mTabButton_1_Internal&&this.uiWidgetBase) {
			this.mTabButton_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_1') as mw.Button
		}
		return this.mTabButton_1_Internal
	}
	private mTabTextBlock_1_Internal: mw.TextBlock
	public get mTabTextBlock_1(): mw.TextBlock {
		if(!this.mTabTextBlock_1_Internal&&this.uiWidgetBase) {
			this.mTabTextBlock_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_1/mTabTextBlock_1') as mw.TextBlock
		}
		return this.mTabTextBlock_1_Internal
	}
	private mTabButton_2_Internal: mw.Button
	public get mTabButton_2(): mw.Button {
		if(!this.mTabButton_2_Internal&&this.uiWidgetBase) {
			this.mTabButton_2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_2') as mw.Button
		}
		return this.mTabButton_2_Internal
	}
	private mTabTextBlock_2_Internal: mw.TextBlock
	public get mTabTextBlock_2(): mw.TextBlock {
		if(!this.mTabTextBlock_2_Internal&&this.uiWidgetBase) {
			this.mTabTextBlock_2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_2/mTabTextBlock_2') as mw.TextBlock
		}
		return this.mTabTextBlock_2_Internal
	}
	private mBuyButton_Internal: mw.Button
	public get mBuyButton(): mw.Button {
		if(!this.mBuyButton_Internal&&this.uiWidgetBase) {
			this.mBuyButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mBuyButton') as mw.Button
		}
		return this.mBuyButton_Internal
	}
	private mScrollBox_Internal: mw.ScrollBox
	public get mScrollBox(): mw.ScrollBox {
		if(!this.mScrollBox_Internal&&this.uiWidgetBase) {
			this.mScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mScrollBox') as mw.ScrollBox
		}
		return this.mScrollBox_Internal
	}
	private mContentCanvas_Internal: mw.Canvas
	public get mContentCanvas(): mw.Canvas {
		if(!this.mContentCanvas_Internal&&this.uiWidgetBase) {
			this.mContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mScrollBox/mContentCanvas') as mw.Canvas
		}
		return this.mContentCanvas_Internal
	}
	private mCloseButton_Internal: mw.Button
	public get mCloseButton(): mw.Button {
		if(!this.mCloseButton_Internal&&this.uiWidgetBase) {
			this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCloseButton') as mw.Button
		}
		return this.mCloseButton_Internal
	}


	protected onAwake() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = mw.UILayerBottom;
		this.initButtons();
	}
	protected initButtons() {
		//按钮添加点击
		
		//按钮添加点击
		
		this.mTabButton_0.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mTabButton_0");
		});
		this.mTabButton_0.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mTabButton_1.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mTabButton_1");
		});
		this.mTabButton_1.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mTabButton_2.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mTabButton_2");
		});
		this.mTabButton_2.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mBuyButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mBuyButton");
		});
		this.mBuyButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCloseButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
		});
		this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mTabTextBlock_0)
		
	
		this.initLanguage(this.mTabTextBlock_1)
		
	
		this.initLanguage(this.mTabTextBlock_2)
		
	
		//文本多语言
		
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/RightCanvas/mTabCanvas/mBuyButton/TabTextBlock") as any);
		
	
	}
	
	/**初始化多语言*/
	private initLanguage(ui: mw.StaleButton | mw.TextBlock) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }

	protected onShow(...params: any[]): void {};

	/**显示panel*/
    public show(...param): void {
		mw.UIService.showUI(this, this.layer, ...param);
	}

	/**隐藏panel*/
    public hide(): void {
		mw.UIService.hideUI(this);
	}
 }
 