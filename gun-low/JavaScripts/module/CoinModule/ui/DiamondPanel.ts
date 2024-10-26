// import { Notice } from "../../../common/notice/Notice";
// import { GameConfig } from "../../../config/GameConfig";
// import { IShopItemElement } from "../../../config/ShopItem";
// import { TSIAPService } from "../../../tools/IAPInstance";
// import Utils from "../../../tools/Utils";
// import DiamondPanel_Generate from "../../../ui-generate/module/CoinModule/DiamondPanel_generate";
// import CoinModuleC from "../CoinModuleC";
// import DiamondItem from "./DiamondItem";

// export default class DiamondPanel extends DiamondPanel_Generate {
//     private coinModuleC: CoinModuleC = null;
//     private get getCoinModuleC(): CoinModuleC {
//         if (this.coinModuleC == null) {
//             this.coinModuleC = ModuleService.getModule(CoinModuleC);
//         }
//         return this.coinModuleC;
//     }
//     /**
//      * 构造UI文件成功后，在合适的时机最先初始化一次
//      */
//     protected onStart() {
//         //设置能否每帧触发onUpdate
//         this.canUpdate = false;
//         this.layer = UILayerMiddle;
//         this.bindButton();
//         this.initAction();
//     }

//     private bindButton(): void {
//         this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
//         this.mAdsButton.onClose.add(this.addAds.bind(this));
//         this.mAdsButton.text = `免费领取\n5个钻石`;
//     }

//     private initAction(): void {
//         TSIAPService.onArkCoinChange.add(this.addArkCoinChange.bind(this));
//     }

//     private addArkCoinChange(libeCount: number): void {
//         this.mLeBiCountTextBlock.text = libeCount.toString();
//     }

//     private addAds(isSuccess: boolean): void {
//         if (!isSuccess) {
//             Notice.showDownNotice(`领取失败,请重试`);
//             return;
//         }
//         this.getCoinModuleC.setDiamond(5);
//     }

//     private diamondItems: DiamondItem[] = [];
//     public initDiamondItem(): void {
//         GameConfig.ShopItem.getAllElement().forEach((value: IShopItemElement) => {
//             let diamondItem = UIService.create(DiamondItem);
//             diamondItem.setData(value);
//             this.mContentCanvas.addChild(diamondItem.uiObject);
//             this.diamondItems.push(diamondItem);
//         });
//         TSIAPService.reqRefreshCoin();
//     }

//     public refreshDiamondItems(): void {
//         this.diamondItems.forEach((value: DiamondItem) => {
//             value.refreshUI();
//         });
//     }

//     private addCloseButton(): void {
//         this.hideTween();
//     }

//     protected onShow(...params: any[]): void {
//         Utils.openUITween(
//             this.rootCanvas,
//             null,
//             null
//         );
//     }

//     /**
//      * 隐藏缓动
//      */
//     public hideTween(): void {
//         Utils.closeUITween(
//             this.rootCanvas,
//             null,
//             () => {
//                 this.hide();
//             });
//     }
// }