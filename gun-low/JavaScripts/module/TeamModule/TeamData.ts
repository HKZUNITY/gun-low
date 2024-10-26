export class TeamData {
    /**红：0，蓝：1 */
    public teamId: TeamType = TeamType.Red;
    public playerName: string = "";

    public constructor(teamId: TeamType, playerName: string) {
        this.teamId = teamId;
        this.playerName = playerName;
    }
}

export enum TeamType {
    /**红队 */
    Red = 0,
    /**蓝队 */
    Blue = 1,
}

export enum ResultType {
    /**成功 */
    Succeed,
    /**队伍已满 */
    Fail1,
    /**人数不平等 */
    Fail2,
    /**已在此队 */
    Fail3
}