import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","PrefabId","FireSound","HitEffect","HitEffectScale","Des"],["","","","","",""],[1,"5FE5766E4D27D1FC0ECC9DB29673A3EB","208258","27422",new mw.Vector(1,1,1),null,null,208399],[2,"EAF62D0F4EF181ABB6C8AB83E876818B","207772","27422",new mw.Vector(1,1,1),null],[3,"F32C6FB24570123F58CEFA81FC1DAC1F","208268","27422",new mw.Vector(1,1,1),null],[4,"28BA1D7C44D241C468F19A94D9E63238","208374","61006",new mw.Vector(1,1,1),null,null,null,208166],[5,"D07DD084490C6D2C3BC3A7A8BC4884C0","208374","61006",new mw.Vector(1,1,1),null],[6,"A5C80A2E45063598223D4A8D042593A8","208166","265666",new mw.Vector(0.5,0.5,0.5),null],[7,"E2497FC44D0EC13158099584EED17776","208374","61006",new mw.Vector(1,1,1),null,208495,null,287821],[8,"24E7DF3146C2E5414BE4EE8AC093215B","208166","27422",new mw.Vector(1,1,1),"208166"],[9,"6EB015964A8F1DC44DF94595AA7593E1","208166","27421",new mw.Vector(0.5,0.5,0.5),"屠龙激光枪3号-已完善"],[10,"A3BC64CF4B29BD2D076E4194A2F9E40C","208374","61006",new mw.Vector(1,1,1),null],[11,"C7708014418743519AEB66A05118335F","208374","61006",new mw.Vector(1,1,1),null],[12,"592867B84C2ABC5BC11326A6588AC115","208495","61006",new mw.Vector(1,1,1),null],[13,"4E31B836400E0183C925ACA18475115B","208374","27421",new mw.Vector(0.5,0.5,0.5),null],[14,"4C18E7A440AD7AE26CFA71AD44B70903","208374","27421",new mw.Vector(0.5,0.5,0.5),null],[15,"1405575C47698FE0FC41F0B7E104529E","208048","27421",new mw.Vector(0.5,0.5,0.5),null]];
export interface IProjectilePropElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**子弹预制体*/
	PrefabId:string
	/**开火音效*/
	FireSound:string
	/**击中特效*/
	HitEffect:string
	/**击中特效缩放*/
	HitEffectScale:mw.Vector
	/**描述*/
	Des:string
 } 
export class ProjectilePropConfig extends ConfigBase<IProjectilePropElement>{
	constructor(){
		super(EXCELDATA);
	}

}