import ShopData, { ShopType } from "./ShopData";
import ShopModuleC from "./ShopModuleC";

export default class ShopModuleS extends ModuleS<ShopModuleC, ShopData> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        mw.PurchaseService.onOrderDelivered.add(this.addShipOrder.bind(this));
    }

    private addShipOrder(playerId: number, orderId: string, commodityId: string, amount: number, confirmOrder: (bReceived: boolean) => void): void {
        //根据playerId和commodityId来处理购买逻辑
        this.getClient(playerId).net_deliverGoods(commodityId, amount);
        confirmOrder(true);//调用这个方法表示确认收货成功
    }

    @Decorator.noReply()
    public net_buyComplete(): void {
        this.currentData.buyComplete();
    }

    protected onPlayerLeft(player: mw.Player): void {
        this.deleteTrailing(player.userId);
    }

    @Decorator.noReply()
    public net_setShopId(shopType: ShopType, shopId: number): void {
        this.currentData.setShopId(shopType, shopId);
    }

    @Decorator.noReply()
    public net_setUseShopId(shopType: ShopType, shopId: number): void {
        this.currentData.setUseShopId(shopType, shopId);
    }

    private trailingMap: Map<string, number> = new Map<string, number>();
    @Decorator.noReply()
    public net_setCharacterTrailing(trailingId: string): void {
        this.stopTrailing(this.currentPlayer.userId);
        let effectId = EffectService.playOnGameObject(trailingId, this.currentPlayer.character, { loopCount: 0, slotType: mw.HumanoidSlotType.BackOrnamental });
        this.trailingMap.set(trailingId, effectId);
    }

    private stopTrailing(userId: string): void {
        if (this.trailingMap.has(userId)) {
            EffectService.stop(this.trailingMap.get(userId));
        }
    }

    private deleteTrailing(userId: string): void {
        if (this.trailingMap.has(userId)) {
            EffectService.stop(this.trailingMap.get(userId));
            this.trailingMap.delete(userId);
        }
    }
}