import TeamItem_Generate from "../../../ui-generate/module/TeamModule/TeamItem_generate";

export default class TeamItem extends TeamItem_Generate {
	protected onStart(): void {
		this.setPlayerName("");
		// this.mBgImage.visibility = mw.SlateVisibility.Collapsed;
	}

	public setBgImage(isRed: boolean): void {
		this.mBgImage.imageGuid = isRed ? "99551" : "99547";
	}

	public setPlayerName(name: string): void {
		this.mNameTextBlock.text = name;
		// let visibility = (name == "") ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible;
		// this.mBgImage.visibility = visibility;
	}

	public setNameColor(fontColor: mw.LinearColor): void {
		this.mNameTextBlock.fontColor = fontColor;
	}
}