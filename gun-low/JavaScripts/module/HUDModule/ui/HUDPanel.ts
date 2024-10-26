import { Notice } from "../../../common/notice/Notice";
import Utils, { cubicBezier } from "../../../tools/Utils";
import HUDPanel_Generate from "../../../ui-generate/module/HUDModule/HUDPanel_generate";
import CoinModuleC from "../../CoinModule/CoinModuleC";
import { KillTipData, KillTipType } from "../HUDData";
import HUDModuleC from "../HUDModuleC";
import { KillTipItem } from "./KillTipItem";

export default class HUDPanel extends HUDPanel_Generate {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private coinModuleC: CoinModuleC = null;
    private get getCoinModuleC(): CoinModuleC {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }

    protected onStart(): void {
        this.initModule();
        this.initUI();
        this.bindButtons();
    }

    private initModule(): void {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
    }

    private initUI(): void {
        this.initKillTipItems();
        this.initDeadCountDown();
        this.initFlickerInvincibleText();
        this.initTaskTween();
        this.initUITweens();
        Utils.setWidgetVisibility(this.mKillTipCountCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mKillTipTextBlock3, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mUnMorphCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mMorphCanvas, mw.SlateVisibility.Collapsed);
        this.initAimUI();
    }

    private bindButtons(): void {
        this.mShopButton.onClicked.add(this.onClickOpenShopButton.bind(this));
        this.mTeamButton.onClicked.add(this.onClickOpenTeamButton.bind(this));
        this.mRankButton.onClicked.add(this.onClickOpenRankButton.bind(this));
        this.mActivityButton.onClicked.add(this.onClickOpenActivityButton.bind(this));
        this.mTaskButton.onClicked.add(this.onClickOpenTaskButton.bind(this));
        this.mResetPosButton.onClicked.add(this.onClickResetPosButton.bind(this));
        this.mMorphButton.onClicked.add(this.onClickMorphButton.bind(this));
        this.mUnMorphButton.onClicked.add(this.onClickUnMorphButton.bind(this));
        this.mJumpButton.onClicked.add(this.onClickJumpButton.bind(this));
        this.bindSetButton();
        this.bindAtkButton();
    }

    private onClickOpenShopButton(): void {
        this.getHUDModuleC.onOpenShopAction.call();
    }

    private onClickOpenTeamButton(): void {
        this.getHUDModuleC.onOpenTeamAction.call();
    }

    private onClickOpenRankButton(): void {
        this.getHUDModuleC.onOpenRankAction.call();
    }

    private onClickOpenActivityButton(): void {
        this.getHUDModuleC.onOpenActivityAction.call();
    }

    private onClickOpenTaskButton(): void {
        this.getHUDModuleC.onOpenTaskAction.call();
    }

    private onClickResetPosButton(): void {
        this.getHUDModuleC.onResetPosAction.call();
    }

    private onClickMorphButton(): void {
        this.getHUDModuleC.onMorphAction.call(true);
        Utils.setWidgetVisibility(this.mUnMorphCanvas, mw.SlateVisibility.SelfHitTestInvisible);
        Utils.setWidgetVisibility(this.mAtkCanvas, mw.SlateVisibility.Collapsed);
    }

    private onClickUnMorphButton(): void {
        this.getHUDModuleC.onMorphAction.call(false);
        Utils.setWidgetVisibility(this.mUnMorphCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mAtkCanvas, mw.SlateVisibility.SelfHitTestInvisible);
    }

    private onClickJumpButton(): void {
        this.getHUDModuleC.onJumpAction.call(false);
    }

    public updateVsUI(redCount: number, blueCount: number): void {
        this.mRedCountTextBlock.text = redCount + "";
        this.mBlueCountTextBlock.text = blueCount + "";
    }

    protected onHide(): void {
        this.mVirtualJoystickPanel.resetJoyStick();
    }

    //#region 击杀提示
    private initKillTipItems(): void {
        for (let i = 0; i < 4; ++i) {
            let killTipItem = UIService.create(KillTipItem);
            killTipItem.uiObject.position = new mw.Vector2(0, 37 * i);
            Utils.setWidgetVisibility(killTipItem.uiObject, mw.SlateVisibility.Collapsed);
            this.mKillTipCanvas.addChild(killTipItem.uiObject);
            this.killTipItems.push(killTipItem);
        }
    }

