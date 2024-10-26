/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RankModule/RankPanel.ui
 * TIME: 2024.06.22-23.56.51
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
		
		//文本多语言
		
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/MainRoomCanvas/TitleRoomCanvas/RedRoomTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/MainRoomCanvas/TitleRoomCanvas/BlueRoomTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/RedTitleRoomCanvas/RedRankTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/RedTitleRoomCanvas/RedNameTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/RedTitleRoomCanvas/RedKillCountTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/RedTitleRoomCanvas/RedDieCountTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/BlueRankTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/BlueNameTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/BlueKillCountTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/BlueDieCountTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/MainWorldCanvas/TitleWorldCanvas/TitleTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/WorldCanvas/WorldRankTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/WorldCanvas/WorldNameTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/WorldCanvas/WorldKillCountTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mWorldCanvas/WorldCanvas/WorldDieCountTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/TypeCanvas/RoomCanvas/RoomTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/TypeCanvas/WorldCanvas/WorldTextBlock") as any);
		
	
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
 