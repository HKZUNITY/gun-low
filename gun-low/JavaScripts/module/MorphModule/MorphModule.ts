import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../config/GameConfig";
import Utils from "../../tools/Utils";
import HUDModuleC from "../HUDModule/HUDModuleC";
import WeaponModuleS from "../WeaponModule/WeaponModuleS";

export class MorphModuleC extends ModuleC<MorphModuleS, null> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        InputUtil.onKeyDown(mw.Keys.Z, () => {
            this.morph();
        });

        InputUtil.onKeyDown(mw.Keys.X, () => {
            this.unmorph();
        });
        this.initAction();
    }

    private initAction(): void {
        this.getHUDModuleC.onMorphAction.add(this.addMorphAction.bind(this));
    }

    private isMorph: boolean = false;
    public get getIsMorph(): boolean {
        return this.isMorph;
    }

    private addMorphAction(isMorph: boolean): void {
        this.isMorph = isMorph;
        this.isMorph ? this.morph() : this.unmorph();
    }

    private isComplete: boolean = false;
    public async morph(): Promise<void> {
        if (this.isComplete) {
            Notice.showDownNotice("点的太快啦");
            return;
        }
        this.isComplete = true;
        await this.server.net_morph();
        TimeUtil.delaySecond(1).then(() => {
            this.isComplete = false;
        });
    }

    public unmorph(): void {
        this.server.net_unmorph();
    }
}


export class MorphModuleS extends ModuleS<MorphModuleC, null> {
    private weaponModuleS: WeaponModuleS = null;
    private get getWeaponModuleS(): WeaponModuleS {
        if (!this.weaponModuleS) {
            this.weaponModuleS = ModuleService.getModule(WeaponModuleS);
        }
        return this.weaponModuleS;
    }

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

    protected onPlayerLeft(player: mw.Player): void {
        let userId = player.userId;
        this.recycleGo(userId);
    }

    public async net_morph(): Promise<void> {
        await this.morph(this.currentPlayer);
    }

    private playerGoMap: Map<string, mw.GameObject> = new Map<string, mw.GameObject>();
    private async morph(player: mw.Player): Promise<void> {
        if (!player) return;
        if (player.character.getVisibility()) player.character.setVisibility(false, true);
        let userId = player.userId;
        this.recycleGo(userId);
        this.playEffectSound(player);
        await this.spawnGo(player);
        // console.error(player.character.getCollision());
        // if (player.character.getCollision() != mw.PropertyStatus.Off) player.character.setCollision(mw.PropertyStatus.Off);
        this.getWeaponModuleS.setWeaponState(player.playerId, false);
    }

    // private i: number = 1;
    private async spawnGo(player: mw.Player): Promise<void> {
        let randomId = Utils.randomInt(1, GameConfig.Morph.getAllElement().length);
        // console.error(`randomId:${randomId}`);
        // let morphElement = GameConfig.Morph.getElement(this.i++);
        let morphElement = GameConfig.Morph.getElement(randomId);
        await Utils.asyncDownloadAsset(morphElement.AssetId);
        let tmpGo = await GameObjPool.asyncSpawn(morphElement.AssetId);
        await tmpGo.asyncReady();
        (tmpGo as mw.Model).setCollision(mw.PropertyStatus.Off);
        player.character.attachToSlot(tmpGo, mw.HumanoidSlotType.Root);
        tmpGo.localTransform.scale = new mw.Vector(morphElement.OffsetSca);
        tmpGo.localTransform.position = new mw.Vector(0, 0, tmpGo.getBoundingBox().z / 2);
        tmpGo.localTransform.rotation = new mw.Rotation(morphElement.OffsetRot);
        this.playerGoMap.set(player.userId, tmpGo);
    }

    @Decorator.noReply()
    public net_unmorph(): void {
        this.unmorph(this.currentPlayer);
    }

    private async unmorph(player: mw.Player): Promise<void> {
        if (!player) return;
        let userId = player.userId;
        this.recycleGo(userId);
        this.playEffectSound(player);
        if (!player.character.getVisibility()) player.character.setVisibility(true, true);
        // if (player.character.getCollision() != mw.PropertyStatus.On) player.character.setCollision(mw.PropertyStatus.On);
        this.getWeaponModuleS.setWeaponState(player.playerId, true);
    }

    private recycleGo(userId: string): void {
        if (this.playerGoMap.has(userId)) {
            GameObjPool.despawn(this.playerGoMap.get(userId));
            this.playerGoMap.delete(userId);
        }
    }

    private playEffectSound(player: mw.Player): void {
        EffectService.playOnGameObject("153045", player.character, { slotType: mw.HumanoidSlotType.Root, scale: mw.Vector.one.multiply(3) });
        SoundService.play3DSound("47427", player.character);
    }

    public setPlayerMorphState(userId: string, isVisibility: boolean): void {
        if (!this.playerGoMap.has(userId)) return;
        this.playerGoMap.get(userId).setVisibility(isVisibility);
    }
}