﻿/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/HUDModule/HUDPanel.ui
 * TIME: 2025.01.02-22.17.23
 */
 
@UIBind('UI/module/HUDModule/HUDPanel.ui')
export default class HUDPanel_Generate extends UIScript {
		private mVirtualJoystickPanel_Internal: mw.VirtualJoystickPanel
	public get mVirtualJoystickPanel(): mw.VirtualJoystickPanel {
		if(!this.mVirtualJoystickPanel_Internal&&this.uiWidgetBase) {
			this.mVirtualJoystickPanel_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mVirtualJoystickPanel') as mw.VirtualJoystickPanel
		}
		return this.mVirtualJoystickPanel_Internal
	}
	private mTouchPad_Internal: mw.TouchPad
	public get mTouchPad(): mw.TouchPad {
		if(!this.mTouchPad_Internal&&this.uiWidgetBase) {
			this.mTouchPad_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mTouchPad') as mw.TouchPad
		}
		return this.mTouchPad_Internal
	}
	private mRedVsTextBlock_Internal: mw.TextBlock
	public get mRedVsTextBlock(): mw.TextBlock {
		if(!this.mRedVsTextBlock_Internal&&this.uiWidgetBase) {
			this.mRedVsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/VsCanvas/RedVsCanvas/mRedVsTextBlock') as mw.TextBlock
		}
		return this.mRedVsTextBlock_Internal
	}
	private mRedCountTextBlock_Internal: mw.TextBlock
	public get mRedCountTextBlock(): mw.TextBlock {
		if(!this.mRedCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mRedCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/VsCanvas/RedVsCanvas/mRedCountTextBlock') as mw.TextBlock
		}
		return this.mRedCountTextBlock_Internal
	}
	private mBlueVsTextBlock_Internal: mw.TextBlock
	public get mBlueVsTextBlock(): mw.TextBlock {
		if(!this.mBlueVsTextBlock_Internal&&this.uiWidgetBase) {
			this.mBlueVsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/VsCanvas/BlueVsCanvas/mBlueVsTextBlock') as mw.TextBlock
		}
		return this.mBlueVsTextBlock_Internal
	}
	private mBlueCountTextBlock_Internal: mw.TextBlock
	public get mBlueCountTextBlock(): mw.TextBlock {
		if(!this.mBlueCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mBlueCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/VsCanvas/BlueVsCanvas/mBlueCountTextBlock') as mw.TextBlock
		}
		return this.mBlueCountTextBlock_Internal
	}
	private mSetButton_Internal: mw.Button
	public get mSetButton(): mw.Button {
		if(!this.mSetButton_Internal&&this.uiWidgetBase) {
			this.mSetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/SetCanvas/mSetButton') as mw.Button
		}
		return this.mSetButton_Internal
	}
	private mRankButton_Internal: mw.Button
	public get mRankButton(): mw.Button {
		if(!this.mRankButton_Internal&&this.uiWidgetBase) {
			this.mRankButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/RankCanvas/mRankButton') as mw.Button
		}
		return this.mRankButton_Internal
	}
	private mTaskButton_Internal: mw.Button
	public get mTaskButton(): mw.Button {
		if(!this.mTaskButton_Internal&&this.uiWidgetBase) {
			this.mTaskButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/TaskCanvas/mTaskButton') as mw.Button
		}
		return this.mTaskButton_Internal
	}
	private mTaskPointImage_Internal: mw.Image
	public get mTaskPointImage(): mw.Image {
		if(!this.mTaskPointImage_Internal&&this.uiWidgetBase) {
			this.mTaskPointImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/TaskCanvas/mTaskPointImage') as mw.Image
		}
		return this.mTaskPointImage_Internal
	}
	private mTaskBgImage_Internal: mw.Image
	public get mTaskBgImage(): mw.Image {
		if(!this.mTaskBgImage_Internal&&this.uiWidgetBase) {
			this.mTaskBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/TaskCanvas/mTaskBgImage') as mw.Image
		}
		return this.mTaskBgImage_Internal
	}
	private mTeamButton_Internal: mw.Button
	public get mTeamButton(): mw.Button {
		if(!this.mTeamButton_Internal&&this.uiWidgetBase) {
			this.mTeamButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/TeamCanvas/mTeamButton') as mw.Button
		}
		return this.mTeamButton_Internal
	}
	private mTeamBgImage_Internal: mw.Image
	public get mTeamBgImage(): mw.Image {
		if(!this.mTeamBgImage_Internal&&this.uiWidgetBase) {
			this.mTeamBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/TeamCanvas/mTeamBgImage') as mw.Image
		}
		return this.mTeamBgImage_Internal
	}
	private mTeamIconImage_Internal: mw.Image
	public get mTeamIconImage(): mw.Image {
		if(!this.mTeamIconImage_Internal&&this.uiWidgetBase) {
			this.mTeamIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/TeamCanvas/mTeamIconImage') as mw.Image
		}
		return this.mTeamIconImage_Internal
	}
	private mShopButton_Internal: mw.Button
	public get mShopButton(): mw.Button {
		if(!this.mShopButton_Internal&&this.uiWidgetBase) {
			this.mShopButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/ShopCanvas/mShopButton') as mw.Button
		}
		return this.mShopButton_Internal
	}
	private mRoleButton_Internal: mw.Button
	public get mRoleButton(): mw.Button {
		if(!this.mRoleButton_Internal&&this.uiWidgetBase) {
			this.mRoleButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/RoleCanvas/mRoleButton') as mw.Button
		}
		return this.mRoleButton_Internal
	}
	private mOpenShareImage_Internal: mw.Image
	public get mOpenShareImage(): mw.Image {
		if(!this.mOpenShareImage_Internal&&this.uiWidgetBase) {
			this.mOpenShareImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/mOpenShareImage') as mw.Image
		}
		return this.mOpenShareImage_Internal
	}
	private mOpenShareButton_Internal: mw.StaleButton
	public get mOpenShareButton(): mw.StaleButton {
		if(!this.mOpenShareButton_Internal&&this.uiWidgetBase) {
			this.mOpenShareButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas/mOpenShareImage/mOpenShareButton') as mw.StaleButton
		}
		return this.mOpenShareButton_Internal
	}
	private mActivityButton_Internal: mw.Button
	public get mActivityButton(): mw.Button {
		if(!this.mActivityButton_Internal&&this.uiWidgetBase) {
			this.mActivityButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LeftButtonCanvas/ActivityCanvas/mActivityButton') as mw.Button
		}
		return this.mActivityButton_Internal
	}
	private mActivityPointImage_Internal: mw.Image
	public get mActivityPointImage(): mw.Image {
		if(!this.mActivityPointImage_Internal&&this.uiWidgetBase) {
			this.mActivityPointImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LeftButtonCanvas/ActivityCanvas/mActivityPointImage') as mw.Image
		}
		return this.mActivityPointImage_Internal
	}
	private mIconmage_Internal: mw.Image
	public get mIconmage(): mw.Image {
		if(!this.mIconmage_Internal&&this.uiWidgetBase) {
			this.mIconmage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/PlayerIconCanvas/mIconmage') as mw.Image
		}
		return this.mIconmage_Internal
	}
	private mRankTextBlock_Internal: mw.TextBlock
	public get mRankTextBlock(): mw.TextBlock {
		if(!this.mRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/RankCanvas/mRankTextBlock') as mw.TextBlock
		}
		return this.mRankTextBlock_Internal
	}
	private mTipsHpTextBlock_Internal: mw.TextBlock
	public get mTipsHpTextBlock(): mw.TextBlock {
		if(!this.mTipsHpTextBlock_Internal&&this.uiWidgetBase) {
			this.mTipsHpTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/HpCanvas/mTipsHpTextBlock') as mw.TextBlock
		}
		return this.mTipsHpTextBlock_Internal
	}
	private mHpProgressBar_Internal: mw.ProgressBar
	public get mHpProgressBar(): mw.ProgressBar {
		if(!this.mHpProgressBar_Internal&&this.uiWidgetBase) {
			this.mHpProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/HpCanvas/mHpProgressBar') as mw.ProgressBar
		}
		return this.mHpProgressBar_Internal
	}
	private mHpTextBlock_Internal: mw.TextBlock
	public get mHpTextBlock(): mw.TextBlock {
		if(!this.mHpTextBlock_Internal&&this.uiWidgetBase) {
			this.mHpTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/HpCanvas/mHpTextBlock') as mw.TextBlock
		}
		return this.mHpTextBlock_Internal
	}
	private mKillTipCountCanvas_Internal: mw.Canvas
	public get mKillTipCountCanvas(): mw.Canvas {
		if(!this.mKillTipCountCanvas_Internal&&this.uiWidgetBase) {
			this.mKillTipCountCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipCountCanvas') as mw.Canvas
		}
		return this.mKillTipCountCanvas_Internal
	}
	private mKillTipTextBlock1_Internal: mw.TextBlock
	public get mKillTipTextBlock1(): mw.TextBlock {
		if(!this.mKillTipTextBlock1_Internal&&this.uiWidgetBase) {
			this.mKillTipTextBlock1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipCountCanvas/mKillTipTextBlock1') as mw.TextBlock
		}
		return this.mKillTipTextBlock1_Internal
	}
	private mKillTipTextBlock2_Internal: mw.TextBlock
	public get mKillTipTextBlock2(): mw.TextBlock {
		if(!this.mKillTipTextBlock2_Internal&&this.uiWidgetBase) {
			this.mKillTipTextBlock2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipCountCanvas/mKillTipTextBlock2') as mw.TextBlock
		}
		return this.mKillTipTextBlock2_Internal
	}
	private mKillTipTextBlock3_Internal: mw.TextBlock
	public get mKillTipTextBlock3(): mw.TextBlock {
		if(!this.mKillTipTextBlock3_Internal&&this.uiWidgetBase) {
			this.mKillTipTextBlock3_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipTextBlock3') as mw.TextBlock
		}
		return this.mKillTipTextBlock3_Internal
	}
	private mKillTipCanvas_Internal: mw.Canvas
	public get mKillTipCanvas(): mw.Canvas {
		if(!this.mKillTipCanvas_Internal&&this.uiWidgetBase) {
			this.mKillTipCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mKillTipCanvas') as mw.Canvas
		}
		return this.mKillTipCanvas_Internal
	}
	private mInvincibleCanvas_Internal: mw.Canvas
	public get mInvincibleCanvas(): mw.Canvas {
		if(!this.mInvincibleCanvas_Internal&&this.uiWidgetBase) {
			this.mInvincibleCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mInvincibleCanvas') as mw.Canvas
		}
		return this.mInvincibleCanvas_Internal
	}
	private mInvincibleProgressBar_Internal: mw.ProgressBar
	public get mInvincibleProgressBar(): mw.ProgressBar {
		if(!this.mInvincibleProgressBar_Internal&&this.uiWidgetBase) {
			this.mInvincibleProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mInvincibleCanvas/mInvincibleProgressBar') as mw.ProgressBar
		}
		return this.mInvincibleProgressBar_Internal
	}
	private mInvincibleTextBlock_Internal: mw.TextBlock
	public get mInvincibleTextBlock(): mw.TextBlock {
		if(!this.mInvincibleTextBlock_Internal&&this.uiWidgetBase) {
			this.mInvincibleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mInvincibleCanvas/mInvincibleTextBlock') as mw.TextBlock
		}
		return this.mInvincibleTextBlock_Internal
	}
	private mDeadCanvas_Internal: mw.Canvas
	public get mDeadCanvas(): mw.Canvas {
		if(!this.mDeadCanvas_Internal&&this.uiWidgetBase) {
			this.mDeadCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDeadCanvas') as mw.Canvas
		}
		return this.mDeadCanvas_Internal
	}
	private mDeadTextBlock_Internal: mw.TextBlock
	public get mDeadTextBlock(): mw.TextBlock {
		if(!this.mDeadTextBlock_Internal&&this.uiWidgetBase) {
			this.mDeadTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDeadCanvas/mDeadTextBlock') as mw.TextBlock
		}
		return this.mDeadTextBlock_Internal
	}
	private mDeadCountDownTextBlock_Internal: mw.TextBlock
	public get mDeadCountDownTextBlock(): mw.TextBlock {
		if(!this.mDeadCountDownTextBlock_Internal&&this.uiWidgetBase) {
			this.mDeadCountDownTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDeadCanvas/mDeadCountDownTextBlock') as mw.TextBlock
		}
		return this.mDeadCountDownTextBlock_Internal
	}
	private mDeadTipsTextBlock_Internal: mw.TextBlock
	public get mDeadTipsTextBlock(): mw.TextBlock {
		if(!this.mDeadTipsTextBlock_Internal&&this.uiWidgetBase) {
			this.mDeadTipsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDeadCanvas/mDeadTipsTextBlock') as mw.TextBlock
		}
		return this.mDeadTipsTextBlock_Internal
	}
	private mSetCanvas_Internal: mw.Canvas
	public get mSetCanvas(): mw.Canvas {
		if(!this.mSetCanvas_Internal&&this.uiWidgetBase) {
			this.mSetCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas') as mw.Canvas
		}
		return this.mSetCanvas_Internal
	}
	private mSetTextBlock_Internal: mw.TextBlock
	public get mSetTextBlock(): mw.TextBlock {
		if(!this.mSetTextBlock_Internal&&this.uiWidgetBase) {
			this.mSetTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/mSetTextBlock') as mw.TextBlock
		}
		return this.mSetTextBlock_Internal
	}
	private mFireCanvas_Internal: mw.Canvas
	public get mFireCanvas(): mw.Canvas {
		if(!this.mFireCanvas_Internal&&this.uiWidgetBase) {
			this.mFireCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas') as mw.Canvas
		}
		return this.mFireCanvas_Internal
	}
	private mFireTextBlock_Internal: mw.TextBlock
	public get mFireTextBlock(): mw.TextBlock {
		if(!this.mFireTextBlock_Internal&&this.uiWidgetBase) {
			this.mFireTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mFireTextBlock') as mw.TextBlock
		}
		return this.mFireTextBlock_Internal
	}
	private mFireProgressBar_Internal: mw.ProgressBar
	public get mFireProgressBar(): mw.ProgressBar {
		if(!this.mFireProgressBar_Internal&&this.uiWidgetBase) {
			this.mFireProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mFireProgressBar') as mw.ProgressBar
		}
		return this.mFireProgressBar_Internal
	}
	private mLowFireTextBlock_Internal: mw.TextBlock
	public get mLowFireTextBlock(): mw.TextBlock {
		if(!this.mLowFireTextBlock_Internal&&this.uiWidgetBase) {
			this.mLowFireTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mLowFireTextBlock') as mw.TextBlock
		}
		return this.mLowFireTextBlock_Internal
	}
	private mMiddleFireTextBlock_Internal: mw.TextBlock
	public get mMiddleFireTextBlock(): mw.TextBlock {
		if(!this.mMiddleFireTextBlock_Internal&&this.uiWidgetBase) {
			this.mMiddleFireTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mMiddleFireTextBlock') as mw.TextBlock
		}
		return this.mMiddleFireTextBlock_Internal
	}
	private mHighFireTextBlock_Internal: mw.TextBlock
	public get mHighFireTextBlock(): mw.TextBlock {
		if(!this.mHighFireTextBlock_Internal&&this.uiWidgetBase) {
			this.mHighFireTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mHighFireTextBlock') as mw.TextBlock
		}
		return this.mHighFireTextBlock_Internal
	}
	private mControlCanvas_Internal: mw.Canvas
	public get mControlCanvas(): mw.Canvas {
		if(!this.mControlCanvas_Internal&&this.uiWidgetBase) {
			this.mControlCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas') as mw.Canvas
		}
		return this.mControlCanvas_Internal
	}
	private mControlTextBlock_Internal: mw.TextBlock
	public get mControlTextBlock(): mw.TextBlock {
		if(!this.mControlTextBlock_Internal&&this.uiWidgetBase) {
			this.mControlTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mControlTextBlock') as mw.TextBlock
		}
		return this.mControlTextBlock_Internal
	}
	private mControlProgressBar_Internal: mw.ProgressBar
	public get mControlProgressBar(): mw.ProgressBar {
		if(!this.mControlProgressBar_Internal&&this.uiWidgetBase) {
			this.mControlProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mControlProgressBar') as mw.ProgressBar
		}
		return this.mControlProgressBar_Internal
	}
	private mLowControlTextBlock_Internal: mw.TextBlock
	public get mLowControlTextBlock(): mw.TextBlock {
		if(!this.mLowControlTextBlock_Internal&&this.uiWidgetBase) {
			this.mLowControlTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mLowControlTextBlock') as mw.TextBlock
		}
		return this.mLowControlTextBlock_Internal
	}
	private mMiddleControlTextBlock_Internal: mw.TextBlock
	public get mMiddleControlTextBlock(): mw.TextBlock {
		if(!this.mMiddleControlTextBlock_Internal&&this.uiWidgetBase) {
			this.mMiddleControlTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mMiddleControlTextBlock') as mw.TextBlock
		}
		return this.mMiddleControlTextBlock_Internal
	}
	private mHighControlTextBlock_Internal: mw.TextBlock
	public get mHighControlTextBlock(): mw.TextBlock {
		if(!this.mHighControlTextBlock_Internal&&this.uiWidgetBase) {
			this.mHighControlTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mHighControlTextBlock') as mw.TextBlock
		}
		return this.mHighControlTextBlock_Internal
	}
	private mBgmCanvas_Internal: mw.Canvas
	public get mBgmCanvas(): mw.Canvas {
		if(!this.mBgmCanvas_Internal&&this.uiWidgetBase) {
			this.mBgmCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas') as mw.Canvas
		}
		return this.mBgmCanvas_Internal
	}
	private mBgmTextBlock_Internal: mw.TextBlock
	public get mBgmTextBlock(): mw.TextBlock {
		if(!this.mBgmTextBlock_Internal&&this.uiWidgetBase) {
			this.mBgmTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mBgmTextBlock') as mw.TextBlock
		}
		return this.mBgmTextBlock_Internal
	}
	private mBgmProgressBar_Internal: mw.ProgressBar
	public get mBgmProgressBar(): mw.ProgressBar {
		if(!this.mBgmProgressBar_Internal&&this.uiWidgetBase) {
			this.mBgmProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mBgmProgressBar') as mw.ProgressBar
		}
		return this.mBgmProgressBar_Internal
	}
	private mLowBgmTextBlock_Internal: mw.TextBlock
	public get mLowBgmTextBlock(): mw.TextBlock {
		if(!this.mLowBgmTextBlock_Internal&&this.uiWidgetBase) {
			this.mLowBgmTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mLowBgmTextBlock') as mw.TextBlock
		}
		return this.mLowBgmTextBlock_Internal
	}
	private mMiddleBgmTextBlock_Internal: mw.TextBlock
	public get mMiddleBgmTextBlock(): mw.TextBlock {
		if(!this.mMiddleBgmTextBlock_Internal&&this.uiWidgetBase) {
			this.mMiddleBgmTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mMiddleBgmTextBlock') as mw.TextBlock
		}
		return this.mMiddleBgmTextBlock_Internal
	}
	private mHighBgmTextBlock_Internal: mw.TextBlock
	public get mHighBgmTextBlock(): mw.TextBlock {
		if(!this.mHighBgmTextBlock_Internal&&this.uiWidgetBase) {
			this.mHighBgmTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mHighBgmTextBlock') as mw.TextBlock
		}
		return this.mHighBgmTextBlock_Internal
	}
	private mSoundCanvas_Internal: mw.Canvas
	public get mSoundCanvas(): mw.Canvas {
		if(!this.mSoundCanvas_Internal&&this.uiWidgetBase) {
			this.mSoundCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas') as mw.Canvas
		}
		return this.mSoundCanvas_Internal
	}
	private mSoundTextBlock_Internal: mw.TextBlock
	public get mSoundTextBlock(): mw.TextBlock {
		if(!this.mSoundTextBlock_Internal&&this.uiWidgetBase) {
			this.mSoundTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mSoundTextBlock') as mw.TextBlock
		}
		return this.mSoundTextBlock_Internal
	}
	private mSoundProgressBar_Internal: mw.ProgressBar
	public get mSoundProgressBar(): mw.ProgressBar {
		if(!this.mSoundProgressBar_Internal&&this.uiWidgetBase) {
			this.mSoundProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mSoundProgressBar') as mw.ProgressBar
		}
		return this.mSoundProgressBar_Internal
	}
	private mLowSoundTextBlock_Internal: mw.TextBlock
	public get mLowSoundTextBlock(): mw.TextBlock {
		if(!this.mLowSoundTextBlock_Internal&&this.uiWidgetBase) {
			this.mLowSoundTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mLowSoundTextBlock') as mw.TextBlock
		}
		return this.mLowSoundTextBlock_Internal
	}
	private mMiddleSoundTextBlock_Internal: mw.TextBlock
	public get mMiddleSoundTextBlock(): mw.TextBlock {
		if(!this.mMiddleSoundTextBlock_Internal&&this.uiWidgetBase) {
			this.mMiddleSoundTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mMiddleSoundTextBlock') as mw.TextBlock
		}
		return this.mMiddleSoundTextBlock_Internal
	}
	private mHighSoundTextBlock_Internal: mw.TextBlock
	public get mHighSoundTextBlock(): mw.TextBlock {
		if(!this.mHighSoundTextBlock_Internal&&this.uiWidgetBase) {
			this.mHighSoundTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mHighSoundTextBlock') as mw.TextBlock
		}
		return this.mHighSoundTextBlock_Internal
	}
	private mSetCloseButton_Internal: mw.Button
	public get mSetCloseButton(): mw.Button {
		if(!this.mSetCloseButton_Internal&&this.uiWidgetBase) {
			this.mSetCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/mSetCloseButton') as mw.Button
		}
		return this.mSetCloseButton_Internal
	}
	private mResetPosButton_Internal: mw.Button
	public get mResetPosButton(): mw.Button {
		if(!this.mResetPosButton_Internal&&this.uiWidgetBase) {
			this.mResetPosButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/mResetPosButton') as mw.Button
		}
		return this.mResetPosButton_Internal
	}
	private mResetTextBlock_Internal: mw.TextBlock
	public get mResetTextBlock(): mw.TextBlock {
		if(!this.mResetTextBlock_Internal&&this.uiWidgetBase) {
			this.mResetTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/mResetPosButton/mResetTextBlock') as mw.TextBlock
		}
		return this.mResetTextBlock_Internal
	}
	private mAimCanvas_Internal: mw.Canvas
	public get mAimCanvas(): mw.Canvas {
		if(!this.mAimCanvas_Internal&&this.uiWidgetBase) {
			this.mAimCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas') as mw.Canvas
		}
		return this.mAimCanvas_Internal
	}
	private mAimPoint_Internal: mw.Image
	public get mAimPoint(): mw.Image {
		if(!this.mAimPoint_Internal&&this.uiWidgetBase) {
			this.mAimPoint_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas/mAimPoint') as mw.Image
		}
		return this.mAimPoint_Internal
	}
	private mAimUp_Internal: mw.Image
	public get mAimUp(): mw.Image {
		if(!this.mAimUp_Internal&&this.uiWidgetBase) {
			this.mAimUp_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas/mAimUp') as mw.Image
		}
		return this.mAimUp_Internal
	}
	private mAimDown_Internal: mw.Image
	public get mAimDown(): mw.Image {
		if(!this.mAimDown_Internal&&this.uiWidgetBase) {
			this.mAimDown_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas/mAimDown') as mw.Image
		}
		return this.mAimDown_Internal
	}
	private mAimLeft_Internal: mw.Image
	public get mAimLeft(): mw.Image {
		if(!this.mAimLeft_Internal&&this.uiWidgetBase) {
			this.mAimLeft_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas/mAimLeft') as mw.Image
		}
		return this.mAimLeft_Internal
	}
	private mAimRight_Internal: mw.Image
	public get mAimRight(): mw.Image {
		if(!this.mAimRight_Internal&&this.uiWidgetBase) {
			this.mAimRight_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas/mAimRight') as mw.Image
		}
		return this.mAimRight_Internal
	}
	private mGunIconImage_Internal: mw.Image
	public get mGunIconImage(): mw.Image {
		if(!this.mGunIconImage_Internal&&this.uiWidgetBase) {
			this.mGunIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GunCanvas/mGunIconImage') as mw.Image
		}
		return this.mGunIconImage_Internal
	}
	private mGunNameTextBlock_Internal: mw.TextBlock
	public get mGunNameTextBlock(): mw.TextBlock {
		if(!this.mGunNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mGunNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GunCanvas/mGunNameTextBlock') as mw.TextBlock
		}
		return this.mGunNameTextBlock_Internal
	}
	private mGunBulletCountTextBlock_Internal: mw.TextBlock
	public get mGunBulletCountTextBlock(): mw.TextBlock {
		if(!this.mGunBulletCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mGunBulletCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GunCanvas/mGunBulletCountTextBlock') as mw.TextBlock
		}
		return this.mGunBulletCountTextBlock_Internal
	}
	private mUnMorphCanvas_Internal: mw.Canvas
	public get mUnMorphCanvas(): mw.Canvas {
		if(!this.mUnMorphCanvas_Internal&&this.uiWidgetBase) {
			this.mUnMorphCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mUnMorphCanvas') as mw.Canvas
		}
		return this.mUnMorphCanvas_Internal
	}
	private mUnMorphButton_Internal: mw.Button
	public get mUnMorphButton(): mw.Button {
		if(!this.mUnMorphButton_Internal&&this.uiWidgetBase) {
			this.mUnMorphButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mUnMorphCanvas/UnMorphCanvas/mUnMorphButton') as mw.Button
		}
		return this.mUnMorphButton_Internal
	}
	private mJumpButton_Internal: mw.Button
	public get mJumpButton(): mw.Button {
		if(!this.mJumpButton_Internal&&this.uiWidgetBase) {
			this.mJumpButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mUnMorphCanvas/JumpCanvas/mJumpButton') as mw.Button
		}
		return this.mJumpButton_Internal
	}
	private mMorphCanvas_Internal: mw.Canvas
	public get mMorphCanvas(): mw.Canvas {
		if(!this.mMorphCanvas_Internal&&this.uiWidgetBase) {
			this.mMorphCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMorphCanvas') as mw.Canvas
		}
		return this.mMorphCanvas_Internal
	}
	private mMorphButton_Internal: mw.Button
	public get mMorphButton(): mw.Button {
		if(!this.mMorphButton_Internal&&this.uiWidgetBase) {
			this.mMorphButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMorphCanvas/mMorphButton') as mw.Button
		}
		return this.mMorphButton_Internal
	}
	private mAtkCanvas_Internal: mw.Canvas
	public get mAtkCanvas(): mw.Canvas {
		if(!this.mAtkCanvas_Internal&&this.uiWidgetBase) {
			this.mAtkCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAtkCanvas') as mw.Canvas
		}
		return this.mAtkCanvas_Internal
	}
	private mNormalAtkButton_Internal: mw.VirtualJoystickPanel
	public get mNormalAtkButton(): mw.VirtualJoystickPanel {
		if(!this.mNormalAtkButton_Internal&&this.uiWidgetBase) {
			this.mNormalAtkButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAtkCanvas/mNormalAtkButton') as mw.VirtualJoystickPanel
		}
		return this.mNormalAtkButton_Internal
	}
	private mReloadButton_Internal: mw.Button
	public get mReloadButton(): mw.Button {
		if(!this.mReloadButton_Internal&&this.uiWidgetBase) {
			this.mReloadButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAtkCanvas/mReloadButton') as mw.Button
		}
		return this.mReloadButton_Internal
	}
	private mCrouchButton_Internal: mw.Button
	public get mCrouchButton(): mw.Button {
		if(!this.mCrouchButton_Internal&&this.uiWidgetBase) {
			this.mCrouchButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAtkCanvas/mCrouchButton') as mw.Button
		}
		return this.mCrouchButton_Internal
	}
	private mFireJumpButton_Internal: mw.Button
	public get mFireJumpButton(): mw.Button {
		if(!this.mFireJumpButton_Internal&&this.uiWidgetBase) {
			this.mFireJumpButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAtkCanvas/mFireJumpButton') as mw.Button
		}
		return this.mFireJumpButton_Internal
	}


