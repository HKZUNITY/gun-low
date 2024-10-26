import { EventType } from "../../tools/EventType";
import HUDModuleC from "../HUDModule/HUDModuleC";
import PlayerData from "../PlayerModule/PlayerData";
import TeamModuleC from "../TeamModule/TeamModuleC";
import { RoomData, WorldData } from "./RankData";
import RankModuleS from "./RankModuleS";
import RankPanel from "./ui/RankPanel";

export default class RankModuleC extends ModuleC<RankModuleS, null> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private teamModuleC: TeamModuleC = null;
    private get getTeamModuleC(): TeamModuleC {
        if (!this.teamModuleC) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }

    private rankPanel: RankPanel = null;
    private get getRankPanel(): RankPanel {
        if (!this.rankPanel) {
            this.rankPanel = UIService.getUI(RankPanel);
        }
        return this.rankPanel;
    }

    private userId: string = null;
    private get currentUserId(): string {
        if (this.userId == "" || this.userId == null) {
            this.userId = this.localPlayer.userId;
        }
        return this.userId;
    }

    private playerData: PlayerData = null;
    private get getPlayerData(): PlayerData {
        if (this.playerData == null) {
            this.playerData = DataCenterC.getData(PlayerData);
        }
        return this.playerData;
    }

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }

    private initModule(): void {
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
        this.playerData = DataCenterC.getData(PlayerData);
    }

    private initUIPanel(): void {
        this.rankPanel = UIService.getUI(RankPanel);
    }

    private initEventAction(): void {
        this.getHUDModuleC.onOpenRankAction.add(this.addOnOffRankPanelAction.bind(this));
    }

    private addOnOffRankPanelAction(): void {
        this.getRankPanel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
        // this.server.net_updateSyncPlayer(isOpen);
    }

    protected onEnterScene(sceneType: number): void {
        let nickName = mw.AccountService.getNickName();
        nickName = nickName ? nickName : "爱玩游戏的小胖子：" + this.currentUserId;
        this.server.net_onEnterScene(nickName, this.getPlayerData.killCount, this.getPlayerData.dieCount);
    }

    private calculateKillCount(): void {
        let redCount = 0;
        let blueCount = 0;
        this.redRoomDatas.forEach((roomData: RoomData) => {
            redCount += roomData.killCount;
        });
        this.blueRoomDatas.forEach((roomData: RoomData) => {
            blueCount += roomData.killCount;
        });
        this.getHUDModuleC.updateVsUI(redCount, blueCount);
    }

    // private roomDatas: RoomData[] = [];
    private redRoomDatas: RoomData[] = [];
    private blueRoomDatas: RoomData[] = [];
    private recycleRoomDatas: RoomData[] = [];
    private updateRoomDatas(roomUserIds: string[], roomNames: string[], roomKillCounts: number[], roomDieCounts: number[]): void {
        let userIds = this.getTeamModuleC.getUserIds();
        let redUsers = userIds[0];
        let blueUsers = userIds[1];
        let redIndex = 0;
        let blueIndex = 0;
        for (let i = 0; i < roomUserIds.length; ++i) {
            if (redUsers.includes(roomUserIds[i])) {
                if (this.redRoomDatas.length > redIndex) {
                    this.redRoomDatas[redIndex++].setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                } else {
                    let tmpRoomData = null;
                    if (this.recycleRoomDatas.length > 0) tmpRoomData = this.recycleRoomDatas.pop();
                    if (tmpRoomData) {
                        tmpRoomData.setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    } else {
                        tmpRoomData = new RoomData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    }
                    this.redRoomDatas.push(tmpRoomData);
                    redIndex++;
                }
            } else if (blueUsers.includes(roomUserIds[i])) {
                if (this.blueRoomDatas.length > blueIndex) {
                    this.blueRoomDatas[blueIndex++].setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                } else {
                    let tmpRoomData = null;
                    if (this.recycleRoomDatas.length > 0) tmpRoomData = this.recycleRoomDatas.pop();
                    if (tmpRoomData) {
                        tmpRoomData.setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    } else {
                        tmpRoomData = new RoomData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    }
                    this.blueRoomDatas.push(tmpRoomData);
                    blueIndex++;
                }
            }
        }
        if (this.redRoomDatas.length > redIndex) {
            for (let i = redIndex; i < this.redRoomDatas.length; ++i) {
                this.recycleRoomDatas.push(this.redRoomDatas[i]);
            }
            this.redRoomDatas.length = redIndex;
        }
        if (this.blueRoomDatas.length > blueIndex) {
            for (let i = blueIndex; i < this.blueRoomDatas.length; ++i) {
                this.recycleRoomDatas.push(this.blueRoomDatas[i]);
            }
            this.blueRoomDatas.length = blueIndex;
        }
        this.calculateKillCount();
        //#region 旧代码
        // if (this.roomDatas.length > roomUserIds.length) {
        //     for (let i = 0; i < roomUserIds.length; ++i) {
        //         this.roomDatas[i].setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
        //     }
        //     for (let i = roomUserIds.length; i < this.roomDatas.length; ++i) {
        //         this.recycleRoomDatas.push(this.roomDatas[i]);
        //     }
        //     this.roomDatas.length = roomUserIds.length;
        // } else {
        //     for (let i = 0; i < this.roomDatas.length; ++i) {
        //         this.roomDatas[i].setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
        //     }
        //     for (let i = this.roomDatas.length; i < roomUserIds.length; ++i) {
        //         let tmpRoomData = null;
        //         if (this.recycleRoomDatas.length > 0) tmpRoomData = this.recycleRoomDatas.pop();
        //         if (!tmpRoomData) tmpRoomData = new RoomData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
        //         this.roomDatas.push(tmpRoomData);
        //     }
        // }
        //#endregion
    }

    private curRoomIndex: number = -1;
    private isRedTeam: boolean = false;
    private curRedFirstUserId: string = "";
    private curBlueFirstUserId: string = "";
    private updateRoomIndex(): void {
        this.curRoomIndex = -1;
        this.isRedTeam = false;
        for (let i = 0; i < this.redRoomDatas.length; ++i) {
            if (this.redRoomDatas[i].userId != this.currentUserId) continue;
            this.curRoomIndex = i;
            this.isRedTeam = true;
            if (i > 0) break;
            if (this.curRedFirstUserId != this.currentUserId) this.server.net_setFirstModel(true);
            break;
        }
        if (this.redRoomDatas && this.redRoomDatas.length > 0) this.curRedFirstUserId = this.redRoomDatas[0].userId;

        if (this.curRoomIndex != -1) {
            this.updateHUDRankText();
            return;
        }
        for (let i = 0; i < this.blueRoomDatas.length; ++i) {
            if (this.blueRoomDatas[i].userId != this.currentUserId) continue;
            this.curRoomIndex = i;
            this.isRedTeam = false;
            if (i > 0) break;
            if (this.curBlueFirstUserId != this.currentUserId) this.server.net_setFirstModel(false);
            break;
        }
        if (this.blueRoomDatas && this.blueRoomDatas.length > 0) this.curBlueFirstUserId = this.blueRoomDatas[0].userId;
        this.updateHUDRankText();
    }

    private worldDatas: WorldData[] = [];
    private recycleWorldDatas: WorldData[] = [];
    private updateWorldDatas(worldUserIds: string[], worldNames: string[], worldKillCounts: number[], worldDieCounts: number[]): void {
        if (this.worldDatas.length > worldUserIds.length) {
            for (let i = 0; i < worldUserIds.length; ++i) {
                this.worldDatas[i].setData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
            }
            for (let i = worldUserIds.length; i < this.worldDatas.length; ++i) {
                this.recycleWorldDatas.push(this.worldDatas[i]);
            }
            this.worldDatas.length = worldUserIds.length;
        } else {
            for (let i = 0; i < this.worldDatas.length; ++i) {
                this.worldDatas[i].setData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
            }
            for (let i = this.worldDatas.length; i < worldUserIds.length; ++i) {
                let tmpWorldData: WorldData = null;
                if (this.recycleWorldDatas.length > 0) tmpWorldData = this.recycleWorldDatas.pop();
                if (tmpWorldData) {
                    tmpWorldData.setData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
                } else {
                    tmpWorldData = new WorldData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
                }
                this.worldDatas.push(tmpWorldData);
            }
        }
    }

    private curWorldIndex: number = -1;
    private updateWorldIndex(): void {
        this.curWorldIndex = -1;
        for (let i = 0; i < this.worldDatas.length; ++i) {
            if (this.worldDatas[i].userId != this.currentUserId) continue;
            this.curWorldIndex = i;
            break;
        }
    }

    public net_syncRoomRankData(roomUserIds: string[], roomNames: string[], roomKillCounts: number[], roomDieCounts: number[]): void {
        // console.error("wfz = " + roomUserIds.length);
        this.updateRoomDatas(roomUserIds, roomNames, roomKillCounts, roomDieCounts);
        this.sortRoomData();
        this.updateRoomIndex();
        this.getRankPanel.refreshRankPanel_Room(this.redRoomDatas, this.blueRoomDatas, this.isRedTeam, this.curRoomIndex);
    }

    public net_syncRoomWorldRankData(roomUserIds: string[], roomNames: string[], roomKillCounts: number[], roomDieCounts: number[],
        worldUserIds: string[], worldNames: string[], worldKillCounts: number[], worldDieCounts: number[]): void {
        this.updateRoomDatas(roomUserIds, roomNames, roomKillCounts, roomDieCounts);
        this.sortRoomData();
        this.updateRoomIndex();

        this.updateWorldDatas(worldUserIds, worldNames, worldKillCounts, worldDieCounts);
        this.updateWorldIndex();

        this.getRankPanel.refreshRankPanel_RoomWorld(this.redRoomDatas, this.blueRoomDatas, this.isRedTeam, this.curRoomIndex,
            this.worldDatas, this.curWorldIndex);
        // this.updateRankNpc();
    }

    private sortRoomData(): void {
        this.redRoomDatas.sort((a: RoomData, b: RoomData) => {
            return b.killCount - a.killCount || ((b.killCount == a.killCount) && (a.dieCount - b.dieCount));
        });
        this.blueRoomDatas.sort((a: RoomData, b: RoomData) => {
            return b.killCount - a.killCount || ((b.killCount == a.killCount) && (a.dieCount - b.dieCount));
        });
    }

    public updateRankByChangeTeam(): void {
        this.server.net_updateRankByChangeTeam();
    }

    private preIsRedTeam: boolean = false;
    private preRoomIndex = -2;
    private updateHUDRankText(): void {
        if (this.preIsRedTeam == this.isRedTeam && this.preRoomIndex == this.curRoomIndex) return;
        this.getHUDModuleC.updateRankUIText(this.isRedTeam, this.curRoomIndex + 1);

        this.preIsRedTeam = this.isRedTeam;
        this.preRoomIndex = this.curRoomIndex;
    }
}