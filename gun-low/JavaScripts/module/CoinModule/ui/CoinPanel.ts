import CoinPanel_Generate from "../../../ui-generate/module/CoinModule/CoinPanel_generate";
import CoinModuleC from "../CoinModuleC";

export default class CoinPanel extends CoinPanel_Generate {
    private coinModuleC: CoinModuleC = null;
    private get getCoinModuleC(): CoinModuleC {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }

    /** 
     * 构造UI文件成功后，在合适的时机最先初始化一次 
     */
    protected onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButtons();
    }

    private bindButtons(): void {
        this.mAddCoinButton.onClicked.add((this.bindAddCoinButton.bind(this)));
        this.mAddDiamondButton.onClicked.add((this.bindAddDiamondButton.bind(this)));
    }

    private bindAddCoinButton(): void {
        this.getCoinModuleC.onAddCoinAction.call();
    }

    private bindAddDiamondButton(): void {
        this.getCoinModuleC.onAddDiamondAction.call();
    }

    public setCoin(coin: number): void {
        this.mCoinTextBlock.text = coin + "";
    }

    public setDiamond(diamond: number): void {
        this.mDiamondTextBlock.text = diamond + "";
    }

    public setCoinAndDiamond(coin: number, diamond: number): void {
        this.mDiamondTextBlock.text = diamond + "";
        this.mCoinTextBlock.text = coin + "";
    }
}