/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/ActivityModule/ActivityPanel.ui
 * TIME: 2024.12.31-20.21.19
 */
 
@UIBind('UI/module/ActivityModule/ActivityPanel.ui')
export default class ActivityPanel_Generate extends UIScript {
		private mWhatDayTextBlock_Internal: mw.TextBlock
	public get mWhatDayTextBlock(): mw.TextBlock {
		if(!this.mWhatDayTextBlock_Internal&&this.uiWidgetBase) {
			this.mWhatDayTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWhatDayTextBlock') as mw.TextBlock
		}
		return this.mWhatDayTextBlock_Internal
	}
	private mAdsGetButton_Internal: mw.Button
	public get mAdsGetButton(): mw.Button {
		if(!this.mAdsGetButton_Internal&&this.uiWidgetBase) {
			this.mAdsGetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAdsGetButton') as mw.Button
		}
		return this.mAdsGetButton_Internal
	}
	private mAdsTextBlock_Internal: mw.TextBlock
	public get mAdsTextBlock(): mw.TextBlock {
		if(!this.mAdsTextBlock_Internal&&this.uiWidgetBase) {
			this.mAdsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAdsGetButton/mAdsTextBlock') as mw.TextBlock
		}
		return this.mAdsTextBlock_Internal
	}
	private mMinutesTextBlock_Internal: mw.TextBlock
	public get mMinutesTextBlock(): mw.TextBlock {
		if(!this.mMinutesTextBlock_Internal&&this.uiWidgetBase) {
			this.mMinutesTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GetCanvas/mMinutesTextBlock') as mw.TextBlock
		}
		return this.mMinutesTextBlock_Internal
	}
	private mGetButton_Internal: mw.Button
	public get mGetButton(): mw.Button {
		if(!this.mGetButton_Internal&&this.uiWidgetBase) {
			this.mGetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GetCanvas/mGetButton') as mw.Button
		}
		return this.mGetButton_Internal
	}
	private mGetTextBlock_Internal: mw.TextBlock
	public get mGetTextBlock(): mw.TextBlock {
		if(!this.mGetTextBlock_Internal&&this.uiWidgetBase) {
			this.mGetTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GetCanvas/mGetButton/mGetTextBlock') as mw.TextBlock
		}
		return this.mGetTextBlock_Internal
	}
	private mIconImage_Internal: mw.Image
	public get mIconImage(): mw.Image {
		if(!this.mIconImage_Internal&&this.uiWidgetBase) {
			this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ICONCanvas/mIconImage') as mw.Image
		}
		return this.mIconImage_Internal
	}
	private mIconTextBlock_Internal: mw.TextBlock
	public get mIconTextBlock(): mw.TextBlock {
		if(!this.mIconTextBlock_Internal&&this.uiWidgetBase) {
			this.mIconTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ICONCanvas/mIconTextBlock') as mw.TextBlock
		}
		return this.mIconTextBlock_Internal
	}
	private mLeftButton_Internal: mw.Button
	public get mLeftButton(): mw.Button {
		if(!this.mLeftButton_Internal&&this.uiWidgetBase) {
			this.mLeftButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PreviewCanvas/mLeftButton') as mw.Button
		}
		return this.mLeftButton_Internal
	}
	private mIndexTextBlock_Internal: mw.TextBlock
	public get mIndexTextBlock(): mw.TextBlock {
		if(!this.mIndexTextBlock_Internal&&this.uiWidgetBase) {
			this.mIndexTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PreviewCanvas/mIndexTextBlock') as mw.TextBlock
		}
		return this.mIndexTextBlock_Internal
	}
	private mRightButton_Internal: mw.Button
	public get mRightButton(): mw.Button {
		if(!this.mRightButton_Internal&&this.uiWidgetBase) {
			this.mRightButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PreviewCanvas/mRightButton') as mw.Button
		}
		return this.mRightButton_Internal
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
		
		this.mAdsGetButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mAdsGetButton");
		});
		this.mAdsGetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mGetButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mGetButton");
		});
		this.mGetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mLeftButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mLeftButton");
		});
		this.mLeftButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mRightButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mRightButton");
		});
		this.mRightButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCloseButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
		});
		this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mWhatDayTextBlock)
		
	
		this.initLanguage(this.mAdsTextBlock)
		
	
		this.initLanguage(this.mMinutesTextBlock)
		
	
		this.initLanguage(this.mGetTextBlock)
		
	
		this.initLanguage(this.mIconTextBlock)
		
	
		this.initLanguage(this.mIndexTextBlock)
		
	
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
 