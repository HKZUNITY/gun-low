import ConfirmPanel from "../../common/ConfirmPanel";
import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../config/GameConfig";
import { IShopItemElement } from "../../config/ShopItem";
import { EventType } from "../../tools/EventType";
import GlobalData from "../../tools/GlobalData";
import { TSIAPService } from "../../tools/IAPInstance";
import AdPanel from "../AdModule/ui/AdPanel";
import CoinData from "./CoinData";
import CoinModuleS from "./CoinModuleS";
import CoinPanel from "./ui/CoinPanel";
// import DiamondPanel from "./ui/DiamondPanel";

export default class CoinModuleC extends ModuleC<CoinModuleS, CoinData> {
    private coinPanel: CoinPanel = null;
    private get getCoinPanel(): CoinPanel {
        if (this.coinPanel == null) {
            this.coinPanel = mw.UIService.getUI(CoinPanel);
        }
        return this.coinPanel;
    }

    private adPanel: AdPanel = null;
    private get getAdPanel(): AdPanel {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }

    // private diamondPanel: DiamondPanel = null;
    // private get getDiamondPanel(): DiamondPanel {
    //     if (this.diamondPanel == null) {
    //         this.diamondPanel = mw.UIService.getUI(DiamondPanel);
    //     }
    //     return this.diamondPanel;
    // }

    private confirmPanel: ConfirmPanel = null;
    private get getConfirmPanel(): ConfirmPanel {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }

