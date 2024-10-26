import RadarModuleC from "../RadarModuleC";

export default class RadarPanel extends UIScript {
	private mCutCanvas: mw.Canvas = null;
	private mRadarCanvas: mw.Canvas = null;
	private currentPlayer: mw.Player = null;
	private playerPointMap: Map<mw.Player, mw.TextBlock> = new Map<mw.Player, mw.TextBlock>();
	private npcPointMap: Map<mw.Character, mw.TextBlock> = new Map<mw.Character, mw.TextBlock>();
	/**雷达缩放比，比例越小，可以看得越远 */
	private mapScalRate: number = 1;
	private windowSize: Vector2 = mw.Vector.zero;

	private radarModuleC: RadarModuleC = null;
	private get getRadarModuleC(): RadarModuleC {
		if (!this.radarModuleC) {
			this.radarModuleC = ModuleService.getModule(RadarModuleC);
		}
		return this.radarModuleC;
	}

	protected async onAwake(): Promise<void> {
		this.radarModuleC = ModuleService.getModule(RadarModuleC);
		this.currentPlayer = await Player.asyncGetLocalPlayer();
		this.initUI();
		this.bindEvent();
	}

	private initUI(): void {
		this.windowSize = WindowUtil.getViewportSize();
		this.rootCanvas.size = this.windowSize;
		this.rootCanvas.zOrder = mw.UILayerTop;

		/**外框裁剪容器 */
		this.mCutCanvas = mw.Canvas.newObject(this.rootCanvas, "MyCanvas");
		this.mCutCanvas.size = new Vector2(400, 400);
		this.mCutCanvas.zOrder = 2;
		this.mCutCanvas.autoLayoutRule = new mw.UILayout(0, new mw.Margin(0), mw.UILayoutType.Vertical, mw.UILayoutPacket.CenterCenter, new mw.UIHugContent(0, 0), true, false);
		this.mCutCanvas.clipEnable = true;

		/**雷达背景图片 */
		let bgp = mw.Image.newObject(this.rootCanvas, "bgp");
		bgp.imageGuid = "114028";
		bgp.imageColor = LinearColor.black;
		bgp.renderOpacity = 0.3;
		bgp.size = this.mCutCanvas.size.clone();

		//中心点(自己)
		let selfCanvas = mw.Canvas.newObject(this.rootCanvas, "selfCanvas");
		selfCanvas.size = new Vector2(64, 64);
		selfCanvas.position = new Vector2(168, 168);
		selfCanvas.zOrder = 1;

		/**中心点图片 */
		let selfImageArrow_1 = mw.Image.newObject(selfCanvas, "selfImageArrow_1");
		selfImageArrow_1.imageGuid = "298896";
		selfImageArrow_1.size = new Vector2(64, 64);
		selfImageArrow_1.position = new Vector2(0, 20);
		selfImageArrow_1.renderTransformAngle = -90;

		let selfImageArrow_2 = mw.Image.newObject(selfCanvas, "selfImageArrow_2");
		selfImageArrow_2.imageGuid = "114028";
		selfImageArrow_2.size = new Vector2(400, 400);
		selfImageArrow_2.position = new Vector2(-168, -452);
		selfImageArrow_2.renderOpacity = 0.3;
		selfImageArrow_2.renderTransformAngle = 45;

		/**雷达图谱容器 */
		this.mRadarCanvas = mw.Canvas.newObject(this.rootCanvas, "radarCanvas");
		this.mRadarCanvas.size = this.mCutCanvas.size.clone();
		this.mRadarCanvas.position = Vector2.zero;
		this.mCutCanvas.addChild(this.mRadarCanvas);

		TimeUtil.setInterval(() => {
			this.mCutCanvas.position = mw.Vector.zero;
			bgp.position = this.mCutCanvas.position;
			selfCanvas.position = this.mCutCanvas.position.add(this.mCutCanvas.size.clone().multiply(0.5).clone().subtract(selfCanvas.size.clone().multiply(0.5)));
			this.mRadarCanvas.renderTransformAngle = -1 * Camera.currentCamera.worldTransform.clone().rotation.z;

			this.updatePlayerState();
			this.updateNpcState();
		}, 0.1);
	}

