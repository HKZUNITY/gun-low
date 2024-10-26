
export default class GlobalData {
    public static isOpenIAA: boolean = false;
    public static roomPeopleCount: number = 20;
    public static soundVolume: number = 1;

    /**每日刷新时间（目前是凌晨4点，格式为4:0） */
    public static dailyRefreshTime: string = "4:0";
    /**每周刷新时间（目前是每周一凌晨4点，格式为4:0） */
    public static weeklyRefreshTime: string = "4:0";
    public static maxHp: number = 100;

    public static addDiamond: number = 10;
    public static addCoin: number = 88888;
    public static maxWorldRankCount: number = 500;
}