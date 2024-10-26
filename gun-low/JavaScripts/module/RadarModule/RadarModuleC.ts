import { EventType } from "../../tools/EventType";
import TeamModuleC from "../TeamModule/TeamModuleC";
import RadarModuleS from "./RadarModuleS";
import RadarPanel from "./ui/RadarPanel";

export default class RadarModuleC extends ModuleC<RadarModuleS, null> {
    private teamModuleC: TeamModuleC = null;
    private get getTeamModuleC(): TeamModuleC {
        if (!this.teamModuleC) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }
    private radarPanel: RadarPanel = null;
    private get getRadarPanel(): RadarPanel {
        if (!this.radarPanel) {
            this.radarPanel = mw.UIService.create(RadarPanel);
        }
        return this.radarPanel;
    }

    protected onStart(): void {
        this.initData();
        this.bindEvent();
    }

    private initData(): void {
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
        this.radarPanel = mw.UIService.create(RadarPanel);
    }

    private bindEvent(): void {
        Event.addLocalListener(EventType.OnOffMainHUD, this.addOnOffRadarPanel.bind(this));
    }

    private addOnOffRadarPanel(isOpen: boolean): void {
        isOpen ? this.getRadarPanel.show() : this.getRadarPanel.hide();
    }

    protected onEnterScene(sceneType: number): void {
        this.getRadarPanel.show();
    }

    public isFriendly(player1: mw.Player, player2: mw.Player): boolean {
        return this.getTeamModuleC.isTeamMate(player1.userId, player2.userId);
    }
}