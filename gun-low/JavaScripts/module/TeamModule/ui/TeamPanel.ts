import { Notice } from "../../../common/notice/Notice";
import { GameConfig } from "../../../config/GameConfig";
import { EventType } from "../../../tools/EventType";
import GlobalData from "../../../tools/GlobalData";
import Utils from "../../../tools/Utils";
import TeamPanel_Generate from "../../../ui-generate/module/TeamModule/TeamPanel_generate";
import { TeamType } from "../TeamData";
import TeamModuleC from "../TeamModuleC";
import TeamItem from "./TeamItem";

export default class TeamPanel extends TeamPanel_Generate {
	private teamModuleC: TeamModuleC = null;
	private get getTeamModuleC(): TeamModuleC {
		if (this.teamModuleC == null) {
			this.teamModuleC = ModuleService.getModule(TeamModuleC);
		}
		return this.teamModuleC;
	}

	protected onStart(): void {
		this.initDatas();
		this.bindButtons();
		this.initTextBlock();
	}

	private initTextBlock(): void {
		this.mRedTeamTextBlock.text = `${GameConfig.Language.Join.Value}\n${GameConfig.Language.Lurking.Value}`;
		this.mBlueTeamTextBlock.text = `${GameConfig.Language.Join.Value}\n${GameConfig.Language.Defenders.Value}`;
		this.mRedTextBlock.text = GameConfig.Language.Lurking.Value;
		this.mBlueTextBlock.text = GameConfig.Language.Defenders.Value;
		if (GlobalData.languageId == 0) {
			this.mRedTextBlock.fontSize = 40;
			this.mBlueTextBlock.fontSize = 40;
		}
	}

	private redTeamItems: TeamItem[] = [];
	private blueTeamItems: TeamItem[] = [];
	private initDatas(): void {
		this.teamModuleC = ModuleService.getModule(TeamModuleC);
		let roomPeopleCount = GlobalData.roomPeopleCount;
		for (let i = 0; i < roomPeopleCount; ++i) {
			let item = UIService.create(TeamItem);
			// item.setBgImage(i < 10);
			if (i < (roomPeopleCount / 2)) {
				this.mRedTeadCanvas.addChild(item.uiObject);
				this.redTeamItems.push(item);
			} else {
				this.mBlueTeamCanvas.addChild(item.uiObject);
				this.blueTeamItems.push(item);
			}
		}
	}

	private bindButtons(): void {
		this.mRedTeamButton.onClicked.add(this.bindClickRedTeamButton.bind(this));
		this.mBlueTeamButton.onClicked.add(this.bindClickBlueTeamButton.bind(this));
		this.mCloseButton.onClicked.add(this.bindCloseButton.bind(this));
	}

	private bindClickRedTeamButton(): void {
		this.changeTeam(TeamType.Red);
	}

	private bindClickBlueTeamButton(): void {
		this.changeTeam(TeamType.Blue);
	}

	private bindCloseButton(): void {
		this.hideTween();
		Event.dispatchToLocal(EventType.OnOffMainHUD, true);
	}

	private isDelayedEnd: boolean = true;
	private async changeTeam(teamType: TeamType): Promise<void> {
		if (this.getTeamModuleC.getCurTeamType() == teamType) {
			Notice.showDownNotice(StringUtil.format(GameConfig.Language.SwitchingFailedYouAreAlreadyIn.Value, (teamType == TeamType.Red ? GameConfig.Language.Lurking.Value : GameConfig.Language.Defenders.Value)));
			return;
		}
		if (!this.isDelayedEnd) {
			Notice.showDownNotice(StringUtil.format(GameConfig.Language.CannotSwitchTeamsFrequentlyTryAgainInSeconds.Value, 10));
			return;
		}
		this.isDelayedEnd = false;
		TimeUtil.delaySecond(10).then(() => {
			this.isDelayedEnd = true;
		});
		await this.getTeamModuleC.net_changeTeam(teamType);
	}

	public setTeamDatas(redNames: string[], blueNames: string[], selfIndex: number, currentTeamType: TeamType): void {
		for (let i = 0; i < redNames.length; ++i) {
			this.redTeamItems[i].setPlayerName(redNames[i]);
			if (selfIndex - 1 == i && currentTeamType == TeamType.Red) {
				this.redTeamItems[i].setNameColor(mw.LinearColor.yellow);
			} else {
				this.redTeamItems[i].setNameColor(mw.LinearColor.white);
			}
		}
		for (let i = redNames.length; i < this.redTeamItems.length; ++i) {
			this.redTeamItems[i].setPlayerName("");
		}

		for (let i = 0; i < blueNames.length; ++i) {
			this.blueTeamItems[i].setPlayerName(blueNames[i]);
			if (selfIndex - 1 == i && currentTeamType == TeamType.Blue) {
				this.blueTeamItems[i].setNameColor(mw.LinearColor.yellow);
			} else {
				this.blueTeamItems[i].setNameColor(mw.LinearColor.white);
			}
		}
		for (let i = blueNames.length; i < this.blueTeamItems.length; ++i) {
			this.blueTeamItems[i].setPlayerName("");
		}
	}

	protected onShow(...params: any[]): void {
		Utils.openUITween(
			this.rootCanvas,
			() => {
				// this.hudPanel.hide();
			},
			null
		);
	}

	/**
	 * 隐藏缓动
	 */
	public hideTween(): void {
		Utils.closeUITween(
			this.rootCanvas,
			null,
			() => {
				this.hide();
			});
	}
}