    private hideKillTipIntervalId: any = null;
    private killTipItems: KillTipItem[] = [];
    private killTipDatas: KillTipData[] = [];
    public killTip(killTipType: KillTipType, killerName: string, killedName: string): void {
        let killTipData: KillTipData = new KillTipData();
        killTipData.killTipType = killTipType;
        killTipData.killerName = killerName;
        killTipData.killedName = killedName;
        if (this.killTipDatas.length >= 4) {
            this.killTipDatas.shift();
        }
        this.killTipDatas.push(killTipData);
        this.updateKillTipItems();

        this.clearHideKillTipIntervalId();
        this.hideKillTipIntervalId = TimeUtil.setInterval(() => {
            if (this.killTipDatas && this.killTipDatas.length > 0) {
                this.killTipDatas.shift();
                this.updateKillTipItems();
            } else {
                this.clearHideKillTipIntervalId();
            }
        }, 5);
    }

    private clearHideKillTipIntervalId(): void {
        if (this.hideKillTipIntervalId) {
            TimeUtil.clearInterval(this.hideKillTipIntervalId);
            this.hideKillTipIntervalId = null;
        }
    }

    private updateKillTipItems(): void {
        for (let i = 0; i < this.killTipDatas.length; ++i) {
            this.killTipItems[i].setInfo(this.killTipDatas[i]);
        }
        for (let i = this.killTipDatas.length; i < 4; ++i) {
            Utils.setWidgetVisibility(this.killTipItems[i].uiObject, mw.SlateVisibility.Collapsed);
        }
    }
    //#endregion

    //#region 连杀提示
    private killTipsTimeOutId1: any = null;
    private killTipsTimeOutId2: any = null;
    public showKillTips1(killTips: string, killerName: string, killedName: string): void {
        Notice.showDownNotice("<color=#lime>" + "<size=18>" + killerName + " 击败了 " + killedName + "</size>" + "</color>"
            + "\n" + "<color=#red>" + killTips + "</color>");
    }

    private clearKillTipsTimeOutId1(): void {
        if (this.killTipsTimeOutId1) {
            clearTimeout(this.killTipsTimeOutId1);
            this.killTipsTimeOutId1 = null;
        }
    }

    public showKillTips2(killerName: string, killedName: string, killTipType: KillTipType): void {
        if (killTipType == KillTipType.None) return;
        this.clearKillTipsTimeOutId2();
        if (killTipType == KillTipType.Killed) {
            this.mKillTipTextBlock3.text = "你已被 " + killerName + " 击败";
        } else if (killTipType == KillTipType.revenge) {
            this.mKillTipTextBlock3.text = "击败 " + killedName + " 完成复仇";
        }
        Utils.setWidgetVisibility(this.mKillTipTextBlock3, mw.SlateVisibility.SelfHitTestInvisible);
        this.killTipsTimeOutId2 = setTimeout(() => {
            Utils.setWidgetVisibility(this.mKillTipTextBlock3, mw.SlateVisibility.Collapsed);
            this.clearKillTipsTimeOutId2();
        }, 3 * 1000);
    }

    private clearKillTipsTimeOutId2(): void {
        if (this.killTipsTimeOutId2) {
            clearTimeout(this.killTipsTimeOutId2);
            this.killTipsTimeOutId2 = null;
        }
    }
    //#endregion

    //#region Player-ICON-HP-Rank
    public updateHpUI(hp: number): void {
        if (hp < 0) hp = 0;
        this.mHpProgressBar.currentValue = hp;
        this.mHpTextBlock.text = hp + "";
    }

    public updateProgressBarMaxHp(maxHp: number): void {
        this.mHpProgressBar.sliderMaxValue = maxHp;
    }

    public updateRankUIText(isRedTeam: boolean, rank: number): void {
        let teamStr: string = "潜伏者：第";
        let rankTextBlockColor: mw.LinearColor = mw.LinearColor.red;
        if (!isRedTeam) {
            teamStr = "保卫者：第";
            rankTextBlockColor = mw.LinearColor.blue;
        }
        this.mRankTextBlock.text = teamStr + rank + "名";
        this.mRankTextBlock.fontColor = rankTextBlockColor;
    }
    //#endregion

    //#region DeadCountDown
    private initDeadCountDown(): void {
        Utils.setWidgetVisibility(this.mDeadCanvas, mw.SlateVisibility.Collapsed);
    }

