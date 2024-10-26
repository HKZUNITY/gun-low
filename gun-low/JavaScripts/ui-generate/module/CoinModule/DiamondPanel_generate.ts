/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/CoinModule/DiamondPanel.ui
 * TIME: 2024.06.22-23.56.50
 */
 
@UIBind('UI/module/CoinModule/DiamondPanel.ui')
export default class DiamondPanel_Generate extends UIScript {
		private mMainCanvas_Internal: mw.Canvas
	public get mMainCanvas(): mw.Canvas {
		if(!this.mMainCanvas_Internal&&this.uiWidgetBase) {
			this.mMainCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas') as mw.Canvas
		}
		return this.mMainCanvas_Internal
	}
	private mContentCanvas_Internal: mw.Canvas
	public get mContentCanvas(): mw.Canvas {
		if(!this.mContentCanvas_Internal&&this.uiWidgetBase) {
			this.mContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mContentCanvas') as mw.Canvas
		}
		return this.mContentCanvas_Internal
	}
	private mCloseButton_Internal: mw.Button
	public get mCloseButton(): mw.Button {
		if(!this.mCloseButton_Internal&&this.uiWidgetBase) {
			this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mCloseButton') as mw.Button
		}
		return this.mCloseButton_Internal
	}
	private mAdsButton_Internal: mw.AdsButton
	public get mAdsButton(): mw.AdsButton {
		if(!this.mAdsButton_Internal&&this.uiWidgetBase) {
			this.mAdsButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mAdsButton') as mw.AdsButton
		}
		return this.mAdsButton_Internal
	}
	private mLeBiIconImage_Internal: mw.Image
	public get mLeBiIconImage(): mw.Image {
		if(!this.mLeBiIconImage_Internal&&this.uiWidgetBase) {
			this.mLeBiIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mLeBiIconImage') as mw.Image
		}
		return this.mLeBiIconImage_Internal
	}
	private mLeBiCountTextBlock_Internal: mw.TextBlock
	public get mLeBiCountTextBlock(): mw.TextBlock {
		if(!this.mLeBiCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mLeBiCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mLeBiIconImage/mLeBiCountTextBlock') as mw.TextBlock
		}
		return this.mLeBiCountTextBlock_Internal
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
		
		this.mCloseButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
		});
		this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mLeBiCountTextBlock)
		
	
		//文本多语言
		
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/TitleTextBlock") as any);
		
	
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
 