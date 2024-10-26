import {ConfigBase, IElementBase} from "./ConfigBase";
import {GUNConfig} from "./GUN";
import {MorphConfig} from "./Morph";
import {ProjectilePropConfig} from "./ProjectileProp";
import {ROLEConfig} from "./ROLE";
import {ShopItemConfig} from "./ShopItem";
import {TaskConfig} from "./Task";
import {TRAILINGConfig} from "./TRAILING";
import {WeaponPropConfig} from "./WeaponProp";

export class GameConfig{
	private static configMap:Map<string, ConfigBase<IElementBase>> = new Map();
	/**
	* 多语言设置
	* @param languageIndex 语言索引(-1为系统默认语言)
	* @param getLanguageFun 根据key获取语言内容的方法
	*/
	public static initLanguage(languageIndex:number, getLanguageFun:(key:string|number)=>string){
		ConfigBase.initLanguage(languageIndex, getLanguageFun);
		this.configMap.clear();
	}
	public static getConfig<T extends ConfigBase<IElementBase>>(ConfigClass: { new(): T }): T {
		if (!this.configMap.has(ConfigClass.name)) {
			this.configMap.set(ConfigClass.name, new ConfigClass());
		}
		return this.configMap.get(ConfigClass.name) as T;
	}
	public static get GUN():GUNConfig{ return this.getConfig(GUNConfig) };
	public static get Morph():MorphConfig{ return this.getConfig(MorphConfig) };
	public static get ProjectileProp():ProjectilePropConfig{ return this.getConfig(ProjectilePropConfig) };
	public static get ROLE():ROLEConfig{ return this.getConfig(ROLEConfig) };
	public static get ShopItem():ShopItemConfig{ return this.getConfig(ShopItemConfig) };
	public static get Task():TaskConfig{ return this.getConfig(TaskConfig) };
	public static get TRAILING():TRAILINGConfig{ return this.getConfig(TRAILINGConfig) };
	public static get WeaponProp():WeaponPropConfig{ return this.getConfig(WeaponPropConfig) };
}