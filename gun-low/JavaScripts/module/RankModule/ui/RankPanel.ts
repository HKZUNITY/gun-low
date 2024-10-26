import { EventType } from "../../../tools/EventType";
import Utils from "../../../tools/Utils";
import RankPanel_Generate from "../../../ui-generate/module/RankModule/RankPanel_generate";
import { RoomData, WorldData } from "../RankData";
import RoomItem from "./RoomItem";
import WorldItem from "./WorldItem";

export default class RankPanel extends RankPanel_Generate {

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		this.initData();
		this.bindButton();
	}

	private initData(): void {
		this.initUI();
	}

	private bindButton(): void {
		this.mRoomButton.onClicked.add(this.bindRoomButton.bind(this));
		this.mWorldButton.onClicked.add(this.bindWorldButton.bind(this));
		this.mCloseButton.onClicked.add(this.bindCloseButton.bind(this));
	}

	private initUI(): void {
		this.switchRankType(true);
	}

	private bindRoomButton(): void {
		this.switchRankType(true);
	}

	private bindWorldButton(): void {
		this.switchRankType(false);
	}

	private bindCloseButton(): void {
		this.hideTween();
		Event.dispatchToLocal(EventType.OnOffMainHUD, true);
	}

	public refreshRankPanel_RoomWorld(redRoomDatas: RoomData[], blueRoomDatas: RoomData[], isRedTeam: boolean, curRoomIndex: number,
		worldDatas: WorldData[], curWorldIndex: number): void {
		this.refreshRoomRankPanel(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex);
		this.refreshWorldRankPanel(worldDatas, curWorldIndex);
	}

	public refreshRankPanel_Room(redRoomDatas: RoomData[], blueRoomDatas: RoomData[], isRedTeam: boolean, curRoomIndex: number): void {
		this.refreshRoomRankPanel(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex);
	}

	private redRoomItems: RoomItem[] = [];
	private blueRoomItems: RoomItem[] = [];
	private refreshRoomRankPanel(redRoomDatas: RoomData[], blueRoomDatas: RoomData[], isRedTeam: boolean, curRoomIndex: number): void {
		// console.error("isRedTeam = " + isRedTeam + " curRoomIndex = " + curRoomIndex);
		if (redRoomDatas.length > this.redRoomItems.length) {
			for (let i = 0; i < this.redRoomItems.length; ++i) {
				this.redRoomItems[i].setData(i + 1, redRoomDatas[i], isRedTeam && (i == curRoomIndex));
				Utils.setWidgetVisibility(this.redRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.redRoomItems.length; i < redRoomDatas.length; ++i) {
				let redItem = UIService.create(RoomItem);
				redItem.setData(i + 1, redRoomDatas[i], isRedTeam && (i == curRoomIndex));
				this.mRedRoomContentCanvas.addChild(redItem.uiObject);
				this.redRoomItems.push(redItem);
			}
		} else {
			for (let i = 0; i < redRoomDatas.length; ++i) {
				this.redRoomItems[i].setData(i + 1, redRoomDatas[i], isRedTeam && (i == curRoomIndex));
				Utils.setWidgetVisibility(this.redRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = redRoomDatas.length; i < this.redRoomItems.length; ++i) {
				Utils.setWidgetVisibility(this.redRoomItems[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}

		if (blueRoomDatas.length > this.blueRoomItems.length) {
			for (let i = 0; i < this.blueRoomItems.length; ++i) {
				this.blueRoomItems[i].setData(i + 1, blueRoomDatas[i], !isRedTeam && (i == curRoomIndex));
				Utils.setWidgetVisibility(this.blueRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.blueRoomItems.length; i < blueRoomDatas.length; ++i) {
				let blueItem = UIService.create(RoomItem);
				blueItem.setData(i + 1, blueRoomDatas[i], !isRedTeam && (i == curRoomIndex));
				this.mBlueRoomContnetCanvas.addChild(blueItem.uiObject);
				this.blueRoomItems.push(blueItem);
			}
		} else {
			for (let i = 0; i < blueRoomDatas.length; ++i) {
				this.blueRoomItems[i].setData(i + 1, blueRoomDatas[i], !isRedTeam && (i == curRoomIndex));
				Utils.setWidgetVisibility(this.blueRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = blueRoomDatas.length; i < this.blueRoomItems.length; ++i) {
				Utils.setWidgetVisibility(this.blueRoomItems[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}
	}

	private worldItems: WorldItem[] = [];
	private refreshWorldRankPanel(worldDatas: WorldData[], curWorldIndex: number): void {
		if (worldDatas.length > this.worldItems.length) {
			for (let i = 0; i < this.worldItems.length; ++i) {
				this.worldItems[i].setData(i + 1, worldDatas[i], i == curWorldIndex);
				Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.worldItems.length; i < worldDatas.length; ++i) {
				let worldItem = UIService.create(WorldItem);
				worldItem.setData(i + 1, worldDatas[i], i == curWorldIndex);
				this.mWorldContentCanvas.addChild(worldItem.uiObject);
				this.worldItems.push(worldItem);
			}
		} else {
			for (let i = 0; i < worldDatas.length; ++i) {
				this.worldItems[i].setData(i + 1, worldDatas[i], i == curWorldIndex);
				Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = worldDatas.length; i < this.worldItems.length; ++i) {
				Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}
	}

	private switchRankType(isRoom: boolean): void {
		Utils.setWidgetVisibility(this.mRoomCanvas, isRoom ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mWorldCanvas, isRoom ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible);
		Utils.setButtonEnable(this.mRoomButton, !isRoom);
		Utils.setButtonEnable(this.mWorldButton, isRoom);
		Utils.setWidgetVisibility(this.mRoomSignImage, isRoom ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mWorldSignImage, isRoom ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible);
	}

	protected onShow(...params: any[]): void {
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
			}
		);
	}
}