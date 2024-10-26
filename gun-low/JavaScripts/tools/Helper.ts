import { Projectile } from "../module/WeaponModule/Projectile";

/**子弹属性 */
export interface ProjectileProp_Abandon {
    /**子弹预制体 */
    prefabId: string,
    /**开火音效 */
    fireSound: string,
    /**击中特效 */
    hitEffect: string
};

export interface BulletProp {
    /**子弹预制体 */
    prefabId: string,
    /**子弹名字 */
    bulletName: string,
    /**子弹ICON */
    bulletIcon: string,
    /**子弹价格 */
    bulletPrices: number[],
}

export interface FireSoundProp {
    /**开火音效 */
    fireSound: string,
    /**音效名字 */
    soundName: string,
    /**音效ICON */
    soundIcon: string,
    /**音效价格 */
    soundPrices: number[],
}

export interface HitEffectProp {
    /**击中特效 */
    hitEffect: string,
    /**特效名字 */
    effectName: string,
    /**特效价格 */
    effectPrices: number[],
}

export interface SkinProp {
    /**皮肤Id */
    skinId: string,
    /**皮肤名字 */
    skinName: string,
    /**皮肤价格 */
    skinPrices: number[],
}

/**武器属性 */
export interface WeaponProp_Abandon {
    /**武器预制体 */
    prefabId: string,
    /**槽位 */
    slotType: mw.HumanoidSlotType,
    /**持有武器姿态 */
    gunAttitude: string,
    /**技能动画 */
    skillAnims: string[],
    /**技能动画时长 */
    skillAnimTimes: number[],
    /**技能开火时间点 */
    skillAtkTime: number[],
    /**技能CD */
    skillCDs: number[],
    /**技能子弹数量 */
    skillBulletCounts: number[],
    /**技能子弹发射间隔 */
    skillFireInterval: number[],
    /**普通攻击动画 */
    normalAnims: string[],
    /**普攻动画时长 */
    normalAnimTimes: number[],
    /**普通攻击时间点 */
    normalAtkTime: number[],
    /**普通攻击子弹数量 */
    normalBulletCount: number[],
    /**子弹发射间隔 */
    normalFireInterval: number[],
    /**武器名字 */
    weaponName: string,
    /**武器ICON */
    weaponIcon: string,
    /**武器价格 */
    weaponPrices: number[],
    /**子弹数量 */
    bulletCount: number,
    /**伤害 */
    damage: number,
}

export class Helper {
    private static clientPlayer: mw.Player = null;
    public static get localPlayer(): mw.Player {
        if (this.clientPlayer == null) {
            this.clientPlayer = mw.Player.localPlayer;
        }
        return this.clientPlayer;
    }

    private static playerObMap: Map<string, string> = new Map<string, string>();
    public static setPlayerObMap(characterId: string, gameObjectId: string): void {
        this.playerObMap.set(characterId, gameObjectId);
    }

    public static getCharacterId(gameObjectId: string): string {
        if (!this.playerObMap || this.playerObMap.size == 0) return null;
        let characterId: string = null;
        this.playerObMap.forEach((value: string, key: string) => {
            if (value == gameObjectId) characterId = key;
        });
        return characterId;
    }

    public static damage: number = 1;
    public static recyclePosition: mw.Vector = new mw.Vector(0, 0, -10000);

    /**激活的子弹 */
    public static activeBulletMap: Map<string, Set<Projectile>> = new Map<string, Set<Projectile>>();
    /**失活的子弹 */
    public static inactiveBullets: Map<string, Projectile[]> = new Map<string, Projectile[]>();

