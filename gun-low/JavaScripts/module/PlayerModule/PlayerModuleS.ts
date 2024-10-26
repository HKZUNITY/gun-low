import { PrefabEvent } from "../../tools/PrefabEvent";
import Utils from "../../tools/Utils";
import CoinModuleS from "../CoinModule/CoinModuleS";
import { MorphModuleS } from "../MorphModule/MorphModule";
import RankModuleS from "../RankModule/RankModuleS";
import TaskModuleS from "../TaskModule/TaskModuleS";
import TeamModuleS from "../TeamModule/TeamModuleS";
import PlayerData, { PlayerStatus } from "./PlayerData";
import { PlayerModuleC } from "./PlayerModuleC";

export class PlayerModuleS extends ModuleS<PlayerModuleC, PlayerData> {
    private rankModuleS: RankModuleS = null;
    private get getRankModuleS(): RankModuleS {
        if (this.rankModuleS == null) {
            this.rankModuleS = ModuleService.getModule(RankModuleS);
        }
        return this.rankModuleS;
    }

    private teamModuleS: TeamModuleS = null;
    private get getTeamModuleS(): TeamModuleS {
        if (this.teamModuleS == null) {
            this.teamModuleS = ModuleService.getModule(TeamModuleS);
        }
        return this.teamModuleS;
    }

    private coinModuleS: CoinModuleS = null;
    private get getCoinModuleS(): CoinModuleS {
        if (this.coinModuleS == null) {
            this.coinModuleS = ModuleService.getModule(CoinModuleS);
        }
        return this.coinModuleS;
    }

    private taslModuleS: TaskModuleS = null;
    private get getTaskModuleS(): TaskModuleS {
        if (this.taslModuleS == null) {
            this.taslModuleS = ModuleService.getModule(TaskModuleS);
        }
        return this.taslModuleS;
    }

    private morphModuleS: MorphModuleS = null;
    private get getMorphModuleS(): MorphModuleS {
        if (!this.morphModuleS) {
            this.morphModuleS = ModuleService.getModule(MorphModuleS);
        }
        return this.morphModuleS;
    }

    protected onStart(): void {
        this.initModule();
        this.initEventAction();
    }

    private initModule(): void {
        this.rankModuleS = ModuleService.getModule(RankModuleS);
        this.teamModuleS = ModuleService.getModule(TeamModuleS);
        this.coinModuleS = ModuleService.getModule(CoinModuleS);
        this.taslModuleS = ModuleService.getModule(TaskModuleS);
    }

    private initEventAction(): void {
        PrefabEvent.PrefabEvtFight.onHit(this.playerAtkPlayer.bind(this));
    }

    protected onPlayerEnterGame(player: mw.Player): void {
        this.initPlayerState(player);
    }

    protected onPlayerLeft(player: mw.Player): void {
        this.deletePlayerState(player);
    }

    private playerMap: Map<string, mw.Player> = new Map<string, mw.Player>();
    private playerStatusMap: Map<string, PlayerStatus> = new Map<string, PlayerStatus>();
    private initPlayerState(player: mw.Player): void {
        let playerStatus: PlayerStatus = new PlayerStatus();
        playerStatus.isDead = false;
        playerStatus.hp = playerStatus.maxHp;
        this.playerStatusMap.set(player.userId, playerStatus);
        this.playerMap.set(player.character.gameObjectId, player);
        TimeUtil.delaySecond(5).then(() => {
            this.playerBirth(player, 100);
        });
    }

    private deletePlayerState(player: mw.Player): void {
        let userId = player.userId;
        if (this.playerStatusMap.has(userId)) {
            this.playerStatusMap.delete(userId);
        }
        let gameObjectId = player.character.gameObjectId;
        if (this.playerMap.has(gameObjectId)) {
            this.playerMap.delete(gameObjectId);
        }
    }

    private playerAtkPlayer(senderGuid: string, targetGuid: string, damage: number, hitPoint: mw.Vector): void {
        if (!this.playerMap.has(senderGuid) || !this.playerMap.has(targetGuid)) return;
        let sendPlayer = this.playerMap.get(senderGuid);
        let targetPlayer = this.playerMap.get(targetGuid);
        if (this.getTeamModuleS.isTeamMate(sendPlayer.userId, targetPlayer.userId)) {
            this.getClient(sendPlayer).net_hitTeammate();
            return;
        }
        if (!hitPoint) hitPoint = targetPlayer.character.worldTransform.position;
        this.updatePlayerData(sendPlayer, targetPlayer, damage, hitPoint);
    }

