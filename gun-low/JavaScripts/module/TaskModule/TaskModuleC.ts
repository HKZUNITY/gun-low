import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../config/GameConfig";
import { ITaskElement } from "../../config/Task";
import { EventType } from "../../tools/EventType";
import { MapEx } from "../../tools/MapEx";
import CoinModuleC from "../CoinModule/CoinModuleC";
import HUDModuleC from "../HUDModule/HUDModuleC";
import { TaskData, TaskItemType, Task, TaskType } from "./TaskData";
import TaskModuleS from "./TaskModuleS";
import TaskPanel from "./ui/TaskPanel";

export default class TaskModuleC extends ModuleC<TaskModuleS, TaskData> {
    private coinModuleC: CoinModuleC = null;
    private get getCoinModuleC(): CoinModuleC {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }

    private taskPanel: TaskPanel = null;
    private get getTaskPanel(): TaskPanel {
        if (this.taskPanel == null) {
            this.taskPanel = mw.UIService.getUI(TaskPanel);
        }
        return this.taskPanel;
    }

    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    /**执行任务（任务类型-数量） */
    public onExecuteTaskAction: Action2<TaskItemType, number> = new Action2<TaskItemType, number>();
    /**奖励（任务类型-ID） */
    public onTaskRewardAction: Action2<TaskItemType, number> = new Action2<number, number>();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }

    private initModule(): void {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.coinModuleC = ModuleService.getModule(CoinModuleC);
    }

    private initUIPanel(): void {
        this.taskPanel = mw.UIService.getUI(TaskPanel);
    }

    private initEventAction(): void {
        this.getHUDModuleC.onOpenTaskAction.add((this.addOpenTaskPanelAction.bind(this)));
        this.onExecuteTaskAction.add(this.executeTask.bind(this));
        this.onTaskRewardAction.add(this.getTaskRewardAndUpdateData.bind(this));
    }

    private addOpenTaskPanelAction(): void {
        this.getTaskPanel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }

    public net_getServerTaskData(): void {
        this.dailyTasks = this.data.dailyTasks;
        this.weeklyTasks = this.data.weeklyTasks;
        this.initTaskData();
        this.dailyLogin();
    }

    private tempDailTask: MapEx.MapExClass<Task> = {};
    private tempWeeklyTask: MapEx.MapExClass<Task> = {};
    private saveTaskToServer(): void {
        if (MapEx.count(this.tempDailTask) <= 0 && MapEx.count(this.tempWeeklyTask) <= 0) return;
        // console.error("[MapEx.count(this.tempDailTask)] A = " + MapEx.count(this.tempDailTask));
        // console.error("[MapEx.count(this.tempWeeklyTask)] A = " + MapEx.count(this.tempWeeklyTask));
        let dailyTaskIds: number[] = [];
        let dailyTaskTypes: TaskItemType[] = [];
        let dailyProgresss: number[] = [];
        if (MapEx.count(this.tempDailTask) > 0) {
            MapEx.forEach(this.tempDailTask, (key: number, value: Task) => {
                dailyTaskIds.push(value.taskId);
                dailyTaskTypes.push(key);
                dailyProgresss.push(value.progress);
                MapEx.del(this.tempDailTask, key);
                // console.error("[key] = " + key);
            });
        }
        let weeklyTaskIds: number[] = [];
        let weeklyTaskTypes: TaskItemType[] = [];
        let weeklyProgresss: number[] = [];
        if (MapEx.count(this.tempWeeklyTask) > 0) {
            MapEx.forEach(this.tempWeeklyTask, (key: number, value: Task) => {
                weeklyTaskIds.push(value.taskId);
                weeklyTaskTypes.push(key);
                weeklyProgresss.push(value.progress);
                MapEx.del(this.tempWeeklyTask, key);
            });
        }
        if (dailyTaskIds.length == 0 && weeklyTaskIds.length == 0) {
            // console.error("[dailyTaskIds.length == 0 && weeklyTaskIds.length == 0]");
            return;
        }
        this.server.net_saveTaskProgress(dailyTaskIds, dailyTaskTypes, dailyProgresss,
            weeklyTaskIds, weeklyTaskTypes, weeklyProgresss);
        // console.error("[MapEx.count(this.tempDailTask)] B = " + MapEx.count(this.tempDailTask));
        // console.error("[MapEx.count(this.tempWeeklyTask)] B = " + MapEx.count(this.tempWeeklyTask));
    }

    private dailyTasks: MapEx.MapExClass<Task> = {};
    private weeklyTasks: MapEx.MapExClass<Task> = {};
    private dailyTaskMap: Map<TaskItemType, ITaskElement> = new Map<TaskItemType, ITaskElement>();
    private weeklyTaskMap: Map<TaskItemType, ITaskElement> = new Map<TaskItemType, ITaskElement>();

    private initTaskData(): void {
        this.dailyTaskMap.clear();
        this.weeklyTaskMap.clear();
        let dailyTaskDataMap: Map<TaskItemType, Task> = new Map<TaskItemType, Task>();
        let weeklyTaskDataMap: Map<TaskItemType, Task> = new Map<TaskItemType, Task>();
        let task = GameConfig.Task.getAllElement();
        for (let i = 0; i < task.length; ++i) {
            if (task[i].TaskType == TaskType.DailyTask) {
                let vipTaskType = task[i].TaskItemType;
                if (this.dailyTaskMap.has(vipTaskType)) continue;
                if (MapEx.has(this.dailyTasks, vipTaskType)) {
                    let value = MapEx.get(this.dailyTasks, vipTaskType);
                    this.dailyTaskMap.set(vipTaskType, GameConfig.Task.getElement(value.taskId));
                    if (value.isGetReward) continue;
                    dailyTaskDataMap.set(vipTaskType, value);
                } else {
                    this.dailyTaskMap.set(vipTaskType, task[i]);
                    dailyTaskDataMap.set(vipTaskType, new Task(task[i].ID, 0, false));
                }
            } else if (task[i].TaskType == TaskType.WeeklyTask) {
                let vipTaskType = task[i].TaskItemType;
                if (this.weeklyTaskMap.has(vipTaskType)) continue;
                if (MapEx.has(this.weeklyTasks, vipTaskType)) {
                    let value = MapEx.get(this.weeklyTasks, vipTaskType);
                    this.weeklyTaskMap.set(vipTaskType, GameConfig.Task.getElement(value.taskId));
                    if (value.isGetReward) continue;
                    weeklyTaskDataMap.set(vipTaskType, value);
                } else {
                    this.weeklyTaskMap.set(vipTaskType, task[i]);
                    weeklyTaskDataMap.set(vipTaskType, new Task(task[i].ID, 0, false));
                }
            }
        }
        if (dailyTaskDataMap.size == 0 && weeklyTaskDataMap.size == 0) return;
        // console.error("[dailyTaskDataMap.size] = " + JSON.stringify(dailyTaskDataMap));
        // console.error("[weeklyTaskDataMap.size] = " + JSON.stringify(weeklyTaskDataMap));
        this.getTaskPanel.initTaskPanel(dailyTaskDataMap, weeklyTaskDataMap);
    }

    private executeTask(vipTaskType: TaskItemType, num: number): void {
        this.executeDailyTask(vipTaskType, num);
        this.executeWeeklyTask(vipTaskType, num);
    }

    private executeDailyTask(vipTaskType: TaskItemType, num: number): void {
        let progress = 0;
        let tragetNum = 0;
        let taskId = 0;
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            let task = MapEx.get(this.dailyTasks, vipTaskType);
            progress = task.progress + num;
            tragetNum = GameConfig.Task.getElement(task.taskId).TragetNum;
            taskId = task.taskId;
        } else {
            if (!this.dailyTaskMap.has(vipTaskType)) {
                // console.error("[任务类型为" + vipTaskType + "的任务不存在]");
                return;
            }
            let dailTaskElement = this.dailyTaskMap.get(vipTaskType);
            progress = num;
            tragetNum = dailTaskElement.TragetNum;
            taskId = dailTaskElement.ID;
        }
        // isOnComplete = (progress >= tragetNum) ? true : false;
        // if (isOnComplete) progress = tragetNum;
        this.saveDailyTask(taskId, vipTaskType, progress);
        let tmpDailTask = new Task(taskId, progress, false);
        MapEx.set(this.tempDailTask, vipTaskType, tmpDailTask);
        this.getTaskPanel.updateTaskPanel(vipTaskType, progress);
    }

    private saveDailyTask(taskId: number, vipTaskType: TaskItemType, progress: number): void {
        let dailTask: Task = null;
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            dailTask = MapEx.get(this.dailyTasks, vipTaskType);
            dailTask.progress = progress;
        } else {
            dailTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.dailyTasks, vipTaskType, dailTask);
    }

    private executeWeeklyTask(vipTaskType: number, num: number): void {
        let progress = 0;
        let tragetNum = 0;
        let taskId = 0;
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            let task = MapEx.get(this.weeklyTasks, vipTaskType);

            progress = task.progress + num;
            tragetNum = GameConfig.Task.getElement(task.taskId).TragetNum;
            taskId = task.taskId;
        } else {
            if (!this.weeklyTaskMap.has(vipTaskType)) {
                // console.error("[任务类型为" + vipTaskType + "的任务不存在]");
                return;
            }
            let weeklyTaskElement = this.weeklyTaskMap.get(vipTaskType);
            progress = num;
            tragetNum = weeklyTaskElement.TragetNum;
            taskId = weeklyTaskElement.ID;
        }
        // isOnComplete = (progress >= tragetNum) ? true : false;
        // if (isOnComplete) progress = tragetNum;
        this.saveWeeklyTask(taskId, vipTaskType, progress);
        let tmpWeeklyTask = new Task(taskId, progress, false);
        MapEx.set(this.tempWeeklyTask, vipTaskType, tmpWeeklyTask);
        this.getTaskPanel.updateTaskPanel(vipTaskType, progress);
    }

    private saveWeeklyTask(taskId: number, vipTaskType: TaskItemType, progress: number): void {
        let weeklyTask: Task = null;
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            weeklyTask.progress = progress;
        } else {
            weeklyTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
    }

    private getTaskRewardAndUpdateData(vipTaskType: TaskItemType, taskId: number): void {
        this.updateTaskCompleteData(vipTaskType);
        this.getTaskPanel.updateTaskCompletePanel(vipTaskType);
        this.getTaskReward(taskId)
    }

    private updateTaskCompleteData(vipTaskType: TaskItemType): void {
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            let dailyTask = MapEx.get(this.dailyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(dailyTask.taskId).NextId;
            if (nextId != 0) {
                dailyTask.taskId = nextId;
                // dailyTask.progress = 0;
                dailyTask.isGetReward = false;
            } else {
                dailyTask.isGetReward = true;
            }
            MapEx.set(this.dailyTasks, vipTaskType, dailyTask);
        }
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            let weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(weeklyTask.taskId).NextId;
            if (nextId != 0) {
                weeklyTask.taskId = nextId;
                // weeklyTask.progress = 0;
                weeklyTask.isGetReward = false;
            } else {
                weeklyTask.isGetReward = true;
            }
            MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
        }
        if (this.dailyTaskMap.has(vipTaskType)) {
            let dailyTaskElement = this.dailyTaskMap.get(vipTaskType);
            if (dailyTaskElement.NextId != 0) {
                this.dailyTaskMap.set(vipTaskType, GameConfig.Task.getElement(dailyTaskElement.NextId));
            }
        }
        if (this.weeklyTaskMap.has(vipTaskType)) {
            let weeklyTaskElement = this.weeklyTaskMap.get(vipTaskType);
            if (weeklyTaskElement.NextId != 0) {
                this.weeklyTaskMap.set(vipTaskType, GameConfig.Task.getElement(weeklyTaskElement.NextId));
            }
        }
        this.server.net_updateTaskConpleteData(vipTaskType);
    }

    private getTaskReward(taskId: number): void {
        console.error(`taskId=${taskId}`);
        let taskElement = GameConfig.Task.getElement(taskId);
        let rewardCoin = taskElement.Coin;
        let rewardDiamond = taskElement.Diamond;
        if (rewardCoin > 0) {
            this.getCoinModuleC.setCoin(rewardCoin);
        }
        if (rewardDiamond > 0) {
            this.getCoinModuleC.setDiamond(rewardDiamond);
        }
    }

    /**重置每日任务 */
    public net_resetDailyTask(): void {
        this.dailyTasks = {};
        this.initTaskData();
        this.dailyLogin();
    }

    /**重置每周任务 */
    public net_resetWeeklyTask(): void {
        this.weeklyTasks = {};
        this.initTaskData();
    }

    protected onUpdate(dt: number): void {
        this.saveTaskToServer();
        this.updateDailyLogin(dt);
    }

    /**每日登录游戏 */
    public dailyLogin(): void {
        if (MapEx.has(this.dailyTasks, 1)) return;
        this.onExecuteTaskAction.call(1, 1);
        this.weeklyLogin();
    }

    private dailyLoginTimer: number = 0;
    private dailyLoginTime: number = 60;
    /**每日在线时长 */
    public updateDailyLogin(dt: number): void {
        this.dailyLoginTimer += dt;
        if (this.dailyLoginTimer >= this.dailyLoginTime) {
            this.dailyOnlineTime();
            this.dailyLoginTimer = 0;
        }
    }

    public dailyOnlineTime(): void {
        for (let i = 11; i <= 19; ++i) {
            this.onExecuteTaskAction.call(i, 1);
        }
    }

    public net_dailyKillPlayer(): void {
        for (let i = 31; i <= 39; ++i) {
            this.onExecuteTaskAction.call(i, 1);
        }
    }

    public weeklyLogin(): void {
        for (let i = 101; i <= 107; ++i) {
            this.onExecuteTaskAction.call(i, 1);
        }
    }
}