    private deadCountDownInterval: any = null;
    private deadCountDown: number = 3;
    public startDeadCountDown(): void {
        this.mVirtualJoystickPanel.resetJoyStick();
        this.getHUDModuleC.onNormalAction.call(false);
        this.mNormalAtkButton.enable = false;
        Utils.setWidgetVisibility(this.mDeadCanvas, mw.SlateVisibility.SelfHitTestInvisible);
        this.deadCountDown = 3;
        this.mDeadCountDownTextBlock.text = this.deadCountDown-- + "";
        this.clearCountDownInterval();
        this.deadCountDownInterval = TimeUtil.setInterval(() => {
            this.mDeadCountDownTextBlock.text = this.deadCountDown-- + "";
            if (this.deadCountDown < 0) this.clearCountDownInterval();
        }, 1);
    }

    private clearCountDownInterval(): void {
        if (this.deadCountDownInterval) {
            TimeUtil.clearInterval(this.deadCountDownInterval);
            this.deadCountDownInterval = null;
        }
    }

    public endDeadCountDown(): void {
        Utils.setWidgetVisibility(this.mDeadCanvas, mw.SlateVisibility.Collapsed);
        this.clearCountDownInterval();
        this.showInvincibleTimeUI(2);
        this.mNormalAtkButton.enable = true;
    }
    //#endregion

    //#region 无敌倒计时
    public showInvincibleTimeUI(invincibleTime: number): void {
        new mw.Tween({ x: 0 })
            .to({ x: 1 }, invincibleTime * 1000)
            .onStart(() => {
                Utils.setWidgetVisibility(this.mInvincibleCanvas, mw.SlateVisibility.SelfHitTestInvisible);
                this.mInvincibleProgressBar.currentValue = 0;
                this.startFlickerText();
            })
            .onUpdate((v) => {
                this.mInvincibleProgressBar.currentValue = v.x;
            })
            .onComplete(() => {
                Utils.setWidgetVisibility(this.mInvincibleCanvas, mw.SlateVisibility.Collapsed);
                this.stopFlickerText();
                // this.getCoinModuleC.dieAds();
            })
            .start();
    }

    private flickerTextTween1: Tween<any> = null;
    private flickerTextTween2: Tween<any> = null;
    private initFlickerInvincibleText(): void {
        Utils.setWidgetVisibility(this.mInvincibleCanvas, mw.SlateVisibility.Collapsed);
        this.flickerTextTween1 = new mw.Tween({ x: 1 })
            .to({ x: 0 }, 0.4 * 1000)
            .onStart(() => {
                this.mInvincibleTextBlock.renderOpacity = 1;
            })
            .onUpdate((v) => {
                this.mInvincibleTextBlock.renderOpacity = v.x;
            })
            .onComplete(() => {
                this.flickerTextTween2.start();
            });
        this.flickerTextTween2 = new mw.Tween({ x: 0 })
            .to({ x: 1 }, 0.4 * 1000)
            .onStart(() => {
                this.mInvincibleTextBlock.renderOpacity = 0;
            })
            .onUpdate((v) => {
                this.mInvincibleTextBlock.renderOpacity = v.x;
            })
            .onComplete(() => {
                this.flickerTextTween1.start();
            });
    }
    private startFlickerText(): void {
        if (this.flickerTextTween1) this.flickerTextTween1.start();
    }
    private stopFlickerText(): void {
        if (this.flickerTextTween1) this.flickerTextTween1.stop();
        if (this.flickerTextTween2) this.flickerTextTween2.stop();
    }
    //#endregion

    //#region Set
    public initSetData(fireScale: number, controlScale: number, bgmVolume: number, soundVolume: number): void {
        this.mFireProgressBar.currentValue = fireScale;
        this.mControlProgressBar.currentValue = controlScale;
        this.mBgmProgressBar.currentValue = bgmVolume;
        this.mSoundProgressBar.currentValue = soundVolume;

        this.mTouchPad.inputScale = new mw.Vector2(controlScale, controlScale);
        // Utils.setWidgetVisibility(this.mSetCanvas, mw.SlateVisibility.Collapsed);
        this.initSetTween();
        this.startSetTween();
    }

