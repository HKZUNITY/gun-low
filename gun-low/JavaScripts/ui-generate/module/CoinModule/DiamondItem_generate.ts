/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/CoinModule/DiamondItem.ui
 * TIME: 2024.06.22-23.56.50
 */
 
@UIBind('UI/module/CoinModule/DiamondItem.ui')
export default class DiamondItem_Generate extends UIScript {
		private mFirstBuyTextBlock_Internal: mw.TextBlock
	public get mFirstBuyTextBlock(): mw.TextBlock {
		if(!this.mFirstBuyTextBlock_Internal&&this.uiWidgetBase) {
			this.mFirstBuyTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mFirstBuyTextBlock') as mw.TextBlock
		}
		return this.mFirstBuyTextBlock_Internal
	}
	private mIconImage_Internal: mw.Image
	public get mIconImage(): mw.Image {
		if(!this.mIconImage_Internal&&this.uiWidgetBase) {
			this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/IconImage/mIconImage') as mw.Image
		}
		return this.mIconImage_Internal
	}
	private mDiamondCountTextBlock_Internal: mw.TextBlock
	public get mDiamondCountTextBlock(): mw.TextBlock {
		if(!this.mDiamondCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mDiamondCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mDiamondCountTextBlock') as mw.TextBlock
		}
		return this.mDiamondCountTextBlock_Internal
	}
	private mFirstCanvas_Internal: mw.Canvas
	public get mFirstCanvas(): mw.Canvas {
		if(!this.mFirstCanvas_Internal&&this.uiWidgetBase) {
			this.mFirstCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mFirstCanvas') as mw.Canvas
		}
		return this.mFirstCanvas_Internal
	}
	private mFirstDiamondTextBlock_Internal: mw.TextBlock
	public get mFirstDiamondTextBlock(): mw.TextBlock {
		if(!this.mFirstDiamondTextBlock_Internal&&this.uiWidgetBase) {
			this.mFirstDiamondTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mFirstCanvas/FirstBgImage/mFirstDiamondTextBlock') as mw.TextBlock
		}
		return this.mFirstDiamondTextBlock_Internal
	}
	private mLeBiCanvas_Internal: mw.Canvas
	public get mLeBiCanvas(): mw.Canvas {
		if(!this.mLeBiCanvas_Internal&&this.uiWidgetBase) {
			this.mLeBiCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mLeBiCanvas') as mw.Canvas
		}
		return this.mLeBiCanvas_Internal
	}
	private mLiBiCountTextBlock_Real_Internal: mw.TextBlock
	public get mLiBiCountTextBlock_Real(): mw.TextBlock {
		if(!this.mLiBiCountTextBlock_Real_Internal&&this.uiWidgetBase) {
			this.mLiBiCountTextBlock_Real_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mLeBiCanvas/LiBiCanvas/mLiBiCountTextBlock_Real') as mw.TextBlock
		}
		return this.mLiBiCountTextBlock_Real_Internal
	}
	private mLiBiCountTextBlock_Fake_Internal: mw.TextBlock
	public get mLiBiCountTextBlock_Fake(): mw.TextBlock {
		if(!this.mLiBiCountTextBlock_Fake_Internal&&this.uiWidgetBase) {
			this.mLiBiCountTextBlock_Fake_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mLeBiCanvas/LiBiCanvas/mLiBiCountTextBlock_Real/mLiBiCountTextBlock_Fake') as mw.TextBlock
		}
		return this.mLiBiCountTextBlock_Fake_Internal
	}
	private mBuyButton_Internal: mw.Button
	public get mBuyButton(): mw.Button {
		if(!this.mBuyButton_Internal&&this.uiWidgetBase) {
			this.mBuyButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyButton') as mw.Button
		}
		return this.mBuyButton_Internal
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
		
		this.mBuyButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mBuyButton");
		});
		this.mBuyButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mFirstBuyTextBlock)
		
	
		this.initLanguage(this.mDiamondCountTextBlock)
		
	
		this.initLanguage(this.mFirstDiamondTextBlock)
		
	
		this.initLanguage(this.mLiBiCountTextBlock_Real)
		
	
		this.initLanguage(this.mLiBiCountTextBlock_Fake)
		
	
		//文本多语言
		
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
 