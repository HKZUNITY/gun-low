import ShopData, { ShopType } from "./ShopData";
import ShopModuleC from "./ShopModuleC";

export default class ShopModuleS extends ModuleS<ShopModuleC, ShopData> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

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