    private bindSetButton(): void {
        this.mSetButton.onClicked.add(() => {
            Utils.openUITween(
                this.mSetCanvas,
                () => {
                    Utils.setWidgetVisibility(this.mSetCanvas, mw.SlateVisibility.SelfHitTestInvisible);
                },
                null
            );
        });
        this.mSetCloseButton.onClicked.add(() => {
            Utils.closeUITween(
                this.mSetCanvas,
                () => {
                    this.getHUDModuleC.saveSetData();
                },
                () => {
                    Utils.setWidgetVisibility(this.mSetCanvas, mw.SlateVisibility.Collapsed);
                }
            );
        });

        this.mFireProgressBar.onSliderValueChanged.add((value: number) => {
            this.getHUDModuleC.onFireScaleAction.call(value);
        });

        this.mControlProgressBar.onSliderValueChanged.add((value: number) => {
            this.getHUDModuleC.onControlScaleAction.call(value);
            this.mTouchPad.inputScale = new mw.Vector2(value, value);
        });

        this.mBgmProgressBar.onSliderValueChanged.add((value: number) => {
            this.getHUDModuleC.onBgmVolumeAction.call(value);
        });

        this.mSoundProgressBar.onSliderValueChanged.add((value: number) => {
            this.getHUDModuleC.onSoundVolumeAction.call(value);
        });
    }
    private setRotateTween1: mw.Tween<any> = null;
    private setRotateTween2: mw.Tween<any> = null;
    // private setScaleTween1: mw.Tween<any> = null;
    // private setScaleTween2: mw.Tween<any> = null;
    private startSetTween(): void {
        if (!this.setRotateTween1 || !this.setRotateTween1 /*|| !this.setScaleTween1 || !this.setScaleTween2*/) this.initSetTween();
        if (this.setRotateTween1) this.setRotateTween1.start();
        // if (this.setScaleTween1) this.setScaleTween1.start();
    }
    private stopSetTween(): void {
        if (this.setRotateTween1) this.setRotateTween1.stop();
        if (this.setRotateTween2) this.setRotateTween2.stop();
        // if (this.setScaleTween1) this.setScaleTween1.stop();
        // if (this.setScaleTween2) this.setScaleTween2.stop();
    }
    private initSetTween(): void {
        this.setRotateTween1 = new mw.Tween({ angle: 0 })
            .to({ angle: 360 }, 2 * 1000)
            .onStart(() => {
                this.mSetButton.renderTransformAngle = 0;
            })
            .onUpdate((v) => {
                this.mSetButton.renderTransformAngle = v.angle;
            })
            .onComplete(() => {
                if (this.setRotateTween2) this.setRotateTween2.start();
            });
        this.setRotateTween2 = new mw.Tween({ angle: 0 })
            .to({ angle: 360 }, 2 * 1000)
            .onStart(() => {
                this.mSetButton.renderTransformAngle = 0;
            })
            .onUpdate((v) => {
                this.mSetButton.renderTransformAngle = v.angle;
            })
            .onComplete(() => {
                if (this.setRotateTween1) this.setRotateTween1.start();
            });
        // this.setScaleTween1 = new mw.Tween({ value: 0.8 })
        //     .to({ value: 1.2 }, 0.5 * 1000)
        //     .onStart(() => {
        //         this.mSetButton.renderScale = mw.Vector2.one.multiply(0.8);
        //     })
        //     .onUpdate((v) => {
        //         this.mSetButton.renderScale = mw.Vector2.one.multiply(v.value);
        //     })
        //     .onComplete(() => {
        //         if (this.setScaleTween2) this.setScaleTween2.start();
        //     })
        //     .easing(cubicBezier(0.25, 0.1, 0.25, 1));

        // this.setScaleTween2 = new mw.Tween({ value: 1.2 })
        //     .to({ value: 0.8 }, 0.5 * 1000)
        //     .onStart(() => {
        //         this.mSetButton.renderScale = mw.Vector2.one.multiply(1.2);
        //     })
        //     .onUpdate((v) => {
        //         this.mSetButton.renderScale = mw.Vector2.one.multiply(v.value);
        //     })
        //     .onComplete(() => {
        //         if (this.setScaleTween1) this.setScaleTween1.start();
        //     })
        //     .easing(cubicBezier(0.25, 0.1, 0.25, 1));
    }
    //#endregion

    //#region Tween
    private initUITweens(): void {
        this.initRankButtonTweens();
        this.initTaskTween();
        this.initTeamTweens();
        this.initShakeActivityTween();
        this.initShakeShopTween();
        this.initMorphButtonTween();
    }
    //#region RankTween
    private initRankButtonTweens(): void {
        let rankButtonTween1 = this.getScaleTween(this.mRankButton, 0.4, 0.8, 0.8, 1.2, 1.2);
        let rankButtonsTween2 = this.getScaleTween(this.mRankButton, 0.4, 1.2, 1.2, 0.8, 0.8);

        rankButtonTween1.start().onComplete(() => {
            rankButtonsTween2.start().onComplete(() => {
                rankButtonTween1.start();
            });
        });
    }
    //#endregion

