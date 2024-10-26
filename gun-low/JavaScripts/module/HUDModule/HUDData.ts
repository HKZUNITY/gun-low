export class HUDData extends Subdata {
    @Decorator.persistence()
    public fireScale: number = 0.05;
    @Decorator.persistence()
    public controlScale: number = 0.3;
    @Decorator.persistence()
    public bgmVolume: number = 1;
    @Decorator.persistence()
    public soundVolume: number = 1;

    protected initDefaultData(): void {
        this.fireScale = 0.05;
        this.controlScale = 0.3;
        this.bgmVolume = 1;
        this.soundVolume = 1;
    }
}

export class KillTipData {
    public killTipType: KillTipType;
    public killerName: string;
    public killedName: string;
}

export enum KillTipType {
    None = 0,
    Killer = 1,
    Killed = 2,
    revenge = 3,
}