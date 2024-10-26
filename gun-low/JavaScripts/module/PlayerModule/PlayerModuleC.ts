import ConfirmPanel from "../../common/ConfirmPanel";
import { Notice } from "../../common/notice/Notice";
import { FlyText } from "../../tools/FlyText";
import GlobalData from "../../tools/GlobalData";
import Utils from "../../tools/Utils";
import HUDModuleC from "../HUDModule/HUDModuleC";
import TeamModuleC from "../TeamModule/TeamModuleC";
import PlayerData from "./PlayerData";
import { PlayerModuleS } from "./PlayerModuleS";

export class PlayerModuleC extends ModuleC<PlayerModuleS, PlayerData> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private teamModuleC: TeamModuleC = null;
    private get getTeamModuleC(): TeamModuleC {
        if (this.teamModuleC == null) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }

    private confirmPanel: ConfirmPanel = null;
    private get getConfirmPanel(): ConfirmPanel {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }

    protected onStart(): void {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }

    private initModule(): void {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
    }

    private initUIPanel(): void {
        this.confirmPanel = UIService.getUI(ConfirmPanel);
    }

    private initEventAction(): void {
        this.getHUDModuleC.onResetPosAction.add(this.addResetPosAction.bind(this));
    }

    private isCanResetPos: boolean = true;
    private addResetPosAction(): void {
        this.getConfirmPanel.confirmTips(() => {
            if (!this.isCanResetPos) {
                Notice.showDownNotice("60秒内不可重置位置");
                return;
            }
            let revivalPoint = Utils.randomRevivalPoint(this.getTeamModuleC.isRedTeam(this.localPlayer.userId));
            this.localPlayer.character.worldTransform.position = revivalPoint;
            this.isCanResetPos = false;
            TimeUtil.delaySecond(60).then(() => { this.isCanResetPos = true; });
        }, "是否重置位置", "是", "否", "重置位置");
    }

    public net_hitTeammate(): void {
        Notice.showDownNotice("不要攻击队友!");
    }

    public net_updateHp(curHp: number): void {
        this.getHUDModuleC.updateHpUI(curHp);
    }

    public net_flyText(damage: number, hitPoint: mw.Vector): void {
        let fontColor: mw.LinearColor[] = Utils.randomColor();
        FlyText.instance.showFlyText("-" + damage, hitPoint, fontColor[0], fontColor[1]);
    }

    public net_killTip(killerUserId: string, killerName: string, killedUserId: string, killedName: string): void {
        this.getHUDModuleC.killTip(killerUserId, killerName, killedUserId, killedName);
    }

    public async addMaxHp(): Promise<void> {
        let maxHp = await this.server.net_addMaxHp();
        this.getHUDModuleC.updateHpUI(maxHp, true);
        GlobalData.maxHp = maxHp;
        Utils.playBirthSound(this.localPlayer);
    }
}