export default class ActivityData extends Subdata {
    @Decorator.persistence()
    public whatDay: number = 0;
    @Decorator.persistence()
    public minutes: number = 0;

    protected initDefaultData(): void {
        this.whatDay = 0;
        this.minutes = 0;
    }

    public setData(whatDay: number): void {
        this.whatDay = whatDay;
        this.minutes = 0;
        this.save(true);
    }

    public setMinutes(minutes: number): void {
        this.minutes = minutes;
        this.save(true);
    }
}