    public onAddCoinAction: Action = new Action();
    public onAddDiamondAction: Action = new Action();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.initUIPanel();
        this.bindEventAction();
    }

    private initUIPanel(): void {
        this.coinPanel = mw.UIService.getUI(CoinPanel);
        this.adPanel = UIService.getUI(AdPanel);
    }

    private bindEventAction(): void {
        this.onAddCoinAction.add(this.getCoinByAd.bind(this));
        this.onAddDiamondAction.add(this.getDiamondByAd.bind(this));
    }

    private coin: number = 0;
    private diamond: number = 0;
    protected onEnterScene(sceneType: number): void {
        this.getCoinPanel.show();
        this.coin = this.data.coin;
        this.diamond = this.data.diamond;
        this.getCoinPanel.setCoinAndDiamond(this.coin, this.diamond);
        // this.defaultAds();
        // this.initLeBiData();
    }

    //#region Coin
    public setCoin(coin: number): void {
        this.coin += coin;
        this.popupNotice(coin, true);
        if (this.coin < 0) this.coin = 0;
        this.server.net_setCoin(this.coin);
        this.getCoinPanel.setCoin(this.coin);
    }

    public setDiamond(diamond: number): void {
        this.diamond += diamond;
        this.popupNotice(diamond, false);
        if (this.diamond < 0) this.diamond = 0;
        this.server.net_setDiamond(this.diamond);
        this.getCoinPanel.setDiamond(this.diamond);
    }

    public get getCoin(): number {
        return this.coin;
    }

    public get getDiamond(): number {
        return this.diamond;
    }

    public getCoinByAd(): void {
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                this.setCoin(GlobalData.addCoin);
            }, StringUtil.format(GameConfig.Language.FreeCollectionOfCoins.Value, GlobalData.addCoin), GameConfig.Language.Cancel.Value, GameConfig.Language.FreeToReceive.Value);
        } else {
            this.setCoin(GlobalData.addCoin);
        }
        // this.openShopBuyDiamondCoin();
    }

    public getDiamondByAd(diamond: number): void {
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                this.setDiamond(GlobalData.addDiamond);
            }, StringUtil.format(GameConfig.Language.FreeCollectionOfDiamonds.Value, GlobalData.addDiamond), GameConfig.Language.Cancel.Value, GameConfig.Language.FreeToReceive.Value);
        } else {
            this.setDiamond(GlobalData.addDiamond);
        }
        // this.openShopBuyDiamondCoin(diamond);
    }

    public net_killPlayerAddCoin(coin: number): void {
        this.coin += coin;
        this.popupNotice(coin, true);
        this.getCoinPanel.setCoin(this.coin);
    }

    private popupNotice(num: number, isCoin: boolean): void {
        if (num == 0) return;
        Notice.showDownNotice("<color=#" + (num > 0 ? "yellow>" : "red>") + (num > 0 ? GameConfig.Language.Get.Value : GameConfig.Language.Spend.Value) + (isCoin ? GameConfig.Language.GoldCoins.Value : GameConfig.Language.Diamonds.Value) + num + "</color>");
        // Notice.showDownNotice("<color=#lime>" + "<size=18>" + killerName + " 击败了 " + killedName + "</size>" + "</color>"
        //     + "\n" + "<color=#red>完成了" + killTips + "</color>");
    }
    //#endregion

    // //#region Ads
    // private defaultAds(): void {
    //     this.delay30Seconds();
    //     this.setInterval180Seconds();
    // }

    // private delay30Seconds(): void {
    //     TimeUtil.delaySecond(30).then(() => {
    //         this.getAdPanel.showRewardAd(() => {
    //             this.setDiamond(2);
    //         }, "大礼包\n免费获得2个钻石");
    //     });
    // }

    // private setInterval180Seconds(): void {
    //     TimeUtil.setInterval(() => {
    //         this.getAdPanel.showRewardAd(() => {
    //             this.setDiamond(2);
    //         }, "幸运大礼包\n免费获得2个钻石");
    //     }, 180);
    // }

    // private isFirst: boolean = true;
    // public dieAds(): void {
    //     if (this.isFirst) {
    //         this.isFirst = false;
    //         return;
    //     }
    //     this.getAdPanel.showRewardAd(() => {
    //         this.setDiamond(2);
    //     }, "被击败奖励\n免费获得2个钻石");
    //     Event.dispatchToLocal(EventType.TryOutGun);
    // }
    //#endregion

    //#region LeBi
    // private isFirstBuy: boolean = true;
    // public get getIsFirstBuy(): boolean {
    //     return this.isFirstBuy;
    // }
    // private setFirstBuy(): void {
    //     if (!this.isFirstBuy) return;
    //     this.isFirstBuy = false;
    //     this.getDiamondPanel.refreshDiamondItems();
    //     this.server.net_setFirstBuy(this.isFirstBuy);
    // }

    // private shopItemElements: IShopItemElement[] = [];
    // private get getShopItemElements(): IShopItemElement[] {
    //     if (!this.shopItemElements || this.shopItemElements.length == 0) {
    //         this.shopItemElements = GameConfig.ShopItem.getAllElement();
    //     }
    //     return this.shopItemElements;
    // }
    // private initLeBiData(): void {
    //     this.isFirstBuy = this.data.isFirstBuy;
    //     this.shopItemElements = GameConfig.ShopItem.getAllElement();
    //     this.getDiamondPanel.initDiamondItem();
    // }

    // public openShopBuyDiamondCoin(diamond: number = 0): void {
    //     if (diamond == 0 || !TSIAPService.enable) {
    //         this.getDiamondPanel.show();
    //     } else {
    //         for (let i = 0; i < this.shopItemElements.length; ++i) {
    //             if (this.shopItemElements[i].Count >= diamond) {
    //                 TSIAPService.reqBuyGoods(this.shopItemElements[i].CommodityId);
    //                 console.warn(`diamond:${diamond}`);
    //                 break;
    //             }
    //         }
    //     }
    // }

    // public net_deliverGoods(commodityId: string): void {
    //     let diamondCount = this.getBuyDiamondCount(commodityId);
    //     Notice.showDownNotice(`购买成功`);
    //     if (this.isFirst) diamondCount *= 2;
    //     this.setDiamond(diamondCount);
    //     this.setFirstBuy();
    // }

    // private getBuyDiamondCount(commodityId: string): number {
    //     for (let i = 0; i < this.getShopItemElements.length; ++i) {
    //         if (this.getShopItemElements[i].CommodityId == commodityId) {
    //             return this.getShopItemElements[i].Count;
    //         }
    //     }
    //     return 0;
    // }

    // public buyDiamond(shopItemElement: IShopItemElement): void {
    //     if (!shopItemElement.CommodityId || !TSIAPService.enable) {
    //         this.getAdPanel.showRewardAd(() => {
    //             this.setDiamond(5);
    //         }, "购买失败,请升级233乐园\n大礼包\n免费获得5个钻石");
    //         return;
    //     }
    //     let contentText: string = `消耗${shopItemElement.PartyPrice}乐币购买${shopItemElement.Count * (this.isFirstBuy ? 2 : 1)}钻石`;
    //     this.getConfirmPanel.confirmTips(() => {
    //         TSIAPService.reqBuyGoods(shopItemElement.CommodityId);
    //     }, contentText, "购买", "取消");
    // }
    //#endregion
}