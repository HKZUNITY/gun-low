﻿/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/TeamModule/TeamPanel.ui
 * TIME: 2025.01.02-22.17.23
 */
 
@UIBind('UI/module/TeamModule/TeamPanel.ui')
export default class TeamPanel_Generate extends UIScript {
		private mMainCanvas_Internal: mw.Canvas
	public get mMainCanvas(): mw.Canvas {
		if(!this.mMainCanvas_Internal&&this.uiWidgetBase) {
			this.mMainCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas') as mw.Canvas
		}
		return this.mMainCanvas_Internal
	}
	private mRedTeadCanvas_Internal: mw.Canvas
	public get mRedTeadCanvas(): mw.Canvas {
		if(!this.mRedTeadCanvas_Internal&&this.uiWidgetBase) {
			this.mRedTeadCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mRedTeadCanvas') as mw.Canvas
		}
		return this.mRedTeadCanvas_Internal
	}
	private mBlueTeamCanvas_Internal: mw.Canvas
	public get mBlueTeamCanvas(): mw.Canvas {
		if(!this.mBlueTeamCanvas_Internal&&this.uiWidgetBase) {
			this.mBlueTeamCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mBlueTeamCanvas') as mw.Canvas
		}
		return this.mBlueTeamCanvas_Internal
	}
	private mRedTeamButton_Internal: mw.Button
	public get mRedTeamButton(): mw.Button {
		if(!this.mRedTeamButton_Internal&&this.uiWidgetBase) {
			this.mRedTeamButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mRedTeamButton') as mw.Button
		}
		return this.mRedTeamButton_Internal
	}
	private mRedTeamTextBlock_Internal: mw.TextBlock
	public get mRedTeamTextBlock(): mw.TextBlock {
		if(!this.mRedTeamTextBlock_Internal&&this.uiWidgetBase) {
			this.mRedTeamTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mRedTeamButton/mRedTeamTextBlock') as mw.TextBlock
		}
		return this.mRedTeamTextBlock_Internal
	}
	private mBlueTeamButton_Internal: mw.Button
	public get mBlueTeamButton(): mw.Button {
		if(!this.mBlueTeamButton_Internal&&this.uiWidgetBase) {
			this.mBlueTeamButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mBlueTeamButton') as mw.Button
		}
		return this.mBlueTeamButton_Internal
	}
	private mBlueTeamTextBlock_Internal: mw.TextBlock
	public get mBlueTeamTextBlock(): mw.TextBlock {
		if(!this.mBlueTeamTextBlock_Internal&&this.uiWidgetBase) {
			this.mBlueTeamTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mBlueTeamButton/mBlueTeamTextBlock') as mw.TextBlock
		}
		return this.mBlueTeamTextBlock_Internal
	}
	private mRedTextBlock_Internal: mw.TextBlock
	public get mRedTextBlock(): mw.TextBlock {
		if(!this.mRedTextBlock_Internal&&this.uiWidgetBase) {
			this.mRedTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TitleCanvas/mRedTextBlock') as mw.TextBlock
		}
		return this.mRedTextBlock_Internal
	}
	private mBlueTextBlock_Internal: mw.TextBlock
	public get mBlueTextBlock(): mw.TextBlock {
		if(!this.mBlueTextBlock_Internal&&this.uiWidgetBase) {
			this.mBlueTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TitleCanvas/mBlueTextBlock') as mw.TextBlock
		}
		return this.mBlueTextBlock_Internal
	}
	private mCloseButton_Internal: mw.Button
	public get mCloseButton(): mw.Button {
		if(!this.mCloseButton_Internal&&this.uiWidgetBase) {
			this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TitleCanvas/mCloseButton') as mw.Button
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
		
		this.mRedTeamButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mRedTeamButton");
		});
		this.mRedTeamButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mBlueTeamButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mBlueTeamButton");
		});
		this.mBlueTeamButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCloseButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
		});
		this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mRedTeamTextBlock)
		
	
		this.initLanguage(this.mBlueTeamTextBlock)
		
	
		this.initLanguage(this.mRedTextBlock)
		
	
		this.initLanguage(this.mBlueTextBlock)
		
	
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
 