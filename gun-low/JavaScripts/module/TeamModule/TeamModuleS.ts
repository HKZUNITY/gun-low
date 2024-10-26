import { TeamData, TeamType, ResultType } from "./TeamData";
import TeamModuleC from "./TeamModuleC";

export default class TeamModuleS extends ModuleS<TeamModuleC, null> {
    public teamMap: Map<string, TeamData> = new Map<string, TeamData>();
    protected onStart(): void {
    }

    public net_changeTeam(teamType: TeamType): ResultType {
        let userId = this.currentPlayer.userId;
        if (!this.teamMap.has(userId)) return ResultType.Fail3;
        let teamData = this.teamMap.get(userId);
        if (teamData.teamId == teamType) return ResultType.Fail3;
        let redBlueCount = this.getRedBlueCount();
        let redCount = redBlueCount[0], blueCount = redBlueCount[1];
        if (redCount == blueCount) return ResultType.Fail1;
        if (teamType == TeamType.Blue) {
            let tmp = redCount;
            redCount = blueCount;
            blueCount = tmp;
        }
        if (redCount >= blueCount) return ResultType.Fail2;
        teamData.teamId = teamType;
        this.teamMap.delete(userId);
        this.teamMap.set(userId, teamData);
        this.syncTeamData();
        return ResultType.Succeed;
    }

    private getRedBlueCount(): number[] {
        if (this.teamMap.size == 0) return [];
        let redCount: number = 0, blueCount: number = 0;
        this.teamMap.forEach((teamData: TeamData) => {
            if (teamData.teamId == TeamType.Red) {
                redCount++;
            } else {
                blueCount++;
            }
        });
        return [redCount, blueCount];
    }

    @Decorator.noReply()
    public net_onEnterScene(playerName: string): void {
        let userId = this.currentPlayer.userId;
        if (this.teamMap.has(userId)) return;
        let teamId = this.getTeamId();
        let teamData = new TeamData(teamId, playerName);
        this.teamMap.set(userId, teamData);
        this.syncTeamData();
    }

    protected onPlayerLeft(player: mw.Player): void {
        let userId = player.userId;
        if (!this.teamMap.has(userId)) return;
        this.teamMap.delete(userId);
        this.syncTeamData();
    }

    private getTeamId(): TeamType {
        if (this.teamMap.size == 0) return TeamType.Red;
        let redCount: number = 0, blueCount: number = 0;
        this.teamMap.forEach((teamData: TeamData) => {
            if (teamData.teamId == TeamType.Red) {
                redCount++;
            } else {
                blueCount++;
            }
        });
        return redCount > blueCount ? TeamType.Blue : TeamType.Red;
    }

    private syncTeamData(): void {
        let userIds: string[] = [];
        let playerNames: string[] = [];
        let teamIds: number[] = [];
        this.teamMap.forEach((teamData: TeamData, userId: string) => {
            userIds.push(userId);
            playerNames.push(teamData.playerName);
            teamIds.push(teamData.teamId);
        });
        if (userIds.length == 0) return;
        this.getAllClient().net_syncTeamData(userIds, playerNames, teamIds);
    }

    public isTeamMate(userId1: string, userId2: string): boolean {
        if (!this.teamMap.has(userId1) || !this.teamMap.has(userId2)) return false;
        return this.teamMap.get(userId1).teamId == this.teamMap.get(userId2).teamId;
    }

    public isRedTeam(userId: string): boolean {
        if (!this.teamMap.has(userId)) return true;
        return this.teamMap.get(userId).teamId == TeamType.Red;
    }
}