/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RankModule/RankPanel.ui
 * TIME: 2024.12.31-20.21.20
 */
 
@UIBind('UI/module/RankModule/RankPanel.ui')
export default class RankPanel_Generate extends UIScript {
		private mRoomCanvas_Internal: mw.Canvas
	public get mRoomCanvas(): mw.Canvas {
		if(!this.mRoomCanvas_Internal&&this.uiWidgetBase) {
			this.mRoomCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas') as mw.Canvas
		}
		return this.mRoomCanvas_Internal
	}
	private mRedRoomTextBlock_Internal: mw.TextBlock
	public get mRedRoomTextBlock(): mw.TextBlock {
		if(!this.mRedRoomTextBlock_Internal&&this.uiWidgetBase) {
			this.mRedRoomTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/MainRoomCanvas/TitleRoomCanvas/mRedRoomTextBlock') as mw.TextBlock
		}
		return this.mRedRoomTextBlock_Internal
	}
	private mBlueRoomTextBlock_Internal: mw.TextBlock
	public get mBlueRoomTextBlock(): mw.TextBlock {
		if(!this.mBlueRoomTextBlock_Internal&&this.uiWidgetBase) {
			this.mBlueRoomTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/MainRoomCanvas/TitleRoomCanvas/mBlueRoomTextBlock') as mw.TextBlock
		}
		return this.mBlueRoomTextBlock_Internal
	}
	private mRedRankTextBlock_Internal: mw.TextBlock
	public get mRedRankTextBlock(): mw.TextBlock {
		if(!this.mRedRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mRedRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/RedTitleRoomCanvas/mRedRankTextBlock') as mw.TextBlock
		}
		return this.mRedRankTextBlock_Internal
	}
	private mRedNameTextBlock_Internal: mw.TextBlock
	public get mRedNameTextBlock(): mw.TextBlock {
		if(!this.mRedNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mRedNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/RedTitleRoomCanvas/mRedNameTextBlock') as mw.TextBlock
		}
		return this.mRedNameTextBlock_Internal
	}
	private mRedKillCountTextBlock_Internal: mw.TextBlock
	public get mRedKillCountTextBlock(): mw.TextBlock {
		if(!this.mRedKillCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mRedKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/RedTitleRoomCanvas/mRedKillCountTextBlock') as mw.TextBlock
		}
		return this.mRedKillCountTextBlock_Internal
	}
	private mRedDieCountTextBlock_Internal: mw.TextBlock
	public get mRedDieCountTextBlock(): mw.TextBlock {
		if(!this.mRedDieCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mRedDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/RedTitleRoomCanvas/mRedDieCountTextBlock') as mw.TextBlock
		}
		return this.mRedDieCountTextBlock_Internal
	}
	private mBlueRankTextBlock_Internal: mw.TextBlock
	public get mBlueRankTextBlock(): mw.TextBlock {
		if(!this.mBlueRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mBlueRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/mBlueRankTextBlock') as mw.TextBlock
		}
		return this.mBlueRankTextBlock_Internal
	}
	private mBlueNameTextBlock_Internal: mw.TextBlock
	public get mBlueNameTextBlock(): mw.TextBlock {
		if(!this.mBlueNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mBlueNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/mBlueNameTextBlock') as mw.TextBlock
		}
		return this.mBlueNameTextBlock_Internal
	}
	private mBlueKillCountTextBlock_Internal: mw.TextBlock
	public get mBlueKillCountTextBlock(): mw.TextBlock {
		if(!this.mBlueKillCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mBlueKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/mBlueKillCountTextBlock') as mw.TextBlock
		}
		return this.mBlueKillCountTextBlock_Internal
	}
	private mBlueDieCountTextBlock_Internal: mw.TextBlock
	public get mBlueDieCountTextBlock(): mw.TextBlock {
		if(!this.mBlueDieCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mBlueDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/mBlueDieCountTextBlock') as mw.TextBlock
		}
		return this.mBlueDieCountTextBlock_Internal
	}
	private mRedRoomContentCanvas_Internal: mw.Canvas
	public get mRedRoomContentCanvas(): mw.Canvas {
		if(!this.mRedRoomContentCanvas_Internal&&this.uiWidgetBase) {
			this.mRedRoomContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/mRedRoomContentCanvas') as mw.Canvas
		}
		return this.mRedRoomContentCanvas_Internal
	}
	private mBlueRoomContnetCanvas_Internal: mw.Canvas
	public get mBlueRoomContnetCanvas(): mw.Canvas {
		if(!this.mBlueRoomContnetCanvas_Internal&&this.uiWidgetBase) {
			this.mBlueRoomContnetCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/mBlueRoomContnetCanvas') as mw.Canvas
		}
		return this.mBlueRoomContnetCanvas_Internal
	}
	private mWorldCanvas_Internal: mw.Canvas
	public get mWorldCanvas(): mw.Canvas {
		if(!this.mWorldCanvas_Internal&&this.uiWidgetBase) {
			this.mWorldCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas') as mw.Canvas
		}
		return this.mWorldCanvas_Internal
	}
	private mTitleTextBlock_Internal: mw.TextBlock
	public get mTitleTextBlock(): mw.TextBlock {
		if(!this.mTitleTextBlock_Internal&&this.uiWidgetBase) {
			this.mTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/MainWorldCanvas/TitleWorldCanvas/mTitleTextBlock') as mw.TextBlock
		}
		return this.mTitleTextBlock_Internal
	}
	private mWorldRankTextBlock_Internal: mw.TextBlock
	public get mWorldRankTextBlock(): mw.TextBlock {
		if(!this.mWorldRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mWorldRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldRankTextBlock') as mw.TextBlock
		}
		return this.mWorldRankTextBlock_Internal
	}
	private mWorldNameTextBlock_Internal: mw.TextBlock
	public get mWorldNameTextBlock(): mw.TextBlock {
		if(!this.mWorldNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mWorldNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldNameTextBlock') as mw.TextBlock
		}
		return this.mWorldNameTextBlock_Internal
	}
	private mWorldKillCountTextBlock_Internal: mw.TextBlock
	public get mWorldKillCountTextBlock(): mw.TextBlock {
		if(!this.mWorldKillCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mWorldKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldKillCountTextBlock') as mw.TextBlock
		}
		return this.mWorldKillCountTextBlock_Internal
	}
	private mWorldDieCountTextBlock_Internal: mw.TextBlock
	public get mWorldDieCountTextBlock(): mw.TextBlock {
		if(!this.mWorldDieCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mWorldDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldDieCountTextBlock') as mw.TextBlock
		}
		return this.mWorldDieCountTextBlock_Internal
	}
	private mWorldContentCanvas_Internal: mw.Canvas
	public get mWorldContentCanvas(): mw.Canvas {
		if(!this.mWorldContentCanvas_Internal&&this.uiWidgetBase) {
			this.mWorldContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/ScrollBox/mWorldContentCanvas') as mw.Canvas
		}
		return this.mWorldContentCanvas_Internal
	}
	private mRoomButton_Internal: mw.Button
	public get mRoomButton(): mw.Button {
		if(!this.mRoomButton_Internal&&this.uiWidgetBase) {
			this.mRoomButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/RoomCanvas/mRoomButton') as mw.Button
		}
		return this.mRoomButton_Internal
	}
	private mRoomTextBlock_Internal: mw.TextBlock
	public get mRoomTextBlock(): mw.TextBlock {
		if(!this.mRoomTextBlock_Internal&&this.uiWidgetBase) {
			this.mRoomTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/RoomCanvas/mRoomTextBlock') as mw.TextBlock
		}
		return this.mRoomTextBlock_Internal
	}
	private mRoomSignImage_Internal: mw.Image
	public get mRoomSignImage(): mw.Image {
		if(!this.mRoomSignImage_Internal&&this.uiWidgetBase) {
			this.mRoomSignImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/RoomCanvas/mRoomSignImage') as mw.Image
		}
		return this.mRoomSignImage_Internal
	}
	private mWorldButton_Internal: mw.Button
	public get mWorldButton(): mw.Button {
		if(!this.mWorldButton_Internal&&this.uiWidgetBase) {
			this.mWorldButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/WorldCanvas/mWorldButton') as mw.Button
		}
		return this.mWorldButton_Internal
	}
	private mWorldTextBlock_Internal: mw.TextBlock
	public get mWorldTextBlock(): mw.TextBlock {
		if(!this.mWorldTextBlock_Internal&&this.uiWidgetBase) {
			this.mWorldTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/WorldCanvas/mWorldTextBlock') as mw.TextBlock
		}
		return this.mWorldTextBlock_Internal
	}
	private mWorldSignImage_Internal: mw.Image
	public get mWorldSignImage(): mw.Image {
		if(!this.mWorldSignImage_Internal&&this.uiWidgetBase) {
			this.mWorldSignImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/WorldCanvas/mWorldSignImage') as mw.Image
		}
		return this.mWorldSignImage_Internal
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
		
		this.mRoomButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mRoomButton");
		});
		this.mRoomButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mWorldButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mWorldButton");
		});
		this.mWorldButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCloseButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
		});
		this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mRedRoomTextBlock)
		
	
		this.initLanguage(this.mBlueRoomTextBlock)
		
	
		this.initLanguage(this.mRedRankTextBlock)
		
	
		this.initLanguage(this.mRedNameTextBlock)
		
	
		this.initLanguage(this.mRedKillCountTextBlock)
		
	
		this.initLanguage(this.mRedDieCountTextBlock)
		
	
		this.initLanguage(this.mBlueRankTextBlock)
		
	
		this.initLanguage(this.mBlueNameTextBlock)
		
	
		this.initLanguage(this.mBlueKillCountTextBlock)
		
	
		this.initLanguage(this.mBlueDieCountTextBlock)
		
	
		this.initLanguage(this.mTitleTextBlock)
		
	
		this.initLanguage(this.mWorldRankTextBlock)
		
	
		this.initLanguage(this.mWorldNameTextBlock)
		
	
		this.initLanguage(this.mWorldKillCountTextBlock)
		
	
		this.initLanguage(this.mWorldDieCountTextBlock)
		
	
		this.initLanguage(this.mRoomTextBlock)
		
	
		this.initLanguage(this.mWorldTextBlock)
		
	
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
 