    //#region TaskTween
    private taskRedPointTween1: mw.Tween<any> = null;
    private taskRedPointTween2: mw.Tween<any> = null;
    public startTaskRedPointTween(): void {
        if (!this.taskRedPointTween1 || !this.taskRedPointTween2) this.initTaskRedPointTweens();
        this.taskRedPointTween1.start();
        Utils.setWidgetVisibility(this.mTaskPointImage, mw.SlateVisibility.SelfHitTestInvisible);
    }
    public stopTaskRedPointTween(): void {
        if (this.taskRedPointTween1) this.taskRedPointTween1.stop();
        if (this.taskRedPointTween2) this.taskRedPointTween2.stop();
        Utils.setWidgetVisibility(this.mTaskPointImage, mw.SlateVisibility.Collapsed);
    }
    private initTaskRedPointTweens(): void {
        Utils.setWidgetVisibility(this.mTaskPointImage, mw.SlateVisibility.Collapsed);
        this.taskRedPointTween1 = new mw.Tween({ value: 0.8 })
            .to({ value: 1.2 }, 0.2 * 1000)
            .onStart(() => {
                this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(0.8);
            })
            .onUpdate((v) => {
                this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(v.value);
            })
            .onComplete(() => {
                if (this.taskRedPointTween2) this.taskRedPointTween2.start();
            })
            .easing(cubicBezier(0.25, 0.1, 0.25, 1));

        this.taskRedPointTween2 = new mw.Tween({ value: 1.2 })
            .to({ value: 0.8 }, 0.2 * 1000)
            .onStart(() => {
                this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(1.2);
            })
            .onUpdate((v) => {
                this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(v.value);
            })
            .onComplete(() => {
                if (this.taskRedPointTween1) this.taskRedPointTween1.start();
            })
            .easing(cubicBezier(0.25, 0.1, 0.25, 1));
    }
    private initTaskTween(): void {
        let leftToRight = this.getPosTween(this.mTaskBgImage, 0.5, 0, 25, 50, 25);
        let rightToLeft = this.getPosTween(this.mTaskBgImage, 0.5, 50, 25, 0, 25);
        leftToRight.start().onComplete(() => {
            TimeUtil.delaySecond(0.1).then(() => {
                rightToLeft.start().onComplete(() => {
                    TimeUtil.delaySecond(0.1).then(() => {
                        leftToRight.start();
                    });
                });
            });
        });
        this.initTaskRedPointTweens();
    }
    //#endregion

    //#region TeamTween
    private initTeamTweens(): void {
        let teamBgTween1 = this.getRenderOpacityTween(this.mTeamBgImage, 0.75, 1, 0);
        let teamBgTween2 = this.getRenderOpacityTween(this.mTeamBgImage, 0.75, 0, 1);
        teamBgTween1.start().onComplete(() => {
            TimeUtil.delaySecond(0.2).then(() => {
                teamBgTween2.start().onComplete(() => {
                    TimeUtil.delaySecond(0.2).then(() => {
                        teamBgTween1.start();
                    });
                });
            });
        });
        let teamIconTween1 = this.getScaleTween(this.mTeamIconImage, 0.75, 1, 1, 0, 1);
        let teamIconTween2 = this.getScaleTween(this.mTeamIconImage, 0.75, 0, 1, 1, 1);
        TimeUtil.delaySecond(0.75).then(() => {
            teamIconTween1.start().onComplete(() => {
                TimeUtil.delaySecond(0.2).then(() => {
                    teamIconTween2.start().onComplete(() => {
                        TimeUtil.delaySecond(0.2).then(() => {
                            teamIconTween1.start();
                        });
                    });
                });
            });
        });
    }
    //#endregion

    //#region ShopTween
    public initShakeShopTween(): void {
        let rightBigToLeftSmall = this.getShakeScaleTween(this.mShopButton, 0.8, 20, -20, 1.1, 0.9);
        let leftSamllToRightBig = this.getShakeScaleTween(this.mShopButton, 0.8, -20, 20, 0.9, 1.1);

        rightBigToLeftSmall.start().onComplete(() => {
            TimeUtil.delaySecond(0.1).then(() => {
                leftSamllToRightBig.start().onComplete(() => {
                    TimeUtil.delaySecond(0.1).then(() => {
                        rightBigToLeftSmall.start();
                    });
                });
            })
        });
    }
    //#endregion

