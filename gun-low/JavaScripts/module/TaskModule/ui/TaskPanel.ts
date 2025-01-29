import { GameConfig } from "../../../config/GameConfig";
import { ITaskElement } from "../../../config/Task";
import { EventType } from "../../../tools/EventType";
import GlobalData from "../../../tools/GlobalData";
import Utils from "../../../tools/Utils";
import TaskItem_Generate from "../../../ui-generate/module/TaskModule/TaskItem_generate";
import TaskPanel_Generate from "../../../ui-generate/module/TaskModule/TaskPanel_generate";
import HUDPanel from "../../HUDModule/ui/HUDPanel";
import { TaskItemType, Task } from "../TaskData";
import TaskModuleC from "../TaskModuleC";

export default class TaskPanel extends TaskPanel_Generate {
	private hudPanel: HUDPanel = null;
	private get getHUDPanel(): HUDPanel {
		if (this.hudPanel == null) {
			this.hudPanel = mw.UIService.getUI(HUDPanel);
		}
		return this.hudPanel;
	}

	protected onStart(): void {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = mw.UILayerMiddle;
		this.initUIPanel();
		this.bindButton();
		this.initTime();
		this.initTextBlock();
	}

	private initTextBlock(): void {
		this.mDailyTaskTitleTextBlock.text = GameConfig.Language.Text_DailyTasks.Value;
		this.mDailyTaskDoneTextBlock.text = GameConfig.Language.Text_AllTasksHaveBeenCompletedWaitingForRefresh.Value;
		this.mWeekTaskTitleTextBlock.text = GameConfig.Language.Text_WeeklyTasks.Value
		this.mWeekTaskDoneTextBlock.text = GameConfig.Language.Text_AllTasksHaveBeenCompletedWaitingForRefresh.Value;
		if (GlobalData.languageId == 0) {
			this.mDailyTaskTitleTextBlock.fontSize = 40;
			this.mWeekTaskTitleTextBlock.fontSize = 35;
			this.mDailyTimeTextBlock.fontSize = 18;
			this.mWeekTimeTextBlock.fontSize = 18;
		} else {
			this.mDailyTaskTitleTextBlock.fontSize = 50;
			this.mWeekTaskTitleTextBlock.fontSize = 50;
			this.mDailyTimeTextBlock.fontSize = 30;
			this.mWeekTimeTextBlock.fontSize = 30;
		}
	}

	private initUIPanel(): void {
		this.hudPanel = mw.UIService.getUI(HUDPanel);
	}

	private bindButton(): void {
		this.mCloseButton.onClicked.add(this.hideTween.bind(this));
	}

	/**
	 * 隐藏缓动
	 */
	public hideTween(): void {
		Event.dispatchToLocal(EventType.OnOffMainHUD, true);
		Utils.closeUITween(
			this.rootCanvas,
			null,
			() => {
				this.hide();
			});
	}

	protected onShow(...params: any[]): void {
		this.canUpdate = true;
		Utils.openUITween(
			this.rootCanvas,
			null,
			null
		);
	}

	protected onHide(): void {
		this.canUpdate = false;
	}

	private picIndex: number = 0;
	private isPic: boolean = false;
	public controllerPic(value: number): void {
		this.picIndex += value;
		if (this.picIndex > 0 && this.isPic == false) {
			this.getHUDPanel.startTaskRedPointTween();
			this.isPic = true;
		} else if (this.picIndex <= 0 && this.isPic == true) {
			this.getHUDPanel.stopTaskRedPointTween();
			this.isPic = false;
		}
	}

	public initTaskPanel(dailyTaskDataMap: Map<TaskItemType, Task>, weeklyTaskDataMap: Map<TaskItemType, Task>): void {
		this.initDailyTaskPanel(dailyTaskDataMap);
		this.initWeeklyTaskPanel(weeklyTaskDataMap);
	}

	private dailyTaskItemsMap: Map<TaskItemType, TaskItem> = new Map<TaskItemType, TaskItem>();
	private initDailyTaskPanel(dailyTaskDataMap: Map<TaskItemType, Task>): void {
		this.recycleAllDailyTaskItem();
		if (dailyTaskDataMap.size == 0) return;
		Utils.setWidgetVisibility(this.mDailyTaskDoneTextBlock, mw.SlateVisibility.Collapsed);
		dailyTaskDataMap.forEach((value: Task, key: TaskItemType) => {
			let dailyTaskItem = UIService.create(TaskItem);
			dailyTaskItem.initTaskItemData(key, value);
			this.mDailyTaskCanvas.addChild(dailyTaskItem.uiObject);
			this.dailyTaskItemsMap.set(key, dailyTaskItem);
		});
	}

	public updateTaskPanel(vipTaskType: TaskItemType, progress: number): void {
		if (this.dailyTaskItemsMap.has(vipTaskType)) {
			let dailyTaskItem = this.dailyTaskItemsMap.get(vipTaskType);
			dailyTaskItem.updateTaskItemData(progress);
		}
		if (this.weeklyTaskItemsMap.has(vipTaskType)) {
			let weeklyTaskItem = this.weeklyTaskItemsMap.get(vipTaskType);
			weeklyTaskItem.updateTaskItemData(progress);
		}
	}

