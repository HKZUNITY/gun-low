import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","ROLEID","PRICETYPE","PRICE","NAME","DESC"],["","","","","Language",""],[1,"181562",1,[1,5888],"HoodedMan","兜帽男"],[2,"143400",1,[1,5888],"DoublePonytailGirl","双马尾女"],[3,"142292",1,[1,5888],"MaleWarrior","男战士"],[4,"142272",1,[1,5888],"MechGirl","机甲少女"],[5,"142293",1,[1,5888],"MaleKnight","男骑士"],[6,"142255",1,[1,5888],"NanoMechWomen","纳米机甲女性"],[7,"219915",1,[1,5888],"CyberYouth","赛博少年"],[8,"226379",1,[1,5888],"CyberYouth","赛博少年"],[9,"219912",1,[1,5888],"CyberGirls","赛博少女"],[10,"226386",1,[1,5888],"CyberGirls","赛博少女"],[11,"266641",1,[1,5888],"DefinitelyPotBoy","一定锅少年"],[12,"267183",1,[1,5888],"SeekingGodYoungMan","求神少年"],[13,"264622",1,[1,5888],"DefinitelyPotGirl","一定锅少女"],[14,"266861",1,[1,5888],"SeekingGodGirl","求神少女"],[15,"142302",1,[1,5888],"GemstoneArmoredMan","宝石铠甲男"],[16,"142303",1,[1,5888],"ArmoredMaleWarrior","铠甲男战士"],[17,"142396",1,[1,5888],"BlackMaleNanomecha","黑人男纳米机甲"],[18,"142397",1,[1,5888],"WhiteMaleNanomecha","白人男纳米机甲"],[19,"142398",1,[1,5888],"SilverKnights","白银骑士"],[20,"142906",1,[1,5888],"EagleWarrior","鹰战士"],[21,"142895",1,[1,5888],"Warrior","战士"],[22,"142886",1,[1,5888],"VenomMonster","毒液怪人"],[23,"142905",1,[1,5888],"AntWarrior","蚁侠士"],[24,"142898",1,[1,5888],"TheStrongestCaptain","最强队长"],[25,"142885",1,[1,5888],"SuperHandsomeHero","超帅侠"],[26,"142900",1,[1,5888],"StrangeWarrior","奇异战士"],[27,"142901",1,[1,5888],"LightningMonster","闪电怪"],[28,"142887",1,[1,5888],"EvilSpiritSkull","恶灵骷髅"],[29,"142888",1,[1,5888],"IronMan","铁人"],[30,"222475",1,[1,5888],"WindbreakerGirl","风衣女"],[31,"219916",1,[1,5888],"HanfuGirl","汉服少女"],[32,"266860",1,[1,5888],"FashionableGirl","时尚少女"],[33,"226382",1,[1,5888],"TrendyGirl","潮流少女"],[34,"222476",1,[1,5888],"AncientScholars","古代书生"]];
export interface IROLEElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**角色Guid*/
	ROLEID:string
	/**0-免费
1-金币|钻石
2-钻石*/
	PRICETYPE:number
	/**价格
钻石|金币*/
	PRICE:Array<number>
	/**名字*/
	NAME:string
	/**名字*/
	DESC:string
 } 
export class ROLEConfig extends ConfigBase<IROLEElement>{
	constructor(){
		super(EXCELDATA);
	}

}