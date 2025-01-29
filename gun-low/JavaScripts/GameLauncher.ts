import { update } from "./common/notice/Tween";
import { GameConfig } from "./config/GameConfig";
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

    @mw.Property({ displayName: "多语言", group: "脚本设置", enumType: { "系统默认": -1, "英语": 0, "简体中文": 1, "繁体中文": 2, "日语": 3, "韩语": 4 } })
    private languageId: number = -1;

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
        GlobalData.isOpenIAA = !mw.SystemUtil.isPIE || this.isOpenIAA;
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
        this.initLanguage();
    }

    private initLanguage(): void {
        let language = LocaleUtil.getDefaultLocale().toString().toLowerCase();
        console.error(`wfz - language:${language}`);

        let languageId: number = -1;
        if (mw.SystemUtil.isPIE && this.languageId >= 0) {
            languageId = this.languageId;
        } else {
            if (!!language.match("en")) {
                languageId = 0;
            } else if (!!language.match("zh")) {//简体
                languageId = 1;
            } else if (!!language.match("ja")) {
                languageId = 3;
            } else if (!!language.match("ko")) {
                languageId = 4;
            } else {//繁体
                languageId = 2;
            }
        }
        GlobalData.languageId = languageId;
        console.error(`wfz - languageId:${languageId}`);

        GameConfig.initLanguage(languageId, (key) => {
            let ele = GameConfig.Language.getElement(key);
            if (ele == null) return "unknow_" + key;
            return ele.Value;
        });

        mw.UIScript.addBehavior("lan", (ui: mw.StaleButton | mw.TextBlock) => {
            let key: string = ui.text;
            if (key) {
                let lan = GameConfig.Language.getElement(key);
                if (lan) ui.text = (lan.Value);
            }
        });
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