    /**子弹数据 */
    public static projectileDateMap_Abandon: Map<number, ProjectileProp_Abandon> = new Map<number, ProjectileProp_Abandon>
        ([
            [0, { prefabId: "5FE5766E4D27D1FC0ECC9DB29673A3EB", fireSound: "208258", hitEffect: "200147" }],
            [1, { prefabId: "EAF62D0F4EF181ABB6C8AB83E876818B", fireSound: "207772", hitEffect: "31122" }],
            [2, { prefabId: "24E7DF3146C2E5414BE4EE8AC093215B", fireSound: "208268", hitEffect: "31122" }],
            [3, { prefabId: "B8EEE9C049C089FB1E08BAA38ADC9615", fireSound: "208571", hitEffect: "200157" }],
            [4, { prefabId: "4FB7635246F9D7F1BBAE98B3EEC97353", fireSound: "208166", hitEffect: "27422" }],
            [5, { prefabId: "F68FC2B94AFC0A81AA1C4D809873D98E", fireSound: "208399", hitEffect: "130641" }],
            [6, { prefabId: "5D1E329545758BE6E58407910CCA0687", fireSound: "208374", hitEffect: "287821" }],
            [7, { prefabId: "1961231449827BF19AF6349B27AB75FA", fireSound: "208495", hitEffect: "61006" }],
            [8, { prefabId: "6EB015964A8F1DC44DF94595AA7593E1", fireSound: "208166", hitEffect: "130642" }],//屠龙激光枪3号-已完善
            [9, { prefabId: "1405575C47698FE0FC41F0B7E104529E", fireSound: "208048", hitEffect: "130641" }],
        ]);
    /**武器数据 FireAnchor*/
    public static weaponDataMap_Abandon: Map<number, WeaponProp_Abandon> = new Map<number, WeaponProp_Abandon>
        ([
            [0,
                {
                    prefabId: "C2AC715444A3A236FBF0E09AE39287B0",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "14037",//持有姿态-手枪
                    skillAnims: ["20244", "20244", "20244"],
                    skillAnimTimes: [0.2, 0.4, 0.6],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 5, 10],
                    skillBulletCounts: [1, 2, 3],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["20244"],//射击动画
                    normalAnimTimes: [0.4],
                    normalAtkTime: [0.2],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙激光枪1号",
                    weaponIcon: "221099",
                    weaponPrices: [1, 8888],
                    bulletCount: 10,
                    damage: 1
                }
            ],
            [1,
                {
                    prefabId: "B33C87594B86FF3A1835B39D638E23D6",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "14037",//持有姿态-手枪
                    skillAnims: ["20244", "20244", "20244"],
                    skillAnimTimes: [0.2, 0.4, 0.6],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 5, 10],
                    skillBulletCounts: [1, 2, 3],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["20244"],//射击动画
                    normalAnimTimes: [0.4],
                    normalAtkTime: [0.2],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙泡泡枪",
                    weaponIcon: "168811",
                    weaponPrices: [1, 8888],
                    bulletCount: 10,
                    damage: 1
                }
            ],
            [2,
                {
                    prefabId: "1647F7AE4957BF3F90AEB6AD4401157F",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "14037",//持有姿态-手枪
                    skillAnims: ["20244", "20244", "20244"],
                    skillAnimTimes: [0.2, 0.4, 0.6],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 5, 10],
                    skillBulletCounts: [1, 2, 3],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["20244"],//射击动画
                    normalAnimTimes: [0.4],
                    normalAtkTime: [0.2],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙泡泡枪",
                    weaponIcon: "155702",
                    weaponPrices: [1, 8888],
                    bulletCount: 10,
                    damage: 1
                }
            ],
            [3,
                {
                    prefabId: "DD696DD04373F75B58DDFC98F960BF8B",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态-步枪
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.15],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙火鲨枪1号",
                    weaponIcon: "122726",
                    weaponPrices: [1, 8888],
                    bulletCount: 30,
                    damage: 1
                }
            ],
            [2,
                {
                    prefabId: "6020942C4E96E0D1817597AAF232D455",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "14037",//持有姿态-手枪
                    skillAnims: ["20244", "20244", "20244"],
                    skillAnimTimes: [0.2, 0.4, 0.6],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 5, 10],
                    skillBulletCounts: [1, 2, 3],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["20244"],//射击动画
                    normalAnimTimes: [0.4],
                    normalAtkTime: [0.2],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙脉冲枪1号",
                    weaponIcon: "155702",
                    weaponPrices: [1, 8888],
                    bulletCount: 10,
                    damage: 1
                }
            ],
            [3,
                {
                    prefabId: "9E24552B4B043410A0B191B34057E4B0",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态-步枪
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.15],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙火鲨枪1号",
                    weaponIcon: "122726",
                    weaponPrices: [1, 8888],
                    bulletCount: 35,
                    damage: 1.5
                }
            ],
            [4,
                {
                    prefabId: "37B14B154139C33C8E4771AE56156B77",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态-步枪
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.15],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙脉冲枪1号",
                    weaponIcon: "155696",
                    weaponPrices: [1, 8888],
                    bulletCount: 35,
                    damage: 1.5
                }
            ],
            [5,
                {
                    prefabId: "DF2B3CC9444E04F46ABEA0A3EC312A2F",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态-步枪
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.15],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙海鲨鱼枪1号",
                    weaponIcon: "122716",
                    weaponPrices: [1, 8888],
                    bulletCount: 35,
                    damage: 1.5
                }
            ],
            [6,
                {
                    prefabId: "416DF90B41D827AA360FCDAF67DB023D",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态-步枪
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.15],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙激光枪2号",
                    weaponIcon: "122720",
                    weaponPrices: [1, 8888],
                    bulletCount: 35,
                    damage: 1.5
                }
            ],
            [7,
                {
                    prefabId: "EF601DC2464444F8D68DC1946EB03E34",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态-步枪
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.15],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙激光枪1号",
                    weaponIcon: "95676",
                    weaponPrices: [1, 8888],
                    bulletCount: 35,
                    damage: 1.5
                }
            ],
            [8,//屠龙激光枪3号-已完善
                {
                    prefabId: "A9659BDD4D031331655C24BC07F99E83",
                    slotType: mw.HumanoidSlotType.RightHand,
                    gunAttitude: "221620",//持有姿态-步枪
                    skillAnims: ["99959", "99959", "99959"],
                    skillAnimTimes: [0.2, 0.6, 1],
                    skillAtkTime: [0.2, 0.2, 0.2],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["99959"],//射击动画
                    normalAnimTimes: [0.5],
                    normalAtkTime: [0.15],
                    normalBulletCount: [1],
                    normalFireInterval: [0.01],
                    weaponName: "屠龙激光枪3号",
                    weaponIcon: "222534",
                    weaponPrices: [1, 8888],
                    bulletCount: 35,
                    damage: 1.5
                }
            ],
            [9,
                {   //弓
                    prefabId: "51DE48DB420CD65069D6F1A77A43FE1E",
                    slotType: mw.HumanoidSlotType.LeftHand,
                    gunAttitude: "20305",
                    skillAnims: ["121981", "121981", "121981"],//弓箭手大招121981
                    skillAnimTimes: [2.47, 2.47, 2.47],
                    skillAtkTime: [1.05, 1.05, 1.05],
                    skillCDs: [1, 3, 5],
                    skillBulletCounts: [1, 3, 5],
                    skillFireInterval: [0.01, 0.05, 0.05],
                    normalAnims: ["121952", "121955", "121987", "121989", "121990"],//弓箭手五连击
                    normalAnimTimes: [1.2, 1.43, 2.17, 1.8, 2.2],
                    normalAtkTime: [0.2, 0.2, 0.6, 0.5, 0.8],
                    normalBulletCount: [1, 1, 2, 1, 1],
                    normalFireInterval: [0.01, 0.01, 0.01, 0.01, 0.01],
                    weaponName: "屠龙弓箭",
                    weaponIcon: "278406",
                    weaponPrices: [1, 8888],
                    bulletCount: 6,
                    damage: 2
                }
            ],//弓,弓箭瞬发射箭,弓箭手A大招
        ]);
}