	protected onAwake() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = mw.UILayerBottom;
		this.initButtons();
	}
	protected initButtons() {
		//按钮添加点击
		
		this.mOpenShareButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mOpenShareButton");
		});
		this.initLanguage(this.mOpenShareButton);
		this.mOpenShareButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮添加点击
		
		this.mSetButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mSetButton");
		});
		this.mSetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mRankButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mRankButton");
		});
		this.mRankButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mTaskButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mTaskButton");
		});
		this.mTaskButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mTeamButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mTeamButton");
		});
		this.mTeamButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mShopButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mShopButton");
		});
		this.mShopButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mRoleButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mRoleButton");
		});
		this.mRoleButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mActivityButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mActivityButton");
		});
		this.mActivityButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mSetCloseButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mSetCloseButton");
		});
		this.mSetCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mResetPosButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mResetPosButton");
		});
		this.mResetPosButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mUnMorphButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mUnMorphButton");
		});
		this.mUnMorphButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mJumpButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mJumpButton");
		});
		this.mJumpButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mMorphButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mMorphButton");
		});
		this.mMorphButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mReloadButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mReloadButton");
		});
		this.mReloadButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCrouchButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCrouchButton");
		});
		this.mCrouchButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mFireJumpButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mFireJumpButton");
		});
		this.mFireJumpButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mRedVsTextBlock)
		
	
		this.initLanguage(this.mRedCountTextBlock)
		
	
		this.initLanguage(this.mBlueVsTextBlock)
		
	
		this.initLanguage(this.mBlueCountTextBlock)
		
	
		this.initLanguage(this.mRankTextBlock)
		
	
		this.initLanguage(this.mTipsHpTextBlock)
		
	
		this.initLanguage(this.mHpTextBlock)
		
	
		this.initLanguage(this.mKillTipTextBlock1)
		
	
		this.initLanguage(this.mKillTipTextBlock2)
		
	
		this.initLanguage(this.mKillTipTextBlock3)
		
	
		this.initLanguage(this.mInvincibleTextBlock)
		
	
		this.initLanguage(this.mDeadTextBlock)
		
	
		this.initLanguage(this.mDeadCountDownTextBlock)
		
	
		this.initLanguage(this.mDeadTipsTextBlock)
		
	
		this.initLanguage(this.mSetTextBlock)
		
	
		this.initLanguage(this.mFireTextBlock)
		
	
		this.initLanguage(this.mLowFireTextBlock)
		
	
		this.initLanguage(this.mMiddleFireTextBlock)
		
	
		this.initLanguage(this.mHighFireTextBlock)
		
	
		this.initLanguage(this.mControlTextBlock)
		
	
		this.initLanguage(this.mLowControlTextBlock)
		
	
		this.initLanguage(this.mMiddleControlTextBlock)
		
	
		this.initLanguage(this.mHighControlTextBlock)
		
	
		this.initLanguage(this.mBgmTextBlock)
		
	
		this.initLanguage(this.mLowBgmTextBlock)
		
	
		this.initLanguage(this.mMiddleBgmTextBlock)
		
	
		this.initLanguage(this.mHighBgmTextBlock)
		
	
		this.initLanguage(this.mSoundTextBlock)
		
	
		this.initLanguage(this.mLowSoundTextBlock)
		
	
		this.initLanguage(this.mMiddleSoundTextBlock)
		
	
		this.initLanguage(this.mHighSoundTextBlock)
		
	
		this.initLanguage(this.mResetTextBlock)
		
	
		this.initLanguage(this.mGunNameTextBlock)
		
	
		this.initLanguage(this.mGunBulletCountTextBlock)
		
	
		//文本多语言
		
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mMorphCanvas/MorphTextBlock") as any);
		
	
	}
	
	/**初始化多语言*/
	private initLanguage(ui: mw.StaleButton | mw.TextBlock) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }

	protected onShow(...params: any[]): void {};

	/**显示panel*/
    public show(...param): void {
		mw.UIService.showUI(this, this.layer, ...param);
	}

	/**隐藏panel*/
    public hide(): void {
		mw.UIService.hideUI(this);
	}
 }
 