    private updatePlayerData(sendPlayer: mw.Player, targetPlayer: mw.Player, damage: number, hitPoint: mw.Vector): void {
        let userId = targetPlayer.userId;
        if (!this.playerStatusMap.has(userId)) return;

        let targetPlayerData = this.playerStatusMap.get(userId);
        if (targetPlayerData.isDead) return;

        let curHp = targetPlayerData.hp;
        curHp -= damage;
        if (curHp <= 0) {
            targetPlayerData.hp = 0;
            targetPlayerData.isDead = true;
            if (sendPlayer) this.updatePlayerKillCount(sendPlayer, targetPlayer);
            targetPlayer.character.ragdollEnabled = true;
            this.playerDie(targetPlayer);
            TimeUtil.delaySecond(3).then(() => {
                targetPlayer.character.ragdollEnabled = false;
                targetPlayerData.hp = targetPlayerData.maxHp;
                this.playerBirth(targetPlayer, targetPlayerData.maxHp);
            });
        } else {
            targetPlayerData.hp = curHp;
        }
        this.getClient(targetPlayer).net_updateHp(curHp);
        if (sendPlayer) this.getClient(sendPlayer).net_flyText(damage, hitPoint);
    }

    public updatePlayerKillCount(killPlayer: mw.Player, diePlayer: mw.Player): void {
        if (killPlayer) DataCenterS.getData(killPlayer, PlayerData).setKillCount(1);
        if (diePlayer) DataCenterS.getData(diePlayer, PlayerData).setDieCount(1);

        let userId1 = killPlayer.userId;
        let userId2 = diePlayer ? diePlayer.userId : "-1";

        this.getRankModuleS.refreshKillDieCount(userId1, userId2);
        this.getCoinModuleS.killPlayerAddCoin(killPlayer);
        this.getTaskModuleS.killPlayer(killPlayer);

        let names: string[] = [];
        if (userId2 != "-1") {
            names = this.getRankModuleS.getNamesByUserId(userId1, userId2);
        } else {
            names.push(this.getRankModuleS.getNameByUserId(userId1));
            names.push(Utils.randomNpcName());
        }
        if (names && names.length == 2) this.getAllClient().net_killTip(userId1, names[0], userId2, names[1]);

        try {//校验
            if (this.playerStatusMap.get(userId1).isDead == true) this.playerStatusMap.get(userId1).isDead = false;
        } catch (error) { }
    }

    public playerKillNpc(senderGuid: string): void {
        if (!this.playerMap.has(senderGuid)) return;
        this.updatePlayerKillCount(this.playerMap.get(senderGuid), null);
    }

    public playerAtkNpcFlyText(senderGuid: string, hitPoint: mw.Vector, damage: number): void {
        if (!this.playerMap.has(senderGuid)) return;
        this.getClient(this.playerMap.get(senderGuid)).net_flyText(damage, hitPoint);
    }

    private playerDie(player: mw.Player): void {
        EffectService.playAtPosition(
            "222147",
            player.character.worldTransform.position,
            {
                loopCount: 1
            }
        );
        this.getMorphModuleS.setPlayerMorphState(player.userId, false);
    }

    private playerBirth(player: mw.Player, maxHp: number): void {
        this.getClient(player).net_updateHp(maxHp);
        let userId = player.userId;
        let revivalPoint = Utils.randomRevivalPoint(this.getTeamModuleS.isRedTeam(userId));
        player.character.worldTransform.position = revivalPoint;
        Utils.playBirthEffect(player);
        TimeUtil.delaySecond(2).then(() => {
            if (this.playerStatusMap.get(userId).isDead == true) this.playerStatusMap.get(userId).isDead = false;
        });
        this.getMorphModuleS.setPlayerMorphState(player.userId, true);
    }

    public net_addMaxHp(): number {
        let userId = this.currentPlayer.userId;
        if (!this.playerStatusMap.has(userId)) return 100;
        Utils.playBirthEffect(this.currentPlayer);
        let playerStatus = this.playerStatusMap.get(userId);
        playerStatus.maxHp *= 2;
        playerStatus.hp = playerStatus.maxHp;
        return playerStatus.maxHp;
    }
}