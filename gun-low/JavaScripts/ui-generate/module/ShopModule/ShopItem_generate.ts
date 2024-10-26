/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/ShopModule/ShopItem.ui
 * TIME: 2024.06.22-23.56.50
 */
 
@UIBind('UI/module/ShopModule/ShopItem.ui')
export default class ShopItem_Generate extends UIScript {
		private mICONImage_Internal: mw.Image
	public get mICONImage(): mw.Image {
		if(!this.mICONImage_Internal&&this.uiWidgetBase) {
			this.mICONImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mICONImage') as mw.Image
		}
		return this.mICONImage_Internal
	}
	private mNameTextBlock_Internal: mw.TextBlock
	public get mNameTextBlock(): mw.TextBlock {
		if(!this.mNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mNameTextBlock') as mw.TextBlock
		}
		return this.mNameTextBlock_Internal
	}
	private mHasTypeTextBlock_Internal: mw.TextBlock
	public get mHasTypeTextBlock(): mw.TextBlock {
		if(!this.mHasTypeTextBlock_Internal&&this.uiWidgetBase) {
			this.mHasTypeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mHasTypeTextBlock') as mw.TextBlock
		}
		return this.mHasTypeTextBlock_Internal
	}
	private mHasTextBlock_Internal: mw.TextBlock
	public get mHasTextBlock(): mw.TextBlock {
		if(!this.mHasTextBlock_Internal&&this.uiWidgetBase) {
			this.mHasTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mHasTextBlock') as mw.TextBlock
		}
		return this.mHasTextBlock_Internal
	}
	private mPreButton_Internal: mw.Button
	public get mPreButton(): mw.Button {
		if(!this.mPreButton_Internal&&this.uiWidgetBase) {
			this.mPreButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPreButton') as mw.Button
		}
		return this.mPreButton_Internal
	}
	private mPropCanvas_Internal: mw.Canvas
	public get mPropCanvas(): mw.Canvas {
		if(!this.mPropCanvas_Internal&&this.uiWidgetBase) {
			this.mPropCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPropCanvas') as mw.Canvas
		}
		return this.mPropCanvas_Internal
	}
	private mHurtCanvas_Internal: mw.Canvas
	public get mHurtCanvas(): mw.Canvas {
		if(!this.mHurtCanvas_Internal&&this.uiWidgetBase) {
			this.mHurtCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPropCanvas/mHurtCanvas') as mw.Canvas
		}
		return this.mHurtCanvas_Internal
	}
	private mHurtTextBlock_Internal: mw.TextBlock
	public get mHurtTextBlock(): mw.TextBlock {
		if(!this.mHurtTextBlock_Internal&&this.uiWidgetBase) {
			this.mHurtTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPropCanvas/mHurtCanvas/mHurtTextBlock') as mw.TextBlock
		}
		return this.mHurtTextBlock_Internal
	}
	private mBulletCanvas_Internal: mw.Canvas
	public get mBulletCanvas(): mw.Canvas {
		if(!this.mBulletCanvas_Internal&&this.uiWidgetBase) {
			this.mBulletCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPropCanvas/mBulletCanvas') as mw.Canvas
		}
		return this.mBulletCanvas_Internal
	}
	private mBulletCountTextBlock_Internal: mw.TextBlock
	public get mBulletCountTextBlock(): mw.TextBlock {
		if(!this.mBulletCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mBulletCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPropCanvas/mBulletCanvas/mBulletCountTextBlock') as mw.TextBlock
		}
		return this.mBulletCountTextBlock_Internal
	}
	private mBuyCanvas_Internal: mw.Canvas
	public get mBuyCanvas(): mw.Canvas {
		if(!this.mBuyCanvas_Internal&&this.uiWidgetBase) {
			this.mBuyCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas') as mw.Canvas
		}
		return this.mBuyCanvas_Internal
	}
	private mDiamondBuyCanvas_Internal: mw.Canvas
	public get mDiamondBuyCanvas(): mw.Canvas {
		if(!this.mDiamondBuyCanvas_Internal&&this.uiWidgetBase) {
			this.mDiamondBuyCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mDiamondBuyCanvas') as mw.Canvas
		}
		return this.mDiamondBuyCanvas_Internal
	}
	private mDiamondBuyButton_Internal: mw.Button
	public get mDiamondBuyButton(): mw.Button {
		if(!this.mDiamondBuyButton_Internal&&this.uiWidgetBase) {
			this.mDiamondBuyButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mDiamondBuyCanvas/mDiamondBuyButton') as mw.Button
		}
		return this.mDiamondBuyButton_Internal
	}
	private mDiamondBuyTextBlock_Internal: mw.TextBlock
	public get mDiamondBuyTextBlock(): mw.TextBlock {
		if(!this.mDiamondBuyTextBlock_Internal&&this.uiWidgetBase) {
			this.mDiamondBuyTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mDiamondBuyCanvas/mDiamondBuyTextBlock') as mw.TextBlock
		}
		return this.mDiamondBuyTextBlock_Internal
	}
	private mCoinBuyCanvas_Internal: mw.Canvas
	public get mCoinBuyCanvas(): mw.Canvas {
		if(!this.mCoinBuyCanvas_Internal&&this.uiWidgetBase) {
			this.mCoinBuyCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mCoinBuyCanvas') as mw.Canvas
		}
		return this.mCoinBuyCanvas_Internal
	}
	private mCoinBuyButton_Internal: mw.Button
	public get mCoinBuyButton(): mw.Button {
		if(!this.mCoinBuyButton_Internal&&this.uiWidgetBase) {
			this.mCoinBuyButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mCoinBuyCanvas/mCoinBuyButton') as mw.Button
		}
		return this.mCoinBuyButton_Internal
	}
	private mCoinPriceTextBlock_Internal: mw.TextBlock
	public get mCoinPriceTextBlock(): mw.TextBlock {
		if(!this.mCoinPriceTextBlock_Internal&&this.uiWidgetBase) {
			this.mCoinPriceTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mCoinBuyCanvas/mCoinPriceTextBlock') as mw.TextBlock
		}
		return this.mCoinPriceTextBlock_Internal
	}
	private mUseCanvas_Internal: mw.Canvas
	public get mUseCanvas(): mw.Canvas {
		if(!this.mUseCanvas_Internal&&this.uiWidgetBase) {
			this.mUseCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mUseCanvas') as mw.Canvas
		}
		return this.mUseCanvas_Internal
	}
	private mUseButton_Internal: mw.Button
	public get mUseButton(): mw.Button {
		if(!this.mUseButton_Internal&&this.uiWidgetBase) {
			this.mUseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mUseCanvas/mUseButton') as mw.Button
		}
		return this.mUseButton_Internal
	}
	private mUesTextBlock_Internal: mw.TextBlock
	public get mUesTextBlock(): mw.TextBlock {
		if(!this.mUesTextBlock_Internal&&this.uiWidgetBase) {
			this.mUesTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mUseCanvas/mUesTextBlock') as mw.TextBlock
		}
		return this.mUesTextBlock_Internal
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
		
		this.mPreButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mPreButton");
		});
		this.mPreButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mDiamondBuyButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mDiamondBuyButton");
		});
		this.mDiamondBuyButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCoinBuyButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCoinBuyButton");
		});
		this.mCoinBuyButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mUseButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mUseButton");
		});
		this.mUseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mNameTextBlock)
		
	
		this.initLanguage(this.mHasTypeTextBlock)
		
	
		this.initLanguage(this.mHasTextBlock)
		
	
		this.initLanguage(this.mHurtTextBlock)
		
	
		this.initLanguage(this.mBulletCountTextBlock)
		
	
		this.initLanguage(this.mDiamondBuyTextBlock)
		
	
		this.initLanguage(this.mCoinPriceTextBlock)
		
	
		this.initLanguage(this.mUesTextBlock)
		
	
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
 