	private weeklyTaskItemsMap: Map<TaskItemType, TaskItem> = new Map<TaskItemType, TaskItem>();
	private initWeeklyTaskPanel(weeklyTaskDataMap: Map<TaskItemType, Task>): void {
		this.recycleAllWeeklyTaskItem();
		if (weeklyTaskDataMap.size == 0) return;
		Utils.setWidgetVisibility(this.mWeekTaskDoneTextBlock, mw.SlateVisibility.Collapsed);
		weeklyTaskDataMap.forEach((value, key) => {
			let weeklyTaskItem = UIService.create(TaskItem);
			weeklyTaskItem.initTaskItemData(key, value);
			this.mWeekTaskCanvas.addChild(weeklyTaskItem.uiObject);
			this.weeklyTaskItemsMap.set(key, weeklyTaskItem);
		});
	}

	public updateTaskCompletePanel(vipTaskType: TaskItemType): void {
		if (this.dailyTaskItemsMap.has(vipTaskType)) {
			let dailyTaskItem = this.dailyTaskItemsMap.get(vipTaskType);
			dailyTaskItem.updateTaskCompaleteItemData();
		}
		if (this.weeklyTaskItemsMap.has(vipTaskType)) {
			let weeklyTaskItem = this.weeklyTaskItemsMap.get(vipTaskType);
			weeklyTaskItem.updateTaskCompaleteItemData();
		}
	}

