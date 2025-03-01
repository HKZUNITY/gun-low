import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["id","Guid","Annotation"],["","",""],[1,"63341","Chirp"],[2,"118698","STAY"],[3,"118699","bad guy"],[4,"117222","I will live"],[5,"118697","Let Me Love You"],[6,"118700","Running up That Hill"],[7,"118701","Love To Hate Me"],[8,"118702","TOMBOY"],[9,"118703","Shut Down"],[10,"118704","Celestial"],[11,"118712","As It Was"],[12,"118706","Good Morning"],[13,"118707","Alone"],[14,"118709","Chanderiler"],[15,"118711","Don't Wanna Know"],[16,"118716","Mood"],[17,"117220","Golden wheel"],[18,"128884","I don't know what it's called"],[19,"128888","I don't know what it's called"]];
export interface IMusicElement extends IElementBase{
 	/**唯一ID*/
	id:number
	/**GUID*/
	Guid:string
	/**注释*/
	Annotation:string
 } 
export class MusicConfig extends ConfigBase<IMusicElement>{
	constructor(){
		super(EXCELDATA);
	}

}