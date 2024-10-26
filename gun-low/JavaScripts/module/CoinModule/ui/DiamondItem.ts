// import { IShopItemElement } from "../../../config/ShopItem";
// import Utils from "../../../tools/Utils";
// import DiamondItem_Generate from "../../../ui-generate/module/CoinModule/DiamondItem_generate";
// import CoinModuleC from "../CoinModuleC";

// export default class DiamondItem extends DiamondItem_Generate {
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
//     }

//     private bindButton(): void {
//         this.mBuyButton.onClicked.add(this.addBuyButton.bind(this));
//     }

//     private addBuyButton(): void {
//         // this.getCoinModuleC.buyDiamond(this.shopItemElement);
//     }

//     private shopItemElement: IShopItemElement = null;
//     public setData(value: IShopItemElement): void {
//         this.shopItemElement = value;
//         if (this.getCoinModuleC.getIsFirstBuy) {
//             Utils.setWidgetVisibility(this.mFirstBuyTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
//             Utils.setWidgetVisibility(this.mFirstCanvas, mw.SlateVisibility.SelfHitTestInvisible);
//             Utils.setWidgetVisibility(this.mLiBiCountTextBlock_Fake, mw.SlateVisibility.SelfHitTestInvisible);
//             this.mFirstDiamondTextBlock.text = `额外+${this.shopItemElement.Count}`;
//             this.mLiBiCountTextBlock_Fake.text = `${this.shopItemElement.PartyPrice * 2}`;
//         } else {
//             Utils.setWidgetVisibility(this.mFirstBuyTextBlock, mw.SlateVisibility.Collapsed);
//             Utils.setWidgetVisibility(this.mFirstCanvas, mw.SlateVisibility.Collapsed);
//             Utils.setWidgetVisibility(this.mLiBiCountTextBlock_Fake, mw.SlateVisibility.Collapsed);
//             this.mLiBiCountTextBlock_Real.position = new mw.Vector2(60, 15);
//             this.mIconImage.size = new mw.Vector2(190, 190);
//             this.mIconImage.position = new mw.Vector2(-20, 0);
//         }
//         this.mIconImage.imageGuid = this.shopItemElement.Icon;
//         this.mDiamondCountTextBlock.text = `+${this.shopItemElement.Count}`;
//         this.mLiBiCountTextBlock_Real.text = `${this.shopItemElement.PartyPrice}`;
//     }

//     public refreshUI(): void {
//         if (this.getCoinModuleC.getIsFirstBuy) return;
//         Utils.setWidgetVisibility(this.mFirstBuyTextBlock, mw.SlateVisibility.Collapsed);
//         Utils.setWidgetVisibility(this.mFirstCanvas, mw.SlateVisibility.Collapsed);
//         Utils.setWidgetVisibility(this.mLiBiCountTextBlock_Fake, mw.SlateVisibility.Collapsed);
//         this.mLiBiCountTextBlock_Real.position = new mw.Vector2(60, 15);
//         this.mIconImage.size = new mw.Vector2(190, 190);
//         this.mIconImage.position = new mw.Vector2(-20, 0);
//     }
// }