    //#region ActivityTween
    private activityRedPointTween1: mw.Tween<any> = null;
    private activityRedPointTween2: mw.Tween<any> = null;
    public startActivityRedPointTween(): void {
        if (!this.activityRedPointTween1 || !this.activityRedPointTween2) this.initActivityRedPointTweens();
        this.activityRedPointTween1.start();
        Utils.setWidgetVisibility(this.mActivityPointImage, mw.SlateVisibility.SelfHitTestInvisible);
    }
    public stopActivityRedPointTween(): void {
        if (this.activityRedPointTween1) this.activityRedPointTween1.stop();
        if (this.activityRedPointTween2) this.activityRedPointTween2.stop();
        Utils.setWidgetVisibility(this.mActivityPointImage, mw.SlateVisibility.Collapsed);
    }
    private initActivityRedPointTweens(): void {
        Utils.setWidgetVisibility(this.mActivityPointImage, mw.SlateVisibility.Collapsed);
        this.activityRedPointTween1 = new mw.Tween({ value: 0.8 })
            .to({ value: 1.2 }, 0.2 * 1000)
            .onStart(() => {
                this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(0.8);
            })
            .onUpdate((v) => {
                this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(v.value);
            })
            .onComplete(() => {
                if (this.activityRedPointTween2) this.activityRedPointTween2.start();
            })
            .easing(cubicBezier(0.25, 0.1, 0.25, 1));

        this.activityRedPointTween2 = new mw.Tween({ value: 1.2 })
            .to({ value: 0.8 }, 0.2 * 1000)
            .onStart(() => {
                this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(1.2);
            })
            .onUpdate((v) => {
                this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(v.value);
            })
            .onComplete(() => {
                if (this.activityRedPointTween1) this.activityRedPointTween1.start();
            })
            .easing(cubicBezier(0.25, 0.1, 0.25, 1));
    }
    public initShakeActivityTween(): void {
        let middleToRight = this.getShakeTween(this.mActivityButton, 0.05, 0, 15);
        let rightToLeft = this.getShakeTween(this.mActivityButton, 0.1, 15, -15);
        let leftToRight = this.getShakeTween(this.mActivityButton, 0.1, -15, 15);
        let rightToMiddle = this.getShakeTween(this.mActivityButton, 0.05, 15, 0);

        middleToRight.start().onComplete(() => {
            rightToLeft.start().onComplete(() => {
                leftToRight.start().onComplete(() => {
                    rightToMiddle.start().onComplete(() => {
                        TimeUtil.delaySecond(1).then(() => {
                            middleToRight.start();
                        });
                    });
                });
            });
        });
        this.initActivityRedPointTweens();
    }
    //#endregion

    //#region MorphButton
    private initMorphButtonTween(): void {
        let rotate1 = this.getShakeTween(this.mMorphButton, 1, 0, 360);
        let rotate2 = this.getShakeTween(this.mMorphButton, 1, 0, 360);
        rotate1.start().onComplete(() => {
            rotate2.start().onComplete(() => {
                rotate1.start();
            });
        });
    }
    //#endregion
    private getShakeTween(widget: Widget, angleTime: number, startAngle: number, endAngle: number): mw.Tween<any> {
        return new Tween({ angle: startAngle })
            .to({ angle: endAngle }, angleTime * 1000)
            .onUpdate((v) => {
                widget.renderTransformAngle = v.angle;
            })
            .easing(cubicBezier(.22, .9, .28, .92));
    }
    private getScaleTween(widget: Widget, scaleTime: number, startScaleX: number, startScaleY: number, endScaleX: number, endScaleY: number): mw.Tween<any> {
        return new Tween({ scaleX: startScaleX, scaleY: startScaleY })
            .to({ scaleX: endScaleX, scaleY: endScaleY }, scaleTime * 1000)
            .onUpdate((v) => {
                widget.renderScale = new mw.Vector2(v.scaleX, v.scaleY);
            })
            .easing(cubicBezier(.22, .9, .28, .92));
    }
    private getShakeScaleTween(widget: Widget, shakeScaleTime: number, startAngle: number, endAngle: number, startScale: number, endScale: number): mw.Tween<any> {
        return new Tween({ angle: startAngle, scale: startScale })
            .to({ angle: endAngle, scale: endScale }, shakeScaleTime * 1000)
            .onUpdate((v) => {
                widget.renderTransformAngle = v.angle;
                widget.renderScale = new mw.Vector2(v.scale, v.scale);
            })
            .easing(cubicBezier(.22, .9, .28, .92));
    }
    private getRenderOpacityTween(widget: mw.Widget, time: number, startOpacity: number, endOpacity: number): mw.Tween<any> {
        return new Tween({ opacity: startOpacity })
            .to({ opacity: endOpacity }, time * 1000)
            .onUpdate((v) => {
                widget.renderOpacity = v.opacity;
            })
            .easing(cubicBezier(.22, .9, .28, .92));
    }
    private getPosTween(widget: Widget, posTime: number, startPosX: number, startPosY: number, endPosX: number, endPosY: number): mw.Tween<any> {
        return new Tween({ posX: startPosX, posY: startPosY })
            .to({ posX: endPosX, posY: endPosY }, posTime * 1000)
            .onUpdate((v) => {
                widget.position = new mw.Vector2(v.posX, v.posY);
            })
            .easing(cubicBezier(.22, .9, .28, .92));
    }
    //#endregion

