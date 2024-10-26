/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/CoinModule/CoinPanel.ui
 * TIME: 2024.06.22-23.56.50
 */
 
@UIBind('UI/module/CoinModule/CoinPanel.ui')
export default class CoinPanel_Generate extends UIScript {
		private mCoinCanvas_Internal: mw.Canvas
	public get mCoinCanvas(): mw.Canvas {
		if(!this.mCoinCanvas_Internal&&this.uiWidgetBase) {
			this.mCoinCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mCoinCanvas') as mw.Canvas
		}
		return this.mCoinCanvas_Internal
	}
	private mCoinTextBlock_Internal: mw.TextBlock
	public get mCoinTextBlock(): mw.TextBlock {
		if(!this.mCoinTextBlock_Internal&&this.uiWidgetBase) {
			this.mCoinTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mCoinCanvas/CoinCanvas/mCoinTextBlock') as mw.TextBlock
		}
		return this.mCoinTextBlock_Internal
	}
	private mAddCoinButton_Internal: mw.Button
	public get mAddCoinButton(): mw.Button {
		if(!this.mAddCoinButton_Internal&&this.uiWidgetBase) {
			this.mAddCoinButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mCoinCanvas/mAddCoinButton') as mw.Button
		}
		return this.mAddCoinButton_Internal
	}
	private mDiamondCanvas_Internal: mw.Canvas
	public get mDiamondCanvas(): mw.Canvas {
		if(!this.mDiamondCanvas_Internal&&this.uiWidgetBase) {
			this.mDiamondCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mDiamondCanvas') as mw.Canvas
		}
		return this.mDiamondCanvas_Internal
	}
	private mDiamondTextBlock_Internal: mw.TextBlock
	public get mDiamondTextBlock(): mw.TextBlock {
		if(!this.mDiamondTextBlock_Internal&&this.uiWidgetBase) {
			this.mDiamondTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mDiamondCanvas/DiamondCanvas/mDiamondTextBlock') as mw.TextBlock
		}
		return this.mDiamondTextBlock_Internal
	}
	private mAddDiamondButton_Internal: mw.Button
	public get mAddDiamondButton(): mw.Button {
		if(!this.mAddDiamondButton_Internal&&this.uiWidgetBase) {
			this.mAddDiamondButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mDiamondCanvas/mAddDiamondButton') as mw.Button
		}
		return this.mAddDiamondButton_Internal
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
		
		this.mAddCoinButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mAddCoinButton");
		});
		this.mAddCoinButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mAddDiamondButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mAddDiamondButton");
		});
		this.mAddDiamondButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mCoinTextBlock)
		
	
		this.initLanguage(this.mDiamondTextBlock)
		
	
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
 