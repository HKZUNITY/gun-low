import { Notice } from "../../common/notice/Notice";
import { EventType } from "../../tools/EventType";
import Utils from "../../tools/Utils";
import HUDModuleC from "../HUDModule/HUDModuleC";
import RankModuleC from "../RankModule/RankModuleC";
import { TeamType, ResultType } from "./TeamData";
import TeamModuleS from "./TeamModuleS";
import TeamPanel from "./ui/TeamPanel";

export default class TeamModuleC extends ModuleC<TeamModuleS, null> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private rankModuleC: RankModuleC = null;
    private get getRankModuleC(): RankModuleC {
        if (!this.rankModuleC) {
            this.rankModuleC = ModuleService.getModule(RankModuleC);
        }
        return this.rankModuleC;
    }
    private teamPanel: TeamPanel = null;
    private get getTeamPannel(): TeamPanel {
        if (this.teamPanel == null) {
            this.teamPanel = UIService.getUI(TeamPanel);
        }
        return this.teamPanel;
    }

    protected onStart(): void {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }

    private initModule(): void {
        this.rankModuleC = ModuleService.getModule(RankModuleC);
    }

    private initUIPanel(): void {
        this.teamPanel = UIService.getUI(TeamPanel);
    }

    private initEventAction(): void {
        this.getHUDModuleC.onOpenTeamAction.add(this.addOnOffTeamPanelAction.bind(this));
    }

    private addOnOffTeamPanelAction(): void {
        this.getTeamPannel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }

    protected onEnterScene(sceneType: number): void {
        let nickName = mw.AccountService.getNickName();
        nickName = nickName ? nickName : "UserId:" + this.localPlayer.userId;
        this.server.net_onEnterScene(nickName);
    }

    private redNames: string[] = [];
    private blueNames: string[] = [];
    public net_syncTeamData(userIds: string[], playerNames: string[], teamIds: number[]): void {
        this.redUsers.length = 0;
        this.blueUsers.length = 0;
        this.redNames.length = 0;
        this.blueNames.length = 0;
        let selfIndex: number = -1;
        for (let i = 0; i < userIds.length; ++i) {
            let playerName = playerNames[i];
            let teamId = teamIds[i];
            if (teamId == TeamType.Red) {
                this.redUsers.push(userIds[i]);
                this.redNames.push(playerName);
                if (userIds[i] == this.localPlayer.userId) {
                    selfIndex = this.redUsers.length;
                    this.currentTeamType = TeamType.Red;
                }
            } else if (teamId == TeamType.Blue) {
                this.blueUsers.push(userIds[i]);
                this.blueNames.push(playerName);
                if (userIds[i] == this.localPlayer.userId) {
                    selfIndex = this.blueUsers.length;
                    this.currentTeamType = TeamType.Blue;
                }
            }
        }
        this.getTeamPannel.setTeamDatas(this.redNames, this.blueNames, selfIndex, this.currentTeamType);
        this.setAllPlayerOutline();
    }

    private currentTeamType: TeamType = TeamType.Red;
    public async net_changeTeam(teamType: TeamType): Promise<boolean> {
        if (this.currentTeamType == teamType) {
            Notice.showDownNotice("切换失败,你已在" + (teamType == TeamType.Red ? "红队" : "蓝队") + "中");
            return;
        }
        let resultType = await this.server.net_changeTeam(teamType);
        switch (resultType) {
            case ResultType.Succeed:
                Notice.showDownNotice("切换队伍成功");
                TimeUtil.delaySecond(1).then(() => { this.getRankModuleC.updateRankByChangeTeam(); });
                break;
            case ResultType.Fail1:
                Notice.showDownNotice("切换失败,此队已满");
                break;
            case ResultType.Fail2:
                Notice.showDownNotice("切换失败,人数不平等");
                break;
            case ResultType.Fail3:
                Notice.showDownNotice("已在此队");
                break;
            default:
                break;
        }

    }

    public getCurTeamType(): TeamType {
        return this.currentTeamType;
    }

    private redUsers: string[] = [];
    private blueUsers: string[] = [];
    public isTeamMate(userId1: string, userId2: string): boolean {
        if (this.redUsers.indexOf(userId1) != -1 && this.redUsers.indexOf(userId2) != -1) return true;
        if (this.blueUsers.indexOf(userId1) != -1 && this.blueUsers.indexOf(userId2) != -1) return true;
        return false;
    }

    public getUserIds(): string[][] {
        return [this.redUsers, this.blueUsers];
    }

    public isRedTeam(userId: string): boolean {
        return this.redUsers.includes(userId);
    }

    private setAllPlayerOutline(): void {
        let localPlayerUserId = this.localPlayer.userId;
        Player.getAllPlayers().forEach((player: mw.Player) => {
            Utils.setOutLine(player, this.isTeamMate(localPlayerUserId, player.userId));
        });
    }
}