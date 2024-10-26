import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Desc","Name","TaskType","TaskItemType","NextId","TragetNum","Coin","Diamond"],["","","Language","","","","","",""],[1,"每日登录游戏（{0}/{1}）","Dailylogintothegame",1,1,0,1,100,1],[11,"每日在线时长5分钟（{0}/{1}）","Dailyonlinedurationminutes",1,11,0,5,500,5],[12,"每日在线时长10分钟（{0}/{1}）","Dailyonlinedurationminutes",1,12,0,10,1000,10],[13,"每日在线时长15分钟（{0}/{1}）","Dailyonlinedurationminutes",1,13,0,15,1500,15],[14,"每日在线时长20分钟（{0}/{1}）","Dailyonlinedurationminutes",1,14,0,20,2000,20],[15,"每日在线时长25分钟（{0}/{1}）","Dailyonlinedurationminutes",1,15,0,25,2500,25],[16,"每日在线时长30分钟（{0}/{1}）","Dailyonlinedurationminutes",1,16,0,30,3000,30],[17,"每日在线时长40分钟（{0}/{1}）","Dailyonlinedurationminutes",1,17,0,40,4000,40],[18,"每日在线时长50分钟（{0}/{1}）","Dailyonlinedurationminutes",1,18,0,50,5000,50],[19,"每日在线时长60分钟（{0}/{1}）","Dailyonlinedurationminutes",1,19,0,60,6000,60],[31,"每日击败1个玩家（{0}/{1}）","Defeatplayersdaily",1,31,0,1,100,1],[32,"每日击败5个玩家（{0}/{1}）","Defeatplayersdaily",1,32,0,5,500,5],[33,"每日击败10个玩家（{0}/{1}）","Defeatplayersdaily",1,33,0,10,1000,10],[34,"每日击败20个玩家（{0}/{1}）","Defeatplayersdaily",1,34,0,20,2000,20],[35,"每日击败30个玩家（{0}/{1}）","Defeatplayersdaily",1,35,0,30,4000,30],[36,"每日击败50个玩家（{0}/{1}）","Defeatplayersdaily",1,36,0,50,10000,50],[37,"每日击败100个玩家（{0}/{1}）","Defeatplayersdaily",1,37,0,100,10000,100],[38,"每日击败200个玩家（{0}/{1}）","Defeatplayersdaily",1,38,0,200,10000,200],[39,"每日击败300个玩家（{0}/{1}）","Defeatplayersdaily",1,39,0,300,10000,300],[101,"每周登录1天（{0}/{1}）","Logindaysperweek",2,101,0,1,10000,100],[102,"每周登录2天（{0}/{1}）","Logindaysperweek",2,102,0,2,20000,200],[103,"每周登录3天（{0}/{1}）","Logindaysperweek",2,103,0,3,30000,300],[104,"每周登录4天（{0}/{1}）","Logindaysperweek",2,104,0,4,40000,400],[105,"每周登录5天（{0}/{1}）","Logindaysperweek",2,105,0,5,50000,500],[106,"每周登录6天（{0}/{1}）","Logindaysperweek",2,106,0,6,60000,600],[107,"每周登录7天（{0}/{1}）","Logindaysperweek",2,107,0,7,70000,700]];
export interface ITaskElement extends IElementBase{
 	/**任务id*/
	ID:number
	/**任务名字*/
	Desc:string
	/**任务名字*/
	Name:string
	/**任务类型
1-每日任务
2-每周任务*/
	TaskType:number
	/**任务类型
1-每日在线时长5分钟
2-每日在线时长10分钟
3-每日在线时长15分钟
4-每日在线时长20分钟
5-每日在线时长25分钟
6-每日在线时长30分钟
7-每日在线时长40分钟
8-每日在线时长50分钟
9-每日在线时长60分钟
10-每日击败1个玩家
11-每日击败5个玩家
12-每日击败10个玩家
13-每日击败20个玩家
14-每日击败30个玩家
15-每日击败50个玩家
16-每日击败100个玩家
17-每日击败200个玩家
18-每日击败300个玩家
101-每周登录1天
102-每周登录2天
103-每周登录3天
104-每周登录4天
105-每周登录5天
106-每周登录6天
107-每周登录7天
200-每日登录游戏*/
	TaskItemType:number
	/**下一阶段的任务ID*/
	NextId:number
	/**目标数*/
	TragetNum:number
	/**获得金币*/
	Coin:number
	/**获得钻石*/
	Diamond:number
 } 
export class TaskConfig extends ConfigBase<ITaskElement>{
	constructor(){
		super(EXCELDATA);
	}

}