import { EventType } from "../../tools/EventType";
import Utils from "../../tools/Utils";
import HUDModuleC from "../HUDModule/HUDModuleC";
import HUDPanel from "../HUDModule/ui/HUDPanel";
import { ShopType } from "../ShopModule/ShopData";
import ShopModuleC from "../ShopModule/ShopModuleC";
import ActivityData from "./ActivityData";
import ActivityModuleS from "./ActivityModuleS";
import ActivityPanel from "./ui/ActivityPanel";

export default class ActivityModuleC extends ModuleC<ActivityModuleS, ActivityData> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private hudPanel: HUDPanel = null;
    private get getHUDPanel(): HUDPanel {
        if (this.hudPanel == null) {
            this.hudPanel = UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }

    private shopModuleC: ShopModuleC = null;
    private get getShopModuleC(): ShopModuleC {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }

    private activityPanel: ActivityPanel = null;
    private get getActivityPanel(): ActivityPanel {
        if (this.activityPanel == null) {
            this.activityPanel = UIService.getUI(ActivityPanel);
        }
        return this.activityPanel;
    }

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.initModule();
        this.initUIPanel();
        this.initActionEvent();
    }

    private initModule(): void {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.shopModuleC = ModuleService.getModule(ShopModuleC);
    }

    private initUIPanel(): void {
        this.hudPanel = UIService.getUI(HUDPanel);
    }

    private initActionEvent(): void {
        this.getHUDModuleC.onOpenActivityAction.add(this.addOnOffActivityPanel.bind(this));
    }

    private addOnOffActivityPanel(): void {
        this.getActivityPanel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }

    protected onEnterScene(sceneType: number): void {
        this.initActivityData();
        this.activityPanel = UIService.getUI(ActivityPanel);
    }

    private whatDay: number = 0;
    private miniutes: number = 0;
    private initActivityData(): void {
        this.whatDay = this.data.whatDay;
        this.miniutes = this.data.minutes;
        let currentWhatDay = Number(Utils.getWhatDay());
        if (currentWhatDay != this.whatDay) {
            this.whatDay = currentWhatDay;
            this.miniutes = 0;
            this.setData(this.whatDay);
        }
        this.getActivityPanel.updateMinutesUI(this.miniutes);
        if (this.miniutes < 30) this.getHUDPanel.startActivityRedPointTween();
    }

    private timer: number = 0;
    private time: number = 60;
    protected onUpdate(dt: number): void {
        if (this.miniutes >= 30) return;
        this.timer += dt;
        if (this.timer >= this.time) {
            this.timer = 0;
            this.miniutes++;
            this.setMinutes(this.miniutes);
        }
    }

    public setData(whatDay: number): void {
        this.server.net_setData(whatDay);
    }

    public getData(): number {
        return this.whatDay;
    }

    public setMinutes(minutes: number): void {
        this.getActivityPanel.updateMinutesUI(minutes);
        this.server.net_setMinutes(minutes);
    }

    public isHasGet(shopId: number, shopType: ShopType): boolean {
        return this.getShopModuleC.isHasShopId(shopId, shopType);
    }

    public setGetActivity(shopId: number, shopType: ShopType): void {
        this.getHUDPanel.stopActivityRedPointTween();
        this.getShopModuleC.setShopId(shopType, shopId);
    }
}