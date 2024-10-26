import GlobalData from "../../tools/GlobalData";
import { RoomData, WorldData } from "./RankData";
import RankModuleC from "./RankModuleC";

export default class RankModuleS extends ModuleS<RankModuleC, null> {
    private worldDatas: WorldData[] = [];

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
    }

    private syncPlayerMap: Map<mw.Player, boolean> = new Map<mw.Player, boolean>();
    @Decorator.noReply()
    public net_updateSyncPlayer(isSync: boolean): void {
        let player = this.currentPlayer;
        if (!this.syncPlayerMap.has(player)) return;
        this.syncPlayerMap.set(player, isSync);
        if (isSync) this.synchrodata_aRoomWorld(player);
    }

    private roomDataMap: Map<string, RoomData> = new Map<string, RoomData>();
    private tmpRoomDataMap: Map<string, RoomData> = new Map<string, RoomData>();

    protected onPlayerLeft(player: mw.Player): void {
        let userId = player.userId;
        if (this.roomDataMap.has(userId)) this.roomDataMap.delete(userId);
        if (this.tmpRoomDataMap.has(userId)) this.tmpRoomDataMap.delete(userId);
        if (this.syncPlayerMap.has(player)) this.syncPlayerMap.delete(player);
        this.synchrodata_Room();
    }

    @Decorator.noReply()
    public net_onEnterScene(playerName: string, killCount: number, dieCount: number): void {
        this.syncPlayerMap.set(this.currentPlayer, false);

        let userId = this.currentPlayer.userId;
        this.currentPlayer.character.displayName = playerName;
        this.onEnterScene(userId, playerName, killCount, dieCount);
    }

    private async onEnterScene(userId: string, playerName: string, killCount: number, dieCount: number): Promise<void> {
        let roomData = new RoomData(userId, playerName, killCount, dieCount);
        this.roomDataMap.set(userId, roomData);

        let tmpRoomData = new RoomData(userId, playerName, 0, 0);
        this.tmpRoomDataMap.set(userId, tmpRoomData);

        this.worldDatas = (await this.getCustomdata("WorldData")) as WorldData[];
        this.synchrodata_onEnterScene(userId);
    }

    public refreshKillDieCount(killUserId: string, dieUserId: string): void {
        if (!this.roomDataMap.has(killUserId)) return;
        let killRoomData = this.roomDataMap.get(killUserId);
        killRoomData.killCount += 1;

        if (this.tmpRoomDataMap.has(killUserId)) {
            let tmpKillRoomData = this.tmpRoomDataMap.get(killUserId);
            tmpKillRoomData.killCount += 1;
        }

        if (this.roomDataMap.has(dieUserId)) {
            let dieRoomData = this.roomDataMap.get(dieUserId);
            dieRoomData.dieCount += 1;
        }

        if (this.tmpRoomDataMap.has(dieUserId)) {
            let tmpDieRoomData = this.tmpRoomDataMap.get(dieUserId);
            tmpDieRoomData.dieCount += 1;
        }

        let isRefreshWorldData = this.isRefreshWorldData(new WorldData(killUserId, killRoomData.playerName, killRoomData.killCount, killRoomData.dieCount));
        if (isRefreshWorldData) {
            this.synchrodata_RoomWorld();
        } else {
            this.synchrodata_Room();
        }
    }

    private isRefreshWorldData(worldData: WorldData): boolean {
        let isPush = false;
        let ishasDelete = false;
        let ishasData = false;
        if (this.worldDatas == null) {
            this.worldDatas = [];
        }
        if (this.worldDatas.length < GlobalData.maxWorldRankCount) {
            if (this.worldDatas.length == 0) {
                this.worldDatas.push(worldData);
                isPush = true;
            } else {
                for (let i = 0; i < this.worldDatas.length; ++i) {
                    if (this.worldDatas[i].userId != worldData.userId) continue;
                    if (worldData.killCount > this.worldDatas[i].killCount) {
                        this.worldDatas.splice(i, 1);
                        break;
                    } else {
                        ishasData = true;
                        break;
                    }
                }

                if (ishasData) return isPush;

                for (let i = 0; i < this.worldDatas.length; i++) {
                    if (worldData.killCount > this.worldDatas[i].killCount) {
                        this.worldDatas.splice(i, 0, worldData);
                        isPush = true;
                        break;
                    }
                }

                if (!isPush) {
                    this.worldDatas.push(worldData);
                    isPush = true;
                }
            }
        } else {
            for (let i = 0; i < this.worldDatas.length; ++i) {
                if (this.worldDatas[i].userId != worldData.userId) continue;
                if (worldData.killCount > this.worldDatas[i].killCount) {
                    this.worldDatas.splice(i, 1);
                    ishasDelete = true;
                    break;
                } else {
                    ishasData = true;
                    break;
                }
            }

            if (ishasData) return isPush;

            for (let i = 0; i < this.worldDatas.length; i++) {
                if (worldData.killCount > this.worldDatas[i].killCount) {
                    this.worldDatas.splice(i, 0, worldData);
                    if (!ishasDelete) {
                        this.worldDatas.pop();
                    }
                    isPush = true;
                    break;
                }
            }
        }
        if (isPush) {
            this.setCustomData("WorldData", this.worldDatas);
        }
        return isPush;
    }

    private roomUserIds: string[] = [];
    private roomNames: string[] = [];
    private roomKillCounts: number[] = [];
    private roomDieCounts: number[] = [];

    private updateRoomData(): void {
        if (this.tmpRoomDataMap.size == 0 || !this.tmpRoomDataMap) return;
        this.roomUserIds.length = 0;
        this.roomNames.length = 0;
        this.roomKillCounts.length = 0;
        this.roomDieCounts.length = 0;
        this.tmpRoomDataMap.forEach((value: RoomData, key: string) => {
            this.roomUserIds.push(value.userId);
            this.roomNames.push(value.playerName);
            this.roomKillCounts.push(value.killCount);
            this.roomDieCounts.push(value.dieCount);
        });
    }

    private worldUserIds: string[] = [];
    private worldNames: string[] = [];
    private worldKillCounts: number[] = [];
    private worldDieCounts: number[] = [];
    private updateWorldData(): void {
        if (!this.worldDatas || this.worldDatas.length == 0) return;
        this.worldUserIds.length = 0;
        this.worldNames.length = 0;
        this.worldKillCounts.length = 0;
        this.worldDieCounts.length = 0;
        for (let i = 0; i < this.worldDatas.length; i++) {
            this.worldUserIds.push(this.worldDatas[i].userId);
            this.worldNames.push(this.worldDatas[i].playerName);
            this.worldKillCounts.push(this.worldDatas[i].killCount);
            this.worldDieCounts.push(this.worldDatas[i].dieCount);
        }
    }

    private synchrodata_onEnterScene(sendUserId: string): void {
        this.updateRoomData();
        this.updateWorldData();
        this.syncPlayerMap.forEach((value: boolean, key: mw.Player) => {
            // if (!value) return;
            if (sendUserId == key.userId) {
                this.getClient(key).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts,
                    this.worldUserIds, this.worldNames, this.worldKillCounts, this.worldDieCounts);
            } else {
                this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts);
            }
        });
    }

    private synchrodata_Room(): void {
        this.updateRoomData();
        this.syncPlayerMap.forEach((value: boolean, key: mw.Player) => {
            // if (!value) return;
            this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts);
        });
    }

    private synchrodata_RoomWorld(): void {
        this.updateRoomData();
        this.updateWorldData();
        this.syncPlayerMap.forEach((value: boolean, key: mw.Player) => {
            // if (!value) return;
            this.getClient(key).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts,
                this.worldUserIds, this.worldNames, this.worldKillCounts, this.worldDieCounts);
        });
    }

    private synchrodata_aRoomWorld(player: mw.Player): void {
        this.getClient(player).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts,
            this.worldUserIds, this.worldNames, this.worldKillCounts, this.worldDieCounts);
    }

    @Decorator.noReply()
    public net_updateRankByChangeTeam(): void {
        this.syncPlayerMap.forEach((value: boolean, key: mw.Player) => {
            // if (!value) return;
            this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts);
        });
    }

    public async getCustomdata(key: string): Promise<any> {
        return (await DataStorage.asyncGetData(key)).data;
    }

    public async setCustomData(saveKey: string, dataInfo: any): Promise<boolean> {
        let code: mw.DataStorageResultCode = null;
        code = await DataStorage.asyncSetData(saveKey, dataInfo);
        return code == mw.DataStorageResultCode.Success;
    }

    public getNamesByUserId(userId1: string, userId2: string): string[] {
        if (this.roomDataMap.has(userId1) && this.roomDataMap.has(userId2)) {
            return [this.roomDataMap.get(userId1).playerName, this.roomDataMap.get(userId2).playerName];
        }
        return null;
    }

    public getNameByUserId(userId: string): string {
        if (this.roomDataMap.has(userId)) {
            return this.roomDataMap.get(userId).playerName;
        }
        return null;
    }

    private redFirstModel: mw.Model = null;
    private blueFirstModel: mw.Model = null;

    @Decorator.noReply()
    public net_setFirstModel(isRed: boolean): void {
        let character = this.currentPlayer.character;
        this.setFirstModel(character, isRed);
    }

    private async setFirstModel(character: mw.Character, isRed: boolean): Promise<void> {
        if (isRed) {
            if (!this.redFirstModel) this.redFirstModel = await GameObjPool.asyncSpawn("C825D655443D938EB73591BEEB5CCC81", mwext.GameObjPoolSourceType.Prefab);
            character.attachToSlot(this.redFirstModel, mw.HumanoidSlotType.BackOrnamental);
            this.redFirstModel.localTransform.position = new mw.Vector(15, 0, 0);
            this.redFirstModel.localTransform.rotation = new mw.Rotation(0, 0, -90);
        } else {
            if (!this.blueFirstModel) this.blueFirstModel = await GameObjPool.asyncSpawn("0B59ECA6477D8CA6237016BF613FB019", mwext.GameObjPoolSourceType.Prefab);
            character.attachToSlot(this.blueFirstModel, mw.HumanoidSlotType.BackOrnamental);
            this.blueFirstModel.localTransform.position = new mw.Vector(15, 0, 0);
            this.blueFirstModel.localTransform.rotation = new mw.Rotation(0, 0, -90);
        }
    }
}