    //#region Normal Attack Button
    private bindAtkButton(): void {
        this.mNormalAtkButton.onJoyStickDown.add(() => {
            this.getHUDModuleC.onNormalAction.call(true);
        });
        this.mNormalAtkButton.onJoyStickUp.add(() => {
            this.getHUDModuleC.onNormalAction.call(false);
        });
        this.mFireJumpButton.onClicked.add(this.onClickJumpButton.bind(this));
        this.mReloadButton.onClicked.add(this.onClickReloadButton.bind(this));
        this.mCrouchButton.onClicked.add(this.onClickCrouchButton.bind(this));
    }

    private onClickReloadButton(): void {
        this.getHUDModuleC.onReloadAction.call();
    }

    private onClickCrouchButton(): void {
        this.getHUDModuleC.onCrouchAction.call();
    }
    //#endregion

    //#region Aim
    private leftAimTween1: mw.Tween<any> = null;
    private rightAimTween1: mw.Tween<any> = null;
    private upAimTween1: mw.Tween<any> = null;
    private downAimTween1: mw.Tween<any> = null;
    private leftAimTween2: mw.Tween<any> = null;
    private rightAimTween2: mw.Tween<any> = null;
    private upAimTween2: mw.Tween<any> = null;
    private downAimTween2: mw.Tween<any> = null;

    private fromAimLeftPos: mw.Vector2 = mw.Vector2.zero;
    private fromAimRightPos: mw.Vector2 = mw.Vector2.zero;
    private fromAimUpPos: mw.Vector2 = mw.Vector2.zero;
    private fromAimDownPos: mw.Vector2 = mw.Vector2.zero;
    private toAimLeftPos: mw.Vector2 = mw.Vector2.zero;
    private toAimRightPos: mw.Vector2 = mw.Vector2.zero;
    private toAimUpPos: mw.Vector2 = mw.Vector2.zero;
    private toAimDownPos: mw.Vector2 = mw.Vector2.zero;

    private aimOffsetValue: number = 10;
    private initAimUI(): void {
        this.updateAimPosition();
        this.initAimUIPosition();
        this.updateAimPosition();
        this.initToAimUIPosition();
        this.initAimUITween();
    }

    private updateAimPosition(): void {
        this.fromAimLeftPos = this.mAimLeft.position;
        this.fromAimRightPos = this.mAimRight.position;
        this.fromAimUpPos = this.mAimUp.position;
        this.fromAimDownPos = this.mAimDown.position;
    }

    private initAimUIPosition(): void {
        this.mAimLeft.position = new mw.Vector2(this.fromAimLeftPos.x - this.aimOffsetValue, this.fromAimLeftPos.y);
        this.mAimRight.position = new mw.Vector2(this.fromAimRightPos.x + this.aimOffsetValue, this.fromAimRightPos.y);
        this.mAimUp.position = new mw.Vector2(this.fromAimUpPos.x, this.fromAimUpPos.y - this.aimOffsetValue);
        this.mAimDown.position = new mw.Vector2(this.fromAimDownPos.x, this.fromAimDownPos.y + this.aimOffsetValue);
    }

