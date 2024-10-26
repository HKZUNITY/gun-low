import { FlyText } from "../../tools/FlyText";
import { PrefabEvent } from "../../tools/PrefabEvent";
import Utils from "../../tools/Utils";

@Component
export default class ProjectTarget extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        } else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    /**--------------------------------【客户端】-------------------------------- */

    /**客户端的onStart */
    private async onStartC(): Promise<void> {
        this.useUpdate = false;
        await ModuleService.ready();
        this.setProjectTarget();
        this.testOnHit();
    }

    private setProjectTarget(): void {
        Utils.setProjectTarget(this.gameObject as mw.Model);
    }

    private testOnHit(): void {
        PrefabEvent.PrefabEvtFight.onHit((attackerId: string, targetId: string, damage: number, position: mw.Vector) => {
            if (this.gameObject.gameObjectId != targetId) return;
            FlyText.instance.showFlyText("-" + damage, position);
        });
    }

    /**客户端的onUpdate */
    private onUpdateC(dt: number): void {

    }
    /**--------------------------------【客户端】-------------------------------- */

    /**--------------------------------【服务端】-------------------------------- */
    /**服务端的onStart */
    private onStartS(): void {
        this.useUpdate = false;
    }

    /**服务端的onUpdate */
    private onUpdateS(dt: number): void {

    }
    /**--------------------------------【服务端】-------------------------------- */

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }




}