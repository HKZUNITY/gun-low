import { GameConfig } from "../../config/GameConfig";
import { MapEx } from "../../tools/MapEx";
import Utils from "../../tools/Utils";

export enum TaskItemType {
    None = 0,
    /**每日登录游戏 */
    DailyLogin = 1,
    /**每日在线时长5分钟 */
    DailyOnlineTime_5 = 11,
    DailyOnlineTime_10 = 12,
    DailyOnlineTime_15 = 13,
    DailyOnlineTime_20 = 14,
    DailyOnlineTime_25 = 15,
    DailyOnlineTime_30 = 16,
    DailyOnlineTime_40 = 17,
    DailyOnlineTime_50 = 18,
    DailyOnlineTime_60 = 19,
    /**每日击杀1个玩家 */
    DailyKilPlayer_1 = 31,
    DailyKilPlayer_5 = 32,
    DailyKilPlayer_10 = 33,
    DailyKilPlayer_20 = 34,
    DailyKilPlayer_30 = 35,
    DailyKilPlayer_50 = 36,
    DailyKilPlayer_100 = 37,
    DailyKilPlayer_200 = 38,
    DailyKilPlayer_300 = 39,
    /**每周登录1天 */
    WeeklyLogin_1 = 101,
    WeeklyLogin_2 = 102,
    WeeklyLogin_3 = 103,
    WeeklyLogin_4 = 104,
    WeeklyLogin_5 = 105,
    WeeklyLogin_6 = 106,
    WeeklyLogin_7 = 107,
}

export enum TaskType {
    /**每日任务 */
    DailyTask = 1,
    /**每周任务 */
    WeeklyTask = 2,
}

export class Task {
    public taskId: number;
    public progress: number;
    public isGetReward: boolean;

    constructor(taskId: number, progress: number, isGetReward: boolean) {
        this.taskId = taskId;
        this.progress = progress;
        this.isGetReward = isGetReward;
    }
}

export class TaskData extends Subdata {
    @Decorator.persistence()
    public lastDayNow: number = 0;
    @Decorator.persistence()
    public lastWeekNow: number = 0;
    @Decorator.persistence()
    public dailyTasks: MapEx.MapExClass<Task> = {};
    @Decorator.persistence()
    public weeklyTasks: MapEx.MapExClass<Task> = {};

    protected initDefaultData() {
        this.dailyTasks = {};
        this.weeklyTasks = {};
        this.lastDayNow = Date.now();
        this.lastWeekNow = Number(Utils.getWhatDay());
    }

    public saveDailyTask(taskId: number, vipTaskType: TaskItemType, progress: number): void {
        let dailyTask: Task = null;
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            dailyTask = MapEx.get(this.dailyTasks, vipTaskType);
            dailyTask.progress = progress;
        } else {
            dailyTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.dailyTasks, vipTaskType, dailyTask);
    }

    public saveWeeklyTask(taskId: number, vipTaskType: TaskItemType, progress: number): void {
        let weeklyTask: Task = null;
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            weeklyTask.progress = progress;
        } else {
            weeklyTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
    }

    public updateTaskCompleteData(vipTaskType: TaskItemType): void {
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            let dailyTask = MapEx.get(this.dailyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(dailyTask.taskId).NextId;
            if (nextId != 0) {
                dailyTask.taskId = nextId;
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
                weeklyTask.isGetReward = false;
            } else {
                weeklyTask.isGetReward = true;
            }
            MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
        }
        this.save(true);
    }

    /**
     * 保存退出游戏的时间
     * @param value 
     */
    public saveLastDayNow(lastDayNow: number, lastWeekNow: number): void {
        this.lastDayNow = lastDayNow;
        this.lastWeekNow = lastWeekNow;
        this.save(true);
    }

    /**重置每日任务 */
    public resetDailyTask(): void {
        this.dailyTasks = {};
        this.save(true);
        // console.error("重置每日任务");
    }

    /**重置每周任务 */
    public resetWeeklyTask(): void {
        this.weeklyTasks = {};
        this.save(true);
        // console.error("重置每周任务");
    }
}