    private initToAimUIPosition(): void {
        this.toAimLeftPos = new mw.Vector2(this.fromAimLeftPos.x - (this.aimOffsetValue * 3), this.fromAimLeftPos.y);
        this.toAimRightPos = new mw.Vector2(this.fromAimRightPos.x + (this.aimOffsetValue * 3), this.fromAimRightPos.y);
        this.toAimUpPos = new mw.Vector2(this.fromAimUpPos.x, this.fromAimUpPos.y - (this.aimOffsetValue * 3));
        this.toAimDownPos = new mw.Vector2(this.fromAimDownPos.x, this.fromAimDownPos.y + (this.aimOffsetValue * 3));
    }

    private expansionTime: number = 0.1;
    private initAimUITween(): void {
        this.leftAimTween2 = this.expansionTween(this.mAimLeft, this.toAimLeftPos, this.fromAimLeftPos, this.expansionTime).easing(cubicBezier(.19, .66, .27, .72));
        this.rightAimTween2 = this.expansionTween(this.mAimRight, this.toAimRightPos, this.fromAimRightPos, this.expansionTime).easing(cubicBezier(.19, .66, .27, .72));
        this.upAimTween2 = this.expansionTween(this.mAimUp, this.toAimUpPos, this.fromAimUpPos, this.expansionTime).easing(cubicBezier(.19, .66, .27, .72));
        this.downAimTween2 = this.expansionTween(this.mAimDown, this.toAimDownPos, this.fromAimDownPos, this.expansionTime).easing(cubicBezier(.19, .66, .27, .72));
    }

    public startAimUITween(): void {
        this.stopAimUITween();
        let lerpTime = Math.abs(this.mAimLeft.position.x - this.toAimLeftPos.x) / (this.aimOffsetValue * 3) * this.expansionTime;
        this.leftAimTween1 = this.expansionTween(this.mAimLeft, new mw.Vector2(this.mAimLeft.position.x, this.mAimLeft.position.y), this.toAimLeftPos, lerpTime)
            .easing(cubicBezier(.13, .68, .8, .25))
            .start()
            .onComplete(() => {
                this.leftAimTween2.start();
            });
        this.rightAimTween1 = this.expansionTween(this.mAimRight, new mw.Vector2(this.mAimRight.position.x, this.mAimRight.position.y), this.toAimRightPos, lerpTime)
            .easing(cubicBezier(.13, .68, .8, .25))
            .start()
            .onComplete(() => {
                this.rightAimTween2.start();
            });
        this.upAimTween1 = this.expansionTween(this.mAimUp, new mw.Vector2(this.mAimUp.position.x, this.mAimUp.position.y), this.toAimUpPos, lerpTime)
            .easing(cubicBezier(.13, .68, .8, .25))
            .start()
            .onComplete(() => {
                this.upAimTween2.start();
            });
        this.downAimTween1 = this.expansionTween(this.mAimDown, new mw.Vector2(this.mAimDown.position.x, this.mAimDown.position.y), this.toAimDownPos, lerpTime)
            .easing(cubicBezier(.13, .68, .8, .25))
            .start()
            .onComplete(() => {
                this.downAimTween2.start();
            });
    }

    private stopAimUITween(): void {
        if (this.leftAimTween1) this.leftAimTween1.stop();
        if (this.leftAimTween2) this.leftAimTween2.stop();
        if (this.rightAimTween1) this.rightAimTween1.stop();
        if (this.rightAimTween2) this.rightAimTween2.stop();
        if (this.upAimTween1) this.upAimTween1.stop();
        if (this.upAimTween2) this.upAimTween2.stop();
        if (this.downAimTween1) this.downAimTween1.stop();
        if (this.downAimTween2) this.downAimTween2.stop();
    }

    private expansionTween(ui: mw.Image, fromXY: mw.Vector2, toXY: mw.Vector2, time: number): mw.Tween<any> {
        return new Tween({ x: fromXY.x, y: fromXY.y })
            .to({ x: toXY.x, y: toXY.y }, time * 1000)
            .onUpdate((v) => {
                ui.position = new mw.Vector2(v.x, v.y);
            });
    }
    //#endregion

    //#region Gun
    public updateGunPropUI(gunIcon: string, gunBulletCount: number, gunName: string): void {
        Utils.setImageByAssetIconData(this.mGunIconImage, gunIcon);
        this.mGunBulletCountTextBlock.text = gunBulletCount.toString();
        this.mGunNameTextBlock.text = gunName;
    }

    public updateBulletCountUI(bulletCount: number): void {
        this.mGunBulletCountTextBlock.text = bulletCount.toString();
    }
    //#endregion
}