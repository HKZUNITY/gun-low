import ActivityData from "./ActivityData";
import ActivityModuleC from "./ActivityModuleC";

export default class ActivityModuleS extends ModuleS<ActivityModuleC, ActivityData> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

    @Decorator.noReply()
    public net_setData(whatDay: number): void {
        this.currentData.setData(whatDay);
    }

    @Decorator.noReply()
    public net_setMinutes(minutes: number): void {
        this.currentData.setMinutes(minutes);
    }
}