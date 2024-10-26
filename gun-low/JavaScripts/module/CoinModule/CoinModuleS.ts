import Utils from "../../tools/Utils";
import CoinData from "./CoinData";
import CoinModuleC from "./CoinModuleC";

export default class CoinModuleS extends ModuleS<CoinModuleC, CoinData> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindEvent();
    }

    private bindEvent(): void {
        // const onShipOrder = (playerId: number, orderId: string, commodityId: string, amount: number, confirmOrder: (bReceived: boolean) => void) => {
        //     //根据 playerId 和 commodityId 来处理购买成功后的逻辑
        //     confirmOrder(true); //调用这个方法表示确认收货成功
        //     this.deliverGoods(playerId, commodityId);
        // }
        // // 监听订单发货后的委托
        // mw.PurchaseService.onOrderDelivered.add(onShipOrder);
    }

    // private async deliverGoods(playerId: number, commodityId: string): Promise<void> {
    //     let player = await Player.asyncGetPlayer(playerId);
    //     if (!player) return;
    //     this.getClient(player).net_deliverGoods(commodityId);
    // }

    @Decorator.noReply()
    public net_setCoin(coin: number): void {
        this.currentData.setCoin(coin);
    }

    @Decorator.noReply()
    public net_setDiamond(diamond: number): void {
        this.currentData.setDiamond(diamond);
    }

    @Decorator.noReply()
    public net_setFirstBuy(isFirstBuy: boolean): void {
        this.currentData.setFirstBuy(isFirstBuy);
    }

    public killPlayerAddCoin(player: mw.Player): void {
        let coinData = DataCenterS.getData(player, CoinData);
        let randomCoin = Utils.randomInt(10, 30);
        coinData.coin += randomCoin;
        coinData.save(true);
        this.getClient(player).net_killPlayerAddCoin(randomCoin);
    }
}