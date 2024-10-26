import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","AssetId","OffsetPos","OffsetRot","OffsetSca"],["","","","",""],[1,"20686",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[2,"20689",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[3,"20693",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[4,"20707",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[5,"20741",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[6,"20799",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[7,"20910",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[8,"20957",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[9,"21007",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[10,"21034",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[11,"21037",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(0.3,0.3,0.3)],[12,"22879",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[13,"22881",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[14,"22905",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[15,"22906",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[16,"22907",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[17,"22913",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[18,"22921",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[19,"22926",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[20,"22951",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[21,"22940",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[22,"22972",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[23,"22966",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[24,"22969",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[25,"22986",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[26,"22981",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[27,"23001",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[28,"23018",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[29,"23020",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[30,"23043",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[31,"23071",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[32,"23072",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)],[33,"23102",new mw.Vector(0,0,0),new mw.Vector(0,0,-90),new mw.Vector(1,1,1)]];
export interface IMorphElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**资源ID*/
	AssetId:string
	/**位置偏移*/
	OffsetPos:mw.Vector
	/**旋转偏移*/
	OffsetRot:mw.Vector
	/**缩放偏移*/
	OffsetSca:mw.Vector
 } 
export class MorphConfig extends ConfigBase<IMorphElement>{
	constructor(){
		super(EXCELDATA);
	}

}