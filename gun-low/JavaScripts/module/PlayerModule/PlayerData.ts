export class PlayerStatus {
    public isDead: boolean = false;
    public hp: number = 100;
    public maxHp: number = 100;
}

export default class PlayerData extends Subdata {
    @Decorator.persistence()
    public killCount: number = 0;
    @Decorator.persistence()
    public dieCount: number = 0;

    protected initDefaultData(): void {
        this.killCount = 0;
        this.dieCount = 0;
    }

    public setKillCount(value: number): void {
        this.killCount += value;
        this.save(true);
    }

    public setDieCount(value: number): void {
        this.dieCount += value;
        this.save(true);
    }
}