	public recycleTaskItem(vipTaskType: TaskItemType): void {
		if (this.dailyTaskItemsMap.has(vipTaskType)) {
			let dailyTaskItem = this.dailyTaskItemsMap.get(vipTaskType);
			dailyTaskItem.destroy();
			this.dailyTaskItemsMap.delete(vipTaskType);
			// this.mDailyTaskBox.scrollOffset = 0;
			if (this.dailyTaskItemsMap.size <= 0) {
				Utils.setWidgetVisibility(this.mDailyTaskDoneTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
			}
		}
		if (this.weeklyTaskItemsMap.has(vipTaskType)) {
			let weeklyTaskItem = this.weeklyTaskItemsMap.get(vipTaskType);
			weeklyTaskItem.destroy();
			this.weeklyTaskItemsMap.delete(vipTaskType);
			// this.mWeekTaskBox.scrollOffset = 0;
			if (this.weeklyTaskItemsMap.size <= 0) {
				Utils.setWidgetVisibility(this.mWeekTaskDoneTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
			}
		}
	}

	private recycleAllDailyTaskItem(): void {
		if (this.dailyTaskItemsMap.size == 0) return;
		this.dailyTaskItemsMap.forEach((value, key) => {
			value.destroy();
			this.dailyTaskItemsMap.delete(key);
		});
		// this.mDailyTaskBox.scrollOffset = 0;
		this.dailyTaskItemsMap.clear();
	}

	private recycleAllWeeklyTaskItem(): void {
		if (this.weeklyTaskItemsMap.size == 0) return;
		this.weeklyTaskItemsMap.forEach((value, key) => {
			value.destroy();
			this.weeklyTaskItemsMap.delete(key);
		});
		// this.mWeekTaskBox.scrollOffset = 0;
		this.weeklyTaskItemsMap.clear();
	}

	private refreshDailyHourTime: number = 0;
	private refreshWeekHourTime: number = 0;
	private initTime(): void {
		this.refreshDailyHourTime = Number(GlobalData.dailyRefreshTime.split(':')[0]);
		this.refreshWeekHourTime = Number(GlobalData.weeklyRefreshTime.split(':')[0]);
		this.hour = new Date().getHours();
		this.updateHourTime();
		this.week = 8 - Number(Utils.getWhatDay());
		this.updateWeekTime();
	}

	private hourTimer: number = 0;
	private hourTime: number = 60;
	onUpdate(dt: number): void {
		this.hourTimer += dt;
		if (this.hourTimer >= this.hourTime) {
			let hour = new Date().getHours();
			if (hour != this.hour) {
				this.hour = hour;
				this.updateHourTime();
			}
			let week = Number(Utils.getWhatDay());
			if (week != this.week) {
				this.week = week;
				this.updateWeekTime();
			}
			this.hourTimer = 0;
		}
	}

	private hour: number = 0;
	private updateHourTime(): void {
		if (this.hour >= 0 && this.hour < this.refreshDailyHourTime) {
			this.hour = this.refreshDailyHourTime - this.hour;
		} else {
			this.hour = 24 - this.hour + this.refreshDailyHourTime;
		}
		this.mDailyTimeTextBlock.text = StringUtil.format(GameConfig.Language.Text_RemainingHours.Value, this.hour);
	}

	private week: number = 0;
	private updateWeekTime(): void {
		if (Number(Utils.getWhatDay()) == 1 && this.hour < this.refreshWeekHourTime) {
			this.mWeekTimeTextBlock.text = StringUtil.format(GameConfig.Language.Text_RemainingDays.Value, 1);
			this.week = 1;
		} else {
			this.mWeekTimeTextBlock.text = StringUtil.format(GameConfig.Language.Text_RemainingDays.Value, this.week);
		}
	}
}

export class TaskItem extends TaskItem_Generate {
	protected onStart(): void {
		this.initUI();
		this.initTextBlock();
	}

	private initTextBlock(): void {
		this.mFinishTextBlock.text = GameConfig.Language.Text_ClaimRewards.Value;
		this.mUnfinishTextBlock.text = GameConfig.Language.Text_HangInTheAir.Value;
		if (GlobalData.languageId == 0) {
			this.mNameTextBlock.fontSize = 16;
			this.mFinishTextBlock.fontSize = 15;
			this.mUnfinishTextBlock.fontSize = 15;
		} else {
			this.mNameTextBlock.fontSize = 20;
			this.mFinishTextBlock.fontSize = 24;
			this.mUnfinishTextBlock.fontSize = 24;
		}
	}

	private initUI(): void {
		Utils.setWidgetVisibility(this.mFinishButton, mw.SlateVisibility.Collapsed);
	}

	public vipTaskType: TaskItemType = TaskItemType.None;
	public task: Task = null;
	private vIPTaskElement: ITaskElement = null;
	/**填充item数据 */
	public initTaskItemData(vipTaskType: TaskItemType, task: Task): void {
		this.vipTaskType = vipTaskType;
		this.task = task;
		this.vIPTaskElement = GameConfig.Task.getElement(this.task.taskId);
		if (task.isGetReward) {
			this.isShowFinishBtn(false);
			Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.Collapsed);
		} else {
			let isShow = task.progress >= this.vIPTaskElement.TragetNum;
			this.isShowFinishBtn(isShow);
			if (isShow) {
				mw.UIService.getUI(TaskPanel).controllerPic(1);
			}
		}
		this.mNameTextBlock.text = StringUtil.format(this.vIPTaskElement.Name, this.task.progress, this.vIPTaskElement.TragetNum, this.vIPTaskElement.TragetNum);
		this.mCoinTextBlock.text = this.vIPTaskElement.Coin.toString();
		this.mDiamondTextBlock.text = this.vIPTaskElement.Diamond.toString();
		if (this.vIPTaskElement.Diamond == 0 || this.vIPTaskElement.Diamond == null) {
			Utils.setWidgetVisibility(this.mDiamondCanvas, mw.SlateVisibility.Collapsed);
		}
		this.mFinishButton.onClicked.add(() => {
			ModuleService.getModule(TaskModuleC).onTaskRewardAction.call(this.vipTaskType, this.task.taskId);
			mw.UIService.getUI(TaskPanel).controllerPic(-1);
		});
	}

	public isShowFinishBtn(isShow: boolean): void {
		if (isShow) {
			Utils.setWidgetVisibility(this.mFinishButton, mw.SlateVisibility.Visible);
			Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.Collapsed);
		} else {
			Utils.setWidgetVisibility(this.mFinishButton, mw.SlateVisibility.Collapsed);
			Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
		}
	}

	public updateTaskItemData(progress: number): void {
		let tragetNum = this.vIPTaskElement.TragetNum;
		this.task.progress = progress;
		this.mNameTextBlock.text = StringUtil.format(this.vIPTaskElement.Name, progress, tragetNum);
		if (progress >= tragetNum) {
			if (this.mFinishButton.visibility != mw.SlateVisibility.Visible) {
				mw.UIService.getUI(TaskPanel).controllerPic(1);
			}
			this.isShowFinishBtn(true);
		}
	}

	public updateTaskCompaleteItemData(): void {
		let nextId = this.vIPTaskElement.NextId;
		// console.error(`nextId = ${nextId}`);
		if (nextId != 0) {
			this.task.taskId = nextId;
			// this.task.progress = 0;
			this.task.isGetReward = false;

			this.vIPTaskElement = GameConfig.Task.getElement(nextId);
			this.mNameTextBlock.text = StringUtil.format(this.vIPTaskElement.Name, this.task.progress, this.vIPTaskElement.TragetNum);
			this.mCoinTextBlock.text = this.vIPTaskElement.Coin.toString();
			this.mDiamondTextBlock.text = this.vIPTaskElement.Diamond.toString();
			if (this.task.progress >= this.vIPTaskElement.TragetNum) {
				this.isShowFinishBtn(true);
				mw.UIService.getUI(TaskPanel).controllerPic(1);
				return;
			}
		} else {
			Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.Collapsed);
			this.task.isGetReward = true;
			mw.UIService.getUI(TaskPanel).recycleTaskItem(this.vipTaskType);
			return;
		}
		this.isShowFinishBtn(false);
	}
}