	private bindEvent(): void {
		Player.onPlayerLeave.add((otherPlayer: mw.Player) => {
			if (!this.playerPointMap.has(otherPlayer)) return;
			this.playerPointMap.get(otherPlayer).destroyObject();
			this.playerPointMap.delete(otherPlayer);
		});
	}

	private updatePlayerState(): void {
		Player.getAllPlayers().forEach((otherPlayer: mw.Player) => {
			if (otherPlayer == this.currentPlayer) return;
			if (this.playerPointMap.has(otherPlayer)) {
				let otherPlayerPoint = this.playerPointMap.get(otherPlayer);

				if (otherPlayer.character.ragdollEnabled) {
					this.setTextBlock(otherPlayerPoint, "×");
				} else {
					this.setTextBlock(otherPlayerPoint, "◆");
				}

				if (this.getRadarModuleC.isFriendly(this.currentPlayer, otherPlayer)) {
					this.setTextFontColor(otherPlayerPoint, mw.LinearColor.green);
				} else {
					this.setTextFontColor(otherPlayerPoint, mw.LinearColor.red);
				}

				let loc = this.Loc2RadarPos(otherPlayer.character.worldTransform.position);
				let offset = otherPlayerPoint.size;
				otherPlayerPoint.position = new Vector2(loc.x - (offset.x / 2), loc.y - (offset.y / 2));
			} else {
				this.playerPointMap.set(otherPlayer, this.getTextBlockPoint(otherPlayer.userId));
			}
		});
	}

	private updateNpcState(): void {
		if (!this.npcPointMap || this.npcPointMap.size == 0) return;
		this.npcPointMap.forEach((value, key) => {
			if (key.ragdollEnabled) {
				this.setTextBlock(value, "×");
			} else {
				this.setTextBlock(value, "◆");
			}
			let loc = this.Loc2RadarPos(key.worldTransform.position);
			let offset = value.size;
			value.position = new Vector2(loc.x - (offset.x / 2), loc.y - (offset.y / 2));
		});
	}

	public setNpcPoint(npc: mw.Character): void {
		this.npcPointMap.set(npc, this.getTextBlockPoint(npc.gameObjectId, true));
	}

	private getTextBlockPoint(name: string, isNpc: boolean = false): mw.TextBlock {
		let textBlockPoint = mw.TextBlock.newObject(this.rootCanvas, name);
		textBlockPoint.fontSize = 32;
		this.setTextBlock(textBlockPoint, "◆");
		textBlockPoint.outlineColor = mw.LinearColor.black;
		textBlockPoint.zOrder = 1;
		textBlockPoint.outlineSize = 1;
		this.setTextFontColor(textBlockPoint, isNpc ? mw.LinearColor.red : mw.LinearColor.green);
		textBlockPoint.textHorizontalLayout = 2;
		textBlockPoint.textJustification = 0;
		textBlockPoint.textVerticalJustification = 0;
		textBlockPoint.textAlign = 0;
		textBlockPoint.textVerticalAlign = 0;
		textBlockPoint.size = new Vector2(32, 32);
		textBlockPoint.visibility = 4;
		this.mRadarCanvas.addChild(textBlockPoint);
		return textBlockPoint;
	}

	private Loc2RadarPos(loc: Vector): Vector2 {
		let deltaVector = loc.clone().subtract(this.currentPlayer.character.worldTransform.position.clone()).multiply(new Vector(0.1, 0.1, 0)).multiply(this.mapScalRate);
		let deltaVector2 = new Vector2(deltaVector.clone().y, -1 * deltaVector.clone().x);
		let pos = this.mRadarCanvas.size.clone().multiply(0.5).clone().subtract(new Vector2(5, 16)).add(deltaVector2);
		return pos;
	}

	private setTextBlock(text: mw.TextBlock, str: string): void {
		if (text.text != str) text.text = str;
	}

	private setTextFontColor(text: mw.TextBlock, fontColor: mw.LinearColor): void {
		if (text.fontColor != fontColor) text.fontColor = fontColor;
	}

	public show(...param): void {
		mw.UIService.showUI(this, this.layer, ...param);
	}

	public hide(): void {
		mw.UIService.hideUI(this);
	}
}
