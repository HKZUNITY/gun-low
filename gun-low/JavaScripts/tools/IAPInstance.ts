import { Notice } from "../common/notice/Notice";

class TSIAP {
    /**功能是否开放 */
    public enable: boolean = false;
    /**乐币数量 */
    public arkCoin: number = 0;
    /**乐币数量监听回调 */
    public onArkCoinChange: Action1<number> = new Action1();
    constructor() {
        if (SystemUtil.isClient()) {
            mw.MessageChannelService.registerAction("bridge.action.feature.support.result", this, (dataStr) => {
                try {
                    const resp = JSON.parse(dataStr).data;
                    if (resp.feature == "isIAPEnable") {
                        this.enable = resp.isSupport
                    }
                } catch (err) {
                }
            });
            this.reqIAP();
            PurchaseService.onArkBalanceUpdated.add((amount: number) => {
                this.arkCoin = amount;
                this.onArkCoinChange.call(amount);
            });
            this.reqRefreshCoin();

        }
    }
    private reqIAP() {
        const Data = {
            "action": "ue.action.feature.support",
            "messageId": 0,
            "callbackType": "Call",
            "data": {
                "feature": "isIAPEnable"
            }
        };
        const DataStr = JSON.stringify(Data);
        mw.MessageChannelService.sendTo(mw.MessageChannelReceiver.Client, DataStr);
    }
    /**
     * 客户端发起购买
     * @param commodityId 商品Code
     * @returns 
     */
    public reqBuyGoods(commodityId: string) {
        return new Promise((result: (success: boolean) => void) => {
            console.warn("发起购买的code", commodityId)
            PurchaseService.placeOrder(commodityId, 1, (status: number, msg: string) => {
                console.warn(`IAP_BuyCallback__,status:${status},msg:${msg},id:${commodityId}`);
                PurchaseService.getArkBalance();
                if (status == 200) {
                    result(true);
                    console.warn("订单支付成功!," + commodityId)
                } else {
                    result(false);
                    console.warn(`订单支付失败, id:${commodityId},msg:${msg}`)
                    // Notice.showDownNotice(`订单支付失败`);
                }
            })
        });
    }
    /**
     * 乐币是否足够
     * @param cost 花费金额
     * @returns 
     */
    public isArkCoinEnough(cost: number) {
        return this.arkCoin >= cost;
    }
    /**
     * 客户端发起刷新乐币
     */
    public reqRefreshCoin() {
        PurchaseService.getArkBalance();
    }
}
export let TSIAPService = new TSIAP();