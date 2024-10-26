import { MapEx } from "../../tools/MapEx";
import Utils from "../../tools/Utils";

export enum ShopType {
    Gun = 0,
    Role = 1,
    Trailing = 2
}

export enum PriceType {
    Free = 0,
    CoinAds = 1,
    Ads = 2
}

export default class ShopData extends Subdata {

    @Decorator.persistence()
    public shopIds: MapEx.MapExClass<number[]> = {};//1-Gun,2-Role,3-Trailing
    @Decorator.persistence()
    public useShopIds: MapEx.MapExClass<number> = {};//1-Gun,2-Role,3-Trailing

    protected initDefaultData(): void {
        let gunId = Utils.randomInt(1, 3);
        let roleId = Utils.randomInt(1, 5);
        this.shopIds = {
            [ShopType.Gun]: [gunId],
            [ShopType.Role]: [roleId]
        };
        this.useShopIds = {
            [ShopType.Gun]: gunId,
            [ShopType.Role]: roleId
        };
    }

    public setShopId(shopType: ShopType, shopId: number): void {
        if (MapEx.has(this.shopIds, shopType)) {
            MapEx.get(this.shopIds, shopType).push(shopId);
        } else {
            MapEx.set(this.shopIds, shopType, [shopId]);
        }
        this.save(true);
    }

    public setUseShopId(shopType: ShopType, shopId: number): void {
        MapEx.set(this.useShopIds, shopType, shopId);
        this.save(true);
    }
}