export class RoomData {
    public userId: string = "";
    public playerName: string = "";
    public killCount: number = 0;
    public dieCount: number = 0;

    public constructor(userId: string, name: string, killCount: number, dieCount: number) {
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }

    public setData(userId: string, name: string, killCount: number, dieCount: number): void {
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }
}

export class WorldData {
    public userId: string = "";
    public playerName: string = "";
    public killCount: number = 0;
    public dieCount: number = 0;

    public constructor(userId: string, name: string, killCount: number, dieCount: number) {
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }

    public setData(userId: string, name: string, killCount: number, dieCount: number): void {
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }
}