﻿import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../config/GameConfig";
import { EventType } from "../../tools/EventType";
import GlobalData from "../../tools/GlobalData";
import Utils from "../../tools/Utils";
import AdPanel from "../AdModule/ui/AdPanel";
import CoinPanel from "../CoinModule/ui/CoinPanel";
import { HUDData, KillTipType } from "./HUDData";
import HUDModuleS from "./HUDModuleS";
import HUDPanel, { SharePanel } from "./ui/HUDPanel";

export default class HUDModuleC extends ModuleC<HUDModuleS, HUDData> {
    private hudPanel: HUDPanel = null;
    private get getHUDPanel(): HUDPanel {
        if (!this.hudPanel) {
            this.hudPanel = UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }

    private sharePanel: SharePanel = null;
    private get getSharePanel(): SharePanel {
        if (!this.sharePanel) {
            this.sharePanel = UIService.getUI(SharePanel);
        }
        return this.sharePanel;
    }

    private adPanel: AdPanel = null;
    private get getAdPanel(): AdPanel {
        if (!this.adPanel) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }

    public onOpenShopAction: Action = new Action();
    public onOpenTeamAction: Action = new Action();
    public onOpenRankAction: Action = new Action();
    public onOpenActivityAction: Action = new Action();
    public onOpenTaskAction: Action = new Action();
    public onResetPosAction: Action = new Action();
    public onMorphAction: Action1<boolean> = new Action1<boolean>();
    public onJumpAction: Action = new Action();
    public onNormalAction: Action1<boolean> = new Action1<boolean>();
    public onReloadAction: Action = new Action();
    public onCrouchAction: Action = new Action();
    public onOpenRoleAction: Action = new Action();
    public onOpenShareAction: Action = new Action();
    public onUseShareAction: Action1<string> = new Action1<string>();

    protected onStart(): void {
        this.initUIPanel();
        this.initEventAction();
    }

    private initUIPanel(): void {
        this.hudPanel = UIService.getUI(HUDPanel);
    }

    private initEventAction(): void {
        this.initSetAction();
        this.initSoundEvent();
        this.initMorphAction();
        this.onJumpAction.add(this.addJumpAction.bind(this));
        this.onOpenRoleAction.add(this.addOpenRoleAction.bind(this));
        this.onOpenShareAction.add(this.onOpenShareActionHandler.bind(this));
        this.onUseShareAction.add(this.onUseShareActionHandler.bind(this));
        this.onCrouchAction.add(this.addCrouchAction.bind(this));
        Event.addLocalListener(EventType.OnOffMainHUD, this.addOnOffHUDPannel.bind(this));
        let isOpen = true;
        InputUtil.onKeyDown(mw.Keys.NumPadFive, () => {
            isOpen = !isOpen;
            isOpen ? UIService.getUI(CoinPanel).show() : UIService.getUI(CoinPanel).hide();
            Event.dispatchToLocal(EventType.OnOffMainHUD, isOpen);
        });
    }

    private addOnOffHUDPannel(isOpen: boolean): void {
        isOpen ? this.getHUDPanel.show() : this.getHUDPanel.hide();
    }

    private addJumpAction(): void {
        this.localPlayer.character.jump();
        if (!this.localPlayer.character.movementEnabled) this.localPlayer.character.movementEnabled = true;
    }


    private addOpenRoleAction(): void {
        AvatarEditorService.asyncOpenAvatarEditorModule();
    }

    private async onOpenShareActionHandler(): Promise<void> {
        this.getSharePanel.show();
        let sharedId = await Utils.createSharedId(this.localPlayer.character);
        this.getSharePanel.showPanel(sharedId);
    }

    private onUseShareActionHandler(shareId: string): void {
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                this.useShareId(shareId);
            }, GameConfig.Language.Text_TryItOnForFree.Value
                , GameConfig.Language.Text_Cancel.Value
                , GameConfig.Language.Text_FreeTryOn.Value);
        } else {
            this.useShareId(shareId);
        }
    }

    private async useShareId(shareId: string): Promise<void> {
        let isSuccess = await Utils.applySharedId(this.localPlayer.character, shareId);
        if (isSuccess) {
            Notice.showDownNotice(GameConfig.Language.Text_TryItOnSuccessfully.Value);
        } else {
            Notice.showDownNotice(GameConfig.Language.Text_InvalidID.Value);
        }
    }

    private isCrouching: boolean = false;
    private addCrouchAction(): void {
        this.isCrouching = !this.isCrouching
        this.localPlayer.character.crouch(this.isCrouching);
    }

    protected onEnterScene(sceneType: number): void {
        this.getHUDPanel.show();
        this.setPlayerIcon();
        this.initSetData();
        this.playBgm();
    }

    public updateVsUI(redCount: number, blueCount: number): void {
        this.getHUDPanel.updateVsUI(redCount, blueCount);
    }

    //#region 击杀提示
    public killTip(killerUserId: string, killerName: string, killedUserId: string, killedName: string): void {
        let killTipType: KillTipType = KillTipType.None;
        if (killerUserId == this.localPlayer.userId) {
            killTipType = KillTipType.Killer;
        } else if (killedUserId == this.localPlayer.userId) {
            killTipType = KillTipType.Killed;
        }
        this.getHUDPanel.killTip(killTipType, killerName, killedName);
        this.killTipsSound(killerUserId, killerName, killedUserId, killedName);
    }
    //#endregion

    //#region 连杀提示
    private killCountMap: Map<string, number> = new Map<string, number>();
    private revengeUserIdMap: Set<string> = new Set<string>();
    private killTipsSound(killerUserId: string, killerName: string, killedUserId: string, killedName: string): void {
        let killTipType: KillTipType = KillTipType.None;
        if (killedUserId == this.localPlayer.userId) {
            killTipType = KillTipType.Killed;
            if (!this.revengeUserIdMap.has(killerUserId)) this.revengeUserIdMap.add(killerUserId);
            SoundService.playSound("294343", 1, GlobalData.soundVolume);
        } else if (killerUserId == this.localPlayer.userId && this.revengeUserIdMap.has(killedUserId)) {
            killTipType = KillTipType.revenge;
            this.revengeUserIdMap.delete(killedUserId);
            SoundService.playSound("294342", 1, GlobalData.soundVolume);
        }
        this.getHUDPanel.showKillTips2(killerName, killedName, killTipType);

        if (this.killCountMap.has(killedUserId)) this.killCountMap.delete(killedUserId);
        let killCount: number = 0;
        if (this.killCountMap.has(killerUserId)) {
            killCount = this.killCountMap.get(killerUserId);
        }
        killCount++;
        this.killCountMap.set(killerUserId, killCount);
        if (killCount <= 1) return;

        let soundId: string = "";
        let killCountTips: string = "";
        switch (killCount) {
            case 2:
                soundId = "65877";
                killCountTips = GameConfig.Language.DefeatedPeople_2.Value;
                break;
            case 3:
                soundId = "65874";
                killCountTips = GameConfig.Language.DefeatedPeople_3.Value;
                break;
            case 4:
                soundId = "65873";
                killCountTips = GameConfig.Language.DefeatedPeople_4.Value;
                break;
            case 5:
                soundId = "65881";
                killCountTips = GameConfig.Language.DefeatedPeople_5.Value;
                break;
            case 6:
                soundId = "65871";
                killCountTips = GameConfig.Language.DefeatedPeople_6.Value;
                break;
            case 7:
                soundId = "65879";
                killCountTips = StringUtil.format(GameConfig.Language.DefeatedPeople_7.Value, 7);
                break;
            default:
                soundId = "65879";
                killCountTips = StringUtil.format(GameConfig.Language.DefeatedPeople_7.Value, killCount);
                break;
        }
        SoundService.playSound(soundId, 1, GlobalData.soundVolume);
        this.getHUDPanel.showKillTips1(killCountTips, killerName, killedName);
    }
    //#endregion

    //#region Player-ICON-HP-Rank
    private setPlayerIcon(): void {
        if (mw.SystemUtil.isPIE) return;
        mw.AccountService.fillAvatar(this.getHUDPanel.mIconmage);
    }

    public updateHpUI(hp: number, isUpdateBarMaxHp: boolean = false): void {
        if (hp < 0) hp = 0;
        if (isUpdateBarMaxHp) this.getHUDPanel.updateProgressBarMaxHp(hp);
        this.getHUDPanel.updateHpUI(hp);
        if (hp <= 0) this.getHUDPanel.startDeadCountDown();
        if (hp == GlobalData.maxHp) this.getHUDPanel.endDeadCountDown();
    }

    public updateRankUIText(isRedTeam: boolean, rank: number): void {
        this.getHUDPanel.updateRankUIText(isRedTeam, rank);
    }
    //#endregion

    //#region Set
    public onFireScaleAction: Action1<number> = new Action1<number>();
    public onControlScaleAction: Action1<number> = new Action1<number>();
    public onBgmVolumeAction: Action1<number> = new Action1<number>();
    public onSoundVolumeAction: Action1<number> = new Action1<number>();

    private currentFireScale: number = 0.05;
    private currentControlScale: number = 0.3;
    private currentBgmVolume: number = 1;
    private currentSoundVolume: number = 1;

    private initSetData(): void {
        this.currentFireScale = this.data.fireScale;
        this.currentControlScale = this.data.controlScale;
        this.currentBgmVolume = this.data.bgmVolume;
        this.currentSoundVolume = this.data.soundVolume;
        GlobalData.soundVolume = this.currentSoundVolume;
        this.getHUDPanel.initSetData(this.currentFireScale, this.currentControlScale, this.currentBgmVolume, this.currentSoundVolume);
    }

    private initSetAction(): void {
        this.onFireScaleAction.add((scale: number) => {
            this.currentFireScale = scale;
        });
        this.onControlScaleAction.add((scale: number) => {
            this.currentControlScale = scale;
        });
        this.onBgmVolumeAction.add((volume: number) => {
            this.currentBgmVolume = volume;
            SoundService.BGMVolumeScale = volume;
        });
        this.onSoundVolumeAction.add((volume: number) => {
            this.currentSoundVolume = volume;
            GlobalData.soundVolume = volume;
        });
    }

    public get getFireScale(): number {
        return this.currentFireScale;
    }

    public saveSetData(): void {
        if (this.data.fireScale == this.currentFireScale &&
            this.data.controlScale == this.currentControlScale &&
            this.data.bgmVolume == this.currentBgmVolume &&
            this.data.soundVolume == this.currentFireScale) return;
        this.server.net_saveSetData(this.currentFireScale, this.currentControlScale, this.currentBgmVolume, this.currentSoundVolume);
    }
    //#endregion

    //#region SoundService
    private playBgm(): void {
        // return;
        SoundService.playBGM("146100", this.currentBgmVolume);
    }

    private initSoundEvent(): void {
        Event.addLocalListener("PlayButtonClick", (btnName: string) => {
            if (btnName == "reload" || btnName == "jump" || btnName == "aim" || btnName == "left_fire" || btnName == "mJumpButton") return;
            this.playClickSound();
        });
    }

    private clickId: string = null;
    private playClickSound(): void {
        if (this.clickId) SoundService.stopSound(this.clickId);
        this.clickId = SoundService.playSound("200082", 1, GlobalData.soundVolume);
    }
    //#endregion

    //#region Morph
    private initMorphAction(): void {
        this.onMorphAction.add(this.addMorphAction.bind(this));
    }

    public get getIsMorph(): boolean {
        return this.isMorph;
    }

    private isMorph: boolean = false;
    private addMorphAction(isMorph: boolean): void {
        this.isMorph = isMorph;
        // Event.dispatchToLocal(EventType.OnOffWeaponUI, isMorph);
        // if (!isMorph) Event.dispatchToLocal(EventType.TryOutGun);
    }
    //#endregion

    //#region Aim
    public startAimUITween(): void {
        this.getHUDPanel.startAimUITween();
    }
    //#endregion

    //#region Update Gun
    public updateBulletCount(bulletCount: number): void {
        this.getHUDPanel.updateBulletCountUI(bulletCount);
    }

    public updateGunPropUI(gunIcon: string, gunBulletCount: number, gunName: string): void {
        this.getHUDPanel.updateGunPropUI(gunIcon, gunBulletCount, gunName);
    }
    //#endregion
}