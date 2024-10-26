import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","GUNNAME","GUNPREFAB","GUNICON","GUNICON_M","GUNLOC","GUNSCALE","IATURNICON","PRICETYPE","PRICE","FIREINTERVAL","BULLETCOUNT","HURT"],["","","","","","","","","","","","",""],[1,"水枪","587777AD4056DC3AB465FBA7D3F5F7BA",null,"166941",new mw.Vector(0,0,0),new mw.Vector(1,2,1),0,1,[1,15888],"0.2",30,25],[2,"泡泡枪","0D543D5346C331F41DA890A5E6DD3DB5",null,"155696",new mw.Vector(0,0,0),new mw.Vector(1,1,1),0,1,[1,15888],"0.2",30,25],[3,"霰弹枪","E3E0C2994D3518540DBB6D8C00C8AB83",null,"226214",new mw.Vector(0,0,0),new mw.Vector(2,2,2),0,1,[1,15888],"0.15",30,25],[4,"金枪鱼","5181250F44DF914A714B668F99177E3A",null,"138213",new mw.Vector(0,0,0),new mw.Vector(1,1,1),0,1,[1,15888],"0.15",30,25],[5,"脉冲枪","1CD6AEAB4602DF140ACE93BD49D5CA19",null,"153110",new mw.Vector(0,0,0),new mw.Vector(2,2.5,2),0,1,[1,15888],"0.1",35,25],[6,"喷火枪","A469CCC84AAA873815243BB25439707C",null,"226213",new mw.Vector(0,0,0),new mw.Vector(2,2,2),0,1,[1,15888],"0.1",35,25],[7,"散弹喷枪","68E812DC47B714F9A2BB2ABE18304C5B",null,"155702",new mw.Vector(0,0,0),new mw.Vector(1,1,1),0,1,[2,28888],"0.1",35,25],[8,"霰弹枪枪身","BA1BDC034FCDE8574CBBAA8C4831A950",null,"318664",new mw.Vector(0,0,0),new mw.Vector(1,1,1),0,1,[2,28888],"0.1",40,25],[9,"火箭发射器","FCFE18BE440FAEBD5AB999A222F10AA9",null,"226826",new mw.Vector(0,0,0),new mw.Vector(1.5,1,1),0,1,[2,28888],"0.2",100,25],[10,"激光幽灵枪","23240FEE4F3BD25DE8EA6DBE525B3A20",null,"122716",new mw.Vector(0,0,0),new mw.Vector(1,1,1),1,1,[3,38888],"0.3",40,50],[11,"烟花枪","A830458640D6EA21FB7AEA8F7E029CB7",null,"122726",new mw.Vector(0,0,0),new mw.Vector(1,1,1),0,1,[3,38888],"0.3",40,50],[12,"激光烈火枪","0C7F278C4254F90F69614086DCA0B906",null,"95676",new mw.Vector(-30,0,0),new mw.Vector(1,1,1),0,1,[4,48888],"0.3",40,50],[13,"激光冰雷枪","29CD5E6145D1B05590E887A050E0D3C8",null,"122720",new mw.Vector(-30,0,0),new mw.Vector(1,1,1),0,1,[4,48888],"0.3",40,50],[14,"尖叫鸡","015C826546EBC60F95EF399D16523B78",null,"20799",new mw.Vector(0,0,0),new mw.Vector(2,2,3),1,1,[5,58888],"1",10,100]];
export interface IGUNElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**枪名字*/
	GUNNAME:string
	/**枪预制体Guid*/
	GUNPREFAB:string
	/**枪ICON*/
	GUNICON:string
	/**枪模型*/
	GUNICON_M:string
	/**枪展示位置*/
	GUNLOC:mw.Vector
	/**枪缩放*/
	GUNSCALE:mw.Vector
	/**是否翻转ICON*/
	IATURNICON:number
	/**0：免费
1：金币购买|Ads
2：ads*/
	PRICETYPE:number
	/**钻石|金币*/
	PRICE:Array<number>
	/**发射间隔*/
	FIREINTERVAL:string
	/**子弹*/
	BULLETCOUNT:number
	/**伤害*/
	HURT:number
 } 
export class GUNConfig extends ConfigBase<IGUNElement>{
	constructor(){
		super(EXCELDATA);
	}

}