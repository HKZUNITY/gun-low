import { update } from "./common/notice/Tween";
import ActivityData from "./module/ActivityModule/ActivityData";
import ActivityModuleC from "./module/ActivityModule/ActivityModuleC";
import ActivityModuleS from "./module/ActivityModule/ActivityModuleS";
import CoinData from "./module/CoinModule/CoinData";
import CoinModuleC from "./module/CoinModule/CoinModuleC";
import CoinModuleS from "./module/CoinModule/CoinModuleS";
import { HUDData } from "./module/HUDModule/HUDData";
import HUDModuleC from "./module/HUDModule/HUDModuleC";
import HUDModuleS from "./module/HUDModule/HUDModuleS";
import { MorphModuleC, MorphModuleS } from "./module/MorphModule/MorphModule";
import PlayerData from "./module/PlayerModule/PlayerData";
import { PlayerModuleC } from "./module/PlayerModule/PlayerModuleC";
import { PlayerModuleS } from "./module/PlayerModule/PlayerModuleS";
import RadarModuleC from "./module/RadarModule/RadarModuleC";
import RadarModuleS from "./module/RadarModule/RadarModuleS";
import RankModuleC from "./module/RankModule/RankModuleC";
import RankModuleS from "./module/RankModule/RankModuleS";
import ShopData from "./module/ShopModule/ShopData";
import ShopModuleC from "./module/ShopModule/ShopModuleC";
import ShopModuleS from "./module/ShopModule/ShopModuleS";
import { TaskData } from "./module/TaskModule/TaskData";
import TaskModuleC from "./module/TaskModule/TaskModuleC";
import TaskModuleS from "./module/TaskModule/TaskModuleS";
import TeamModuleC from "./module/TeamModule/TeamModuleC";
import TeamModuleS from "./module/TeamModule/TeamModuleS";
import WeaponModuleC from "./module/WeaponModule/WeaponModuleC";
import WeaponModuleS from "./module/WeaponModule/WeaponModuleS";
import GlobalData from "./tools/GlobalData";

@Component
export default class GameLauncher extends mw.Script {
    @mw.Property({ displayName: "是否开启IAA", group: "面板设置" })
    private isOpenIAA: boolean = true;

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.onStartCS();
        if (mw.SystemUtil.isClient()) {
            this.useUpdate = true;
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.useUpdate = false;
            this.onStartS();
        }
    }

    /**客户端服务端的onStart */
    private onStartCS(): void {
        this.onRegisterModule();
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {
        if (mw.SystemUtil.isClient()) {
            update();
            mw.TweenUtil.TWEEN.update();
            this.onUpdateC(dt);
        } else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }

    /**注册模块 */
    private onRegisterModule(): void {
        ModuleService.registerModule(HUDModuleS, HUDModuleC, HUDData);
        ModuleService.registerModule(PlayerModuleS, PlayerModuleC, PlayerData);
        ModuleService.registerModule(CoinModuleS, CoinModuleC, CoinData);
        ModuleService.registerModule(ShopModuleS, ShopModuleC, ShopData);
        ModuleService.registerModule(TeamModuleS, TeamModuleC, null);
        ModuleService.registerModule(RankModuleS, RankModuleC, null);
        ModuleService.registerModule(RadarModuleS, RadarModuleC, null);
        ModuleService.registerModule(ActivityModuleS, ActivityModuleC, ActivityData);
        ModuleService.registerModule(WeaponModuleS, WeaponModuleC, null);
        ModuleService.registerModule(TaskModuleS, TaskModuleC, TaskData);
        ModuleService.registerModule(MorphModuleS, MorphModuleC, null);
    }

    /**------------------------------------------- 客户端 ------------------------------------------------ */
    /**客户端的OnStart */
    private onStartC(): void {
        GlobalData.isOpenIAA = !mw.SystemUtil.isPIE || this.isOpenIAA;
    }

    /**客户端的update */
    private onUpdateC(dt: number): void {

    }

    /**------------------------------------------- 客户端 ------------------------------------------------ */

    /**------------------------------------------- 服务端 ------------------------------------------------ */
    /**服务端的OnStart */
    private onStartS(): void {
        DataStorage.setTemporaryStorage(SystemUtil.isPIE);
    }

    /**服务端的update */
    private onUpdateS(dt: number): void {

    }
    /**------------------------------------------- 服务端 ------------------------------------------------ */
}