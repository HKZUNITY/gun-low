import { EventType } from "../../tools/EventType";
import Utils from "../../tools/Utils";
import GMHUD_Generate from "../../ui-generate/module/GMModule/GMHUD_generate";
import GMItem_Generate from "../../ui-generate/module/GMModule/GMItem_generate";

const GMConfig = [];
export function AddGMCommand(cmd: GMData) {
    GMConfig.push(cmd);
}

AddGMCommand({
    label: "pA",
    clientCmd: (player, value) => {
    },
    serverCmd: async (player, value) => {
        await Utils.asyncDownloadAsset(value);
        let pA = player.character.loadAnimation(value);
        pA.loop = 0;
        pA.play();
    }
});

@Component
export default class GMService extends mw.Script {
    public static instance: GMService;

    /**
     * 初始化UI
     */
    public createUI(dropDownList: DropdownList) {
        GMConfig.forEach(cmd => {
            dropDownList.addItem(cmd);
        });
    }

    public override async onStart() {
        await ModuleService.ready();
        GMService.instance = this;
        if (mw.SystemUtil.isClient()) {
            console.log("[GM]：模块初始化")
            new GMBasePanel();
            Event.addLocalListener(EventType.OnOffMainHUD, (isOpen: boolean) => {
                isOpen ? OpenGMUI() : CloseGMUI();
            });
        }
    }

    /**
     * 调用命令
     * @param data 
     */
    public cmd(player: mw.Player, data: GMData, param: string) {
        if (mw.SystemUtil.isClient()) {
            if (data.clientCmd) {
                data.clientCmd(player, param);
            }
            if (data.serverCmd) {
                const index = GMConfig.indexOf(data);
                this.onServerCmd(player, index, param);
            }
        } else if (mw.SystemUtil.isServer()) {
            if (data.serverCmd) {
                data.serverCmd(player, param);
            }
            if (data.clientCmd) {
                const index = GMConfig.indexOf(data);
                this.onClientCmd(player, index, param);
            }
        }

    }

    @RemoteFunction(mw.Server)
    private onServerCmd(player: mw.Player, index: number, param: string) {
        GMConfig[index].serverCmd(player, param);
    }

    @RemoteFunction(mw.Client)
    private onClientCmd(player: mw.Player, index: number, param: string) {
        GMConfig[index].clientCmd(player, param);
    }
}

//主面板
class GMBasePanel {
    private _view: GMHUD_Generate;
    dropDownList: DropdownList;

    constructor() {
        this._view = mw.UIService.show(GMHUD_Generate);
        this.dropDownList = new DropdownList({ panel: this._view.dropList, button: this._view.oKbutton, label: this._view.cmdButton }, GMItem_Generate, (ui: GMItem_Generate, data) => {
            ui.button.onClicked.add(() => {
                GMService.instance.cmd(Player.localPlayer, data, this._view.argText.text);
            });
            ui.button.text = data.label;
        }, 5);
        GMService.instance.createUI(this.dropDownList);
        this._view.cmdButton.onClicked.add(() => {
            if (this.dropDownList.selectItem) {
                GMService.instance.cmd(Player.localPlayer, this.dropDownList.selectItem.data, this._view.argText.text);
            }
        });
    }
}

type GMData = { label: string, clientCmd?: (player: mw.Player, value: string) => void, serverCmd?: (player: mw.Player, value: string) => void };

export function OpenGMUI() {
    mw.UIService.show(GMHUD_Generate);
}

export function CloseGMUI() {
    mw.UIService.hide(GMHUD_Generate);
}

class DropdownList {
    _root;
    _itemCls;
    _onCreate;
    space;
    /**
     * 不显示的缓存道具
     */
    _cache;
    /**
     * 显示的道具
     */
    _items;
    _itemSize;
    _isDropdown;
    _select;
    constructor(_root, _itemCls, _onCreate, space = 0) {
        this._root = _root;
        this._itemCls = _itemCls;
        this._onCreate = _onCreate;
        this.space = space;
        this._cache = [];
        this._items = [];
        this.addExpandEvent();
    }
    /**
     * 添加展开按钮事件
     */
    addExpandEvent() {
        this._root.button.onClicked.add(() => {
            this._isDropdown = !this._isDropdown;
            this._invalidateLayout();
        });
    }
    /**
     * 获得选择项
     */
    get selectItem() {
        return this._select;
    }
    /**
     * 添加一个选项
     * @param node
     * @param index 索引
     */
    addItem(data, index = -1) {
        let itemUI = this._cache.length > 0 ? this._cache.shift() : mw.UIService.create(this._itemCls);
        if (!itemUI.list) {
            itemUI.list = this;
            itemUI.button.touchMethod = mw.ButtonTouchMethod.PreciseTap;
            // itemUI.button.SetTouchMethod(MWGameUI.EButtonTouchMethod.PreciseTap);
            itemUI.button.onClicked.add(() => {
                this._select = itemUI;
                this._root.label.text = data.label;
                this._isDropdown = !this._isDropdown;
                this._invalidateLayout();
            });
            this._root.panel.addChild(itemUI.uiObject);
        }
        itemUI.data = data;
        this._onCreate(itemUI, data);
        itemUI.rootCanvas.autoSizeEnable = true;
        if (!this._itemSize) {
            this._itemSize = itemUI.rootCanvas.size;
            const height = this._root.panel.size.y;
            this._root.panel.size = new mw.Vector2(this._itemSize.x, height);
        }
        if (index >= 0) {
            this._items.splice(index, 0, itemUI);
        }
        else {
            this._items.push(itemUI);
        }
        this._invalidateLayout();
    }
    /**
     * 删除一个选项
     * @param node
     */
    removeItem(node) {
        const index = this._items.indexOf(node);
        if (index >= 0) {
            node.visible = false;
            this._cache.push(...this._items.splice(index, 1));
            this._invalidateLayout();
        }
    }
    /**
     * 删除一个指定索引
     * @param index
     */
    removeItemAt(index) {
        const node = this.getItem(index);
        if (node) {
            this.removeItem(node);
        }
    }
    /**
     * 获取一个选项,超出范围则返回空
     * @param index
     */
    getItem(index) {
        if (index >= 0 && index < this._items.length)
            return this._items[index];
        return null;
    }
    /**
     * 重新对齐面板
     */
    _invalidateLayout() {
        if (this._isDropdown) {
            let offset = 0;
            this._root.panel.visibility = mw.SlateVisibility.SelfHitTestInvisible;
            for (let i = 0; i < this._items.length; i++) {
                this._items[i].uiObject.position = new mw.Vector2(0, offset);
                offset += this._itemSize.y + this.space;
            }
        }
        else {
            this._root.panel.visibility = mw.SlateVisibility.Collapsed;
        }
    }
}