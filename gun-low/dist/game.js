'use strict';

class GlobalData {
}
GlobalData.languageId = -1;
GlobalData.isOpenIAA = false;
GlobalData.roomPeopleCount = 20;
GlobalData.soundVolume = 1;
/**每日刷新时间（目前是凌晨4点，格式为4:0） */
GlobalData.dailyRefreshTime = "4:0";
/**每周刷新时间（目前是每周一凌晨4点，格式为4:0） */
GlobalData.weeklyRefreshTime = "4:0";
GlobalData.maxHp = 100;
GlobalData.addDiamond = 10;
GlobalData.addCoin = 88888;
GlobalData.maxWorldRankCount = 500;

var foreign77 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GlobalData
});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/common/notice/NoticeView.ui
 * TIME: 2024.10.27-00.04.44
 */
let NoticeView_Generate = class NoticeView_Generate extends UIScript {
    get con_top_notice() {
        if (!this.con_top_notice_Internal && this.uiWidgetBase) {
            this.con_top_notice_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/con_top_notice');
        }
        return this.con_top_notice_Internal;
    }
    get con_second_notice() {
        if (!this.con_second_notice_Internal && this.uiWidgetBase) {
            this.con_second_notice_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/con_second_notice');
        }
        return this.con_second_notice_Internal;
    }
    get con_top_notice_2() {
        if (!this.con_top_notice_2_Internal && this.uiWidgetBase) {
            this.con_top_notice_2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/con_top_notice_2');
        }
        return this.con_top_notice_2_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
NoticeView_Generate = __decorate([
    UIBind('UI/common/notice/NoticeView.ui')
], NoticeView_Generate);
var NoticeView_Generate$1 = NoticeView_Generate;

var foreign87 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: NoticeView_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/common/notice/TopNoticeItem.ui
 * TIME: 2024.10.27-00.04.44
 */
let TopNoticeItem_Generate = class TopNoticeItem_Generate extends UIScript {
    get txt_context() {
        if (!this.txt_context_Internal && this.uiWidgetBase) {
            this.txt_context_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/txt_context');
        }
        return this.txt_context_Internal;
    }
    get eff() {
        if (!this.eff_Internal && this.uiWidgetBase) {
            this.eff_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/eff');
        }
        return this.eff_Internal;
    }
    get eff_line_1() {
        if (!this.eff_line_1_Internal && this.uiWidgetBase) {
            this.eff_line_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/eff_line_1');
        }
        return this.eff_line_1_Internal;
    }
    get eff_line_1_1() {
        if (!this.eff_line_1_1_Internal && this.uiWidgetBase) {
            this.eff_line_1_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/eff_line_1_1');
        }
        return this.eff_line_1_1_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.txt_context);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
TopNoticeItem_Generate = __decorate([
    UIBind('UI/common/notice/TopNoticeItem.ui')
], TopNoticeItem_Generate);
var TopNoticeItem_Generate$1 = TopNoticeItem_Generate;

var foreign89 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TopNoticeItem_Generate$1
});

/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */
const Easing = {
    Linear: {
        None: function (amount) {
            return amount;
        },
    },
    Quadratic: {
        In: function (amount) {
            return amount * amount;
        },
        Out: function (amount) {
            return amount * (2 - amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount;
            }
            return -0.5 * (--amount * (amount - 2) - 1);
        },
    },
    Cubic: {
        In: function (amount) {
            return amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        },
    },
    Quartic: {
        In: function (amount) {
            return amount * amount * amount * amount;
        },
        Out: function (amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount;
            }
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        },
    },
    Quintic: {
        In: function (amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        },
    },
    Sinusoidal: {
        In: function (amount) {
            return 1 - Math.sin(((1.0 - amount) * Math.PI) / 2);
        },
        Out: function (amount) {
            return Math.sin((amount * Math.PI) / 2);
        },
        InOut: function (amount) {
            return 0.5 * (1 - Math.sin(Math.PI * (0.5 - amount)));
        },
    },
    Exponential: {
        In: function (amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function (amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return 0.5 * Math.pow(1024, amount - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        },
    },
    Circular: {
        In: function (amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function (amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        },
    },
    Elastic: {
        In: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        },
    },
    Back: {
        In: function (amount) {
            const s = 1.70158;
            return amount === 1 ? 1 : amount * amount * ((s + 1) * amount - s);
        },
        Out: function (amount) {
            const s = 1.70158;
            return amount === 0 ? 0 : --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function (amount) {
            const s = 1.70158 * 1.525;
            if ((amount *= 2) < 1) {
                return 0.5 * (amount * amount * ((s + 1) * amount - s));
            }
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        },
    },
    Bounce: {
        In: function (amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function (amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            }
            else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            }
            else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            }
            else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
            }
        },
        InOut: function (amount) {
            if (amount < 0.5) {
                return Easing.Bounce.In(amount * 2) * 0.5;
            }
            return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        },
    },
    generatePow: function (power = 4) {
        power = power < Number.EPSILON ? Number.EPSILON : power;
        power = power > 10000 ? 10000 : power;
        return {
            In: function (amount) {
                return amount ** power;
            },
            Out: function (amount) {
                return 1 - (1 - amount) ** power;
            },
            InOut: function (amount) {
                if (amount < 0.5) {
                    return (amount * 2) ** power / 2;
                }
                return (1 - (2 - amount * 2) ** power) / 2 + 0.5;
            },
        };
    },
};
/**
 *
 */
const Interpolation = {
    Linear: function (v, k) {
        const m = v.length - 1;
        const f = m * k;
        const i = Math.floor(f);
        const fn = Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function (v, k) {
        let b = 0;
        const n = v.length - 1;
        const pw = Math.pow;
        const bn = Interpolation.Utils.Bernstein;
        for (let i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function (v, k) {
        const m = v.length - 1;
        let f = m * k;
        let i = Math.floor(f);
        const fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor((f = m * (1 + k)));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        }
        else {
            if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }
            if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function (p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function (n, i) {
            const fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            const a = [1];
            return function (n) {
                let s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (let i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        })(),
        CatmullRom: function (p0, p1, p2, p3, t) {
            const v0 = (p2 - p0) * 0.5;
            const v1 = (p3 - p1) * 0.5;
            const t2 = t * t;
            const t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        },
    },
};
class Sequence {
    static nextId() {
        return Sequence._nextId++;
    }
}
Sequence._nextId = 0;
class Group {
    constructor() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    }
    getAll() {
        return Object.keys(this._tweens).map(tweenId => {
            return this._tweens[tweenId];
        });
    }
    removeAll() {
        this._tweens = {};
    }
    add(tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
    }
    remove(tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
    }
    update(time = now(), preserve = false) {
        let tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return false;
        }
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};
            for (let i = 0; i < tweenIds.length; i++) {
                const tween = this._tweens[tweenIds[i]];
                const autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) {
                    delete this._tweens[tweenIds[i]];
                }
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
    }
}
const mainGroup = new Group();
const now = function () {
    return Date.now();
};
let Tween$1 = class Tween {
    constructor(_object, _group = mainGroup) {
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        // eslint-disable-next-line
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._goToEnd = false;
    }
    getId() {
        return this._id;
    }
    isPlaying() {
        return this._isPlaying;
    }
    isPaused() {
        return this._isPaused;
    }
    to(properties, duration) {
        // TODO? restore this, then update the 07_dynamic_to example to set fox
        // tween's to on each update. That way the behavior is opt-in (there's
        // currently no opt-out).
        // for (const prop in properties) this._valuesEnd[prop] = properties[prop]
        this._valuesEnd = Object.create(properties);
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    }
    duration(d = 1000) {
        this._duration = d;
        return this;
    }
    start(time = now()) {
        if (this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for (const property in this._valuesStartRepeat) {
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time;
        this._startTime += this._delayTime;
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
        return this;
    }
    _setupProperties(_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
        for (const property in _valuesEnd) {
            const startValue = _object[property];
            const startValueIsArray = Array.isArray(startValue);
            const propType = startValueIsArray ? 'array' : typeof startValue;
            const isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (propType === 'undefined' || propType === 'function') {
                continue;
            }
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                let endValues = _valuesEnd[property];
                if (endValues.length === 0) {
                    continue;
                }
                // handle an array of relative values
                endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                // Create a local copy of the Array with the start value at the front
                _valuesEnd[property] = [startValue].concat(endValues);
            }
            // handle the deepness of the values
            if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                // eslint-disable-next-line
                for (const prop in startValue) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property][prop] = startValue[prop];
                }
                _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
            }
            else {
                // Save the starting value, but only once.
                if (typeof _valuesStart[property] === 'undefined') {
                    _valuesStart[property] = startValue;
                }
                if (!startValueIsArray) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                }
                if (isInterpolationList) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                }
                else {
                    _valuesStartRepeat[property] = _valuesStart[property] || 0;
                }
            }
        }
    }
    stop() {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
            this._onStopCallback(this._object);
        }
        return this;
    }
    end() {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
    }
    pause(time = now()) {
        if (this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        return this;
    }
    resume(time = now()) {
        if (!this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        // eslint-disable-next-line
        this._group && this._group.add(this);
        return this;
    }
    stopChainedTweens() {
        for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
        return this;
    }
    group(group = mainGroup) {
        this._group = group;
        return this;
    }
    delay(amount = 0) {
        this._delayTime = amount;
        return this;
    }
    repeat(times = 0) {
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    }
    repeatDelay(amount) {
        this._repeatDelayTime = amount;
        return this;
    }
    yoyo(yoyo = false) {
        this._yoyo = yoyo;
        return this;
    }
    easing(easingFunction = Easing.Linear.None) {
        this._easingFunction = easingFunction;
        return this;
    }
    interpolation(interpolationFunction = Interpolation.Linear) {
        this._interpolationFunction = interpolationFunction;
        return this;
    }
    // eslint-disable-next-line
    chain(...tweens) {
        this._chainedTweens = tweens;
        return this;
    }
    onStart(callback) {
        this._onStartCallback = callback;
        return this;
    }
    onUpdate(callback) {
        this._onUpdateCallback = callback;
        return this;
    }
    onRepeat(callback) {
        this._onRepeatCallback = callback;
        return this;
    }
    onComplete(callback) {
        this._onCompleteCallback = callback;
        return this;
    }
    onStop(callback) {
        this._onStopCallback = callback;
        return this;
    }
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */
    update(time = now(), autoStart = true) {
        if (this._isPaused)
            return true;
        let property;
        let elapsed;
        const endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
            if (time > endTime)
                return false;
            if (autoStart)
                this.start(time);
        }
        this._goToEnd = false;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) {
                this._onStartCallback(this._object);
            }
            this._onStartCallbackFired = true;
        }
        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        const value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
            this._onUpdateCallback(this._object, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                // Reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                    if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                        this._valuesStartRepeat[property] =
                            // eslint-disable-next-line
                            // @ts-ignore FIXME?
                            this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        this._swapEndStartRepeatValues(property);
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                if (this._repeatDelayTime !== undefined) {
                    this._startTime = time + this._repeatDelayTime;
                }
                else {
                    this._startTime = time + this._delayTime;
                }
                if (this._onRepeatCallback) {
                    this._onRepeatCallback(this._object);
                }
                return true;
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this._object);
                }
                for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    // Make the chained tweens start exactly at the time they should,
                    // even if the `update()` method was called way past the duration of the tween
                    this._chainedTweens[i].start(this._startTime + this._duration);
                }
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    }
    _updateProperties(_object, _valuesStart, _valuesEnd, value) {
        for (const property in _valuesEnd) {
            // Don't update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) {
                continue;
            }
            const start = _valuesStart[property] || 0;
            let end = _valuesEnd[property];
            const startIsArray = Array.isArray(_object[property]);
            const endIsArray = Array.isArray(end);
            const isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                _object[property] = this._interpolationFunction(end, value);
            }
            else if (typeof end === 'object' && end) {
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._updateProperties(_object[property], start, end, value);
            }
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === 'number') {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _object[property] = start + (end - start) * value;
                }
            }
        }
    }
    _handleRelativeValue(start, end) {
        if (typeof end !== 'string') {
            return end;
        }
        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            return start + parseFloat(end);
        }
        else {
            return parseFloat(end);
        }
    }
    _swapEndStartRepeatValues(property) {
        const tmp = this._valuesStartRepeat[property];
        const endValue = this._valuesEnd[property];
        if (typeof endValue === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        }
        else {
            this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
    }
};
const nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */
const TWEEN = mainGroup;
// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
const getAll = TWEEN.getAll.bind(TWEEN);
const removeAll = TWEEN.removeAll.bind(TWEEN);
const add = TWEEN.add.bind(TWEEN);
const remove = TWEEN.remove.bind(TWEEN);
const update = TWEEN.update.bind(TWEEN);

var foreign4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    Sequence: Sequence,
    Tween: Tween$1,
    add: add,
    getAll: getAll,
    nextId: nextId,
    now: now,
    remove: remove,
    removeAll: removeAll,
    update: update
});

class UIPool {
    constructor(creator) {
        this.pool = [];
        this.creator = creator;
    }
    get count() {
        return this.pool ? this.pool.length : 0;
    }
    get firstActiveItem() {
        for (let t of this.pool) {
            if (t.uiObject.visibility == mw.SlateVisibility.Hidden)
                continue;
            return t;
        }
    }
    byIndex(index) {
        return this.pool[index];
    }
    setCreator(func) {
        this.creator = func;
    }
    // 重新激活处理
    setPoolGetFunction(func) {
        this.poolGetFunction = func;
    }
    setResetItemFunction(resetItemFunction) {
        this.resetItemFunction = resetItemFunction;
    }
    get() {
        for (let item of this.pool) {
            if (item.uiObject.visibility == mw.SlateVisibility.Hidden) {
                item.uiObject.visibility = mw.SlateVisibility.SelfHitTestInvisible;
                if (this.poolGetFunction)
                    this.poolGetFunction(item);
                return item;
            }
        }
        let result = this.creator();
        this.pool.push(result);
        return result;
    }
    giveBack(item) {
        if (this.resetItemFunction)
            this.resetItemFunction(item);
        item.uiObject.visibility = (mw.SlateVisibility.Hidden);
    }
    resetAll() {
        for (let item of this.pool) {
            this.giveBack(item);
        }
    }
    eachVisibleItem(action) {
        for (let t of this.pool) {
            if (t.uiObject.visibility == mw.SlateVisibility.Hidden)
                continue;
            action(t);
        }
    }
    eachVisibleItemWithoutFocus(action, focus) {
        for (let t of this.pool) {
            if (t.uiObject.visibility == mw.SlateVisibility.Hidden)
                continue;
            if (t == focus)
                continue;
            action(t);
        }
    }
}
class UIElementPool {
    constructor() {
        this.pool = [];
    }
    get count() {
        return this.pool ? this.pool.length : 0;
    }
    get firstActiveItem() {
        for (let t of this.pool) {
            if (t.visibility == mw.SlateVisibility.Hidden)
                continue;
            return t;
        }
    }
    setCreator(func) {
        this.creator = func;
    }
    get() {
        for (let i of this.pool) {
            if (i.visibility == mw.SlateVisibility.Hidden) {
                i.visibility = mw.SlateVisibility.SelfHitTestInvisible;
                return i;
            }
        }
        let result = this.creator();
        this.pool.push(result);
        return result;
    }
    giveBack(item) {
        item.visibility = (mw.SlateVisibility.Hidden);
    }
    resetAll() {
        for (let item of this.pool) {
            this.giveBack(item);
        }
    }
    eachVisibleItem(action) {
        for (let t of this.pool) {
            if (t.visibility == mw.SlateVisibility.Hidden)
                continue;
            action(t);
        }
    }
}
class WorldUIPool {
    constructor(creatorFunc) {
        this.pool = [];
        if (creatorFunc)
            this.creator = creatorFunc;
    }
    setCreator(func) {
        this.creator = func;
    }
    setPoolGetFunction(func) {
        this.poolGetFunction = func;
    }
    setResetItemFunction(resetItemFunction) {
        this.resetItemFunction = resetItemFunction;
    }
    eachVisibleItem(action) {
        for (let t of this.pool) {
            if (!t.stage)
                continue;
            action(t);
        }
    }
    get() {
        for (let item of this.pool) {
            if (item.stage)
                continue;
            if (this.poolGetFunction)
                this.poolGetFunction(item);
            item.uiWidget.setVisibility(mw.PropertyStatus.On);
            item.stage = true;
            return item;
        }
        let result = this.creator();
        result.stage = true;
        this.pool.push(result);
        return result;
    }
    giveBack(item) {
        if (this.resetItemFunction)
            this.resetItemFunction(item);
        item.stage = false;
        item.uiWidget.setVisibility(mw.PropertyStatus.Off);
    }
    resetAll() {
        for (let item of this.pool) {
            this.giveBack(item);
        }
    }
}

var foreign5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    UIElementPool: UIElementPool,
    UIPool: UIPool,
    WorldUIPool: WorldUIPool
});

var updater;
(function (updater) {
    // 将函数注册到onUpdate函数里
    updater.updateByFrameInterval = (interval, targetFunctionName) => {
        return function (target, prototypeKey, prototypeDescriptor) {
            // 注册interval变量
            let intervalVaryingName = `${prototypeKey.toString()}_current_interval`;
            let targetIntervalVaryingName = `${prototypeKey.toString()}_target_interval`;
            target[intervalVaryingName] = 0;
            target[targetIntervalVaryingName] = interval;
            // 将函数放到onUpdate里面
            let updateFunc = target[targetFunctionName || 'onUpdate'];
            let targetFunc = prototypeDescriptor.value;
            target[targetFunctionName || 'onUpdate'] = function (...args) {
                target[intervalVaryingName]++;
                if (target[intervalVaryingName] >= target[targetIntervalVaryingName]) {
                    targetFunc.apply(this, args);
                    target[intervalVaryingName] = 0;
                }
                updateFunc.apply(this, args);
            };
        };
    };
})(updater || (updater = {}));

var foreign6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get updater () { return updater; }
});

class Notice {
    static showDownNotice(context) {
        this.checkView();
        this.view.topNoticeComponent2.insert(notice => {
            notice.setInfo(context);
        });
    }
    static checkView() {
        if (this.view)
            return;
        this.view = mw.UIService.show(NoticeView);
    }
}
class TopNoticeComponent {
    init(targetCanvas) {
        this.visibleNotice = [];
        this.pendingQueue = [];
        this.targetCanvas = targetCanvas;
        this.noticeCanvasHeight = this.targetCanvas.size.y;
        this.insertItemTempLocation = new mw.Vector2();
        this.noticeItemPool = new UIPool(() => {
            let item = mw.UIService.create(TopNoticeItem);
            this.targetCanvas.addChild(item.uiObject);
            item.uiObject.size = new mw.Vector2(700, 60);
            return item;
        });
    }
    insert(initAction) {
        this.pendingQueue.push(initAction);
    }
    update() {
        if (this.visibleNotice.length == 0)
            return;
        for (let item of this.visibleNotice) {
            item.lifeTime += 0.03;
        }
        let first = this.visibleNotice[0];
        if (first.lifeTime >= TopNoticeComponent.NoticeItemLifeTime) {
            this.fadeoutNoticeElement();
        }
        this.noticeItemPool.eachVisibleItem(item => {
            if (item.targetHeight >= item.position.y)
                return;
            item.setLocation(item.position.x, item.position.y - TopNoticeComponent.NoticeMoveStepCount);
        });
    }
    insertPendingNotice(initAction) {
        // 超出显示长度,旧的元素隐藏
        if (this.visibleNotice.length >= TopNoticeComponent.NoticeItemMaxCount) {
            this.fadeoutNoticeElement();
        }
        // 已显示元素上推
        for (let i = 0; i < this.visibleNotice.length; i++) {
            const element = this.visibleNotice[i];
            element.targetHeight =
                (this.noticeCanvasHeight - TopNoticeComponent.NoticeItemIntervalSpace) -
                    ((this.visibleNotice.length - i) * TopNoticeComponent.NoticeItemIntervalSpace);
        }
        // 插入新的元素
        let recent = this.noticeItemPool.get();
        this.visibleNotice.push(recent);
        initAction(recent);
        recent.lifeTime = 0;
        this.insertItemTempLocation.x = (this.targetCanvas.size.x / 2) - (recent.uiObject.size.x / 2);
        this.insertItemTempLocation.y = this.targetCanvas.size.y - TopNoticeComponent.NoticeItemIntervalSpace;
        recent.setLocation(this.insertItemTempLocation.x, this.insertItemTempLocation.y);
        recent.targetHeight = this.insertItemTempLocation.y;
        recent.uiObject.renderOpacity = 0;
        // 插入动效
        new Tween({ alpha: 0 })
            .to({ alpha: 1 }, 250)
            .onUpdate(arg => {
            recent.uiObject.renderOpacity = arg.alpha;
        })
            .start();
    }
    fadeoutNoticeElement() {
        let item = this.visibleNotice.shift();
        new Tween({ alpha: 1 })
            .to({ alpha: 0 }, 250)
            .onUpdate(arg => {
            item.uiObject.renderOpacity = arg.alpha;
        })
            .onComplete(() => {
            this.noticeItemPool.giveBack(item);
        })
            .start();
    }
    checkPendingNotice() {
        if (this.pendingQueue.length < 1)
            return;
        this.insertPendingNotice(this.pendingQueue.shift());
    }
}
TopNoticeComponent.NoticeItemLifeTime = 2;
TopNoticeComponent.NoticeItemMaxCount = 3;
TopNoticeComponent.NoticeMoveStepCount = 15;
TopNoticeComponent.NoticeItemIntervalSpace = 75;
__decorate([
    updater.updateByFrameInterval(15, 'update')
], TopNoticeComponent.prototype, "checkPendingNotice", null);
class TopNoticeComponent2 {
    constructor() {
        this.isLeft = false;
        this.isRemoveing = false;
        this.needmovingNotice = [];
        this.isinsert = false;
    }
    init(targetCanvas) {
        this.visibleNotice = [];
        this.targetCanvas = targetCanvas;
        this.noticeCanvasHeight = this.targetCanvas.size.y;
        this.insertItemTempLocation = new mw.Vector2();
        this.noticeItemPool = new UIPool(() => {
            let item = mw.UIService.create(TopNoticeItem);
            this.targetCanvas.addChild(item.uiObject);
            item.uiObject.size = new mw.Vector2(item.uiObject.size.x, item.uiObject.size.y);
            return item;
        });
    }
    insert(initAction) {
        this.insertPendingNotice(initAction);
    }
    update() {
        if (this.visibleNotice.length == 0)
            return;
        for (let item of this.visibleNotice) {
            item.lifeTime += 0.03;
            if (item.lifeTime >= TopNoticeComponent2.NoticeItemLifeTime) {
                if (!this.needmovingNotice.includes(item)) {
                    this.needmovingNotice.push(item);
                }
            }
        }
        this.eachLeftRightItem();
        this.noticeItemPool.eachVisibleItem(item => {
            if (item.targetHeight >= item.position.y)
                return;
            item.setLocation(item.position.x, item.position.y - TopNoticeComponent2.NoticeMoveStepCount);
        });
    }
    insertPendingNotice(initAction) {
        this.isinsert = true;
        // 超出显示长度,旧的元素隐藏
        if (this.visibleNotice.length >= TopNoticeComponent2.NoticeItemMaxCount) {
            //限制最多显示10个
            for (let index = 0; index < this.visibleNotice.length; index++) {
                let element = this.visibleNotice[index];
                if (index <= (this.visibleNotice.length - TopNoticeComponent2.NoticeItemMaxCount)) {
                    element.lifeTime += TopNoticeComponent2.NoticeItemLifeTime;
                }
            }
        }
        // 信息越多的时候，消失速度再快一点 （ 3个 1-3 每个加 0.3  5个每个加0.5  10个每个加1）
        if (this.visibleNotice.length >= TopNoticeComponent2.NoticeSameItemMaxCount) {
            let count = this.visibleNotice.length;
            for (let index = 0; index < count; index++) {
                let element = this.visibleNotice[index];
                element.lifeTime += count * TopNoticeComponent2.everydiveidetime;
            }
        }
        this.eachLeftRightItem();
        // 已显示元素
        for (let i = 0; i < this.visibleNotice.length; i++) {
            const element = this.visibleNotice[i];
            element.targetHeight = (TopNoticeComponent2.NoticeItemIntervalSpace) + ((i) * TopNoticeComponent2.NoticeItemIntervalSpace);
            element.setLocation(this.insertItemTempLocation.x, element.targetHeight);
        }
        // 插入新的元素
        let recent = this.noticeItemPool.get();
        this.visibleNotice.push(recent);
        initAction(recent);
        recent.lifeTime = 0;
        this.insertItemTempLocation.x = (this.targetCanvas.size.x / 2) - (recent.uiObject.size.x / 2);
        let targetHeight = (TopNoticeComponent2.NoticeItemIntervalSpace) + ((this.visibleNotice.length - 1) * TopNoticeComponent2.NoticeItemIntervalSpace);
        this.insertItemTempLocation.y = targetHeight;
        recent.targetHeight = this.insertItemTempLocation.y;
        recent.uiObject.renderOpacity = 0;
        recent.setLocation(this.insertItemTempLocation.x, -500);
        recent.uiObject.renderOpacity = 1;
        new Tween({ posy: -500 })
            .to({ posy: this.insertItemTempLocation.y }, 500)
            .onUpdate(arg => {
            recent.setLocation(this.insertItemTempLocation.x, arg.posy);
        })
            .start()
            .easing(Easing.Linear.None);
        this.isinsert = false;
    }
    eachLeftRightItem() {
        if (this.needmovingNotice.length <= 0) {
            return;
        }
        if (this.isRemoveing) {
            return;
        }
        this.isRemoveing = true;
        //计时
        new Tween({ posX: 0 })
            .to({ posX: 1 }, 500)
            .onComplete(() => {
            this.isRemoveing = false;
        }).start();
        // 已显示元素位置 
        let arr = this.visibleNotice.filter(e => !this.needmovingNotice.includes(e));
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            element.targetHeight = (TopNoticeComponent2.NoticeItemIntervalSpace) + ((i) * TopNoticeComponent2.NoticeItemIntervalSpace);
            new Tween({ posy: element.uiObject.position.y })
                .to({ posy: element.targetHeight }, 500)
                .onUpdate(arg => {
                element.setLocation(this.insertItemTempLocation.x, arg.posy);
            })
                .onComplete(() => {
            })
                .easing(Easing.Linear.None)
                .start();
        }
        // 插入动效
        while (this.needmovingNotice.length > 0) {
            let item = this.needmovingNotice.shift();
            let pos = item.uiObject.position;
            this.isLeft = !this.isLeft;
            let target = new mw.Vector(0, pos.y);
            new Tween({ posX: 0 })
                .to({ posX: this.isLeft ? 3000 : -3000 }, 250)
                .onUpdate(arg => {
                target.x = arg.posX;
                item.uiObject.position = target;
            })
                .onComplete(() => {
                this.noticeItemPool.giveBack(item);
            })
                .easing(Easing.Linear.None)
                .start();
            let index = this.visibleNotice.findIndex(ele => item);
            if (index != -1) {
                this.visibleNotice.splice(index, 1);
            }
        }
    }
}
//Notice提示存在时间
TopNoticeComponent2.NoticeItemLifeTime = 4;
//Notice提示最多存在数量
TopNoticeComponent2.NoticeItemMaxCount = 10;
//Notice提示ui垂直间隔
TopNoticeComponent2.NoticeItemIntervalSpace = 70;
//Notice提示同类型最多存在数量
TopNoticeComponent2.NoticeSameItemMaxCount = 3;
//Notice提示移动步长
TopNoticeComponent2.NoticeMoveStepCount = 15;
//Notice提示 间隔时间
TopNoticeComponent2.everydiveidetime = 0;
class NoticeView extends NoticeView_Generate$1 {
    onStart() {
        this.topNoticeComponent = new TopNoticeComponent();
        this.topNoticeComponent.init(this.con_top_notice);
        this.topNoticeComponent2 = new TopNoticeComponent2();
        this.topNoticeComponent2.init(this.con_top_notice_2);
        this.canUpdate = true;
        this.layer = mw.UILayerTop;
    }
    onUpdate() {
        this.topNoticeComponent.update();
        this.topNoticeComponent2.update();
    }
}
class TopNoticeItem extends TopNoticeItem_Generate$1 {
    setLocation(x, y) {
        if (!this.position) {
            this.position = new mw.Vector2(x, y);
        }
        else {
            this.position.x = x;
            this.position.y = y;
        }
        this.uiObject.position = this.position;
    }
    setInfo(context) {
        this.txt_context.text = context;
    }
}

var foreign3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Notice: Notice
});

class Utils {
    //#region 兼容027之前的API
    /**矩形范围检测 */
    static modifyboxOverlapInLevel(StartLocation, EndLocation, Width, Height, debug, IgnoreObjectsGuid, IgnoreByKind, Source) {
        let halfSize = new Vector(Width / 2, Height / 2);
        let orientation = Vector.subtract(EndLocation, StartLocation).toRotation();
        let results = QueryUtil.boxTrace(StartLocation, EndLocation, halfSize, orientation, true, debug, IgnoreObjectsGuid, IgnoreByKind, Source);
        let objResults = new Array();
        for (let i = 0; i < results.length; i++) {
            let obj = results[i].gameObject;
            if (!obj)
                continue;
            if (objResults.indexOf(obj) == -1)
                objResults.push(obj);
        }
        return objResults;
    }
    /**判断是不是Character */
    static isCharacter(obj) {
        if ((obj instanceof Character) && obj.player != null) {
            return true;
        }
        return false;
    }
    /**在一个位置播放特效 */
    static rpcPlayEffectAtLocation(source, location, loopCount, rotation, scale) {
        let duration = undefined;
        if (loopCount < 0) {
            duration = -loopCount;
            loopCount = undefined;
        }
        return EffectService.playAtPosition(source, location, {
            loopCount: loopCount,
            duration: duration,
            rotation: rotation,
            scale: scale,
        });
    }
    static async asyncRpcGetData(key) {
        let value = await DataStorage.asyncGetData(key);
        return value.data;
    }
    //#endregion
    static randomInt(min, max) {
        if (min > max) {
            let temp = min;
            min = max;
            max = temp;
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static async asyncDownloadAsset(InAssetId) {
        if (!mw.AssetUtil.assetLoaded(InAssetId)) {
            await mw.AssetUtil.asyncDownloadAsset(InAssetId);
        }
    }
    static setWidgetVisibility(ui, visibility) {
        if (!ui)
            return;
        if (ui.visibility != visibility)
            ui.visibility = visibility;
    }
    static setButtonEnable(button, enable) {
        if (button.enable != enable)
            button.enable = enable;
    }
    static setGameObjectVisibility(model, isVisibility) {
        if (model.getVisibility() != isVisibility)
            model.setVisibility(isVisibility);
    }
    static randomOneDifferentId(guids, lastId) {
        let newGuids = [];
        newGuids = guids.filter(v => v != lastId);
        lastId = newGuids[this.randomInt(0, newGuids.length - 1)];
        return lastId;
    }
    static setImageByAssetIconData(image, icon) {
        if (this.assetIconDataMap.has(icon)) {
            image.setImageByAssetIconData(this.assetIconDataMap.get(icon));
        }
        else {
            mw.assetIDChangeIconUrlRequest([icon]).then(() => {
                try {
                    let assetIconData = mw.getAssetIconDataByAssetID(icon);
                    image.setImageByAssetIconData(assetIconData);
                    this.assetIconDataMap.set(icon, assetIconData);
                }
                catch (error) { }
            });
        }
    }
    static openUITween(mCanvas, onStart, onComplete) {
        let tmpX = 0;
        let tmpY = 0;
        if (this.randomInt(0, 1) == 0) {
            if (this.randomInt(0, 1)) {
                tmpX = mCanvas.size.x;
            }
            else {
                tmpX = -mCanvas.size.x;
            }
            tmpY = this.randomInt(-mCanvas.size.y, mCanvas.size.y);
        }
        else {
            tmpX = this.randomInt(-mCanvas.size.x, mCanvas.size.x);
            if (this.randomInt(0, 1)) {
                tmpY = mCanvas.size.y;
            }
            else {
                tmpY = -mCanvas.size.y;
            }
        }
        new mw.Tween({ x: tmpX, y: tmpY })
            .to({ x: 0, y: 0 }, 0.5 * 1000)
            .onStart(() => {
            mCanvas.position = new mw.Vector2(tmpX, tmpY);
            if (onStart)
                onStart();
        })
            .onUpdate((v) => {
            mCanvas.position = new mw.Vector2(v.x, v.y);
        })
            .easing(cubicBezier(.75, 2.9, .46, -0.18))
            .onComplete(() => {
            mCanvas.position = mw.Vector2.zero;
            if (onComplete)
                onComplete();
        })
            .start();
        let scaleType = this.randomInt(0, 2);
        new mw.Tween({ x: 0, y: 0 })
            .to({ x: 1, y: 1 }, 0.5 * 1000)
            .onStart(() => {
            switch (scaleType) {
                case 0:
                    mCanvas.renderScale = new mw.Vector2(1, 0);
                    break;
                case 1:
                    mCanvas.renderScale = new mw.Vector2(0, 1);
                    break;
                case 2:
                    mCanvas.renderScale = new mw.Vector2(1, 1);
                    break;
            }
        })
            .onUpdate((v) => {
            switch (scaleType) {
                case 0:
                    mCanvas.renderScale = new mw.Vector2(1, v.y);
                    break;
                case 1:
                    mCanvas.renderScale = new mw.Vector2(v.x, 1);
                    break;
                case 2:
                    mCanvas.renderScale = new mw.Vector2(v.x, v.y);
                    break;
            }
        })
            .onComplete(() => {
            mCanvas.renderScale = mw.Vector2.one;
        })
            .start();
    }
    static closeUITween(mCanvas, onStart, onComplete) {
        let scaleType = this.randomInt(0, 2);
        new mw.Tween({ x: 1, y: 1 })
            .to({ x: 0, y: 0 }, 0.5 * 1000)
            .onStart(() => {
            if (onStart)
                onStart();
            mCanvas.renderScale = new mw.Vector2(1, 1);
        })
            .onUpdate((v) => {
            switch (scaleType) {
                case 0:
                    mCanvas.renderScale = new mw.Vector2(1, v.y);
                    break;
                case 1:
                    mCanvas.renderScale = new mw.Vector2(v.x, 1);
                    break;
                case 2:
                    mCanvas.renderScale = new mw.Vector2(v.x, v.y);
                    break;
            }
        })
            .onComplete(() => {
            if (onComplete)
                onComplete();
            switch (scaleType) {
                case 0:
                    mCanvas.renderScale = new mw.Vector2(1, 0);
                    break;
                case 1:
                    mCanvas.renderScale = new mw.Vector2(0, 1);
                    break;
                case 2:
                    mCanvas.renderScale = new mw.Vector2(0, 0);
                    break;
            }
        })
            .start();
    }
    /**返回当前时间（例 13：15）。 */
    static getCurrentTime() {
        let date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }
    static getWhatDay() {
        let whatDay = "7123456".charAt(new Date().getDay());
        return whatDay;
    }
    static weekNumChangeToCN(num) {
        return "一二三四五六日".charAt(num - 1);
    }
    /**返回上次登录是周几 */
    static getLastDay(day) {
        let whatDay = "7123456".charAt(day);
        return whatDay;
    }
    /**判断是否同一周 */
    static iSameWeek(date1, date2) {
        let dt1 = new Date();
        dt1.setTime(date1);
        let dt2 = new Date();
        dt2.setTime(date2);
        let md1 = this.tmonday(dt1);
        let md2 = this.tmonday(dt2);
        return md1 === md2;
    }
    static tmonday(dtm) {
        let dte = new Date(dtm);
        let day = dte.getDay();
        let dty = dte.getDate();
        if (day === 0) {
            day = 7;
        }
        dte.setDate(dty - day + 1);
        return dte.getFullYear() + '-' + dte.getMonth() + '-' + dte.getDate();
    }
    static showRewardAd(callback) {
        if (callback)
            callback();
        return;
    }
    static showAd(adsType, callback) {
        AdsService.showAd(adsType, isSuccess => {
            if (isSuccess) {
                callback(AdsState.Success);
                callback(AdsState.Close);
                callback(AdsState.Reward);
            }
            else {
                callback(AdsState.Fail);
            }
        });
    }
    static randomColor() {
        let colors = [mw.LinearColor.red, mw.LinearColor.green, mw.LinearColor.blue,
            mw.LinearColor.yellow, new mw.LinearColor(1, 0, 1, 1), new mw.LinearColor(0, 1, 1, 1), mw.LinearColor.white];
        let fontColor = colors[this.randomInt(0, colors.length - 1)];
        let outlineColor = colors[this.randomInt(0, colors.length - 1)];
        while (fontColor.a == outlineColor.a && fontColor.r == outlineColor.r
            && fontColor.g == outlineColor.g && fontColor.b == outlineColor.b) {
            outlineColor = colors[this.randomInt(0, colors.length - 1)];
            // Console.error("颜色重复");
        }
        return [fontColor, outlineColor];
    }
    static randomNpcName() {
        return this.npcNames[this.randomInt(0, this.npcNames.length - 1)];
    }
    /**根据数字获取汉字*/
    static numChangeToCN(num) {
        if (this.tens[num]) {
            return this.tens[num];
        }
        else if (num > 10 && num < 20) {
            let numStr = num.toString();
            let n = numStr.substring(1, 2);
            let result = this.digitalUnits[1] + this.tens[n];
            return result;
        }
        else if (num > 10) {
            let result = "";
            let numStr = num.toString();
            for (var i = 0; i < numStr.length; ++i) {
                let n = numStr.substring(i, i + 1);
                let m = numStr.length - i - 1;
                result += this.tens[n] + this.digitalUnits[m];
            }
            return result;
        }
        else
            return "零";
    }
    static randomRevivalPoint(isRedTeam) {
        if (isRedTeam) {
            return this.redTeamRevivalPoint[this.randomInt(0, this.redTeamRevivalPoint.length - 1)];
        }
        else {
            return this.blueTeamRevivalPoint[this.randomInt(0, this.blueTeamRevivalPoint.length - 1)];
        }
    }
    static setOutLine(player, isTeamMate, width = 0.5) {
        player.character.setOutline(true, isTeamMate ? mw.LinearColor.blue : mw.LinearColor.red, width);
    }
    static playBirthEffect(player) {
        EffectService.playOnGameObject("142750", player.character, { slotType: mw.HumanoidSlotType.Root });
    }
    static playBirthSound(player) {
        SoundService.play3DSound("169179", player.character, 1, GlobalData.soundVolume);
    }
    static stringToVector(str) {
        let arr = str.split(",");
        return new mw.Vector(parseFloat(arr[0]), parseFloat(arr[1]), parseFloat(arr[2]));
    }
    static vectorToString(vector) {
        return vector.x + "," + vector.y + "," + vector.z;
    }
    static arrToString(arr) {
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            str += arr[i] + ",";
        }
        return str;
    }
    static stringToArr(str) {
        let arr = str.split(",");
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(parseInt(arr[i]));
        }
        return result;
    }
    static setProjectTarget(targetGo) {
        this.targetGos.push(targetGo);
    }
    static getRecentTargetLoc(startPosition, startDirection) {
        let minDistance = Number.MAX_VALUE;
        let retPosition = null;
        if (!this.targetGos || this.targetGos.length == 0)
            return retPosition;
        for (let i = 0; i < this.targetGos.length; ++i) {
            let targetLoc = this.targetGos[i].worldTransform.position;
            if (this.isTargetInSight(targetLoc, startPosition, startDirection)) {
                let distance = mw.Vector.subtract(targetLoc, startPosition).length;
                if (distance < minDistance) {
                    minDistance = distance;
                    retPosition = this.targetGos[i].worldTransform.position;
                }
            }
        }
        return retPosition;
    }
    static getRecentPlayerLoc(gameObjectId, startPosition, startDirection) {
        // return null;//TODO:WFZ 2021-07-07 不对玩家进行追踪
        let minDistance = Number.MAX_VALUE;
        let retPosition = null;
        let allPlayers = Player.getAllPlayers();
        for (let i = 0; i < allPlayers.length; ++i) {
            if (allPlayers[i].character.gameObjectId == gameObjectId)
                continue;
            let targetLoc = allPlayers[i].character.worldTransform.position;
            if (this.isTargetInSight(targetLoc, startPosition, startDirection)) {
                let distance = mw.Vector.subtract(targetLoc, startPosition).length;
                if (distance < minDistance) {
                    minDistance = distance;
                    retPosition = allPlayers[i].character.worldTransform.position;
                }
            }
        }
        return retPosition;
    }
    /**判断目标是否在视野范围内 */
    static isTargetInSight(targetLoc, startPosition, startDriection) {
        let targetDir = mw.Vector.subtract(targetLoc, startPosition);
        let dot = mw.Vector.dot(targetDir, startDriection);
        let angle = Math.acos(dot / (targetDir.length * startDriection.length));
        let targetAngle = angle * 180 / Math.PI;
        let targetDistance = targetDir.length;
        return (targetDistance <= 5000) && (targetAngle <= 45);
    }
    /**得到弧形追踪路径上的点 */
    static getArcTracingPoints(startPosition, endPosition) {
        let pointCount = Math.floor(mw.Vector.subtract(startPosition, endPosition).length / 100);
        let middlePosition = this.getRandomPosition(startPosition, endPosition);
        let retPositions = this.getCurvePointsInNum([startPosition, middlePosition, endPosition], pointCount);
        return retPositions;
    }
    /**根据两个三维空间坐标随机得到一个中点球上的坐标 */
    static getRandomPosition(startPosition, endPosition) {
        let midPosition = mw.Vector.add(startPosition, endPosition).multiply(0.5);
        let distance = mw.Vector.subtract(startPosition, endPosition).length;
        let x = this.randomInt(0, distance / 2);
        x = this.randomInt(0, 1) == 0 ? -x : x;
        let y = this.randomInt(0, distance / 2);
        y = this.randomInt(0, 1) == 0 ? -y : y;
        let z = this.randomInt(0, distance / 3);
        return mw.Vector.add(midPosition, new mw.Vector(x, y, z));
    }
    /**
    * 获取贝塞尔曲线的点的集合
    * @param points 点的集合, 至少包含起点和终点
    * @param num 想要生成多少点
    * @returns
    */
    static getCurvePointsInNum(points, num) {
        let result = new Array();
        for (let i = 0; i < num; ++i) {
            let t = i / (num - 1);
            let point = this.getKeyPoint(points, t);
            result.push(point);
        }
        return result;
    }
    static getKeyPoint(points, t) {
        if (points.length > 1) {
            let dirs = new Array();
            for (let i = 0; i < points.length - 1; i++) {
                dirs.push(new mw.Vector(points[i + 1].x - points[i].x, points[i + 1].y - points[i].y, points[i + 1].z - points[i].z));
            }
            let points2 = new Array();
            for (let j = 0; j < dirs.length; j++) {
                points2.push(new mw.Vector(points[j].x + dirs[j].x * t, points[j].y + dirs[j].y * t, points[j].z + dirs[j].z * t));
            }
            return this.getKeyPoint(points2, t);
        }
        else {
            return new mw.Vector(points[0].x, points[0].y, points[0].z);
        }
    }
    static getPathIndex(length) {
        if (this.pathIndex <= length - 1)
            return this.pathIndex++;
        if (this.pathIndex >= length) {
            this.pathIndex = 0;
            return this.pathIndex;
        }
        return this.randomInt(0, length - 1);
    }
}
Utils.assetIconDataMap = new Map();
Utils.npcNames = ["张吉惟", "林国瑞", "林玫书", "林雅南", "江奕云", "刘柏宏", "阮建安", "林子帆", "夏志豪", "吉茹定", "李中冰", "谢彦文", "傅智翔", "洪振霞", "刘姿婷", "荣姿康", "吕致盈", "方一强", "黎芸贵", "郑伊雯", "雷进宝", "吴美隆", "吴心真", "王美珠", "郭芳天", "李雅惠", "陈文婷", "曹敏侑", "王依婷", "陈婉璇", "吴美玉", "蔡依婷", "郑昌梦", "林家纶", "黄丽昆", "李育泉", "黄芸欢", "吴韵如", "李肇芬", "卢木仲", "李成白", "方兆玉", "刘翊惠", "丁汉臻", "吴佳瑞", "舒绿珮", "周白芷", "张姿妤", "张虹伦", "周琼玫", "倪怡芳", "郭贵妃", "杨佩芳", "黄盛玫", "郑丽青", "许智云", "张孟涵", "李小爱", "王恩龙", "朱政廷", "邓诗涵", "陈政倩", "吴俊伯", "阮馨学", "翁惠珠", "吴思翰", "林佩玲", "邓海来", "陈翊依", "李建智", "武淑芬", "金雅琪", "赖怡宜", "黄育霖", "张仪湖", "王俊民", "张诗刚", "林慧颖", "沈俊君", "陈淑妤", "李姿伶", "高咏钰", "黄彦宜", "周孟儒", "潘欣臻", "李祯韵", "叶洁启", "梁哲宇", "黄晓萍", "杨雅萍", "卢志铭", "张茂以", "林婉婷", "蔡宜芸", "林珮瑜", "黄柏仪", "周逸珮", "夏雅惠", "王采珮", "林孟霖", "林竹水", "王怡乐", "王爱乐", "金佳蓉", "韩健毓", "李士杰", "陈董珍", "苏姿婷", "张政霖", "李志宏", "陈素达", "陈虹荣", "何美玲", "李仪琳", "张俞幸", "黄秋萍", "潘吉维"];
Utils.tens = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
Utils.digitalUnits = ["", '十', '百', '千', '万', '亿', '十', '百', '千'];
Utils.redTeamRevivalPoint = [
    new mw.Vector(-16190, -38170, -1049 + 300),
    new mw.Vector(-16137, -37609, -1049 + 300),
    new mw.Vector(-16195, -38624, -1049 + 300),
    new mw.Vector(-16644, -38559, -1049 + 300),
    new mw.Vector(-16607, -37942, -1049 + 300)
];
Utils.blueTeamRevivalPoint = [
    new mw.Vector(-11862, -51435, -1049 + 300),
    new mw.Vector(-11305, -51543, -1049 + 300),
    new mw.Vector(-10932, -51223, -1049 + 300),
    new mw.Vector(-12029, -50989, -1049 + 300),
    new mw.Vector(-11451, -51048, -1049 + 300)
];
Utils.targetGos = [];
Utils.pathIndex = 0;
function cubicBezier(p1x, p1y, p2x, p2y) {
    const ZERO_LIMIT = 1e-6;
    const ax = 3 * p1x - 3 * p2x + 1;
    const bx = 3 * p2x - 6 * p1x;
    const cx = 3 * p1x;
    const ay = 3 * p1y - 3 * p2y + 1;
    const by = 3 * p2y - 6 * p1y;
    const cy = 3 * p1y;
    function sampleCurveDerivativeX(t) {
        return (3 * ax * t + 2 * bx) * t + cx;
    }
    function sampleCurveX(t) {
        return ((ax * t + bx) * t + cx) * t;
    }
    function sampleCurveY(t) {
        return ((ay * t + by) * t + cy) * t;
    }
    function solveCurveX(x) {
        let t2 = x;
        let derivative;
        let x2;
        for (let i = 0; i < 8; i++) {
            x2 = sampleCurveX(t2) - x;
            if (Math.abs(x2) < ZERO_LIMIT) {
                return t2;
            }
            derivative = sampleCurveDerivativeX(t2);
            if (Math.abs(derivative) < ZERO_LIMIT) {
                break;
            }
            t2 -= x2 / derivative;
        }
        let t1 = 1;
        let t0 = 0;
        t2 = x;
        while (t1 > t0) {
            x2 = sampleCurveX(t2) - x;
            if (Math.abs(x2) < ZERO_LIMIT) {
                return t2;
            }
            if (x2 > 0) {
                t1 = t2;
            }
            else {
                t0 = t2;
            }
            t2 = (t1 + t0) / 2;
        }
        return t2;
    }
    function solve(x) {
        return sampleCurveY(solveCurveX(x));
    }
    return solve;
}

var foreign83 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    cubicBezier: cubicBezier,
    default: Utils
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/common/ConfirmPanel.ui
 * TIME: 2024.10.27-00.04.44
 */
let ConfirmPanel_Generate = class ConfirmPanel_Generate extends UIScript {
    get mTitleTextBlock() {
        if (!this.mTitleTextBlock_Internal && this.uiWidgetBase) {
            this.mTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mTitleTextBlock');
        }
        return this.mTitleTextBlock_Internal;
    }
    get mContentTextBlock() {
        if (!this.mContentTextBlock_Internal && this.uiWidgetBase) {
            this.mContentTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mContentTextBlock');
        }
        return this.mContentTextBlock_Internal;
    }
    get mSureButton() {
        if (!this.mSureButton_Internal && this.uiWidgetBase) {
            this.mSureButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mSureButton');
        }
        return this.mSureButton_Internal;
    }
    get mSureTextBlock() {
        if (!this.mSureTextBlock_Internal && this.uiWidgetBase) {
            this.mSureTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mSureButton/mSureTextBlock');
        }
        return this.mSureTextBlock_Internal;
    }
    get mCancleButton() {
        if (!this.mCancleButton_Internal && this.uiWidgetBase) {
            this.mCancleButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mCancleButton');
        }
        return this.mCancleButton_Internal;
    }
    get mCancleTextBlock() {
        if (!this.mCancleTextBlock_Internal && this.uiWidgetBase) {
            this.mCancleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mCancleButton/mCancleTextBlock');
        }
        return this.mCancleTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mSureButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mSureButton");
        });
        this.mSureButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCancleButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCancleButton");
        });
        this.mCancleButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mTitleTextBlock);
        this.initLanguage(this.mContentTextBlock);
        this.initLanguage(this.mSureTextBlock);
        this.initLanguage(this.mCancleTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
ConfirmPanel_Generate = __decorate([
    UIBind('UI/common/ConfirmPanel.ui')
], ConfirmPanel_Generate);
var ConfirmPanel_Generate$1 = ConfirmPanel_Generate;

var foreign84 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ConfirmPanel_Generate$1
});

class ConfirmPanel extends ConfirmPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.callback = null;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButton();
        this.initTextBlock();
    }
    initTextBlock() {
        if (GlobalData.languageId == 0) {
            this.mCancleTextBlock.fontSize = 40;
        }
    }
    bindButton() {
        this.mSureButton.onClicked.add(() => {
            this.hide();
            if (this.callback)
                this.callback();
            // this.callback = null;
        });
        this.mCancleButton.onClicked.add(() => {
            this.hideTween();
            // this.callback = null;
        });
    }
    confirmTips(callback, contentText, yesText, noText, titleText) {
        this.mSureTextBlock.text = yesText;
        this.mCancleTextBlock.text = noText;
        this.mTitleTextBlock.text = titleText;
        this.mContentTextBlock.text = contentText;
        this.callback = callback;
        this.show();
    }
    onShow(...params) {
        Utils.openUITween(this.rootCanvas, null, null);
    }
    /**
     * 隐藏缓动
     */
    hideTween() {
        Utils.closeUITween(this.rootCanvas, null, () => {
            this.hide();
        });
    }
}

var foreign1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ConfirmPanel
});

//配置的基类
class ConfigBase {
    constructor(excelData) {
        this.ELEMENTARR = [];
        this.ELEMENTMAP = new Map();
        this.KEYMAP = new Map();
        let headerLine = 2; //表头的行数
        this.ELEMENTARR = new Array(excelData.length - headerLine);
        for (let i = 0; i < this.ELEMENTARR.length; i++) {
            this.ELEMENTARR[i] = {};
        }
        let column = excelData[0].length; //列数
        for (let j = 0; j < column; j++) { //遍历各列
            let name = excelData[0][j];
            let tags = excelData[1][j].split('|');
            if (tags.includes(ConfigBase.TAG_CHILDLANGUAGE))
                continue;
            let jOffect = 0; //列偏移量
            if (tags.includes(ConfigBase.TAG_MAINLANGUAGE)) {
                let index = j + ConfigBase.languageIndex;
                let targetTags = excelData[1][index].split('|');
                if (index < column && targetTags.includes(ConfigBase.TAG_CHILDLANGUAGE)) {
                    jOffect = ConfigBase.languageIndex;
                }
            }
            let hasTag_Key = tags.includes(ConfigBase.TAG_KEY);
            let hasTag_Language = tags.includes(ConfigBase.TAG_LANGUAGE);
            for (let i = 0; i < this.ELEMENTARR.length; i++) {
                let ele = this.ELEMENTARR[i];
                let value = excelData[i + headerLine][j + jOffect];
                if (j == 0) { //ID
                    this.ELEMENTMAP.set(value, ele);
                }
                else {
                    if (hasTag_Key) {
                        this.KEYMAP.set(value, excelData[i + headerLine][0]);
                    }
                    if (hasTag_Language) {
                        if (ConfigBase.getLanguage != null) {
                            value = ConfigBase.getLanguage(value);
                        }
                        else {
                            value = "unknow";
                        }
                    }
                }
                ele[name] = value;
            }
        }
    }
    //设置获取语言的方法
    static initLanguage(languageIndex, getLanguageFun) {
        ConfigBase.languageIndex = languageIndex;
        ConfigBase.getLanguage = getLanguageFun;
        if (ConfigBase.languageIndex < 0) {
            ConfigBase.languageIndex = ConfigBase.getSystemLanguageIndex();
        }
    }
    //获取系统语言索引
    static getSystemLanguageIndex() {
        let language = LocaleUtil.getDefaultLocale().toString().toLowerCase();
        if (!!language.match("en")) {
            return 0;
        }
        if (!!language.match("zh")) {
            return 1;
        }
        if (!!language.match("ja")) {
            return 2;
        }
        if (!!language.match("de")) {
            return 3;
        }
        return 0;
    }
    /**
    * 根据id获取一个元素
    * @param id id|key
    * @returns Element
    */
    getElement(id) {
        let ele = this.ELEMENTMAP.get(Number(id)) || this.ELEMENTMAP.get(this.KEYMAP.get(id));
        if (ele == null) {
            console.warn(this.constructor.name + "配置表中找不到元素 id:" + id);
        }
        return ele;
    }
    /**
    * 根据字段名和字段值查找一个元素
    * @param fieldName 字段名
    * @param fieldValue 字段值
    * @returns 第一个找到的Element
    */
    findElement(fieldName, fieldValue) {
        for (let i = 0; i < this.ELEMENTARR.length; i++) {
            if (this.ELEMENTARR[i][fieldName] == fieldValue) {
                return this.ELEMENTARR[i];
            }
        }
    }
    /**
    * 根据字段名和字段值查找一组元素
    * @param fieldName 字段名
    * @param fieldValue 字段值
    * @returns 所有符合要求的Element
    */
    findElements(fieldName, fieldValue) {
        let arr = [];
        for (let i = 0; i < this.ELEMENTARR.length; i++) {
            if (this.ELEMENTARR[i][fieldName] == fieldValue) {
                arr.push(this.ELEMENTARR[i]);
            }
        }
        return arr;
    }
    /**获取所有元素*/
    getAllElement() {
        return this.ELEMENTARR;
    }
}
ConfigBase.TAG_KEY = 'Key'; //读取键(除了ID之外的别名，带key的字段必须是string类型)
ConfigBase.TAG_LANGUAGE = 'Language'; //关联语言表的id或key(如果有这个tag，导表工具要把数据生成为string类型，因为会自动进行值的转换)
ConfigBase.TAG_MAINLANGUAGE = 'MainLanguage'; //主语言tag
ConfigBase.TAG_CHILDLANGUAGE = 'ChildLanguage'; //子语言tag
ConfigBase.languageIndex = 0;

var foreign8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ConfigBase: ConfigBase
});

const EXCELDATA$9 = [["ID", "GUNNAME", "GUNPREFAB", "GUNICON", "GUNICON_M", "GUNLOC", "GUNSCALE", "IATURNICON", "PRICETYPE", "PRICE", "FIREINTERVAL", "BULLETCOUNT", "HURT"], ["", "", "", "", "", "", "", "", "", "", "", "", ""], [1, "水枪", "587777AD4056DC3AB465FBA7D3F5F7BA", null, "166941", new mw.Vector(0, 0, 0), new mw.Vector(1, 2, 1), 0, 1, [1, 15888], "0.2", 30, 25], [2, "泡泡枪", "0D543D5346C331F41DA890A5E6DD3DB5", null, "155696", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [1, 15888], "0.2", 30, 25], [3, "霰弹枪", "E3E0C2994D3518540DBB6D8C00C8AB83", null, "226214", new mw.Vector(0, 0, 0), new mw.Vector(2, 2, 2), 0, 1, [1, 15888], "0.15", 30, 25], [4, "金枪鱼", "5181250F44DF914A714B668F99177E3A", null, "138213", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [1, 15888], "0.15", 30, 25], [5, "脉冲枪", "1CD6AEAB4602DF140ACE93BD49D5CA19", null, "153110", new mw.Vector(0, 0, 0), new mw.Vector(2, 2.5, 2), 0, 1, [1, 15888], "0.1", 35, 25], [6, "喷火枪", "A469CCC84AAA873815243BB25439707C", null, "226213", new mw.Vector(0, 0, 0), new mw.Vector(2, 2, 2), 0, 1, [1, 15888], "0.1", 35, 25], [7, "散弹喷枪", "68E812DC47B714F9A2BB2ABE18304C5B", null, "155702", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [2, 28888], "0.1", 35, 25], [8, "霰弹枪枪身", "BA1BDC034FCDE8574CBBAA8C4831A950", null, "318664", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [2, 28888], "0.1", 40, 25], [9, "火箭发射器", "FCFE18BE440FAEBD5AB999A222F10AA9", null, "226826", new mw.Vector(0, 0, 0), new mw.Vector(1.5, 1, 1), 0, 1, [2, 28888], "0.2", 100, 25], [10, "激光幽灵枪", "23240FEE4F3BD25DE8EA6DBE525B3A20", null, "122716", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 1, 1, [3, 38888], "0.3", 40, 50], [11, "烟花枪", "A830458640D6EA21FB7AEA8F7E029CB7", null, "122726", new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [3, 38888], "0.3", 40, 50], [12, "激光烈火枪", "0C7F278C4254F90F69614086DCA0B906", null, "95676", new mw.Vector(-30, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [4, 48888], "0.3", 40, 50], [13, "激光冰雷枪", "29CD5E6145D1B05590E887A050E0D3C8", null, "122720", new mw.Vector(-30, 0, 0), new mw.Vector(1, 1, 1), 0, 1, [4, 48888], "0.3", 40, 50], [14, "尖叫鸡", "015C826546EBC60F95EF399D16523B78", null, "20799", new mw.Vector(0, 0, 0), new mw.Vector(2, 2, 3), 1, 1, [5, 58888], "1", 10, 100]];
class GUNConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$9);
    }
}

var foreign10 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GUNConfig: GUNConfig
});

const EXCELDATA$8 = [["Id", "Name", "Value", "Value_Ch", "Value_Cht", "Value_J", "Value_K"], ["", "Key|ReadByName", "MainLanguage", "ChildLanguage", "ChildLanguage", "ChildLanguage", "ChildLanguage"], [1, "CannotResetPositionWithinSeconds", "Cannot Reset Position Within {0} Seconds", "{0}秒内不可重置位置", null, null, null], [2, "DoYouWantToResetThePosition", "Do You Want To Reset The Position", "是否重置位置", null, null, null], [3, "Yes", "Yes", "是", null, null, null], [4, "No", "No", "否", null, null, null], [5, "ResetPosition", "Reset Position", "重置位置", null, null, null], [6, "DoYouWantToUseItImmediately", "Do You Want To Use It Immediately", "是否立即使用", null, null, null], [7, "Buy", "Buy", "购买", null, null, null], [8, "ConfirmExpenses", "Confirm Expenses", "确认花费", null, null, null], [9, "Diamonds", "Diamonds", "钻石", null, null, null], [10, "GoldCoins", "Gold Coins", "金币", null, null, null], [11, "Cancel", "Cancel", "取消", null, null, null], [12, "Tips", "Tips", "提示", null, null, null], [13, "AcquisitionFailedPleaseTryAgain", "Acquisition Failed, Please Try Again", "获取失败，请重试", null, null, null], [14, "FreeCollectionOfCoins", "Free Collection Of {0} Coins", "免费领取{0}金币", null, null, null], [15, "FreeToReceive", "Free To Receive", "免费领取", null, null, null], [16, "DoubleTheRewardMaximumHealthIncreasedTo", "Double The Reward\nMaximum Health Increased To {0}", "奖励翻倍\n最大生命值提高到{0}", null, null, null], [17, "FreeIncrease", "Free Increase", "免费提高", null, null, null], [18, "FreeUseOfOneRound", "{0}\nFree Use Of One Round", "{0}\n免费使用一局", null, null, null], [19, "FreeToUse", "Free To Use", "免费使用", null, null, null], [20, "FreeCollectionOfDiamonds", "Free Collection Of {0} Diamonds", "免费领取{0}钻石", null, null, null], [21, "Get", "Get", "获得", null, null, null], [22, "Spend", "Spend", "花费", null, null, null], [23, "Lurking", "Lurkers", "潜伏者", null, null, null], [24, "Defenders", "Defenders", "保卫者", null, null, null], [25, "Life", "Hp", "生命", null, null, null], [26, "InvincibleTime", "Invincible Time", "无敌时间", null, null, null], [27, "ResurrectionCountdown", "Resurrection Countdown", "复活倒计时", null, null, null], [28, "InvincibleWithinSecondsAfterResurrection", "Invincible Within {0} Seconds After Resurrection", "复活后{0}秒内无敌", null, null, null], [29, "SetUp", "Set Up", "设置", null, null, null], [30, "FiringSensitivity", "Firing Sensitivity", "开火灵敏度", null, null, null], [31, "ControlSensitivity", "Control Sensitivity", "控制灵敏度", null, null, null], [32, "BackgroundMusicSize", "Background Music Size", "背景音乐大小", null, null, null], [33, "SfxVolume", "Sfx Volume", "音效大小", null, null, null], [34, "Defeated", " Defeated ", " 击败了 ", null, null, null], [35, "YouHaveBeenDefeatedBy", "You Have Been Defeated By {0}", "你已被 {0} 击败", null, null, null], [36, "DefeatToCompleteRevenge", "Defeat {0} To Complete Revenge", "击败 {0} 完成复仇", null, null, null], [37, "RdPlace", "{0}: {1}Rd Place", "{0}：第{1}名", null, null, null], [38, "DefeatedPeople_2", "Defeated 2 People", "连续消灭2人！势不可当！", null, null, null], [39, "DefeatedPeople_3", "Defeated 3 People", "连续消灭3人！勇冠三军！", null, null, null], [40, "DefeatedPeople_4", "Defeated 4 People", "连续消灭4人！无人能敌！", null, null, null], [41, "DefeatedPeople_5", "Defeated 5 People", "连续消灭5人！横扫千军！", null, null, null], [42, "DefeatedPeople_6", "Defeated 6 People", "连续消灭6人！接近神了！", null, null, null], [43, "DefeatedPeople_7", "Defeated {0} People", "连续消灭{0}人！超越神了！", null, null, null], [44, "Ranking", "Ranking", "排名", null, null, null], [45, "Nickname", "Nickname", "昵称", null, null, null], [46, "Beat", "Beat", "击败", null, null, null], [47, "Death", "Death", "死亡", null, null, null], [48, "TopInTheEntireServer", "Top {0} In The Entire Server", "全服前{0}名", null, null, null], [49, "TotalDefeat", "Total Defeat", "总击败", null, null, null], [50, "TotalDeaths", "Total Deaths", "总死亡", null, null, null], [51, "RankingOfAchievements", "Ranking\nAchievements", "战绩排行榜", null, null, null], [52, "FullServerRankingList", "Full Server\nRanking List", "全服排行榜", null, null, null], [53, "Weapon", "Weapon", "武器", null, null, null], [54, "Skin", "Skin", "皮肤", null, null, null], [55, "Trailing", "Trailing", "拖尾", null, null, null], [56, "Use", "Use", "使用", null, null, null], [57, "Obtained", "Obtained", "已获得", null, null, null], [58, "NotObtained", "Not Obtained", "未获得", null, null, null], [59, "Hurt", "Hurt", "伤害", null, null, null], [60, "Bullet", "Bullet", "子弹", null, null, null], [61, "TimeLimited", "Time Limited", "限时", null, null, null], [62, "Permanent", "Permanent", "永久", null, null, null], [63, "Error", "Error", "出错啦", null, null, null], [64, "TransformationStatusCannotOpenTheStore", "Transformation Status Cannot Open The Store", "变身状态不可打开商店", null, null, null], [65, "PurchaseSuccessful", "Purchase Successful", "购买成功", null, null, null], [66, "InsufficientGoldCoins", "Insufficient Gold Coins", "金币不足", null, null, null], [67, "DiamondShortage", "Diamond Shortage", "钻石不足", null, null, null], [68, "WearingIt", "Wearing It", "穿戴中", null, null, null], [69, "SkinSuccessfullyWorn", "Skin Successfully Worn", "皮肤成功穿戴", null, null, null], [70, "TailSuccessfullyWorn", "Tail Successfully Worn", "尾迹成功穿戴", null, null, null], [71, "Previewing", "Previewing", "正在预览", null, null, null], [72, "Pistol", "Pistol", "手枪", null, null, null], [73, "BubbleGun", "Bubble Gun", "泡泡枪", null, null, null], [74, "ShotgunSprayGun", "Shotgun Spray Gun", "散弹喷枪", null, null, null], [75, "Shotgun", "Shotgun", "霰弹枪", null, null, null], [76, "SpitfireGun", "Spitfire Gun", "喷火枪", null, null, null], [77, "FireGun", "Fire Gun", "火枪", null, null, null], [78, "LaserGun", "Laser Gun", "激光枪", null, null, null], [79, "WaterGun", "Water Gun", "水枪", null, null, null], [80, "RocketLauncher", "Rocket Launcher", "火箭发射器", null, null, null], [81, "JustinGatlin", "Justin Gatlin", "加特林", null, null, null], [82, "Tunas", "Tunas", "金枪鱼", null, null, null], [83, "BowAndArrow", "Bow And Arrow", "弓箭", null, null, null], [84, "ParticleTailing", "Particle Tailing", "粒子拖尾", null, null, null], [85, "SmokeTrail", "Smoke Trail", "烟雾拖尾", null, null, null], [86, "BeamTrailing", "Beam Trailing", "光束拖尾", null, null, null], [87, "Tail", "Tail", "拖尾", null, null, null], [88, "WaterTailing", "Water Tailing", "水拖尾", null, null, null], [89, "FlameTrailing", "Flame Trailing", "火焰拖尾", null, null, null], [90, "ThunderTail", "Thunder Tail", "雷拖尾", null, null, null], [91, "RainbowTail", "Rainbow Tail", "彩虹拖尾", null, null, null], [92, "TirePrintTailing", "Tire Print Tailing", "胎印拖尾", null, null, null], [93, "ScrewTail", "Screw Tail", "螺丝钉拖尾", null, null, null], [94, "FootballTail", "Football Tail", "足球拖尾", null, null, null], [95, "CandyTail", "Candy Tail", "糖果拖尾", null, null, null], [96, "TrophyTail", "Trophy Tail", "奖杯拖尾", null, null, null], [97, "CrownTail", "Crown Tail", "皇冠拖尾", null, null, null], [98, "LoveTail", "Love Tail", "爱心拖尾", null, null, null], [99, "SkullTail", "Skull Tail", "骷髅拖尾", null, null, null], [100, "BananaTail", "Banana Tail", "香蕉拖尾", null, null, null], [102, "SnowflakeTail", "Snowflake Tail", "雪花拖尾", null, null, null], [103, "Tail2023", "2023 Tail", "2023拖尾", null, null, null], [104, "FirecrackerTail", "Firecracker Tail", "爆竹拖尾", null, null, null], [105, "FireworksTail", "Fireworks Tail", "烟花拖尾", null, null, null], [106, "GiftTail", "Gift Tail", "礼物拖尾", null, null, null], [107, "TailOfBanknotes", "Tail Of Banknotes", "钞票拖尾", null, null, null], [108, "BubbleTail", "Bubble Tail", "泡泡拖尾", null, null, null], [109, "RibbonTrailing", "Ribbon Trailing", "彩带拖尾", null, null, null], [110, "TailOfFeces", "Tail Of Feces", "便便拖尾", null, null, null], [111, "MapleLeafTail", "Maple Leaf Tail", "枫叶拖尾", null, null, null], [112, "SixPointedStarTail", "Six Pointed Star Tail", "六芒星拖尾", null, null, null], [113, "ButterflyTail", "Butterfly Tail", "蝴蝶拖尾", null, null, null], [114, "IceCreamTrail", "Ice Cream Trail", "冰淇淋拖尾", null, null, null], [115, "BirdTail", "Bird Tail", "鸟拖尾", null, null, null], [116, "BatTail", "Bat Tail", "蝙蝠拖尾", null, null, null], [117, "XiangyunTail", "Xiangyun Tail", "祥云拖尾", null, null, null], [118, "Print", "Print", "爪印", null, null, null], [119, "HoodedMan", "Hooded Man", "兜帽男", null, null, null], [120, "DoublePonytailGirl", "Double Ponytail Girl", "双马尾女", null, null, null], [121, "MaleWarrior", "Male Warrior", "男战士", null, null, null], [122, "MechGirl", "Mech Girl", "机甲少女", null, null, null], [123, "MaleKnight", "Male Knight", "男骑士", null, null, null], [124, "NanoMechWomen", "Nano Mech Women", "纳米机甲女性", null, null, null], [125, "CyberYouth", "Cyber Youth", "赛博少年", null, null, null], [126, "CyberGirls", "Cyber Girls", "赛博少女", null, null, null], [127, "DefinitelyPotBoy", "Definitely Pot Boy", "一定锅少年", null, null, null], [128, "SeekingGodYoungMan", "Seeking God, Young Man", "求神少年", null, null, null], [129, "DefinitelyPotGirl", "Definitely Pot Girl", "一定锅少女", null, null, null], [130, "SeekingGodGirl", "Seeking God Girl", "求神少女", null, null, null], [131, "GemstoneArmoredMan", "Gemstone Armored Man", "宝石铠甲男", null, null, null], [132, "ArmoredMaleWarrior", "Armored Male Warrior", "铠甲男战士", null, null, null], [133, "BlackMaleNanomecha", "Black Male Nanomecha", "黑人男纳米机甲", null, null, null], [134, "WhiteMaleNanomecha", "White Male Nanomecha", "白人男纳米机甲", null, null, null], [135, "SilverKnights", "Silver Knights", "白银骑士", null, null, null], [136, "EagleWarrior", "Eagle Warrior", "鹰战士", null, null, null], [137, "Warrior", "Warrior", "战士", null, null, null], [138, "VenomMonster", "Venom Monster", "毒液怪人", null, null, null], [139, "AntWarrior", "Ant Warrior", "蚁侠士", null, null, null], [140, "TheStrongestCaptain", "The Strongest Captain", "最强队长", null, null, null], [141, "SuperHandsomeHero", "Super Handsome Hero", "超帅侠", null, null, null], [142, "StrangeWarrior", "Strange Warrior", "奇异战士", null, null, null], [143, "LightningMonster", "Lightning Monster", "闪电怪", null, null, null], [144, "EvilSpiritSkull", "Evil Spirit Skull", "恶灵骷髅", null, null, null], [145, "IronMan", "Iron Man", "铁人", null, null, null], [146, "WindbreakerGirl", "Windbreaker Girl", "风衣女", null, null, null], [147, "HanfuGirl", "Hanfu Girl", "汉服少女", null, null, null], [148, "FashionableGirl", "Fashionable Girl", "时尚少女", null, null, null], [149, "TrendyGirl", "Trendy Girl", "潮流少女", null, null, null], [150, "AncientScholars", "Ancient Scholars", "古代书生", null, null, null], [151, "OrangeLaserGun", "Orange Laser Gun", "橘黄激光枪", null, null, null], [152, "Text_ClaimRewards", "Claim Rewards", "领取奖励", null, null, null], [153, "Text_HangInTheAir", "Hang In The Air", "未完成", null, null, null], [154, "Text_DailyTasks", "Daily Tasks", "每日任务", null, null, null], [155, "Text_AllTasksHaveBeenCompletedWaitingForRefresh", "All Tasks Have Been Completed, Waiting For Refresh", "任务已全部完成，等待刷新...", null, null, null], [156, "Text_RemainingHours", "Remaining: {0} Hours", "剩余：{0}小时", null, null, null], [157, "Text_RemainingDays", "Remaining: {0} Days", "剩余：{0}天", null, null, null], [158, "Text_WeeklyTasks", "Weekly Tasks", "每周任务", null, null, null], [159, "Dailylogintothegame", "Daily login to the game ({0}/{1})", "每日登录游戏（{0}/{1}）", null, null, null], [160, "Dailyonlinedurationminutes", "Daily online duration {2} minutes ({0}/{1})", "每日在线时长{2}分钟（{0}/{1}）", null, null, null], [161, "Defeatplayersdaily", "Defeat {2} players daily ({0}/{1})", "每日击败{2}个玩家（{0}/{1}）", null, null, null], [162, "Logindaysperweek", "Login {2} days per week ({0}/{1})", "每周登录{2}天（{0}/{1}）", null, null, null], [163, "Join", "Join", "加入", null, null, null], [164, "WeaponEquipmentSuccessful", "Weapon Equipment Successful", "武器装备成功", null, null, null]];
class LanguageConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$8);
    }
    /**{0}秒内不可重置位置*/
    get CannotResetPositionWithinSeconds() { return this.getElement(1); }
    ;
    /**是否重置位置*/
    get DoYouWantToResetThePosition() { return this.getElement(2); }
    ;
    /**是*/
    get Yes() { return this.getElement(3); }
    ;
    /**否*/
    get No() { return this.getElement(4); }
    ;
    /**重置位置*/
    get ResetPosition() { return this.getElement(5); }
    ;
    /**是否立即使用*/
    get DoYouWantToUseItImmediately() { return this.getElement(6); }
    ;
    /**购买*/
    get Buy() { return this.getElement(7); }
    ;
    /**确认花费*/
    get ConfirmExpenses() { return this.getElement(8); }
    ;
    /**钻石*/
    get Diamonds() { return this.getElement(9); }
    ;
    /**金币*/
    get GoldCoins() { return this.getElement(10); }
    ;
    /**取消*/
    get Cancel() { return this.getElement(11); }
    ;
    /**提示*/
    get Tips() { return this.getElement(12); }
    ;
    /**获取失败，请重试*/
    get AcquisitionFailedPleaseTryAgain() { return this.getElement(13); }
    ;
    /**免费领取{0}金币*/
    get FreeCollectionOfCoins() { return this.getElement(14); }
    ;
    /**免费领取*/
    get FreeToReceive() { return this.getElement(15); }
    ;
    /**奖励翻倍
最大生命值提高到{0}*/
    get DoubleTheRewardMaximumHealthIncreasedTo() { return this.getElement(16); }
    ;
    /**免费提高*/
    get FreeIncrease() { return this.getElement(17); }
    ;
    /**{0}
免费使用一局*/
    get FreeUseOfOneRound() { return this.getElement(18); }
    ;
    /**免费使用*/
    get FreeToUse() { return this.getElement(19); }
    ;
    /**免费领取{0}钻石*/
    get FreeCollectionOfDiamonds() { return this.getElement(20); }
    ;
    /**获得*/
    get Get() { return this.getElement(21); }
    ;
    /**花费*/
    get Spend() { return this.getElement(22); }
    ;
    /**潜伏者*/
    get Lurking() { return this.getElement(23); }
    ;
    /**保卫者*/
    get Defenders() { return this.getElement(24); }
    ;
    /**生命*/
    get Life() { return this.getElement(25); }
    ;
    /**无敌时间*/
    get InvincibleTime() { return this.getElement(26); }
    ;
    /**复活倒计时*/
    get ResurrectionCountdown() { return this.getElement(27); }
    ;
    /**复活后{0}秒内无敌*/
    get InvincibleWithinSecondsAfterResurrection() { return this.getElement(28); }
    ;
    /**设置*/
    get SetUp() { return this.getElement(29); }
    ;
    /**开火灵敏度*/
    get FiringSensitivity() { return this.getElement(30); }
    ;
    /**控制灵敏度*/
    get ControlSensitivity() { return this.getElement(31); }
    ;
    /**背景音乐大小*/
    get BackgroundMusicSize() { return this.getElement(32); }
    ;
    /**音效大小*/
    get SfxVolume() { return this.getElement(33); }
    ;
    /** 击败了 */
    get Defeated() { return this.getElement(34); }
    ;
    /**你已被 {0} 击败*/
    get YouHaveBeenDefeatedBy() { return this.getElement(35); }
    ;
    /**击败 {0} 完成复仇*/
    get DefeatToCompleteRevenge() { return this.getElement(36); }
    ;
    /**{0}：第{1}名*/
    get RdPlace() { return this.getElement(37); }
    ;
    /**连续消灭2人！势不可当！*/
    get DefeatedPeople_2() { return this.getElement(38); }
    ;
    /**连续消灭3人！勇冠三军！*/
    get DefeatedPeople_3() { return this.getElement(39); }
    ;
    /**连续消灭4人！无人能敌！*/
    get DefeatedPeople_4() { return this.getElement(40); }
    ;
    /**连续消灭5人！横扫千军！*/
    get DefeatedPeople_5() { return this.getElement(41); }
    ;
    /**连续消灭6人！接近神了！*/
    get DefeatedPeople_6() { return this.getElement(42); }
    ;
    /**连续消灭{0}人！超越神了！*/
    get DefeatedPeople_7() { return this.getElement(43); }
    ;
    /**排名*/
    get Ranking() { return this.getElement(44); }
    ;
    /**昵称*/
    get Nickname() { return this.getElement(45); }
    ;
    /**击败*/
    get Beat() { return this.getElement(46); }
    ;
    /**死亡*/
    get Death() { return this.getElement(47); }
    ;
    /**全服前{0}名*/
    get TopInTheEntireServer() { return this.getElement(48); }
    ;
    /**总击败*/
    get TotalDefeat() { return this.getElement(49); }
    ;
    /**总死亡*/
    get TotalDeaths() { return this.getElement(50); }
    ;
    /**战绩排行榜*/
    get RankingOfAchievements() { return this.getElement(51); }
    ;
    /**全服排行榜*/
    get FullServerRankingList() { return this.getElement(52); }
    ;
    /**武器*/
    get Weapon() { return this.getElement(53); }
    ;
    /**皮肤*/
    get Skin() { return this.getElement(54); }
    ;
    /**拖尾*/
    get Trailing() { return this.getElement(55); }
    ;
    /**使用*/
    get Use() { return this.getElement(56); }
    ;
    /**已获得*/
    get Obtained() { return this.getElement(57); }
    ;
    /**未获得*/
    get NotObtained() { return this.getElement(58); }
    ;
    /**伤害*/
    get Hurt() { return this.getElement(59); }
    ;
    /**子弹*/
    get Bullet() { return this.getElement(60); }
    ;
    /**限时*/
    get TimeLimited() { return this.getElement(61); }
    ;
    /**永久*/
    get Permanent() { return this.getElement(62); }
    ;
    /**出错啦*/
    get Error() { return this.getElement(63); }
    ;
    /**变身状态不可打开商店*/
    get TransformationStatusCannotOpenTheStore() { return this.getElement(64); }
    ;
    /**购买成功*/
    get PurchaseSuccessful() { return this.getElement(65); }
    ;
    /**金币不足*/
    get InsufficientGoldCoins() { return this.getElement(66); }
    ;
    /**钻石不足*/
    get DiamondShortage() { return this.getElement(67); }
    ;
    /**穿戴中*/
    get WearingIt() { return this.getElement(68); }
    ;
    /**皮肤成功穿戴*/
    get SkinSuccessfullyWorn() { return this.getElement(69); }
    ;
    /**尾迹成功穿戴*/
    get TailSuccessfullyWorn() { return this.getElement(70); }
    ;
    /**正在预览*/
    get Previewing() { return this.getElement(71); }
    ;
    /**手枪*/
    get Pistol() { return this.getElement(72); }
    ;
    /**泡泡枪*/
    get BubbleGun() { return this.getElement(73); }
    ;
    /**散弹喷枪*/
    get ShotgunSprayGun() { return this.getElement(74); }
    ;
    /**霰弹枪*/
    get Shotgun() { return this.getElement(75); }
    ;
    /**喷火枪*/
    get SpitfireGun() { return this.getElement(76); }
    ;
    /**火枪*/
    get FireGun() { return this.getElement(77); }
    ;
    /**激光枪*/
    get LaserGun() { return this.getElement(78); }
    ;
    /**水枪*/
    get WaterGun() { return this.getElement(79); }
    ;
    /**火箭发射器*/
    get RocketLauncher() { return this.getElement(80); }
    ;
    /**加特林*/
    get JustinGatlin() { return this.getElement(81); }
    ;
    /**金枪鱼*/
    get Tunas() { return this.getElement(82); }
    ;
    /**弓箭*/
    get BowAndArrow() { return this.getElement(83); }
    ;
    /**粒子拖尾*/
    get ParticleTailing() { return this.getElement(84); }
    ;
    /**烟雾拖尾*/
    get SmokeTrail() { return this.getElement(85); }
    ;
    /**光束拖尾*/
    get BeamTrailing() { return this.getElement(86); }
    ;
    /**拖尾*/
    get Tail() { return this.getElement(87); }
    ;
    /**水拖尾*/
    get WaterTailing() { return this.getElement(88); }
    ;
    /**火焰拖尾*/
    get FlameTrailing() { return this.getElement(89); }
    ;
    /**雷拖尾*/
    get ThunderTail() { return this.getElement(90); }
    ;
    /**彩虹拖尾*/
    get RainbowTail() { return this.getElement(91); }
    ;
    /**胎印拖尾*/
    get TirePrintTailing() { return this.getElement(92); }
    ;
    /**螺丝钉拖尾*/
    get ScrewTail() { return this.getElement(93); }
    ;
    /**足球拖尾*/
    get FootballTail() { return this.getElement(94); }
    ;
    /**糖果拖尾*/
    get CandyTail() { return this.getElement(95); }
    ;
    /**奖杯拖尾*/
    get TrophyTail() { return this.getElement(96); }
    ;
    /**皇冠拖尾*/
    get CrownTail() { return this.getElement(97); }
    ;
    /**爱心拖尾*/
    get LoveTail() { return this.getElement(98); }
    ;
    /**骷髅拖尾*/
    get SkullTail() { return this.getElement(99); }
    ;
    /**香蕉拖尾*/
    get BananaTail() { return this.getElement(100); }
    ;
    /**雪花拖尾*/
    get SnowflakeTail() { return this.getElement(102); }
    ;
    /**2023拖尾*/
    get Tail2023() { return this.getElement(103); }
    ;
    /**爆竹拖尾*/
    get FirecrackerTail() { return this.getElement(104); }
    ;
    /**烟花拖尾*/
    get FireworksTail() { return this.getElement(105); }
    ;
    /**礼物拖尾*/
    get GiftTail() { return this.getElement(106); }
    ;
    /**钞票拖尾*/
    get TailOfBanknotes() { return this.getElement(107); }
    ;
    /**泡泡拖尾*/
    get BubbleTail() { return this.getElement(108); }
    ;
    /**彩带拖尾*/
    get RibbonTrailing() { return this.getElement(109); }
    ;
    /**便便拖尾*/
    get TailOfFeces() { return this.getElement(110); }
    ;
    /**枫叶拖尾*/
    get MapleLeafTail() { return this.getElement(111); }
    ;
    /**六芒星拖尾*/
    get SixPointedStarTail() { return this.getElement(112); }
    ;
    /**蝴蝶拖尾*/
    get ButterflyTail() { return this.getElement(113); }
    ;
    /**冰淇淋拖尾*/
    get IceCreamTrail() { return this.getElement(114); }
    ;
    /**鸟拖尾*/
    get BirdTail() { return this.getElement(115); }
    ;
    /**蝙蝠拖尾*/
    get BatTail() { return this.getElement(116); }
    ;
    /**祥云拖尾*/
    get XiangyunTail() { return this.getElement(117); }
    ;
    /**爪印*/
    get Print() { return this.getElement(118); }
    ;
    /**兜帽男*/
    get HoodedMan() { return this.getElement(119); }
    ;
    /**双马尾女*/
    get DoublePonytailGirl() { return this.getElement(120); }
    ;
    /**男战士*/
    get MaleWarrior() { return this.getElement(121); }
    ;
    /**机甲少女*/
    get MechGirl() { return this.getElement(122); }
    ;
    /**男骑士*/
    get MaleKnight() { return this.getElement(123); }
    ;
    /**纳米机甲女性*/
    get NanoMechWomen() { return this.getElement(124); }
    ;
    /**赛博少年*/
    get CyberYouth() { return this.getElement(125); }
    ;
    /**赛博少女*/
    get CyberGirls() { return this.getElement(126); }
    ;
    /**一定锅少年*/
    get DefinitelyPotBoy() { return this.getElement(127); }
    ;
    /**求神少年*/
    get SeekingGodYoungMan() { return this.getElement(128); }
    ;
    /**一定锅少女*/
    get DefinitelyPotGirl() { return this.getElement(129); }
    ;
    /**求神少女*/
    get SeekingGodGirl() { return this.getElement(130); }
    ;
    /**宝石铠甲男*/
    get GemstoneArmoredMan() { return this.getElement(131); }
    ;
    /**铠甲男战士*/
    get ArmoredMaleWarrior() { return this.getElement(132); }
    ;
    /**黑人男纳米机甲*/
    get BlackMaleNanomecha() { return this.getElement(133); }
    ;
    /**白人男纳米机甲*/
    get WhiteMaleNanomecha() { return this.getElement(134); }
    ;
    /**白银骑士*/
    get SilverKnights() { return this.getElement(135); }
    ;
    /**鹰战士*/
    get EagleWarrior() { return this.getElement(136); }
    ;
    /**战士*/
    get Warrior() { return this.getElement(137); }
    ;
    /**毒液怪人*/
    get VenomMonster() { return this.getElement(138); }
    ;
    /**蚁侠士*/
    get AntWarrior() { return this.getElement(139); }
    ;
    /**最强队长*/
    get TheStrongestCaptain() { return this.getElement(140); }
    ;
    /**超帅侠*/
    get SuperHandsomeHero() { return this.getElement(141); }
    ;
    /**奇异战士*/
    get StrangeWarrior() { return this.getElement(142); }
    ;
    /**闪电怪*/
    get LightningMonster() { return this.getElement(143); }
    ;
    /**恶灵骷髅*/
    get EvilSpiritSkull() { return this.getElement(144); }
    ;
    /**铁人*/
    get IronMan() { return this.getElement(145); }
    ;
    /**风衣女*/
    get WindbreakerGirl() { return this.getElement(146); }
    ;
    /**汉服少女*/
    get HanfuGirl() { return this.getElement(147); }
    ;
    /**时尚少女*/
    get FashionableGirl() { return this.getElement(148); }
    ;
    /**潮流少女*/
    get TrendyGirl() { return this.getElement(149); }
    ;
    /**古代书生*/
    get AncientScholars() { return this.getElement(150); }
    ;
    /**橘黄激光枪*/
    get OrangeLaserGun() { return this.getElement(151); }
    ;
    /**领取奖励*/
    get Text_ClaimRewards() { return this.getElement(152); }
    ;
    /**未完成*/
    get Text_HangInTheAir() { return this.getElement(153); }
    ;
    /**每日任务*/
    get Text_DailyTasks() { return this.getElement(154); }
    ;
    /**任务已全部完成，等待刷新...*/
    get Text_AllTasksHaveBeenCompletedWaitingForRefresh() { return this.getElement(155); }
    ;
    /**剩余：{0}小时*/
    get Text_RemainingHours() { return this.getElement(156); }
    ;
    /**剩余：{0}天*/
    get Text_RemainingDays() { return this.getElement(157); }
    ;
    /**每周任务*/
    get Text_WeeklyTasks() { return this.getElement(158); }
    ;
    /**每日登录游戏（{0}/{1}）*/
    get Dailylogintothegame() { return this.getElement(159); }
    ;
    /**每日在线时长{2}分钟（{0}/{1}）*/
    get Dailyonlinedurationminutes() { return this.getElement(160); }
    ;
    /**每日击败{2}个玩家（{0}/{1}）*/
    get Defeatplayersdaily() { return this.getElement(161); }
    ;
    /**每周登录{2}天（{0}/{1}）*/
    get Logindaysperweek() { return this.getElement(162); }
    ;
    /**加入*/
    get Join() { return this.getElement(163); }
    ;
    /**武器装备成功*/
    get WeaponEquipmentSuccessful() { return this.getElement(164); }
    ;
}

var foreign11 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LanguageConfig: LanguageConfig
});

const EXCELDATA$7 = [["ID", "Des", "PathStr", "Idles", "Moves", "MoveSpeed", "Die", "Attacks", "AttackTimePoints", "AttackOffsets", "AttackLengths", "AttackSizes", "Damages", "EffectIds", "EffectPosOffsets", "EffectRotOffsets", "EffectScales"], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], [1, "蛇女", ["3E882EFC"], ["318618"], ["318617"], 300, "318619", ["318616"], [0.35], [new mw.Vector(0, 50, 0)], [300], [new mw.Vector(50, 50, 100)], [100], ["125704"], [new mw.Vector(60, 0, 0)], [new mw.Vector(0, 0, -90)], [new mw.Vector(1, 0.8, 1)]], [2, "蜘蛛", ["3E882EFC"], ["336664", "336668"], ["336669"], 250, "336816", ["336673", "336670", "336672"], [1, 0.95, 1.2], [new mw.Vector(0, 50, 0), new mw.Vector(0, 50, 0), new mw.Vector(0, 50, 0)], [300, 300, 300], [new mw.Vector(50, 50, 100), new mw.Vector(50, 50, 100), new mw.Vector(50, 50, 100)], [100, 100, 100], ["384353", "101411", "297932"], [new mw.Vector(170, 0, -50), new mw.Vector(200, 0, -120), new mw.Vector(100, 0, -125)], [new mw.Vector(0, -60, 0), new mw.Vector(0, 30, 10), new mw.Vector(0, 0, 0)], [new mw.Vector(0.5, 0.5, 0.5), new mw.Vector(1, 1, 1), new mw.Vector(0.55, 1, 1)]], [3, "蜘蛛精", ["3E882EFC"], ["336664", "336668"], ["338467"], 250, "338468", ["338464", "338466"], [0.8, 0.8], [new mw.Vector(0, 50, 0), new mw.Vector(0, 50, 0)], [300, 300], [new mw.Vector(50, 50, 100), new mw.Vector(50, 50, 100)], [100, 100], ["297932", "101407"], [new mw.Vector(100, 0, -125), new mw.Vector(100, 0, -125)], [new mw.Vector(0, 0, 0), new mw.Vector(0, 0, 0)], [new mw.Vector(0.55, 1, 1), new mw.Vector(1, 1, 1)]], [4, "龙", ["3E882EFC"], ["160627", "250400", "250399", "160627"], ["160628"], 250, "-1", ["250094", "250095"], [1.6, 1.3], [new mw.Vector(0, 50, 0), new mw.Vector(0, 50, 0)], [300, 300], [new mw.Vector(50, 50, 100), new mw.Vector(50, 50, 100)], [100, 100], ["168947", "92843"], [new mw.Vector(0, 0, 0), new mw.Vector(0, 0, 0)], [new mw.Vector(0, 0, 0), new mw.Vector(0, 0, 0)], [new mw.Vector(1, 1, 1), new mw.Vector(1, 1, 1)]], [5, "丧尸", ["3E882EFC"], ["284991", "268599"], ["285740", "269161", "285826"], 150, "-1", ["285210"], [0.55], [new mw.Vector(0, 50, 0)], [300], [new mw.Vector(50, 50, 100)], [100], ["31260"], [new mw.Vector(5, 0, 0)], [new mw.Vector(0, -30, 180)], [new mw.Vector(1, 1, 1)]], [6, "角色", ["3E882EFC"], ["285445"], ["285336", "285372", "280652", "280671", "280723", "284685", "280699", "280780"], 150, "-1", ["219129", "280914", "280916"], [0.2, 0.4, 0.3], [new mw.Vector(0, 50, 0), new mw.Vector(0, 50, 0), new mw.Vector(0, 50, 0)], [300, 300, 300], [new mw.Vector(50, 50, 100), new mw.Vector(50, 50, 100), new mw.Vector(50, 50, 100)], [100, 100, 100], ["92838", "135894", "125704"], [new mw.Vector(250, 0, 0), new mw.Vector(140, 0, 0), new mw.Vector(0, 0, 0)], [new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(0, 0, -90)], [new mw.Vector(0.5, 0.5, 0.5), new mw.Vector(0.5, 0.5, 0.5), new mw.Vector(1, 1, 1)]], [7, "角色", ["3E882EFC"], ["-1"], ["-1"], 150, "-1", ["219129", "280914", "280916"], [0.2, 0.4, 0.3], [new mw.Vector(0, 50, 0), new mw.Vector(0, 50, 0), new mw.Vector(0, 50, 0)], [300, 300, 300], [new mw.Vector(50, 50, 100), new mw.Vector(50, 50, 100), new mw.Vector(50, 50, 100)], [100, 100, 100], ["92838", "135894", "125704"], [new mw.Vector(250, 0, 0), new mw.Vector(140, 0, 0), new mw.Vector(0, 0, 0)], [new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(0, 0, -90)], [new mw.Vector(0.5, 0.5, 0.5), new mw.Vector(0.5, 0.5, 0.5), new mw.Vector(1, 1, 1)]]];
class MonsterInfoConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$7);
    }
}

var foreign12 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MonsterInfoConfig: MonsterInfoConfig
});

const EXCELDATA$6 = [["ID", "AssetId", "OffsetPos", "OffsetRot", "OffsetSca"], ["", "", "", "", ""], [1, "20686", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [2, "20689", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [3, "20693", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [4, "20707", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [5, "20741", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [6, "20799", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [7, "20910", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [8, "20957", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [9, "21007", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [10, "21034", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [11, "21037", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(0.3, 0.3, 0.3)], [12, "22879", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [13, "22881", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [14, "22905", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [15, "22906", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [16, "22907", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [17, "22913", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [18, "22921", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [19, "22926", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [20, "22951", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [21, "22940", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [22, "22972", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [23, "22966", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [24, "22969", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [25, "22986", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [26, "22981", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [27, "23001", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [28, "23018", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [29, "23020", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [30, "23043", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [31, "23071", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [32, "23072", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)], [33, "23102", new mw.Vector(0, 0, 0), new mw.Vector(0, 0, -90), new mw.Vector(1, 1, 1)]];
class MorphConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$6);
    }
}

var foreign13 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MorphConfig: MorphConfig
});

const EXCELDATA$5 = [["ID", "PrefabId", "FireSound", "HitEffect", "HitEffectScale", "Des"], ["", "", "", "", "", ""], [1, "5FE5766E4D27D1FC0ECC9DB29673A3EB", "208258", "27422", new mw.Vector(1, 1, 1), null, null, 208399], [2, "EAF62D0F4EF181ABB6C8AB83E876818B", "207772", "27422", new mw.Vector(1, 1, 1), null], [3, "F32C6FB24570123F58CEFA81FC1DAC1F", "208268", "27422", new mw.Vector(1, 1, 1), null], [4, "28BA1D7C44D241C468F19A94D9E63238", "208374", "61006", new mw.Vector(1, 1, 1), null, null, null, 208166], [5, "D07DD084490C6D2C3BC3A7A8BC4884C0", "208374", "61006", new mw.Vector(1, 1, 1), null], [6, "A5C80A2E45063598223D4A8D042593A8", "208166", "265666", new mw.Vector(0.5, 0.5, 0.5), null], [7, "E2497FC44D0EC13158099584EED17776", "208374", "61006", new mw.Vector(1, 1, 1), null, 208495, null, 287821], [8, "24E7DF3146C2E5414BE4EE8AC093215B", "208166", "27422", new mw.Vector(1, 1, 1), "208166"], [9, "6EB015964A8F1DC44DF94595AA7593E1", "208166", "27421", new mw.Vector(0.5, 0.5, 0.5), "屠龙激光枪3号-已完善"], [10, "A3BC64CF4B29BD2D076E4194A2F9E40C", "208374", "61006", new mw.Vector(1, 1, 1), null], [11, "C7708014418743519AEB66A05118335F", "208374", "61006", new mw.Vector(1, 1, 1), null], [12, "592867B84C2ABC5BC11326A6588AC115", "208495", "61006", new mw.Vector(1, 1, 1), null], [13, "4E31B836400E0183C925ACA18475115B", "208374", "27421", new mw.Vector(0.5, 0.5, 0.5), null], [14, "4C18E7A440AD7AE26CFA71AD44B70903", "208374", "27421", new mw.Vector(0.5, 0.5, 0.5), null], [15, "1405575C47698FE0FC41F0B7E104529E", "208048", "27421", new mw.Vector(0.5, 0.5, 0.5), null]];
class ProjectilePropConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$5);
    }
}

var foreign14 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ProjectilePropConfig: ProjectilePropConfig
});

const EXCELDATA$4 = [["ID", "ROLEID", "PRICETYPE", "PRICE", "NAME", "DESC"], ["", "", "", "", "Language", ""], [1, "181562", 1, [1, 5888], "HoodedMan", "兜帽男"], [2, "143400", 1, [1, 5888], "DoublePonytailGirl", "双马尾女"], [3, "142292", 1, [1, 5888], "MaleWarrior", "男战士"], [4, "142272", 1, [1, 5888], "MechGirl", "机甲少女"], [5, "142293", 1, [1, 5888], "MaleKnight", "男骑士"], [6, "142255", 1, [1, 5888], "NanoMechWomen", "纳米机甲女性"], [7, "219915", 1, [1, 5888], "CyberYouth", "赛博少年"], [8, "226379", 1, [1, 5888], "CyberYouth", "赛博少年"], [9, "219912", 1, [1, 5888], "CyberGirls", "赛博少女"], [10, "226386", 1, [1, 5888], "CyberGirls", "赛博少女"], [11, "266641", 1, [1, 5888], "DefinitelyPotBoy", "一定锅少年"], [12, "267183", 1, [1, 5888], "SeekingGodYoungMan", "求神少年"], [13, "264622", 1, [1, 5888], "DefinitelyPotGirl", "一定锅少女"], [14, "266861", 1, [1, 5888], "SeekingGodGirl", "求神少女"], [15, "142302", 1, [1, 5888], "GemstoneArmoredMan", "宝石铠甲男"], [16, "142303", 1, [1, 5888], "ArmoredMaleWarrior", "铠甲男战士"], [17, "142396", 1, [1, 5888], "BlackMaleNanomecha", "黑人男纳米机甲"], [18, "142397", 1, [1, 5888], "WhiteMaleNanomecha", "白人男纳米机甲"], [19, "142398", 1, [1, 5888], "SilverKnights", "白银骑士"], [20, "142906", 1, [1, 5888], "EagleWarrior", "鹰战士"], [21, "142895", 1, [1, 5888], "Warrior", "战士"], [22, "142886", 1, [1, 5888], "VenomMonster", "毒液怪人"], [23, "142905", 1, [1, 5888], "AntWarrior", "蚁侠士"], [24, "142898", 1, [1, 5888], "TheStrongestCaptain", "最强队长"], [25, "142885", 1, [1, 5888], "SuperHandsomeHero", "超帅侠"], [26, "142900", 1, [1, 5888], "StrangeWarrior", "奇异战士"], [27, "142901", 1, [1, 5888], "LightningMonster", "闪电怪"], [28, "142887", 1, [1, 5888], "EvilSpiritSkull", "恶灵骷髅"], [29, "142888", 1, [1, 5888], "IronMan", "铁人"], [30, "222475", 1, [1, 5888], "WindbreakerGirl", "风衣女"], [31, "219916", 1, [1, 5888], "HanfuGirl", "汉服少女"], [32, "266860", 1, [1, 5888], "FashionableGirl", "时尚少女"], [33, "226382", 1, [1, 5888], "TrendyGirl", "潮流少女"], [34, "222476", 1, [1, 5888], "AncientScholars", "古代书生"]];
class ROLEConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$4);
    }
}

var foreign15 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ROLEConfig: ROLEConfig
});

const EXCELDATA$3 = [["ID", "CommodityId", "PartyPrice", "Count", "Des", "Icon"], ["", "", "", "", "", ""], [1, "2up8k7U7ULm0000hZ", 98, 100, "钻石*100", "103220"], [2, "9ZHaEgphvWq0000ha", 580, 600, "钻石*600", "103221"], [3, "6JfMPeEBARi0000hb", 980, 1000, "钻石*1000", "103215"], [4, "55OB9kdnutU0000hc", 2800, 3000, "钻石*3000", "103214"], [5, "7BktFJ9eIPI0000hd", 6800, 7000, "钻石*7000", "103214"], [6, "8CbboTcgQAn0000he", 9800, 10000, "钻石*10000", "103217"], [7, "6I0UekjBePp0000hf", 19800, 20000, "钻石*20000", "103217"], [8, "6U1htY0UV3i0000hg", 45800, 50000, "钻石*50000", "103218"], [9, "A2d5Hp0SiF40000hh", 88800, 100000, "钻石*100000", "103218"]];
class ShopItemConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$3);
    }
}

var foreign16 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ShopItemConfig: ShopItemConfig
});

const EXCELDATA$2 = [["ID", "Desc", "Name", "TaskType", "TaskItemType", "NextId", "TragetNum", "Coin", "Diamond"], ["", "", "Language", "", "", "", "", "", ""], [1, "每日登录游戏（{0}/{1}）", "Dailylogintothegame", 1, 1, 0, 1, 100, 1], [11, "每日在线时长5分钟（{0}/{1}）", "Dailyonlinedurationminutes", 1, 11, 0, 5, 500, 5], [12, "每日在线时长10分钟（{0}/{1}）", "Dailyonlinedurationminutes", 1, 12, 0, 10, 1000, 10], [13, "每日在线时长15分钟（{0}/{1}）", "Dailyonlinedurationminutes", 1, 13, 0, 15, 1500, 15], [14, "每日在线时长20分钟（{0}/{1}）", "Dailyonlinedurationminutes", 1, 14, 0, 20, 2000, 20], [15, "每日在线时长25分钟（{0}/{1}）", "Dailyonlinedurationminutes", 1, 15, 0, 25, 2500, 25], [16, "每日在线时长30分钟（{0}/{1}）", "Dailyonlinedurationminutes", 1, 16, 0, 30, 3000, 30], [17, "每日在线时长40分钟（{0}/{1}）", "Dailyonlinedurationminutes", 1, 17, 0, 40, 4000, 40], [18, "每日在线时长50分钟（{0}/{1}）", "Dailyonlinedurationminutes", 1, 18, 0, 50, 5000, 50], [19, "每日在线时长60分钟（{0}/{1}）", "Dailyonlinedurationminutes", 1, 19, 0, 60, 6000, 60], [31, "每日击败1个玩家（{0}/{1}）", "Defeatplayersdaily", 1, 31, 0, 1, 100, 1], [32, "每日击败5个玩家（{0}/{1}）", "Defeatplayersdaily", 1, 32, 0, 5, 500, 5], [33, "每日击败10个玩家（{0}/{1}）", "Defeatplayersdaily", 1, 33, 0, 10, 1000, 10], [34, "每日击败20个玩家（{0}/{1}）", "Defeatplayersdaily", 1, 34, 0, 20, 2000, 20], [35, "每日击败30个玩家（{0}/{1}）", "Defeatplayersdaily", 1, 35, 0, 30, 4000, 30], [36, "每日击败50个玩家（{0}/{1}）", "Defeatplayersdaily", 1, 36, 0, 50, 10000, 50], [37, "每日击败100个玩家（{0}/{1}）", "Defeatplayersdaily", 1, 37, 0, 100, 10000, 100], [38, "每日击败200个玩家（{0}/{1}）", "Defeatplayersdaily", 1, 38, 0, 200, 10000, 200], [39, "每日击败300个玩家（{0}/{1}）", "Defeatplayersdaily", 1, 39, 0, 300, 10000, 300], [101, "每周登录1天（{0}/{1}）", "Logindaysperweek", 2, 101, 0, 1, 10000, 100], [102, "每周登录2天（{0}/{1}）", "Logindaysperweek", 2, 102, 0, 2, 20000, 200], [103, "每周登录3天（{0}/{1}）", "Logindaysperweek", 2, 103, 0, 3, 30000, 300], [104, "每周登录4天（{0}/{1}）", "Logindaysperweek", 2, 104, 0, 4, 40000, 400], [105, "每周登录5天（{0}/{1}）", "Logindaysperweek", 2, 105, 0, 5, 50000, 500], [106, "每周登录6天（{0}/{1}）", "Logindaysperweek", 2, 106, 0, 6, 60000, 600], [107, "每周登录7天（{0}/{1}）", "Logindaysperweek", 2, 107, 0, 7, 70000, 700]];
class TaskConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$2);
    }
}

var foreign17 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TaskConfig: TaskConfig
});

const EXCELDATA$1 = [["ID", "TRAILING", "PRICETYPE", "PRICE", "NAME", "DESC"], ["", "", "", "", "Language", ""], [1, "14317", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [2, "14319", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [3, "27399", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [4, "27447", 1, [1, 8888], "ParticleTailing", "粒子拖尾"], [5, "30497", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [6, "88020", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [7, "88442", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [8, "88443", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [9, "88796", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [10, "88794", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [11, "88797", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [12, "88798", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [13, "89592", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [14, "128512", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [15, "128513", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [16, "128514", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [17, "128515", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [18, "128516", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [19, "128517", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [20, "128518", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [21, "146783", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [22, "148710", 1, [1, 8888], "Tail", "拖尾"], [23, "150907", 1, [1, 8888], "WaterTailing", "水拖尾"], [24, "145511", 1, [1, 8888], "FlameTrailing", "火焰拖尾"], [25, "151527", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [26, "151528", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [27, "153603", 1, [1, 8888], "Tail", "拖尾"], [28, "153613", 1, [1, 8888], "Tail", "拖尾"], [29, "128519", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [30, "128520", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [31, "145496", 1, [1, 8888], "SmokeTrail", "烟雾拖尾"], [32, "145506", 1, [1, 8888], "Tail", "拖尾"], [33, "128521", 1, [1, 8888], "BeamTrailing", "光束拖尾"], [34, "4399", 1, [1, 8888], "ThunderTail", "雷拖尾"], [35, "27392", 1, [1, 8888], "RainbowTail", "彩虹拖尾"], [36, "133481", 1, [1, 8888], "TirePrintTailing", "胎印拖尾"], [37, "145492", 1, [1, 8888], "ScrewTail", "螺丝钉拖尾"], [38, "145493", 1, [1, 8888], "FootballTail", "足球拖尾"], [39, "145494", 1, [1, 8888], "RainbowTail", "彩虹拖尾"], [40, "145495", 1, [1, 8888], "CandyTail", "糖果拖尾"], [41, "145497", 1, [1, 8888], "TrophyTail", "奖杯拖尾"], [42, "145498", 1, [1, 8888], "CrownTail", "皇冠拖尾"], [43, "145499", 1, [1, 8888], "LoveTail", "爱心拖尾"], [44, "145500", 1, [1, 8888], "SkullTail", "骷髅拖尾"], [45, "145502", 1, [1, 8888], "BananaTail", "香蕉拖尾"], [46, "145503", 1, [1, 8888], "ThunderTail", "雷电拖尾"], [47, "145504", 1, [1, 8888], "SnowflakeTail", "雪花拖尾"], [48, "145505", 1, [1, 8888], "Tail2023", "2023拖尾"], [49, "145507", 1, [1, 8888], "FirecrackerTail", "爆竹拖尾"], [50, "145508", 1, [1, 8888], "FireworksTail", "烟花拖尾"], [51, "145509", 1, [1, 8888], "GiftTail", "礼物拖尾"], [52, "145510", 1, [1, 8888], "TailOfBanknotes", "钞票拖尾"], [53, "145512", 1, [1, 8888], "BubbleTail", "泡泡拖尾"], [54, "145513", 1, [1, 8888], "RibbonTrailing", "彩带拖尾"], [55, "186344", 1, [1, 8888], "TailOfFeces", "便便拖尾"], [56, "195115", 1, [1, 8888], "MapleLeafTail", "枫叶拖尾"], [57, "196217", 1, [1, 8888], "SixPointedStarTail", "六芒星拖尾"], [58, "221186", 1, [1, 8888], "ButterflyTail", "蝴蝶拖尾"], [59, "221187", 1, [1, 8888], "IceCreamTrail", "冰淇淋拖尾"], [60, "267975", 1, [1, 8888], "BirdTail", "鸟拖尾"], [61, "271639", 1, [1, 8888], "BatTail", "蝙蝠拖尾"], [62, "289528", 1, [1, 8888], "XiangyunTail", "祥云拖尾"], [63, "290033", 1, [1, 8888], "Print", "爪印"]];
class TRAILINGConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$1);
    }
}

var foreign18 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TRAILINGConfig: TRAILINGConfig
});

const EXCELDATA = [["ID", "Des", "WeaponName", "WeaponIcon", "PriceType", "WeaponPrices", "PrefabId", "SlotType", "GunAttitude", "NormalAnims", "NormalAnimTimes", "NormalAtkTime", "NormalBulletCount", "NormalFireInterval", "BulletCount", "Damage", "GunLoc", "GunScale", "ReloadAnimation", "ReloadSound", "SkillAnims", "SkillAnimTimes", "SkillAtkTime", "SkillCDs", "SkillBulletCounts", "SkillFireInterval"], ["", "", "Language", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], [1, "手枪", "Pistol", "221099", 1, [1, 8888], "6B813EDF4B3ADFAEBD7C86A9D6BA535C", 16, "14037", ["20244"], [0.4], [0.2], [1], [0.01], 10, 35, new mw.Vector(0, 0, 0), new mw.Vector(1.5, 1.5, 1.5), "80588", "75374", ["20244", "20244", "20244"], ["0.2", "0.4", "0.6"], [0.2, 0.2, 0.2], [1, 5, 10], [1, 2, 3], [0.01, 0.05, 0.05]], [2, "泡泡枪", "BubbleGun", "168811", 1, [1, 8888], "15BDCB2E4E51C0050B9BC3AF33316ECD", 16, "14037", ["20244"], [0.4], [0.2], [1], [0.01], 10, 35, new mw.Vector(0, 0, 0), new mw.Vector(1.5, 1.5, 1.5), "80588", "75374", ["20244", "20244", "20244"], ["0.2", "0.4", "0.6"], [0.2, 0.2, 0.2], [1, 5, 10], [1, 2, 3], [0.01, 0.05, 0.05]], [3, "散弹喷枪", "ShotgunSprayGun", "155702", 1, [1, 8888], "A963840C405ECBE7EBEC57BD46B26565", 16, "14037", ["20244"], [0.4], [0.2], [1], [0.01], 10, 35, new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), "80588", "75374", ["20244", "20244", "20244"], ["0.2", "0.4", "0.6"], [0.2, 0.2, 0.2], [1, 5, 10], [1, 2, 3], [0.01, 0.05, 0.05]], [4, "霰弹枪", "Shotgun", "226214", 1, [1, 18888], "4FEDD6C54B0257242B22ECA4BE5099DA", 16, "221620", ["99959"], [0.5], [0.18], [1], [0.01], 30, 25, new mw.Vector(0, 0, 0), new mw.Vector(2, 2, 2), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [5, "喷火枪", "SpitfireGun", "226213", 1, [1, 18888], "5AC24144451A25F4D04B3D8400D74B75", 16, "221620", ["99959"], [0.5], [0.18], [1], [0.01], 30, 25, new mw.Vector(0, 0, 0), new mw.Vector(2, 2, 2), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [6, "手枪", "Pistol", "155696", 1, [1, 18888], "21361072458C51775137F086B3D59EA5", 16, "221620", ["99959"], [0.5], [0.18], [1], [0.01], 30, 25, new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [7, "火枪", "FireGun", "122726", 1, [2, 28888], "82B2ADED4C512F42721715BFF158D103", 16, "221620", ["99959"], [0.5], [0.17], [1], [0.01], 30, 25, new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [8, "激光枪", "LaserGun", "222534", 1, [2, 28888], "493A3E1D4A6DFD265D8C1BA51A2010C6", 16, "221620", ["99959"], [0.5], [0.17], [1], [0.01], 30, 25, new mw.Vector(0, 0, 0), new mw.Vector(2, 2, 2), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [9, "水枪", "WaterGun", "122716", 1, [2, 28888], "FADED6DA480333DCE397E08486F6E12B", 16, "221620", ["99959"], [0.5], [0.17], [1], [0.01], 30, 25, new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [10, "火箭发射器", "RocketLauncher", "226826", 1, [2, 28888], "251FCDE54066648DD9228DA8593CABFE", 16, "221620", ["99959"], [0.5], [0.16], [1], [0.01], 30, 25, new mw.Vector(0, 0, 0), new mw.Vector(1.5, 1.5, 1.5), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [11, "橘黄激光枪", "OrangeLaserGun", "95676", 1, [2, 28888], "4F1B0735442C84A20C4C229746C0FB74", 16, "221620", ["99959"], [0.5], [0.16], [1], [0.01], 30, 25, new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [12, "加特林", "JustinGatlin", "320984", 1, [2, 28888], "0B70A2E944C51B1851B5A4AADEAF5D7A", 16, "221620", ["99959"], [0.4], [0.18], [1], [0.01], 100, 20, new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [13, "激光枪", "LaserGun", "122720", 1, [3, 38888], "06AB82414F7B76402C8B96961A2C34A0", 16, "221620", ["99959"], [0.5], [0.15], [1], [0.01], 30, 35, new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [14, "金枪鱼", "Tunas", "138213", 1, [3, 38888], "E7C6A1FA4BB1FFDE6CAF78B69623C3A5", 16, "221620", ["99959"], [0.5], [0.15], [1], [0.01], 30, 35, new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), "80479", "75374", ["99959", "99959", "99959"], ["0.2", "0.6", "1"], [0.2, 0.2, 0.2], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]], [15, "弓箭", "BowAndArrow", "278406", 1, [888, 888888], "2580BDD74D69D7F57E93E29E74B387B6", 15, "20305", ["121952", "121955", "121987", "121989", "121990"], [1.2, 1.43, 2.17, 1.8, 2.2], [0.2, 0.2, 0.6, 0.5, 0.8], [1, 1, 2, 1, 1], [0.01, 0.01, 0.01, 0.01, 0.01], 6, 100, new mw.Vector(0, 0, 0), new mw.Vector(1, 1, 1), "20228", "75374", ["121981", "121981", "121981"], ["2.47", "2.47", "2.47"], [1.05, 1.05, 1.05], [1, 3, 5], [1, 3, 5], [0.01, 0.05, 0.05]]];
class WeaponPropConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA);
    }
}

var foreign19 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    WeaponPropConfig: WeaponPropConfig
});

class GameConfig {
    /**
    * 多语言设置
    * @param languageIndex 语言索引(-1为系统默认语言)
    * @param getLanguageFun 根据key获取语言内容的方法
    */
    static initLanguage(languageIndex, getLanguageFun) {
        ConfigBase.initLanguage(languageIndex, getLanguageFun);
        this.configMap.clear();
    }
    static getConfig(ConfigClass) {
        if (!this.configMap.has(ConfigClass.name)) {
            this.configMap.set(ConfigClass.name, new ConfigClass());
        }
        return this.configMap.get(ConfigClass.name);
    }
    static get GUN() { return this.getConfig(GUNConfig); }
    ;
    static get Language() { return this.getConfig(LanguageConfig); }
    ;
    static get MonsterInfo() { return this.getConfig(MonsterInfoConfig); }
    ;
    static get Morph() { return this.getConfig(MorphConfig); }
    ;
    static get ProjectileProp() { return this.getConfig(ProjectilePropConfig); }
    ;
    static get ROLE() { return this.getConfig(ROLEConfig); }
    ;
    static get ShopItem() { return this.getConfig(ShopItemConfig); }
    ;
    static get Task() { return this.getConfig(TaskConfig); }
    ;
    static get TRAILING() { return this.getConfig(TRAILINGConfig); }
    ;
    static get WeaponProp() { return this.getConfig(WeaponPropConfig); }
    ;
}
GameConfig.configMap = new Map();

var foreign9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GameConfig: GameConfig
});

var PrefabEvent;
(function (PrefabEvent) {
    /**
     * 网络事件key
     */
    var _onEventNetKey = "PrefabEventNeyKey";
    /**
     * 本地事件key
     */
    var _onEventKey = "PrefabEvetKey";
    /**
     * 重新提交数据保存
     */
    var _retrySetCustomDataList = [];
    /**
     * 初始化事件监听器
     */
    function initEvent() {
        if (mwext["PrefabEvent"]) {
            return;
        }
        mwext["PrefabEvent"] = true;
        if (SystemUtil.isServer()) {
            DataStorage.setTemporaryStorage(mw.SystemUtil.isPIE);
            Event.addLocalListener("__setCustomDataCache", (k, v) => {
                _retrySetCustomDataList.push({ key: k, val: v });
            });
            setInterval(() => {
                let keyMap = new Map();
                _retrySetCustomDataList.forEach(e => {
                    keyMap.set(e.key, e.val);
                });
                _retrySetCustomDataList = [];
                keyMap.forEach((v, k, maps) => {
                    _retrySetCustomDataList.push({ key: k, val: v });
                });
                while (_retrySetCustomDataList.length > 0) {
                    let data = _retrySetCustomDataList.shift();
                    if (data) {
                        DataStorage.asyncSetData(data.key, data.val).then((res) => {
                            if (res != mw.DataStorageResultCode.Success) {
                                _retrySetCustomDataList.push(data);
                            }
                        }).catch((err) => {
                            _retrySetCustomDataList.push(data);
                        });
                    }
                }
            }, 6500);
        }
        var call = (clazzName, funcName, ...params) => {
            if (!PrefabEvent[clazzName]) {
                // Console.error("无效协议 : " + clazzName);
                return;
            }
            if (!PrefabEvent[clazzName][funcName]) {
                // Console.error("无效协议 : " + clazzName + ":" + funcName);
                return;
            }
            // Console.log("调用 : " + _onEventKey + ":" + clazzName + ":" + funcName);
            Event.dispatchToLocal(_onEventKey + ":" + clazzName + ":" + funcName, ...params);
        };
        if (mw.SystemUtil.isServer()) {
            Event.addClientListener(_onEventNetKey, (player, clazzName, funcName, ...params) => {
                call(clazzName, funcName, ...params);
            });
        }
        if (mw.SystemUtil.isClient()) {
            Event.addServerListener(_onEventNetKey, (clazzName, funcName, ...params) => {
                call(clazzName, funcName, ...params);
            });
        }
    }
    /**
     * 回调客户端事件
     * @param clazzName
     * @param funcName
     * @param params
     */
    function callClientFunc(clazzName, funcName, ...params) {
        Event.dispatchToLocal(_onEventKey + ":" + clazzName + ":" + funcName, ...params);
    }
    /**
     * 回调事件
     * @param clazzName
     * @param funcName
     * @param params
     */
    function callFunc(clazzName, funcName, ...params) {
        if (mw.SystemUtil.isClient()) {
            Event.dispatchToServer(_onEventNetKey, clazzName, funcName, ...params);
        }
        if (mw.SystemUtil.isServer()) {
            Event.dispatchToAllClient(_onEventNetKey, clazzName, funcName, ...params);
        }
        Event.dispatchToLocal(_onEventKey + ":" + clazzName + ":" + funcName, ...params);
    }
    /**
     * 监听事件
     * @param clazzName
     * @param funcName
     * @param callback
     */
    function onFunc(clazzName, funcName, callback) {
        // Console.log("注册 : " + _onEventKey + ":" + clazzName + ":" + funcName);
        return Event.addLocalListener(_onEventKey + ":" + clazzName + ":" + funcName, callback);
    }
    /**
     * 存档工具
     */
    class DBSaveBase {
    }
    /**
 * 存档工具
 */
    class DBServerTool {
        /**
         * 获取玩家数据缓存
         * @param playerId
         * @returns
         */
        static getPlayerDataCache(playerId) {
            let dataCache = null;
            if (mwext["PrefabEventDataCache"]) {
                dataCache = mwext["PrefabEventDataCache"];
            }
            else {
                mwext["PrefabEventDataCache"] = {};
                dataCache = mwext["PrefabEventDataCache"];
            }
            if (!dataCache[playerId]) {
                dataCache[playerId] = {};
            }
            return dataCache[playerId];
        }
        /**
         * (服务端)获取存档
         * @param playerId
         * @param key
         * @returns
         */
        static async asyncGetValue(playerId, key) {
            //Console.error("asyncGetValue : 获取存档数据开始");
            return new Promise((resolve, reject) => {
                let playerDataCache = this.getPlayerDataCache(playerId);
                let dataKey = key + "_" + playerId + "_key";
                let dataVal = null;
                let keys = Object.keys(playerDataCache);
                keys.forEach((v, i, arr) => {
                    if (v == dataKey) {
                        dataVal = playerDataCache[dataKey];
                    }
                });
                if (dataVal) {
                    let res = null;
                    let db = dataVal;
                    if (!db) {
                        resolve(null);
                        return;
                    }
                    res = JSON.parse(db);
                    resolve(res.value);
                    return;
                }
                Utils.asyncRpcGetData(dataKey).then((v) => {
                    let res = null;
                    let db = v;
                    if (!db) {
                        resolve(null);
                    }
                    res = JSON.parse(db);
                    playerDataCache[dataKey] = db;
                    //Console.error("asyncGetValue : 获取存档数据成功");
                    resolve(res.value);
                }).catch(err => {
                    // Console.log(err);
                    reject("不存在这份存档，可能是新玩家");
                });
            });
        }
        /**
         * (服务端)设置存档
         * @param playerId
         * @param key
         * @param val
         */
        static async asyncSetValue(playerId, key, val) {
            return new Promise((resolve, reject) => {
                let data = new DBSaveBase();
                data.value = val;
                let dataStr = JSON.stringify(data);
                let playerDataCache = this.getPlayerDataCache(playerId);
                let dataKey = key + "_" + playerId + "_key";
                if (playerDataCache[dataKey] == dataStr) {
                    resolve();
                    return;
                }
                playerDataCache[dataKey] = dataStr;
                Event.dispatchToLocal("__setCustomDataCache", key + "_" + playerId + "_key", dataStr);
                resolve();
            });
        }
    }
    PrefabEvent.DBServerTool = DBServerTool;
    (function (AttrType) {
        /** 最大血量  */
        AttrType[AttrType["MaxHp"] = 0] = "MaxHp";
        /** 最大蓝量 */
        AttrType[AttrType["MaxMp"] = 1] = "MaxMp";
        /** 攻击力 */
        AttrType[AttrType["Attack"] = 2] = "Attack";
        /** 魔法力 */
        AttrType[AttrType["Magic"] = 3] = "Magic";
        /** 防御力 */
        AttrType[AttrType["Def"] = 4] = "Def";
        /** 魔法防御力 */
        AttrType[AttrType["MDef"] = 5] = "MDef";
        /** 速度 */
        AttrType[AttrType["Speed"] = 6] = "Speed";
        /** 跳跃力 */
        AttrType[AttrType["Jump"] = 7] = "Jump";
        /** 攻击速度 */
        AttrType[AttrType["AttackSpeed"] = 8] = "AttackSpeed";
        /** 攻击距离 */
        AttrType[AttrType["AttackDistance"] = 9] = "AttackDistance";
    })(PrefabEvent.AttrType || (PrefabEvent.AttrType = {}));
    /**
     * 属性协议
     */
    class PrefabEvtAttr {
        /**
         * (双端)添加属性
         * @param senderGuid 发起对象Guid
         * @param targetGuid 目标对象Guid
         * @param val 值
         * @param attrType 属性类型
         */
        static addAttrVal(senderGuid, targetGuid, val, attrType) {
            callFunc(this.name, this.onAddAttrVal.name, senderGuid, targetGuid, val, attrType);
        }
        /**
         * (双端)监听属性改变
         * @param callback 回调
         * @returns
         */
        static onAddAttrVal(callback) {
            return onFunc(this.name, this.onAddAttrVal.name, callback);
        }
    }
    PrefabEvent.PrefabEvtAttr = PrefabEvtAttr;
    (function (EquipSlot) {
        /** 武器 */
        EquipSlot[EquipSlot["Weapon"] = 1] = "Weapon";
    })(PrefabEvent.EquipSlot || (PrefabEvent.EquipSlot = {}));
    /**
     * 装备协议
     */
    class PrefabEvtEquip {
        /**
         * (双端) 穿戴装备
         * @param targetGuid 对象Guid
         * @param slot 槽位
         * @param equipGuid 装备Guid
         */
        static equip(targetGuid, slot, equipGuid) {
            callFunc(this.name, this.onEquip.name, targetGuid, slot, equipGuid);
        }
        /**
         * (双端)监听装备改变
         * @param callback
         * @returns
         */
        static onEquip(callback) {
            return onFunc(this.name, this.onEquip.name, callback);
        }
    }
    PrefabEvent.PrefabEvtEquip = PrefabEvtEquip;
    /**
     * 玩家信息类型
     */
    let PlayerInfoType;
    (function (PlayerInfoType) {
        /** 名字 */
        PlayerInfoType[PlayerInfoType["Name"] = 0] = "Name";
        /** 等级 */
        PlayerInfoType[PlayerInfoType["Level"] = 1] = "Level";
        /** 经验 */
        PlayerInfoType[PlayerInfoType["Exp"] = 2] = "Exp";
        /** 金币 */
        PlayerInfoType[PlayerInfoType["Gold"] = 3] = "Gold";
        /** 积分 */
        PlayerInfoType[PlayerInfoType["Score"] = 4] = "Score";
        /** 关卡 */
        PlayerInfoType[PlayerInfoType["Stage"] = 5] = "Stage";
        /** 人气 */
        PlayerInfoType[PlayerInfoType["Popularity"] = 6] = "Popularity";
    })(PlayerInfoType = PrefabEvent.PlayerInfoType || (PrefabEvent.PlayerInfoType = {}));
    /**
     * 玩家信息协议
     */
    class PrefabEvtPlayerInfo {
        /**
         * (双端)设置属性
         * @param senderGuid 发起对象Guid
         * @param targetGuid 目标对象Guid
         * @param val 值
         * @param infoType 信息类型
         */
        static setPlayerInfo(senderGuid, targetGuid, val, infoType) {
            callFunc(this.name, this.onSetPlayerInfo.name, senderGuid, targetGuid, val, infoType);
        }
        /**
         * (双端)监听属性改变
         * @param callback 回调
         * @returns
         */
        static onSetPlayerInfo(callback) {
            return onFunc(this.name, this.onSetPlayerInfo.name, callback);
        }
        /**
         * (双端)添加属性
         * @param senderGuid 发起对象Guid
         * @param targetGuid 目标对象Guid
         * @param val 值
         * @param infoType 信息类型
         */
        static addPlayerInfo(senderGuid, targetGuid, val, attrType) {
            callFunc(this.name, this.onAddPlayerInfo.name, senderGuid, targetGuid, val, PlayerInfoType);
        }
        /**
         * (双端)监听属性改变
         * @param callback 回调
         * @returns
         */
        static onAddPlayerInfo(callback) {
            return onFunc(this.name, this.onAddPlayerInfo.name, callback);
        }
        /**
         * (双端) 设置玩家名字
         * @param senderGuid 发起者Guid
         * @param targetGuid 目标对象Guid (玩家character)
         * @param name 名字
         */
        static setPlayerName(senderGuid, targetGuid, name) {
            callFunc(this.name, this.onSetPlayerName.name, senderGuid, targetGuid, name);
        }
        /**
         * (双端)监听玩家名字改变
         * @param callback 回调
         * @returns
         */
        static onSetPlayerName(callback) {
            return onFunc(this.name, this.onSetPlayerName.name, callback);
        }
    }
    PrefabEvent.PrefabEvtPlayerInfo = PrefabEvtPlayerInfo;
    /**
     * 攻击协议
     */
    class PrefabEvtFight {
        /**
         * (双端)击中目标
         * @param attackerGuid 发起对象Guid
         * @param targetGuid 目标对象Guid
         * @param damage 伤害
         * @param hitPoint 击中点
         */
        static hit(senderGuid, targetGuid, damage, hitPoint) {
            callFunc(this.name, this.onHit.name, senderGuid, targetGuid, damage, hitPoint);
        }
        /**
         * (双端)监听击中目标
         * @param callback 回调
         * @returns
         */
        static onHit(callback) {
            return onFunc(this.name, this.onHit.name, callback);
        }
        /**
         * (双端)发起伤害
         * @param attackerGuid 发起对象Guid
         * @param targetGuid 目标对象Guid
         * @param damage 伤害
         */
        static hurt(senderGuid, targetGuid, damage) {
            callFunc(this.name, this.onHurt.name, senderGuid, targetGuid, damage);
        }
        /**
         * (双端)监听受到伤害
         * @param callback 回调
         * @returns
         */
        static onHurt(callback) {
            return onFunc(this.name, this.onHurt.name, callback);
        }
        /**
         * (双端)发起治疗
         * @param attackerGuid 发起对象Guid
         * @param targetGuid 目标对象Guid
         * @param cureVal 治疗数值
         */
        static cure(senderGuid, targetGuid, cureVal) {
            callFunc(this.name, this.onCure.name, senderGuid, targetGuid, cureVal);
        }
        /**
         * (双端)监听受到治疗
         * @param callback 回调
         * @returns
         */
        static onCure(callback) {
            return onFunc(this.name, this.onCure.name, callback);
        }
        /**
         * (双端)发起死亡
         * @param targetGuid
         */
        static die(targetGuid) {
            callFunc(this.name, this.onDie.name, targetGuid);
        }
        /**
         * (双端)监听对象死亡
         * @param callback
         * @returns
         */
        static onDie(callback) {
            return onFunc(this.name, this.onDie.name, callback);
        }
        /**
         * (双端)通知复活
         * @param targetGuid 对象id
         */
        static revive(targetGuid) {
            callFunc(this.name, this.onRevive.name, targetGuid);
        }
        /**
         * (双端)监听复活
         * @param callback 回调
         * @returns
         */
        static onRevive(callback) {
            return onFunc(this.name, this.onRevive.name, callback);
        }
    }
    PrefabEvent.PrefabEvtFight = PrefabEvtFight;
    /**
     * 记录点协议
     */
    class PrefabEvtRecordPoint {
        /**
         * (双端)设置关卡
         * @param senderGuid 发送者Guid
         * @param targetGuid 目标Guid
         * @param recordPointId 记录点id
         */
        static setRecordPoint(senderGuid, targetGuid, recordPointId) {
            callFunc(this.name, this.onSetRecordPoint.name, senderGuid, targetGuid, recordPointId);
        }
        /**
         * (双端)监听设置关卡
         * @param callback 回调
         * @returns
         */
        static onSetRecordPoint(callback) {
            return onFunc(this.name, this.onSetRecordPoint.name, callback);
        }
        /**
         * (双端)返回存档记录点
         * @param senderGuid 发送者guid
         */
        static backCurrentRecordPoint(senderGuid) {
            callFunc(this.name, this.onBackCurrentRecordPoint.name, senderGuid);
        }
        /**
         * (双端)监听回到存档记录点
         * @param callback 回调
         */
        static onBackCurrentRecordPoint(callback) {
            return onFunc(this.name, this.onBackCurrentRecordPoint.name, callback);
        }
        /**
         * (双端)返回记录点
         * @param senderGuid 发送者guid
         * @param recordPointId 记录点id
         */
        static backRecordPoint(senderGuid, recordPointId) {
            callFunc(this.name, this.onBackRecordPoint.name, senderGuid, recordPointId);
        }
        /**
         * (双端)监听回到记录点
         * @param callback 回调
         */
        static onBackRecordPoint(callback) {
            return onFunc(this.name, this.onBackRecordPoint.name, callback);
        }
    }
    PrefabEvent.PrefabEvtRecordPoint = PrefabEvtRecordPoint;
    /**
     * 通知协议
     */
    class PrefabEvtNotify {
        /**
         * (客户端)本地通知
         * @param text
         */
        static notifyLocal(text) {
            callClientFunc(this.name, this.onNotify.name, text);
        }
        /**
         * (双端)全局通知
         * @param text 信息
         */
        static notify(text) {
            callFunc(this.name, this.onNotify.name, text);
        }
        /**
         * (双端)监听通知
         * @param callback
         * @returns
         */
        static onNotify(callback) {
            return onFunc(this.name, this.onNotify.name, callback);
        }
    }
    PrefabEvent.PrefabEvtNotify = PrefabEvtNotify;
    /**
     * 排行榜协议
     */
    class PrefabEvtRank {
        /**
         * (客户端)打开排行榜UI
         */
        static openRank() {
            callClientFunc(this.name, this.onOpenRank.name);
        }
        /**
         * (客户端)监听打开排行榜UI
         * @param callback 回调
         * @returns
         */
        static onOpenRank(callback) {
            return onFunc(this.name, this.onOpenRank.name, callback);
        }
        /**
         * (双端)设置排行榜数据
         * @param senderGuid
         * @param score
         * @param typeName
         */
        static setRankData(senderGuid, name, score, typeName) {
            callFunc(this.name, this.onSetRankData.name, senderGuid, name, score, typeName);
        }
        /**
         * (双端)监听设置排行榜数据
         * @param callback
         * @returns
         */
        static onSetRankData(callback) {
            return onFunc(this.name, this.onSetRankData.name, callback);
        }
        /**
         * (双端)删除排行榜数据
         * @param senderGuid
         */
        static delRankData(senderGuid) {
            callFunc(this.name, this.onDelRankData.name, senderGuid);
        }
        /**
         * (双端)监听删除排行榜数据
         * @param callback
         * @returns
         */
        static onDelRankData(callback) {
            return onFunc(this.name, this.onDelRankData.name, callback);
        }
    }
    PrefabEvent.PrefabEvtRank = PrefabEvtRank;
    /**
     * 换装协议
     */
    class PrefabEvtCloth {
        /**
         * (客户端)加载角色体型
         * @param senderGuid 发送者Guid
         * @param targetGuid 目标对象Guid
         * @param dressResGuid 装扮资源Guid
         */
        static loadRole(senderGuid, targetGuid, dressResGuid) {
            callClientFunc(this.name, this.onLoadRole.name, senderGuid, targetGuid, dressResGuid);
        }
        /**
         * (客户端)监听加载角色体型协议
         * @param callback 回调
         * @returns
         */
        static onLoadRole(callback) {
            return onFunc(this.name, this.onLoadRole.name, callback);
        }
        /**
         * (客户端)加载装扮
         * @param senderGuid 发送者Guid
         * @param targetGuid 目标对象Guid
         * @param dressResGuid 装扮资源Guid
         */
        static loadCloth(senderGuid, targetGuid, dressResGuid) {
            callClientFunc(this.name, this.onLoadCloth.name, senderGuid, targetGuid, dressResGuid);
        }
        /**
         * (客户端)监听加载装扮
         * @param callback
         * @returns
         */
        static onLoadCloth(callback) {
            return onFunc(this.name, this.onLoadCloth.name, callback);
        }
        /**
         * (客户端)加载插槽资源
         * @param senderGuid 发送者Guid
         * @param targetGuid 目标对象Guid
         * @param slotResGuid 插槽资源Guid
         */
        static loadSlot(senderGuid, targetGuid, slotResGuid) {
            callClientFunc(this.name, this.onLoadSlot.name, senderGuid, targetGuid, slotResGuid);
        }
        /**
         * (客户端)监听加载插槽资源
         * @param callback
         * @returns
         */
        static onLoadSlot(callback) {
            return onFunc(this.name, this.onLoadSlot.name, callback);
        }
    }
    PrefabEvent.PrefabEvtCloth = PrefabEvtCloth;
    /**
* 模板埋点注解(仅客户端生效)
* @param reportId 模板id
* @returns
*/
    function PrefabReport(reportId = null) {
        return function (target, propertyKey, descriptor) {
            const method = descriptor.value;
            descriptor.value = function (...args) {
                if (SystemUtil.isClient() && reportId) {
                    // Console.log("模板", target.constructor.name, "埋点", reportId);
                    mw.RoomService.reportLogInfo("ts_action_firstdo", "模板埋点", JSON.stringify({ record: "TemplatePrefab", lifetime: reportId }));
                }
                const result = method.apply(this, args);
                return result;
            };
        };
    }
    PrefabEvent.PrefabReport = PrefabReport;
    /**
     * 收集物协议
     */
    class PrefabEvtCollection {
        /**
         * (客户端)打开收集物UI
         */
        static openCollectionUI() {
            callClientFunc(this.name, this.onOpenCollectionUI.name);
        }
        /**
         * (客户端)监听收集物UI被打开
         * @param callback
         * @returns
         */
        static onOpenCollectionUI(callback) {
            return onFunc(this.name, this.onOpenCollectionUI.name, callback);
        }
        /**
         * (双端)获得收集物
         * @param senderGuid
         * @param targetGuid
         * @param atlasId
         */
        static addCollection(atlasId, playerId) {
            callFunc(this.name, this.onAddCollection.name, atlasId, playerId);
        }
        /**
         * (双端)监听获得收集物
         * @param callback 回调
         * @returns
         */
        static onAddCollection(callback) {
            return onFunc(this.name, this.onAddCollection.name, callback);
        }
    }
    PrefabEvent.PrefabEvtCollection = PrefabEvtCollection;
    initEvent();
})(PrefabEvent || (PrefabEvent = {}));
/**
* 模板埋点注解(仅客户端生效)
* @param reportId 模板id
* @returns
*/
function PrefabReport(reportId = null) {
    return function (target, propertyKey, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            if (SystemUtil.isClient() && reportId) {
                // Console.log("模板", target.constructor.name, "埋点", reportId);
                mw.RoomService.reportLogInfo("ts_action_firstdo", "模板埋点", JSON.stringify({ record: "TemplatePrefab", lifetime: reportId }));
            }
            const result = method.apply(this, args);
            return result;
        };
    };
}

var foreign82 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get PrefabEvent () { return PrefabEvent; },
    PrefabReport: PrefabReport
});

class CoinData extends Subdata {
    constructor() {
        super(...arguments);
        this.coin = 0;
        this.diamond = 0;
        this.isFirstBuy = true;
    }
    initDefaultData() {
        this.coin = 5000;
        this.diamond = 0;
        this.isFirstBuy = true;
    }
    setCoin(coin) {
        this.coin = coin;
        this.save(true);
    }
    setDiamond(diamond) {
        this.diamond = diamond;
        this.save(true);
    }
    setFirstBuy(isFirstBuy) {
        this.isFirstBuy = isFirstBuy;
        this.save(true);
    }
}
__decorate([
    Decorator.persistence()
], CoinData.prototype, "coin", void 0);
__decorate([
    Decorator.persistence()
], CoinData.prototype, "diamond", void 0);
__decorate([
    Decorator.persistence()
], CoinData.prototype, "isFirstBuy", void 0);

var foreign26 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: CoinData
});

class CoinModuleS extends ModuleS {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.bindEvent();
    }
    bindEvent() {
        // const onShipOrder = (playerId: number, orderId: string, commodityId: string, amount: number, confirmOrder: (bReceived: boolean) => void) => {
        //     //根据 playerId 和 commodityId 来处理购买成功后的逻辑
        //     confirmOrder(true); //调用这个方法表示确认收货成功
        //     this.deliverGoods(playerId, commodityId);
        // }
        // // 监听订单发货后的委托
        // mw.PurchaseService.onOrderDelivered.add(onShipOrder);
    }
    // private async deliverGoods(playerId: number, commodityId: string): Promise<void> {
    //     let player = await Player.asyncGetPlayer(playerId);
    //     if (!player) return;
    //     this.getClient(player).net_deliverGoods(commodityId);
    // }
    net_setCoin(coin) {
        this.currentData.setCoin(coin);
    }
    net_setDiamond(diamond) {
        this.currentData.setDiamond(diamond);
    }
    net_setFirstBuy(isFirstBuy) {
        this.currentData.setFirstBuy(isFirstBuy);
    }
    killPlayerAddCoin(player) {
        let coinData = DataCenterS.getData(player, CoinData);
        let randomCoin = Utils.randomInt(10, 30);
        coinData.coin += randomCoin;
        coinData.save(true);
        this.getClient(player).net_killPlayerAddCoin(randomCoin);
    }
}
__decorate([
    Decorator.noReply()
], CoinModuleS.prototype, "net_setCoin", null);
__decorate([
    Decorator.noReply()
], CoinModuleS.prototype, "net_setDiamond", null);
__decorate([
    Decorator.noReply()
], CoinModuleS.prototype, "net_setFirstBuy", null);

var foreign28 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: CoinModuleS
});

var EventType;
(function (EventType) {
    /**打开关闭（主控UI-HUD、Radar、Weapon） */
    EventType["OnOffMainHUD"] = "OnOffMainHUD";
    EventType["TryOutGun"] = "TryOutGun";
    EventType["OnOffWeaponUI"] = "OnOffWeaponUI";
})(EventType || (EventType = {}));

var foreign74 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get EventType () { return EventType; }
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/CoinModule/CoinPanel.ui
 * TIME: 2024.10.27-00.04.44
 */
let CoinPanel_Generate = class CoinPanel_Generate extends UIScript {
    get mCoinCanvas() {
        if (!this.mCoinCanvas_Internal && this.uiWidgetBase) {
            this.mCoinCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mCoinCanvas');
        }
        return this.mCoinCanvas_Internal;
    }
    get mCoinTextBlock() {
        if (!this.mCoinTextBlock_Internal && this.uiWidgetBase) {
            this.mCoinTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mCoinCanvas/CoinCanvas/mCoinTextBlock');
        }
        return this.mCoinTextBlock_Internal;
    }
    get mAddCoinButton() {
        if (!this.mAddCoinButton_Internal && this.uiWidgetBase) {
            this.mAddCoinButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mCoinCanvas/mAddCoinButton');
        }
        return this.mAddCoinButton_Internal;
    }
    get mDiamondCanvas() {
        if (!this.mDiamondCanvas_Internal && this.uiWidgetBase) {
            this.mDiamondCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mDiamondCanvas');
        }
        return this.mDiamondCanvas_Internal;
    }
    get mDiamondTextBlock() {
        if (!this.mDiamondTextBlock_Internal && this.uiWidgetBase) {
            this.mDiamondTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mDiamondCanvas/DiamondCanvas/mDiamondTextBlock');
        }
        return this.mDiamondTextBlock_Internal;
    }
    get mAddDiamondButton() {
        if (!this.mAddDiamondButton_Internal && this.uiWidgetBase) {
            this.mAddDiamondButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/CoinCanvas/mDiamondCanvas/mAddDiamondButton');
        }
        return this.mAddDiamondButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mAddCoinButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mAddCoinButton");
        });
        this.mAddCoinButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mAddDiamondButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mAddDiamondButton");
        });
        this.mAddDiamondButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mCoinTextBlock);
        this.initLanguage(this.mDiamondTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
CoinPanel_Generate = __decorate([
    UIBind('UI/module/CoinModule/CoinPanel.ui')
], CoinPanel_Generate);
var CoinPanel_Generate$1 = CoinPanel_Generate;

var foreign92 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: CoinPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/AdModule/AdPanel.ui
 * TIME: 2024.10.27-00.04.44
 */
let AdPanel_Generate = class AdPanel_Generate extends UIScript {
    get mTitleTxt() {
        if (!this.mTitleTxt_Internal && this.uiWidgetBase) {
            this.mTitleTxt_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/Canvas_1/mTitleTxt');
        }
        return this.mTitleTxt_Internal;
    }
    get mContentTxt() {
        if (!this.mContentTxt_Internal && this.uiWidgetBase) {
            this.mContentTxt_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/Canvas_1/mContentTxt');
        }
        return this.mContentTxt_Internal;
    }
    get mNoBtn() {
        if (!this.mNoBtn_Internal && this.uiWidgetBase) {
            this.mNoBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/Canvas_1/mNoBtn');
        }
        return this.mNoBtn_Internal;
    }
    get mYesBtn() {
        if (!this.mYesBtn_Internal && this.uiWidgetBase) {
            this.mYesBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/Canvas_1/mYesBtn');
        }
        return this.mYesBtn_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.mNoBtn.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mNoBtn");
        });
        this.initLanguage(this.mNoBtn);
        this.mNoBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mTitleTxt);
        this.initLanguage(this.mContentTxt);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
AdPanel_Generate = __decorate([
    UIBind('UI/module/AdModule/AdPanel.ui')
], AdPanel_Generate);
var AdPanel_Generate$1 = AdPanel_Generate;

var foreign91 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: AdPanel_Generate$1
});

class AdPanel extends AdPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.callback = null;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = mw.UILayerDialog;
        this.bindButtons();
        this.initTextBlock();
    }
    initTextBlock() {
        this.mTitleTxt.text = GameConfig.Language.FreeToReceive.Value;
        if (GlobalData.languageId == 0) {
            this.mTitleTxt.fontSize = 20;
            this.mContentTxt.fontSize = 30;
        }
    }
    bindButtons() {
        this.mYesBtn.onClose.add(this.onClickYesButton.bind(this));
        this.mNoBtn.onClicked.add(this.onClickNoButton.bind(this));
    }
    onClickYesButton(isSuccess) {
        if (!isSuccess) {
            Notice.showDownNotice(GameConfig.Language.AcquisitionFailedPleaseTryAgain.Value);
            return;
        }
        this.hideAdPanel();
        if (this.callback)
            this.callback();
    }
    onClickNoButton() {
        this.hideAdPanel();
    }
    showRewardAd(callback, contentText, noText, yesText) {
        this.callback = callback;
        this.mContentTxt.text = contentText;
        this.mNoBtn.text = noText;
        this.mYesBtn.text = yesText;
        this.showAdPanel();
    }
    showAdPanel() {
        if (this.visible)
            return;
        this.show();
    }
    hideAdPanel() {
        if (!this.visible)
            return;
        Utils.closeUITween(this.rootCanvas, null, () => {
            this.hide();
        });
    }
    onShow(...params) {
        Utils.openUITween(this.rootCanvas, null, null);
    }
}

var foreign25 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: AdPanel
});

// import DiamondPanel from "./ui/DiamondPanel";
class CoinModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.coinPanel = null;
        this.adPanel = null;
        // private diamondPanel: DiamondPanel = null;
        // private get getDiamondPanel(): DiamondPanel {
        //     if (this.diamondPanel == null) {
        //         this.diamondPanel = mw.UIService.getUI(DiamondPanel);
        //     }
        //     return this.diamondPanel;
        // }
        this.confirmPanel = null;
        this.onAddCoinAction = new Action();
        this.onAddDiamondAction = new Action();
        this.coin = 0;
        this.diamond = 0;
        //#endregion
        // //#region Ads
        // private defaultAds(): void {
        //     this.delay30Seconds();
        //     this.setInterval180Seconds();
        // }
        // private delay30Seconds(): void {
        //     TimeUtil.delaySecond(30).then(() => {
        //         this.getAdPanel.showRewardAd(() => {
        //             this.setDiamond(2);
        //         }, "大礼包\n免费获得2个钻石");
        //     });
        // }
        // private setInterval180Seconds(): void {
        //     TimeUtil.setInterval(() => {
        //         this.getAdPanel.showRewardAd(() => {
        //             this.setDiamond(2);
        //         }, "幸运大礼包\n免费获得2个钻石");
        //     }, 180);
        // }
        // private isFirst: boolean = true;
        // public dieAds(): void {
        //     if (this.isFirst) {
        //         this.isFirst = false;
        //         return;
        //     }
        //     this.getAdPanel.showRewardAd(() => {
        //         this.setDiamond(2);
        //     }, "被击败奖励\n免费获得2个钻石");
        //     Event.dispatchToLocal(EventType.TryOutGun);
        // }
        //#endregion
        //#region LeBi
        // private isFirstBuy: boolean = true;
        // public get getIsFirstBuy(): boolean {
        //     return this.isFirstBuy;
        // }
        // private setFirstBuy(): void {
        //     if (!this.isFirstBuy) return;
        //     this.isFirstBuy = false;
        //     this.getDiamondPanel.refreshDiamondItems();
        //     this.server.net_setFirstBuy(this.isFirstBuy);
        // }
        // private shopItemElements: IShopItemElement[] = [];
        // private get getShopItemElements(): IShopItemElement[] {
        //     if (!this.shopItemElements || this.shopItemElements.length == 0) {
        //         this.shopItemElements = GameConfig.ShopItem.getAllElement();
        //     }
        //     return this.shopItemElements;
        // }
        // private initLeBiData(): void {
        //     this.isFirstBuy = this.data.isFirstBuy;
        //     this.shopItemElements = GameConfig.ShopItem.getAllElement();
        //     this.getDiamondPanel.initDiamondItem();
        // }
        // public openShopBuyDiamondCoin(diamond: number = 0): void {
        //     if (diamond == 0 || !TSIAPService.enable) {
        //         this.getDiamondPanel.show();
        //     } else {
        //         for (let i = 0; i < this.shopItemElements.length; ++i) {
        //             if (this.shopItemElements[i].Count >= diamond) {
        //                 TSIAPService.reqBuyGoods(this.shopItemElements[i].CommodityId);
        //                 console.warn(`diamond:${diamond}`);
        //                 break;
        //             }
        //         }
        //     }
        // }
        // public net_deliverGoods(commodityId: string): void {
        //     let diamondCount = this.getBuyDiamondCount(commodityId);
        //     Notice.showDownNotice(`购买成功`);
        //     if (this.isFirst) diamondCount *= 2;
        //     this.setDiamond(diamondCount);
        //     this.setFirstBuy();
        // }
        // private getBuyDiamondCount(commodityId: string): number {
        //     for (let i = 0; i < this.getShopItemElements.length; ++i) {
        //         if (this.getShopItemElements[i].CommodityId == commodityId) {
        //             return this.getShopItemElements[i].Count;
        //         }
        //     }
        //     return 0;
        // }
        // public buyDiamond(shopItemElement: IShopItemElement): void {
        //     if (!shopItemElement.CommodityId || !TSIAPService.enable) {
        //         this.getAdPanel.showRewardAd(() => {
        //             this.setDiamond(5);
        //         }, "购买失败,请升级233乐园\n大礼包\n免费获得5个钻石");
        //         return;
        //     }
        //     let contentText: string = `消耗${shopItemElement.PartyPrice}乐币购买${shopItemElement.Count * (this.isFirstBuy ? 2 : 1)}钻石`;
        //     this.getConfirmPanel.confirmTips(() => {
        //         TSIAPService.reqBuyGoods(shopItemElement.CommodityId);
        //     }, contentText, "购买", "取消");
        // }
        //#endregion
    }
    get getCoinPanel() {
        if (this.coinPanel == null) {
            this.coinPanel = mw.UIService.getUI(CoinPanel);
        }
        return this.coinPanel;
    }
    get getAdPanel() {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.initUIPanel();
        this.bindEventAction();
    }
    initUIPanel() {
        this.coinPanel = mw.UIService.getUI(CoinPanel);
        this.adPanel = UIService.getUI(AdPanel);
    }
    bindEventAction() {
        this.onAddCoinAction.add(this.getCoinByAd.bind(this));
        this.onAddDiamondAction.add(this.getDiamondByAd.bind(this));
    }
    onEnterScene(sceneType) {
        this.getCoinPanel.show();
        this.coin = this.data.coin;
        this.diamond = this.data.diamond;
        this.getCoinPanel.setCoinAndDiamond(this.coin, this.diamond);
        // this.defaultAds();
        // this.initLeBiData();
    }
    //#region Coin
    setCoin(coin) {
        this.coin += coin;
        this.popupNotice(coin, true);
        if (this.coin < 0)
            this.coin = 0;
        this.server.net_setCoin(this.coin);
        this.getCoinPanel.setCoin(this.coin);
    }
    setDiamond(diamond) {
        this.diamond += diamond;
        this.popupNotice(diamond, false);
        if (this.diamond < 0)
            this.diamond = 0;
        this.server.net_setDiamond(this.diamond);
        this.getCoinPanel.setDiamond(this.diamond);
    }
    get getCoin() {
        return this.coin;
    }
    get getDiamond() {
        return this.diamond;
    }
    getCoinByAd() {
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                this.setCoin(GlobalData.addCoin);
            }, StringUtil.format(GameConfig.Language.FreeCollectionOfCoins.Value, GlobalData.addCoin), GameConfig.Language.Cancel.Value, GameConfig.Language.FreeToReceive.Value);
        }
        else {
            this.setCoin(GlobalData.addCoin);
        }
        // this.openShopBuyDiamondCoin();
    }
    getDiamondByAd(diamond) {
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                this.setDiamond(GlobalData.addDiamond);
            }, StringUtil.format(GameConfig.Language.FreeCollectionOfDiamonds.Value, GlobalData.addDiamond), GameConfig.Language.Cancel.Value, GameConfig.Language.FreeToReceive.Value);
        }
        else {
            this.setDiamond(GlobalData.addDiamond);
        }
        // this.openShopBuyDiamondCoin(diamond);
    }
    net_killPlayerAddCoin(coin) {
        this.coin += coin;
        this.popupNotice(coin, true);
        this.getCoinPanel.setCoin(this.coin);
    }
    popupNotice(num, isCoin) {
        if (num == 0)
            return;
        Notice.showDownNotice("<color=#" + (num > 0 ? "yellow>" : "red>") + (num > 0 ? GameConfig.Language.Get.Value : GameConfig.Language.Spend.Value) + (isCoin ? GameConfig.Language.GoldCoins.Value : GameConfig.Language.Diamonds.Value) + num + "</color>");
        // Notice.showDownNotice("<color=#lime>" + "<size=18>" + killerName + " 击败了 " + killedName + "</size>" + "</color>"
        //     + "\n" + "<color=#red>完成了" + killTips + "</color>");
    }
}

var foreign27 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: CoinModuleC
});

class CoinPanel extends CoinPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.coinModuleC = null;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButtons();
    }
    bindButtons() {
        this.mAddCoinButton.onClicked.add((this.bindAddCoinButton.bind(this)));
        this.mAddDiamondButton.onClicked.add((this.bindAddDiamondButton.bind(this)));
    }
    bindAddCoinButton() {
        this.getCoinModuleC.onAddCoinAction.call();
    }
    bindAddDiamondButton() {
        this.getCoinModuleC.onAddDiamondAction.call();
    }
    setCoin(coin) {
        this.mCoinTextBlock.text = coin + "";
    }
    setDiamond(diamond) {
        this.mDiamondTextBlock.text = diamond + "";
    }
    setCoinAndDiamond(coin, diamond) {
        this.mDiamondTextBlock.text = diamond + "";
        this.mCoinTextBlock.text = coin + "";
    }
}

var foreign29 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: CoinPanel
});

class HUDData extends Subdata {
    constructor() {
        super(...arguments);
        this.fireScale = 0.05;
        this.controlScale = 0.3;
        this.bgmVolume = 1;
        this.soundVolume = 1;
    }
    initDefaultData() {
        this.fireScale = 0.05;
        this.controlScale = 0.3;
        this.bgmVolume = 1;
        this.soundVolume = 1;
    }
}
__decorate([
    Decorator.persistence()
], HUDData.prototype, "fireScale", void 0);
__decorate([
    Decorator.persistence()
], HUDData.prototype, "controlScale", void 0);
__decorate([
    Decorator.persistence()
], HUDData.prototype, "bgmVolume", void 0);
__decorate([
    Decorator.persistence()
], HUDData.prototype, "soundVolume", void 0);
class KillTipData {
}
var KillTipType;
(function (KillTipType) {
    KillTipType[KillTipType["None"] = 0] = "None";
    KillTipType[KillTipType["Killer"] = 1] = "Killer";
    KillTipType[KillTipType["Killed"] = 2] = "Killed";
    KillTipType[KillTipType["revenge"] = 3] = "revenge";
})(KillTipType || (KillTipType = {}));

var foreign33 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HUDData: HUDData,
    KillTipData: KillTipData,
    get KillTipType () { return KillTipType; }
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/HUDModule/HUDPanel.ui
 * TIME: 2024.10.27-00.04.45
 */
let HUDPanel_Generate = class HUDPanel_Generate extends UIScript {
    get mVirtualJoystickPanel() {
        if (!this.mVirtualJoystickPanel_Internal && this.uiWidgetBase) {
            this.mVirtualJoystickPanel_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mVirtualJoystickPanel');
        }
        return this.mVirtualJoystickPanel_Internal;
    }
    get mTouchPad() {
        if (!this.mTouchPad_Internal && this.uiWidgetBase) {
            this.mTouchPad_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mTouchPad');
        }
        return this.mTouchPad_Internal;
    }
    get mRedVsTextBlock() {
        if (!this.mRedVsTextBlock_Internal && this.uiWidgetBase) {
            this.mRedVsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/VsCanvas/RedVsCanvas/mRedVsTextBlock');
        }
        return this.mRedVsTextBlock_Internal;
    }
    get mRedCountTextBlock() {
        if (!this.mRedCountTextBlock_Internal && this.uiWidgetBase) {
            this.mRedCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/VsCanvas/RedVsCanvas/mRedCountTextBlock');
        }
        return this.mRedCountTextBlock_Internal;
    }
    get mBlueVsTextBlock() {
        if (!this.mBlueVsTextBlock_Internal && this.uiWidgetBase) {
            this.mBlueVsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/VsCanvas/BlueVsCanvas/mBlueVsTextBlock');
        }
        return this.mBlueVsTextBlock_Internal;
    }
    get mBlueCountTextBlock() {
        if (!this.mBlueCountTextBlock_Internal && this.uiWidgetBase) {
            this.mBlueCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/VsCanvas/BlueVsCanvas/mBlueCountTextBlock');
        }
        return this.mBlueCountTextBlock_Internal;
    }
    get mSetButton() {
        if (!this.mSetButton_Internal && this.uiWidgetBase) {
            this.mSetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_1/SetCanvas/mSetButton');
        }
        return this.mSetButton_Internal;
    }
    get mRankButton() {
        if (!this.mRankButton_Internal && this.uiWidgetBase) {
            this.mRankButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_1/RankCanvas/mRankButton');
        }
        return this.mRankButton_Internal;
    }
    get mTaskButton() {
        if (!this.mTaskButton_Internal && this.uiWidgetBase) {
            this.mTaskButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_1/TaskCanvas/mTaskButton');
        }
        return this.mTaskButton_Internal;
    }
    get mTaskPointImage() {
        if (!this.mTaskPointImage_Internal && this.uiWidgetBase) {
            this.mTaskPointImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_1/TaskCanvas/mTaskPointImage');
        }
        return this.mTaskPointImage_Internal;
    }
    get mTaskBgImage() {
        if (!this.mTaskBgImage_Internal && this.uiWidgetBase) {
            this.mTaskBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_1/TaskCanvas/mTaskBgImage');
        }
        return this.mTaskBgImage_Internal;
    }
    get mTeamButton() {
        if (!this.mTeamButton_Internal && this.uiWidgetBase) {
            this.mTeamButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_2/TeamCanvas/mTeamButton');
        }
        return this.mTeamButton_Internal;
    }
    get mTeamBgImage() {
        if (!this.mTeamBgImage_Internal && this.uiWidgetBase) {
            this.mTeamBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_2/TeamCanvas/mTeamBgImage');
        }
        return this.mTeamBgImage_Internal;
    }
    get mTeamIconImage() {
        if (!this.mTeamIconImage_Internal && this.uiWidgetBase) {
            this.mTeamIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_2/TeamCanvas/mTeamIconImage');
        }
        return this.mTeamIconImage_Internal;
    }
    get mShopButton() {
        if (!this.mShopButton_Internal && this.uiWidgetBase) {
            this.mShopButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_2/ShopCanvas/mShopButton');
        }
        return this.mShopButton_Internal;
    }
    get mActivityButton() {
        if (!this.mActivityButton_Internal && this.uiWidgetBase) {
            this.mActivityButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LeftButtonCanvas/ActivityCanvas/mActivityButton');
        }
        return this.mActivityButton_Internal;
    }
    get mActivityPointImage() {
        if (!this.mActivityPointImage_Internal && this.uiWidgetBase) {
            this.mActivityPointImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LeftButtonCanvas/ActivityCanvas/mActivityPointImage');
        }
        return this.mActivityPointImage_Internal;
    }
    get mIconmage() {
        if (!this.mIconmage_Internal && this.uiWidgetBase) {
            this.mIconmage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/PlayerIconCanvas/mIconmage');
        }
        return this.mIconmage_Internal;
    }
    get mRankTextBlock() {
        if (!this.mRankTextBlock_Internal && this.uiWidgetBase) {
            this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/RankCanvas/mRankTextBlock');
        }
        return this.mRankTextBlock_Internal;
    }
    get mTipsHpTextBlock() {
        if (!this.mTipsHpTextBlock_Internal && this.uiWidgetBase) {
            this.mTipsHpTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/HpCanvas/mTipsHpTextBlock');
        }
        return this.mTipsHpTextBlock_Internal;
    }
    get mHpProgressBar() {
        if (!this.mHpProgressBar_Internal && this.uiWidgetBase) {
            this.mHpProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/HpCanvas/mHpProgressBar');
        }
        return this.mHpProgressBar_Internal;
    }
    get mHpTextBlock() {
        if (!this.mHpTextBlock_Internal && this.uiWidgetBase) {
            this.mHpTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/HpCanvas/mHpTextBlock');
        }
        return this.mHpTextBlock_Internal;
    }
    get mKillTipCountCanvas() {
        if (!this.mKillTipCountCanvas_Internal && this.uiWidgetBase) {
            this.mKillTipCountCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipCountCanvas');
        }
        return this.mKillTipCountCanvas_Internal;
    }
    get mKillTipTextBlock1() {
        if (!this.mKillTipTextBlock1_Internal && this.uiWidgetBase) {
            this.mKillTipTextBlock1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipCountCanvas/mKillTipTextBlock1');
        }
        return this.mKillTipTextBlock1_Internal;
    }
    get mKillTipTextBlock2() {
        if (!this.mKillTipTextBlock2_Internal && this.uiWidgetBase) {
            this.mKillTipTextBlock2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipCountCanvas/mKillTipTextBlock2');
        }
        return this.mKillTipTextBlock2_Internal;
    }
    get mKillTipTextBlock3() {
        if (!this.mKillTipTextBlock3_Internal && this.uiWidgetBase) {
            this.mKillTipTextBlock3_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipTextBlock3');
        }
        return this.mKillTipTextBlock3_Internal;
    }
    get mKillTipCanvas() {
        if (!this.mKillTipCanvas_Internal && this.uiWidgetBase) {
            this.mKillTipCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mKillTipCanvas');
        }
        return this.mKillTipCanvas_Internal;
    }
    get mInvincibleCanvas() {
        if (!this.mInvincibleCanvas_Internal && this.uiWidgetBase) {
            this.mInvincibleCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mInvincibleCanvas');
        }
        return this.mInvincibleCanvas_Internal;
    }
    get mInvincibleProgressBar() {
        if (!this.mInvincibleProgressBar_Internal && this.uiWidgetBase) {
            this.mInvincibleProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mInvincibleCanvas/mInvincibleProgressBar');
        }
        return this.mInvincibleProgressBar_Internal;
    }
    get mInvincibleTextBlock() {
        if (!this.mInvincibleTextBlock_Internal && this.uiWidgetBase) {
            this.mInvincibleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mInvincibleCanvas/mInvincibleTextBlock');
        }
        return this.mInvincibleTextBlock_Internal;
    }
    get mDeadCanvas() {
        if (!this.mDeadCanvas_Internal && this.uiWidgetBase) {
            this.mDeadCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDeadCanvas');
        }
        return this.mDeadCanvas_Internal;
    }
    get mDeadTextBlock() {
        if (!this.mDeadTextBlock_Internal && this.uiWidgetBase) {
            this.mDeadTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDeadCanvas/mDeadTextBlock');
        }
        return this.mDeadTextBlock_Internal;
    }
    get mDeadCountDownTextBlock() {
        if (!this.mDeadCountDownTextBlock_Internal && this.uiWidgetBase) {
            this.mDeadCountDownTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDeadCanvas/mDeadCountDownTextBlock');
        }
        return this.mDeadCountDownTextBlock_Internal;
    }
    get mDeadTipsTextBlock() {
        if (!this.mDeadTipsTextBlock_Internal && this.uiWidgetBase) {
            this.mDeadTipsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDeadCanvas/mDeadTipsTextBlock');
        }
        return this.mDeadTipsTextBlock_Internal;
    }
    get mSetCanvas() {
        if (!this.mSetCanvas_Internal && this.uiWidgetBase) {
            this.mSetCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas');
        }
        return this.mSetCanvas_Internal;
    }
    get mSetTextBlock() {
        if (!this.mSetTextBlock_Internal && this.uiWidgetBase) {
            this.mSetTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/mSetTextBlock');
        }
        return this.mSetTextBlock_Internal;
    }
    get mFireCanvas() {
        if (!this.mFireCanvas_Internal && this.uiWidgetBase) {
            this.mFireCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas');
        }
        return this.mFireCanvas_Internal;
    }
    get mFireTextBlock() {
        if (!this.mFireTextBlock_Internal && this.uiWidgetBase) {
            this.mFireTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mFireTextBlock');
        }
        return this.mFireTextBlock_Internal;
    }
    get mFireProgressBar() {
        if (!this.mFireProgressBar_Internal && this.uiWidgetBase) {
            this.mFireProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mFireProgressBar');
        }
        return this.mFireProgressBar_Internal;
    }
    get mLowFireTextBlock() {
        if (!this.mLowFireTextBlock_Internal && this.uiWidgetBase) {
            this.mLowFireTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mLowFireTextBlock');
        }
        return this.mLowFireTextBlock_Internal;
    }
    get mMiddleFireTextBlock() {
        if (!this.mMiddleFireTextBlock_Internal && this.uiWidgetBase) {
            this.mMiddleFireTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mMiddleFireTextBlock');
        }
        return this.mMiddleFireTextBlock_Internal;
    }
    get mHighFireTextBlock() {
        if (!this.mHighFireTextBlock_Internal && this.uiWidgetBase) {
            this.mHighFireTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mHighFireTextBlock');
        }
        return this.mHighFireTextBlock_Internal;
    }
    get mControlCanvas() {
        if (!this.mControlCanvas_Internal && this.uiWidgetBase) {
            this.mControlCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas');
        }
        return this.mControlCanvas_Internal;
    }
    get mControlTextBlock() {
        if (!this.mControlTextBlock_Internal && this.uiWidgetBase) {
            this.mControlTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mControlTextBlock');
        }
        return this.mControlTextBlock_Internal;
    }
    get mControlProgressBar() {
        if (!this.mControlProgressBar_Internal && this.uiWidgetBase) {
            this.mControlProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mControlProgressBar');
        }
        return this.mControlProgressBar_Internal;
    }
    get mLowControlTextBlock() {
        if (!this.mLowControlTextBlock_Internal && this.uiWidgetBase) {
            this.mLowControlTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mLowControlTextBlock');
        }
        return this.mLowControlTextBlock_Internal;
    }
    get mMiddleControlTextBlock() {
        if (!this.mMiddleControlTextBlock_Internal && this.uiWidgetBase) {
            this.mMiddleControlTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mMiddleControlTextBlock');
        }
        return this.mMiddleControlTextBlock_Internal;
    }
    get mHighControlTextBlock() {
        if (!this.mHighControlTextBlock_Internal && this.uiWidgetBase) {
            this.mHighControlTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mHighControlTextBlock');
        }
        return this.mHighControlTextBlock_Internal;
    }
    get mBgmCanvas() {
        if (!this.mBgmCanvas_Internal && this.uiWidgetBase) {
            this.mBgmCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas');
        }
        return this.mBgmCanvas_Internal;
    }
    get mBgmTextBlock() {
        if (!this.mBgmTextBlock_Internal && this.uiWidgetBase) {
            this.mBgmTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mBgmTextBlock');
        }
        return this.mBgmTextBlock_Internal;
    }
    get mBgmProgressBar() {
        if (!this.mBgmProgressBar_Internal && this.uiWidgetBase) {
            this.mBgmProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mBgmProgressBar');
        }
        return this.mBgmProgressBar_Internal;
    }
    get mLowBgmTextBlock() {
        if (!this.mLowBgmTextBlock_Internal && this.uiWidgetBase) {
            this.mLowBgmTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mLowBgmTextBlock');
        }
        return this.mLowBgmTextBlock_Internal;
    }
    get mMiddleBgmTextBlock() {
        if (!this.mMiddleBgmTextBlock_Internal && this.uiWidgetBase) {
            this.mMiddleBgmTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mMiddleBgmTextBlock');
        }
        return this.mMiddleBgmTextBlock_Internal;
    }
    get mHighBgmTextBlock() {
        if (!this.mHighBgmTextBlock_Internal && this.uiWidgetBase) {
            this.mHighBgmTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mHighBgmTextBlock');
        }
        return this.mHighBgmTextBlock_Internal;
    }
    get mSoundCanvas() {
        if (!this.mSoundCanvas_Internal && this.uiWidgetBase) {
            this.mSoundCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas');
        }
        return this.mSoundCanvas_Internal;
    }
    get mSoundTextBlock() {
        if (!this.mSoundTextBlock_Internal && this.uiWidgetBase) {
            this.mSoundTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mSoundTextBlock');
        }
        return this.mSoundTextBlock_Internal;
    }
    get mSoundProgressBar() {
        if (!this.mSoundProgressBar_Internal && this.uiWidgetBase) {
            this.mSoundProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mSoundProgressBar');
        }
        return this.mSoundProgressBar_Internal;
    }
    get mLowSoundTextBlock() {
        if (!this.mLowSoundTextBlock_Internal && this.uiWidgetBase) {
            this.mLowSoundTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mLowSoundTextBlock');
        }
        return this.mLowSoundTextBlock_Internal;
    }
    get mMiddleSoundTextBlock() {
        if (!this.mMiddleSoundTextBlock_Internal && this.uiWidgetBase) {
            this.mMiddleSoundTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mMiddleSoundTextBlock');
        }
        return this.mMiddleSoundTextBlock_Internal;
    }
    get mHighSoundTextBlock() {
        if (!this.mHighSoundTextBlock_Internal && this.uiWidgetBase) {
            this.mHighSoundTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mHighSoundTextBlock');
        }
        return this.mHighSoundTextBlock_Internal;
    }
    get mSetCloseButton() {
        if (!this.mSetCloseButton_Internal && this.uiWidgetBase) {
            this.mSetCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/mSetCloseButton');
        }
        return this.mSetCloseButton_Internal;
    }
    get mResetPosButton() {
        if (!this.mResetPosButton_Internal && this.uiWidgetBase) {
            this.mResetPosButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/mResetPosButton');
        }
        return this.mResetPosButton_Internal;
    }
    get mResetTextBlock() {
        if (!this.mResetTextBlock_Internal && this.uiWidgetBase) {
            this.mResetTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/mResetPosButton/mResetTextBlock');
        }
        return this.mResetTextBlock_Internal;
    }
    get mAimCanvas() {
        if (!this.mAimCanvas_Internal && this.uiWidgetBase) {
            this.mAimCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas');
        }
        return this.mAimCanvas_Internal;
    }
    get mAimPoint() {
        if (!this.mAimPoint_Internal && this.uiWidgetBase) {
            this.mAimPoint_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas/mAimPoint');
        }
        return this.mAimPoint_Internal;
    }
    get mAimUp() {
        if (!this.mAimUp_Internal && this.uiWidgetBase) {
            this.mAimUp_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas/mAimUp');
        }
        return this.mAimUp_Internal;
    }
    get mAimDown() {
        if (!this.mAimDown_Internal && this.uiWidgetBase) {
            this.mAimDown_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas/mAimDown');
        }
        return this.mAimDown_Internal;
    }
    get mAimLeft() {
        if (!this.mAimLeft_Internal && this.uiWidgetBase) {
            this.mAimLeft_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas/mAimLeft');
        }
        return this.mAimLeft_Internal;
    }
    get mAimRight() {
        if (!this.mAimRight_Internal && this.uiWidgetBase) {
            this.mAimRight_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAimCanvas/mAimRight');
        }
        return this.mAimRight_Internal;
    }
    get mGunIconImage() {
        if (!this.mGunIconImage_Internal && this.uiWidgetBase) {
            this.mGunIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GunCanvas/mGunIconImage');
        }
        return this.mGunIconImage_Internal;
    }
    get mGunNameTextBlock() {
        if (!this.mGunNameTextBlock_Internal && this.uiWidgetBase) {
            this.mGunNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GunCanvas/mGunNameTextBlock');
        }
        return this.mGunNameTextBlock_Internal;
    }
    get mGunBulletCountTextBlock() {
        if (!this.mGunBulletCountTextBlock_Internal && this.uiWidgetBase) {
            this.mGunBulletCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GunCanvas/mGunBulletCountTextBlock');
        }
        return this.mGunBulletCountTextBlock_Internal;
    }
    get mUnMorphCanvas() {
        if (!this.mUnMorphCanvas_Internal && this.uiWidgetBase) {
            this.mUnMorphCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mUnMorphCanvas');
        }
        return this.mUnMorphCanvas_Internal;
    }
    get mUnMorphButton() {
        if (!this.mUnMorphButton_Internal && this.uiWidgetBase) {
            this.mUnMorphButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mUnMorphCanvas/UnMorphCanvas/mUnMorphButton');
        }
        return this.mUnMorphButton_Internal;
    }
    get mJumpButton() {
        if (!this.mJumpButton_Internal && this.uiWidgetBase) {
            this.mJumpButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mUnMorphCanvas/JumpCanvas/mJumpButton');
        }
        return this.mJumpButton_Internal;
    }
    get mMorphCanvas() {
        if (!this.mMorphCanvas_Internal && this.uiWidgetBase) {
            this.mMorphCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMorphCanvas');
        }
        return this.mMorphCanvas_Internal;
    }
    get mMorphButton() {
        if (!this.mMorphButton_Internal && this.uiWidgetBase) {
            this.mMorphButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMorphCanvas/mMorphButton');
        }
        return this.mMorphButton_Internal;
    }
    get mAtkCanvas() {
        if (!this.mAtkCanvas_Internal && this.uiWidgetBase) {
            this.mAtkCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAtkCanvas');
        }
        return this.mAtkCanvas_Internal;
    }
    get mNormalAtkButton() {
        if (!this.mNormalAtkButton_Internal && this.uiWidgetBase) {
            this.mNormalAtkButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAtkCanvas/mNormalAtkButton');
        }
        return this.mNormalAtkButton_Internal;
    }
    get mReloadButton() {
        if (!this.mReloadButton_Internal && this.uiWidgetBase) {
            this.mReloadButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAtkCanvas/mReloadButton');
        }
        return this.mReloadButton_Internal;
    }
    get mCrouchButton() {
        if (!this.mCrouchButton_Internal && this.uiWidgetBase) {
            this.mCrouchButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAtkCanvas/mCrouchButton');
        }
        return this.mCrouchButton_Internal;
    }
    get mFireJumpButton() {
        if (!this.mFireJumpButton_Internal && this.uiWidgetBase) {
            this.mFireJumpButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAtkCanvas/mFireJumpButton');
        }
        return this.mFireJumpButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mSetButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mSetButton");
        });
        this.mSetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mRankButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mRankButton");
        });
        this.mRankButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mTaskButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mTaskButton");
        });
        this.mTaskButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mTeamButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mTeamButton");
        });
        this.mTeamButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mShopButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mShopButton");
        });
        this.mShopButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mActivityButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mActivityButton");
        });
        this.mActivityButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mSetCloseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mSetCloseButton");
        });
        this.mSetCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mResetPosButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mResetPosButton");
        });
        this.mResetPosButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mUnMorphButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mUnMorphButton");
        });
        this.mUnMorphButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mJumpButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mJumpButton");
        });
        this.mJumpButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mMorphButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mMorphButton");
        });
        this.mMorphButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mReloadButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mReloadButton");
        });
        this.mReloadButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCrouchButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCrouchButton");
        });
        this.mCrouchButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mFireJumpButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mFireJumpButton");
        });
        this.mFireJumpButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mRedVsTextBlock);
        this.initLanguage(this.mRedCountTextBlock);
        this.initLanguage(this.mBlueVsTextBlock);
        this.initLanguage(this.mBlueCountTextBlock);
        this.initLanguage(this.mRankTextBlock);
        this.initLanguage(this.mTipsHpTextBlock);
        this.initLanguage(this.mHpTextBlock);
        this.initLanguage(this.mKillTipTextBlock1);
        this.initLanguage(this.mKillTipTextBlock2);
        this.initLanguage(this.mKillTipTextBlock3);
        this.initLanguage(this.mInvincibleTextBlock);
        this.initLanguage(this.mDeadTextBlock);
        this.initLanguage(this.mDeadCountDownTextBlock);
        this.initLanguage(this.mDeadTipsTextBlock);
        this.initLanguage(this.mSetTextBlock);
        this.initLanguage(this.mFireTextBlock);
        this.initLanguage(this.mLowFireTextBlock);
        this.initLanguage(this.mMiddleFireTextBlock);
        this.initLanguage(this.mHighFireTextBlock);
        this.initLanguage(this.mControlTextBlock);
        this.initLanguage(this.mLowControlTextBlock);
        this.initLanguage(this.mMiddleControlTextBlock);
        this.initLanguage(this.mHighControlTextBlock);
        this.initLanguage(this.mBgmTextBlock);
        this.initLanguage(this.mLowBgmTextBlock);
        this.initLanguage(this.mMiddleBgmTextBlock);
        this.initLanguage(this.mHighBgmTextBlock);
        this.initLanguage(this.mSoundTextBlock);
        this.initLanguage(this.mLowSoundTextBlock);
        this.initLanguage(this.mMiddleSoundTextBlock);
        this.initLanguage(this.mHighSoundTextBlock);
        this.initLanguage(this.mResetTextBlock);
        this.initLanguage(this.mGunNameTextBlock);
        this.initLanguage(this.mGunBulletCountTextBlock);
        //文本多语言
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mMorphCanvas/MorphTextBlock"));
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
HUDPanel_Generate = __decorate([
    UIBind('UI/module/HUDModule/HUDPanel.ui')
], HUDPanel_Generate);
var HUDPanel_Generate$1 = HUDPanel_Generate;

var foreign97 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: HUDPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/HUDModule/KillTipItem.ui
 * TIME: 2024.10.27-00.04.45
 */
let KillTipItem_Generate = class KillTipItem_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBgImage');
        }
        return this.mBgImage_Internal;
    }
    get mMainCanvas() {
        if (!this.mMainCanvas_Internal && this.uiWidgetBase) {
            this.mMainCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas');
        }
        return this.mMainCanvas_Internal;
    }
    get mKillerTextBlock() {
        if (!this.mKillerTextBlock_Internal && this.uiWidgetBase) {
            this.mKillerTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/KillerCanvas/mKillerTextBlock');
        }
        return this.mKillerTextBlock_Internal;
    }
    get mKillTextBlock() {
        if (!this.mKillTextBlock_Internal && this.uiWidgetBase) {
            this.mKillTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/KillCanvas/mKillTextBlock');
        }
        return this.mKillTextBlock_Internal;
    }
    get mKilledTextBlock() {
        if (!this.mKilledTextBlock_Internal && this.uiWidgetBase) {
            this.mKilledTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/KilledCanvas/mKilledTextBlock');
        }
        return this.mKilledTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mKillerTextBlock);
        this.initLanguage(this.mKillTextBlock);
        this.initLanguage(this.mKilledTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
KillTipItem_Generate = __decorate([
    UIBind('UI/module/HUDModule/KillTipItem.ui')
], KillTipItem_Generate);
var KillTipItem_Generate$1 = KillTipItem_Generate;

var foreign98 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: KillTipItem_Generate$1
});

class KillTipItem extends KillTipItem_Generate$1 {
    onAwake() {
        this.mKillTextBlock.text = GameConfig.Language.Defeated.Value;
    }
    setInfo(killTipDatas) {
        this.mKillerTextBlock.text = killTipDatas.killerName;
        this.mKilledTextBlock.text = killTipDatas.killedName;
        switch (killTipDatas.killTipType) {
            case KillTipType.None:
                this.mKillerTextBlock.fontColor = mw.LinearColor.white;
                this.mKillerTextBlock.shadowColor = mw.LinearColor.white;
                this.mKilledTextBlock.fontColor = mw.LinearColor.white;
                this.mKilledTextBlock.shadowColor = mw.LinearColor.white;
                break;
            case KillTipType.Killer:
                this.mKillerTextBlock.fontColor = mw.LinearColor.yellow;
                this.mKillerTextBlock.shadowColor = mw.LinearColor.red;
                this.mKilledTextBlock.fontColor = mw.LinearColor.white;
                this.mKilledTextBlock.shadowColor = mw.LinearColor.white;
                break;
            case KillTipType.Killed:
                this.mKillerTextBlock.fontColor = mw.LinearColor.white;
                this.mKillerTextBlock.shadowColor = mw.LinearColor.white;
                this.mKilledTextBlock.fontColor = mw.LinearColor.yellow;
                this.mKilledTextBlock.shadowColor = mw.LinearColor.red;
                break;
        }
        Utils.setWidgetVisibility(this.uiObject, mw.SlateVisibility.SelfHitTestInvisible);
        setTimeout(() => {
            this.mBgImage.size = new mw.Vector2(this.mMainCanvas.size.x + 20, this.mMainCanvas.size.y);
        }, 1);
    }
}

var foreign37 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    KillTipItem: KillTipItem
});

class HUDPanel extends HUDPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.coinModuleC = null;
        this.hideKillTipIntervalId = null;
        this.killTipItems = [];
        this.killTipDatas = [];
        //#endregion
        //#region 连杀提示
        this.killTipsTimeOutId1 = null;
        this.killTipsTimeOutId2 = null;
        this.deadCountDownInterval = null;
        this.deadCountDown = 3;
        this.flickerTextTween1 = null;
        this.flickerTextTween2 = null;
        this.setRotateTween1 = null;
        this.setRotateTween2 = null;
        //#endregion
        //#region TaskTween
        this.taskRedPointTween1 = null;
        this.taskRedPointTween2 = null;
        //#endregion
        //#region ActivityTween
        this.activityRedPointTween1 = null;
        this.activityRedPointTween2 = null;
        //#endregion
        //#region Aim
        this.leftAimTween1 = null;
        this.rightAimTween1 = null;
        this.upAimTween1 = null;
        this.downAimTween1 = null;
        this.leftAimTween2 = null;
        this.rightAimTween2 = null;
        this.upAimTween2 = null;
        this.downAimTween2 = null;
        this.fromAimLeftPos = mw.Vector2.zero;
        this.fromAimRightPos = mw.Vector2.zero;
        this.fromAimUpPos = mw.Vector2.zero;
        this.fromAimDownPos = mw.Vector2.zero;
        this.toAimLeftPos = mw.Vector2.zero;
        this.toAimRightPos = mw.Vector2.zero;
        this.toAimUpPos = mw.Vector2.zero;
        this.toAimDownPos = mw.Vector2.zero;
        this.aimOffsetValue = 10;
        this.expansionTime = 0.1;
        //#endregion
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    onStart() {
        this.initModule();
        this.initUI();
        this.bindButtons();
        this.initTextBlock();
    }
    initTextBlock() {
        this.mRedVsTextBlock.text = GameConfig.Language.Lurking.Value;
        this.mBlueVsTextBlock.text = GameConfig.Language.Defenders.Value;
        this.mTipsHpTextBlock.text = GameConfig.Language.Life.Value;
        this.mInvincibleTextBlock.text = GameConfig.Language.InvincibleTime.Value;
        this.mDeadTextBlock.text = GameConfig.Language.ResurrectionCountdown.Value;
        this.mDeadTipsTextBlock.text = StringUtil.format(GameConfig.Language.InvincibleWithinSecondsAfterResurrection.Value, 2);
        this.mSetTextBlock.text = GameConfig.Language.SetUp.Value;
        this.mFireTextBlock.text = GameConfig.Language.FiringSensitivity.Value;
        this.mControlTextBlock.text = GameConfig.Language.ControlSensitivity.Value;
        this.mBgmTextBlock.text = GameConfig.Language.BackgroundMusicSize.Value;
        this.mSoundTextBlock.text = GameConfig.Language.SfxVolume.Value;
        this.mResetTextBlock.text = GameConfig.Language.ResetPosition.Value;
    }
    initModule() {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
    }
    initUI() {
        this.initKillTipItems();
        this.initDeadCountDown();
        this.initFlickerInvincibleText();
        this.initTaskTween();
        this.initUITweens();
        Utils.setWidgetVisibility(this.mKillTipCountCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mKillTipTextBlock3, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mUnMorphCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mMorphCanvas, mw.SlateVisibility.Collapsed);
        this.initAimUI();
    }
    bindButtons() {
        this.mShopButton.onClicked.add(this.onClickOpenShopButton.bind(this));
        this.mTeamButton.onClicked.add(this.onClickOpenTeamButton.bind(this));
        this.mRankButton.onClicked.add(this.onClickOpenRankButton.bind(this));
        this.mActivityButton.onClicked.add(this.onClickOpenActivityButton.bind(this));
        this.mTaskButton.onClicked.add(this.onClickOpenTaskButton.bind(this));
        this.mResetPosButton.onClicked.add(this.onClickResetPosButton.bind(this));
        this.mMorphButton.onClicked.add(this.onClickMorphButton.bind(this));
        this.mUnMorphButton.onClicked.add(this.onClickUnMorphButton.bind(this));
        this.mJumpButton.onClicked.add(this.onClickJumpButton.bind(this));
        this.bindSetButton();
        this.bindAtkButton();
    }
    onClickOpenShopButton() {
        this.getHUDModuleC.onOpenShopAction.call();
    }
    onClickOpenTeamButton() {
        this.getHUDModuleC.onOpenTeamAction.call();
    }
    onClickOpenRankButton() {
        this.getHUDModuleC.onOpenRankAction.call();
    }
    onClickOpenActivityButton() {
        this.getHUDModuleC.onOpenActivityAction.call();
    }
    onClickOpenTaskButton() {
        this.getHUDModuleC.onOpenTaskAction.call();
    }
    onClickResetPosButton() {
        this.getHUDModuleC.onResetPosAction.call();
    }
    onClickMorphButton() {
        this.getHUDModuleC.onMorphAction.call(true);
        Utils.setWidgetVisibility(this.mUnMorphCanvas, mw.SlateVisibility.SelfHitTestInvisible);
        Utils.setWidgetVisibility(this.mAtkCanvas, mw.SlateVisibility.Collapsed);
    }
    onClickUnMorphButton() {
        this.getHUDModuleC.onMorphAction.call(false);
        Utils.setWidgetVisibility(this.mUnMorphCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mAtkCanvas, mw.SlateVisibility.SelfHitTestInvisible);
    }
    onClickJumpButton() {
        this.getHUDModuleC.onJumpAction.call(false);
    }
    updateVsUI(redCount, blueCount) {
        this.mRedCountTextBlock.text = redCount + "";
        this.mBlueCountTextBlock.text = blueCount + "";
    }
    onHide() {
        this.mVirtualJoystickPanel.resetJoyStick();
    }
    //#region 击杀提示
    initKillTipItems() {
        for (let i = 0; i < 4; ++i) {
            let killTipItem = UIService.create(KillTipItem);
            killTipItem.uiObject.position = new mw.Vector2(0, 37 * i);
            Utils.setWidgetVisibility(killTipItem.uiObject, mw.SlateVisibility.Collapsed);
            this.mKillTipCanvas.addChild(killTipItem.uiObject);
            this.killTipItems.push(killTipItem);
        }
    }
    killTip(killTipType, killerName, killedName) {
        let killTipData = new KillTipData();
        killTipData.killTipType = killTipType;
        killTipData.killerName = killerName;
        killTipData.killedName = killedName;
        if (this.killTipDatas.length >= 4) {
            this.killTipDatas.shift();
        }
        this.killTipDatas.push(killTipData);
        this.updateKillTipItems();
        this.clearHideKillTipIntervalId();
        this.hideKillTipIntervalId = TimeUtil.setInterval(() => {
            if (this.killTipDatas && this.killTipDatas.length > 0) {
                this.killTipDatas.shift();
                this.updateKillTipItems();
            }
            else {
                this.clearHideKillTipIntervalId();
            }
        }, 5);
    }
    clearHideKillTipIntervalId() {
        if (this.hideKillTipIntervalId) {
            TimeUtil.clearInterval(this.hideKillTipIntervalId);
            this.hideKillTipIntervalId = null;
        }
    }
    updateKillTipItems() {
        for (let i = 0; i < this.killTipDatas.length; ++i) {
            this.killTipItems[i].setInfo(this.killTipDatas[i]);
        }
        for (let i = this.killTipDatas.length; i < 4; ++i) {
            Utils.setWidgetVisibility(this.killTipItems[i].uiObject, mw.SlateVisibility.Collapsed);
        }
    }
    showKillTips1(killTips, killerName, killedName) {
        Notice.showDownNotice("<color=#lime>" + "<size=18>" + killerName + GameConfig.Language.Defeated.Value + killedName + "</size>" + "</color>"
            + "\n" + "<color=#red>" + killTips + "</color>");
    }
    clearKillTipsTimeOutId1() {
        if (this.killTipsTimeOutId1) {
            clearTimeout(this.killTipsTimeOutId1);
            this.killTipsTimeOutId1 = null;
        }
    }
    showKillTips2(killerName, killedName, killTipType) {
        if (killTipType == KillTipType.None)
            return;
        this.clearKillTipsTimeOutId2();
        if (killTipType == KillTipType.Killed) {
            this.mKillTipTextBlock3.text = StringUtil.format(GameConfig.Language.YouHaveBeenDefeatedBy.Value, killerName);
        }
        else if (killTipType == KillTipType.revenge) {
            this.mKillTipTextBlock3.text = StringUtil.format(GameConfig.Language.DefeatToCompleteRevenge.Value, killedName);
        }
        Utils.setWidgetVisibility(this.mKillTipTextBlock3, mw.SlateVisibility.SelfHitTestInvisible);
        this.killTipsTimeOutId2 = setTimeout(() => {
            Utils.setWidgetVisibility(this.mKillTipTextBlock3, mw.SlateVisibility.Collapsed);
            this.clearKillTipsTimeOutId2();
        }, 3 * 1000);
    }
    clearKillTipsTimeOutId2() {
        if (this.killTipsTimeOutId2) {
            clearTimeout(this.killTipsTimeOutId2);
            this.killTipsTimeOutId2 = null;
        }
    }
    //#endregion
    //#region Player-ICON-HP-Rank
    updateHpUI(hp) {
        if (hp < 0)
            hp = 0;
        this.mHpProgressBar.currentValue = hp;
        this.mHpTextBlock.text = hp + "";
    }
    updateProgressBarMaxHp(maxHp) {
        this.mHpProgressBar.sliderMaxValue = maxHp;
    }
    updateRankUIText(isRedTeam, rank) {
        let teamStr = GameConfig.Language.Lurking.Value;
        let rankTextBlockColor = mw.LinearColor.red;
        if (!isRedTeam) {
            teamStr = GameConfig.Language.Defenders.Value;
            rankTextBlockColor = mw.LinearColor.blue;
        }
        this.mRankTextBlock.text = StringUtil.format(GameConfig.Language.RdPlace.Value, teamStr, rank);
        this.mRankTextBlock.fontColor = rankTextBlockColor;
    }
    //#endregion
    //#region DeadCountDown
    initDeadCountDown() {
        Utils.setWidgetVisibility(this.mDeadCanvas, mw.SlateVisibility.Collapsed);
    }
    startDeadCountDown() {
        this.mVirtualJoystickPanel.resetJoyStick();
        this.getHUDModuleC.onNormalAction.call(false);
        this.mNormalAtkButton.enable = false;
        Utils.setWidgetVisibility(this.mDeadCanvas, mw.SlateVisibility.SelfHitTestInvisible);
        this.deadCountDown = 3;
        this.mDeadCountDownTextBlock.text = this.deadCountDown-- + "";
        this.clearCountDownInterval();
        this.deadCountDownInterval = TimeUtil.setInterval(() => {
            this.mDeadCountDownTextBlock.text = this.deadCountDown-- + "";
            if (this.deadCountDown < 0)
                this.clearCountDownInterval();
        }, 1);
    }
    clearCountDownInterval() {
        if (this.deadCountDownInterval) {
            TimeUtil.clearInterval(this.deadCountDownInterval);
            this.deadCountDownInterval = null;
        }
    }
    endDeadCountDown() {
        Utils.setWidgetVisibility(this.mDeadCanvas, mw.SlateVisibility.Collapsed);
        this.clearCountDownInterval();
        this.showInvincibleTimeUI(2);
        this.mNormalAtkButton.enable = true;
    }
    //#endregion
    //#region 无敌倒计时
    showInvincibleTimeUI(invincibleTime) {
        new mw.Tween({ x: 0 })
            .to({ x: 1 }, invincibleTime * 1000)
            .onStart(() => {
            Utils.setWidgetVisibility(this.mInvincibleCanvas, mw.SlateVisibility.SelfHitTestInvisible);
            this.mInvincibleProgressBar.currentValue = 0;
            this.startFlickerText();
        })
            .onUpdate((v) => {
            this.mInvincibleProgressBar.currentValue = v.x;
        })
            .onComplete(() => {
            Utils.setWidgetVisibility(this.mInvincibleCanvas, mw.SlateVisibility.Collapsed);
            this.stopFlickerText();
            // this.getCoinModuleC.dieAds();
        })
            .start();
    }
    initFlickerInvincibleText() {
        Utils.setWidgetVisibility(this.mInvincibleCanvas, mw.SlateVisibility.Collapsed);
        this.flickerTextTween1 = new mw.Tween({ x: 1 })
            .to({ x: 0 }, 0.4 * 1000)
            .onStart(() => {
            this.mInvincibleTextBlock.renderOpacity = 1;
        })
            .onUpdate((v) => {
            this.mInvincibleTextBlock.renderOpacity = v.x;
        })
            .onComplete(() => {
            this.flickerTextTween2.start();
        });
        this.flickerTextTween2 = new mw.Tween({ x: 0 })
            .to({ x: 1 }, 0.4 * 1000)
            .onStart(() => {
            this.mInvincibleTextBlock.renderOpacity = 0;
        })
            .onUpdate((v) => {
            this.mInvincibleTextBlock.renderOpacity = v.x;
        })
            .onComplete(() => {
            this.flickerTextTween1.start();
        });
    }
    startFlickerText() {
        if (this.flickerTextTween1)
            this.flickerTextTween1.start();
    }
    stopFlickerText() {
        if (this.flickerTextTween1)
            this.flickerTextTween1.stop();
        if (this.flickerTextTween2)
            this.flickerTextTween2.stop();
    }
    //#endregion
    //#region Set
    initSetData(fireScale, controlScale, bgmVolume, soundVolume) {
        this.mFireProgressBar.currentValue = fireScale;
        this.mControlProgressBar.currentValue = controlScale;
        this.mBgmProgressBar.currentValue = bgmVolume;
        this.mSoundProgressBar.currentValue = soundVolume;
        this.mTouchPad.inputScale = new mw.Vector2(controlScale, controlScale);
        // Utils.setWidgetVisibility(this.mSetCanvas, mw.SlateVisibility.Collapsed);
        this.initSetTween();
        this.startSetTween();
    }
    bindSetButton() {
        this.mSetButton.onClicked.add(() => {
            Utils.openUITween(this.mSetCanvas, () => {
                Utils.setWidgetVisibility(this.mSetCanvas, mw.SlateVisibility.SelfHitTestInvisible);
            }, null);
        });
        this.mSetCloseButton.onClicked.add(() => {
            Utils.closeUITween(this.mSetCanvas, () => {
                this.getHUDModuleC.saveSetData();
            }, () => {
                Utils.setWidgetVisibility(this.mSetCanvas, mw.SlateVisibility.Collapsed);
            });
        });
        this.mFireProgressBar.onSliderValueChanged.add((value) => {
            this.getHUDModuleC.onFireScaleAction.call(value);
        });
        this.mControlProgressBar.onSliderValueChanged.add((value) => {
            this.getHUDModuleC.onControlScaleAction.call(value);
            this.mTouchPad.inputScale = new mw.Vector2(value, value);
        });
        this.mBgmProgressBar.onSliderValueChanged.add((value) => {
            this.getHUDModuleC.onBgmVolumeAction.call(value);
        });
        this.mSoundProgressBar.onSliderValueChanged.add((value) => {
            this.getHUDModuleC.onSoundVolumeAction.call(value);
        });
    }
    // private setScaleTween1: mw.Tween<any> = null;
    // private setScaleTween2: mw.Tween<any> = null;
    startSetTween() {
        if (!this.setRotateTween1 || !this.setRotateTween1 /*|| !this.setScaleTween1 || !this.setScaleTween2*/)
            this.initSetTween();
        if (this.setRotateTween1)
            this.setRotateTween1.start();
        // if (this.setScaleTween1) this.setScaleTween1.start();
    }
    stopSetTween() {
        if (this.setRotateTween1)
            this.setRotateTween1.stop();
        if (this.setRotateTween2)
            this.setRotateTween2.stop();
        // if (this.setScaleTween1) this.setScaleTween1.stop();
        // if (this.setScaleTween2) this.setScaleTween2.stop();
    }
    initSetTween() {
        this.setRotateTween1 = new mw.Tween({ angle: 0 })
            .to({ angle: 360 }, 2 * 1000)
            .onStart(() => {
            this.mSetButton.renderTransformAngle = 0;
        })
            .onUpdate((v) => {
            this.mSetButton.renderTransformAngle = v.angle;
        })
            .onComplete(() => {
            if (this.setRotateTween2)
                this.setRotateTween2.start();
        });
        this.setRotateTween2 = new mw.Tween({ angle: 0 })
            .to({ angle: 360 }, 2 * 1000)
            .onStart(() => {
            this.mSetButton.renderTransformAngle = 0;
        })
            .onUpdate((v) => {
            this.mSetButton.renderTransformAngle = v.angle;
        })
            .onComplete(() => {
            if (this.setRotateTween1)
                this.setRotateTween1.start();
        });
        // this.setScaleTween1 = new mw.Tween({ value: 0.8 })
        //     .to({ value: 1.2 }, 0.5 * 1000)
        //     .onStart(() => {
        //         this.mSetButton.renderScale = mw.Vector2.one.multiply(0.8);
        //     })
        //     .onUpdate((v) => {
        //         this.mSetButton.renderScale = mw.Vector2.one.multiply(v.value);
        //     })
        //     .onComplete(() => {
        //         if (this.setScaleTween2) this.setScaleTween2.start();
        //     })
        //     .easing(cubicBezier(0.25, 0.1, 0.25, 1));
        // this.setScaleTween2 = new mw.Tween({ value: 1.2 })
        //     .to({ value: 0.8 }, 0.5 * 1000)
        //     .onStart(() => {
        //         this.mSetButton.renderScale = mw.Vector2.one.multiply(1.2);
        //     })
        //     .onUpdate((v) => {
        //         this.mSetButton.renderScale = mw.Vector2.one.multiply(v.value);
        //     })
        //     .onComplete(() => {
        //         if (this.setScaleTween1) this.setScaleTween1.start();
        //     })
        //     .easing(cubicBezier(0.25, 0.1, 0.25, 1));
    }
    //#endregion
    //#region Tween
    initUITweens() {
        this.initRankButtonTweens();
        this.initTaskTween();
        this.initTeamTweens();
        this.initShakeActivityTween();
        this.initShakeShopTween();
        this.initMorphButtonTween();
    }
    //#region RankTween
    initRankButtonTweens() {
        let rankButtonTween1 = this.getScaleTween(this.mRankButton, 0.4, 0.8, 0.8, 1.2, 1.2);
        let rankButtonsTween2 = this.getScaleTween(this.mRankButton, 0.4, 1.2, 1.2, 0.8, 0.8);
        rankButtonTween1.start().onComplete(() => {
            rankButtonsTween2.start().onComplete(() => {
                rankButtonTween1.start();
            });
        });
    }
    startTaskRedPointTween() {
        if (!this.taskRedPointTween1 || !this.taskRedPointTween2)
            this.initTaskRedPointTweens();
        this.taskRedPointTween1.start();
        Utils.setWidgetVisibility(this.mTaskPointImage, mw.SlateVisibility.SelfHitTestInvisible);
    }
    stopTaskRedPointTween() {
        if (this.taskRedPointTween1)
            this.taskRedPointTween1.stop();
        if (this.taskRedPointTween2)
            this.taskRedPointTween2.stop();
        Utils.setWidgetVisibility(this.mTaskPointImage, mw.SlateVisibility.Collapsed);
    }
    initTaskRedPointTweens() {
        Utils.setWidgetVisibility(this.mTaskPointImage, mw.SlateVisibility.Collapsed);
        this.taskRedPointTween1 = new mw.Tween({ value: 0.8 })
            .to({ value: 1.2 }, 0.2 * 1000)
            .onStart(() => {
            this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(0.8);
        })
            .onUpdate((v) => {
            this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(v.value);
        })
            .onComplete(() => {
            if (this.taskRedPointTween2)
                this.taskRedPointTween2.start();
        })
            .easing(cubicBezier(0.25, 0.1, 0.25, 1));
        this.taskRedPointTween2 = new mw.Tween({ value: 1.2 })
            .to({ value: 0.8 }, 0.2 * 1000)
            .onStart(() => {
            this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(1.2);
        })
            .onUpdate((v) => {
            this.mTaskPointImage.renderScale = mw.Vector2.one.multiply(v.value);
        })
            .onComplete(() => {
            if (this.taskRedPointTween1)
                this.taskRedPointTween1.start();
        })
            .easing(cubicBezier(0.25, 0.1, 0.25, 1));
    }
    initTaskTween() {
        let leftToRight = this.getPosTween(this.mTaskBgImage, 0.5, 0, 25, 50, 25);
        let rightToLeft = this.getPosTween(this.mTaskBgImage, 0.5, 50, 25, 0, 25);
        leftToRight.start().onComplete(() => {
            TimeUtil.delaySecond(0.1).then(() => {
                rightToLeft.start().onComplete(() => {
                    TimeUtil.delaySecond(0.1).then(() => {
                        leftToRight.start();
                    });
                });
            });
        });
        this.initTaskRedPointTweens();
    }
    //#endregion
    //#region TeamTween
    initTeamTweens() {
        let teamBgTween1 = this.getRenderOpacityTween(this.mTeamBgImage, 0.75, 1, 0);
        let teamBgTween2 = this.getRenderOpacityTween(this.mTeamBgImage, 0.75, 0, 1);
        teamBgTween1.start().onComplete(() => {
            TimeUtil.delaySecond(0.2).then(() => {
                teamBgTween2.start().onComplete(() => {
                    TimeUtil.delaySecond(0.2).then(() => {
                        teamBgTween1.start();
                    });
                });
            });
        });
        let teamIconTween1 = this.getScaleTween(this.mTeamIconImage, 0.75, 1, 1, 0, 1);
        let teamIconTween2 = this.getScaleTween(this.mTeamIconImage, 0.75, 0, 1, 1, 1);
        TimeUtil.delaySecond(0.75).then(() => {
            teamIconTween1.start().onComplete(() => {
                TimeUtil.delaySecond(0.2).then(() => {
                    teamIconTween2.start().onComplete(() => {
                        TimeUtil.delaySecond(0.2).then(() => {
                            teamIconTween1.start();
                        });
                    });
                });
            });
        });
    }
    //#endregion
    //#region ShopTween
    initShakeShopTween() {
        let rightBigToLeftSmall = this.getShakeScaleTween(this.mShopButton, 0.8, 20, -20, 1.1, 0.9);
        let leftSamllToRightBig = this.getShakeScaleTween(this.mShopButton, 0.8, -20, 20, 0.9, 1.1);
        rightBigToLeftSmall.start().onComplete(() => {
            TimeUtil.delaySecond(0.1).then(() => {
                leftSamllToRightBig.start().onComplete(() => {
                    TimeUtil.delaySecond(0.1).then(() => {
                        rightBigToLeftSmall.start();
                    });
                });
            });
        });
    }
    startActivityRedPointTween() {
        if (!this.activityRedPointTween1 || !this.activityRedPointTween2)
            this.initActivityRedPointTweens();
        this.activityRedPointTween1.start();
        Utils.setWidgetVisibility(this.mActivityPointImage, mw.SlateVisibility.SelfHitTestInvisible);
    }
    stopActivityRedPointTween() {
        if (this.activityRedPointTween1)
            this.activityRedPointTween1.stop();
        if (this.activityRedPointTween2)
            this.activityRedPointTween2.stop();
        Utils.setWidgetVisibility(this.mActivityPointImage, mw.SlateVisibility.Collapsed);
    }
    initActivityRedPointTweens() {
        Utils.setWidgetVisibility(this.mActivityPointImage, mw.SlateVisibility.Collapsed);
        this.activityRedPointTween1 = new mw.Tween({ value: 0.8 })
            .to({ value: 1.2 }, 0.2 * 1000)
            .onStart(() => {
            this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(0.8);
        })
            .onUpdate((v) => {
            this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(v.value);
        })
            .onComplete(() => {
            if (this.activityRedPointTween2)
                this.activityRedPointTween2.start();
        })
            .easing(cubicBezier(0.25, 0.1, 0.25, 1));
        this.activityRedPointTween2 = new mw.Tween({ value: 1.2 })
            .to({ value: 0.8 }, 0.2 * 1000)
            .onStart(() => {
            this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(1.2);
        })
            .onUpdate((v) => {
            this.mActivityPointImage.renderScale = mw.Vector2.one.multiply(v.value);
        })
            .onComplete(() => {
            if (this.activityRedPointTween1)
                this.activityRedPointTween1.start();
        })
            .easing(cubicBezier(0.25, 0.1, 0.25, 1));
    }
    initShakeActivityTween() {
        let middleToRight = this.getShakeTween(this.mActivityButton, 0.05, 0, 15);
        let rightToLeft = this.getShakeTween(this.mActivityButton, 0.1, 15, -15);
        let leftToRight = this.getShakeTween(this.mActivityButton, 0.1, -15, 15);
        let rightToMiddle = this.getShakeTween(this.mActivityButton, 0.05, 15, 0);
        middleToRight.start().onComplete(() => {
            rightToLeft.start().onComplete(() => {
                leftToRight.start().onComplete(() => {
                    rightToMiddle.start().onComplete(() => {
                        TimeUtil.delaySecond(1).then(() => {
                            middleToRight.start();
                        });
                    });
                });
            });
        });
        this.initActivityRedPointTweens();
    }
    //#endregion
    //#region MorphButton
    initMorphButtonTween() {
        let rotate1 = this.getShakeTween(this.mMorphButton, 1, 0, 360);
        let rotate2 = this.getShakeTween(this.mMorphButton, 1, 0, 360);
        rotate1.start().onComplete(() => {
            rotate2.start().onComplete(() => {
                rotate1.start();
            });
        });
    }
    //#endregion
    getShakeTween(widget, angleTime, startAngle, endAngle) {
        return new Tween({ angle: startAngle })
            .to({ angle: endAngle }, angleTime * 1000)
            .onUpdate((v) => {
            widget.renderTransformAngle = v.angle;
        })
            .easing(cubicBezier(.22, .9, .28, .92));
    }
    getScaleTween(widget, scaleTime, startScaleX, startScaleY, endScaleX, endScaleY) {
        return new Tween({ scaleX: startScaleX, scaleY: startScaleY })
            .to({ scaleX: endScaleX, scaleY: endScaleY }, scaleTime * 1000)
            .onUpdate((v) => {
            widget.renderScale = new mw.Vector2(v.scaleX, v.scaleY);
        })
            .easing(cubicBezier(.22, .9, .28, .92));
    }
    getShakeScaleTween(widget, shakeScaleTime, startAngle, endAngle, startScale, endScale) {
        return new Tween({ angle: startAngle, scale: startScale })
            .to({ angle: endAngle, scale: endScale }, shakeScaleTime * 1000)
            .onUpdate((v) => {
            widget.renderTransformAngle = v.angle;
            widget.renderScale = new mw.Vector2(v.scale, v.scale);
        })
            .easing(cubicBezier(.22, .9, .28, .92));
    }
    getRenderOpacityTween(widget, time, startOpacity, endOpacity) {
        return new Tween({ opacity: startOpacity })
            .to({ opacity: endOpacity }, time * 1000)
            .onUpdate((v) => {
            widget.renderOpacity = v.opacity;
        })
            .easing(cubicBezier(.22, .9, .28, .92));
    }
    getPosTween(widget, posTime, startPosX, startPosY, endPosX, endPosY) {
        return new Tween({ posX: startPosX, posY: startPosY })
            .to({ posX: endPosX, posY: endPosY }, posTime * 1000)
            .onUpdate((v) => {
            widget.position = new mw.Vector2(v.posX, v.posY);
        })
            .easing(cubicBezier(.22, .9, .28, .92));
    }
    //#endregion
    //#region Normal Attack Button
    bindAtkButton() {
        this.mNormalAtkButton.onJoyStickDown.add(() => {
            this.getHUDModuleC.onNormalAction.call(true);
        });
        this.mNormalAtkButton.onJoyStickUp.add(() => {
            this.getHUDModuleC.onNormalAction.call(false);
        });
        this.mFireJumpButton.onClicked.add(this.onClickJumpButton.bind(this));
        this.mReloadButton.onClicked.add(this.onClickReloadButton.bind(this));
        this.mCrouchButton.onClicked.add(this.onClickCrouchButton.bind(this));
    }
    onClickReloadButton() {
        this.getHUDModuleC.onReloadAction.call();
    }
    onClickCrouchButton() {
        this.getHUDModuleC.onCrouchAction.call();
    }
    initAimUI() {
        this.updateAimPosition();
        this.initAimUIPosition();
        this.updateAimPosition();
        this.initToAimUIPosition();
        this.initAimUITween();
    }
    updateAimPosition() {
        this.fromAimLeftPos = this.mAimLeft.position;
        this.fromAimRightPos = this.mAimRight.position;
        this.fromAimUpPos = this.mAimUp.position;
        this.fromAimDownPos = this.mAimDown.position;
    }
    initAimUIPosition() {
        this.mAimLeft.position = new mw.Vector2(this.fromAimLeftPos.x - this.aimOffsetValue, this.fromAimLeftPos.y);
        this.mAimRight.position = new mw.Vector2(this.fromAimRightPos.x + this.aimOffsetValue, this.fromAimRightPos.y);
        this.mAimUp.position = new mw.Vector2(this.fromAimUpPos.x, this.fromAimUpPos.y - this.aimOffsetValue);
        this.mAimDown.position = new mw.Vector2(this.fromAimDownPos.x, this.fromAimDownPos.y + this.aimOffsetValue);
    }
    initToAimUIPosition() {
        this.toAimLeftPos = new mw.Vector2(this.fromAimLeftPos.x - (this.aimOffsetValue * 3), this.fromAimLeftPos.y);
        this.toAimRightPos = new mw.Vector2(this.fromAimRightPos.x + (this.aimOffsetValue * 3), this.fromAimRightPos.y);
        this.toAimUpPos = new mw.Vector2(this.fromAimUpPos.x, this.fromAimUpPos.y - (this.aimOffsetValue * 3));
        this.toAimDownPos = new mw.Vector2(this.fromAimDownPos.x, this.fromAimDownPos.y + (this.aimOffsetValue * 3));
    }
    initAimUITween() {
        this.leftAimTween2 = this.expansionTween(this.mAimLeft, this.toAimLeftPos, this.fromAimLeftPos, this.expansionTime).easing(cubicBezier(.19, .66, .27, .72));
        this.rightAimTween2 = this.expansionTween(this.mAimRight, this.toAimRightPos, this.fromAimRightPos, this.expansionTime).easing(cubicBezier(.19, .66, .27, .72));
        this.upAimTween2 = this.expansionTween(this.mAimUp, this.toAimUpPos, this.fromAimUpPos, this.expansionTime).easing(cubicBezier(.19, .66, .27, .72));
        this.downAimTween2 = this.expansionTween(this.mAimDown, this.toAimDownPos, this.fromAimDownPos, this.expansionTime).easing(cubicBezier(.19, .66, .27, .72));
    }
    startAimUITween() {
        this.stopAimUITween();
        let lerpTime = Math.abs(this.mAimLeft.position.x - this.toAimLeftPos.x) / (this.aimOffsetValue * 3) * this.expansionTime;
        this.leftAimTween1 = this.expansionTween(this.mAimLeft, new mw.Vector2(this.mAimLeft.position.x, this.mAimLeft.position.y), this.toAimLeftPos, lerpTime)
            .easing(cubicBezier(.13, .68, .8, .25))
            .start()
            .onComplete(() => {
            this.leftAimTween2.start();
        });
        this.rightAimTween1 = this.expansionTween(this.mAimRight, new mw.Vector2(this.mAimRight.position.x, this.mAimRight.position.y), this.toAimRightPos, lerpTime)
            .easing(cubicBezier(.13, .68, .8, .25))
            .start()
            .onComplete(() => {
            this.rightAimTween2.start();
        });
        this.upAimTween1 = this.expansionTween(this.mAimUp, new mw.Vector2(this.mAimUp.position.x, this.mAimUp.position.y), this.toAimUpPos, lerpTime)
            .easing(cubicBezier(.13, .68, .8, .25))
            .start()
            .onComplete(() => {
            this.upAimTween2.start();
        });
        this.downAimTween1 = this.expansionTween(this.mAimDown, new mw.Vector2(this.mAimDown.position.x, this.mAimDown.position.y), this.toAimDownPos, lerpTime)
            .easing(cubicBezier(.13, .68, .8, .25))
            .start()
            .onComplete(() => {
            this.downAimTween2.start();
        });
    }
    stopAimUITween() {
        if (this.leftAimTween1)
            this.leftAimTween1.stop();
        if (this.leftAimTween2)
            this.leftAimTween2.stop();
        if (this.rightAimTween1)
            this.rightAimTween1.stop();
        if (this.rightAimTween2)
            this.rightAimTween2.stop();
        if (this.upAimTween1)
            this.upAimTween1.stop();
        if (this.upAimTween2)
            this.upAimTween2.stop();
        if (this.downAimTween1)
            this.downAimTween1.stop();
        if (this.downAimTween2)
            this.downAimTween2.stop();
    }
    expansionTween(ui, fromXY, toXY, time) {
        return new Tween({ x: fromXY.x, y: fromXY.y })
            .to({ x: toXY.x, y: toXY.y }, time * 1000)
            .onUpdate((v) => {
            ui.position = new mw.Vector2(v.x, v.y);
        });
    }
    //#endregion
    //#region Gun
    updateGunPropUI(gunIcon, gunBulletCount, gunName) {
        Utils.setImageByAssetIconData(this.mGunIconImage, gunIcon);
        this.mGunBulletCountTextBlock.text = gunBulletCount.toString();
        this.mGunNameTextBlock.text = gunName;
    }
    updateBulletCountUI(bulletCount) {
        this.mGunBulletCountTextBlock.text = bulletCount.toString();
    }
}

var foreign36 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: HUDPanel
});

class HUDModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudPanel = null;
        this.onOpenShopAction = new Action();
        this.onOpenTeamAction = new Action();
        this.onOpenRankAction = new Action();
        this.onOpenActivityAction = new Action();
        this.onOpenTaskAction = new Action();
        this.onResetPosAction = new Action();
        this.onMorphAction = new Action1();
        this.onJumpAction = new Action();
        this.onNormalAction = new Action1();
        this.onReloadAction = new Action();
        this.onCrouchAction = new Action();
        this.isCrouching = false;
        //#endregion
        //#region 连杀提示
        this.killCountMap = new Map();
        this.revengeUserIdMap = new Set();
        //#endregion
        //#region Set
        this.onFireScaleAction = new Action1();
        this.onControlScaleAction = new Action1();
        this.onBgmVolumeAction = new Action1();
        this.onSoundVolumeAction = new Action1();
        this.currentFireScale = 0.05;
        this.currentControlScale = 0.3;
        this.currentBgmVolume = 1;
        this.currentSoundVolume = 1;
        this.clickId = null;
        this.isMorph = false;
        //#endregion
    }
    get getHUDPanel() {
        if (!this.hudPanel) {
            this.hudPanel = UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }
    onStart() {
        this.initUIPanel();
        this.initEventAction();
    }
    initUIPanel() {
        this.hudPanel = UIService.getUI(HUDPanel);
    }
    initEventAction() {
        this.initSetAction();
        this.initSoundEvent();
        this.initMorphAction();
        this.onJumpAction.add(this.addJumpAction.bind(this));
        this.onCrouchAction.add(this.addCrouchAction.bind(this));
        Event.addLocalListener(EventType.OnOffMainHUD, this.addOnOffHUDPannel.bind(this));
        let isOpen = true;
        InputUtil.onKeyDown(mw.Keys.NumPadFive, () => {
            isOpen = !isOpen;
            isOpen ? UIService.getUI(CoinPanel).show() : UIService.getUI(CoinPanel).hide();
            Event.dispatchToLocal(EventType.OnOffMainHUD, isOpen);
        });
    }
    addOnOffHUDPannel(isOpen) {
        isOpen ? this.getHUDPanel.show() : this.getHUDPanel.hide();
    }
    addJumpAction() {
        this.localPlayer.character.jump();
        if (!this.localPlayer.character.movementEnabled)
            this.localPlayer.character.movementEnabled = true;
    }
    addCrouchAction() {
        this.isCrouching = !this.isCrouching;
        this.localPlayer.character.crouch(this.isCrouching);
    }
    onEnterScene(sceneType) {
        this.getHUDPanel.show();
        this.setPlayerIcon();
        this.initSetData();
        this.playBgm();
    }
    updateVsUI(redCount, blueCount) {
        this.getHUDPanel.updateVsUI(redCount, blueCount);
    }
    //#region 击杀提示
    killTip(killerUserId, killerName, killedUserId, killedName) {
        let killTipType = KillTipType.None;
        if (killerUserId == this.localPlayer.userId) {
            killTipType = KillTipType.Killer;
        }
        else if (killedUserId == this.localPlayer.userId) {
            killTipType = KillTipType.Killed;
        }
        this.getHUDPanel.killTip(killTipType, killerName, killedName);
        this.killTipsSound(killerUserId, killerName, killedUserId, killedName);
    }
    killTipsSound(killerUserId, killerName, killedUserId, killedName) {
        let killTipType = KillTipType.None;
        if (killedUserId == this.localPlayer.userId) {
            killTipType = KillTipType.Killed;
            if (!this.revengeUserIdMap.has(killerUserId))
                this.revengeUserIdMap.add(killerUserId);
            SoundService.playSound("294343", 1, GlobalData.soundVolume);
        }
        else if (killerUserId == this.localPlayer.userId && this.revengeUserIdMap.has(killedUserId)) {
            killTipType = KillTipType.revenge;
            this.revengeUserIdMap.delete(killedUserId);
            SoundService.playSound("294342", 1, GlobalData.soundVolume);
        }
        this.getHUDPanel.showKillTips2(killerName, killedName, killTipType);
        if (this.killCountMap.has(killedUserId))
            this.killCountMap.delete(killedUserId);
        let killCount = 0;
        if (this.killCountMap.has(killerUserId)) {
            killCount = this.killCountMap.get(killerUserId);
        }
        killCount++;
        this.killCountMap.set(killerUserId, killCount);
        if (killCount <= 1)
            return;
        let soundId = "";
        let killCountTips = "";
        switch (killCount) {
            case 2:
                soundId = "65877";
                killCountTips = GameConfig.Language.DefeatedPeople_2.Value;
                break;
            case 3:
                soundId = "65874";
                killCountTips = GameConfig.Language.DefeatedPeople_3.Value;
                break;
            case 4:
                soundId = "65873";
                killCountTips = GameConfig.Language.DefeatedPeople_4.Value;
                break;
            case 5:
                soundId = "65881";
                killCountTips = GameConfig.Language.DefeatedPeople_5.Value;
                break;
            case 6:
                soundId = "65871";
                killCountTips = GameConfig.Language.DefeatedPeople_6.Value;
                break;
            case 7:
                soundId = "65879";
                killCountTips = StringUtil.format(GameConfig.Language.DefeatedPeople_7.Value, 7);
                break;
            default:
                soundId = "65879";
                killCountTips = StringUtil.format(GameConfig.Language.DefeatedPeople_7.Value, killCount);
                break;
        }
        SoundService.playSound(soundId, 1, GlobalData.soundVolume);
        this.getHUDPanel.showKillTips1(killCountTips, killerName, killedName);
    }
    //#endregion
    //#region Player-ICON-HP-Rank
    setPlayerIcon() {
        if (mw.SystemUtil.isPIE)
            return;
        mw.AccountService.fillAvatar(this.getHUDPanel.mIconmage);
    }
    updateHpUI(hp, isUpdateBarMaxHp = false) {
        if (hp < 0)
            hp = 0;
        if (isUpdateBarMaxHp)
            this.getHUDPanel.updateProgressBarMaxHp(hp);
        this.getHUDPanel.updateHpUI(hp);
        if (hp <= 0)
            this.getHUDPanel.startDeadCountDown();
        if (hp == GlobalData.maxHp)
            this.getHUDPanel.endDeadCountDown();
    }
    updateRankUIText(isRedTeam, rank) {
        this.getHUDPanel.updateRankUIText(isRedTeam, rank);
    }
    initSetData() {
        this.currentFireScale = this.data.fireScale;
        this.currentControlScale = this.data.controlScale;
        this.currentBgmVolume = this.data.bgmVolume;
        this.currentSoundVolume = this.data.soundVolume;
        GlobalData.soundVolume = this.currentSoundVolume;
        this.getHUDPanel.initSetData(this.currentFireScale, this.currentControlScale, this.currentBgmVolume, this.currentSoundVolume);
    }
    initSetAction() {
        this.onFireScaleAction.add((scale) => {
            this.currentFireScale = scale;
        });
        this.onControlScaleAction.add((scale) => {
            this.currentControlScale = scale;
        });
        this.onBgmVolumeAction.add((volume) => {
            this.currentBgmVolume = volume;
            SoundService.BGMVolumeScale = volume;
        });
        this.onSoundVolumeAction.add((volume) => {
            this.currentSoundVolume = volume;
            GlobalData.soundVolume = volume;
        });
    }
    get getFireScale() {
        return this.currentFireScale;
    }
    saveSetData() {
        if (this.data.fireScale == this.currentFireScale &&
            this.data.controlScale == this.currentControlScale &&
            this.data.bgmVolume == this.currentBgmVolume &&
            this.data.soundVolume == this.currentFireScale)
            return;
        this.server.net_saveSetData(this.currentFireScale, this.currentControlScale, this.currentBgmVolume, this.currentSoundVolume);
    }
    //#endregion
    //#region SoundService
    playBgm() {
        return;
    }
    initSoundEvent() {
        Event.addLocalListener("PlayButtonClick", (btnName) => {
            if (btnName == "reload" || btnName == "jump" || btnName == "aim" || btnName == "left_fire" || btnName == "mJumpButton")
                return;
            this.playClickSound();
        });
    }
    playClickSound() {
        if (this.clickId)
            SoundService.stopSound(this.clickId);
        this.clickId = SoundService.playSound("200082", 1, GlobalData.soundVolume);
    }
    //#endregion
    //#region Morph
    initMorphAction() {
        this.onMorphAction.add(this.addMorphAction.bind(this));
    }
    get getIsMorph() {
        return this.isMorph;
    }
    addMorphAction(isMorph) {
        this.isMorph = isMorph;
        // Event.dispatchToLocal(EventType.OnOffWeaponUI, isMorph);
        // if (!isMorph) Event.dispatchToLocal(EventType.TryOutGun);
    }
    //#endregion
    //#region Aim
    startAimUITween() {
        this.getHUDPanel.startAimUITween();
    }
    //#endregion
    //#region Update Gun
    updateBulletCount(bulletCount) {
        this.getHUDPanel.updateBulletCountUI(bulletCount);
    }
    updateGunPropUI(gunIcon, gunBulletCount, gunName) {
        this.getHUDPanel.updateGunPropUI(gunIcon, gunBulletCount, gunName);
    }
}

var foreign34 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: HUDModuleC
});

/**
 * MapEx(可序列化)
 */
var MapEx;
(function (MapEx) {
    /**
     * 是否为空
     * @param map
     * @returns 是/否
     */
    function isNull(map) {
        return !map || map == null || map == undefined;
    }
    MapEx.isNull = isNull;
    /**
     * 获取对象
     * @param map
     * @param key
     * @returns
     */
    function get(map, key) {
        if (map[key]) {
            return map[key];
        }
        let has = false;
        let keys = Object.keys(map);
        for (let i = 0; i < keys.length; ++i) {
            if (keys[i] == key) {
                has = true;
                break;
            }
        }
        if (has) {
            return map[key];
        }
        return null;
    }
    MapEx.get = get;
    /**
     * 设置对象
     * @param map
     * @param key
     * @param val
     */
    function set(map, key, val) {
        map[key] = val;
    }
    MapEx.set = set;
    /**
     * 删除对象
     * @param map
     * @param key
     * @returns 成功/失败
     */
    function del(map, key) {
        if (map[key]) {
            delete map[key];
            return true;
        }
        let has = false;
        let keys = Object.keys(map);
        for (let i = 0; i < keys.length; ++i) {
            if (keys[i] == key) {
                has = true;
                break;
            }
        }
        if (has) {
            delete map[key];
            return true;
        }
        return false;
    }
    MapEx.del = del;
    /**
     * 是否有指定对象
     * @param map
     * @param key
     * @returns
     */
    function has(map, key) {
        if (map[key]) {
            return true;
        }
        let has = false;
        let keys = Object.keys(map);
        for (let i = 0; i < keys.length; ++i) {
            if (keys[i] == key) {
                has = true;
                break;
            }
        }
        if (has) {
            return true;
        }
        return false;
    }
    MapEx.has = has;
    /**
     * 获取count数量
     * @param map
     * @param key
     * @returns
     */
    function count(map) {
        let res = 0;
        forEach(map, e => {
            ++res;
        });
        return res;
    }
    MapEx.count = count;
    /**
     * 遍历map
     * @param map
     * @param callback
     */
    function forEach(map, callback) {
        for (let key in map) {
            if (map[key]) {
                callback(key, map[key]);
            }
        }
    }
    MapEx.forEach = forEach;
    /**
     * 拷贝，Val还是引用出来的，只是Map换了
     * @param map
     * @returns
     */
    function copy(map) {
        let res = {};
        for (let key in map) {
            res[key] = map[key];
        }
        return res;
    }
    MapEx.copy = copy;
})(MapEx || (MapEx = {}));

var foreign81 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get MapEx () { return MapEx; }
});

var ShopType;
(function (ShopType) {
    ShopType[ShopType["Gun"] = 0] = "Gun";
    ShopType[ShopType["Role"] = 1] = "Role";
    ShopType[ShopType["Trailing"] = 2] = "Trailing";
})(ShopType || (ShopType = {}));
var PriceType;
(function (PriceType) {
    PriceType[PriceType["Free"] = 0] = "Free";
    PriceType[PriceType["CoinAds"] = 1] = "CoinAds";
    PriceType[PriceType["Ads"] = 2] = "Ads";
})(PriceType || (PriceType = {}));
class ShopData extends Subdata {
    constructor() {
        super(...arguments);
        this.shopIds = {}; //1-Gun,2-Role,3-Trailing
        this.useShopIds = {}; //1-Gun,2-Role,3-Trailing
    }
    initDefaultData() {
        let gunId = Utils.randomInt(1, 3);
        let roleId = Utils.randomInt(1, 5);
        this.shopIds = {
            [ShopType.Gun]: [gunId],
            [ShopType.Role]: [roleId]
        };
        this.useShopIds = {
            [ShopType.Gun]: gunId,
            [ShopType.Role]: roleId
        };
    }
    setShopId(shopType, shopId) {
        if (MapEx.has(this.shopIds, shopType)) {
            MapEx.get(this.shopIds, shopType).push(shopId);
        }
        else {
            MapEx.set(this.shopIds, shopType, [shopId]);
        }
        this.save(true);
    }
    setUseShopId(shopType, shopId) {
        MapEx.set(this.useShopIds, shopType, shopId);
        this.save(true);
    }
}
__decorate([
    Decorator.persistence()
], ShopData.prototype, "shopIds", void 0);
__decorate([
    Decorator.persistence()
], ShopData.prototype, "useShopIds", void 0);

var foreign54 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get PriceType () { return PriceType; },
    get ShopType () { return ShopType; },
    default: ShopData
});

class Helper {
    static get localPlayer() {
        if (this.clientPlayer == null) {
            this.clientPlayer = mw.Player.localPlayer;
        }
        return this.clientPlayer;
    }
    static setPlayerObMap(characterId, gameObjectId) {
        this.playerObMap.set(characterId, gameObjectId);
    }
    static getCharacterId(gameObjectId) {
        if (!this.playerObMap || this.playerObMap.size == 0)
            return null;
        let characterId = null;
        this.playerObMap.forEach((value, key) => {
            if (value == gameObjectId)
                characterId = key;
        });
        return characterId;
    }
}
Helper.clientPlayer = null;
Helper.playerObMap = new Map();
Helper.damage = 1;
Helper.recyclePosition = new mw.Vector(0, 0, -10000);
/**激活的子弹 */
Helper.activeBulletMap = new Map();
/**失活的子弹 */
Helper.inactiveBullets = new Map();
/**子弹数据 */
Helper.projectileDateMap_Abandon = new Map([
    [0, { prefabId: "5FE5766E4D27D1FC0ECC9DB29673A3EB", fireSound: "208258", hitEffect: "200147" }],
    [1, { prefabId: "EAF62D0F4EF181ABB6C8AB83E876818B", fireSound: "207772", hitEffect: "31122" }],
    [2, { prefabId: "24E7DF3146C2E5414BE4EE8AC093215B", fireSound: "208268", hitEffect: "31122" }],
    [3, { prefabId: "B8EEE9C049C089FB1E08BAA38ADC9615", fireSound: "208571", hitEffect: "200157" }],
    [4, { prefabId: "4FB7635246F9D7F1BBAE98B3EEC97353", fireSound: "208166", hitEffect: "27422" }],
    [5, { prefabId: "F68FC2B94AFC0A81AA1C4D809873D98E", fireSound: "208399", hitEffect: "130641" }],
    [6, { prefabId: "5D1E329545758BE6E58407910CCA0687", fireSound: "208374", hitEffect: "287821" }],
    [7, { prefabId: "1961231449827BF19AF6349B27AB75FA", fireSound: "208495", hitEffect: "61006" }],
    [8, { prefabId: "6EB015964A8F1DC44DF94595AA7593E1", fireSound: "208166", hitEffect: "130642" }],
    [9, { prefabId: "1405575C47698FE0FC41F0B7E104529E", fireSound: "208048", hitEffect: "130641" }],
]);
/**武器数据 FireAnchor*/
Helper.weaponDataMap_Abandon = new Map([
    [0,
        {
            prefabId: "C2AC715444A3A236FBF0E09AE39287B0",
            slotType: mw.HumanoidSlotType.RightHand,
            gunAttitude: "14037",
            skillAnims: ["20244", "20244", "20244"],
            skillAnimTimes: [0.2, 0.4, 0.6],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 5, 10],
            skillBulletCounts: [1, 2, 3],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["20244"],
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
            gunAttitude: "14037",
            skillAnims: ["20244", "20244", "20244"],
            skillAnimTimes: [0.2, 0.4, 0.6],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 5, 10],
            skillBulletCounts: [1, 2, 3],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["20244"],
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
            gunAttitude: "14037",
            skillAnims: ["20244", "20244", "20244"],
            skillAnimTimes: [0.2, 0.4, 0.6],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 5, 10],
            skillBulletCounts: [1, 2, 3],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["20244"],
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
            gunAttitude: "221620",
            skillAnims: ["99959", "99959", "99959"],
            skillAnimTimes: [0.2, 0.6, 1],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 3, 5],
            skillBulletCounts: [1, 3, 5],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["99959"],
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
            gunAttitude: "14037",
            skillAnims: ["20244", "20244", "20244"],
            skillAnimTimes: [0.2, 0.4, 0.6],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 5, 10],
            skillBulletCounts: [1, 2, 3],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["20244"],
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
            gunAttitude: "221620",
            skillAnims: ["99959", "99959", "99959"],
            skillAnimTimes: [0.2, 0.6, 1],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 3, 5],
            skillBulletCounts: [1, 3, 5],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["99959"],
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
            gunAttitude: "221620",
            skillAnims: ["99959", "99959", "99959"],
            skillAnimTimes: [0.2, 0.6, 1],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 3, 5],
            skillBulletCounts: [1, 3, 5],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["99959"],
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
            gunAttitude: "221620",
            skillAnims: ["99959", "99959", "99959"],
            skillAnimTimes: [0.2, 0.6, 1],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 3, 5],
            skillBulletCounts: [1, 3, 5],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["99959"],
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
            gunAttitude: "221620",
            skillAnims: ["99959", "99959", "99959"],
            skillAnimTimes: [0.2, 0.6, 1],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 3, 5],
            skillBulletCounts: [1, 3, 5],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["99959"],
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
            gunAttitude: "221620",
            skillAnims: ["99959", "99959", "99959"],
            skillAnimTimes: [0.2, 0.6, 1],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 3, 5],
            skillBulletCounts: [1, 3, 5],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["99959"],
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
    [8,
        {
            prefabId: "A9659BDD4D031331655C24BC07F99E83",
            slotType: mw.HumanoidSlotType.RightHand,
            gunAttitude: "221620",
            skillAnims: ["99959", "99959", "99959"],
            skillAnimTimes: [0.2, 0.6, 1],
            skillAtkTime: [0.2, 0.2, 0.2],
            skillCDs: [1, 3, 5],
            skillBulletCounts: [1, 3, 5],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["99959"],
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
        {
            prefabId: "51DE48DB420CD65069D6F1A77A43FE1E",
            slotType: mw.HumanoidSlotType.LeftHand,
            gunAttitude: "20305",
            skillAnims: ["121981", "121981", "121981"],
            skillAnimTimes: [2.47, 2.47, 2.47],
            skillAtkTime: [1.05, 1.05, 1.05],
            skillCDs: [1, 3, 5],
            skillBulletCounts: [1, 3, 5],
            skillFireInterval: [0.01, 0.05, 0.05],
            normalAnims: ["121952", "121955", "121987", "121989", "121990"],
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
    ], //弓,弓箭瞬发射箭,弓箭手A大招
]);

var foreign78 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Helper: Helper
});

var ProjectileType;
(function (ProjectileType) {
    /**正常 */
    ProjectileType[ProjectileType["Normal"] = 0] = "Normal";
    /**弧线追踪(弱) */
    ProjectileType[ProjectileType["ArcTracing_Weak"] = 1] = "ArcTracing_Weak";
    /**弧线追踪(强) */
    ProjectileType[ProjectileType["ArcTracing_Strong"] = 2] = "ArcTracing_Strong";
    /**穿透 */
    ProjectileType[ProjectileType["Penetrate"] = 3] = "Penetrate";
    /**投掷物 */
    ProjectileType[ProjectileType["Throw"] = 4] = "Throw";
})(ProjectileType || (ProjectileType = {}));

var foreign71 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get ProjectileType () { return ProjectileType; }
});

class Projectile {
    get getCurCharacterId() {
        if (this.curCharacterId == null) {
            this.curCharacterId = Player.localPlayer.character.gameObjectId;
        }
        return this.curCharacterId;
    }
    constructor(characterId, projectileId, hitEffect, hitEffectScale, startPosition, startDirection, projectileType, paths) {
        this.curCharacterId = null;
        this.characterId = "";
        this.projectileId = "";
        this.hitEffect = "";
        this.hitEffectScale = mw.Vector.one;
        this.startPosition = mw.Vector.zero;
        this.startDirection = mw.Vector.zero;
        this.displacement = mw.Vector.zero;
        this.projectileType = ProjectileType.Normal;
        this.paths = [];
        this.projectile = null;
        this.isUpdate = false;
        this.stride = mw.Vector.zero;
        this.currentLocation = mw.Vector.zero;
        this.preLocation = mw.Vector.zero;
        this.pathIndex = 0;
        this.recycleTimeOutId = null;
        this.characterId = characterId;
        this.projectileId = projectileId;
        this.hitEffect = hitEffect;
        this.hitEffectScale = hitEffectScale;
        this.startPosition = startPosition;
        this.startDirection = startDirection;
        this.displacement = mw.Vector.multiply(startDirection, 10000, this.displacement);
        this.projectileType = projectileType;
        this.paths = paths;
        this.pathIndex = 0;
        this.initBullet();
    }
    async initBullet() {
        this.projectile = await GameObjPool.asyncSpawn(this.projectileId, mwext.GameObjPoolSourceType.Prefab);
        this.projectile.worldTransform.position = Helper.recyclePosition;
        this.prepareFire();
    }
    checkTarget(hitTargets) {
        if (!hitTargets || hitTargets.length == 0)
            return;
        // let isRecycle: boolean = true;
        for (let i = 0; i < hitTargets.length; ++i) {
            // isRecycle = true;
            let hitTarget = hitTargets[i]?.gameObject;
            if (hitTarget instanceof mw.Character) {
                if (hitTarget.gameObjectId != this.characterId) {
                    if (this.getCurCharacterId == this.characterId) {
                        PrefabEvent.PrefabEvtFight.hit(this.characterId, hitTarget.gameObjectId, Helper.damage, this.projectile.worldTransform.position);
                    }
                    break;
                }
            }
            // if (hitTarget.tag != `go`) isRecycle = false;
        }
        // if (isRecycle) 
        this.recycleThis();
    }
    updateCheck() {
        let hitTargets = QueryUtil.lineTrace(this.preLocation, this.currentLocation, true, mw.SystemUtil.isPIE);
        if (!hitTargets || hitTargets.length == 0)
            return;
        this.checkTarget(hitTargets);
    }
    onTriggerEnter(go) {
        if (go instanceof mw.Character) {
            if (go.gameObjectId == this.characterId)
                return; //打到了自己
            if (go instanceof Character) { //打到了玩家
                if (this.getCurCharacterId == this.characterId) { //是自己发射的子弹
                    PrefabEvent.PrefabEvtFight.hit(this.characterId, go.gameObjectId, Helper.damage, this.projectile.worldTransform.position);
                    console.error("击中其他玩家");
                }
            }
        }
        this.recycleThis();
    }
    initFire(ownerId, startPosition, startDirection, projectileType, paths) {
        this.characterId = ownerId;
        this.startPosition = startPosition;
        this.startDirection = startDirection;
        this.displacement = mw.Vector.multiply(startDirection, 10000, this.displacement);
        this.projectileType = projectileType;
        this.paths = paths;
        this.pathIndex = 0;
        this.prepareFire();
        this.setThisVisibility(true);
    }
    prepareFire() {
        if (!this.projectile)
            return;
        if (this.projectileType == ProjectileType.ArcTracing_Weak && this.paths) {
            if (this.pathIndex + 1 < this.paths.length) {
                mw.Vector.subtract(this.paths[this.pathIndex + 1], this.paths[this.pathIndex], this.startDirection);
                this.startDirection = this.startDirection.normalized;
            }
        }
        this.projectile.worldTransform.position = this.startPosition;
        this.preLocation = this.startPosition;
        this.projectile.worldTransform.rotation = new mw.Rotation(this.startDirection, mw.Vector.up);
        this.isUpdate = true;
        this.setRecycleTimeout();
    }
    update(dt) {
        if (!this.isUpdate)
            return;
        if (this.projectileType == ProjectileType.Normal || !this.paths) {
            this.updateThisPosition_Normal(dt);
        }
        else if (this.projectileType == ProjectileType.ArcTracing_Weak && this.paths) {
            this.updateThisPosition_ArcTracing();
        }
    }
    updateThisPosition_Normal(dt) {
        if (!this.projectile)
            return;
        this.stride = mw.Vector.multiply(this.displacement, dt, this.stride);
        this.currentLocation = this.projectile.worldTransform.position;
        this.currentLocation.x += this.stride.x;
        this.currentLocation.y += this.stride.y;
        this.currentLocation.z += this.stride.z;
        this.projectile.worldTransform.position = this.currentLocation;
        this.updateCheck();
        this.preLocation = this.currentLocation;
    }
    updateThisPosition_ArcTracing() {
        if (!this.projectile || !this.paths || this.paths?.length == 0)
            return;
        this.currentLocation = this.projectile.worldTransform.position;
        if (mw.Vector.subtract(this.currentLocation, this.paths[this.pathIndex]).length <= 10) {
            if (this.pathIndex < this.paths.length - 1) {
                mw.Vector.subtract(this.paths[this.pathIndex + 1], this.paths[this.pathIndex], this.startDirection);
                this.startDirection = this.startDirection.normalized;
                this.projectile.worldTransform.rotation = new mw.Rotation(this.startDirection, mw.Vector.up);
                this.pathIndex++;
                // console.error("this.pathIndex", this.pathIndex);
            }
        }
        mw.Vector.lerp(this.currentLocation, this.paths[this.pathIndex], 0.6, this.currentLocation);
        this.projectile.worldTransform.position = this.currentLocation;
        if (mw.Vector.subtract(this.currentLocation, this.paths[this.paths.length - 1]).length <= 10) {
            this.recycleThis();
        }
    }
    setThisVisibility(visible) {
        if (!this.projectile)
            return;
        this.projectile.setVisibility(visible, true);
    }
    setRecycleTimeout() {
        this.clearRecycleTimeOut();
        this.recycleTimeOutId = setTimeout(() => {
            this.recycleThis();
        }, 10 * 1000);
    }
    clearRecycleTimeOut() {
        if (!this.recycleTimeOutId)
            return;
        clearTimeout(this.recycleTimeOutId);
        this.recycleTimeOutId = null;
    }
    recycleThis() {
        this.play3DSound("208300");
        this.playHitEffect();
        this.recycleProjectile();
        // console.error("recycle");
    }
    play3DSound(soundId) {
        SoundService.play3DSound(soundId, this.projectile.worldTransform.position);
    }
    playHitEffect() {
        EffectService.playAtPosition(this.hitEffect, this.projectile.worldTransform.position, { scale: this.hitEffectScale });
    }
    recycleProjectile() {
        if (!Helper.activeBulletMap.has(this.projectileId) || !Helper.activeBulletMap.get(this.projectileId).has(this))
            return;
        Helper.activeBulletMap.get(this.projectileId).delete(this);
        if (Helper.inactiveBullets.has(this.projectileId)) {
            Helper.inactiveBullets.get(this.projectileId).push(this);
        }
        else {
            Helper.inactiveBullets.set(this.projectileId, [this]);
        }
        this.projectile.worldTransform.position = Helper.recyclePosition;
        this.setThisVisibility(false);
        this.clearRecycleTimeOut();
        this.isUpdate = false;
    }
}

var foreign68 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Projectile: Projectile
});

class WeaponModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.currentCamera = null;
        //#region Switch Weapon
        this.currentWeaponId = 0;
        this.weaponPropElement = null;
        this.bulletCount = 0;
        this.weaponIcon = "278406";
        this.weaponName = "神兵弓箭";
        this.fireAnchor = null;
        //#endregion
        //#region Normal
        this.normalIntervalId = null;
        this.normalAnims = [];
        this.normalAttackLength = 0;
        this.normalAnimTimes = [];
        this.normalAtkTime = [];
        this.normalAttackIndex = -1;
        this.isCanNormalAttack = true;
        this.currentProjectileType = ProjectileType.Normal;
        this.normalAttackTimeoutId = null;
        //#endregion
        //#region Fov
        this.camera = null;
        /* 焦距变化标识 */
        this.isZooming = false;
        /* 瞄准状态标识 */
        this.isAimming = false;
        /**瞄准聚焦速度 */
        this.aimSpeed = 90;
        /**瞄准FOV */
        this.aimCameraFov = 90;
        /**装备FOV */
        this.equipmentCameraFov = 110;
    }
    get getHUDModuleC() {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getCurrentCamera() {
        if (this.currentCamera == null) {
            this.currentCamera = Camera.currentCamera;
        }
        return this.currentCamera;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.bindEventAction();
    }
    bindEventAction() {
        this.getHUDModuleC.onNormalAction.add(this.normalIntervalAttack.bind(this));
        this.getHUDModuleC.onReloadAction.add(this.reloadButtet.bind(this));
        //#region KeyDown
        let isNormal = true;
        InputUtil.onKeyDown(mw.Keys.R, () => {
            isNormal = !isNormal;
            this.switchProjectileType(isNormal ? ProjectileType.Normal : ProjectileType.ArcTracing_Weak);
        });
        //#endregion
    }
    switchWeaponData(weaponId) {
        if (this.currentWeaponId == weaponId)
            return;
        this.setWeaponPropData(weaponId);
        this.switchWeapon();
    }
    net_switchWeaponData(weaponId) {
        this.setWeaponPropData(weaponId);
    }
    setWeaponPropData(weaponId) {
        this.currentWeaponId = weaponId;
        this.weaponPropElement = GameConfig.WeaponProp.getElement(this.currentWeaponId);
        Helper.damage = this.weaponPropElement.Damage;
        this.updateNormalData();
        Notice.showDownNotice(GameConfig.Language.WeaponEquipmentSuccessful.Value);
    }
    switchWeapon() {
        this.server.net_switchWeapon(this.currentWeaponId);
    }
    switchProjectileType(projectileType) {
        this.currentProjectileType = projectileType;
    }
    setFireAnchor(fireAnchor) {
        this.fireAnchor = fireAnchor;
    }
    normalIntervalAttack(isPress) {
        if (isPress) {
            this.normalAttack();
            this.normalIntervalId = TimeUtil.setInterval(this.normalAttack.bind(this), 0.1);
            this.switchFireOn();
        }
        else {
            TimeUtil.clearInterval(this.normalIntervalId);
            this.switchFireOff();
        }
    }
    updateNormalData() {
        this.normalAnims = this.weaponPropElement.NormalAnims;
        this.normalAttackLength = this.normalAnims.length;
        this.normalAnimTimes = this.weaponPropElement.NormalAnimTimes;
        this.normalAtkTime = this.weaponPropElement.NormalAtkTime;
        this.normalAttackIndex = 0;
        this.bulletCount = this.weaponPropElement.BulletCount;
        this.weaponIcon = this.weaponPropElement.WeaponIcon;
        this.weaponName = this.weaponPropElement.WeaponName;
        this.getHUDModuleC.updateGunPropUI(this.weaponIcon, this.bulletCount, this.weaponName);
    }
    normalAttack() {
        if (!this.isCanNormalAttack || !this.fireAnchor || this.bulletCount <= 0)
            return;
        if (this.normalAttackIndex >= this.normalAttackLength)
            this.normalAttackIndex = 0;
        this.updateNormalAttackState();
        this.resetNormalAttackIndex();
        let shootDir = this.calculateFireDirection(this.getCurrentCamera.worldTransform, this.fireAnchor.worldTransform.position);
        this.server.net_fireNormalAttack(shootDir, this.currentWeaponId, this.normalAttackIndex++, this.currentProjectileType);
        this.bulletCount--;
        if (this.bulletCount <= 0)
            this.reloadButtet(1);
        this.getHUDModuleC.updateBulletCount(this.bulletCount);
        TimeUtil.delaySecond(this.normalAtkTime[this.normalAttackIndex - 1]).then(() => {
            this.getHUDModuleC.startAimUITween();
        });
    }
    updateNormalAttackState() {
        this.isCanNormalAttack = false;
        TimeUtil.delaySecond(this.normalAtkTime[this.normalAttackIndex]).then(() => {
            this.isCanNormalAttack = true;
        });
    }
    clearNormalAttackTimeout() {
        if (this.normalAttackTimeoutId) {
            clearTimeout(this.normalAttackTimeoutId);
            this.normalAttackTimeoutId = null;
        }
    }
    resetNormalAttackIndex() {
        this.clearNormalAttackTimeout();
        this.normalAttackTimeoutId = setTimeout(() => {
            this.normalAttackIndex = 0;
            if (!this.isCanNormalAttack)
                this.isCanNormalAttack = true;
        }, this.normalAnimTimes[this.normalAttackIndex] * 1000);
    }
    get getCamera() {
        if (this.camera == null) {
            this.camera = Camera.currentCamera;
        }
        return this.camera;
    }
    switchFireOn() {
        this.isZooming = true;
        this.zoomIn();
    }
    switchFireOff() {
        this.isZooming = true;
        this.zoomOut();
    }
    zoomIn() {
        if (this.getCamera == null)
            return;
        this.isAimming = true;
    }
    zoomOut() {
        if (this.getCamera == null)
            return;
        this.isAimming = false;
    }
    cameraUpdate(dt) {
        if (!this.isZooming)
            return;
        if (this.isAimming) {
            this.getCamera.fov -= dt * this.aimSpeed;
            if (this.getCamera.fov < this.aimCameraFov) {
                this.getCamera.fov = this.aimCameraFov;
                this.isZooming = false;
            }
        }
        else {
            this.getCamera.fov += dt * this.aimSpeed;
            if (this.getCamera.fov > this.equipmentCameraFov) {
                this.getCamera.fov = this.equipmentCameraFov;
                this.isZooming = false;
            }
        }
    }
    //#endregion
    //#region 
    async reloadButtet(delaySecond = 0) {
        if (!this.weaponPropElement || this.bulletCount == this.weaponPropElement.BulletCount)
            return;
        await TimeUtil.delaySecond(delaySecond);
        this.server.net_reload(this.weaponPropElement.ReloadAnimation, this.weaponPropElement.ReloadSound);
        TimeUtil.delaySecond(1).then(this.addReloadBullet.bind(this));
    }
    addReloadBullet() {
        if (!this.weaponPropElement)
            return;
        this.bulletCount = this.weaponPropElement.BulletCount;
        this.getHUDModuleC.updateBulletCount(this.bulletCount);
    }
    //#endregion
    onUpdate(dt) {
        this.cameraUpdate(dt);
        if (Helper.activeBulletMap.size == 0)
            return;
        Helper.activeBulletMap.forEach((value) => {
            value.forEach((projectile) => {
                projectile.update(dt);
            });
        });
    }
    calculateFireDirection(cameraWorldTransform, firePosition) {
        let cameraShootDir = Camera.currentCamera.worldTransform.clone().getForwardVector().clone();
        let endLoc = cameraShootDir.multiply(100000).add(cameraWorldTransform.clone().position);
        let shootDir = endLoc.clone().subtract(firePosition);
        let hitRes = QueryUtil.lineTrace(cameraWorldTransform.clone().position, endLoc, true, mw.SystemUtil.isPIE);
        hitRes = hitRes.filter(e => { return !(e.gameObject instanceof mw.Trigger); });
        console.error(`hitRes: ${hitRes.length}`);
        if (hitRes && hitRes.length > 0 && mw.Vector.dot(hitRes[0].gameObject.worldTransform.position.clone().subtract(firePosition), shootDir) > 0) {
            shootDir = hitRes[0].impactPoint.clone().subtract(firePosition);
        }
        return shootDir.normalized;
    }
}

var foreign72 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: WeaponModuleC
});

let Weapon = class Weapon extends Script {
    constructor() {
        super(...arguments);
        this.weaponId = -1;
        this.playerId_WeaponId = "";
        this.fireData = "";
        this.isVisibility = true;
        this.weaponModuleC = null;
        this.player = null;
        this.playerId = -1;
        //#region Switch Weapon
        this.weaponPropElement = null;
        this.weaponModel = null;
        this.fireAnchor = null;
        //#endregion
        //#region Projectile
        this.projectilePropElement = null;
        this.gos = [];
        //#endregion
    }
    get getWeaponModuleC() {
        if (this.weaponModuleC == null) {
            this.weaponModuleC = ModuleService.getModule(WeaponModuleC);
        }
        return this.weaponModuleC;
    }
    get getPlayer() {
        if (this.player == null) {
            this.player = Player.getPlayer(this.playerId);
        }
        return this.player;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        if (mw.SystemUtil.isServer())
            return;
    }
    async initPlayerWeapon() {
        let data = this.playerId_WeaponId.split("|");
        if (data.length < 2)
            return;
        this.playerId = parseInt(data[0]);
        this.weaponId = parseInt(data[1]);
        await this.initPlayer();
        await this.onWeaponChanged();
    }
    async initPlayer() {
        if (!this.player) {
            this.player = await Player.asyncGetPlayer(this.playerId);
            console.error(`playerId = ${this.playerId}"的玩家 "${this.player ? "角色初始化完成" : "角色初始化失败"}`);
        }
    }
    async onWeaponChanged() {
        if (this.weaponId == -1) {
            this.despawnWeapon();
            return;
        }
        if (!this.player)
            await this.initPlayer();
        if (!this.player)
            return;
        this.weaponPropElement = GameConfig.WeaponProp.getElement(this.weaponId);
        if (!this.weaponPropElement)
            return;
        this.despawnWeapon();
        await this.spawnWeapon(this.weaponPropElement.PrefabId, this.weaponPropElement.SlotType);
        this.playSubStance(this.weaponPropElement.GunAttitude);
    }
    async playSubStance(gunAttitude) {
        await Utils.asyncDownloadAsset(gunAttitude);
        this.getPlayer.character.loadSubStance(gunAttitude).play();
    }
    async spawnWeapon(prefabId, slotType) {
        this.weaponModel = await GameObjPool.asyncSpawn(prefabId, mwext.GameObjPoolSourceType.Prefab);
        this.getPlayer.character.attachToSlot(this.weaponModel, slotType);
        this.weaponModel.localTransform.position = mw.Vector.zero;
        this.weaponModel.localTransform.rotation = mw.Rotation.zero;
        console.error(`playerId = ${this.playerId}的玩家 "${this.weaponModel ? "武器加载完成" : "武器加载失败"}`);
        this.fireAnchor = this.weaponModel.getChildByName("FireAnchor");
        if (this.getPlayer.playerId == Player.localPlayer.playerId)
            this.getWeaponModuleC.setFireAnchor(this.fireAnchor);
    }
    despawnWeapon() {
        if (!this.weaponModel)
            return;
        GameObjPool.despawn(this.weaponModel);
    }
    weaponState() {
        if (!this.weaponModel)
            return;
        this.weaponModel.setVisibility(this.isVisibility);
    }
    fire() {
        if (!this.fireData)
            return;
        // console.error("fireData = " + this.fireData);
        let data = this.fireData.split("|");
        if (data.length < 3)
            return;
        let shootDir = Utils.stringToVector(data[0]);
        let projectileType = parseInt(data[1]);
        let attackIndex = parseInt(data[2]);
        if (!this.getPlayer || !this.fireAnchor)
            return;
        this.projectilePropElement = GameConfig.ProjectileProp.getElement(this.weaponId);
        if (!this.projectilePropElement || !this.weaponPropElement)
            return;
        console.error(`playerId = ${this.playerId}的玩家 发射一枚子弹`);
        this.prepareFire(this.getPlayer.character.gameObjectId, this.fireAnchor.worldTransform.position, shootDir, projectileType, attackIndex);
    }
    async prepareFire(characterId, firePosition, shootDir, projectileType, attackIndex) {
        let prefabId = this.projectilePropElement.PrefabId;
        let fireSound = this.projectilePropElement.FireSound;
        let hitEffect = this.projectilePropElement.HitEffect;
        let hitEffectScale = this.projectilePropElement.HitEffectScale;
        let projectileCount = this.weaponPropElement.NormalBulletCount[attackIndex];
        let fireInterval = this.weaponPropElement.NormalFireInterval[attackIndex];
        this.calculateFire(characterId, prefabId, hitEffect, hitEffectScale, firePosition, shootDir, projectileType, fireSound);
        for (let i = 0; i < projectileCount - 1; ++i) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    this.calculateFire(characterId, prefabId, hitEffect, hitEffectScale, firePosition, shootDir, projectileType, fireSound);
                    return resolve();
                }, fireInterval * 1000);
            });
        }
    }
    calculateFire(characterId, prefabId, hitEffect, hitEffectScale, firePosition, shootDir, projectileType, fireSound) {
        this.startFire(characterId, prefabId, hitEffect, hitEffectScale, firePosition, shootDir, projectileType);
        this.playFireSound(firePosition, fireSound);
    }
    startFire(characterId, projectileId, hitEffect, hitEffectScale, firePosition, startDirection, projectileType) {
        let projectile = null;
        let targetPosition = null;
        let paths = null;
        if (projectileType == ProjectileType.ArcTracing_Weak) {
            targetPosition = Utils.getRecentPlayerLoc(characterId, firePosition, startDirection);
            if (!targetPosition)
                targetPosition = Utils.getRecentTargetLoc(firePosition, startDirection);
            paths = (targetPosition == null) ? null : Utils.getArcTracingPoints(firePosition, targetPosition);
            if (mw.SystemUtil.isPIE)
                this.testPaths(paths);
        }
        if (Helper.inactiveBullets.has(projectileId)) {
            let projectiles = Helper.inactiveBullets.get(projectileId);
            if (projectiles.length > 0) {
                projectile = projectiles.shift();
                projectile.initFire(characterId, firePosition, startDirection, projectileType, paths);
            }
            else {
                projectile = new Projectile(characterId, projectileId, hitEffect, hitEffectScale, firePosition, startDirection, projectileType, paths);
            }
        }
        else {
            projectile = new Projectile(characterId, projectileId, hitEffect, hitEffectScale, firePosition, startDirection, projectileType, paths);
        }
        if (Helper.activeBulletMap.has(projectileId)) {
            Helper.activeBulletMap.get(projectileId).add(projectile);
        }
        else {
            Helper.activeBulletMap.set(projectileId, new Set().add(projectile));
        }
    }
    playFireSound(firePosition, fireSound) {
        SoundService.play3DSound(fireSound, firePosition);
    }
    async testPaths(paths) {
        if (!paths)
            return;
        if (this.gos.length >= paths.length) {
            for (let i = 0; i < paths.length; ++i) {
                this.gos[i].worldTransform.scale = mw.Vector.one.multiply(0.1);
                this.gos[i].worldTransform.position = paths[i];
                this.gos[i].setVisibility(true);
            }
            for (let i = paths.length; i < this.gos.length; ++i) {
                this.gos[i].setVisibility(false);
            }
        }
        else {
            for (let i = 0; i < this.gos.length; ++i) {
                this.gos[i].worldTransform.scale = mw.Vector.one.multiply(0.1);
                this.gos[i].worldTransform.position = paths[i];
                this.gos[i].setVisibility(true);
            }
            for (let i = this.gos.length; i < paths.length; ++i) {
                let go = await mw.GameObject.asyncSpawn("197386");
                go.setCollision(mw.PropertyStatus.Off);
                go.worldTransform.scale = mw.Vector.one.multiply(0.1);
                go.worldTransform.position = paths[i];
                this.gos.push(go);
            }
        }
    }
};
__decorate([
    mw.Property({ replicated: true, onChanged: "onWeaponChanged" })
], Weapon.prototype, "weaponId", void 0);
__decorate([
    mw.Property({ replicated: true, onChanged: "initPlayerWeapon" })
], Weapon.prototype, "playerId_WeaponId", void 0);
__decorate([
    mw.Property({ replicated: true, onChanged: "fire" })
], Weapon.prototype, "fireData", void 0);
__decorate([
    mw.Property({ replicated: true, onChanged: "weaponState" })
], Weapon.prototype, "isVisibility", void 0);
Weapon = __decorate([
    Component
], Weapon);
var Weapon$1 = Weapon;

var foreign70 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Weapon$1
});

class WeaponModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        //#endregion
        //#region Weapon
        this.playerWeaponMap = new Map();
        //#endregion
    }
    onPlayerEnterGame(player) {
        let gunId = MapEx.get(DataCenterS.getData(player, ShopData).useShopIds, ShopType.Gun);
        this.initWeapon(player, gunId);
    }
    onPlayerLeft(player) {
        let playerId = player.playerId;
        this.destoryWeapon(playerId);
    }
    //#region Normal Attack
    net_fireNormalAttack(shootDir, weaponId, attackIndex, projectileType) {
        this.fireNormalAttack(this.currentPlayer, shootDir, weaponId, attackIndex, projectileType);
    }
    async fireNormalAttack(player, shootDir, weaponId, attackIndex, projectileType) {
        let weaponPropElement = GameConfig.WeaponProp.getElement(weaponId);
        let atkAnimation = weaponPropElement.NormalAnims[attackIndex];
        if (atkAnimation != "-1") {
            await Utils.asyncDownloadAsset(atkAnimation);
            player.character.loadAnimation(atkAnimation).play();
        }
        let atkTime = weaponPropElement.NormalAtkTime[attackIndex];
        TimeUtil.delaySecond(atkTime).then(() => {
            if (!this.playerWeaponMap.has(player.playerId))
                return;
            let fireData = Utils.vectorToString(shootDir) + "|" + projectileType + "|" + attackIndex;
            this.playerWeaponMap.get(player.playerId).fireData = fireData;
        });
    }
    net_reload(reloadAniId, reloadSoundId) {
        this.reload(this.currentPlayer, reloadAniId, reloadSoundId);
    }
    async reload(player, reloadAniId, reloadSoundId) {
        await Utils.asyncDownloadAsset(reloadAniId);
        player.character.loadAnimation(reloadAniId).play();
        SoundService.play3DSound(reloadSoundId, player.character.worldTransform.position);
    }
    initWeapon(player, weaponId) {
        let playerId = player.playerId;
        if (this.playerWeaponMap.has(playerId))
            return;
        let weapon = player.character.addComponent(Weapon$1, true);
        let playerId_WeaponId = playerId + "|" + weaponId;
        weapon.playerId_WeaponId = playerId_WeaponId;
        this.playerWeaponMap.set(playerId, weapon);
        this.getClient(player).net_switchWeaponData(weaponId);
    }
    net_switchWeapon(weaponId) {
        let player = this.currentPlayer;
        this.switchWeapon(player, weaponId);
    }
    async switchWeapon(player, weaponId) {
        let playerId = player.playerId;
        if (!this.playerWeaponMap.has(playerId))
            this.initWeapon(player, weaponId);
        if (!this.playerWeaponMap.has(playerId))
            return;
        let weapon = this.playerWeaponMap.get(playerId);
        if (!weapon)
            return;
        weapon.weaponId = weaponId;
    }
    destoryWeapon(playerId) {
        if (!this.playerWeaponMap.has(playerId))
            return;
        let weapon = this.playerWeaponMap.get(playerId);
        if (!weapon)
            return;
        weapon.weaponId = -1;
    }
    setWeaponState(playerId, isVisibility) {
        if (!this.playerWeaponMap.has(playerId))
            return;
        this.playerWeaponMap.get(playerId).isVisibility = isVisibility;
    }
}
__decorate([
    Decorator.noReply()
], WeaponModuleS.prototype, "net_fireNormalAttack", null);
__decorate([
    Decorator.noReply()
], WeaponModuleS.prototype, "net_reload", null);
__decorate([
    Decorator.noReply()
], WeaponModuleS.prototype, "net_switchWeapon", null);

var foreign73 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: WeaponModuleS
});

class MorphModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.isMorph = false;
        this.isComplete = false;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        InputUtil.onKeyDown(mw.Keys.Z, () => {
            this.morph();
        });
        InputUtil.onKeyDown(mw.Keys.X, () => {
            this.unmorph();
        });
        this.initAction();
    }
    initAction() {
        this.getHUDModuleC.onMorphAction.add(this.addMorphAction.bind(this));
    }
    get getIsMorph() {
        return this.isMorph;
    }
    addMorphAction(isMorph) {
        this.isMorph = isMorph;
        this.isMorph ? this.morph() : this.unmorph();
    }
    async morph() {
        if (this.isComplete) {
            Notice.showDownNotice("点的太快啦");
            return;
        }
        this.isComplete = true;
        await this.server.net_morph();
        TimeUtil.delaySecond(1).then(() => {
            this.isComplete = false;
        });
    }
    unmorph() {
        this.server.net_unmorph();
    }
}
class MorphModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.weaponModuleS = null;
        this.playerGoMap = new Map();
    }
    get getWeaponModuleS() {
        if (!this.weaponModuleS) {
            this.weaponModuleS = ModuleService.getModule(WeaponModuleS);
        }
        return this.weaponModuleS;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    onPlayerLeft(player) {
        let userId = player.userId;
        this.recycleGo(userId);
    }
    async net_morph() {
        await this.morph(this.currentPlayer);
    }
    async morph(player) {
        if (!player)
            return;
        if (player.character.getVisibility())
            player.character.setVisibility(false, true);
        let userId = player.userId;
        this.recycleGo(userId);
        this.playEffectSound(player);
        await this.spawnGo(player);
        // console.error(player.character.getCollision());
        // if (player.character.getCollision() != mw.PropertyStatus.Off) player.character.setCollision(mw.PropertyStatus.Off);
        this.getWeaponModuleS.setWeaponState(player.playerId, false);
    }
    // private i: number = 1;
    async spawnGo(player) {
        let randomId = Utils.randomInt(1, GameConfig.Morph.getAllElement().length);
        // console.error(`randomId:${randomId}`);
        // let morphElement = GameConfig.Morph.getElement(this.i++);
        let morphElement = GameConfig.Morph.getElement(randomId);
        await Utils.asyncDownloadAsset(morphElement.AssetId);
        let tmpGo = await GameObjPool.asyncSpawn(morphElement.AssetId);
        await tmpGo.asyncReady();
        tmpGo.setCollision(mw.PropertyStatus.Off);
        player.character.attachToSlot(tmpGo, mw.HumanoidSlotType.Root);
        tmpGo.localTransform.scale = new mw.Vector(morphElement.OffsetSca);
        tmpGo.localTransform.position = new mw.Vector(0, 0, tmpGo.getBoundingBox().z / 2);
        tmpGo.localTransform.rotation = new mw.Rotation(morphElement.OffsetRot);
        this.playerGoMap.set(player.userId, tmpGo);
    }
    net_unmorph() {
        this.unmorph(this.currentPlayer);
    }
    async unmorph(player) {
        if (!player)
            return;
        let userId = player.userId;
        this.recycleGo(userId);
        this.playEffectSound(player);
        if (!player.character.getVisibility())
            player.character.setVisibility(true, true);
        // if (player.character.getCollision() != mw.PropertyStatus.On) player.character.setCollision(mw.PropertyStatus.On);
        this.getWeaponModuleS.setWeaponState(player.playerId, true);
    }
    recycleGo(userId) {
        if (this.playerGoMap.has(userId)) {
            GameObjPool.despawn(this.playerGoMap.get(userId));
            this.playerGoMap.delete(userId);
        }
    }
    playEffectSound(player) {
        EffectService.playOnGameObject("153045", player.character, { slotType: mw.HumanoidSlotType.Root, scale: mw.Vector.one.multiply(3) });
        SoundService.play3DSound("47427", player.character);
    }
    setPlayerMorphState(userId, isVisibility) {
        if (!this.playerGoMap.has(userId))
            return;
        this.playerGoMap.get(userId).setVisibility(isVisibility);
    }
}
__decorate([
    Decorator.noReply()
], MorphModuleS.prototype, "net_unmorph", null);

var foreign38 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MorphModuleC: MorphModuleC,
    MorphModuleS: MorphModuleS
});

class RoomData {
    constructor(userId, name, killCount, dieCount) {
        this.userId = "";
        this.playerName = "";
        this.killCount = 0;
        this.dieCount = 0;
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }
    setData(userId, name, killCount, dieCount) {
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }
}
class WorldData {
    constructor(userId, name, killCount, dieCount) {
        this.userId = "";
        this.playerName = "";
        this.killCount = 0;
        this.dieCount = 0;
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }
    setData(userId, name, killCount, dieCount) {
        this.userId = userId;
        this.playerName = name;
        this.killCount = killCount;
        this.dieCount = dieCount;
    }
}

var foreign48 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    RoomData: RoomData,
    WorldData: WorldData
});

class RankModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.worldDatas = [];
        this.syncPlayerMap = new Map();
        this.roomDataMap = new Map();
        this.tmpRoomDataMap = new Map();
        this.roomUserIds = [];
        this.roomNames = [];
        this.roomKillCounts = [];
        this.roomDieCounts = [];
        this.worldUserIds = [];
        this.worldNames = [];
        this.worldKillCounts = [];
        this.worldDieCounts = [];
        this.redFirstModel = null;
        this.blueFirstModel = null;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    net_updateSyncPlayer(isSync) {
        let player = this.currentPlayer;
        if (!this.syncPlayerMap.has(player))
            return;
        this.syncPlayerMap.set(player, isSync);
        if (isSync)
            this.synchrodata_aRoomWorld(player);
    }
    onPlayerLeft(player) {
        let userId = player.userId;
        if (this.roomDataMap.has(userId))
            this.roomDataMap.delete(userId);
        if (this.tmpRoomDataMap.has(userId))
            this.tmpRoomDataMap.delete(userId);
        if (this.syncPlayerMap.has(player))
            this.syncPlayerMap.delete(player);
        this.synchrodata_Room();
    }
    net_onEnterScene(playerName, killCount, dieCount) {
        this.syncPlayerMap.set(this.currentPlayer, false);
        let userId = this.currentPlayer.userId;
        this.currentPlayer.character.displayName = playerName;
        this.onEnterScene(userId, playerName, killCount, dieCount);
    }
    async onEnterScene(userId, playerName, killCount, dieCount) {
        let roomData = new RoomData(userId, playerName, killCount, dieCount);
        this.roomDataMap.set(userId, roomData);
        let tmpRoomData = new RoomData(userId, playerName, 0, 0);
        this.tmpRoomDataMap.set(userId, tmpRoomData);
        this.worldDatas = (await this.getCustomdata("WorldData"));
        this.synchrodata_onEnterScene(userId);
    }
    refreshKillDieCount(killUserId, dieUserId) {
        if (!this.roomDataMap.has(killUserId))
            return;
        let killRoomData = this.roomDataMap.get(killUserId);
        killRoomData.killCount += 1;
        if (this.tmpRoomDataMap.has(killUserId)) {
            let tmpKillRoomData = this.tmpRoomDataMap.get(killUserId);
            tmpKillRoomData.killCount += 1;
        }
        if (this.roomDataMap.has(dieUserId)) {
            let dieRoomData = this.roomDataMap.get(dieUserId);
            dieRoomData.dieCount += 1;
        }
        if (this.tmpRoomDataMap.has(dieUserId)) {
            let tmpDieRoomData = this.tmpRoomDataMap.get(dieUserId);
            tmpDieRoomData.dieCount += 1;
        }
        let isRefreshWorldData = this.isRefreshWorldData(new WorldData(killUserId, killRoomData.playerName, killRoomData.killCount, killRoomData.dieCount));
        if (isRefreshWorldData) {
            this.synchrodata_RoomWorld();
        }
        else {
            this.synchrodata_Room();
        }
    }
    isRefreshWorldData(worldData) {
        let isPush = false;
        let ishasDelete = false;
        let ishasData = false;
        if (this.worldDatas == null) {
            this.worldDatas = [];
        }
        if (this.worldDatas.length < GlobalData.maxWorldRankCount) {
            if (this.worldDatas.length == 0) {
                this.worldDatas.push(worldData);
                isPush = true;
            }
            else {
                for (let i = 0; i < this.worldDatas.length; ++i) {
                    if (this.worldDatas[i].userId != worldData.userId)
                        continue;
                    if (worldData.killCount > this.worldDatas[i].killCount) {
                        this.worldDatas.splice(i, 1);
                        break;
                    }
                    else {
                        ishasData = true;
                        break;
                    }
                }
                if (ishasData)
                    return isPush;
                for (let i = 0; i < this.worldDatas.length; i++) {
                    if (worldData.killCount > this.worldDatas[i].killCount) {
                        this.worldDatas.splice(i, 0, worldData);
                        isPush = true;
                        break;
                    }
                }
                if (!isPush) {
                    this.worldDatas.push(worldData);
                    isPush = true;
                }
            }
        }
        else {
            for (let i = 0; i < this.worldDatas.length; ++i) {
                if (this.worldDatas[i].userId != worldData.userId)
                    continue;
                if (worldData.killCount > this.worldDatas[i].killCount) {
                    this.worldDatas.splice(i, 1);
                    ishasDelete = true;
                    break;
                }
                else {
                    ishasData = true;
                    break;
                }
            }
            if (ishasData)
                return isPush;
            for (let i = 0; i < this.worldDatas.length; i++) {
                if (worldData.killCount > this.worldDatas[i].killCount) {
                    this.worldDatas.splice(i, 0, worldData);
                    if (!ishasDelete) {
                        this.worldDatas.pop();
                    }
                    isPush = true;
                    break;
                }
            }
        }
        if (isPush) {
            this.setCustomData("WorldData", this.worldDatas);
        }
        return isPush;
    }
    updateRoomData() {
        if (this.tmpRoomDataMap.size == 0 || !this.tmpRoomDataMap)
            return;
        this.roomUserIds.length = 0;
        this.roomNames.length = 0;
        this.roomKillCounts.length = 0;
        this.roomDieCounts.length = 0;
        this.tmpRoomDataMap.forEach((value, key) => {
            this.roomUserIds.push(value.userId);
            this.roomNames.push(value.playerName);
            this.roomKillCounts.push(value.killCount);
            this.roomDieCounts.push(value.dieCount);
        });
    }
    updateWorldData() {
        if (!this.worldDatas || this.worldDatas.length == 0)
            return;
        this.worldUserIds.length = 0;
        this.worldNames.length = 0;
        this.worldKillCounts.length = 0;
        this.worldDieCounts.length = 0;
        for (let i = 0; i < this.worldDatas.length; i++) {
            this.worldUserIds.push(this.worldDatas[i].userId);
            this.worldNames.push(this.worldDatas[i].playerName);
            this.worldKillCounts.push(this.worldDatas[i].killCount);
            this.worldDieCounts.push(this.worldDatas[i].dieCount);
        }
    }
    synchrodata_onEnterScene(sendUserId) {
        this.updateRoomData();
        this.updateWorldData();
        this.syncPlayerMap.forEach((value, key) => {
            // if (!value) return;
            if (sendUserId == key.userId) {
                this.getClient(key).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts, this.worldUserIds, this.worldNames, this.worldKillCounts, this.worldDieCounts);
            }
            else {
                this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts);
            }
        });
    }
    synchrodata_Room() {
        this.updateRoomData();
        this.syncPlayerMap.forEach((value, key) => {
            // if (!value) return;
            this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts);
        });
    }
    synchrodata_RoomWorld() {
        this.updateRoomData();
        this.updateWorldData();
        this.syncPlayerMap.forEach((value, key) => {
            // if (!value) return;
            this.getClient(key).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts, this.worldUserIds, this.worldNames, this.worldKillCounts, this.worldDieCounts);
        });
    }
    synchrodata_aRoomWorld(player) {
        this.getClient(player).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts, this.worldUserIds, this.worldNames, this.worldKillCounts, this.worldDieCounts);
    }
    net_updateRankByChangeTeam() {
        this.syncPlayerMap.forEach((value, key) => {
            // if (!value) return;
            this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomKillCounts, this.roomDieCounts);
        });
    }
    async getCustomdata(key) {
        return (await DataStorage.asyncGetData(key)).data;
    }
    async setCustomData(saveKey, dataInfo) {
        let code = null;
        code = await DataStorage.asyncSetData(saveKey, dataInfo);
        return code == mw.DataStorageResultCode.Success;
    }
    getNamesByUserId(userId1, userId2) {
        if (this.roomDataMap.has(userId1) && this.roomDataMap.has(userId2)) {
            return [this.roomDataMap.get(userId1).playerName, this.roomDataMap.get(userId2).playerName];
        }
        return null;
    }
    getNameByUserId(userId) {
        if (this.roomDataMap.has(userId)) {
            return this.roomDataMap.get(userId).playerName;
        }
        return null;
    }
    net_setFirstModel(isRed) {
        let character = this.currentPlayer.character;
        this.setFirstModel(character, isRed);
    }
    async setFirstModel(character, isRed) {
        if (isRed) {
            if (!this.redFirstModel)
                this.redFirstModel = await GameObjPool.asyncSpawn("C825D655443D938EB73591BEEB5CCC81", mwext.GameObjPoolSourceType.Prefab);
            character.attachToSlot(this.redFirstModel, mw.HumanoidSlotType.BackOrnamental);
            this.redFirstModel.localTransform.position = new mw.Vector(15, 0, 0);
            this.redFirstModel.localTransform.rotation = new mw.Rotation(0, 0, -90);
        }
        else {
            if (!this.blueFirstModel)
                this.blueFirstModel = await GameObjPool.asyncSpawn("0B59ECA6477D8CA6237016BF613FB019", mwext.GameObjPoolSourceType.Prefab);
            character.attachToSlot(this.blueFirstModel, mw.HumanoidSlotType.BackOrnamental);
            this.blueFirstModel.localTransform.position = new mw.Vector(15, 0, 0);
            this.blueFirstModel.localTransform.rotation = new mw.Rotation(0, 0, -90);
        }
    }
}
__decorate([
    Decorator.noReply()
], RankModuleS.prototype, "net_updateSyncPlayer", null);
__decorate([
    Decorator.noReply()
], RankModuleS.prototype, "net_onEnterScene", null);
__decorate([
    Decorator.noReply()
], RankModuleS.prototype, "net_updateRankByChangeTeam", null);
__decorate([
    Decorator.noReply()
], RankModuleS.prototype, "net_setFirstModel", null);

var foreign50 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RankModuleS
});

var TaskItemType;
(function (TaskItemType) {
    TaskItemType[TaskItemType["None"] = 0] = "None";
    /**每日登录游戏 */
    TaskItemType[TaskItemType["DailyLogin"] = 1] = "DailyLogin";
    /**每日在线时长5分钟 */
    TaskItemType[TaskItemType["DailyOnlineTime_5"] = 11] = "DailyOnlineTime_5";
    TaskItemType[TaskItemType["DailyOnlineTime_10"] = 12] = "DailyOnlineTime_10";
    TaskItemType[TaskItemType["DailyOnlineTime_15"] = 13] = "DailyOnlineTime_15";
    TaskItemType[TaskItemType["DailyOnlineTime_20"] = 14] = "DailyOnlineTime_20";
    TaskItemType[TaskItemType["DailyOnlineTime_25"] = 15] = "DailyOnlineTime_25";
    TaskItemType[TaskItemType["DailyOnlineTime_30"] = 16] = "DailyOnlineTime_30";
    TaskItemType[TaskItemType["DailyOnlineTime_40"] = 17] = "DailyOnlineTime_40";
    TaskItemType[TaskItemType["DailyOnlineTime_50"] = 18] = "DailyOnlineTime_50";
    TaskItemType[TaskItemType["DailyOnlineTime_60"] = 19] = "DailyOnlineTime_60";
    /**每日击杀1个玩家 */
    TaskItemType[TaskItemType["DailyKilPlayer_1"] = 31] = "DailyKilPlayer_1";
    TaskItemType[TaskItemType["DailyKilPlayer_5"] = 32] = "DailyKilPlayer_5";
    TaskItemType[TaskItemType["DailyKilPlayer_10"] = 33] = "DailyKilPlayer_10";
    TaskItemType[TaskItemType["DailyKilPlayer_20"] = 34] = "DailyKilPlayer_20";
    TaskItemType[TaskItemType["DailyKilPlayer_30"] = 35] = "DailyKilPlayer_30";
    TaskItemType[TaskItemType["DailyKilPlayer_50"] = 36] = "DailyKilPlayer_50";
    TaskItemType[TaskItemType["DailyKilPlayer_100"] = 37] = "DailyKilPlayer_100";
    TaskItemType[TaskItemType["DailyKilPlayer_200"] = 38] = "DailyKilPlayer_200";
    TaskItemType[TaskItemType["DailyKilPlayer_300"] = 39] = "DailyKilPlayer_300";
    /**每周登录1天 */
    TaskItemType[TaskItemType["WeeklyLogin_1"] = 101] = "WeeklyLogin_1";
    TaskItemType[TaskItemType["WeeklyLogin_2"] = 102] = "WeeklyLogin_2";
    TaskItemType[TaskItemType["WeeklyLogin_3"] = 103] = "WeeklyLogin_3";
    TaskItemType[TaskItemType["WeeklyLogin_4"] = 104] = "WeeklyLogin_4";
    TaskItemType[TaskItemType["WeeklyLogin_5"] = 105] = "WeeklyLogin_5";
    TaskItemType[TaskItemType["WeeklyLogin_6"] = 106] = "WeeklyLogin_6";
    TaskItemType[TaskItemType["WeeklyLogin_7"] = 107] = "WeeklyLogin_7";
})(TaskItemType || (TaskItemType = {}));
var TaskType;
(function (TaskType) {
    /**每日任务 */
    TaskType[TaskType["DailyTask"] = 1] = "DailyTask";
    /**每周任务 */
    TaskType[TaskType["WeeklyTask"] = 2] = "WeeklyTask";
})(TaskType || (TaskType = {}));
class Task {
    constructor(taskId, progress, isGetReward) {
        this.taskId = taskId;
        this.progress = progress;
        this.isGetReward = isGetReward;
    }
}
class TaskData extends Subdata {
    constructor() {
        super(...arguments);
        this.lastDayNow = 0;
        this.lastWeekNow = 0;
        this.dailyTasks = {};
        this.weeklyTasks = {};
    }
    initDefaultData() {
        this.dailyTasks = {};
        this.weeklyTasks = {};
        this.lastDayNow = Date.now();
        this.lastWeekNow = Number(Utils.getWhatDay());
    }
    saveDailyTask(taskId, vipTaskType, progress) {
        let dailyTask = null;
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            dailyTask = MapEx.get(this.dailyTasks, vipTaskType);
            dailyTask.progress = progress;
        }
        else {
            dailyTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.dailyTasks, vipTaskType, dailyTask);
    }
    saveWeeklyTask(taskId, vipTaskType, progress) {
        let weeklyTask = null;
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            weeklyTask.progress = progress;
        }
        else {
            weeklyTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
    }
    updateTaskCompleteData(vipTaskType) {
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            let dailyTask = MapEx.get(this.dailyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(dailyTask.taskId).NextId;
            if (nextId != 0) {
                dailyTask.taskId = nextId;
                dailyTask.isGetReward = false;
            }
            else {
                dailyTask.isGetReward = true;
            }
            MapEx.set(this.dailyTasks, vipTaskType, dailyTask);
        }
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            let weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(weeklyTask.taskId).NextId;
            if (nextId != 0) {
                weeklyTask.taskId = nextId;
                weeklyTask.isGetReward = false;
            }
            else {
                weeklyTask.isGetReward = true;
            }
            MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
        }
        this.save(true);
    }
    /**
     * 保存退出游戏的时间
     * @param value
     */
    saveLastDayNow(lastDayNow, lastWeekNow) {
        this.lastDayNow = lastDayNow;
        this.lastWeekNow = lastWeekNow;
        this.save(true);
    }
    /**重置每日任务 */
    resetDailyTask() {
        this.dailyTasks = {};
        this.save(true);
        // console.error("重置每日任务");
    }
    /**重置每周任务 */
    resetWeeklyTask() {
        this.weeklyTasks = {};
        this.save(true);
        // console.error("重置每周任务");
    }
}
__decorate([
    Decorator.persistence()
], TaskData.prototype, "lastDayNow", void 0);
__decorate([
    Decorator.persistence()
], TaskData.prototype, "lastWeekNow", void 0);
__decorate([
    Decorator.persistence()
], TaskData.prototype, "dailyTasks", void 0);
__decorate([
    Decorator.persistence()
], TaskData.prototype, "weeklyTasks", void 0);

var foreign59 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Task: Task,
    TaskData: TaskData,
    get TaskItemType () { return TaskItemType; },
    get TaskType () { return TaskType; }
});

class TaskModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.playerTaskMap = new Map();
        this.taskCheckTime = 60;
        this.taskCheckTimer = 0;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    onPlayerEnterGame(player) {
        this.playerTaskMap.set(player.playerId, player);
        this.checkResetTask_onEnterGame(player, 0);
        this.getClient(player).net_getServerTaskData();
    }
    onPlayerLeft(player) {
        let playerID = player.playerId;
        if (!this.playerTaskMap.has(playerID))
            return;
        this.playerTaskMap.delete(playerID);
        DataCenterS.getData(player, TaskData).saveLastDayNow(Date.now(), Number(Utils.getWhatDay()));
    }
    onUpdate(dt) {
        // this.checkResetTask_onLine(dt);
    }
    /**
     * 检查重置任务（每日&每周）(玩家一直在线状态下的检查)
     * @param dt
     */
    checkResetTask_onLine(dt) {
        this.taskCheckTimer += dt;
        if (this.taskCheckTimer < this.taskCheckTime) {
            return;
        }
        this.taskCheckTimer = 0;
        let currentTime = Utils.getCurrentTime();
        if (Utils.getWhatDay() == "1" && currentTime == GlobalData.weeklyRefreshTime) {
            this.resetAllPlayersWeeklyTask();
        }
        if (currentTime == GlobalData.dailyRefreshTime) {
            this.resetAllPlayersDailyTask();
        }
    }
    /**重置当前房间内所有玩家的每日任务 */
    resetAllPlayersDailyTask() {
        this.playerTaskMap.forEach((player) => {
            DataCenterS.getData(player, TaskData).resetDailyTask();
        });
        this.getAllClient().net_resetDailyTask();
    }
    /**重置当前房间内所有玩家的每周任务 */
    resetAllPlayersWeeklyTask() {
        this.playerTaskMap.forEach((player) => {
            DataCenterS.getData(player, TaskData).resetWeeklyTask();
        });
        this.getAllClient().net_resetWeeklyTask();
    }
    /**
     * 保存成就数据
     * @param achievementType 成就类型
     * @param progress 进度
     * @param isOnComplete 是否完成
     */
    net_saveTaskProgress(dailyTaskIds, dailyTaskTypes, dailyProgresss, weeklyTaskIds, weeklyTaskTypes, weeklyProgresss) {
        if (dailyTaskIds.length != 0) {
            for (let i = 0; i < dailyTaskIds.length; ++i) {
                this.currentData.saveDailyTask(dailyTaskIds[i], dailyTaskTypes[i], dailyProgresss[i]);
            }
        }
        if (weeklyTaskIds.length != 0) {
            for (let i = 0; i < weeklyTaskIds.length; ++i) {
                this.currentData.saveWeeklyTask(weeklyTaskIds[i], weeklyTaskTypes[i], weeklyProgresss[i]);
            }
        }
        this.currentData.save(true);
    }
    net_updateTaskConpleteData(vipTaskType) {
        this.currentData.updateTaskCompleteData(vipTaskType);
    }
    checkResetTask_onEnterGame_GM(player, day) {
        this.checkResetTask_onEnterGame(player, day * 86400 * 1000);
        this.getClient(player).net_getServerTaskData();
    }
    /**
     * 检查重置任务（每日&每周）(玩家进入游戏时的检查)
     */
    checkResetTask_onEnterGame(player, day) {
        let dailyRefreshTime = 0;
        let dailyRefreshTimeNums = GlobalData.dailyRefreshTime.split(":");
        dailyRefreshTime = Number(dailyRefreshTimeNums[0]) + Number((Number(dailyRefreshTimeNums[1]) / 60).toFixed(2));
        let weeklyRefreshTime = 0;
        let weeklyRefreshTimeNums = GlobalData.weeklyRefreshTime.split(":");
        weeklyRefreshTime = Number(weeklyRefreshTimeNums[0]) + Number((Number(weeklyRefreshTimeNums[1]) / 60).toFixed(2));
        let currentDayNow = Date.now() + day;
        let lastDayNow = DataCenterS.getData(player, TaskData).lastDayNow;
        //计算两个时间戳相差的秒数
        let seconds = Math.floor((currentDayNow - lastDayNow) / 1000);
        let lastDate = new Date(lastDayNow);
        let currentDate = new Date(currentDayNow);
        let lastDay = lastDate.getDay();
        let currentDay = currentDate.getDay();
        let lastHours = lastDate.getHours();
        let currentHours = currentDate.getHours();
        let lastMinutes = lastDate.getMinutes();
        let currentMinutes = currentDate.getMinutes();
        let lastSeconds = lastDate.getSeconds();
        let currentSeconds = currentDate.getSeconds();
        let lastSecondss = lastHours * 3600 + lastMinutes * 60 + lastSeconds;
        let currentSecondss = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
        //检查每日任务
        if (seconds >= 86400) {
            //超过一天
            DataCenterS.getData(player, TaskData).resetDailyTask();
        }
        else {
            //不超过一天
            if (lastDay == currentDay) {
                //同一天
                if (lastSecondss < dailyRefreshTime * 3600 && currentSecondss >= dailyRefreshTime * 3600) {
                    DataCenterS.getData(player, TaskData).resetDailyTask();
                }
            }
            else {
                //不同一天
                if ((lastSecondss >= 0 && lastSecondss < dailyRefreshTime * 3600 && currentSecondss >= 0 && currentSecondss < dailyRefreshTime * 3600) ||
                    (lastSecondss >= dailyRefreshTime * 3600 && lastSecondss < 24 * 3600 && currentSecondss >= dailyRefreshTime * 3600 && currentSecondss < 24 * 3600)) {
                    DataCenterS.getData(player, TaskData).resetDailyTask();
                }
            }
        }
        //检查每周任务
        if (seconds >= 86400 * 7) {
            //超过一周
            DataCenterS.getData(player, TaskData).resetWeeklyTask();
        }
        else {
            //不超过一周
            //判断两个时间戳是否在同一周
            let latWhatDay = Utils.getLastDay(lastDay);
            let currentWhatDay = Utils.getWhatDay();
            if (Utils.iSameWeek(lastDayNow, currentDayNow)) {
                //同一周
                if (latWhatDay == "1" && lastSecondss < weeklyRefreshTime * 3600) {
                    if ((currentWhatDay == "1" && currentSecondss >= weeklyRefreshTime * 3600) || currentWhatDay != "1") {
                        DataCenterS.getData(player, TaskData).resetWeeklyTask();
                    }
                }
            }
            else {
                //不同一周
                if (latWhatDay == "1" && lastSecondss >= 0 && lastSecondss < weeklyRefreshTime * 3600 && currentWhatDay == "1" && currentSecondss >= 0 && currentSecondss < weeklyRefreshTime * 3600) {
                    DataCenterS.getData(player, TaskData).resetWeeklyTask();
                }
                if (((latWhatDay == "1" && lastSecondss >= weeklyRefreshTime * 3600 && lastSecondss < 24 * 3600) || (latWhatDay != "1"))
                    && ((currentWhatDay == "1" && currentSecondss >= weeklyRefreshTime * 3600 && currentSecondss < 24 * 3600) || (currentWhatDay != "1"))) {
                    DataCenterS.getData(player, TaskData).resetWeeklyTask();
                }
            }
        }
    }
    /**
     * 重置每日任务
     */
    net_resetDailyTask() {
        this.currentData.resetDailyTask();
    }
    /**
     * 重置每周任务
     */
    net_resetWeeklyTask() {
        this.currentData.resetWeeklyTask();
    }
    killPlayer(player) {
        this.getClient(player).net_dailyKillPlayer();
    }
}
__decorate([
    Decorator.noReply()
], TaskModuleS.prototype, "net_saveTaskProgress", null);
__decorate([
    Decorator.noReply()
], TaskModuleS.prototype, "net_updateTaskConpleteData", null);

var foreign61 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TaskModuleS
});

class TeamData {
    constructor(teamId, playerName) {
        /**红：0，蓝：1 */
        this.teamId = TeamType.Red;
        this.playerName = "";
        this.teamId = teamId;
        this.playerName = playerName;
    }
}
var TeamType;
(function (TeamType) {
    /**红队 */
    TeamType[TeamType["Red"] = 0] = "Red";
    /**蓝队 */
    TeamType[TeamType["Blue"] = 1] = "Blue";
})(TeamType || (TeamType = {}));
var ResultType;
(function (ResultType) {
    /**成功 */
    ResultType[ResultType["Succeed"] = 0] = "Succeed";
    /**队伍已满 */
    ResultType[ResultType["Fail1"] = 1] = "Fail1";
    /**人数不平等 */
    ResultType[ResultType["Fail2"] = 2] = "Fail2";
    /**已在此队 */
    ResultType[ResultType["Fail3"] = 3] = "Fail3";
})(ResultType || (ResultType = {}));

var foreign63 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get ResultType () { return ResultType; },
    TeamData: TeamData,
    get TeamType () { return TeamType; }
});

class TeamModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.teamMap = new Map();
    }
    onStart() {
    }
    net_changeTeam(teamType) {
        let userId = this.currentPlayer.userId;
        if (!this.teamMap.has(userId))
            return ResultType.Fail3;
        let teamData = this.teamMap.get(userId);
        if (teamData.teamId == teamType)
            return ResultType.Fail3;
        let redBlueCount = this.getRedBlueCount();
        let redCount = redBlueCount[0], blueCount = redBlueCount[1];
        if (redCount == blueCount)
            return ResultType.Fail1;
        if (teamType == TeamType.Blue) {
            let tmp = redCount;
            redCount = blueCount;
            blueCount = tmp;
        }
        if (redCount >= blueCount)
            return ResultType.Fail2;
        teamData.teamId = teamType;
        this.teamMap.delete(userId);
        this.teamMap.set(userId, teamData);
        this.syncTeamData();
        return ResultType.Succeed;
    }
    getRedBlueCount() {
        if (this.teamMap.size == 0)
            return [];
        let redCount = 0, blueCount = 0;
        this.teamMap.forEach((teamData) => {
            if (teamData.teamId == TeamType.Red) {
                redCount++;
            }
            else {
                blueCount++;
            }
        });
        return [redCount, blueCount];
    }
    net_onEnterScene(playerName) {
        let userId = this.currentPlayer.userId;
        if (this.teamMap.has(userId))
            return;
        let teamId = this.getTeamId();
        let teamData = new TeamData(teamId, playerName);
        this.teamMap.set(userId, teamData);
        this.syncTeamData();
    }
    onPlayerLeft(player) {
        let userId = player.userId;
        if (!this.teamMap.has(userId))
            return;
        this.teamMap.delete(userId);
        this.syncTeamData();
    }
    getTeamId() {
        if (this.teamMap.size == 0)
            return TeamType.Red;
        let redCount = 0, blueCount = 0;
        this.teamMap.forEach((teamData) => {
            if (teamData.teamId == TeamType.Red) {
                redCount++;
            }
            else {
                blueCount++;
            }
        });
        return redCount > blueCount ? TeamType.Blue : TeamType.Red;
    }
    syncTeamData() {
        let userIds = [];
        let playerNames = [];
        let teamIds = [];
        this.teamMap.forEach((teamData, userId) => {
            userIds.push(userId);
            playerNames.push(teamData.playerName);
            teamIds.push(teamData.teamId);
        });
        if (userIds.length == 0)
            return;
        this.getAllClient().net_syncTeamData(userIds, playerNames, teamIds);
    }
    isTeamMate(userId1, userId2) {
        if (!this.teamMap.has(userId1) || !this.teamMap.has(userId2))
            return false;
        return this.teamMap.get(userId1).teamId == this.teamMap.get(userId2).teamId;
    }
    isRedTeam(userId) {
        if (!this.teamMap.has(userId))
            return true;
        return this.teamMap.get(userId).teamId == TeamType.Red;
    }
}
__decorate([
    Decorator.noReply()
], TeamModuleS.prototype, "net_onEnterScene", null);

var foreign65 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TeamModuleS
});

class PlayerStatus {
    constructor() {
        this.isDead = false;
        this.hp = 100;
        this.maxHp = 100;
    }
}
class PlayerData extends Subdata {
    constructor() {
        super(...arguments);
        this.killCount = 0;
        this.dieCount = 0;
    }
    initDefaultData() {
        this.killCount = 0;
        this.dieCount = 0;
    }
    setKillCount(value) {
        this.killCount += value;
        this.save(true);
    }
    setDieCount(value) {
        this.dieCount += value;
        this.save(true);
    }
}
__decorate([
    Decorator.persistence()
], PlayerData.prototype, "killCount", void 0);
__decorate([
    Decorator.persistence()
], PlayerData.prototype, "dieCount", void 0);

var foreign41 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PlayerStatus: PlayerStatus,
    default: PlayerData
});

class PlayerModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.rankModuleS = null;
        this.teamModuleS = null;
        this.coinModuleS = null;
        this.taslModuleS = null;
        this.morphModuleS = null;
        this.playerMap = new Map();
        this.playerStatusMap = new Map();
    }
    get getRankModuleS() {
        if (this.rankModuleS == null) {
            this.rankModuleS = ModuleService.getModule(RankModuleS);
        }
        return this.rankModuleS;
    }
    get getTeamModuleS() {
        if (this.teamModuleS == null) {
            this.teamModuleS = ModuleService.getModule(TeamModuleS);
        }
        return this.teamModuleS;
    }
    get getCoinModuleS() {
        if (this.coinModuleS == null) {
            this.coinModuleS = ModuleService.getModule(CoinModuleS);
        }
        return this.coinModuleS;
    }
    get getTaskModuleS() {
        if (this.taslModuleS == null) {
            this.taslModuleS = ModuleService.getModule(TaskModuleS);
        }
        return this.taslModuleS;
    }
    get getMorphModuleS() {
        if (!this.morphModuleS) {
            this.morphModuleS = ModuleService.getModule(MorphModuleS);
        }
        return this.morphModuleS;
    }
    onStart() {
        this.initModule();
        this.initEventAction();
    }
    initModule() {
        this.rankModuleS = ModuleService.getModule(RankModuleS);
        this.teamModuleS = ModuleService.getModule(TeamModuleS);
        this.coinModuleS = ModuleService.getModule(CoinModuleS);
        this.taslModuleS = ModuleService.getModule(TaskModuleS);
    }
    initEventAction() {
        PrefabEvent.PrefabEvtFight.onHit(this.playerAtkPlayer.bind(this));
        PrefabEvent.PrefabEvtFight.onHurt(this.npcAtkPlayer.bind(this));
    }
    onPlayerEnterGame(player) {
        this.initPlayerState(player);
    }
    onPlayerLeft(player) {
        this.deletePlayerState(player);
    }
    initPlayerState(player) {
        let playerStatus = new PlayerStatus();
        playerStatus.isDead = false;
        playerStatus.hp = playerStatus.maxHp;
        this.playerStatusMap.set(player.userId, playerStatus);
        this.playerMap.set(player.character.gameObjectId, player);
        TimeUtil.delaySecond(5).then(() => {
            this.playerBirth(player, 100);
        });
    }
    deletePlayerState(player) {
        let userId = player.userId;
        if (this.playerStatusMap.has(userId)) {
            this.playerStatusMap.delete(userId);
        }
        let gameObjectId = player.character.gameObjectId;
        if (this.playerMap.has(gameObjectId)) {
            this.playerMap.delete(gameObjectId);
        }
    }
    npcAtkPlayer(senderGuid, targetGuid, damage) {
        if (!this.playerMap.has(targetGuid))
            return;
        let targetPlayer = this.playerMap.get(targetGuid);
        this.updatePlayerData(null, targetPlayer, damage, mw.Vector.zero);
    }
    playerAtkPlayer(senderGuid, targetGuid, damage, hitPoint) {
        if (!this.playerMap.has(senderGuid) || !this.playerMap.has(targetGuid))
            return;
        let sendPlayer = this.playerMap.get(senderGuid);
        let targetPlayer = this.playerMap.get(targetGuid);
        if (this.getTeamModuleS.isTeamMate(sendPlayer.userId, targetPlayer.userId)) {
            this.getClient(sendPlayer).net_hitTeammate();
            return;
        }
        if (!hitPoint)
            hitPoint = targetPlayer.character.worldTransform.position;
        this.updatePlayerData(sendPlayer, targetPlayer, damage, hitPoint);
    }
    updatePlayerData(sendPlayer, targetPlayer, damage, hitPoint) {
        let userId = targetPlayer.userId;
        if (!this.playerStatusMap.has(userId))
            return;
        let targetPlayerData = this.playerStatusMap.get(userId);
        if (targetPlayerData.isDead)
            return;
        let curHp = targetPlayerData.hp;
        curHp -= damage;
        if (curHp <= 0) {
            targetPlayerData.hp = 0;
            targetPlayerData.isDead = true;
            if (sendPlayer)
                this.updatePlayerKillCount(sendPlayer, targetPlayer);
            targetPlayer.character.ragdollEnabled = true;
            this.playerDie(targetPlayer);
            TimeUtil.delaySecond(3).then(() => {
                targetPlayer.character.ragdollEnabled = false;
                targetPlayerData.hp = targetPlayerData.maxHp;
                this.playerBirth(targetPlayer, targetPlayerData.maxHp);
            });
        }
        else {
            targetPlayerData.hp = curHp;
        }
        this.getClient(targetPlayer).net_updateHp(curHp);
        if (sendPlayer)
            this.getClient(sendPlayer).net_flyText(damage, hitPoint);
    }
    updatePlayerKillCount(killPlayer, diePlayer) {
        if (killPlayer)
            DataCenterS.getData(killPlayer, PlayerData).setKillCount(1);
        if (diePlayer)
            DataCenterS.getData(diePlayer, PlayerData).setDieCount(1);
        let userId1 = killPlayer.userId;
        let userId2 = diePlayer ? diePlayer.userId : "-1";
        this.getRankModuleS.refreshKillDieCount(userId1, userId2);
        this.getCoinModuleS.killPlayerAddCoin(killPlayer);
        this.getTaskModuleS.killPlayer(killPlayer);
        let names = [];
        if (userId2 != "-1") {
            names = this.getRankModuleS.getNamesByUserId(userId1, userId2);
        }
        else {
            names.push(this.getRankModuleS.getNameByUserId(userId1));
            names.push(GlobalData.languageId == 0 ? `Npc` : Utils.randomNpcName());
        }
        if (names && names.length == 2)
            this.getAllClient().net_killTip(userId1, names[0], userId2, names[1]);
        try { //校验
            if (this.playerStatusMap.get(userId1).isDead == true)
                this.playerStatusMap.get(userId1).isDead = false;
        }
        catch (error) { }
    }
    playerKillNpc(senderGuid) {
        if (!this.playerMap.has(senderGuid))
            return;
        this.updatePlayerKillCount(this.playerMap.get(senderGuid), null);
    }
    playerAtkNpcFlyText(senderGuid, hitPoint, damage) {
        if (!this.playerMap.has(senderGuid))
            return;
        this.getClient(this.playerMap.get(senderGuid)).net_flyText(damage, hitPoint);
    }
    playerDie(player) {
        EffectService.playAtPosition("222147", player.character.worldTransform.position, {
            loopCount: 1
        });
        this.getMorphModuleS.setPlayerMorphState(player.userId, false);
    }
    playerBirth(player, maxHp) {
        this.getClient(player).net_updateHp(maxHp);
        let userId = player.userId;
        let revivalPoint = Utils.randomRevivalPoint(this.getTeamModuleS.isRedTeam(userId));
        player.character.worldTransform.position = revivalPoint;
        Utils.playBirthEffect(player);
        TimeUtil.delaySecond(2).then(() => {
            if (this.playerStatusMap.get(userId).isDead == true)
                this.playerStatusMap.get(userId).isDead = false;
        });
        this.getMorphModuleS.setPlayerMorphState(player.userId, true);
    }
    net_addMaxHp() {
        let userId = this.currentPlayer.userId;
        if (!this.playerStatusMap.has(userId))
            return 100;
        Utils.playBirthEffect(this.currentPlayer);
        let playerStatus = this.playerStatusMap.get(userId);
        playerStatus.maxHp *= 2;
        playerStatus.hp = playerStatus.maxHp;
        return playerStatus.maxHp;
    }
}

var foreign43 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PlayerModuleS: PlayerModuleS
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RankModule/RankPanel.ui
 * TIME: 2024.10.27-00.04.44
 */
let RankPanel_Generate = class RankPanel_Generate extends UIScript {
    get mRoomCanvas() {
        if (!this.mRoomCanvas_Internal && this.uiWidgetBase) {
            this.mRoomCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas');
        }
        return this.mRoomCanvas_Internal;
    }
    get mRedRoomTextBlock() {
        if (!this.mRedRoomTextBlock_Internal && this.uiWidgetBase) {
            this.mRedRoomTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/MainRoomCanvas/TitleRoomCanvas/mRedRoomTextBlock');
        }
        return this.mRedRoomTextBlock_Internal;
    }
    get mBlueRoomTextBlock() {
        if (!this.mBlueRoomTextBlock_Internal && this.uiWidgetBase) {
            this.mBlueRoomTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/MainRoomCanvas/TitleRoomCanvas/mBlueRoomTextBlock');
        }
        return this.mBlueRoomTextBlock_Internal;
    }
    get mRedRankTextBlock() {
        if (!this.mRedRankTextBlock_Internal && this.uiWidgetBase) {
            this.mRedRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/RedTitleRoomCanvas/mRedRankTextBlock');
        }
        return this.mRedRankTextBlock_Internal;
    }
    get mRedNameTextBlock() {
        if (!this.mRedNameTextBlock_Internal && this.uiWidgetBase) {
            this.mRedNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/RedTitleRoomCanvas/mRedNameTextBlock');
        }
        return this.mRedNameTextBlock_Internal;
    }
    get mRedKillCountTextBlock() {
        if (!this.mRedKillCountTextBlock_Internal && this.uiWidgetBase) {
            this.mRedKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/RedTitleRoomCanvas/mRedKillCountTextBlock');
        }
        return this.mRedKillCountTextBlock_Internal;
    }
    get mRedDieCountTextBlock() {
        if (!this.mRedDieCountTextBlock_Internal && this.uiWidgetBase) {
            this.mRedDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/RedTitleRoomCanvas/mRedDieCountTextBlock');
        }
        return this.mRedDieCountTextBlock_Internal;
    }
    get mBlueRankTextBlock() {
        if (!this.mBlueRankTextBlock_Internal && this.uiWidgetBase) {
            this.mBlueRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/mBlueRankTextBlock');
        }
        return this.mBlueRankTextBlock_Internal;
    }
    get mBlueNameTextBlock() {
        if (!this.mBlueNameTextBlock_Internal && this.uiWidgetBase) {
            this.mBlueNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/mBlueNameTextBlock');
        }
        return this.mBlueNameTextBlock_Internal;
    }
    get mBlueKillCountTextBlock() {
        if (!this.mBlueKillCountTextBlock_Internal && this.uiWidgetBase) {
            this.mBlueKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/mBlueKillCountTextBlock');
        }
        return this.mBlueKillCountTextBlock_Internal;
    }
    get mBlueDieCountTextBlock() {
        if (!this.mBlueDieCountTextBlock_Internal && this.uiWidgetBase) {
            this.mBlueDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/BlueTitleRoomCanvas/mBlueDieCountTextBlock');
        }
        return this.mBlueDieCountTextBlock_Internal;
    }
    get mRedRoomContentCanvas() {
        if (!this.mRedRoomContentCanvas_Internal && this.uiWidgetBase) {
            this.mRedRoomContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/mRedRoomContentCanvas');
        }
        return this.mRedRoomContentCanvas_Internal;
    }
    get mBlueRoomContnetCanvas() {
        if (!this.mBlueRoomContnetCanvas_Internal && this.uiWidgetBase) {
            this.mBlueRoomContnetCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/mBlueRoomContnetCanvas');
        }
        return this.mBlueRoomContnetCanvas_Internal;
    }
    get mWorldCanvas() {
        if (!this.mWorldCanvas_Internal && this.uiWidgetBase) {
            this.mWorldCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas');
        }
        return this.mWorldCanvas_Internal;
    }
    get mTitleTextBlock() {
        if (!this.mTitleTextBlock_Internal && this.uiWidgetBase) {
            this.mTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/MainWorldCanvas/TitleWorldCanvas/mTitleTextBlock');
        }
        return this.mTitleTextBlock_Internal;
    }
    get mWorldRankTextBlock() {
        if (!this.mWorldRankTextBlock_Internal && this.uiWidgetBase) {
            this.mWorldRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldRankTextBlock');
        }
        return this.mWorldRankTextBlock_Internal;
    }
    get mWorldNameTextBlock() {
        if (!this.mWorldNameTextBlock_Internal && this.uiWidgetBase) {
            this.mWorldNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldNameTextBlock');
        }
        return this.mWorldNameTextBlock_Internal;
    }
    get mWorldKillCountTextBlock() {
        if (!this.mWorldKillCountTextBlock_Internal && this.uiWidgetBase) {
            this.mWorldKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldKillCountTextBlock');
        }
        return this.mWorldKillCountTextBlock_Internal;
    }
    get mWorldDieCountTextBlock() {
        if (!this.mWorldDieCountTextBlock_Internal && this.uiWidgetBase) {
            this.mWorldDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldDieCountTextBlock');
        }
        return this.mWorldDieCountTextBlock_Internal;
    }
    get mWorldContentCanvas() {
        if (!this.mWorldContentCanvas_Internal && this.uiWidgetBase) {
            this.mWorldContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/ScrollBox/mWorldContentCanvas');
        }
        return this.mWorldContentCanvas_Internal;
    }
    get mRoomButton() {
        if (!this.mRoomButton_Internal && this.uiWidgetBase) {
            this.mRoomButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/RoomCanvas/mRoomButton');
        }
        return this.mRoomButton_Internal;
    }
    get mRoomTextBlock() {
        if (!this.mRoomTextBlock_Internal && this.uiWidgetBase) {
            this.mRoomTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/RoomCanvas/mRoomTextBlock');
        }
        return this.mRoomTextBlock_Internal;
    }
    get mRoomSignImage() {
        if (!this.mRoomSignImage_Internal && this.uiWidgetBase) {
            this.mRoomSignImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/RoomCanvas/mRoomSignImage');
        }
        return this.mRoomSignImage_Internal;
    }
    get mWorldButton() {
        if (!this.mWorldButton_Internal && this.uiWidgetBase) {
            this.mWorldButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/WorldCanvas/mWorldButton');
        }
        return this.mWorldButton_Internal;
    }
    get mWorldTextBlock() {
        if (!this.mWorldTextBlock_Internal && this.uiWidgetBase) {
            this.mWorldTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/WorldCanvas/mWorldTextBlock');
        }
        return this.mWorldTextBlock_Internal;
    }
    get mWorldSignImage() {
        if (!this.mWorldSignImage_Internal && this.uiWidgetBase) {
            this.mWorldSignImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TypeCanvas/WorldCanvas/mWorldSignImage');
        }
        return this.mWorldSignImage_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCloseButton');
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mRoomButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mRoomButton");
        });
        this.mRoomButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mWorldButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mWorldButton");
        });
        this.mWorldButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        });
        this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mRedRoomTextBlock);
        this.initLanguage(this.mBlueRoomTextBlock);
        this.initLanguage(this.mRedRankTextBlock);
        this.initLanguage(this.mRedNameTextBlock);
        this.initLanguage(this.mRedKillCountTextBlock);
        this.initLanguage(this.mRedDieCountTextBlock);
        this.initLanguage(this.mBlueRankTextBlock);
        this.initLanguage(this.mBlueNameTextBlock);
        this.initLanguage(this.mBlueKillCountTextBlock);
        this.initLanguage(this.mBlueDieCountTextBlock);
        this.initLanguage(this.mTitleTextBlock);
        this.initLanguage(this.mWorldRankTextBlock);
        this.initLanguage(this.mWorldNameTextBlock);
        this.initLanguage(this.mWorldKillCountTextBlock);
        this.initLanguage(this.mWorldDieCountTextBlock);
        this.initLanguage(this.mRoomTextBlock);
        this.initLanguage(this.mWorldTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
RankPanel_Generate = __decorate([
    UIBind('UI/module/RankModule/RankPanel.ui')
], RankPanel_Generate);
var RankPanel_Generate$1 = RankPanel_Generate;

var foreign100 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RankPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RankModule/RoomItem.ui
 * TIME: 2024.10.27-00.04.44
 */
let RoomItem_Generate = class RoomItem_Generate extends UIScript {
    get mRankTextBlock() {
        if (!this.mRankTextBlock_Internal && this.uiWidgetBase) {
            this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mRankTextBlock');
        }
        return this.mRankTextBlock_Internal;
    }
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mNameTextBlock');
        }
        return this.mNameTextBlock_Internal;
    }
    get mKillCountTextBlock() {
        if (!this.mKillCountTextBlock_Internal && this.uiWidgetBase) {
            this.mKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mKillCountTextBlock');
        }
        return this.mKillCountTextBlock_Internal;
    }
    get mDieCountTextBlock() {
        if (!this.mDieCountTextBlock_Internal && this.uiWidgetBase) {
            this.mDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mDieCountTextBlock');
        }
        return this.mDieCountTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mRankTextBlock);
        this.initLanguage(this.mNameTextBlock);
        this.initLanguage(this.mKillCountTextBlock);
        this.initLanguage(this.mDieCountTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
RoomItem_Generate = __decorate([
    UIBind('UI/module/RankModule/RoomItem.ui')
], RoomItem_Generate);
var RoomItem_Generate$1 = RoomItem_Generate;

var foreign101 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RoomItem_Generate$1
});

class RoomItem extends RoomItem_Generate$1 {
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
    }
    setData(ranking, roomData, isSelf) {
        this.mRankTextBlock.text = ranking.toString();
        this.mNameTextBlock.text = roomData.playerName;
        this.mKillCountTextBlock.text = roomData.killCount.toString();
        this.mDieCountTextBlock.text = roomData.dieCount.toString();
        let fontColor = isSelf ? mw.LinearColor.green : mw.LinearColor.white;
        this.mRankTextBlock.fontColor = fontColor;
        this.mNameTextBlock.fontColor = fontColor;
        this.mKillCountTextBlock.fontColor = fontColor;
        this.mDieCountTextBlock.fontColor = fontColor;
    }
}

var foreign52 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RoomItem
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RankModule/WorldItem.ui
 * TIME: 2024.10.27-00.04.44
 */
let WorldItem_Generate = class WorldItem_Generate extends UIScript {
    get mRankTextBlock() {
        if (!this.mRankTextBlock_Internal && this.uiWidgetBase) {
            this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mRankTextBlock');
        }
        return this.mRankTextBlock_Internal;
    }
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mNameTextBlock');
        }
        return this.mNameTextBlock_Internal;
    }
    get mKillCountTextBlock() {
        if (!this.mKillCountTextBlock_Internal && this.uiWidgetBase) {
            this.mKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mKillCountTextBlock');
        }
        return this.mKillCountTextBlock_Internal;
    }
    get mDieCountTextBlock() {
        if (!this.mDieCountTextBlock_Internal && this.uiWidgetBase) {
            this.mDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mDieCountTextBlock');
        }
        return this.mDieCountTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mRankTextBlock);
        this.initLanguage(this.mNameTextBlock);
        this.initLanguage(this.mKillCountTextBlock);
        this.initLanguage(this.mDieCountTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
WorldItem_Generate = __decorate([
    UIBind('UI/module/RankModule/WorldItem.ui')
], WorldItem_Generate);
var WorldItem_Generate$1 = WorldItem_Generate;

var foreign102 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: WorldItem_Generate$1
});

class WorldItem extends WorldItem_Generate$1 {
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
    }
    setData(ranking, roomData, isSelf) {
        this.mRankTextBlock.text = ranking.toString();
        this.mNameTextBlock.text = roomData.playerName;
        this.mKillCountTextBlock.text = roomData.killCount.toString();
        this.mDieCountTextBlock.text = roomData.dieCount.toString();
        let fontColor = isSelf ? mw.LinearColor.green : mw.LinearColor.white;
        this.mRankTextBlock.fontColor = fontColor;
        this.mNameTextBlock.fontColor = fontColor;
        this.mKillCountTextBlock.fontColor = fontColor;
        this.mDieCountTextBlock.fontColor = fontColor;
    }
}

var foreign53 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: WorldItem
});

class RankPanel extends RankPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.redRoomItems = [];
        this.blueRoomItems = [];
        this.worldItems = [];
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initData();
        this.bindButton();
        this.initTextBlock();
    }
    initTextBlock() {
        this.mRedRoomTextBlock.text = GameConfig.Language.Lurking.Value;
        this.mBlueRoomTextBlock.text = GameConfig.Language.Defenders.Value;
        this.mRedRankTextBlock.text = GameConfig.Language.Ranking.Value;
        this.mRedNameTextBlock.text = GameConfig.Language.Nickname.Value;
        this.mRedKillCountTextBlock.text = GameConfig.Language.Beat.Value;
        this.mRedDieCountTextBlock.text = GameConfig.Language.Death.Value;
        this.mBlueRankTextBlock.text = GameConfig.Language.Ranking.Value;
        this.mBlueNameTextBlock.text = GameConfig.Language.Nickname.Value;
        this.mBlueKillCountTextBlock.text = GameConfig.Language.Beat.Value;
        this.mBlueDieCountTextBlock.text = GameConfig.Language.Death.Value;
        this.mTitleTextBlock.text = StringUtil.format(GameConfig.Language.TopInTheEntireServer.Value, GlobalData.maxWorldRankCount);
        this.mWorldRankTextBlock.text = GameConfig.Language.Ranking.Value;
        this.mWorldNameTextBlock.text = GameConfig.Language.Nickname.Value;
        this.mWorldKillCountTextBlock.text = GameConfig.Language.TotalDefeat.Value;
        this.mWorldDieCountTextBlock.text = GameConfig.Language.TotalDeaths.Value;
        this.mRoomTextBlock.text = GameConfig.Language.RankingOfAchievements.Value;
        this.mWorldTextBlock.text = GameConfig.Language.FullServerRankingList.Value;
        if (GlobalData.languageId == 0) {
            this.mBlueKillCountTextBlock.fontSize = 20;
            this.mBlueDieCountTextBlock.fontSize = 20;
            this.mRedKillCountTextBlock.fontSize = 20;
            this.mRedDieCountTextBlock.fontSize = 20;
            this.mWorldKillCountTextBlock.fontSize = 20;
            this.mWorldDieCountTextBlock.fontSize = 20;
            this.mBlueRankTextBlock.fontSize = 20;
            this.mWorldRankTextBlock.fontSize = 20;
        }
    }
    initData() {
        this.initUI();
    }
    bindButton() {
        this.mRoomButton.onClicked.add(this.bindRoomButton.bind(this));
        this.mWorldButton.onClicked.add(this.bindWorldButton.bind(this));
        this.mCloseButton.onClicked.add(this.bindCloseButton.bind(this));
    }
    initUI() {
        this.switchRankType(true);
    }
    bindRoomButton() {
        this.switchRankType(true);
    }
    bindWorldButton() {
        this.switchRankType(false);
    }
    bindCloseButton() {
        this.hideTween();
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
    }
    refreshRankPanel_RoomWorld(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex, worldDatas, curWorldIndex) {
        this.refreshRoomRankPanel(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex);
        this.refreshWorldRankPanel(worldDatas, curWorldIndex);
    }
    refreshRankPanel_Room(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex) {
        this.refreshRoomRankPanel(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex);
    }
    refreshRoomRankPanel(redRoomDatas, blueRoomDatas, isRedTeam, curRoomIndex) {
        // console.error("isRedTeam = " + isRedTeam + " curRoomIndex = " + curRoomIndex);
        if (redRoomDatas.length > this.redRoomItems.length) {
            for (let i = 0; i < this.redRoomItems.length; ++i) {
                this.redRoomItems[i].setData(i + 1, redRoomDatas[i], isRedTeam && (i == curRoomIndex));
                Utils.setWidgetVisibility(this.redRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.redRoomItems.length; i < redRoomDatas.length; ++i) {
                let redItem = UIService.create(RoomItem);
                redItem.setData(i + 1, redRoomDatas[i], isRedTeam && (i == curRoomIndex));
                this.mRedRoomContentCanvas.addChild(redItem.uiObject);
                this.redRoomItems.push(redItem);
            }
        }
        else {
            for (let i = 0; i < redRoomDatas.length; ++i) {
                this.redRoomItems[i].setData(i + 1, redRoomDatas[i], isRedTeam && (i == curRoomIndex));
                Utils.setWidgetVisibility(this.redRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = redRoomDatas.length; i < this.redRoomItems.length; ++i) {
                Utils.setWidgetVisibility(this.redRoomItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
        if (blueRoomDatas.length > this.blueRoomItems.length) {
            for (let i = 0; i < this.blueRoomItems.length; ++i) {
                this.blueRoomItems[i].setData(i + 1, blueRoomDatas[i], !isRedTeam && (i == curRoomIndex));
                Utils.setWidgetVisibility(this.blueRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.blueRoomItems.length; i < blueRoomDatas.length; ++i) {
                let blueItem = UIService.create(RoomItem);
                blueItem.setData(i + 1, blueRoomDatas[i], !isRedTeam && (i == curRoomIndex));
                this.mBlueRoomContnetCanvas.addChild(blueItem.uiObject);
                this.blueRoomItems.push(blueItem);
            }
        }
        else {
            for (let i = 0; i < blueRoomDatas.length; ++i) {
                this.blueRoomItems[i].setData(i + 1, blueRoomDatas[i], !isRedTeam && (i == curRoomIndex));
                Utils.setWidgetVisibility(this.blueRoomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = blueRoomDatas.length; i < this.blueRoomItems.length; ++i) {
                Utils.setWidgetVisibility(this.blueRoomItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    refreshWorldRankPanel(worldDatas, curWorldIndex) {
        if (worldDatas.length > this.worldItems.length) {
            for (let i = 0; i < this.worldItems.length; ++i) {
                this.worldItems[i].setData(i + 1, worldDatas[i], i == curWorldIndex);
                Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.worldItems.length; i < worldDatas.length; ++i) {
                let worldItem = UIService.create(WorldItem);
                worldItem.setData(i + 1, worldDatas[i], i == curWorldIndex);
                this.mWorldContentCanvas.addChild(worldItem.uiObject);
                this.worldItems.push(worldItem);
            }
        }
        else {
            for (let i = 0; i < worldDatas.length; ++i) {
                this.worldItems[i].setData(i + 1, worldDatas[i], i == curWorldIndex);
                Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = worldDatas.length; i < this.worldItems.length; ++i) {
                Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    switchRankType(isRoom) {
        Utils.setWidgetVisibility(this.mRoomCanvas, isRoom ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mWorldCanvas, isRoom ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible);
        Utils.setButtonEnable(this.mRoomButton, !isRoom);
        Utils.setButtonEnable(this.mWorldButton, isRoom);
        Utils.setWidgetVisibility(this.mRoomSignImage, isRoom ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mWorldSignImage, isRoom ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible);
    }
    onShow(...params) {
        Utils.openUITween(this.rootCanvas, null, null);
    }
    /**
     * 隐藏缓动
     */
    hideTween() {
        Utils.closeUITween(this.rootCanvas, null, () => {
            this.hide();
        });
    }
}

var foreign51 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RankPanel
});

class RankModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.teamModuleC = null;
        this.rankPanel = null;
        this.userId = null;
        this.playerData = null;
        // private roomDatas: RoomData[] = [];
        this.redRoomDatas = [];
        this.blueRoomDatas = [];
        this.recycleRoomDatas = [];
        this.curRoomIndex = -1;
        this.isRedTeam = false;
        this.curRedFirstUserId = "";
        this.curBlueFirstUserId = "";
        this.worldDatas = [];
        this.recycleWorldDatas = [];
        this.curWorldIndex = -1;
        this.preIsRedTeam = false;
        this.preRoomIndex = -2;
    }
    get getHUDModuleC() {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getTeamModuleC() {
        if (!this.teamModuleC) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }
    get getRankPanel() {
        if (!this.rankPanel) {
            this.rankPanel = UIService.getUI(RankPanel);
        }
        return this.rankPanel;
    }
    get currentUserId() {
        if (this.userId == "" || this.userId == null) {
            this.userId = this.localPlayer.userId;
        }
        return this.userId;
    }
    get getPlayerData() {
        if (this.playerData == null) {
            this.playerData = DataCenterC.getData(PlayerData);
        }
        return this.playerData;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }
    initModule() {
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
        this.playerData = DataCenterC.getData(PlayerData);
    }
    initUIPanel() {
        this.rankPanel = UIService.getUI(RankPanel);
    }
    initEventAction() {
        this.getHUDModuleC.onOpenRankAction.add(this.addOnOffRankPanelAction.bind(this));
    }
    addOnOffRankPanelAction() {
        this.getRankPanel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
        // this.server.net_updateSyncPlayer(isOpen);
    }
    onEnterScene(sceneType) {
        let nickName = mw.AccountService.getNickName();
        nickName = nickName ? nickName : "UserId:" + this.currentUserId;
        this.server.net_onEnterScene(nickName, this.getPlayerData.killCount, this.getPlayerData.dieCount);
    }
    calculateKillCount() {
        let redCount = 0;
        let blueCount = 0;
        this.redRoomDatas.forEach((roomData) => {
            redCount += roomData.killCount;
        });
        this.blueRoomDatas.forEach((roomData) => {
            blueCount += roomData.killCount;
        });
        this.getHUDModuleC.updateVsUI(redCount, blueCount);
    }
    updateRoomDatas(roomUserIds, roomNames, roomKillCounts, roomDieCounts) {
        let userIds = this.getTeamModuleC.getUserIds();
        let redUsers = userIds[0];
        let blueUsers = userIds[1];
        let redIndex = 0;
        let blueIndex = 0;
        for (let i = 0; i < roomUserIds.length; ++i) {
            if (redUsers.includes(roomUserIds[i])) {
                if (this.redRoomDatas.length > redIndex) {
                    this.redRoomDatas[redIndex++].setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                }
                else {
                    let tmpRoomData = null;
                    if (this.recycleRoomDatas.length > 0)
                        tmpRoomData = this.recycleRoomDatas.pop();
                    if (tmpRoomData) {
                        tmpRoomData.setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    }
                    else {
                        tmpRoomData = new RoomData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    }
                    this.redRoomDatas.push(tmpRoomData);
                    redIndex++;
                }
            }
            else if (blueUsers.includes(roomUserIds[i])) {
                if (this.blueRoomDatas.length > blueIndex) {
                    this.blueRoomDatas[blueIndex++].setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                }
                else {
                    let tmpRoomData = null;
                    if (this.recycleRoomDatas.length > 0)
                        tmpRoomData = this.recycleRoomDatas.pop();
                    if (tmpRoomData) {
                        tmpRoomData.setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    }
                    else {
                        tmpRoomData = new RoomData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
                    }
                    this.blueRoomDatas.push(tmpRoomData);
                    blueIndex++;
                }
            }
        }
        if (this.redRoomDatas.length > redIndex) {
            for (let i = redIndex; i < this.redRoomDatas.length; ++i) {
                this.recycleRoomDatas.push(this.redRoomDatas[i]);
            }
            this.redRoomDatas.length = redIndex;
        }
        if (this.blueRoomDatas.length > blueIndex) {
            for (let i = blueIndex; i < this.blueRoomDatas.length; ++i) {
                this.recycleRoomDatas.push(this.blueRoomDatas[i]);
            }
            this.blueRoomDatas.length = blueIndex;
        }
        this.calculateKillCount();
        //#region 旧代码
        // if (this.roomDatas.length > roomUserIds.length) {
        //     for (let i = 0; i < roomUserIds.length; ++i) {
        //         this.roomDatas[i].setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
        //     }
        //     for (let i = roomUserIds.length; i < this.roomDatas.length; ++i) {
        //         this.recycleRoomDatas.push(this.roomDatas[i]);
        //     }
        //     this.roomDatas.length = roomUserIds.length;
        // } else {
        //     for (let i = 0; i < this.roomDatas.length; ++i) {
        //         this.roomDatas[i].setData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
        //     }
        //     for (let i = this.roomDatas.length; i < roomUserIds.length; ++i) {
        //         let tmpRoomData = null;
        //         if (this.recycleRoomDatas.length > 0) tmpRoomData = this.recycleRoomDatas.pop();
        //         if (!tmpRoomData) tmpRoomData = new RoomData(roomUserIds[i], roomNames[i], roomKillCounts[i], roomDieCounts[i]);
        //         this.roomDatas.push(tmpRoomData);
        //     }
        // }
        //#endregion
    }
    updateRoomIndex() {
        this.curRoomIndex = -1;
        this.isRedTeam = false;
        for (let i = 0; i < this.redRoomDatas.length; ++i) {
            if (this.redRoomDatas[i].userId != this.currentUserId)
                continue;
            this.curRoomIndex = i;
            this.isRedTeam = true;
            if (i > 0)
                break;
            if (this.curRedFirstUserId != this.currentUserId)
                this.server.net_setFirstModel(true);
            break;
        }
        if (this.redRoomDatas && this.redRoomDatas.length > 0)
            this.curRedFirstUserId = this.redRoomDatas[0].userId;
        if (this.curRoomIndex != -1) {
            this.updateHUDRankText();
            return;
        }
        for (let i = 0; i < this.blueRoomDatas.length; ++i) {
            if (this.blueRoomDatas[i].userId != this.currentUserId)
                continue;
            this.curRoomIndex = i;
            this.isRedTeam = false;
            if (i > 0)
                break;
            if (this.curBlueFirstUserId != this.currentUserId)
                this.server.net_setFirstModel(false);
            break;
        }
        if (this.blueRoomDatas && this.blueRoomDatas.length > 0)
            this.curBlueFirstUserId = this.blueRoomDatas[0].userId;
        this.updateHUDRankText();
    }
    updateWorldDatas(worldUserIds, worldNames, worldKillCounts, worldDieCounts) {
        if (this.worldDatas.length > worldUserIds.length) {
            for (let i = 0; i < worldUserIds.length; ++i) {
                this.worldDatas[i].setData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
            }
            for (let i = worldUserIds.length; i < this.worldDatas.length; ++i) {
                this.recycleWorldDatas.push(this.worldDatas[i]);
            }
            this.worldDatas.length = worldUserIds.length;
        }
        else {
            for (let i = 0; i < this.worldDatas.length; ++i) {
                this.worldDatas[i].setData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
            }
            for (let i = this.worldDatas.length; i < worldUserIds.length; ++i) {
                let tmpWorldData = null;
                if (this.recycleWorldDatas.length > 0)
                    tmpWorldData = this.recycleWorldDatas.pop();
                if (tmpWorldData) {
                    tmpWorldData.setData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
                }
                else {
                    tmpWorldData = new WorldData(worldUserIds[i], worldNames[i], worldKillCounts[i], worldDieCounts[i]);
                }
                this.worldDatas.push(tmpWorldData);
            }
        }
    }
    updateWorldIndex() {
        this.curWorldIndex = -1;
        for (let i = 0; i < this.worldDatas.length; ++i) {
            if (this.worldDatas[i].userId != this.currentUserId)
                continue;
            this.curWorldIndex = i;
            break;
        }
    }
    net_syncRoomRankData(roomUserIds, roomNames, roomKillCounts, roomDieCounts) {
        // console.error("wfz = " + roomUserIds.length);
        this.updateRoomDatas(roomUserIds, roomNames, roomKillCounts, roomDieCounts);
        this.sortRoomData();
        this.updateRoomIndex();
        this.getRankPanel.refreshRankPanel_Room(this.redRoomDatas, this.blueRoomDatas, this.isRedTeam, this.curRoomIndex);
    }
    net_syncRoomWorldRankData(roomUserIds, roomNames, roomKillCounts, roomDieCounts, worldUserIds, worldNames, worldKillCounts, worldDieCounts) {
        this.updateRoomDatas(roomUserIds, roomNames, roomKillCounts, roomDieCounts);
        this.sortRoomData();
        this.updateRoomIndex();
        this.updateWorldDatas(worldUserIds, worldNames, worldKillCounts, worldDieCounts);
        this.updateWorldIndex();
        this.getRankPanel.refreshRankPanel_RoomWorld(this.redRoomDatas, this.blueRoomDatas, this.isRedTeam, this.curRoomIndex, this.worldDatas, this.curWorldIndex);
        // this.updateRankNpc();
    }
    sortRoomData() {
        this.redRoomDatas.sort((a, b) => {
            return b.killCount - a.killCount || ((b.killCount == a.killCount) && (a.dieCount - b.dieCount));
        });
        this.blueRoomDatas.sort((a, b) => {
            return b.killCount - a.killCount || ((b.killCount == a.killCount) && (a.dieCount - b.dieCount));
        });
    }
    updateRankByChangeTeam() {
        this.server.net_updateRankByChangeTeam();
    }
    updateHUDRankText() {
        if (this.preIsRedTeam == this.isRedTeam && this.preRoomIndex == this.curRoomIndex)
            return;
        this.getHUDModuleC.updateRankUIText(this.isRedTeam, this.curRoomIndex + 1);
        this.preIsRedTeam = this.isRedTeam;
        this.preRoomIndex = this.curRoomIndex;
    }
}

var foreign49 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RankModuleC
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/TeamModule/TeamPanel.ui
 * TIME: 2024.10.27-00.04.45
 */
let TeamPanel_Generate = class TeamPanel_Generate extends UIScript {
    get mMainCanvas() {
        if (!this.mMainCanvas_Internal && this.uiWidgetBase) {
            this.mMainCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas');
        }
        return this.mMainCanvas_Internal;
    }
    get mRedTeadCanvas() {
        if (!this.mRedTeadCanvas_Internal && this.uiWidgetBase) {
            this.mRedTeadCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mRedTeadCanvas');
        }
        return this.mRedTeadCanvas_Internal;
    }
    get mBlueTeamCanvas() {
        if (!this.mBlueTeamCanvas_Internal && this.uiWidgetBase) {
            this.mBlueTeamCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mBlueTeamCanvas');
        }
        return this.mBlueTeamCanvas_Internal;
    }
    get mRedTeamButton() {
        if (!this.mRedTeamButton_Internal && this.uiWidgetBase) {
            this.mRedTeamButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mRedTeamButton');
        }
        return this.mRedTeamButton_Internal;
    }
    get mRedTeamTextBlock() {
        if (!this.mRedTeamTextBlock_Internal && this.uiWidgetBase) {
            this.mRedTeamTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mRedTeamButton/mRedTeamTextBlock');
        }
        return this.mRedTeamTextBlock_Internal;
    }
    get mBlueTeamButton() {
        if (!this.mBlueTeamButton_Internal && this.uiWidgetBase) {
            this.mBlueTeamButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mBlueTeamButton');
        }
        return this.mBlueTeamButton_Internal;
    }
    get mBlueTeamTextBlock() {
        if (!this.mBlueTeamTextBlock_Internal && this.uiWidgetBase) {
            this.mBlueTeamTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mBlueTeamButton/mBlueTeamTextBlock');
        }
        return this.mBlueTeamTextBlock_Internal;
    }
    get mRedTextBlock() {
        if (!this.mRedTextBlock_Internal && this.uiWidgetBase) {
            this.mRedTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TitleCanvas/mRedTextBlock');
        }
        return this.mRedTextBlock_Internal;
    }
    get mBlueTextBlock() {
        if (!this.mBlueTextBlock_Internal && this.uiWidgetBase) {
            this.mBlueTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TitleCanvas/mBlueTextBlock');
        }
        return this.mBlueTextBlock_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TitleCanvas/mCloseButton');
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mRedTeamButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mRedTeamButton");
        });
        this.mRedTeamButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mBlueTeamButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mBlueTeamButton");
        });
        this.mBlueTeamButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        });
        this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mRedTeamTextBlock);
        this.initLanguage(this.mBlueTeamTextBlock);
        this.initLanguage(this.mRedTextBlock);
        this.initLanguage(this.mBlueTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
TeamPanel_Generate = __decorate([
    UIBind('UI/module/TeamModule/TeamPanel.ui')
], TeamPanel_Generate);
var TeamPanel_Generate$1 = TeamPanel_Generate;

var foreign108 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TeamPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/TeamModule/TeamItem.ui
 * TIME: 2024.10.27-00.04.45
 */
let TeamItem_Generate = class TeamItem_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mBgImage');
        }
        return this.mBgImage_Internal;
    }
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mNameTextBlock');
        }
        return this.mNameTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mNameTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
TeamItem_Generate = __decorate([
    UIBind('UI/module/TeamModule/TeamItem.ui')
], TeamItem_Generate);
var TeamItem_Generate$1 = TeamItem_Generate;

var foreign107 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TeamItem_Generate$1
});

class TeamItem extends TeamItem_Generate$1 {
    onStart() {
        this.setPlayerName("");
        // this.mBgImage.visibility = mw.SlateVisibility.Collapsed;
    }
    setBgImage(isRed) {
        this.mBgImage.imageGuid = isRed ? "99551" : "99547";
    }
    setPlayerName(name) {
        this.mNameTextBlock.text = name;
        // let visibility = (name == "") ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible;
        // this.mBgImage.visibility = visibility;
    }
    setNameColor(fontColor) {
        this.mNameTextBlock.fontColor = fontColor;
    }
}

var foreign66 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TeamItem
});

class TeamPanel extends TeamPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.teamModuleC = null;
        this.redTeamItems = [];
        this.blueTeamItems = [];
        this.isDelayedEnd = true;
    }
    get getTeamModuleC() {
        if (this.teamModuleC == null) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }
    onStart() {
        this.initDatas();
        this.bindButtons();
        this.initTextBlock();
    }
    initTextBlock() {
        this.mRedTeamTextBlock.text = `${GameConfig.Language.Join.Value}\n${GameConfig.Language.Lurking.Value}`;
        this.mBlueTeamTextBlock.text = `${GameConfig.Language.Join.Value}\n${GameConfig.Language.Defenders.Value}`;
        this.mRedTextBlock.text = GameConfig.Language.Lurking.Value;
        this.mBlueTextBlock.text = GameConfig.Language.Defenders.Value;
        if (GlobalData.languageId == 0) {
            this.mRedTextBlock.fontSize = 40;
            this.mBlueTextBlock.fontSize = 40;
        }
    }
    initDatas() {
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
        let roomPeopleCount = GlobalData.roomPeopleCount;
        for (let i = 0; i < roomPeopleCount; ++i) {
            let item = UIService.create(TeamItem);
            // item.setBgImage(i < 10);
            if (i < (roomPeopleCount / 2)) {
                this.mRedTeadCanvas.addChild(item.uiObject);
                this.redTeamItems.push(item);
            }
            else {
                this.mBlueTeamCanvas.addChild(item.uiObject);
                this.blueTeamItems.push(item);
            }
        }
    }
    bindButtons() {
        this.mRedTeamButton.onClicked.add(this.bindClickRedTeamButton.bind(this));
        this.mBlueTeamButton.onClicked.add(this.bindClickBlueTeamButton.bind(this));
        this.mCloseButton.onClicked.add(this.bindCloseButton.bind(this));
    }
    bindClickRedTeamButton() {
        this.changeTeam(TeamType.Red);
    }
    bindClickBlueTeamButton() {
        this.changeTeam(TeamType.Blue);
    }
    bindCloseButton() {
        this.hideTween();
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
    }
    async changeTeam(teamType) {
        if (this.getTeamModuleC.getCurTeamType() == teamType) {
            Notice.showDownNotice("切换失败,你已在" + (teamType == TeamType.Red ? "红队" : "蓝队") + "中");
            return;
        }
        if (!this.isDelayedEnd) {
            Notice.showDownNotice("不能频繁切换队伍，10秒后再试");
            return;
        }
        this.isDelayedEnd = false;
        TimeUtil.delaySecond(10).then(() => {
            this.isDelayedEnd = true;
        });
        await this.getTeamModuleC.net_changeTeam(teamType);
    }
    setTeamDatas(redNames, blueNames, selfIndex, currentTeamType) {
        for (let i = 0; i < redNames.length; ++i) {
            this.redTeamItems[i].setPlayerName(redNames[i]);
            if (selfIndex - 1 == i && currentTeamType == TeamType.Red) {
                this.redTeamItems[i].setNameColor(mw.LinearColor.yellow);
            }
            else {
                this.redTeamItems[i].setNameColor(mw.LinearColor.white);
            }
        }
        for (let i = redNames.length; i < this.redTeamItems.length; ++i) {
            this.redTeamItems[i].setPlayerName("");
        }
        for (let i = 0; i < blueNames.length; ++i) {
            this.blueTeamItems[i].setPlayerName(blueNames[i]);
            if (selfIndex - 1 == i && currentTeamType == TeamType.Blue) {
                this.blueTeamItems[i].setNameColor(mw.LinearColor.yellow);
            }
            else {
                this.blueTeamItems[i].setNameColor(mw.LinearColor.white);
            }
        }
        for (let i = blueNames.length; i < this.blueTeamItems.length; ++i) {
            this.blueTeamItems[i].setPlayerName("");
        }
    }
    onShow(...params) {
        Utils.openUITween(this.rootCanvas, () => {
            // this.hudPanel.hide();
        }, null);
    }
    /**
     * 隐藏缓动
     */
    hideTween() {
        Utils.closeUITween(this.rootCanvas, null, () => {
            this.hide();
        });
    }
}

var foreign67 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TeamPanel
});

class TeamModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.rankModuleC = null;
        this.teamPanel = null;
        this.redNames = [];
        this.blueNames = [];
        this.currentTeamType = TeamType.Red;
        this.redUsers = [];
        this.blueUsers = [];
    }
    get getHUDModuleC() {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getRankModuleC() {
        if (!this.rankModuleC) {
            this.rankModuleC = ModuleService.getModule(RankModuleC);
        }
        return this.rankModuleC;
    }
    get getTeamPannel() {
        if (this.teamPanel == null) {
            this.teamPanel = UIService.getUI(TeamPanel);
        }
        return this.teamPanel;
    }
    onStart() {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }
    initModule() {
        this.rankModuleC = ModuleService.getModule(RankModuleC);
    }
    initUIPanel() {
        this.teamPanel = UIService.getUI(TeamPanel);
    }
    initEventAction() {
        this.getHUDModuleC.onOpenTeamAction.add(this.addOnOffTeamPanelAction.bind(this));
    }
    addOnOffTeamPanelAction() {
        this.getTeamPannel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }
    onEnterScene(sceneType) {
        let nickName = mw.AccountService.getNickName();
        nickName = nickName ? nickName : "UserId:" + this.localPlayer.userId;
        this.server.net_onEnterScene(nickName);
    }
    net_syncTeamData(userIds, playerNames, teamIds) {
        this.redUsers.length = 0;
        this.blueUsers.length = 0;
        this.redNames.length = 0;
        this.blueNames.length = 0;
        let selfIndex = -1;
        for (let i = 0; i < userIds.length; ++i) {
            let playerName = playerNames[i];
            let teamId = teamIds[i];
            if (teamId == TeamType.Red) {
                this.redUsers.push(userIds[i]);
                this.redNames.push(playerName);
                if (userIds[i] == this.localPlayer.userId) {
                    selfIndex = this.redUsers.length;
                    this.currentTeamType = TeamType.Red;
                }
            }
            else if (teamId == TeamType.Blue) {
                this.blueUsers.push(userIds[i]);
                this.blueNames.push(playerName);
                if (userIds[i] == this.localPlayer.userId) {
                    selfIndex = this.blueUsers.length;
                    this.currentTeamType = TeamType.Blue;
                }
            }
        }
        this.getTeamPannel.setTeamDatas(this.redNames, this.blueNames, selfIndex, this.currentTeamType);
        this.setAllPlayerOutline();
    }
    async net_changeTeam(teamType) {
        if (this.currentTeamType == teamType) {
            Notice.showDownNotice("切换失败,你已在" + (teamType == TeamType.Red ? "红队" : "蓝队") + "中");
            return;
        }
        let resultType = await this.server.net_changeTeam(teamType);
        switch (resultType) {
            case ResultType.Succeed:
                Notice.showDownNotice("切换队伍成功");
                TimeUtil.delaySecond(1).then(() => { this.getRankModuleC.updateRankByChangeTeam(); });
                break;
            case ResultType.Fail1:
                Notice.showDownNotice("切换失败,此队已满");
                break;
            case ResultType.Fail2:
                Notice.showDownNotice("切换失败,人数不平等");
                break;
            case ResultType.Fail3:
                Notice.showDownNotice("已在此队");
                break;
        }
    }
    getCurTeamType() {
        return this.currentTeamType;
    }
    isTeamMate(userId1, userId2) {
        if (this.redUsers.indexOf(userId1) != -1 && this.redUsers.indexOf(userId2) != -1)
            return true;
        if (this.blueUsers.indexOf(userId1) != -1 && this.blueUsers.indexOf(userId2) != -1)
            return true;
        return false;
    }
    getUserIds() {
        return [this.redUsers, this.blueUsers];
    }
    isRedTeam(userId) {
        return this.redUsers.includes(userId);
    }
    setAllPlayerOutline() {
        let localPlayerUserId = this.localPlayer.userId;
        Player.getAllPlayers().forEach((player) => {
            Utils.setOutLine(player, this.isTeamMate(localPlayerUserId, player.userId));
        });
    }
}

var foreign64 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TeamModuleC
});

class RadarModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.teamModuleC = null;
        this.radarPanel = null;
    }
    get getTeamModuleC() {
        if (!this.teamModuleC) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }
    get getRadarPanel() {
        if (!this.radarPanel) {
            this.radarPanel = mw.UIService.create(RadarPanel);
        }
        return this.radarPanel;
    }
    onStart() {
        this.initData();
        this.bindEvent();
    }
    initData() {
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
        this.radarPanel = mw.UIService.create(RadarPanel);
    }
    bindEvent() {
        Event.addLocalListener(EventType.OnOffMainHUD, this.addOnOffRadarPanel.bind(this));
    }
    addOnOffRadarPanel(isOpen) {
        isOpen ? this.getRadarPanel.show() : this.getRadarPanel.hide();
    }
    onEnterScene(sceneType) {
        this.getRadarPanel.show();
    }
    isFriendly(player1, player2) {
        return this.getTeamModuleC.isTeamMate(player1.userId, player2.userId);
    }
}

var foreign45 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RadarModuleC
});

class RadarPanel extends UIScript {
    constructor() {
        super(...arguments);
        this.mCutCanvas = null;
        this.mRadarCanvas = null;
        this.currentPlayer = null;
        this.playerPointMap = new Map();
        this.npcPointMap = new Map();
        /**雷达缩放比，比例越小，可以看得越远 */
        this.mapScalRate = 1;
        this.windowSize = mw.Vector.zero;
        this.radarModuleC = null;
    }
    get getRadarModuleC() {
        if (!this.radarModuleC) {
            this.radarModuleC = ModuleService.getModule(RadarModuleC);
        }
        return this.radarModuleC;
    }
    async onAwake() {
        this.radarModuleC = ModuleService.getModule(RadarModuleC);
        this.currentPlayer = await Player.asyncGetLocalPlayer();
        this.initUI();
        this.bindEvent();
    }
    initUI() {
        this.windowSize = WindowUtil.getViewportSize();
        this.rootCanvas.size = this.windowSize;
        this.rootCanvas.zOrder = mw.UILayerTop;
        /**外框裁剪容器 */
        this.mCutCanvas = mw.Canvas.newObject(this.rootCanvas, "MyCanvas");
        this.mCutCanvas.size = new Vector2(400, 400);
        this.mCutCanvas.zOrder = 2;
        this.mCutCanvas.autoLayoutRule = new mw.UILayout(0, new mw.Margin(0), mw.UILayoutType.Vertical, mw.UILayoutPacket.CenterCenter, new mw.UIHugContent(0, 0), true, false);
        this.mCutCanvas.clipEnable = true;
        /**雷达背景图片 */
        let bgp = mw.Image.newObject(this.rootCanvas, "bgp");
        bgp.imageGuid = "114028";
        bgp.imageColor = LinearColor.black;
        bgp.renderOpacity = 0.3;
        bgp.size = this.mCutCanvas.size.clone();
        //中心点(自己)
        let selfCanvas = mw.Canvas.newObject(this.rootCanvas, "selfCanvas");
        selfCanvas.size = new Vector2(64, 64);
        selfCanvas.position = new Vector2(168, 168);
        selfCanvas.zOrder = 1;
        /**中心点图片 */
        let selfImageArrow_1 = mw.Image.newObject(selfCanvas, "selfImageArrow_1");
        selfImageArrow_1.imageGuid = "298896";
        selfImageArrow_1.size = new Vector2(64, 64);
        selfImageArrow_1.position = new Vector2(0, 20);
        selfImageArrow_1.renderTransformAngle = -90;
        let selfImageArrow_2 = mw.Image.newObject(selfCanvas, "selfImageArrow_2");
        selfImageArrow_2.imageGuid = "114028";
        selfImageArrow_2.size = new Vector2(400, 400);
        selfImageArrow_2.position = new Vector2(-168, -452);
        selfImageArrow_2.renderOpacity = 0.3;
        selfImageArrow_2.renderTransformAngle = 45;
        /**雷达图谱容器 */
        this.mRadarCanvas = mw.Canvas.newObject(this.rootCanvas, "radarCanvas");
        this.mRadarCanvas.size = this.mCutCanvas.size.clone();
        this.mRadarCanvas.position = Vector2.zero;
        this.mCutCanvas.addChild(this.mRadarCanvas);
        TimeUtil.setInterval(() => {
            this.mCutCanvas.position = mw.Vector.zero;
            bgp.position = this.mCutCanvas.position;
            selfCanvas.position = this.mCutCanvas.position.add(this.mCutCanvas.size.clone().multiply(0.5).clone().subtract(selfCanvas.size.clone().multiply(0.5)));
            this.mRadarCanvas.renderTransformAngle = -1 * Camera.currentCamera.worldTransform.clone().rotation.z;
            this.updatePlayerState();
            this.updateNpcState();
        }, 0.1);
    }
    bindEvent() {
        Player.onPlayerLeave.add((otherPlayer) => {
            if (!this.playerPointMap.has(otherPlayer))
                return;
            this.playerPointMap.get(otherPlayer).destroyObject();
            this.playerPointMap.delete(otherPlayer);
        });
    }
    updatePlayerState() {
        Player.getAllPlayers().forEach((otherPlayer) => {
            if (otherPlayer == this.currentPlayer)
                return;
            if (this.playerPointMap.has(otherPlayer)) {
                let otherPlayerPoint = this.playerPointMap.get(otherPlayer);
                if (otherPlayer.character.ragdollEnabled) {
                    this.setTextBlock(otherPlayerPoint, "×");
                }
                else {
                    this.setTextBlock(otherPlayerPoint, "◆");
                }
                if (this.getRadarModuleC.isFriendly(this.currentPlayer, otherPlayer)) {
                    this.setTextFontColor(otherPlayerPoint, mw.LinearColor.green);
                }
                else {
                    this.setTextFontColor(otherPlayerPoint, mw.LinearColor.red);
                }
                let loc = this.Loc2RadarPos(otherPlayer.character.worldTransform.position);
                let offset = otherPlayerPoint.size;
                otherPlayerPoint.position = new Vector2(loc.x - (offset.x / 2), loc.y - (offset.y / 2));
            }
            else {
                this.playerPointMap.set(otherPlayer, this.getTextBlockPoint(otherPlayer.userId));
            }
        });
    }
    updateNpcState() {
        if (!this.npcPointMap || this.npcPointMap.size == 0)
            return;
        this.npcPointMap.forEach((value, key) => {
            if (key.ragdollEnabled) {
                this.setTextBlock(value, "×");
            }
            else {
                this.setTextBlock(value, "◆");
            }
            let loc = this.Loc2RadarPos(key.worldTransform.position);
            let offset = value.size;
            value.position = new Vector2(loc.x - (offset.x / 2), loc.y - (offset.y / 2));
        });
    }
    setNpcPoint(npc) {
        this.npcPointMap.set(npc, this.getTextBlockPoint(npc.gameObjectId, true));
    }
    getTextBlockPoint(name, isNpc = false) {
        let textBlockPoint = mw.TextBlock.newObject(this.rootCanvas, name);
        textBlockPoint.fontSize = 32;
        this.setTextBlock(textBlockPoint, "◆");
        textBlockPoint.outlineColor = mw.LinearColor.black;
        textBlockPoint.zOrder = 1;
        textBlockPoint.outlineSize = 1;
        this.setTextFontColor(textBlockPoint, isNpc ? mw.LinearColor.red : mw.LinearColor.green);
        textBlockPoint.textHorizontalLayout = 2;
        textBlockPoint.textJustification = 0;
        textBlockPoint.textVerticalJustification = 0;
        textBlockPoint.textAlign = 0;
        textBlockPoint.textVerticalAlign = 0;
        textBlockPoint.size = new Vector2(32, 32);
        textBlockPoint.visibility = 4;
        this.mRadarCanvas.addChild(textBlockPoint);
        return textBlockPoint;
    }
    Loc2RadarPos(loc) {
        let deltaVector = loc.clone().subtract(this.currentPlayer.character.worldTransform.position.clone()).multiply(new Vector(0.1, 0.1, 0)).multiply(this.mapScalRate);
        let deltaVector2 = new Vector2(deltaVector.clone().y, -1 * deltaVector.clone().x);
        let pos = this.mRadarCanvas.size.clone().multiply(0.5).clone().subtract(new Vector2(5, 16)).add(deltaVector2);
        return pos;
    }
    setTextBlock(text, str) {
        if (text.text != str)
            text.text = str;
    }
    setTextFontColor(text, fontColor) {
        if (text.fontColor != fontColor)
            text.fontColor = fontColor;
    }
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
}

var foreign47 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RadarPanel
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/common/EnemyLifebar.ui
 * TIME: 2024.10.27-00.04.44
 */
let EnemyLifebar_Generate = class EnemyLifebar_Generate extends UIScript {
    get mLifebarProgressBar() {
        if (!this.mLifebarProgressBar_Internal && this.uiWidgetBase) {
            this.mLifebarProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mLifebarProgressBar');
        }
        return this.mLifebarProgressBar_Internal;
    }
    get mHpTextBlock() {
        if (!this.mHpTextBlock_Internal && this.uiWidgetBase) {
            this.mHpTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mHpTextBlock');
        }
        return this.mHpTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mHpTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
EnemyLifebar_Generate = __decorate([
    UIBind('UI/common/EnemyLifebar.ui')
], EnemyLifebar_Generate);
var EnemyLifebar_Generate$1 = EnemyLifebar_Generate;

var foreign85 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: EnemyLifebar_Generate$1
});

var MonsterState;
(function (MonsterState) {
    MonsterState[MonsterState["Inactivation"] = 0] = "Inactivation";
    MonsterState[MonsterState["Activate"] = 1] = "Activate";
})(MonsterState || (MonsterState = {}));
class AnimationInfo {
    constructor() {
        // @mw.Property({ displayName: "idleAnimation", group: "AnimationInfo", tooltip: "idleAnimation" })
        this.idles = [];
        // @mw.Property({ displayName: "moveAnimation", group: "AnimationInfo", tooltip: "moveAnimation" })
        this.moves = [];
        // @mw.Property({ displayName: "attackAnimation", group: "AnimationInfo", tooltip: "attackAnimation" })
        this.attacks = [];
        // @mw.Property({ displayName: "dieAnimation", group: "AnimationInfo", tooltip: "dieAnimation" })
        this.die = "";
    }
}
class AttackInfo {
    constructor() {
        // @mw.Property({ displayName: "attackTimePoint", group: "AttackInfo", tooltip: "attackTimePoint" })
        this.attackTimePoints = [];
        // @mw.Property({ displayName: "forwardOffset", group: "AttackInfo", tooltip: "forwardOffset" })
        this.attackOffsets = [];
        // @mw.Property({ displayName: "attackRange", group: "AttackInfo", tooltip: "attackRange" })
        this.attackLengths = [];
        // @mw.Property({ displayName: "attackSize", group: "AttackInfo", tooltip: "attackSize" })
        this.attackSizes = [];
        // @mw.Property({ displayName: "damage", group: "AttackInfo", tooltip: "damage" })
        this.damages = [];
    }
}
class AttackEffectInfo {
    constructor() {
        // @mw.Property({ displayName: "effectId", group: "AttackEffectInfo", tooltip: "effectId" })
        this.effectIds = [];
        // @mw.Property({ displayName: "effectPos", group: "AttackEffectInfo", tooltip: "effectPos" })
        this.posOffsets = [];
        // @mw.Property({ displayName: "effectRot", group: "AttackEffectInfo", tooltip: "effectRot" })
        this.rotOffsets = [];
        // @mw.Property({ displayName: "effectScale", group: "AttackEffectInfo", tooltip: "effectScale" })
        this.effectScales = [];
    }
}
class Monster extends Script {
    constructor() {
        super(...arguments);
        this.monsterId = 0;
        this.hp = 0;
        this.maxHp = 0;
        this.monsterType = 1;
        // @mw.Property({ displayName: "moveSpeed", group: "Info", tooltip: "moveSpeed" })
        this.moveSpeed = 450;
        // @mw.Property({ displayName: "pathVectors", group: "Info", tooltip: "pathVectors" })
        this.pathVectors = [mw.Vector.zero];
        // @mw.Property({ displayName: "animationInfo", group: "Info", tooltip: "animationInfo" })
        this.animationInfo = new AnimationInfo();
        // @mw.Property({ displayName: "attackInfo", group: "Info", tooltip: "attackInfo" })
        this.attackInfo = new AttackInfo();
        // @mw.Property({ displayName: "attackEffectInfo", group: "Info", tooltip: "attackEffectInfo" })
        this.attackEffectInfo = new AttackEffectInfo();
        this.monster = null;
        this.monsterState = MonsterState.Inactivation;
        this.monsterWidth = 0;
        this.cubeLifebar = null;
        this.cubeLifebarWidget = null;
        this.isInitLifebar = false;
        this.preHp = 0;
        this.playerModuleS = null;
        this.chasePlayerMap = new Map();
        this.isFollowing = false;
        this.isNavigateToing = false;
        this.attackIndex = 0;
    }
    onStart() {
        this.onStart_CS();
    }
    get getMonster() {
        if (!this.monster) {
            this.monster = this.gameObject;
        }
        return this.monster;
    }
    get getMonsterState() {
        return this.monsterState;
    }
    set setMonsterState(value) {
        this.monsterState = value;
    }
    get getMonsterHeight() {
        return this.getMonster.collisionExtent.z;
    }
    get getMonsterPostion() {
        return this.getMonster.worldTransform.position;
    }
    get getMonsterWidth() {
        if (this.monsterWidth == 0) {
            this.monsterWidth = this.getMonster.collisionExtent.x > this.getMonster.collisionExtent.y ?
                this.getMonster.collisionExtent.x : this.getMonster.collisionExtent.y;
        }
        console.error(`this.monsterWidth:${this.monsterWidth}`);
        return this.monsterWidth + 10;
    }
    async onStart_CS() {
        await this.initCharacter();
        await this.initConfig();
        if (mw.SystemUtil.isClient()) {
            this.onStart_C();
        }
        else if (mw.SystemUtil.isServer()) {
            this.onStart_S();
        }
    }
    async initCharacter() {
        await ModuleService.ready();
        this.monster = this.gameObject;
        this.monster.collisionWithOtherCharacterEnabled = false;
    }
    async initConfig() {
        let monsterElement = GameConfig.MonsterInfo.getElement(this.monsterId);
        if (!monsterElement)
            return;
        await this.initPaths(monsterElement?.PathStr);
        this.animationInfo.idles = monsterElement?.Idles;
        this.animationInfo.moves = monsterElement?.Moves;
        this.animationInfo.attacks = monsterElement?.Attacks;
        this.animationInfo.die = monsterElement?.Die;
        this.attackInfo.attackTimePoints = monsterElement?.AttackTimePoints;
        this.attackInfo.attackOffsets = monsterElement?.AttackOffsets;
        this.attackInfo.attackLengths = monsterElement?.AttackLengths;
        this.attackInfo.attackSizes = monsterElement?.AttackSizes;
        this.attackInfo.damages = monsterElement?.Damages;
        this.attackEffectInfo.effectIds = monsterElement?.EffectIds;
        this.attackEffectInfo.posOffsets = monsterElement?.EffectPosOffsets;
        monsterElement?.EffectRotOffsets?.forEach((value) => {
            this.attackEffectInfo.rotOffsets.push(new mw.Rotation(value));
        });
        this.attackEffectInfo.effectScales = monsterElement?.EffectScales;
        this.moveSpeed = monsterElement?.MoveSpeed;
    }
    async initPaths(pathStr = null) {
        // if (!pathStr || pathStr.length == 0) pathStr = GameConfig.MonsterInfo.getElement(this.monsterId)?.PathStr;
        // let pathParent = await mw.GameObject.asyncFindGameObjectById(pathStr[this.randomInt(0, pathStr.length - 1)]);
        let pathParent = await mw.GameObject.asyncFindGameObjectById("1AE81301");
        this.pathVectors.length = 0;
        pathParent?.getChildren().forEach((child) => {
            this.pathVectors.push(child.worldTransform.position);
        });
    }
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdate_C(dt);
        }
        else if (mw.SystemUtil.isServer()) {
            this.onUpdate_S(dt);
        }
    }
    async onStart_C() {
        this.useUpdate = false;
        this.initEvent_C();
        this.preHp = Math.floor(this.maxHp);
        this.initLifebar();
        UIService.getUI(RadarPanel).setNpcPoint(this.getMonster);
        this.getMonster.setOutline(true, mw.LinearColor.red, 0.5);
    }
    initEvent_C() {
        Event.addServerListener("DrawDebug", this.bindDrawDebug_C.bind(this));
    }
    bindDrawDebug_C(start, end, halfSize) {
        // console.error(`DrawDebug`);
        mw.PhysicsService.boxTraceMulti(start, end, halfSize, mw.Rotation.zero, { objectsToIgnore: [this.getMonster] }, {
            isDrawDebug: mw.SystemUtil.isPIE,
            duration: 1,
            traceColor: mw.LinearColor.red,
            hitColor: mw.LinearColor.green,
            thickness: 3
        });
    }
    async initLifebar() {
        this.cubeLifebar = UIService.create(EnemyLifebar_Generate$1);
        this.cubeLifebarWidget = await mw.GameObject.asyncSpawn("UIWidget", {
            replicates: false
        });
        this.cubeLifebarWidget.setTargetUIWidget(this.cubeLifebar.uiWidgetBase);
        this.cubeLifebarWidget.widgetSpace = mw.WidgetSpaceMode.OverheadUI;
        this.getMonster.attachToSlot(this.cubeLifebarWidget, mw.HumanoidSlotType.Rings);
        this.cubeLifebarWidget.occlusionEnable = false;
        this.cubeLifebarWidget.scaledByDistanceEnable = true;
        this.cubeLifebarWidget.hideByDistanceEnable = true;
        this.cubeLifebarWidget.headUIMaxVisibleDistance = 10000;
        this.isInitLifebar = true;
        this.onHpChanged();
    }
    onHpChanged() {
        if (!this.isInitLifebar)
            return;
        if (this.preHp <= 0)
            this.preHp = Math.floor(this.maxHp);
        let damage = this.preHp - this.hp;
        if (damage > 0)
            this.preHp = this.hp;
        this.cubeLifebar.mLifebarProgressBar.percent = this.hp / this.maxHp;
        this.cubeLifebar.mHpTextBlock.text = `${Math.floor(this.hp)}/${Math.floor(this.maxHp)}`;
        if (this.hp <= 0) {
            if (this.cubeLifebarWidget.getVisibility()) {
                this.cubeLifebarWidget.setVisibility(false);
            }
        }
        else if (this.hp >= this.maxHp) {
            if (!this.cubeLifebarWidget.getVisibility()) {
                this.cubeLifebarWidget.setVisibility(true);
            }
        }
    }
    onUpdate_C(dt) {
    }
    get getPlayerModuleS() {
        if (this.playerModuleS == null) {
            this.playerModuleS = ModuleService.getModule(PlayerModuleS);
        }
        return this.playerModuleS;
    }
    async onStart_S() {
        this.useUpdate = false;
        this.initEvent_S();
        await this.activate_S();
    }
    initEvent_S() {
        PrefabEvent.PrefabEvtFight.onHit(this.playerAtkEnemy_S.bind(this));
    }
    playerAtkEnemy_S(senderGuid, targetGuid, damage, hitPoint) {
        // console.error(`this.getMonster.gameObjectId:${this.getMonster.gameObjectId} targetGuid:${targetGuid}`);
        if (this.getMonster.gameObjectId != targetGuid || this.getMonsterState == MonsterState.Inactivation)
            return;
        if (this.hp <= 0) {
            this.hp = 0;
            return;
        }
        this.updateChasePlayer(senderGuid, damage);
        let tmpHp = this.hp - damage;
        if (tmpHp > 0) {
            this.hp = tmpHp;
        }
        else {
            this.hp = 0;
            this.die_S();
            this.getPlayerModuleS.playerKillNpc(senderGuid);
        }
        this.getPlayerModuleS.playerAtkNpcFlyText(senderGuid, hitPoint, damage);
    }
    async die_S() {
        this.dieReset_S();
        //die effect
        let dieAni = await this.playDieAni_S();
        let dieTime = 0;
        if (dieAni) {
            dieTime = dieAni.length;
        }
        else {
            dieTime = 1;
            this.getMonster?.currentAnimation?.stop();
            if (!this.getMonster.ragdollEnabled)
                this.getMonster.ragdollEnabled = true;
        }
        TimeUtil.delaySecond(dieTime).then(() => { this.rebirth_S(); });
    }
    dieReset_S() {
        this.setMonsterState = MonsterState.Inactivation;
        Navigation.stopNavigateTo(this.getMonster);
        Navigation.stopFollow(this.getMonster);
        this.isFollowing = false;
        this.isNavigateToing = false;
        this.chasePlayerMap.clear();
    }
    rebirth_S() {
        let rebirthEffectPos = new mw.Vector(this.getMonsterPostion.x, this.getMonsterPostion.y, this.getMonsterPostion.z - this.getMonsterHeight / 2);
        let rebirthEffect = EffectService.playAtPosition("142948", rebirthEffectPos, { loopCount: 0 });
        // this.initPaths();
        TimeUtil.delaySecond(this.randomInt(5, 10)).then(async () => {
            EffectService.stop(rebirthEffect);
            EffectService.playOnGameObject("142750", this.getMonster, { slotType: mw.HumanoidSlotType.Root });
            this.hp = this.maxHp;
            if (this.getMonster.ragdollEnabled)
                this.getMonster.ragdollEnabled = false;
            this.setMonsterState = MonsterState.Activate;
            await this.playIdleAni_S();
            TimeUtil.delaySecond(this.randomInt(3, 5)).then(() => this.startNavigateTo_S());
        });
    }
    updateChasePlayer(targetGuid, damage) {
        // console.error(`targetGuid:${targetGuid} damage:${damage}`);
        let totalDamage = 0;
        if (this.chasePlayerMap.has(targetGuid)) {
            totalDamage = this.chasePlayerMap.get(targetGuid);
        }
        totalDamage += damage;
        this.chasePlayerMap.set(targetGuid, totalDamage);
        this.fromNavigateToToFollow();
    }
    deleteChasePlayer(targetGuid) {
        if (!this.chasePlayerMap.has(targetGuid))
            return;
        this.chasePlayerMap.delete(targetGuid);
    }
    getChasePlayerByMaxDamage() {
        if (!this.chasePlayerMap || this.chasePlayerMap.size == 0)
            return null;
        let maxDamage = 0;
        let targetGuid = null;
        this.chasePlayerMap.forEach((value, key) => {
            if (value > maxDamage) {
                maxDamage = value;
                targetGuid = key;
            }
        });
        let targetPlayer = null;
        Player.getAllPlayers().forEach((value) => {
            if (value.character.gameObjectId == targetGuid) {
                targetPlayer = value;
            }
        });
        return targetPlayer;
    }
    async activate_S() {
        this.hp = this.maxHp;
        await this.getMonster.asyncReady();
        this.getMonster.maxWalkSpeed = this.moveSpeed;
        this.setMonsterState = MonsterState.Activate;
        this.isFollowing = false;
        this.isNavigateToing = false;
        TimeUtil.delaySecond(this.randomInt(1, 3)).then(() => { this.playIdleAni_S(); });
        TimeUtil.delaySecond(this.randomInt(5, 15)).then(() => this.startNavigateTo_S());
    }
    async fromNavigateToToFollow() {
        if (this.isFollowing || !this.isNavigateToing)
            return;
        Navigation.stopNavigateTo(this.getMonster);
        this.isNavigateToing = false;
        await this.playIdleAni_S();
        TimeUtil.delaySecond(this.randomFloat(0.5, 1)).then(() => this.startNavigateTo_S());
    }
    async startNavigateTo_S() {
        if (this.getMonsterState != MonsterState.Activate)
            return;
        await this.playMoveAni_S();
        let targetPlayer = this.getChasePlayerByMaxDamage();
        targetPlayer ? this.chasePlayerNavigateTo_S(targetPlayer) : this.randomNavigateTo_S();
    }
    randomNavigateTo_S() {
        this.isNavigateToing = true;
        Navigation.navigateTo(this.getMonster, this.getRandomTargetPoint_S(), 0, () => {
            // console.error(`随机寻路成功`);
            this.randomNavigateToComplete_S();
        }, () => {
            // console.error(`随机寻路失败`);
            this.randomNavigateToComplete_S();
        });
    }
    async randomNavigateToComplete_S() {
        this.isNavigateToing = false;
        await this.playIdleAni_S();
        TimeUtil.delaySecond(this.randomInt(1, 3)).then(() => { this.randomAttack_S(); });
    }
    chasePlayerNavigateTo_S(targetPlayer) {
        let dis = mw.Vector.distance(this.getMonster.worldTransform.position, targetPlayer.character.worldTransform.position);
        console.error(`dis:${dis}`);
        if (dis > this.getMonsterWidth) {
            this.directChasePlayerNavigateTo_S(targetPlayer);
        }
        else {
            this.directRandomAttack_S(targetPlayer);
        }
    }
    directChasePlayerNavigateTo_S(targetPlayer) {
        let isFollowSuccess = Navigation.follow(this.getMonster, targetPlayer.character, 0, () => {
            // console.error(`追踪寻路成功 dis = ${mw.Vector.distance(this.getMonster.worldTransform.position,
            //     targetPlayer.character.worldTransform.position)}`);
            this.chasePlayerNavigateToComplete_S(targetPlayer);
        }, () => {
            // console.error(`追踪寻路失败`);
            this.deleteChasePlayer(targetPlayer.character.gameObjectId);
            this.chasePlayerNavigateToComplete_S(targetPlayer);
        });
        // console.error(`isFollowSuccess: ${isFollowSuccess}`);
        if (isFollowSuccess) {
            this.isFollowing = true;
            return;
        }
        this.deleteChasePlayer(targetPlayer.character.gameObjectId);
        this.chasePlayerNavigateToComplete_S(targetPlayer);
    }
    async directRandomAttack_S(targetPlayer) {
        await this.playIdleAni_S();
        this.getMonster.lookAt(targetPlayer.character.worldTransform.position);
        TimeUtil.delaySecond(this.randomFloat(0.5, 1)).then(() => { this.randomAttack_S(); });
    }
    async chasePlayerNavigateToComplete_S(targetPlayer) {
        Navigation.stopFollow(this.getMonster);
        this.isFollowing = false;
        await this.playIdleAni_S();
        this.getMonster.lookAt(targetPlayer.character.worldTransform.position);
        TimeUtil.delaySecond(this.randomFloat(0.5, 1)).then(() => { this.randomAttack_S(); });
    }
    getRandomTargetPoint_S() {
        let targetVector = this.pathVectors[Utils.getPathIndex(this.pathVectors.length)];
        let targetPos = Navigation.getRandomReachablePointInRadius(targetVector, 500);
        return (!targetPos) ? targetVector : targetPos;
    }
    async randomAttack_S() {
        if (this.getMonsterState != MonsterState.Activate)
            return;
        this.attackIndex = this.randomInt(0, this.animationInfo.attacks.length - 1);
        let attackAni = await this.playAtkAni_S();
        let attackTime = attackAni.length;
        TimeUtil.delaySecond(this.attackInfo.attackTimePoints[this.attackIndex]).then(() => { this.randomAttackCheck_S(); });
        TimeUtil.delaySecond(attackTime).then(() => { this.playIdleAni_S(); });
        TimeUtil.delaySecond(attackTime + this.randomInt(1, 3)).then(() => this.startNavigateTo_S());
    }
    randomAttackCheck_S() {
        if (this.getMonsterState != MonsterState.Activate)
            return;
        this.attackEffect_S();
        let monsterPos = this.getMonster.worldTransform.position;
        let attackOffset = this.attackInfo.attackOffsets[this.attackIndex];
        let startForwardOffset = this.getMonster.worldTransform.getForwardVector().multiply(attackOffset.y);
        let start = new mw.Vector(monsterPos.x + startForwardOffset.x + attackOffset.x, monsterPos.y + startForwardOffset.y, monsterPos.z + startForwardOffset.z + attackOffset.z);
        let endForwardOffset = this.getMonster.worldTransform.getForwardVector().multiply(this.attackInfo.attackLengths[this.attackIndex]);
        let end = new mw.Vector(monsterPos.x + endForwardOffset.x, monsterPos.y + endForwardOffset.y, monsterPos.z + endForwardOffset.z);
        let hitResults = mw.PhysicsService.boxTraceMulti(start, end, this.attackInfo.attackSizes[this.attackIndex], mw.Rotation.zero, { objectsToIgnore: [this.getMonster] }, {});
        if (mw.SystemUtil.isPIE)
            Event.dispatchToAllClient("DrawDebug", start, end, this.attackInfo.attackSizes[this.attackIndex]);
        if (!hitResults || hitResults.length == 0)
            return;
        for (let i = 0; i < hitResults.length; ++i) {
            let hitGo = hitResults[i].gameObject;
            if (hitGo instanceof mw.Character && hitGo?.player) {
                let targetGameObjectId = hitGo?.gameObjectId;
                PrefabEvent.PrefabEvtFight.hurt(this.getMonster.gameObjectId, targetGameObjectId, 10);
            }
        }
    }
    attackEffect_S() {
        let monsterPos = this.getMonster.worldTransform.position;
        let effectOffset = this.attackEffectInfo.posOffsets[this.attackIndex];
        let monsterRot = this.getMonster.worldTransform.rotation;
        let effectLocalOffset = monsterRot.rotateVector(effectOffset);
        let effectPos = new mw.Vector(monsterPos.x + effectLocalOffset.x, monsterPos.y + effectLocalOffset.y, monsterPos.z + effectLocalOffset.z);
        let rotOffset = this.attackEffectInfo.rotOffsets[this.attackIndex];
        let constructorRot = new mw.Rotation(this.getMonster.worldTransform.getForwardVector(), mw.Vector.up);
        let effectRot = new mw.Rotation(constructorRot.x + rotOffset.x, constructorRot.y + rotOffset.y, constructorRot.z + rotOffset.z);
        EffectService.playAtPosition(this.attackEffectInfo.effectIds[this.attackIndex], effectPos, {
            loopCount: 1,
            rotation: effectRot,
            scale: this.attackEffectInfo.effectScales[this.attackIndex]
        });
    }
    onUpdate_S(dt) {
    }
    async playIdleAni_S() {
        let idle = this.animationInfo.idles[this.randomInt(0, this.animationInfo.idles.length - 1)];
        await this.asyncDownloadAsset(idle);
        if (this.getMonsterState != MonsterState.Activate)
            return;
        let idleAni = this.getMonster.loadAnimation(idle);
        idleAni.loop = 0;
        idleAni.play();
    }
    async playMoveAni_S() {
        let move = this.animationInfo.moves[this.randomInt(0, this.animationInfo.moves.length - 1)];
        await this.asyncDownloadAsset(move);
        if (this.getMonsterState != MonsterState.Activate)
            return;
        let moveAni = this.getMonster.loadAnimation(move);
        moveAni.loop = 0;
        moveAni.play();
    }
    async playAtkAni_S() {
        await this.asyncDownloadAsset(this.animationInfo.attacks[this.attackIndex]);
        if (this.getMonsterState != MonsterState.Activate)
            return null;
        let attackAni = this.getMonster.loadAnimation(this.animationInfo.attacks[this.attackIndex]);
        attackAni.play();
        return attackAni;
    }
    async playDieAni_S() {
        let die = this.animationInfo.die;
        if (die != "-1") {
            await this.asyncDownloadAsset(die);
            let dieAni = this.getMonster.loadAnimation(die);
            dieAni.play();
            return dieAni;
        }
        return null;
    }
    randomInt(min, max) {
        if (min > max) {
            let temp = min;
            min = max;
            max = temp;
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    randomFloat(min, max) {
        if (min > max) {
            let temp = min;
            min = max;
            max = temp;
        }
        return Number((Math.random() * (max - min) + min).toFixed(1));
    }
    async asyncDownloadAsset(InAssetId) {
        if (!mw.AssetUtil.assetLoaded(InAssetId)) {
            await mw.AssetUtil.asyncDownloadAsset(InAssetId);
        }
    }
}
__decorate([
    mw.Property({ displayName: "monsterId", group: "Info", tooltip: "monsterId" })
], Monster.prototype, "monsterId", void 0);
__decorate([
    mw.Property({ displayName: "hp", group: "Info", tooltip: "hp", replicated: true, onChanged: "onHpChanged" })
], Monster.prototype, "hp", void 0);
__decorate([
    mw.Property({ displayName: "maxHp", group: "Info", tooltip: "maxHp", replicated: true, onChanged: "onHpChanged" })
], Monster.prototype, "maxHp", void 0);
__decorate([
    mw.Property({ displayName: "monsterType", group: "Info", tooltip: "monsterType" })
], Monster.prototype, "monsterType", void 0);

var foreign2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AnimationInfo: AnimationInfo,
    AttackEffectInfo: AttackEffectInfo,
    AttackInfo: AttackInfo,
    get MonsterState () { return MonsterState; },
    default: Monster
});

let setTag = class setTag extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        if (mw.SystemUtil.isClient()) {
            this.findChild(this.gameObject);
        }
    }
    findChild(obj) {
        obj.tag = `go`;
        if (obj.getChildren().length > 0) {
            obj.getChildren().forEach((value) => {
                this.findChild(value);
            });
        }
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    onUpdate(dt) {
    }
    /** 脚本被销毁时最后一帧执行完调用此函数 */
    onDestroy() {
    }
};
setTag = __decorate([
    Component
], setTag);
var setTag$1 = setTag;

var foreign7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: setTag$1
});

class ActivityData extends Subdata {
    constructor() {
        super(...arguments);
        this.whatDay = 0;
        this.minutes = 0;
    }
    initDefaultData() {
        this.whatDay = 0;
        this.minutes = 0;
    }
    setData(whatDay) {
        this.whatDay = whatDay;
        this.minutes = 0;
        this.save(true);
    }
    setMinutes(minutes) {
        this.minutes = minutes;
        this.save(true);
    }
}
__decorate([
    Decorator.persistence()
], ActivityData.prototype, "whatDay", void 0);
__decorate([
    Decorator.persistence()
], ActivityData.prototype, "minutes", void 0);

var foreign21 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ActivityData
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/ShopModule/ShopPanel.ui
 * TIME: 2024.10.27-00.04.45
 */
let ShopPanel_Generate = class ShopPanel_Generate extends UIScript {
    get mTabCanvas() {
        if (!this.mTabCanvas_Internal && this.uiWidgetBase) {
            this.mTabCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas');
        }
        return this.mTabCanvas_Internal;
    }
    get mTabButton_0() {
        if (!this.mTabButton_0_Internal && this.uiWidgetBase) {
            this.mTabButton_0_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_0');
        }
        return this.mTabButton_0_Internal;
    }
    get mTabTextBlock_0() {
        if (!this.mTabTextBlock_0_Internal && this.uiWidgetBase) {
            this.mTabTextBlock_0_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_0/mTabTextBlock_0');
        }
        return this.mTabTextBlock_0_Internal;
    }
    get mTabButton_1() {
        if (!this.mTabButton_1_Internal && this.uiWidgetBase) {
            this.mTabButton_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_1');
        }
        return this.mTabButton_1_Internal;
    }
    get mTabTextBlock_1() {
        if (!this.mTabTextBlock_1_Internal && this.uiWidgetBase) {
            this.mTabTextBlock_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_1/mTabTextBlock_1');
        }
        return this.mTabTextBlock_1_Internal;
    }
    get mTabButton_2() {
        if (!this.mTabButton_2_Internal && this.uiWidgetBase) {
            this.mTabButton_2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_2');
        }
        return this.mTabButton_2_Internal;
    }
    get mTabTextBlock_2() {
        if (!this.mTabTextBlock_2_Internal && this.uiWidgetBase) {
            this.mTabTextBlock_2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mTabCanvas/mTabButton_2/mTabTextBlock_2');
        }
        return this.mTabTextBlock_2_Internal;
    }
    get mScrollBox() {
        if (!this.mScrollBox_Internal && this.uiWidgetBase) {
            this.mScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mScrollBox');
        }
        return this.mScrollBox_Internal;
    }
    get mContentCanvas() {
        if (!this.mContentCanvas_Internal && this.uiWidgetBase) {
            this.mContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightCanvas/mScrollBox/mContentCanvas');
        }
        return this.mContentCanvas_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCloseButton');
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mTabButton_0.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mTabButton_0");
        });
        this.mTabButton_0.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mTabButton_1.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mTabButton_1");
        });
        this.mTabButton_1.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mTabButton_2.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mTabButton_2");
        });
        this.mTabButton_2.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        });
        this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mTabTextBlock_0);
        this.initLanguage(this.mTabTextBlock_1);
        this.initLanguage(this.mTabTextBlock_2);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
ShopPanel_Generate = __decorate([
    UIBind('UI/module/ShopModule/ShopPanel.ui')
], ShopPanel_Generate);
var ShopPanel_Generate$1 = ShopPanel_Generate;

var foreign104 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ShopPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/ShopModule/ShopItem.ui
 * TIME: 2024.10.27-00.04.45
 */
let ShopItem_Generate = class ShopItem_Generate extends UIScript {
    get mICONImage() {
        if (!this.mICONImage_Internal && this.uiWidgetBase) {
            this.mICONImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mICONImage');
        }
        return this.mICONImage_Internal;
    }
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mNameTextBlock');
        }
        return this.mNameTextBlock_Internal;
    }
    get mHasTypeTextBlock() {
        if (!this.mHasTypeTextBlock_Internal && this.uiWidgetBase) {
            this.mHasTypeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mHasTypeTextBlock');
        }
        return this.mHasTypeTextBlock_Internal;
    }
    get mHasTextBlock() {
        if (!this.mHasTextBlock_Internal && this.uiWidgetBase) {
            this.mHasTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mHasTextBlock');
        }
        return this.mHasTextBlock_Internal;
    }
    get mPreButton() {
        if (!this.mPreButton_Internal && this.uiWidgetBase) {
            this.mPreButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPreButton');
        }
        return this.mPreButton_Internal;
    }
    get mPropCanvas() {
        if (!this.mPropCanvas_Internal && this.uiWidgetBase) {
            this.mPropCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPropCanvas');
        }
        return this.mPropCanvas_Internal;
    }
    get mHurtCanvas() {
        if (!this.mHurtCanvas_Internal && this.uiWidgetBase) {
            this.mHurtCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPropCanvas/mHurtCanvas');
        }
        return this.mHurtCanvas_Internal;
    }
    get mHurtTextBlock() {
        if (!this.mHurtTextBlock_Internal && this.uiWidgetBase) {
            this.mHurtTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPropCanvas/mHurtCanvas/mHurtTextBlock');
        }
        return this.mHurtTextBlock_Internal;
    }
    get mBulletCanvas() {
        if (!this.mBulletCanvas_Internal && this.uiWidgetBase) {
            this.mBulletCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPropCanvas/mBulletCanvas');
        }
        return this.mBulletCanvas_Internal;
    }
    get mBulletCountTextBlock() {
        if (!this.mBulletCountTextBlock_Internal && this.uiWidgetBase) {
            this.mBulletCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mPropCanvas/mBulletCanvas/mBulletCountTextBlock');
        }
        return this.mBulletCountTextBlock_Internal;
    }
    get mBuyCanvas() {
        if (!this.mBuyCanvas_Internal && this.uiWidgetBase) {
            this.mBuyCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas');
        }
        return this.mBuyCanvas_Internal;
    }
    get mDiamondBuyCanvas() {
        if (!this.mDiamondBuyCanvas_Internal && this.uiWidgetBase) {
            this.mDiamondBuyCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mDiamondBuyCanvas');
        }
        return this.mDiamondBuyCanvas_Internal;
    }
    get mDiamondBuyButton() {
        if (!this.mDiamondBuyButton_Internal && this.uiWidgetBase) {
            this.mDiamondBuyButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mDiamondBuyCanvas/mDiamondBuyButton');
        }
        return this.mDiamondBuyButton_Internal;
    }
    get mDiamondBuyTextBlock() {
        if (!this.mDiamondBuyTextBlock_Internal && this.uiWidgetBase) {
            this.mDiamondBuyTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mDiamondBuyCanvas/mDiamondBuyTextBlock');
        }
        return this.mDiamondBuyTextBlock_Internal;
    }
    get mCoinBuyCanvas() {
        if (!this.mCoinBuyCanvas_Internal && this.uiWidgetBase) {
            this.mCoinBuyCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mCoinBuyCanvas');
        }
        return this.mCoinBuyCanvas_Internal;
    }
    get mCoinBuyButton() {
        if (!this.mCoinBuyButton_Internal && this.uiWidgetBase) {
            this.mCoinBuyButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mCoinBuyCanvas/mCoinBuyButton');
        }
        return this.mCoinBuyButton_Internal;
    }
    get mCoinPriceTextBlock() {
        if (!this.mCoinPriceTextBlock_Internal && this.uiWidgetBase) {
            this.mCoinPriceTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyCanvas/mCoinBuyCanvas/mCoinPriceTextBlock');
        }
        return this.mCoinPriceTextBlock_Internal;
    }
    get mUseCanvas() {
        if (!this.mUseCanvas_Internal && this.uiWidgetBase) {
            this.mUseCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mUseCanvas');
        }
        return this.mUseCanvas_Internal;
    }
    get mUseButton() {
        if (!this.mUseButton_Internal && this.uiWidgetBase) {
            this.mUseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mUseCanvas/mUseButton');
        }
        return this.mUseButton_Internal;
    }
    get mUesTextBlock() {
        if (!this.mUesTextBlock_Internal && this.uiWidgetBase) {
            this.mUesTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mUseCanvas/mUesTextBlock');
        }
        return this.mUesTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mPreButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mPreButton");
        });
        this.mPreButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mDiamondBuyButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mDiamondBuyButton");
        });
        this.mDiamondBuyButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCoinBuyButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCoinBuyButton");
        });
        this.mCoinBuyButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mUseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mUseButton");
        });
        this.mUseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mNameTextBlock);
        this.initLanguage(this.mHasTypeTextBlock);
        this.initLanguage(this.mHasTextBlock);
        this.initLanguage(this.mHurtTextBlock);
        this.initLanguage(this.mBulletCountTextBlock);
        this.initLanguage(this.mDiamondBuyTextBlock);
        this.initLanguage(this.mCoinPriceTextBlock);
        this.initLanguage(this.mUesTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
ShopItem_Generate = __decorate([
    UIBind('UI/module/ShopModule/ShopItem.ui')
], ShopItem_Generate);
var ShopItem_Generate$1 = ShopItem_Generate;

var foreign103 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ShopItem_Generate$1
});

class ShopItem extends ShopItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.shopModuleC = null;
        this.confirmPanel = null;
        this.key = null;
        this.shopType = null;
        this.isHas = false;
    }
    get getShopModuleC() {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initModule();
        this.initUIPanel();
        this.bindBUttons();
        this.initTextBlock();
    }
    initTextBlock() {
        this.mUesTextBlock.text = GameConfig.Language.Use.Value;
    }
    initModule() {
        this.shopModuleC = ModuleService.getModule(ShopModuleC);
    }
    initUIPanel() {
        this.confirmPanel = UIService.getUI(ConfirmPanel);
    }
    bindBUttons() {
        this.mCoinBuyButton.onClicked.add(this.onClickCoinBuyButton.bind(this));
        this.mDiamondBuyButton.onClicked.add(this.onClickDiamondBuyButton.bind(this));
        this.mUseButton.onClicked.add(this.onClickUseButton.bind(this));
        this.mPreButton.onClicked.add(this.onClickPreButton.bind(this));
    }
    onClickCoinBuyButton() {
        if (!this.isCanSuccessfulClick())
            return;
        this.getShopModuleC.previewShopItem(this.key, this.shopType);
        let contentText = `<size=80>${GameConfig.Language.ConfirmExpenses.Value}</size>\n` + "<size=100><color=#yellow>" + this.getShopModuleC.getGoodPrice(this.key, this.shopType)[1] + `</color></size><size=80>${GameConfig.Language.GoldCoins.Value}</size>`;
        this.getConfirmPanel.confirmTips(() => {
            if (!this.getShopModuleC.buyShopItemByCoin(this.key, this.shopType))
                return;
            this.buyCompleted();
            this.getConfirmPanel.confirmTips(() => {
                this.getShopModuleC.useShopItem(this.key, this.shopType);
            }, GameConfig.Language.DoYouWantToUseItImmediately.Value, GameConfig.Language.Yes.Value, GameConfig.Language.No.Value, GameConfig.Language.Tips.Value);
        }, contentText, GameConfig.Language.Buy.Value, GameConfig.Language.Cancel.Value, GameConfig.Language.Tips.Value);
    }
    onClickDiamondBuyButton() {
        if (!this.isCanSuccessfulClick())
            return;
        this.getShopModuleC.previewShopItem(this.key, this.shopType);
        let contentText = `<size=80>${GameConfig.Language.ConfirmExpenses.Value}</size>\n` + "<size=100><color=#blue>" + this.getShopModuleC.getGoodPrice(this.key, this.shopType)[0] + `</color></size><size=80>${GameConfig.Language.Diamonds.Value}</size>`;
        this.getConfirmPanel.confirmTips(() => {
            if (!this.getShopModuleC.buyShopItemByDiamond(this.key, this.shopType))
                return;
            this.buyCompleted();
            this.getConfirmPanel.confirmTips(() => {
                this.getShopModuleC.useShopItem(this.key, this.shopType);
            }, GameConfig.Language.DoYouWantToUseItImmediately.Value, GameConfig.Language.Yes.Value, GameConfig.Language.No.Value, GameConfig.Language.Tips.Value);
        }, contentText, GameConfig.Language.Buy.Value, GameConfig.Language.Cancel.Value, GameConfig.Language.Tips.Value);
    }
    onClickUseButton() {
        if (!this.isCanSuccessfulClick())
            return;
        this.getShopModuleC.useShopItem(this.key, this.shopType);
    }
    onClickPreButton() {
        if (!this.isCanSuccessfulClick())
            return;
        this.getShopModuleC.previewShopItem(this.key, this.shopType);
    }
    buyCompleted() {
        this.isHas = true;
        this.mHasTextBlock.text = this.isHas ? GameConfig.Language.Obtained.Value : GameConfig.Language.NotObtained.Value;
        this.updateHasState();
    }
    isCanSuccessfulClick() {
        if (this.key == null || this.shopType == null) {
            Notice.showDownNotice(GameConfig.Language.Error.Value);
            return false;
        }
        return true;
    }
    setData(key, shopType) {
        this.key = key;
        this.shopType = shopType;
        this.isHas = this.getShopModuleC.isHasShopId(this.key, this.shopType);
        this.mHasTextBlock.text = this.isHas ? GameConfig.Language.Obtained.Value : GameConfig.Language.NotObtained.Value;
        switch (this.shopType) {
            case ShopType.Gun:
                this.setGun(key);
                break;
            case ShopType.Role:
                this.setRole(key);
                break;
            case ShopType.Trailing:
                this.setTrailing(key);
                break;
        }
        Utils.setWidgetVisibility(this.mPropCanvas, shopType == ShopType.Gun ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        this.updateHasState();
    }
    setGun(key) {
        let weaponPropElement = GameConfig.WeaponProp.getElement(key);
        this.setIcon(weaponPropElement.WeaponIcon, true);
        if (key == 1)
            this.mICONImage.renderScale = mw.Vector2.one.multiply(0.8);
        else if (key == 14)
            this.mICONImage.renderTransformAngle = 90;
        else {
            this.mICONImage.renderScale = mw.Vector2.one;
            this.mICONImage.renderTransformAngle = 0;
        }
        this.mNameTextBlock.text = weaponPropElement.WeaponName;
        this.mHasTypeTextBlock.text = weaponPropElement.PriceType == PriceType.Ads ? GameConfig.Language.TimeLimited.Value : GameConfig.Language.Permanent.Value;
        this.mHurtTextBlock.text = `${GameConfig.Language.Hurt.Value}:` + weaponPropElement.Damage;
        this.mBulletCountTextBlock.text = `${GameConfig.Language.Bullet.Value}:` + weaponPropElement.BulletCount + "/∞";
        if (this.isHas)
            return;
        this.updatePrice(weaponPropElement.PriceType, weaponPropElement.WeaponPrices);
    }
    setRole(key) {
        let roleElement = GameConfig.ROLE.getElement(key);
        this.setIcon(roleElement.ROLEID, false);
        this.mICONImage.renderScale = mw.Vector2.one;
        this.mICONImage.renderTransformAngle = 0;
        this.mNameTextBlock.text = roleElement.NAME;
        this.mHasTypeTextBlock.text = roleElement.PRICETYPE == PriceType.Ads ? GameConfig.Language.TimeLimited.Value : GameConfig.Language.Permanent.Value;
        if (this.isHas)
            return;
        this.updatePrice(roleElement.PRICETYPE, roleElement.PRICE);
    }
    setTrailing(key) {
        let trailingElement = GameConfig.TRAILING.getElement(key);
        this.setIcon(trailingElement.TRAILING, false);
        this.mICONImage.renderScale = mw.Vector2.one;
        this.mICONImage.renderTransformAngle = 0;
        this.mNameTextBlock.text = trailingElement.NAME;
        this.mHasTypeTextBlock.text = trailingElement.PRICETYPE == PriceType.Ads ? GameConfig.Language.TimeLimited.Value : GameConfig.Language.Permanent.Value;
        if (this.isHas)
            return;
        this.updatePrice(trailingElement.PRICETYPE, trailingElement.PRICE);
    }
    setIcon(guid, isGunIcon) {
        Utils.setImageByAssetIconData(this.mICONImage, guid);
        let size = new mw.Vector2(200, 200);
        let position = new mw.Vector2(100, 0);
        if (isGunIcon) {
            size = new mw.Vector2(300, 300);
            position = new mw.Vector2(50, -50);
        }
        this.mICONImage.size = size;
        this.mICONImage.position = position;
    }
    updateHasState() {
        Utils.setWidgetVisibility(this.mUseCanvas, this.isHas ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mBuyCanvas, this.isHas ? mw.SlateVisibility.Collapsed : mw.SlateVisibility.SelfHitTestInvisible);
    }
    updatePrice(priceType, prices) {
        if (priceType == PriceType.Ads) {
            Utils.setWidgetVisibility(this.mCoinBuyCanvas, mw.SlateVisibility.Collapsed);
            this.mDiamondBuyCanvas.position = new mw.Vector2(111, 0);
        }
        else {
            Utils.setWidgetVisibility(this.mCoinBuyCanvas, mw.SlateVisibility.SelfHitTestInvisible);
            this.mDiamondBuyCanvas.position = new mw.Vector2(0, 0);
            // console.error(this.key + "," + this.shopType);
            this.mCoinPriceTextBlock.text = prices[1] + "";
        }
        this.mDiamondBuyTextBlock.text = prices[0] + "";
    }
}

var foreign57 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ShopItem
});

class ShopPanel extends ShopPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.shopModuleC = null;
        this.shopTypes = [15, 34, 63];
        this.mTabButtons = [];
        this.currentShopType = ShopType.Gun;
        this.currentTabButton = null;
        this.shopItems = [];
        //#region Rotete-Camera
        // protected onShow(...params: any[]): void {
        // 	this.canUpdate = true;
        // 	TouchScript.instance.addScreenListener(this.mTouchImage, this.onMoveTouchEvent.bind(this), false);
        // }
        // protected onHide(): void {
        // 	this.canUpdate = false;
        // 	TouchScript.instance.removeScreenListener(this.mTouchImage);
        // }
        // private initShopNpc(): void {
        // 	this.moveVec = [];
        // 	mw.TimeUtil.delayExecute(() => {
        // 		this.movePos = this.mTouchImage.position.multiply(1);
        // 	}, 3)
        // }
        // private moveId: number = -1;
        // private moveVec: number[] = [];
        // private dir: number = 0;
        // private movePos: mw.Vector2;
        // private onMoveTouchEvent = (widget: mw.Widget, event: Enums.TouchEvent, x: number, y: number, inPointerEvent: mw.PointerEvent) => {
        // 	if (this.movePos) {
        // 		if (event == Enums.TouchEvent.DOWN) {
        // 			if (this.moveId < 0) {
        // 				this.moveId = inPointerEvent.pointerIndex;
        // 				this.moveVec[0] = x;
        // 				this.moveVec[1] = y;
        // 			}
        // 		} else if (event == Enums.TouchEvent.MOVE) {
        // 			if (this.moveId >= 0) {
        // 				let xoffset = x - this.moveVec[0];
        // 				let yoffset = y - this.moveVec[1];
        // 				this.dir = 0;
        // 				if (Math.abs(xoffset) > Math.abs(yoffset)) {
        // 					this.dir = Math.floor(xoffset);
        // 				}
        // 				this.moveVec[0] = x;
        // 				this.moveVec[1] = y;
        // 			}
        // 		} else if (event == Enums.TouchEvent.UP) {
        // 			if (this.moveId >= 0) {
        // 				this.moveId = -1;
        // 				this.dir = 0;
        // 			}
        // 		}
        // 	}
        // }
        // protected onUpdate(dt: number): void {
        // 	if (this.dir != 0) {
        // 		this.getShopModuleC.addRoatation(this.dir * dt);
        // 		this.dir = 0;
        // 	}
        // }
        // onTouchStarted(inGemory: mw.Geometry, inPointerEvent: mw.PointerEvent): mw.EventReply {
        // 	return TouchScript.instance.onTouchStarted(inGemory, inPointerEvent);
        // }
        // onTouchMoved(inGemory: mw.Geometry, inPointerEvent: mw.PointerEvent): mw.EventReply {
        // 	return TouchScript.instance.onTouchMoved(inGemory, inPointerEvent);
        // }
        // onTouchEnded(inGemory: mw.Geometry, inPointerEvent: mw.PointerEvent): mw.EventReply {
        // 	return TouchScript.instance.onTouchEnded(inGemory, inPointerEvent);
        // }
        //#endregion
    }
    get getShopModuleC() {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.initModule();
        // this.initUIPanel();
        this.bindButtons();
        this.initTextBlock();
    }
    initTextBlock() {
        this.mTabTextBlock_0.text = GameConfig.Language.Weapon.Value;
        this.mTabTextBlock_1.text = GameConfig.Language.Skin.Value;
        this.mTabTextBlock_2.text = GameConfig.Language.Trailing.Value;
        if (GlobalData.languageId == 0) {
            this.mTabTextBlock_0.fontSize = 40;
            this.mTabTextBlock_1.fontSize = 40;
            this.mTabTextBlock_2.fontSize = 40;
        }
    }
    initModule() {
        this.shopModuleC = ModuleService.getModule(ShopModuleC);
    }
    // private initUIPanel(): void {
    // }
    bindButtons() {
        this.mCloseButton.onClicked.add(this.onClickCloseButton.bind(this));
    }
    initUI() {
        for (let i = 0; i < this.mTabCanvas.getChildrenCount(); ++i) {
            this.mTabButtons.push(this["mTabButton_" + i]);
            this.mTabButtons[i].onClicked.add(this.onClickTabButton.bind(this, i));
        }
        this.updateTabState();
    }
    onClickTabButton(shopType) {
        // console.error(shopType);
        if (this.currentShopType == shopType)
            return;
        this.currentShopType = shopType;
        this.updateTabState();
        this.getShopModuleC.switchPreviewShopType(this.currentShopType);
    }
    onClickCloseButton() {
        // console.error("onClickCloseButton");
        this.hideTween();
        this.getShopModuleC.onSwitchCameraAction.call(0);
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
    }
    updateTabState() {
        if (this.currentTabButton)
            Utils.setButtonEnable(this.currentTabButton, true);
        this.currentTabButton = this.mTabButtons[this.currentShopType];
        Utils.setButtonEnable(this.currentTabButton, false);
        this.updateShopItem();
    }
    updateShopItem() {
        if (this.shopItems.length > this.shopTypes[this.currentShopType]) {
            for (let i = 0; i < this.shopTypes[this.currentShopType]; ++i) {
                this.shopItems[i].setData(i + 1, this.currentShopType);
                Utils.setWidgetVisibility(this.shopItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.shopTypes[this.currentShopType]; i < this.shopItems.length; ++i) {
                Utils.setWidgetVisibility(this.shopItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
        else {
            for (let i = 0; i < this.shopItems.length; ++i) {
                this.shopItems[i].setData(i + 1, this.currentShopType);
                Utils.setWidgetVisibility(this.shopItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.shopItems.length; i < this.shopTypes[this.currentShopType]; ++i) {
                let shopItem = UIService.create(ShopItem);
                shopItem.setData(i + 1, this.currentShopType);
                this.mContentCanvas.addChild(shopItem.uiObject);
                this.shopItems.push(shopItem);
            }
        }
        if (this.currentShopType == ShopType.Role) {
            Utils.setWidgetVisibility(this.shopItems[7].uiObject, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.shopItems[9].uiObject, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.shopItems[13].uiObject, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.shopItems[32].uiObject, mw.SlateVisibility.Collapsed);
        }
    }
    onShow(...params) {
        this.updateShopItem();
        Utils.openUITween(this.rootCanvas, null, null);
    }
    /**
     * 隐藏缓动
     */
    hideTween() {
        Utils.closeUITween(this.rootCanvas, null, () => {
            this.hide();
        });
    }
}

var foreign58 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ShopPanel
});

class ShopModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.coinModuleC = null;
        this.shopPanel = null;
        this.weaponModuleC = null;
        this.shopIds = {}; //1-Gun,2-Role,3-Trailing
        this.useShopIds = {}; //1-Gun,2-Role,3-Trailing
        this.onSwitchCameraAction = new Action1();
        this.shopAnchor = null;
        this.shopNpcIntegratedMover = null;
        this.gunModel = null;
        this.gunkey = null;
        this.shopNpc = null;
        this.roleKey = null;
        this.trailingAnchor = null;
        this.trailingIntegratedMover = null;
        this.trailingEffect = null;
        this.trailingKey = null;
        this.holdGun = null;
        this.holdGunModelIds = ["222534", "226213", "122720", "95676"];
        this.holdGunScales = [new mw.Vector(1.5, 1.5, 1.5), new mw.Vector(2, 2, 1.5), new mw.Vector(1, 1, 1), new mw.Vector(1, 1, 1)];
        this.lastGunModelId = "";
        this.maleAnimationIds = ["97864", "180888", "181135", "97854", "287708"];
        this.femaleAnimationIds = ["97863", "97865", "180888", "287708", "35438"];
        this.lastAnimationId = "";
        //#region Rotete-Camera
        // public addRoatation(dir: number) {
        //     if (this.npc) {
        //         this.npc.worldTransform.rotation = this.npc.worldTransform.rotation.add(new mw.Rotation(0, 0, -20 * dir))
        //     }
        // }
        //#endregion
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    get getShopPanel() {
        if (this.shopPanel == null) {
            this.shopPanel = UIService.getUI(ShopPanel);
        }
        return this.shopPanel;
    }
    get getWeaponModuleC() {
        if (!this.weaponModuleC) {
            this.weaponModuleC = ModuleService.getModule(WeaponModuleC);
        }
        return this.weaponModuleC;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.initModule();
        this.bindActions();
        this.initEvent();
    }
    initModule() {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.coinModuleC = ModuleService.getModule(CoinModuleC);
    }
    bindActions() {
        this.getHUDModuleC.onOpenShopAction.add(this.bindOpenShopAction.bind(this));
    }
    initEvent() {
        Event.addLocalListener(EventType.TryOutGun, this.setCharacterGun.bind(this));
    }
    bindOpenShopAction() {
        if (this.getHUDModuleC.getIsMorph && !this.localPlayer.character.getVisibility()) {
            Notice.showDownNotice(GameConfig.Language.TransformationStatusCannotOpenTheStore.Value);
            return;
        }
        this.getShopPanel.show();
        this.onSwitchCameraAction.call(1);
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }
    onEnterScene(sceneType) {
        this.initShopData();
        this.initShopCamera();
        this.initShopAnchor();
        this.initShopNpc();
        this.initTrailingAnchor();
    }
    initShopData() {
        this.shopIds = this.data.shopIds;
        this.useShopIds = this.data.useShopIds;
        // console.error("shopIds = " + JSON.stringify(this.shopIds));
        this.initUseShopItem();
        this.shopPanel = UIService.getUI(ShopPanel);
    }
    initUseShopItem() {
        // if (MapEx.has(this.useShopIds, ShopType.Gun)) this.setCharacterGun();
        // if (MapEx.has(this.useShopIds, ShopType.Role)) this.setCharacterDescription(MapEx.get(this.useShopIds, ShopType.Role));
        if (MapEx.has(this.useShopIds, ShopType.Trailing))
            this.setCharacterTrailing(MapEx.get(this.useShopIds, ShopType.Trailing));
    }
    isAds(shopId, shopType) {
        switch (shopType) {
            case ShopType.Gun:
                return GameConfig.WeaponProp.getElement(shopId).PriceType == PriceType.Ads;
            case ShopType.Role:
                return GameConfig.ROLE.getElement(shopId).PRICETYPE == PriceType.Ads;
            case ShopType.Trailing:
                return GameConfig.TRAILING.getElement(shopId).PRICETYPE == PriceType.Ads;
        }
    }
    setShopId(shopType, shopId) {
        if (MapEx.has(this.shopIds, shopType)) {
            MapEx.get(this.shopIds, shopType).push(shopId);
        }
        else {
            MapEx.set(this.shopIds, shopType, [shopId]);
        }
        if (this.isAds(shopId, shopType))
            return;
        this.server.net_setShopId(shopType, shopId);
    }
    isHasShopId(shopId, shopType) {
        return MapEx.has(this.shopIds, shopType) && MapEx.get(this.shopIds, shopType).includes(shopId);
    }
    buyShopItemByCoin(shopId, shopType) {
        let costPrice = this.getGoodPrice(shopId, shopType);
        if (this.getCoinModuleC.getCoin >= costPrice[1]) {
            this.getCoinModuleC.setCoin(-costPrice[1]);
            this.setShopId(shopType, shopId);
            Notice.showDownNotice(GameConfig.Language.PurchaseSuccessful.Value);
            return true;
        }
        else {
            Notice.showDownNotice(GameConfig.Language.InsufficientGoldCoins.Value);
            this.getCoinModuleC.getCoinByAd();
            return false;
        }
    }
    buyShopItemByDiamond(shopId, shopType) {
        let costPrice = this.getGoodPrice(shopId, shopType);
        if (this.getCoinModuleC.getDiamond >= costPrice[0]) {
            this.getCoinModuleC.setDiamond(-costPrice[0]);
            this.setShopId(shopType, shopId);
            Notice.showDownNotice(GameConfig.Language.PurchaseSuccessful.Value);
            return true;
        }
        else {
            Notice.showDownNotice(GameConfig.Language.DiamondShortage.Value);
            this.getCoinModuleC.getDiamondByAd(costPrice[0]);
            return false;
        }
    }
    getGoodPrice(shopId, shopType) {
        switch (shopType) {
            case ShopType.Gun:
                return GameConfig.WeaponProp.getElement(shopId).WeaponPrices;
            case ShopType.Role:
                return GameConfig.ROLE.getElement(shopId).PRICE;
            case ShopType.Trailing:
                return GameConfig.TRAILING.getElement(shopId).PRICE;
        }
    }
    useShopItem(shopId, shopType) {
        this.previewShopItem(shopId, shopType);
        if (!this.setUseShopId(shopType, shopId)) {
            Notice.showDownNotice(GameConfig.Language.WearingIt.Value);
            return;
        }
        switch (shopType) {
            case ShopType.Gun:
                // this.setCharacterGun(shopId);
                break;
            case ShopType.Role:
                this.setCharacterDescription(shopId);
                break;
            case ShopType.Trailing:
                this.setCharacterTrailing(shopId);
                break;
        }
    }
    setUseShopId_Gun(shopId) {
        if (MapEx.has(this.useShopIds, ShopType.Gun) && MapEx.get(this.useShopIds, ShopType.Gun) == shopId)
            return;
        MapEx.set(this.useShopIds, ShopType.Gun, shopId);
    }
    setUseShopId(shopType, shopId) {
        if (MapEx.has(this.useShopIds, shopType) && MapEx.get(this.useShopIds, shopType) == shopId && shopType != ShopType.Role)
            return false;
        MapEx.set(this.useShopIds, shopType, shopId);
        if (this.isAds(shopId, shopType))
            return true;
        this.server.net_setUseShopId(shopType, shopId);
        return true;
    }
    setCharacterGun() {
        if (this.getHUDModuleC.getIsMorph)
            return;
        let gunId = MapEx.get(this.useShopIds, ShopType.Gun);
        this.getWeaponModuleC.switchWeaponData(gunId);
    }
    async setCharacterDescription(shopId) {
        let roleId = GameConfig.ROLE.getElement(shopId).ROLEID;
        await Utils.asyncDownloadAsset(roleId);
        this.localPlayer.character.setDescription([roleId]);
        this.localPlayer.character.syncDescription();
        Notice.showDownNotice(GameConfig.Language.SkinSuccessfullyWorn.Value);
    }
    setCharacterTrailing(shopId) {
        let trailingId = GameConfig.TRAILING.getElement(shopId).TRAILING;
        this.server.net_setCharacterTrailing(trailingId);
        Notice.showDownNotice(GameConfig.Language.TailSuccessfullyWorn.Value);
    }
    async initShopCamera() {
        let myCamera = Camera.currentCamera;
        let cameraAnchor = await GameObject.asyncFindGameObjectById("2CA24221");
        let shopCamera = await GameObject.asyncSpawn("Camera", {
            replicates: false,
            transform: cameraAnchor.worldTransform
        });
        this.onSwitchCameraAction.add((cameraType) => {
            if (cameraType == 0) {
                Camera.switch(myCamera);
                this.shopNpcIntegratedMover.enable = false;
                this.trailingIntegratedMover.enable = false;
                this.setCharacterGun();
            }
            else {
                Camera.switch(shopCamera, 0.5, mw.CameraSwitchBlendFunction.Linear);
                this.shopNpcIntegratedMover.enable = true;
                this.trailingIntegratedMover.enable = true;
            }
        });
    }
    async initShopAnchor() {
        this.shopAnchor = await GameObject.asyncFindGameObjectById("1694D9FB");
        this.shopNpcIntegratedMover = await GameObject.asyncSpawn("IntegratedMover");
        this.shopNpcIntegratedMover.parent = this.shopAnchor;
        this.shopNpcIntegratedMover.localTransform.position = mw.Vector.zero;
        this.shopNpcIntegratedMover.rotationSpeed = new mw.Vector(0, 0, 90);
        this.switchGunModel(MapEx.get(this.useShopIds, ShopType.Gun));
    }
    switchPreviewShopType(shopType) {
        this.setShopNpcGunState(shopType == ShopType.Gun);
    }
    previewShopItem(key, shopType) {
        switch (shopType) {
            case ShopType.Gun:
                this.switchGunModel(key);
                break;
            case ShopType.Role:
                this.setShopNpcDescription(key);
                break;
            case ShopType.Trailing:
                this.switchTrailing(key);
                break;
        }
    }
    async switchGunModel(key) {
        if (this.gunkey == key) {
            Notice.showDownNotice(GameConfig.Language.Previewing.Value);
            return;
        }
        this.gunkey = key;
        if (this.gunModel)
            GameObjPool.despawn(this.gunModel);
        let weaponPropElement = GameConfig.WeaponProp.getElement(key);
        let gunId = weaponPropElement.PrefabId;
        await Utils.asyncDownloadAsset(gunId);
        this.gunModel = await GameObjPool.asyncSpawn(gunId, mwext.GameObjPoolSourceType.Prefab);
        this.gunModel.parent = this.shopAnchor;
        this.gunModel.localTransform.position = weaponPropElement.GunLoc;
        this.gunModel.localTransform.rotation = new mw.Rotation(0, 15, 0);
        this.gunModel.localTransform.scale = weaponPropElement.GunScale;
        this.setShopNpcGunState(true);
    }
    async initShopNpc() {
        this.shopNpc = await GameObject.asyncSpawn("Character");
        this.shopNpc.parent = this.shopAnchor;
        this.shopNpc.localTransform.position = mw.Vector.zero;
        this.shopNpc.localTransform.rotation = mw.Rotation.zero;
        this.shopNpc.complexMovementEnabled = false;
        this.shopNpc.displayName = "";
        await this.setShopNpcDescription(MapEx.get(this.useShopIds, ShopType.Role));
        Utils.setGameObjectVisibility(this.shopNpc, false);
        Utils.setGameObjectVisibility(this.holdGun, false);
    }
    async setShopNpcDescription(key) {
        if (this.roleKey == key) {
            Notice.showDownNotice(GameConfig.Language.Previewing.Value);
            return;
        }
        this.roleKey = key;
        let roleId = GameConfig.ROLE.getElement(key).ROLEID;
        await Utils.asyncDownloadAsset(roleId);
        this.shopNpc.setDescription([roleId]);
        this.setShopNpcGunState(false);
        await this.setShopNpcState();
    }
    async initTrailingAnchor() {
        this.trailingAnchor = await GameObject.asyncFindGameObjectById("15C7BAA0");
        this.trailingIntegratedMover = await GameObject.asyncSpawn("IntegratedMover");
        this.trailingIntegratedMover.parent = this.trailingAnchor;
        this.trailingIntegratedMover.localTransform.position = mw.Vector.zero;
        this.trailingIntegratedMover.rotationSpeed = new mw.Vector(0, 0, 360);
    }
    switchTrailing(key) {
        if (this.trailingKey == key) {
            Notice.showDownNotice(GameConfig.Language.Previewing.Value);
            return;
        }
        this.trailingKey = key;
        if (this.trailingEffect)
            EffectService.stop(this.trailingEffect);
        this.trailingEffect = EffectService.playOnGameObject(GameConfig.TRAILING.getElement(key).TRAILING, this.trailingAnchor, { loopCount: 0, position: new mw.Vector(50, 0, 0) });
        this.setShopNpcGunState(false);
    }
    setShopNpcGunState(isShowGun) {
        if (this.shopNpc)
            Utils.setGameObjectVisibility(this.shopNpc, !isShowGun);
        if (this.gunModel)
            Utils.setGameObjectVisibility(this.gunModel, isShowGun);
    }
    async setShopNpcState() {
        if (!this.shopNpc)
            return;
        await this.switchHoldGunModle();
        await this.switchShopNpcAnimation();
    }
    async switchHoldGunModle() {
        if (!this.shopNpc)
            return;
        if (this.holdGun)
            GameObjPool.despawn(this.holdGun);
        this.lastGunModelId = Utils.randomOneDifferentId(this.holdGunModelIds, this.lastGunModelId);
        await Utils.asyncDownloadAsset(this.lastGunModelId);
        this.holdGun = await GameObjPool.asyncSpawn(this.lastGunModelId, mwext.GameObjPoolSourceType.Asset);
        this.shopNpc.attachToSlot(this.holdGun, mw.HumanoidSlotType.RightHand);
        this.holdGun.localTransform.position = mw.Vector.zero;
        this.holdGun.localTransform.rotation = mw.Rotation.zero;
        this.holdGun.localTransform.scale = this.holdGunScales[this.holdGunModelIds.indexOf(this.lastGunModelId)];
    }
    async switchShopNpcAnimation() {
        if (!this.shopNpc)
            return;
        await this.shopNpc.asyncReady();
        let isFemale = (this.shopNpc.description.advance.base.characterSetting.somatotype % 2) == 0;
        this.lastAnimationId = Utils.randomOneDifferentId(isFemale ? this.femaleAnimationIds : this.maleAnimationIds, this.lastAnimationId);
        await Utils.asyncDownloadAsset(this.lastAnimationId);
        let shopNpcAnim = this.shopNpc.loadAnimation(this.lastAnimationId);
        shopNpcAnim.loop = 0;
        shopNpcAnim.play();
    }
}

var foreign55 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ShopModuleC
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/ActivityModule/ActivityPanel.ui
 * TIME: 2024.10.27-00.04.44
 */
let ActivityPanel_Generate = class ActivityPanel_Generate extends UIScript {
    get mWhatDayTextBlock() {
        if (!this.mWhatDayTextBlock_Internal && this.uiWidgetBase) {
            this.mWhatDayTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWhatDayTextBlock');
        }
        return this.mWhatDayTextBlock_Internal;
    }
    get mAdsGetButton() {
        if (!this.mAdsGetButton_Internal && this.uiWidgetBase) {
            this.mAdsGetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAdsGetButton');
        }
        return this.mAdsGetButton_Internal;
    }
    get mAdsTextBlock() {
        if (!this.mAdsTextBlock_Internal && this.uiWidgetBase) {
            this.mAdsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mAdsGetButton/mAdsTextBlock');
        }
        return this.mAdsTextBlock_Internal;
    }
    get mMinutesTextBlock() {
        if (!this.mMinutesTextBlock_Internal && this.uiWidgetBase) {
            this.mMinutesTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GetCanvas/mMinutesTextBlock');
        }
        return this.mMinutesTextBlock_Internal;
    }
    get mGetButton() {
        if (!this.mGetButton_Internal && this.uiWidgetBase) {
            this.mGetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GetCanvas/mGetButton');
        }
        return this.mGetButton_Internal;
    }
    get mGetTextBlock() {
        if (!this.mGetTextBlock_Internal && this.uiWidgetBase) {
            this.mGetTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/GetCanvas/mGetButton/mGetTextBlock');
        }
        return this.mGetTextBlock_Internal;
    }
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ICONCanvas/mIconImage');
        }
        return this.mIconImage_Internal;
    }
    get mIconTextBlock() {
        if (!this.mIconTextBlock_Internal && this.uiWidgetBase) {
            this.mIconTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ICONCanvas/mIconTextBlock');
        }
        return this.mIconTextBlock_Internal;
    }
    get mLeftButton() {
        if (!this.mLeftButton_Internal && this.uiWidgetBase) {
            this.mLeftButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PreviewCanvas/mLeftButton');
        }
        return this.mLeftButton_Internal;
    }
    get mIndexTextBlock() {
        if (!this.mIndexTextBlock_Internal && this.uiWidgetBase) {
            this.mIndexTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PreviewCanvas/mIndexTextBlock');
        }
        return this.mIndexTextBlock_Internal;
    }
    get mRightButton() {
        if (!this.mRightButton_Internal && this.uiWidgetBase) {
            this.mRightButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PreviewCanvas/mRightButton');
        }
        return this.mRightButton_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCloseButton');
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mAdsGetButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mAdsGetButton");
        });
        this.mAdsGetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mGetButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mGetButton");
        });
        this.mGetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mLeftButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mLeftButton");
        });
        this.mLeftButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mRightButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mRightButton");
        });
        this.mRightButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        });
        this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mWhatDayTextBlock);
        this.initLanguage(this.mAdsTextBlock);
        this.initLanguage(this.mMinutesTextBlock);
        this.initLanguage(this.mGetTextBlock);
        this.initLanguage(this.mIconTextBlock);
        this.initLanguage(this.mIndexTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
ActivityPanel_Generate = __decorate([
    UIBind('UI/module/ActivityModule/ActivityPanel.ui')
], ActivityPanel_Generate);
var ActivityPanel_Generate$1 = ActivityPanel_Generate;

var foreign90 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ActivityPanel_Generate$1
});

class ActivityPanel extends ActivityPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.activityModuleC = null;
        this.adPanel = null;
        this.confirmPanel = null;
        this.coinModuleC = null;
        this.activityData = [
            { shopId: 2, shopType: ShopType.Gun, shopIcon: "155696" },
            { shopId: 3, shopType: ShopType.Gun, shopIcon: "226214" },
            { shopId: 4, shopType: ShopType.Gun, shopIcon: "138213" },
            { shopId: 5, shopType: ShopType.Gun, shopIcon: "153110" },
            { shopId: 6, shopType: ShopType.Gun, shopIcon: "226213" },
            { shopId: 7, shopType: ShopType.Gun, shopIcon: "155702" },
            { shopId: 8, shopType: ShopType.Gun, shopIcon: "318664" }
        ];
        this.currentIndex = -1;
        this.minutes = 0;
    }
    get getActivityModuleC() {
        if (!this.activityModuleC) {
            this.activityModuleC = ModuleService.getModule(ActivityModuleC);
        }
        return this.activityModuleC;
    }
    get getAdPanel() {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initModule();
        this.initUIPanel();
        this.initUI();
        this.bindButtons();
    }
    initTextBlock() {
        this.mAdsTextBlock.text = `直接领取`;
    }
    initModule() {
        this.activityModuleC = ModuleService.getModule(ActivityModuleC);
    }
    initUIPanel() {
        this.adPanel = UIService.getUI(AdPanel);
    }
    initUI() {
        this.currentIndex = Number(Utils.getWhatDay());
        this.updateIconTextUI();
    }
    bindButtons() {
        this.mCloseButton.onClicked.add(this.onClickCloseButton.bind(this));
        this.mLeftButton.onClicked.add(this.onClickLeftButton.bind(this));
        this.mRightButton.onClicked.add(this.onClickRightButton.bind(this));
        this.mGetButton.onClicked.add(this.onClickGetButton.bind(this));
        this.mAdsGetButton.onClicked.add(this.onClickAdsGetButton.bind(this));
    }
    onClickCloseButton() {
        this.hideTween();
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
    }
    onClickLeftButton() {
        this.currentIndex--;
        if (this.currentIndex < 1)
            this.currentIndex = this.activityData.length;
        this.updateIconTextUI();
    }
    onClickRightButton() {
        this.currentIndex++;
        if (this.currentIndex > this.activityData.length)
            this.currentIndex = 1;
        this.updateIconTextUI();
    }
    onClickGetButton() {
        if (!this.isHasCondition(false))
            return;
        if (this.minutes < 30) {
            Notice.showDownNotice("今日在线时长不足30分钟(" + this.minutes + "/30)");
            return;
        }
        this.setGetActivity();
    }
    onClickAdsGetButton() {
        if (!this.isHasCondition(true))
            return;
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                this.setGetActivity();
            }, "免费领取" + this.getActicityShopTypeStr(), `取消`, `领取`);
        }
        else {
            this.setGetActivity();
        }
    }
    setGetActivity() {
        this.getActivityModuleC.setGetActivity(this.activityData[this.currentIndex - 1].shopId, this.activityData[this.currentIndex - 1].shopType);
        Notice.showDownNotice("领取成功");
    }
    updateIconTextUI() {
        this.mIndexTextBlock.text = this.currentIndex + "/7";
        this.mWhatDayTextBlock.text = this.getWhatDayStr() + "\n(星期" + Utils.weekNumChangeToCN(this.currentIndex) + ")";
        Utils.setImageByAssetIconData(this.mIconImage, this.activityData[this.currentIndex - 1].shopIcon);
        this.mIconTextBlock.text = this.getActicityShopTypeStr();
    }
    getWhatDayStr() {
        let whatDay = this.getActivityModuleC.getData();
        let offsetDay = this.currentIndex - whatDay;
        if (whatDay == 1 && offsetDay == 6)
            return "昨日奖励";
        if (whatDay == 7 && offsetDay == -6)
            return "明日奖励";
        if (offsetDay == 0)
            return "今日奖励";
        if (offsetDay == 1)
            return "明日奖励";
        if (offsetDay == -1)
            return "昨日奖励";
        return "星期" + Utils.weekNumChangeToCN(this.currentIndex) + "奖励";
    }
    getActicityShopTypeStr() {
        switch (this.activityData[this.currentIndex - 1].shopType) {
            case ShopType.Gun:
                return "步枪";
            case ShopType.Role:
                return "皮肤";
            case ShopType.Trailing:
                return "拖尾";
        }
    }
    updateMinutesUI(minutes) {
        this.minutes = minutes;
        this.mMinutesTextBlock.text = "已在线 " + minutes + "/30(分钟)";
    }
    isHasCondition(isAds) {
        if (this.getActivityModuleC.isHasGet(this.activityData[this.currentIndex - 1].shopId, this.activityData[this.currentIndex - 1].shopType)) {
            Notice.showDownNotice("已领取");
            return false;
        }
        if (isAds)
            return true;
        let whatDay = this.getActivityModuleC.getData();
        if (whatDay != this.currentIndex) {
            Notice.showDownNotice("今天星期" + Utils.weekNumChangeToCN(whatDay));
            Notice.showDownNotice("不能领取星期" + Utils.weekNumChangeToCN(this.currentIndex) + "的奖励");
            return false;
        }
        return true;
    }
    onShow(...params) {
        Utils.openUITween(this.rootCanvas, null, null);
    }
    /**
     * 隐藏缓动
     */
    hideTween() {
        Utils.closeUITween(this.rootCanvas, null, () => {
            this.hide();
        });
    }
}

var foreign24 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ActivityPanel
});

class ActivityModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.hudPanel = null;
        this.shopModuleC = null;
        this.activityPanel = null;
        this.whatDay = 0;
        this.miniutes = 0;
        this.timer = 0;
        this.time = 60;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getHUDPanel() {
        if (this.hudPanel == null) {
            this.hudPanel = UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }
    get getShopModuleC() {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }
    get getActivityPanel() {
        if (this.activityPanel == null) {
            this.activityPanel = UIService.getUI(ActivityPanel);
        }
        return this.activityPanel;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.initModule();
        this.initUIPanel();
        this.initActionEvent();
    }
    initModule() {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.shopModuleC = ModuleService.getModule(ShopModuleC);
    }
    initUIPanel() {
        this.hudPanel = UIService.getUI(HUDPanel);
    }
    initActionEvent() {
        this.getHUDModuleC.onOpenActivityAction.add(this.addOnOffActivityPanel.bind(this));
    }
    addOnOffActivityPanel() {
        this.getActivityPanel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }
    onEnterScene(sceneType) {
        this.initActivityData();
        this.activityPanel = UIService.getUI(ActivityPanel);
    }
    initActivityData() {
        this.whatDay = this.data.whatDay;
        this.miniutes = this.data.minutes;
        let currentWhatDay = Number(Utils.getWhatDay());
        if (currentWhatDay != this.whatDay) {
            this.whatDay = currentWhatDay;
            this.miniutes = 0;
            this.setData(this.whatDay);
        }
        this.getActivityPanel.updateMinutesUI(this.miniutes);
        if (this.miniutes < 30)
            this.getHUDPanel.startActivityRedPointTween();
    }
    onUpdate(dt) {
        if (this.miniutes >= 30)
            return;
        this.timer += dt;
        if (this.timer >= this.time) {
            this.timer = 0;
            this.miniutes++;
            this.setMinutes(this.miniutes);
        }
    }
    setData(whatDay) {
        this.server.net_setData(whatDay);
    }
    getData() {
        return this.whatDay;
    }
    setMinutes(minutes) {
        this.getActivityPanel.updateMinutesUI(minutes);
        this.server.net_setMinutes(minutes);
    }
    isHasGet(shopId, shopType) {
        return this.getShopModuleC.isHasShopId(shopId, shopType);
    }
    setGetActivity(shopId, shopType) {
        this.getHUDPanel.stopActivityRedPointTween();
        this.getShopModuleC.setShopId(shopType, shopId);
    }
}

var foreign22 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ActivityModuleC
});

class ActivityModuleS extends ModuleS {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    net_setData(whatDay) {
        this.currentData.setData(whatDay);
    }
    net_setMinutes(minutes) {
        this.currentData.setMinutes(minutes);
    }
}
__decorate([
    Decorator.noReply()
], ActivityModuleS.prototype, "net_setData", null);
__decorate([
    Decorator.noReply()
], ActivityModuleS.prototype, "net_setMinutes", null);

var foreign23 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ActivityModuleS
});

class HUDModuleS extends ModuleS {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    net_saveSetData(fireScale, controlScale, bgmVolume, soundVolume) {
        this.currentData.fireScale = fireScale;
        this.currentData.controlScale = controlScale;
        this.currentData.bgmVolume = bgmVolume;
        this.currentData.soundVolume = soundVolume;
        this.currentData.save(true);
    }
}
__decorate([
    Decorator.noReply()
], HUDModuleS.prototype, "net_saveSetData", null);

var foreign35 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: HUDModuleS
});

class FlyText {
    constructor() {
        this._uiWidget = null;
        this._rootCanvas = null;
        this._textPools = [];
        /**默认文本框大小（由于开启了自适应，所以文本框有多大，文本就有多大） */
        this._defaultTextSize = new Vector2(200, 100);
        /**默认文本颜色 */
        this._defaultFontColor = LinearColor.white;
        /**默认文本描边颜色 */
        this._defaultOutlineColor = new mw.LinearColor(1, 0, 1, 1);
    }
    static get instance() {
        if (FlyText._instance == null) {
            FlyText._instance = new FlyText();
        }
        return FlyText._instance;
    }
    /**
     * 展示飘字
     * @param content 内容
     * @param worldLocation 世界坐标
     * @param fontColor 颜色（可选）
     */
    showFlyText(content, worldLocation, fontColor, outlineColor) {
        // 将世界坐标转换为屏幕坐标
        let vec2 = mw.InputUtil.projectWorldPositionToWidgetPosition(worldLocation, true).screenPosition;
        // 对象池处理
        let textBlock = null;
        if (this._textPools.length == 0) {
            textBlock = this.createText();
        }
        else {
            textBlock = this._textPools.pop();
        }
        // 给一点初始偏移，方便做动画
        vec2.x -= 120;
        vec2.y -= 160;
        let toX = this.getRandomIntInclusive(100, 300);
        Math.random() < 0.5 ? toX = -toX : toX = toX;
        let toY = this.getRandomIntInclusive(-300, 100);
        // 用Tween，并结合PI来做曲线动画
        let animator = new mw.Tween({ a: 0 }).to({ a: Math.PI }, 1000).onUpdate((object) => {
            textBlock.position = vec2.clone().add(new mw.Vector2(toX * object.a / Math.PI, toY * Math.sin(object.a)));
            textBlock.renderScale = new mw.Vector2(Math.sin(object.a));
        }).onStart(() => {
            textBlock.fontColor = fontColor ? fontColor : this._defaultFontColor;
            textBlock.outlineColor = outlineColor ? outlineColor : this._defaultOutlineColor;
            textBlock.text = content;
            textBlock.visibility = mw.SlateVisibility.SelfHitTestInvisible;
        }).onComplete(() => {
            textBlock.visibility = mw.SlateVisibility.Hidden;
            this._textPools.push(textBlock);
        });
        animator.start();
    }
    /**创建一个文本框 */
    createText() {
        // 首次创建，如果没有UI对象，就创建一个
        if (!this._uiWidget) {
            // 创建一个UI对象
            this._uiWidget = mw.UserWidget.newObject();
            this._uiWidget.addToViewport(1);
            // 首次创建，如果没有rootCanvas，就创建一个
            if (!this._rootCanvas) {
                this._rootCanvas = mw.Canvas.newObject();
                this._rootCanvas.size = new mw.Vector2(1920, 1080);
                this._rootCanvas.position = mw.Vector2.zero;
                this._uiWidget.rootContent = this._rootCanvas;
            }
        }
        // 创建一个文本框，并添加到画布上
        let textBlock = mw.TextBlock.newObject(this._rootCanvas);
        textBlock.size = this._defaultTextSize;
        // 开启文本自适应
        textBlock.fontSize = 30;
        textBlock.fontLetterSpace = 1;
        textBlock.textHorizontalLayout = mw.UITextHorizontalLayout.NoClipping;
        textBlock.autoAdjust = false;
        textBlock.outlineSize = 4;
        textBlock.glyph = mw.UIFontGlyph.Light;
        return textBlock;
    }
    /**得到一个两数之间的随机整数，包括两个数在内 */
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    }
}

var foreign75 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FlyText: FlyText
});

class PlayerModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.teamModuleC = null;
        this.confirmPanel = null;
        this.isCanResetPos = true;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getTeamModuleC() {
        if (this.teamModuleC == null) {
            this.teamModuleC = ModuleService.getModule(TeamModuleC);
        }
        return this.teamModuleC;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    onStart() {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }
    initModule() {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.teamModuleC = ModuleService.getModule(TeamModuleC);
    }
    initUIPanel() {
        this.confirmPanel = UIService.getUI(ConfirmPanel);
    }
    initEventAction() {
        this.getHUDModuleC.onResetPosAction.add(this.addResetPosAction.bind(this));
    }
    addResetPosAction() {
        this.getConfirmPanel.confirmTips(() => {
            if (!this.isCanResetPos) {
                Notice.showDownNotice(StringUtil.format(GameConfig.Language.CannotResetPositionWithinSeconds.Value, 60));
                return;
            }
            let revivalPoint = Utils.randomRevivalPoint(this.getTeamModuleC.isRedTeam(this.localPlayer.userId));
            this.localPlayer.character.worldTransform.position = revivalPoint;
            this.isCanResetPos = false;
            TimeUtil.delaySecond(60).then(() => { this.isCanResetPos = true; });
        }, GameConfig.Language.DoYouWantToResetThePosition.Value, GameConfig.Language.Yes.Value, GameConfig.Language.No.Value, GameConfig.Language.ResetPosition.Value);
    }
    net_hitTeammate() {
        Notice.showDownNotice("不要攻击队友!");
    }
    net_updateHp(curHp) {
        this.getHUDModuleC.updateHpUI(curHp);
    }
    net_flyText(damage, hitPoint) {
        let fontColor = Utils.randomColor();
        FlyText.instance.showFlyText("-" + damage, hitPoint, fontColor[0], fontColor[1]);
    }
    net_killTip(killerUserId, killerName, killedUserId, killedName) {
        this.getHUDModuleC.killTip(killerUserId, killerName, killedUserId, killedName);
    }
    async addMaxHp() {
        let maxHp = await this.server.net_addMaxHp();
        this.getHUDModuleC.updateHpUI(maxHp, true);
        GlobalData.maxHp = maxHp;
        Utils.playBirthSound(this.localPlayer);
    }
}

var foreign42 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PlayerModuleC: PlayerModuleC
});

class RadarModuleS extends ModuleS {
    onStart() {
    }
}

var foreign46 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RadarModuleS
});

class ShopModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.trailingMap = new Map();
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    onPlayerLeft(player) {
        this.deleteTrailing(player.userId);
    }
    net_setShopId(shopType, shopId) {
        this.currentData.setShopId(shopType, shopId);
    }
    net_setUseShopId(shopType, shopId) {
        this.currentData.setUseShopId(shopType, shopId);
    }
    net_setCharacterTrailing(trailingId) {
        this.stopTrailing(this.currentPlayer.userId);
        let effectId = EffectService.playOnGameObject(trailingId, this.currentPlayer.character, { loopCount: 0, slotType: mw.HumanoidSlotType.BackOrnamental });
        this.trailingMap.set(trailingId, effectId);
    }
    stopTrailing(userId) {
        if (this.trailingMap.has(userId)) {
            EffectService.stop(this.trailingMap.get(userId));
        }
    }
    deleteTrailing(userId) {
        if (this.trailingMap.has(userId)) {
            EffectService.stop(this.trailingMap.get(userId));
            this.trailingMap.delete(userId);
        }
    }
}
__decorate([
    Decorator.noReply()
], ShopModuleS.prototype, "net_setShopId", null);
__decorate([
    Decorator.noReply()
], ShopModuleS.prototype, "net_setUseShopId", null);
__decorate([
    Decorator.noReply()
], ShopModuleS.prototype, "net_setCharacterTrailing", null);

var foreign56 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ShopModuleS
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/TaskModule/TaskItem.ui
 * TIME: 2024.10.27-00.04.45
 */
let TaskItem_Generate = class TaskItem_Generate extends UIScript {
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mNameTextBlock');
        }
        return this.mNameTextBlock_Internal;
    }
    get mCoinCanvas() {
        if (!this.mCoinCanvas_Internal && this.uiWidgetBase) {
            this.mCoinCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCoinCanvas');
        }
        return this.mCoinCanvas_Internal;
    }
    get mCoinTextBlock() {
        if (!this.mCoinTextBlock_Internal && this.uiWidgetBase) {
            this.mCoinTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCoinCanvas/mCoinTextBlock');
        }
        return this.mCoinTextBlock_Internal;
    }
    get mDiamondCanvas() {
        if (!this.mDiamondCanvas_Internal && this.uiWidgetBase) {
            this.mDiamondCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDiamondCanvas');
        }
        return this.mDiamondCanvas_Internal;
    }
    get mDiamondTextBlock() {
        if (!this.mDiamondTextBlock_Internal && this.uiWidgetBase) {
            this.mDiamondTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDiamondCanvas/mDiamondTextBlock');
        }
        return this.mDiamondTextBlock_Internal;
    }
    get mFinishButton() {
        if (!this.mFinishButton_Internal && this.uiWidgetBase) {
            this.mFinishButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mFinishButton');
        }
        return this.mFinishButton_Internal;
    }
    get mFinishTextBlock() {
        if (!this.mFinishTextBlock_Internal && this.uiWidgetBase) {
            this.mFinishTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mFinishButton/mFinishTextBlock');
        }
        return this.mFinishTextBlock_Internal;
    }
    get mUnfinishTextBlock() {
        if (!this.mUnfinishTextBlock_Internal && this.uiWidgetBase) {
            this.mUnfinishTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mUnfinishTextBlock');
        }
        return this.mUnfinishTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mFinishButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mFinishButton");
        });
        this.mFinishButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mNameTextBlock);
        this.initLanguage(this.mCoinTextBlock);
        this.initLanguage(this.mDiamondTextBlock);
        this.initLanguage(this.mFinishTextBlock);
        this.initLanguage(this.mUnfinishTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
TaskItem_Generate = __decorate([
    UIBind('UI/module/TaskModule/TaskItem.ui')
], TaskItem_Generate);
var TaskItem_Generate$1 = TaskItem_Generate;

var foreign105 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TaskItem_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/TaskModule/TaskPanel.ui
 * TIME: 2024.10.27-00.04.45
 */
let TaskPanel_Generate = class TaskPanel_Generate extends UIScript {
    get mDailyTaskTitleTextBlock() {
        if (!this.mDailyTaskTitleTextBlock_Internal && this.uiWidgetBase) {
            this.mDailyTaskTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/DailyTaskCanvas/DailyTaskTitleImage/mDailyTaskTitleTextBlock');
        }
        return this.mDailyTaskTitleTextBlock_Internal;
    }
    get mDailyTimeTextBlock() {
        if (!this.mDailyTimeTextBlock_Internal && this.uiWidgetBase) {
            this.mDailyTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/DailyTaskCanvas/DailyTaskTitleImage/mDailyTimeTextBlock');
        }
        return this.mDailyTimeTextBlock_Internal;
    }
    get mDailyTaskBox() {
        if (!this.mDailyTaskBox_Internal && this.uiWidgetBase) {
            this.mDailyTaskBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/DailyTaskCanvas/mDailyTaskBox');
        }
        return this.mDailyTaskBox_Internal;
    }
    get mDailyTaskCanvas() {
        if (!this.mDailyTaskCanvas_Internal && this.uiWidgetBase) {
            this.mDailyTaskCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/DailyTaskCanvas/mDailyTaskBox/mDailyTaskCanvas');
        }
        return this.mDailyTaskCanvas_Internal;
    }
    get mDailyTaskDoneTextBlock() {
        if (!this.mDailyTaskDoneTextBlock_Internal && this.uiWidgetBase) {
            this.mDailyTaskDoneTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/DailyTaskCanvas/mDailyTaskDoneTextBlock');
        }
        return this.mDailyTaskDoneTextBlock_Internal;
    }
    get mWeekTaskTitleTextBlock() {
        if (!this.mWeekTaskTitleTextBlock_Internal && this.uiWidgetBase) {
            this.mWeekTaskTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/WeekTaskCanvas/WeekTaskTitleImage/mWeekTaskTitleTextBlock');
        }
        return this.mWeekTaskTitleTextBlock_Internal;
    }
    get mWeekTimeTextBlock() {
        if (!this.mWeekTimeTextBlock_Internal && this.uiWidgetBase) {
            this.mWeekTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/WeekTaskCanvas/WeekTaskTitleImage/mWeekTimeTextBlock');
        }
        return this.mWeekTimeTextBlock_Internal;
    }
    get mWeekTaskBox() {
        if (!this.mWeekTaskBox_Internal && this.uiWidgetBase) {
            this.mWeekTaskBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/WeekTaskCanvas/mWeekTaskBox');
        }
        return this.mWeekTaskBox_Internal;
    }
    get mWeekTaskCanvas() {
        if (!this.mWeekTaskCanvas_Internal && this.uiWidgetBase) {
            this.mWeekTaskCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/WeekTaskCanvas/mWeekTaskBox/mWeekTaskCanvas');
        }
        return this.mWeekTaskCanvas_Internal;
    }
    get mWeekTaskDoneTextBlock() {
        if (!this.mWeekTaskDoneTextBlock_Internal && this.uiWidgetBase) {
            this.mWeekTaskDoneTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/WeekTaskCanvas/mWeekTaskDoneTextBlock');
        }
        return this.mWeekTaskDoneTextBlock_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/TaskCanvas/mCloseButton');
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mCloseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        });
        this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mDailyTaskTitleTextBlock);
        this.initLanguage(this.mDailyTimeTextBlock);
        this.initLanguage(this.mDailyTaskDoneTextBlock);
        this.initLanguage(this.mWeekTaskTitleTextBlock);
        this.initLanguage(this.mWeekTimeTextBlock);
        this.initLanguage(this.mWeekTaskDoneTextBlock);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
TaskPanel_Generate = __decorate([
    UIBind('UI/module/TaskModule/TaskPanel.ui')
], TaskPanel_Generate);
var TaskPanel_Generate$1 = TaskPanel_Generate;

var foreign106 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TaskPanel_Generate$1
});

class TaskPanel extends TaskPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.hudPanel = null;
        this.picIndex = 0;
        this.isPic = false;
        this.dailyTaskItemsMap = new Map();
        this.weeklyTaskItemsMap = new Map();
        this.refreshDailyHourTime = 0;
        this.refreshWeekHourTime = 0;
        this.hourTimer = 0;
        this.hourTime = 60;
        this.hour = 0;
        this.week = 0;
    }
    get getHUDPanel() {
        if (this.hudPanel == null) {
            this.hudPanel = mw.UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerMiddle;
        this.initUIPanel();
        this.bindButton();
        this.initTime();
        this.initTextBlock();
    }
    initTextBlock() {
        this.mDailyTaskTitleTextBlock.text = GameConfig.Language.Text_DailyTasks.Value;
        this.mDailyTaskDoneTextBlock.text = GameConfig.Language.Text_AllTasksHaveBeenCompletedWaitingForRefresh.Value;
        this.mWeekTaskTitleTextBlock.text = GameConfig.Language.Text_WeeklyTasks.Value;
        this.mWeekTaskDoneTextBlock.text = GameConfig.Language.Text_AllTasksHaveBeenCompletedWaitingForRefresh.Value;
        if (GlobalData.languageId == 0) {
            this.mDailyTaskTitleTextBlock.fontSize = 40;
            this.mWeekTaskTitleTextBlock.fontSize = 35;
            this.mDailyTimeTextBlock.fontSize = 18;
            this.mWeekTimeTextBlock.fontSize = 18;
        }
        else {
            this.mDailyTaskTitleTextBlock.fontSize = 50;
            this.mWeekTaskTitleTextBlock.fontSize = 50;
            this.mDailyTimeTextBlock.fontSize = 30;
            this.mWeekTimeTextBlock.fontSize = 30;
        }
    }
    initUIPanel() {
        this.hudPanel = mw.UIService.getUI(HUDPanel);
    }
    bindButton() {
        this.mCloseButton.onClicked.add(this.hideTween.bind(this));
    }
    /**
     * 隐藏缓动
     */
    hideTween() {
        Event.dispatchToLocal(EventType.OnOffMainHUD, true);
        Utils.closeUITween(this.rootCanvas, null, () => {
            this.hide();
        });
    }
    onShow(...params) {
        this.canUpdate = true;
        Utils.openUITween(this.rootCanvas, null, null);
    }
    onHide() {
        this.canUpdate = false;
    }
    controllerPic(value) {
        this.picIndex += value;
        if (this.picIndex > 0 && this.isPic == false) {
            this.getHUDPanel.startTaskRedPointTween();
            this.isPic = true;
        }
        else if (this.picIndex <= 0 && this.isPic == true) {
            this.getHUDPanel.stopTaskRedPointTween();
            this.isPic = false;
        }
    }
    initTaskPanel(dailyTaskDataMap, weeklyTaskDataMap) {
        this.initDailyTaskPanel(dailyTaskDataMap);
        this.initWeeklyTaskPanel(weeklyTaskDataMap);
    }
    initDailyTaskPanel(dailyTaskDataMap) {
        this.recycleAllDailyTaskItem();
        if (dailyTaskDataMap.size == 0)
            return;
        Utils.setWidgetVisibility(this.mDailyTaskDoneTextBlock, mw.SlateVisibility.Collapsed);
        dailyTaskDataMap.forEach((value, key) => {
            let dailyTaskItem = UIService.create(TaskItem);
            dailyTaskItem.initTaskItemData(key, value);
            this.mDailyTaskCanvas.addChild(dailyTaskItem.uiObject);
            this.dailyTaskItemsMap.set(key, dailyTaskItem);
        });
    }
    updateTaskPanel(vipTaskType, progress) {
        if (this.dailyTaskItemsMap.has(vipTaskType)) {
            let dailyTaskItem = this.dailyTaskItemsMap.get(vipTaskType);
            dailyTaskItem.updateTaskItemData(progress);
        }
        if (this.weeklyTaskItemsMap.has(vipTaskType)) {
            let weeklyTaskItem = this.weeklyTaskItemsMap.get(vipTaskType);
            weeklyTaskItem.updateTaskItemData(progress);
        }
    }
    initWeeklyTaskPanel(weeklyTaskDataMap) {
        this.recycleAllWeeklyTaskItem();
        if (weeklyTaskDataMap.size == 0)
            return;
        Utils.setWidgetVisibility(this.mWeekTaskDoneTextBlock, mw.SlateVisibility.Collapsed);
        weeklyTaskDataMap.forEach((value, key) => {
            let weeklyTaskItem = UIService.create(TaskItem);
            weeklyTaskItem.initTaskItemData(key, value);
            this.mWeekTaskCanvas.addChild(weeklyTaskItem.uiObject);
            this.weeklyTaskItemsMap.set(key, weeklyTaskItem);
        });
    }
    updateTaskCompletePanel(vipTaskType) {
        if (this.dailyTaskItemsMap.has(vipTaskType)) {
            let dailyTaskItem = this.dailyTaskItemsMap.get(vipTaskType);
            dailyTaskItem.updateTaskCompaleteItemData();
        }
        if (this.weeklyTaskItemsMap.has(vipTaskType)) {
            let weeklyTaskItem = this.weeklyTaskItemsMap.get(vipTaskType);
            weeklyTaskItem.updateTaskCompaleteItemData();
        }
    }
    recycleTaskItem(vipTaskType) {
        if (this.dailyTaskItemsMap.has(vipTaskType)) {
            let dailyTaskItem = this.dailyTaskItemsMap.get(vipTaskType);
            dailyTaskItem.destroy();
            this.dailyTaskItemsMap.delete(vipTaskType);
            // this.mDailyTaskBox.scrollOffset = 0;
            if (this.dailyTaskItemsMap.size <= 0) {
                Utils.setWidgetVisibility(this.mDailyTaskDoneTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
            }
        }
        if (this.weeklyTaskItemsMap.has(vipTaskType)) {
            let weeklyTaskItem = this.weeklyTaskItemsMap.get(vipTaskType);
            weeklyTaskItem.destroy();
            this.weeklyTaskItemsMap.delete(vipTaskType);
            // this.mWeekTaskBox.scrollOffset = 0;
            if (this.weeklyTaskItemsMap.size <= 0) {
                Utils.setWidgetVisibility(this.mWeekTaskDoneTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
            }
        }
    }
    recycleAllDailyTaskItem() {
        if (this.dailyTaskItemsMap.size == 0)
            return;
        this.dailyTaskItemsMap.forEach((value, key) => {
            value.destroy();
            this.dailyTaskItemsMap.delete(key);
        });
        // this.mDailyTaskBox.scrollOffset = 0;
        this.dailyTaskItemsMap.clear();
    }
    recycleAllWeeklyTaskItem() {
        if (this.weeklyTaskItemsMap.size == 0)
            return;
        this.weeklyTaskItemsMap.forEach((value, key) => {
            value.destroy();
            this.weeklyTaskItemsMap.delete(key);
        });
        // this.mWeekTaskBox.scrollOffset = 0;
        this.weeklyTaskItemsMap.clear();
    }
    initTime() {
        this.refreshDailyHourTime = Number(GlobalData.dailyRefreshTime.split(':')[0]);
        this.refreshWeekHourTime = Number(GlobalData.weeklyRefreshTime.split(':')[0]);
        this.hour = new Date().getHours();
        this.updateHourTime();
        this.week = 8 - Number(Utils.getWhatDay());
        this.updateWeekTime();
    }
    onUpdate(dt) {
        this.hourTimer += dt;
        if (this.hourTimer >= this.hourTime) {
            let hour = new Date().getHours();
            if (hour != this.hour) {
                this.hour = hour;
                this.updateHourTime();
            }
            let week = Number(Utils.getWhatDay());
            if (week != this.week) {
                this.week = week;
                this.updateWeekTime();
            }
            this.hourTimer = 0;
        }
    }
    updateHourTime() {
        if (this.hour >= 0 && this.hour < this.refreshDailyHourTime) {
            this.hour = this.refreshDailyHourTime - this.hour;
        }
        else {
            this.hour = 24 - this.hour + this.refreshDailyHourTime;
        }
        this.mDailyTimeTextBlock.text = StringUtil.format(GameConfig.Language.Text_RemainingHours.Value, this.hour);
    }
    updateWeekTime() {
        if (Number(Utils.getWhatDay()) == 1 && this.hour < this.refreshWeekHourTime) {
            this.mWeekTimeTextBlock.text = StringUtil.format(GameConfig.Language.Text_RemainingDays.Value, 1);
            this.week = 1;
        }
        else {
            this.mWeekTimeTextBlock.text = StringUtil.format(GameConfig.Language.Text_RemainingDays.Value, this.week);
        }
    }
}
class TaskItem extends TaskItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.vipTaskType = TaskItemType.None;
        this.task = null;
        this.vIPTaskElement = null;
    }
    onStart() {
        this.initUI();
        this.initTextBlock();
    }
    initTextBlock() {
        this.mFinishTextBlock.text = GameConfig.Language.Text_ClaimRewards.Value;
        this.mUnfinishTextBlock.text = GameConfig.Language.Text_HangInTheAir.Value;
        if (GlobalData.languageId == 0) {
            this.mNameTextBlock.fontSize = 16;
            this.mFinishTextBlock.fontSize = 15;
            this.mUnfinishTextBlock.fontSize = 15;
        }
        else {
            this.mNameTextBlock.fontSize = 20;
            this.mFinishTextBlock.fontSize = 24;
            this.mUnfinishTextBlock.fontSize = 24;
        }
    }
    initUI() {
        Utils.setWidgetVisibility(this.mFinishButton, mw.SlateVisibility.Collapsed);
    }
    /**填充item数据 */
    initTaskItemData(vipTaskType, task) {
        this.vipTaskType = vipTaskType;
        this.task = task;
        this.vIPTaskElement = GameConfig.Task.getElement(this.task.taskId);
        if (task.isGetReward) {
            this.isShowFinishBtn(false);
            Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.Collapsed);
        }
        else {
            let isShow = task.progress >= this.vIPTaskElement.TragetNum;
            this.isShowFinishBtn(isShow);
            if (isShow) {
                mw.UIService.getUI(TaskPanel).controllerPic(1);
            }
        }
        this.mNameTextBlock.text = StringUtil.format(this.vIPTaskElement.Name, this.task.progress, this.vIPTaskElement.TragetNum, this.vIPTaskElement.TragetNum);
        this.mCoinTextBlock.text = this.vIPTaskElement.Coin.toString();
        this.mDiamondTextBlock.text = this.vIPTaskElement.Diamond.toString();
        if (this.vIPTaskElement.Diamond == 0 || this.vIPTaskElement.Diamond == null) {
            Utils.setWidgetVisibility(this.mDiamondCanvas, mw.SlateVisibility.Collapsed);
        }
        this.mFinishButton.onClicked.add(() => {
            ModuleService.getModule(TaskModuleC).onTaskRewardAction.call(this.vipTaskType, this.task.taskId);
            mw.UIService.getUI(TaskPanel).controllerPic(-1);
        });
    }
    isShowFinishBtn(isShow) {
        if (isShow) {
            Utils.setWidgetVisibility(this.mFinishButton, mw.SlateVisibility.Visible);
            Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.Collapsed);
        }
        else {
            Utils.setWidgetVisibility(this.mFinishButton, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
        }
    }
    updateTaskItemData(progress) {
        let tragetNum = this.vIPTaskElement.TragetNum;
        this.task.progress = progress;
        this.mNameTextBlock.text = StringUtil.format(this.vIPTaskElement.Name, progress, tragetNum);
        if (progress >= tragetNum) {
            if (this.mFinishButton.visibility != mw.SlateVisibility.Visible) {
                mw.UIService.getUI(TaskPanel).controllerPic(1);
            }
            this.isShowFinishBtn(true);
        }
    }
    updateTaskCompaleteItemData() {
        let nextId = this.vIPTaskElement.NextId;
        console.error(`nextId = ${nextId}`);
        if (nextId != 0) {
            this.task.taskId = nextId;
            // this.task.progress = 0;
            this.task.isGetReward = false;
            this.vIPTaskElement = GameConfig.Task.getElement(nextId);
            this.mNameTextBlock.text = StringUtil.format(this.vIPTaskElement.Name, this.task.progress, this.vIPTaskElement.TragetNum);
            this.mCoinTextBlock.text = this.vIPTaskElement.Coin.toString();
            this.mDiamondTextBlock.text = this.vIPTaskElement.Diamond.toString();
            if (this.task.progress >= this.vIPTaskElement.TragetNum) {
                this.isShowFinishBtn(true);
                mw.UIService.getUI(TaskPanel).controllerPic(1);
                return;
            }
        }
        else {
            Utils.setWidgetVisibility(this.mUnfinishTextBlock, mw.SlateVisibility.Collapsed);
            this.task.isGetReward = true;
            mw.UIService.getUI(TaskPanel).recycleTaskItem(this.vipTaskType);
            return;
        }
        this.isShowFinishBtn(false);
    }
}

var foreign62 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TaskItem: TaskItem,
    default: TaskPanel
});

class TaskModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.coinModuleC = null;
        this.taskPanel = null;
        this.hudModuleC = null;
        /**执行任务（任务类型-数量） */
        this.onExecuteTaskAction = new Action2();
        /**奖励（任务类型-ID） */
        this.onTaskRewardAction = new Action2();
        this.tempDailTask = {};
        this.tempWeeklyTask = {};
        this.dailyTasks = {};
        this.weeklyTasks = {};
        this.dailyTaskMap = new Map();
        this.weeklyTaskMap = new Map();
        this.dailyLoginTimer = 0;
        this.dailyLoginTime = 60;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    get getTaskPanel() {
        if (this.taskPanel == null) {
            this.taskPanel = mw.UIService.getUI(TaskPanel);
        }
        return this.taskPanel;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.initModule();
        this.initUIPanel();
        this.initEventAction();
    }
    initModule() {
        this.hudModuleC = ModuleService.getModule(HUDModuleC);
        this.coinModuleC = ModuleService.getModule(CoinModuleC);
    }
    initUIPanel() {
        this.taskPanel = mw.UIService.getUI(TaskPanel);
    }
    initEventAction() {
        this.getHUDModuleC.onOpenTaskAction.add((this.addOpenTaskPanelAction.bind(this)));
        this.onExecuteTaskAction.add(this.executeTask.bind(this));
        this.onTaskRewardAction.add(this.getTaskRewardAndUpdateData.bind(this));
    }
    addOpenTaskPanelAction() {
        this.getTaskPanel.show();
        Event.dispatchToLocal(EventType.OnOffMainHUD, false);
    }
    net_getServerTaskData() {
        this.dailyTasks = this.data.dailyTasks;
        this.weeklyTasks = this.data.weeklyTasks;
        this.initTaskData();
        this.dailyLogin();
    }
    saveTaskToServer() {
        if (MapEx.count(this.tempDailTask) <= 0 && MapEx.count(this.tempWeeklyTask) <= 0)
            return;
        // console.error("[MapEx.count(this.tempDailTask)] A = " + MapEx.count(this.tempDailTask));
        // console.error("[MapEx.count(this.tempWeeklyTask)] A = " + MapEx.count(this.tempWeeklyTask));
        let dailyTaskIds = [];
        let dailyTaskTypes = [];
        let dailyProgresss = [];
        if (MapEx.count(this.tempDailTask) > 0) {
            MapEx.forEach(this.tempDailTask, (key, value) => {
                dailyTaskIds.push(value.taskId);
                dailyTaskTypes.push(key);
                dailyProgresss.push(value.progress);
                MapEx.del(this.tempDailTask, key);
                // console.error("[key] = " + key);
            });
        }
        let weeklyTaskIds = [];
        let weeklyTaskTypes = [];
        let weeklyProgresss = [];
        if (MapEx.count(this.tempWeeklyTask) > 0) {
            MapEx.forEach(this.tempWeeklyTask, (key, value) => {
                weeklyTaskIds.push(value.taskId);
                weeklyTaskTypes.push(key);
                weeklyProgresss.push(value.progress);
                MapEx.del(this.tempWeeklyTask, key);
            });
        }
        if (dailyTaskIds.length == 0 && weeklyTaskIds.length == 0) {
            // console.error("[dailyTaskIds.length == 0 && weeklyTaskIds.length == 0]");
            return;
        }
        this.server.net_saveTaskProgress(dailyTaskIds, dailyTaskTypes, dailyProgresss, weeklyTaskIds, weeklyTaskTypes, weeklyProgresss);
        // console.error("[MapEx.count(this.tempDailTask)] B = " + MapEx.count(this.tempDailTask));
        // console.error("[MapEx.count(this.tempWeeklyTask)] B = " + MapEx.count(this.tempWeeklyTask));
    }
    initTaskData() {
        this.dailyTaskMap.clear();
        this.weeklyTaskMap.clear();
        let dailyTaskDataMap = new Map();
        let weeklyTaskDataMap = new Map();
        let task = GameConfig.Task.getAllElement();
        for (let i = 0; i < task.length; ++i) {
            if (task[i].TaskType == TaskType.DailyTask) {
                let vipTaskType = task[i].TaskItemType;
                if (this.dailyTaskMap.has(vipTaskType))
                    continue;
                if (MapEx.has(this.dailyTasks, vipTaskType)) {
                    let value = MapEx.get(this.dailyTasks, vipTaskType);
                    this.dailyTaskMap.set(vipTaskType, GameConfig.Task.getElement(value.taskId));
                    if (value.isGetReward)
                        continue;
                    dailyTaskDataMap.set(vipTaskType, value);
                }
                else {
                    this.dailyTaskMap.set(vipTaskType, task[i]);
                    dailyTaskDataMap.set(vipTaskType, new Task(task[i].ID, 0, false));
                }
            }
            else if (task[i].TaskType == TaskType.WeeklyTask) {
                let vipTaskType = task[i].TaskItemType;
                if (this.weeklyTaskMap.has(vipTaskType))
                    continue;
                if (MapEx.has(this.weeklyTasks, vipTaskType)) {
                    let value = MapEx.get(this.weeklyTasks, vipTaskType);
                    this.weeklyTaskMap.set(vipTaskType, GameConfig.Task.getElement(value.taskId));
                    if (value.isGetReward)
                        continue;
                    weeklyTaskDataMap.set(vipTaskType, value);
                }
                else {
                    this.weeklyTaskMap.set(vipTaskType, task[i]);
                    weeklyTaskDataMap.set(vipTaskType, new Task(task[i].ID, 0, false));
                }
            }
        }
        if (dailyTaskDataMap.size == 0 && weeklyTaskDataMap.size == 0)
            return;
        // console.error("[dailyTaskDataMap.size] = " + JSON.stringify(dailyTaskDataMap));
        // console.error("[weeklyTaskDataMap.size] = " + JSON.stringify(weeklyTaskDataMap));
        this.getTaskPanel.initTaskPanel(dailyTaskDataMap, weeklyTaskDataMap);
    }
    executeTask(vipTaskType, num) {
        this.executeDailyTask(vipTaskType, num);
        this.executeWeeklyTask(vipTaskType, num);
    }
    executeDailyTask(vipTaskType, num) {
        let progress = 0;
        let taskId = 0;
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            let task = MapEx.get(this.dailyTasks, vipTaskType);
            progress = task.progress + num;
            GameConfig.Task.getElement(task.taskId).TragetNum;
            taskId = task.taskId;
        }
        else {
            if (!this.dailyTaskMap.has(vipTaskType)) {
                // console.error("[任务类型为" + vipTaskType + "的任务不存在]");
                return;
            }
            let dailTaskElement = this.dailyTaskMap.get(vipTaskType);
            progress = num;
            dailTaskElement.TragetNum;
            taskId = dailTaskElement.ID;
        }
        // isOnComplete = (progress >= tragetNum) ? true : false;
        // if (isOnComplete) progress = tragetNum;
        this.saveDailyTask(taskId, vipTaskType, progress);
        let tmpDailTask = new Task(taskId, progress, false);
        MapEx.set(this.tempDailTask, vipTaskType, tmpDailTask);
        this.getTaskPanel.updateTaskPanel(vipTaskType, progress);
    }
    saveDailyTask(taskId, vipTaskType, progress) {
        let dailTask = null;
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            dailTask = MapEx.get(this.dailyTasks, vipTaskType);
            dailTask.progress = progress;
        }
        else {
            dailTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.dailyTasks, vipTaskType, dailTask);
    }
    executeWeeklyTask(vipTaskType, num) {
        let progress = 0;
        let taskId = 0;
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            let task = MapEx.get(this.weeklyTasks, vipTaskType);
            progress = task.progress + num;
            GameConfig.Task.getElement(task.taskId).TragetNum;
            taskId = task.taskId;
        }
        else {
            if (!this.weeklyTaskMap.has(vipTaskType)) {
                // console.error("[任务类型为" + vipTaskType + "的任务不存在]");
                return;
            }
            let weeklyTaskElement = this.weeklyTaskMap.get(vipTaskType);
            progress = num;
            weeklyTaskElement.TragetNum;
            taskId = weeklyTaskElement.ID;
        }
        // isOnComplete = (progress >= tragetNum) ? true : false;
        // if (isOnComplete) progress = tragetNum;
        this.saveWeeklyTask(taskId, vipTaskType, progress);
        let tmpWeeklyTask = new Task(taskId, progress, false);
        MapEx.set(this.tempWeeklyTask, vipTaskType, tmpWeeklyTask);
        this.getTaskPanel.updateTaskPanel(vipTaskType, progress);
    }
    saveWeeklyTask(taskId, vipTaskType, progress) {
        let weeklyTask = null;
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            weeklyTask.progress = progress;
        }
        else {
            weeklyTask = new Task(taskId, progress, false);
        }
        MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
    }
    getTaskRewardAndUpdateData(vipTaskType, taskId) {
        this.updateTaskCompleteData(vipTaskType);
        this.getTaskPanel.updateTaskCompletePanel(vipTaskType);
        this.getTaskReward(taskId);
    }
    updateTaskCompleteData(vipTaskType) {
        if (MapEx.has(this.dailyTasks, vipTaskType)) {
            let dailyTask = MapEx.get(this.dailyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(dailyTask.taskId).NextId;
            if (nextId != 0) {
                dailyTask.taskId = nextId;
                // dailyTask.progress = 0;
                dailyTask.isGetReward = false;
            }
            else {
                dailyTask.isGetReward = true;
            }
            MapEx.set(this.dailyTasks, vipTaskType, dailyTask);
        }
        if (MapEx.has(this.weeklyTasks, vipTaskType)) {
            let weeklyTask = MapEx.get(this.weeklyTasks, vipTaskType);
            let nextId = GameConfig.Task.getElement(weeklyTask.taskId).NextId;
            if (nextId != 0) {
                weeklyTask.taskId = nextId;
                // weeklyTask.progress = 0;
                weeklyTask.isGetReward = false;
            }
            else {
                weeklyTask.isGetReward = true;
            }
            MapEx.set(this.weeklyTasks, vipTaskType, weeklyTask);
        }
        if (this.dailyTaskMap.has(vipTaskType)) {
            let dailyTaskElement = this.dailyTaskMap.get(vipTaskType);
            if (dailyTaskElement.NextId != 0) {
                this.dailyTaskMap.set(vipTaskType, GameConfig.Task.getElement(dailyTaskElement.NextId));
            }
        }
        if (this.weeklyTaskMap.has(vipTaskType)) {
            let weeklyTaskElement = this.weeklyTaskMap.get(vipTaskType);
            if (weeklyTaskElement.NextId != 0) {
                this.weeklyTaskMap.set(vipTaskType, GameConfig.Task.getElement(weeklyTaskElement.NextId));
            }
        }
        this.server.net_updateTaskConpleteData(vipTaskType);
    }
    getTaskReward(taskId) {
        console.error(`taskId=${taskId}`);
        let taskElement = GameConfig.Task.getElement(taskId);
        let rewardCoin = taskElement.Coin;
        let rewardDiamond = taskElement.Diamond;
        if (rewardCoin > 0) {
            this.getCoinModuleC.setCoin(rewardCoin);
        }
        if (rewardDiamond > 0) {
            this.getCoinModuleC.setDiamond(rewardDiamond);
        }
    }
    /**重置每日任务 */
    net_resetDailyTask() {
        this.dailyTasks = {};
        this.initTaskData();
        this.dailyLogin();
    }
    /**重置每周任务 */
    net_resetWeeklyTask() {
        this.weeklyTasks = {};
        this.initTaskData();
    }
    onUpdate(dt) {
        this.saveTaskToServer();
        this.updateDailyLogin(dt);
    }
    /**每日登录游戏 */
    dailyLogin() {
        if (MapEx.has(this.dailyTasks, 1))
            return;
        this.onExecuteTaskAction.call(1, 1);
        this.weeklyLogin();
    }
    /**每日在线时长 */
    updateDailyLogin(dt) {
        this.dailyLoginTimer += dt;
        if (this.dailyLoginTimer >= this.dailyLoginTime) {
            this.dailyOnlineTime();
            this.dailyLoginTimer = 0;
        }
    }
    dailyOnlineTime() {
        for (let i = 11; i <= 19; ++i) {
            this.onExecuteTaskAction.call(i, 1);
        }
    }
    net_dailyKillPlayer() {
        for (let i = 31; i <= 39; ++i) {
            this.onExecuteTaskAction.call(i, 1);
        }
    }
    weeklyLogin() {
        for (let i = 101; i <= 107; ++i) {
            this.onExecuteTaskAction.call(i, 1);
        }
    }
}

var foreign60 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TaskModuleC
});

let GameLauncher = class GameLauncher extends mw.Script {
    constructor() {
        super(...arguments);
        this.isOpenIAA = true;
        this.languageId = -1;
        /**------------------------------------------- 服务端 ------------------------------------------------ */
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.onStartCS();
        if (mw.SystemUtil.isClient()) {
            this.useUpdate = true;
            this.onStartC();
        }
        else if (mw.SystemUtil.isServer()) {
            this.useUpdate = false;
            this.onStartS();
        }
    }
    /**客户端服务端的onStart */
    onStartCS() {
        GlobalData.isOpenIAA = !mw.SystemUtil.isPIE || this.isOpenIAA;
        this.initLanguage();
        this.onRegisterModule();
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            update();
            mw.TweenUtil.TWEEN.update();
            this.onUpdateC(dt);
        }
        else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    /**注册模块 */
    onRegisterModule() {
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
    onStartC() {
    }
    initLanguage() {
        let language = LocaleUtil.getDefaultLocale().toString().toLowerCase();
        console.error(`wfz - language:${language}`);
        let languageId = -1;
        if (mw.SystemUtil.isPIE && this.languageId >= 0) {
            languageId = this.languageId;
        }
        else {
            if (!!language.match("en")) {
                languageId = 0;
            }
            else if (!!language.match("zh")) { //简体
                languageId = 1;
            }
            else if (!!language.match("ja")) {
                languageId = 3;
            }
            else if (!!language.match("ko")) {
                languageId = 4;
            }
            else { //繁体
                languageId = 2;
            }
        }
        GlobalData.languageId = languageId;
        console.error(`wfz - languageId:${languageId}`);
        GameConfig.initLanguage(languageId, (key) => {
            let ele = GameConfig.Language.getElement(key);
            if (ele == null)
                return "unknow_" + key;
            return ele.Value;
        });
        mw.UIScript.addBehavior("lan", (ui) => {
            let key = ui.text;
            if (key) {
                let lan = GameConfig.Language.getElement(key);
                if (lan)
                    ui.text = (lan.Value);
            }
        });
    }
    /**客户端的update */
    onUpdateC(dt) {
    }
    /**------------------------------------------- 客户端 ------------------------------------------------ */
    /**------------------------------------------- 服务端 ------------------------------------------------ */
    /**服务端的OnStart */
    onStartS() {
        DataStorage.setTemporaryStorage(SystemUtil.isPIE);
    }
    /**服务端的update */
    onUpdateS(dt) {
    }
};
__decorate([
    mw.Property({ displayName: "是否开启IAA", group: "面板设置" })
], GameLauncher.prototype, "isOpenIAA", void 0);
__decorate([
    mw.Property({ displayName: "多语言", group: "脚本设置", enumType: { "系统默认": -1, "英语": 0, "简体中文": 1, "繁体中文": 2, "日语": 3, "韩语": 4 } })
], GameLauncher.prototype, "languageId", void 0);
GameLauncher = __decorate([
    Component
], GameLauncher);
var GameLauncher$1 = GameLauncher;

var foreign20 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GameLauncher$1
});

// import { IShopItemElement } from "../../../config/ShopItem";
// import Utils from "../../../tools/Utils";
// import DiamondItem_Generate from "../../../ui-generate/module/CoinModule/DiamondItem_generate";
// import CoinModuleC from "../CoinModuleC";
// export default class DiamondItem extends DiamondItem_Generate {
//     private coinModuleC: CoinModuleC = null;
//     private get getCoinModuleC(): CoinModuleC {
//         if (this.coinModuleC == null) {
//             this.coinModuleC = ModuleService.getModule(CoinModuleC);
//         }
//         return this.coinModuleC;
//     }
//     /**
//      * 构造UI文件成功后，在合适的时机最先初始化一次
//      */
//     protected onStart() {
//         //设置能否每帧触发onUpdate
//         this.canUpdate = false;
//         this.layer = UILayerMiddle;
//         this.bindButton();
//     }
//     private bindButton(): void {
//         this.mBuyButton.onClicked.add(this.addBuyButton.bind(this));
//     }
//     private addBuyButton(): void {
//         // this.getCoinModuleC.buyDiamond(this.shopItemElement);
//     }
//     private shopItemElement: IShopItemElement = null;
//     public setData(value: IShopItemElement): void {
//         this.shopItemElement = value;
//         if (this.getCoinModuleC.getIsFirstBuy) {
//             Utils.setWidgetVisibility(this.mFirstBuyTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
//             Utils.setWidgetVisibility(this.mFirstCanvas, mw.SlateVisibility.SelfHitTestInvisible);
//             Utils.setWidgetVisibility(this.mLiBiCountTextBlock_Fake, mw.SlateVisibility.SelfHitTestInvisible);
//             this.mFirstDiamondTextBlock.text = `额外+${this.shopItemElement.Count}`;
//             this.mLiBiCountTextBlock_Fake.text = `${this.shopItemElement.PartyPrice * 2}`;
//         } else {
//             Utils.setWidgetVisibility(this.mFirstBuyTextBlock, mw.SlateVisibility.Collapsed);
//             Utils.setWidgetVisibility(this.mFirstCanvas, mw.SlateVisibility.Collapsed);
//             Utils.setWidgetVisibility(this.mLiBiCountTextBlock_Fake, mw.SlateVisibility.Collapsed);
//             this.mLiBiCountTextBlock_Real.position = new mw.Vector2(60, 15);
//             this.mIconImage.size = new mw.Vector2(190, 190);
//             this.mIconImage.position = new mw.Vector2(-20, 0);
//         }
//         this.mIconImage.imageGuid = this.shopItemElement.Icon;
//         this.mDiamondCountTextBlock.text = `+${this.shopItemElement.Count}`;
//         this.mLiBiCountTextBlock_Real.text = `${this.shopItemElement.PartyPrice}`;
//     }
//     public refreshUI(): void {
//         if (this.getCoinModuleC.getIsFirstBuy) return;
//         Utils.setWidgetVisibility(this.mFirstBuyTextBlock, mw.SlateVisibility.Collapsed);
//         Utils.setWidgetVisibility(this.mFirstCanvas, mw.SlateVisibility.Collapsed);
//         Utils.setWidgetVisibility(this.mLiBiCountTextBlock_Fake, mw.SlateVisibility.Collapsed);
//         this.mLiBiCountTextBlock_Real.position = new mw.Vector2(60, 15);
//         this.mIconImage.size = new mw.Vector2(190, 190);
//         this.mIconImage.position = new mw.Vector2(-20, 0);
//     }
// }

var foreign30 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

// import { Notice } from "../../../common/notice/Notice";
// import { GameConfig } from "../../../config/GameConfig";
// import { IShopItemElement } from "../../../config/ShopItem";
// import { TSIAPService } from "../../../tools/IAPInstance";
// import Utils from "../../../tools/Utils";
// import DiamondPanel_Generate from "../../../ui-generate/module/CoinModule/DiamondPanel_generate";
// import CoinModuleC from "../CoinModuleC";
// import DiamondItem from "./DiamondItem";
// export default class DiamondPanel extends DiamondPanel_Generate {
//     private coinModuleC: CoinModuleC = null;
//     private get getCoinModuleC(): CoinModuleC {
//         if (this.coinModuleC == null) {
//             this.coinModuleC = ModuleService.getModule(CoinModuleC);
//         }
//         return this.coinModuleC;
//     }
//     /**
//      * 构造UI文件成功后，在合适的时机最先初始化一次
//      */
//     protected onStart() {
//         //设置能否每帧触发onUpdate
//         this.canUpdate = false;
//         this.layer = UILayerMiddle;
//         this.bindButton();
//         this.initAction();
//     }
//     private bindButton(): void {
//         this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
//         this.mAdsButton.onClose.add(this.addAds.bind(this));
//         this.mAdsButton.text = `免费领取\n5个钻石`;
//     }
//     private initAction(): void {
//         TSIAPService.onArkCoinChange.add(this.addArkCoinChange.bind(this));
//     }
//     private addArkCoinChange(libeCount: number): void {
//         this.mLeBiCountTextBlock.text = libeCount.toString();
//     }
//     private addAds(isSuccess: boolean): void {
//         if (!isSuccess) {
//             Notice.showDownNotice(`领取失败,请重试`);
//             return;
//         }
//         this.getCoinModuleC.setDiamond(5);
//     }
//     private diamondItems: DiamondItem[] = [];
//     public initDiamondItem(): void {
//         GameConfig.ShopItem.getAllElement().forEach((value: IShopItemElement) => {
//             let diamondItem = UIService.create(DiamondItem);
//             diamondItem.setData(value);
//             this.mContentCanvas.addChild(diamondItem.uiObject);
//             this.diamondItems.push(diamondItem);
//         });
//         TSIAPService.reqRefreshCoin();
//     }
//     public refreshDiamondItems(): void {
//         this.diamondItems.forEach((value: DiamondItem) => {
//             value.refreshUI();
//         });
//     }
//     private addCloseButton(): void {
//         this.hideTween();
//     }
//     protected onShow(...params: any[]): void {
//         Utils.openUITween(
//             this.rootCanvas,
//             null,
//             null
//         );
//     }
//     /**
//      * 隐藏缓动
//      */
//     public hideTween(): void {
//         Utils.closeUITween(
//             this.rootCanvas,
//             null,
//             () => {
//                 this.hide();
//             });
//     }
// }

var foreign31 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/GMModule/GMHUD.ui
 * TIME: 2024.10.27-00.04.44
 */
let GMHUD_Generate = class GMHUD_Generate extends UIScript {
    get oKbutton() {
        if (!this.oKbutton_Internal && this.uiWidgetBase) {
            this.oKbutton_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/oKbutton');
        }
        return this.oKbutton_Internal;
    }
    get dropList() {
        if (!this.dropList_Internal && this.uiWidgetBase) {
            this.dropList_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/dropList');
        }
        return this.dropList_Internal;
    }
    get argText() {
        if (!this.argText_Internal && this.uiWidgetBase) {
            this.argText_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/argText');
        }
        return this.argText_Internal;
    }
    get cmdButton() {
        if (!this.cmdButton_Internal && this.uiWidgetBase) {
            this.cmdButton_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/cmdButton');
        }
        return this.cmdButton_Internal;
    }
    get pingText() {
        if (!this.pingText_Internal && this.uiWidgetBase) {
            this.pingText_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/pingText');
        }
        return this.pingText_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.oKbutton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "oKbutton");
        });
        this.initLanguage(this.oKbutton);
        this.oKbutton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.cmdButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "cmdButton");
        });
        this.initLanguage(this.cmdButton);
        this.cmdButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.pingText);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
GMHUD_Generate = __decorate([
    UIBind('UI/module/GMModule/GMHUD.ui')
], GMHUD_Generate);
var GMHUD_Generate$1 = GMHUD_Generate;

var foreign95 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GMHUD_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/GMModule/GMItem.ui
 * TIME: 2024.10.27-00.04.44
 */
let GMItem_Generate = class GMItem_Generate extends UIScript {
    get button() {
        if (!this.button_Internal && this.uiWidgetBase) {
            this.button_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/button');
        }
        return this.button_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.button.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "button");
        });
        this.initLanguage(this.button);
        this.button.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
GMItem_Generate = __decorate([
    UIBind('UI/module/GMModule/GMItem.ui')
], GMItem_Generate);
var GMItem_Generate$1 = GMItem_Generate;

var foreign96 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GMItem_Generate$1
});

var GMService_1;
const GMConfig = [];
function AddGMCommand(cmd) {
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
let GMService = GMService_1 = class GMService extends mw.Script {
    /**
     * 初始化UI
     */
    createUI(dropDownList) {
        GMConfig.forEach(cmd => {
            dropDownList.addItem(cmd);
        });
    }
    async onStart() {
        await ModuleService.ready();
        GMService_1.instance = this;
        if (mw.SystemUtil.isClient()) {
            console.log("[GM]：模块初始化");
            new GMBasePanel();
            Event.addLocalListener(EventType.OnOffMainHUD, (isOpen) => {
                isOpen ? OpenGMUI() : CloseGMUI();
            });
        }
    }
    /**
     * 调用命令
     * @param data
     */
    cmd(player, data, param) {
        if (mw.SystemUtil.isClient()) {
            if (data.clientCmd) {
                data.clientCmd(player, param);
            }
            if (data.serverCmd) {
                const index = GMConfig.indexOf(data);
                this.onServerCmd(player, index, param);
            }
        }
        else if (mw.SystemUtil.isServer()) {
            if (data.serverCmd) {
                data.serverCmd(player, param);
            }
            if (data.clientCmd) {
                const index = GMConfig.indexOf(data);
                this.onClientCmd(player, index, param);
            }
        }
    }
    onServerCmd(player, index, param) {
        GMConfig[index].serverCmd(player, param);
    }
    onClientCmd(player, index, param) {
        GMConfig[index].clientCmd(player, param);
    }
};
__decorate([
    RemoteFunction(mw.Server)
], GMService.prototype, "onServerCmd", null);
__decorate([
    RemoteFunction(mw.Client)
], GMService.prototype, "onClientCmd", null);
GMService = GMService_1 = __decorate([
    Component
], GMService);
var GMService$1 = GMService;
//主面板
class GMBasePanel {
    constructor() {
        this._view = mw.UIService.show(GMHUD_Generate$1);
        this.dropDownList = new DropdownList({ panel: this._view.dropList, button: this._view.oKbutton, label: this._view.cmdButton }, GMItem_Generate$1, (ui, data) => {
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
function OpenGMUI() {
    mw.UIService.show(GMHUD_Generate$1);
}
function CloseGMUI() {
    mw.UIService.hide(GMHUD_Generate$1);
}
class DropdownList {
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

var foreign32 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AddGMCommand: AddGMCommand,
    CloseGMUI: CloseGMUI,
    OpenGMUI: OpenGMUI,
    default: GMService$1
});

let Npc = class Npc extends Script {
    constructor() {
        super(...arguments);
        this.curHp = 0;
        this.pathVector = [mw.Vector.zero];
        this.moveSpeed = 300;
        /**爆炸特效 */
        this.explosionEffect = "27422";
        /**重生时间 */
        this.respawnTime = 5;
        /**重生特效 */
        this.respawnEffect = "142750";
        this.npc = null;
        /**--------------------------------【客户端】-------------------------------- */
        /**--------------------------------【服务端】-------------------------------- */
        this.playerModuleS = null;
        this.model = null;
        this.npcGunMoeld = null;
        this.frameCount = 0;
        this.maxFrameCount = 1;
        this.index = 0;
        this.pathFlag = true;
        this.curBossDir = mw.Vector.zero;
        this.targetPos = mw.Vector.zero;
        this.targetDistance = 0;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.onStartCS();
    }
    /**onStart */
    async onStartCS() {
        await ModuleService.ready();
        this.npc = this.gameObject;
        await this.npc.asyncReady();
        this.npc.collisionWithOtherCharacterEnabled = false;
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        }
        else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        }
        else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    /**--------------------------------【客户端】-------------------------------- */
    /**客户端的onStart */
    onStartC() {
        this.useUpdate = false;
        this.initDataC();
    }
    initDataC() {
        UIService.getUI(RadarPanel).setNpcPoint(this.npc);
        this.npc.setOutline(true, mw.LinearColor.red, 0.5);
        Helper.setPlayerObMap(this.npc.gameObjectId, this.npc.gameObjectId);
    }
    /**客户端的onUpdate */
    onUpdateC(dt) {
    }
    get getPlayerModuleS() {
        if (this.playerModuleS == null) {
            this.playerModuleS = ModuleService.getModule(PlayerModuleS);
        }
        return this.playerModuleS;
    }
    /**服务端的onStart */
    onStartS() {
        this.useUpdate = true;
        this.initDataS();
        this.initMove();
        this.bindEventS();
    }
    initDataS() {
        this.curHp = 100;
        this.npc.displayName = Utils.randomNpcName();
        this.setNpcDescriptionAndGun();
    }
    async setNpcDescriptionAndGun() {
        let ran = Utils.randomInt(1, 2); //TODO:WFZ
        if (ran == 1) {
            let morphElement = GameConfig.Morph.getElement(Utils.randomInt(1, GameConfig.Morph.getAllElement().length));
            let assetId = morphElement.AssetId;
            await Utils.asyncDownloadAsset(assetId);
            if (this.model)
                GameObjPool.despawn(this.model);
            this.model = await GameObjPool.asyncSpawn(assetId, mwext.GameObjPoolSourceType.Asset);
            this.model.setCollision(mw.PropertyStatus.Off);
            this.npc.attachToSlot(this.model, mw.HumanoidSlotType.Root);
            this.model.localTransform.position = new mw.Vector(0, 0, this.model.getBoundingBox().z / 2);
            this.model.localTransform.rotation = new mw.Rotation(morphElement.OffsetRot);
            if (this.npc.getVisibility())
                this.npc.setVisibility(false, false);
            if (this.npcGunMoeld && this.npcGunMoeld.getVisibility())
                this.npcGunMoeld.setVisibility(false);
            if (this.model && !this.model.getVisibility())
                this.model.setVisibility(true);
        }
        else {
            let roleId = GameConfig.ROLE.getElement(Utils.randomInt(1, GameConfig.ROLE.getAllElement().length)).ROLEID;
            await Utils.asyncDownloadAsset(roleId);
            this.npc.setDescription([roleId]);
            let gunId = GameConfig.WeaponProp.getElement(Utils.randomInt(1, GameConfig.WeaponProp.getAllElement().length)).WeaponIcon;
            await Utils.asyncDownloadAsset(gunId);
            if (this.npcGunMoeld)
                GameObjPool.despawn(this.npcGunMoeld);
            this.npcGunMoeld = await GameObjPool.asyncSpawn(gunId, mwext.GameObjPoolSourceType.Asset);
            this.npcGunMoeld.setCollision(mw.PropertyStatus.Off);
            this.npc.attachToSlot(this.npcGunMoeld, mw.HumanoidSlotType.RightHand);
            let somatotype = this.npc.description.advance.base.characterSetting.somatotype;
            let stanceId = (somatotype % 2 == 0) ? "49096" : "94258";
            await Utils.asyncDownloadAsset(stanceId);
            this.npc.loadSubStance(stanceId).play();
            if (!this.npc.getVisibility())
                this.npc.setVisibility(true, false);
            if (this.npcGunMoeld && !this.npcGunMoeld.getVisibility())
                this.npcGunMoeld.setVisibility(true);
            if (this.model && this.model.getVisibility())
                this.model.setVisibility(false);
        }
    }
    /**
     * 绑定事件
     */
    bindEventS() {
        PrefabEvent.PrefabEvtFight.onHit(this.playerAtkEnemyS.bind(this));
    }
    /**
     * 玩家攻击敌人
     * @param senderGuid
     * @param targetGuid
     * @param damage
     * @param hitPoint
     * @returns
     */
    playerAtkEnemyS(senderGuid, targetGuid, damage, hitPoint) {
        if (this.npc.gameObjectId != targetGuid)
            return;
        if (this.curHp <= 0)
            return;
        let tmpHp = this.curHp - damage;
        if (tmpHp > 0) {
            this.curHp = tmpHp;
        }
        else {
            this.curHp = 0;
            this.dieS();
            this.getPlayerModuleS.playerKillNpc(senderGuid);
            TimeUtil.delaySecond(this.respawnTime).then(() => {
                this.curHp = 100;
                this.respawnS();
            });
        }
        this.getPlayerModuleS.playerAtkNpcFlyText(senderGuid, hitPoint, damage);
    }
    dieS() {
        this.setNpcStateS(false);
        EffectService.playAtPosition(this.explosionEffect, this.gameObject.worldTransform.position, {
            scale: mw.Vector.one.multiply(1)
        });
    }
    async respawnS() {
        await this.setNpcDescriptionAndGun();
        this.setNpcStateS(true);
        EffectService.playOnGameObject(this.respawnEffect, this.npc, { slotType: mw.HumanoidSlotType.Root });
    }
    setNpcStateS(isVisibility) {
        this.npc.ragdollEnabled = !isVisibility;
        this.useUpdate = isVisibility;
        if (!isVisibility && this.model)
            this.model.setVisibility(isVisibility);
    }
    initMove() {
        this.targetPos = this.pathVector[this.index];
        this.npc.maxWalkSpeed = this.moveSpeed;
    }
    /**服务端的onUpdate */
    onUpdateS(dt) {
        this.frameCount++;
        if (this.frameCount < this.maxFrameCount)
            return;
        this.frameCount = 0;
        this.updateMove();
    }
    updateMove() {
        if (!this.pathVector || this.pathVector.length <= 1)
            return;
        this.curBossDir = this.targetPos.clone().add(this.targetPos.clone().subtract(this.npc.worldTransform.position.clone()));
        this.npc.lookAt(this.curBossDir);
        this.npc.addMovement(mw.Vector.forward);
        this.targetDistance = Math.sqrt(Math.pow(this.npc.worldTransform.position.x - this.pathVector[this.index].x, 2) +
            Math.pow(this.npc.worldTransform.position.y - this.pathVector[this.index].y, 2));
        //到达寻路点
        if (this.targetDistance > 50)
            return;
        if (this.pathFlag && this.index < this.pathVector.length - 1) {
            this.index++;
            if (this.index == this.pathVector.length - 1)
                this.pathFlag = false;
        }
        else if (!this.pathFlag && this.index > 0) {
            this.index--;
            if (this.index == 0)
                this.pathFlag = true;
        }
        this.targetPos = this.pathVector[this.index];
    }
    /**--------------------------------【服务端】-------------------------------- */
    /** 脚本被销毁时最后一帧执行完调用此函数 */
    onDestroy() {
    }
};
__decorate([
    mw.Property({ displayName: "当前剩余血量", group: "设置属性", tooltip: "当前剩余血量", replicated: true, onChanged: "onHpChanged" })
], Npc.prototype, "curHp", void 0);
__decorate([
    mw.Property({ displayName: "路径", group: "设置属性", tooltip: "路径" })
], Npc.prototype, "pathVector", void 0);
__decorate([
    mw.Property({ displayName: "移动速度", group: "设置属性", tooltip: "移动速度", range: { min: 100, max: 1000, showSlider: true } })
], Npc.prototype, "moveSpeed", void 0);
Npc = __decorate([
    Component
], Npc);
var Npc$1 = Npc;

var foreign39 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Npc$1
});

let AddMaxHp = class AddMaxHp extends Script {
    constructor() {
        super(...arguments);
        /**--------------------------------【客户端】-------------------------------- */
        this.playerModuleC = null;
        this.adPanel = null;
        this.confirmPanel = null;
        this.coinModuleC = null;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        }
        else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        }
        else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    get getPlayerModuleC() {
        if (this.playerModuleC == null) {
            this.playerModuleC = ModuleService.getModule(PlayerModuleC);
        }
        return this.playerModuleC;
    }
    get getAdPanel() {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    /**客户端的onStart */
    async onStartC() {
        await ModuleService.ready();
        this.useUpdate = false;
        this.initModule();
        this.initUIPanel();
        this.initTrigger();
    }
    initModule() {
        this.playerModuleC = ModuleService.getModule(PlayerModuleC);
    }
    initUIPanel() {
        this.adPanel = UIService.getUI(AdPanel);
    }
    initTrigger() {
        let trigger = this.gameObject;
        trigger.onEnter.add(this.onTriggerEnter.bind(this));
    }
    onTriggerEnter(character) {
        if (Player.localPlayer.character != character)
            return;
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                this.getPlayerModuleC.addMaxHp();
            }, StringUtil.format(GameConfig.Language.DoubleTheRewardMaximumHealthIncreasedTo.Value, GlobalData.maxHp * 2), GameConfig.Language.Cancel.Value, GameConfig.Language.FreeIncrease.Value);
        }
        else {
            this.getPlayerModuleC.addMaxHp();
        }
    }
    /**客户端的onUpdate */
    onUpdateC(dt) {
    }
    /**--------------------------------【客户端】-------------------------------- */
    /**--------------------------------【服务端】-------------------------------- */
    /**服务端的onStart */
    onStartS() {
        this.useUpdate = false;
    }
    /**服务端的onUpdate */
    onUpdateS(dt) {
    }
    /**--------------------------------【服务端】-------------------------------- */
    /** 脚本被销毁时最后一帧执行完调用此函数 */
    onDestroy() {
    }
};
AddMaxHp = __decorate([
    Component
], AddMaxHp);
var AddMaxHp$1 = AddMaxHp;

var foreign40 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: AddMaxHp$1
});

let TryOutGun = class TryOutGun extends Script {
    constructor() {
        super(...arguments);
        /**--------------------------------【客户端】-------------------------------- */
        this.morphModuleC = null;
        this.shopModuleC = null;
        this.adPanel = null;
        this.confirmPanel = null;
        this.coinModuleC = null;
        this.weaponModuleC = null;
        this.gunAnchor = null;
        this.gunModel = null;
        this.gunkey = null;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        }
        else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        }
        else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    get getMorphModuleC() {
        if (this.morphModuleC == null) {
            this.morphModuleC = ModuleService.getModule(MorphModuleC);
        }
        return this.morphModuleC;
    }
    get getShopModuleC() {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }
    get getAdPanel() {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    get getCoinModuleC() {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    get getWeaponModuleC() {
        if (!this.weaponModuleC) {
            this.weaponModuleC = ModuleService.getModule(WeaponModuleC);
        }
        return this.weaponModuleC;
    }
    /**客户端的onStart */
    async onStartC() {
        await ModuleService.ready();
        this.useUpdate = false;
        this.initGunAnchor();
        this.initUIPanel();
        this.initTrigger();
    }
    initGunAnchor() {
        this.gunAnchor = this.gameObject.getChildByName("gunAnchor");
        this.switchGunModel(Utils.randomInt(10, 15));
    }
    initUIPanel() {
        this.adPanel = UIService.getUI(AdPanel);
    }
    initTrigger() {
        let trigger = this.gameObject;
        trigger.onEnter.add(this.onTriggerEnter.bind(this));
    }
    onTriggerEnter(character) {
        if (Player.localPlayer.character != character)
            return;
        let gunElement = GameConfig.WeaponProp.getElement(this.gunkey);
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                if (!this.gunkey)
                    return;
                this.switchGun();
                this.switchGunModel(Utils.randomInt(10, 15));
            }, StringUtil.format(GameConfig.Language.FreeUseOfOneRound.Value, gunElement.WeaponName), GameConfig.Language.Cancel.Value, GameConfig.Language.FreeToUse.Value);
        }
        else {
            if (!this.gunkey)
                return;
            this.switchGun();
            this.switchGunModel(Utils.randomInt(10, 15));
        }
    }
    switchGun() {
        if (this.getMorphModuleC.getIsMorph) {
            this.getShopModuleC.setUseShopId_Gun(this.gunkey);
        }
        else {
            this.getWeaponModuleC.switchWeaponData(this.gunkey);
        }
    }
    async switchGunModel(key) {
        if (this.gunkey == key)
            return;
        this.gunkey = key;
        if (this.gunModel)
            GameObjPool.despawn(this.gunModel);
        let gunElement = GameConfig.WeaponProp.getElement(this.gunkey);
        let gunId = gunElement.PrefabId;
        await Utils.asyncDownloadAsset(gunId);
        this.gunModel = await GameObjPool.asyncSpawn(gunId, mwext.GameObjPoolSourceType.Prefab);
        this.gunModel.parent = this.gunAnchor;
        this.gunModel.localTransform.position = gunElement.GunLoc;
        this.gunModel.localTransform.rotation = new mw.Rotation(0, 15, 0);
        this.gunModel.localTransform.scale = gunElement.GunScale;
    }
    /**客户端的onUpdate */
    onUpdateC(dt) {
    }
    /**--------------------------------【客户端】-------------------------------- */
    /**--------------------------------【服务端】-------------------------------- */
    /**服务端的onStart */
    onStartS() {
        this.useUpdate = false;
    }
    /**服务端的onUpdate */
    onUpdateS(dt) {
    }
    /**--------------------------------【服务端】-------------------------------- */
    /** 脚本被销毁时最后一帧执行完调用此函数 */
    onDestroy() {
    }
};
TryOutGun = __decorate([
    Component
], TryOutGun);
var TryOutGun$1 = TryOutGun;

var foreign44 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TryOutGun$1
});

let ProjectTarget = class ProjectTarget extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        }
        else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        }
        else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    /**--------------------------------【客户端】-------------------------------- */
    /**客户端的onStart */
    async onStartC() {
        this.useUpdate = false;
        await ModuleService.ready();
        this.setProjectTarget();
        this.testOnHit();
    }
    setProjectTarget() {
        Utils.setProjectTarget(this.gameObject);
    }
    testOnHit() {
        PrefabEvent.PrefabEvtFight.onHit((attackerId, targetId, damage, position) => {
            if (this.gameObject.gameObjectId != targetId)
                return;
            FlyText.instance.showFlyText("-" + damage, position);
        });
    }
    /**客户端的onUpdate */
    onUpdateC(dt) {
    }
    /**--------------------------------【客户端】-------------------------------- */
    /**--------------------------------【服务端】-------------------------------- */
    /**服务端的onStart */
    onStartS() {
        this.useUpdate = false;
    }
    /**服务端的onUpdate */
    onUpdateS(dt) {
    }
    /**--------------------------------【服务端】-------------------------------- */
    /** 脚本被销毁时最后一帧执行完调用此函数 */
    onDestroy() {
    }
};
ProjectTarget = __decorate([
    Component
], ProjectTarget);
var ProjectTarget$1 = ProjectTarget;

var foreign69 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ProjectTarget$1
});

var FreeCamera_1;
let FreeCamera = FreeCamera_1 = class FreeCamera extends Script {
    constructor() {
        super(...arguments);
        /** 摄像机锚点移动速度 */
        this.speed = 500;
        /** 移动叠加向量 */
        this._moveDirection = Vector.zero;
        /** 移动临时位置 */
        this._moveLoc = Vector.zero;
        /** 比值用常量 */
        this.VECTOR_ZERO = Vector.zero;
        /** 是否处于自由视角状态 */
        this.isFreeCamera = false;
        this.isFirstChange = true;
    }
    onStart() {
        this.init();
    }
    async init() {
        if (SystemUtil.isServer())
            return;
        await (await Player.asyncGetLocalPlayer()).character.asyncReady();
        this.freeCamera = await GameObject.asyncSpawn("Camera");
        this.freeCamera.springArm.localTransform = Transform.identity;
        // Config
        this.freeCamera.upAngleLimit = 89.9;
        this.freeCamera.downAngleLimit = 89.9;
        this.freeCamera.localTransform = Transform.identity;
        this.freeCamera.springArm.localTransform = Transform.identity;
        this.freeCamera.springArm.length = 0;
        this.freeCamera.springArm.collisionEnabled = false;
        InputUtil.onKeyDown(Keys.F8, () => {
            if (this.isFreeCamera) {
                this.exitFreeCamera();
            }
            else {
                this.enterFreeCamera();
            }
        });
        InputUtil.onKeyDown(Keys.NumPadNine, () => {
            this.freeCamera.springArm.worldTransform.position = Player.localPlayer.character.worldTransform.position.clone();
            this._moveLoc = this.freeCamera.springArm.worldTransform.position.clone();
        });
        Event.addLocalListener(FreeCamera_1.EVENTS_JOYSTICK_INPUT, (dir) => {
            if (this.freeCamera) {
                const forward = this.freeCamera.worldTransform.clone().getForwardVector().clone();
                const right = this.freeCamera.worldTransform.clone().getRightVector().clone();
                this._moveDirection.set(forward.multiply(dir.y).add(right.multiply(dir.x)));
                Vector.add(this._moveLoc, this._moveDirection.normalized.multiply(this.speed * 0.02), this._moveLoc);
                this.freeCamera.springArm.worldTransform.position = this._moveLoc;
                // 避免重复使用
                if (this.useUpdate)
                    this.useUpdate = false;
            }
        });
        KeyActionManager.instance.add([Keys.W, Keys.S, Keys.A, Keys.D, Keys.E, Keys.Q]);
    }
    /**
     * 切换至自由视角摄像机（暂未提供触屏控制方式）
     */
    enterFreeCamera() {
        if (!this.originCamera) {
            this.originCamera = Camera.currentCamera;
        }
        if (this.isFirstChange) {
            this.freeCamera.springArm.worldTransform.position = Player.localPlayer.character.worldTransform.position.clone();
            this._moveLoc = this.freeCamera.springArm.worldTransform.position.clone();
            this.isFirstChange = false;
        }
        Camera.switch(this.freeCamera, 0);
        this.originCamera.springArm.useControllerRotation = false;
        this.freeCamera.springArm.useControllerRotation = true;
        Player.localPlayer.character.movementEnabled = false;
        this.isFreeCamera = true;
        this.useUpdate = true;
    }
    /**
     * 退出自由视角摄像机
     */
    exitFreeCamera() {
        if (!this.isFreeCamera)
            return;
        Camera.switch(this.originCamera, 0);
        this.originCamera.springArm.useControllerRotation = true;
        this.freeCamera.springArm.useControllerRotation = false;
        Player.localPlayer.character.movementEnabled = true;
        this.isFreeCamera = false;
        this.useUpdate = false;
    }
    onUpdate(dt) {
        // 监听按键并叠加控制锚点位移的向量
        if (KeyActionManager.instance.isPress(Keys.W)) {
            // 将三维向量压缩至二维使用
            const forward = this.freeCamera.worldTransform.clone().getForwardVector().clone();
            this._moveDirection.x += forward.x;
            this._moveDirection.y += forward.y;
        }
        if (KeyActionManager.instance.isPress(Keys.S)) {
            const back = this.freeCamera.worldTransform.clone().getForwardVector().clone().multiply(-1);
            this._moveDirection.x += back.x;
            this._moveDirection.y += back.y;
        }
        if (KeyActionManager.instance.isPress(Keys.A)) {
            const left = this.freeCamera.worldTransform.clone().getRightVector().clone().multiply(-1);
            this._moveDirection.x += left.x;
            this._moveDirection.y += left.y;
        }
        if (KeyActionManager.instance.isPress(Keys.D)) {
            const right = this.freeCamera.worldTransform.clone().getRightVector().clone();
            this._moveDirection.x += right.x;
            this._moveDirection.y += right.y;
        }
        if (KeyActionManager.instance.isPress(Keys.E)) {
            this._moveDirection.z += 1;
        }
        if (KeyActionManager.instance.isPress(Keys.Q)) {
            this._moveDirection.z -= 1;
        }
        // 为锚点设置叠加后向量，实现无限制位移
        if (!this._moveDirection.equals(this.VECTOR_ZERO)) {
            Vector.add(this._moveLoc, this._moveDirection.normalized.multiply(this.speed * dt), this._moveLoc);
            this.freeCamera.springArm.worldTransform.position = this._moveLoc;
            this._moveDirection.x = 0;
            this._moveDirection.y = 0;
            this._moveDirection.z = 0;
        }
    }
};
FreeCamera.EVENTS_JOYSTICK_INPUT = "FreeCamera.EVENTS_JOYSTICK_INPUT";
FreeCamera = FreeCamera_1 = __decorate([
    Component
], FreeCamera);
var FreeCamera$1 = FreeCamera;
/**
 * 按键状态管理器
 */
class KeyActionManager {
    constructor() {
        /** 初始化标记 */
        this.isReady = false;
        /** 按下状态表 */
        this._actionStates = new Map;
        this._btnStates = new Map;
    }
    static get instance() {
        if (!KeyActionManager._instance) {
            KeyActionManager._instance = new KeyActionManager();
        }
        return KeyActionManager._instance;
    }
    /**
     * 检测按键是否被按下，无延迟（需要在update中调用，留意性能开销）
     * @param action 项目内按键操作枚举
     * @returns 是否被按下
     */
    isPress(action) {
        if (action instanceof mw.Button) {
            return this._btnStates.get(action.guid);
        }
        else {
            return this._actionStates.get(action);
        }
    }
    /**
     * 为指定按钮添加状态监听
     * @param btn 需要监听状态的按钮
     */
    add(btn) {
        // 初始化按下状态 并设定状态改变监听
        if (btn instanceof Button) {
            this._btnStates.set(btn.guid, false);
            btn.onPressed.add(() => {
                this._btnStates.set(btn.guid, true);
            });
            btn.onReleased.add(() => {
                this._btnStates.set(btn.guid, false);
            });
        }
        else {
            btn.forEach(element => {
                this._actionStates.set(element, false);
                InputUtil.onKeyDown(element, () => {
                    this._actionStates.set(element, true);
                });
                InputUtil.onKeyUp(element, () => {
                    this._actionStates.set(element, false);
                });
            });
        }
    }
}

var foreign76 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: FreeCamera$1
});

class TSIAP {
    constructor() {
        /**功能是否开放 */
        this.enable = false;
        /**乐币数量 */
        this.arkCoin = 0;
        /**乐币数量监听回调 */
        this.onArkCoinChange = new Action1();
        if (SystemUtil.isClient()) {
            mw.MessageChannelService.registerAction("bridge.action.feature.support.result", this, (dataStr) => {
                try {
                    const resp = JSON.parse(dataStr).data;
                    if (resp.feature == "isIAPEnable") {
                        this.enable = resp.isSupport;
                    }
                }
                catch (err) {
                }
            });
            this.reqIAP();
            PurchaseService.onArkBalanceUpdated.add((amount) => {
                this.arkCoin = amount;
                this.onArkCoinChange.call(amount);
            });
            this.reqRefreshCoin();
        }
    }
    reqIAP() {
        const Data = {
            "action": "ue.action.feature.support",
            "messageId": 0,
            "callbackType": "Call",
            "data": {
                "feature": "isIAPEnable"
            }
        };
        const DataStr = JSON.stringify(Data);
        mw.MessageChannelService.sendTo(mw.MessageChannelReceiver.Client, DataStr);
    }
    /**
     * 客户端发起购买
     * @param commodityId 商品Code
     * @returns
     */
    reqBuyGoods(commodityId) {
        return new Promise((result) => {
            console.warn("发起购买的code", commodityId);
            PurchaseService.placeOrder(commodityId, 1, (status, msg) => {
                console.warn(`IAP_BuyCallback__,status:${status},msg:${msg},id:${commodityId}`);
                PurchaseService.getArkBalance();
                if (status == 200) {
                    result(true);
                    console.warn("订单支付成功!," + commodityId);
                }
                else {
                    result(false);
                    console.warn(`订单支付失败, id:${commodityId},msg:${msg}`);
                    // Notice.showDownNotice(`订单支付失败`);
                }
            });
        });
    }
    /**
     * 乐币是否足够
     * @param cost 花费金额
     * @returns
     */
    isArkCoinEnough(cost) {
        return this.arkCoin >= cost;
    }
    /**
     * 客户端发起刷新乐币
     */
    reqRefreshCoin() {
        PurchaseService.getArkBalance();
    }
}
let TSIAPService = new TSIAP();

var foreign79 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TSIAPService: TSIAPService
});

let JumpGame = class JumpGame extends Script {
    constructor() {
        super(...arguments);
        /**------------------------------------------- 客户端 ------------------------------------------------ */
        this.confirmPanel = null;
        this.jumpTrigger = null;
        /**------------------------------------------- 服务端 ------------------------------------------------ */
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        if (mw.SystemUtil.isClient()) {
            this.useUpdate = false;
            this.onStartC();
        }
        else if (mw.SystemUtil.isServer()) {
            this.useUpdate = false;
            this.onStartS();
        }
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        }
        else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    get getConfirmPanel() {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    /**客户端的OnStart */
    onStartC() {
        this.jumpTrigger = this.gameObject;
        this.jumpTrigger.onEnter.add((character) => {
            if (Player.localPlayer.character != character)
                return;
            // this.getConfirmPanel.confirmTips(() => {
            //     mw.RouteService.enterNewGame("P_3440ed187d6a2079f7a42e496389c0a43267d222");
            // }, "前往 枪战躲猫猫-私人别墅", "前往", "取消");
        });
    }
    /**客户端的update */
    onUpdateC(dt) {
    }
    /**------------------------------------------- 客户端 ------------------------------------------------ */
    /**------------------------------------------- 服务端 ------------------------------------------------ */
    /**服务端的OnStart */
    onStartS() {
    }
    /**服务端的update */
    onUpdateS(dt) {
    }
};
JumpGame = __decorate([
    Component
], JumpGame);
var JumpGame$1 = JumpGame;

var foreign80 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: JumpGame$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/common/JumpGameTips.ui
 * TIME: 2024.10.27-00.04.44
 */
let JumpGameTips_Generate = class JumpGameTips_Generate extends UIScript {
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        //文本多语言
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/TextBlock"));
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
JumpGameTips_Generate = __decorate([
    UIBind('UI/common/JumpGameTips.ui')
], JumpGameTips_Generate);
var JumpGameTips_Generate$1 = JumpGameTips_Generate;

var foreign86 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: JumpGameTips_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/common/notice/SecondNoticeItem.ui
 * TIME: 2024.10.27-00.04.44
 */
let SecondNoticeItem_Generate = class SecondNoticeItem_Generate extends UIScript {
    get txt_context() {
        if (!this.txt_context_Internal && this.uiWidgetBase) {
            this.txt_context_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/txt_context');
        }
        return this.txt_context_Internal;
    }
    get icon() {
        if (!this.icon_Internal && this.uiWidgetBase) {
            this.icon_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/icon');
        }
        return this.icon_Internal;
    }
    get effect() {
        if (!this.effect_Internal && this.uiWidgetBase) {
            this.effect_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/effect');
        }
        return this.effect_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.txt_context);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
SecondNoticeItem_Generate = __decorate([
    UIBind('UI/common/notice/SecondNoticeItem.ui')
], SecondNoticeItem_Generate);
var SecondNoticeItem_Generate$1 = SecondNoticeItem_Generate;

var foreign88 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SecondNoticeItem_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/CoinModule/DiamondItem.ui
 * TIME: 2024.10.27-00.04.44
 */
let DiamondItem_Generate = class DiamondItem_Generate extends UIScript {
    get mFirstBuyTextBlock() {
        if (!this.mFirstBuyTextBlock_Internal && this.uiWidgetBase) {
            this.mFirstBuyTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mFirstBuyTextBlock');
        }
        return this.mFirstBuyTextBlock_Internal;
    }
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/IconImage/mIconImage');
        }
        return this.mIconImage_Internal;
    }
    get mDiamondCountTextBlock() {
        if (!this.mDiamondCountTextBlock_Internal && this.uiWidgetBase) {
            this.mDiamondCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mDiamondCountTextBlock');
        }
        return this.mDiamondCountTextBlock_Internal;
    }
    get mFirstCanvas() {
        if (!this.mFirstCanvas_Internal && this.uiWidgetBase) {
            this.mFirstCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mFirstCanvas');
        }
        return this.mFirstCanvas_Internal;
    }
    get mFirstDiamondTextBlock() {
        if (!this.mFirstDiamondTextBlock_Internal && this.uiWidgetBase) {
            this.mFirstDiamondTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mFirstCanvas/FirstBgImage/mFirstDiamondTextBlock');
        }
        return this.mFirstDiamondTextBlock_Internal;
    }
    get mLeBiCanvas() {
        if (!this.mLeBiCanvas_Internal && this.uiWidgetBase) {
            this.mLeBiCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mLeBiCanvas');
        }
        return this.mLeBiCanvas_Internal;
    }
    get mLiBiCountTextBlock_Real() {
        if (!this.mLiBiCountTextBlock_Real_Internal && this.uiWidgetBase) {
            this.mLiBiCountTextBlock_Real_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mLeBiCanvas/LiBiCanvas/mLiBiCountTextBlock_Real');
        }
        return this.mLiBiCountTextBlock_Real_Internal;
    }
    get mLiBiCountTextBlock_Fake() {
        if (!this.mLiBiCountTextBlock_Fake_Internal && this.uiWidgetBase) {
            this.mLiBiCountTextBlock_Fake_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mLeBiCanvas/LiBiCanvas/mLiBiCountTextBlock_Real/mLiBiCountTextBlock_Fake');
        }
        return this.mLiBiCountTextBlock_Fake_Internal;
    }
    get mBuyButton() {
        if (!this.mBuyButton_Internal && this.uiWidgetBase) {
            this.mBuyButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mBuyButton');
        }
        return this.mBuyButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mBuyButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mBuyButton");
        });
        this.mBuyButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mFirstBuyTextBlock);
        this.initLanguage(this.mDiamondCountTextBlock);
        this.initLanguage(this.mFirstDiamondTextBlock);
        this.initLanguage(this.mLiBiCountTextBlock_Real);
        this.initLanguage(this.mLiBiCountTextBlock_Fake);
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
DiamondItem_Generate = __decorate([
    UIBind('UI/module/CoinModule/DiamondItem.ui')
], DiamondItem_Generate);
var DiamondItem_Generate$1 = DiamondItem_Generate;

var foreign93 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: DiamondItem_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/CoinModule/DiamondPanel.ui
 * TIME: 2024.10.27-00.04.44
 */
let DiamondPanel_Generate = class DiamondPanel_Generate extends UIScript {
    get mMainCanvas() {
        if (!this.mMainCanvas_Internal && this.uiWidgetBase) {
            this.mMainCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas');
        }
        return this.mMainCanvas_Internal;
    }
    get mContentCanvas() {
        if (!this.mContentCanvas_Internal && this.uiWidgetBase) {
            this.mContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mContentCanvas');
        }
        return this.mContentCanvas_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mCloseButton');
        }
        return this.mCloseButton_Internal;
    }
    get mAdsButton() {
        if (!this.mAdsButton_Internal && this.uiWidgetBase) {
            this.mAdsButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mAdsButton');
        }
        return this.mAdsButton_Internal;
    }
    get mLeBiIconImage() {
        if (!this.mLeBiIconImage_Internal && this.uiWidgetBase) {
            this.mLeBiIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mLeBiIconImage');
        }
        return this.mLeBiIconImage_Internal;
    }
    get mLeBiCountTextBlock() {
        if (!this.mLeBiCountTextBlock_Internal && this.uiWidgetBase) {
            this.mLeBiCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainCanvas/mLeBiIconImage/mLeBiCountTextBlock');
        }
        return this.mLeBiCountTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mCloseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        });
        this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mLeBiCountTextBlock);
        //文本多语言
        this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mMainCanvas/TitleTextBlock"));
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
DiamondPanel_Generate = __decorate([
    UIBind('UI/module/CoinModule/DiamondPanel.ui')
], DiamondPanel_Generate);
var DiamondPanel_Generate$1 = DiamondPanel_Generate;

var foreign94 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: DiamondPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RadarModule/RadarPanel.ui
 * TIME: 2024.10.27-00.04.45
 */
let RadarPanel_Generate = class RadarPanel_Generate extends UIScript {
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /**初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /**显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /**隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
RadarPanel_Generate = __decorate([
    UIBind('UI/module/RadarModule/RadarPanel.ui')
], RadarPanel_Generate);
var RadarPanel_Generate$1 = RadarPanel_Generate;

var foreign99 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RadarPanel_Generate$1
});

const MWModuleMap = { 
     '27643B81439C93F721FD7BBEDE45563D': foreign1,
     '813235114A72C16E1CDCC5B93F3A45DC': foreign2,
     '8844A03B4B6BEF9D15DCAAA48FB26A57': foreign3,
     'B0B4B657452A9DF4B7AD97B03BE71040': foreign4,
     '1EADC67E44A4E69AE0536FAD402CBF72': foreign5,
     '943D729E44EDCB8FC0E0E0A49FC4B81D': foreign6,
     'F049F4BA47F3C76EC8EDE2BB1DC92637': foreign7,
     '9B86B84E423B84B77E564D8B0651277C': foreign8,
     '166E934A4902E0274794828A310EFA30': foreign9,
     '6374DD3342310CB36D6D868EC5478FF4': foreign10,
     '6382D7424AF70223022A13AA574C6E2E': foreign11,
     '4C6CF64F4A6BCA61A02F0F818F7E8A19': foreign12,
     'EC2961B34147096FC9DBC2971DD9AA53': foreign13,
     '6A277D5049CE2CE92CD7339A98FE615B': foreign14,
     'E19C4FBC41BEE3AD41222B8D64AAD365': foreign15,
     '011052CD4ED0D3DC9960ABBFBBC46D5A': foreign16,
     'C2E7A2E041E5BB00F9451CBBBF64D6A6': foreign17,
     '5CA2293C4B0A9CA7C2D0CBBF73D219E2': foreign18,
     'C319097045752CFC53190794AB2BCD76': foreign19,
     '290F1F4D42ECBF13317BD8BC212FA75A': foreign20,
     '2E162EDD4A7F55E58539648F012097D2': foreign21,
     '36994D0E483CF7F6283CAFACCB406590': foreign22,
     'F80D68DA497F0D49745DDE80D38E9011': foreign23,
     '0F598A9C453EA67A85B875B1E1D8AB93': foreign24,
     '7D98F77C457BD44550899198F36FDB9F': foreign25,
     '188EB62D4BAF9B98F91C589C70DE4698': foreign26,
     '2943C580492BC867A5B690B2B178012A': foreign27,
     '533992264411311B6F383EBE0ECF1BB5': foreign28,
     '2A2161914E537A9F71E302BCA0CA6AC6': foreign29,
     '42EE39EA49315FAE8563A88B97E3F060': foreign30,
     '34514D87410DC61DB5B64C9DCE81A833': foreign31,
     'C6239AAF49000AB5543412A4C68EAD31': foreign32,
     '43D19C1D40CA859F774230B98EE261B5': foreign33,
     '7B3F640D45CDC99A229EFDBBC3F50ABD': foreign34,
     '66C82E484C9BFB4ADA02618A95752286': foreign35,
     'DAA40DEE420925A8EA2B4FB015573440': foreign36,
     '8E647D8F40D9B4AE1A1349ACD3C3F392': foreign37,
     '21227DCE4B6FB5C99FA72BA5B225A752': foreign38,
     '1B12D2CD40775D42550AC8B64BACB2B5': foreign39,
     '3B463A284FD7B66C9489AA8EC3AC8A23': foreign40,
     'B8D3411E480AD6F4CBA476A88A02FD84': foreign41,
     '001BB3D44F528AD6DFEB5BBB7FF03216': foreign42,
     '0C60A5DE4F7AF9F8DE3381B2CECCE96F': foreign43,
     '885A77EA4AC06DB2ABF8EB9F4AC89BA5': foreign44,
     'C414180848195EEA22C4BC8C95BB22CB': foreign45,
     '2C98E91946EADE4E5FDA0EB10A1AEC93': foreign46,
     '7BDEA3704CEBB5559C6239928321865C': foreign47,
     '7833C871441E612CC5B5CE9BDDA947C9': foreign48,
     'A12B8D524B602E750EB63288C79D32E2': foreign49,
     'F057824E4569A842D403858DC7D1D88B': foreign50,
     '9F1D50A144B07BFAFC552F925299CE71': foreign51,
     '3E1D070A4147D9A5B46E0EAF1E5FD4E1': foreign52,
     'F215908B4B4F40F5531DE4A01F660731': foreign53,
     '89FAB6BA4950774A1AEE0AA919005864': foreign54,
     '448F172F473F500F568CE69787A05879': foreign55,
     '7C89EFEF4B37DB0513F2659514BB7B93': foreign56,
     'C7E79CD049A93AFDBCA399B718D2D8DC': foreign57,
     '21E846D34531A31F92F411BB9E300D5B': foreign58,
     '5F4167AC4B1A67501A0DD4A98DCCE793': foreign59,
     'C2A63B424C2C17C9DE3395B59BA9444C': foreign60,
     '4CA21C094DAD2346E120EFBEA3D7736C': foreign61,
     'E8535D714F5BFEC20EF595B175FA24BD': foreign62,
     '7B098C68429B7A33AA075BB6631641B6': foreign63,
     'A41BD48545CC9593CB2B62B8C8BD8505': foreign64,
     '4CF1BF6940037F5268A8B4B1C326C0E1': foreign65,
     '799144174FCC1F72D4AAD2B8C0D23A93': foreign66,
     '7969AEF34724BDC60E081286C23D4945': foreign67,
     'D9B1CF04450CE54C9707ECA7D804DA6C': foreign68,
     '5224C416400F824F56E4AB9FA410B705': foreign69,
     '018CFAAD48940396A20DC296154E69CF': foreign70,
     '02178C534E1EACB3145516B4D5E08CA6': foreign71,
     '586E7BD34D881F24CE4369A4C4ACD64D': foreign72,
     '75DBE6154A88D0897AB52CB8303D0D68': foreign73,
     'C8CD71394F0002E646F3F093BF3B8A20': foreign74,
     '761A5E774007E1CA28720DB572DA7A45': foreign75,
     '3A19265E439F9BC57DD9188415D69D90': foreign76,
     'ACB26C334F3E66726611CAAACE1B29F0': foreign77,
     'C3A91C494BCF42191B03718F492DFA64': foreign78,
     '5F9FD257458AA792F70050AEC35F3C7F': foreign79,
     '86F0A1A849C1B3DE1E04178576CB52FF': foreign80,
     'A30FDC1848F2A2BB4F412FB42FC6A123': foreign81,
     'CD82A2E448FA71DD00529A8B5261ED6C': foreign82,
     '7BC3DC9143A0AC886B7C69BF0BA72582': foreign83,
     '0ADADD634CB1574E2CE91AA7D15972BF': foreign84,
     '2F33F92C43E1FE19AADC9F869E4783F3': foreign85,
     'BEE82D4145CF7AADF455DA8F65630FCE': foreign86,
     'BF72AC404FF17C439A9112B6B4B32279': foreign87,
     'A012B90749779FBE8DE607A2B99C7BBD': foreign88,
     '82E080274DC72CA9D26CFF80275210C8': foreign89,
     'B445B07141F3B81911589FB86B887D16': foreign90,
     '3738A163431B2780E684368D4B44D659': foreign91,
     '9A05761A4E0937CD96EDBD98F5CF127C': foreign92,
     'AA29C1244938B00FCD91B2AF49E1CD69': foreign93,
     '5AFEABF6491C62D9F43C6094E8586D99': foreign94,
     '69B56DE846DD7777A34F73BAAD388917': foreign95,
     'C8403C274C4A11E56CBA4ABE1BB56FE9': foreign96,
     '6378A8BD4992C396F0BF5795C241272A': foreign97,
     'E65657ED48A221438A440EB8FB55AB3A': foreign98,
     '4BAAB5D2447B37D97384719CE67C9E72': foreign99,
     '4B7AD5B5415D6B34A20794B83D33C8D4': foreign100,
     '8B4959C3457E9E607BFD83A45E3B0B4E': foreign101,
     '61C409DE43B68BAD7C2712AC407F6B85': foreign102,
     'BD732EF648AD01E5A18863865EF79E7F': foreign103,
     'D7D5128A42442933D108809A874A1F67': foreign104,
     '5951240940FFACB56FF8EB8F140D19E5': foreign105,
     'E0AAC56B4C54E8B2B8B946A3EB4D60C5': foreign106,
     '54FA95C94AC4FD0AE2C3AF985B5862A7': foreign107,
     '181ACB1C48C92C4E510D6B94FA31BD79': foreign108,
};
const MWFileMapping = new WeakMap([[foreign1 || {}, "JavaScripts/common/ConfirmPanel"],
[foreign2 || {}, "JavaScripts/common/Monster"],
[foreign3 || {}, "JavaScripts/common/notice/Notice"],
[foreign4 || {}, "JavaScripts/common/notice/Tween"],
[foreign5 || {}, "JavaScripts/common/notice/UIPool"],
[foreign6 || {}, "JavaScripts/common/notice/Updater"],
[foreign7 || {}, "JavaScripts/common/setTag"],
[foreign8 || {}, "JavaScripts/config/ConfigBase"],
[foreign9 || {}, "JavaScripts/config/GameConfig"],
[foreign10 || {}, "JavaScripts/config/GUN"],
[foreign11 || {}, "JavaScripts/config/Language"],
[foreign12 || {}, "JavaScripts/config/MonsterInfo"],
[foreign13 || {}, "JavaScripts/config/Morph"],
[foreign14 || {}, "JavaScripts/config/ProjectileProp"],
[foreign15 || {}, "JavaScripts/config/ROLE"],
[foreign16 || {}, "JavaScripts/config/ShopItem"],
[foreign17 || {}, "JavaScripts/config/Task"],
[foreign18 || {}, "JavaScripts/config/TRAILING"],
[foreign19 || {}, "JavaScripts/config/WeaponProp"],
[foreign20 || {}, "JavaScripts/GameLauncher"],
[foreign21 || {}, "JavaScripts/module/ActivityModule/ActivityData"],
[foreign22 || {}, "JavaScripts/module/ActivityModule/ActivityModuleC"],
[foreign23 || {}, "JavaScripts/module/ActivityModule/ActivityModuleS"],
[foreign24 || {}, "JavaScripts/module/ActivityModule/ui/ActivityPanel"],
[foreign25 || {}, "JavaScripts/module/AdModule/ui/AdPanel"],
[foreign26 || {}, "JavaScripts/module/CoinModule/CoinData"],
[foreign27 || {}, "JavaScripts/module/CoinModule/CoinModuleC"],
[foreign28 || {}, "JavaScripts/module/CoinModule/CoinModuleS"],
[foreign29 || {}, "JavaScripts/module/CoinModule/ui/CoinPanel"],
[foreign30 || {}, "JavaScripts/module/CoinModule/ui/DiamondItem"],
[foreign31 || {}, "JavaScripts/module/CoinModule/ui/DiamondPanel"],
[foreign32 || {}, "JavaScripts/module/GMModule/GMService"],
[foreign33 || {}, "JavaScripts/module/HUDModule/HUDData"],
[foreign34 || {}, "JavaScripts/module/HUDModule/HUDModuleC"],
[foreign35 || {}, "JavaScripts/module/HUDModule/HUDModuleS"],
[foreign36 || {}, "JavaScripts/module/HUDModule/ui/HUDPanel"],
[foreign37 || {}, "JavaScripts/module/HUDModule/ui/KillTipItem"],
[foreign38 || {}, "JavaScripts/module/MorphModule/MorphModule"],
[foreign39 || {}, "JavaScripts/module/NpcModule/Npc"],
[foreign40 || {}, "JavaScripts/module/PlayerModule/AddMaxHp"],
[foreign41 || {}, "JavaScripts/module/PlayerModule/PlayerData"],
[foreign42 || {}, "JavaScripts/module/PlayerModule/PlayerModuleC"],
[foreign43 || {}, "JavaScripts/module/PlayerModule/PlayerModuleS"],
[foreign44 || {}, "JavaScripts/module/PlayerModule/TryOutGun"],
[foreign45 || {}, "JavaScripts/module/RadarModule/RadarModuleC"],
[foreign46 || {}, "JavaScripts/module/RadarModule/RadarModuleS"],
[foreign47 || {}, "JavaScripts/module/RadarModule/ui/RadarPanel"],
[foreign48 || {}, "JavaScripts/module/RankModule/RankData"],
[foreign49 || {}, "JavaScripts/module/RankModule/RankModuleC"],
[foreign50 || {}, "JavaScripts/module/RankModule/RankModuleS"],
[foreign51 || {}, "JavaScripts/module/RankModule/ui/RankPanel"],
[foreign52 || {}, "JavaScripts/module/RankModule/ui/RoomItem"],
[foreign53 || {}, "JavaScripts/module/RankModule/ui/WorldItem"],
[foreign54 || {}, "JavaScripts/module/ShopModule/ShopData"],
[foreign55 || {}, "JavaScripts/module/ShopModule/ShopModuleC"],
[foreign56 || {}, "JavaScripts/module/ShopModule/ShopModuleS"],
[foreign57 || {}, "JavaScripts/module/ShopModule/ui/ShopItem"],
[foreign58 || {}, "JavaScripts/module/ShopModule/ui/ShopPanel"],
[foreign59 || {}, "JavaScripts/module/TaskModule/TaskData"],
[foreign60 || {}, "JavaScripts/module/TaskModule/TaskModuleC"],
[foreign61 || {}, "JavaScripts/module/TaskModule/TaskModuleS"],
[foreign62 || {}, "JavaScripts/module/TaskModule/ui/TaskPanel"],
[foreign63 || {}, "JavaScripts/module/TeamModule/TeamData"],
[foreign64 || {}, "JavaScripts/module/TeamModule/TeamModuleC"],
[foreign65 || {}, "JavaScripts/module/TeamModule/TeamModuleS"],
[foreign66 || {}, "JavaScripts/module/TeamModule/ui/TeamItem"],
[foreign67 || {}, "JavaScripts/module/TeamModule/ui/TeamPanel"],
[foreign68 || {}, "JavaScripts/module/WeaponModule/Projectile"],
[foreign69 || {}, "JavaScripts/module/WeaponModule/ProjectTarget"],
[foreign70 || {}, "JavaScripts/module/WeaponModule/Weapon"],
[foreign71 || {}, "JavaScripts/module/WeaponModule/WeaponData"],
[foreign72 || {}, "JavaScripts/module/WeaponModule/WeaponModuleC"],
[foreign73 || {}, "JavaScripts/module/WeaponModule/WeaponModuleS"],
[foreign74 || {}, "JavaScripts/tools/EventType"],
[foreign75 || {}, "JavaScripts/tools/FlyText"],
[foreign76 || {}, "JavaScripts/tools/FreeCamera"],
[foreign77 || {}, "JavaScripts/tools/GlobalData"],
[foreign78 || {}, "JavaScripts/tools/Helper"],
[foreign79 || {}, "JavaScripts/tools/IAPInstance"],
[foreign80 || {}, "JavaScripts/tools/JumpGame"],
[foreign81 || {}, "JavaScripts/tools/MapEx"],
[foreign82 || {}, "JavaScripts/tools/PrefabEvent"],
[foreign83 || {}, "JavaScripts/tools/Utils"],
[foreign84 || {}, "JavaScripts/ui-generate/common/ConfirmPanel_generate"],
[foreign85 || {}, "JavaScripts/ui-generate/common/EnemyLifebar_generate"],
[foreign86 || {}, "JavaScripts/ui-generate/common/JumpGameTips_generate"],
[foreign87 || {}, "JavaScripts/ui-generate/common/notice/NoticeView_generate"],
[foreign88 || {}, "JavaScripts/ui-generate/common/notice/SecondNoticeItem_generate"],
[foreign89 || {}, "JavaScripts/ui-generate/common/notice/TopNoticeItem_generate"],
[foreign90 || {}, "JavaScripts/ui-generate/module/ActivityModule/ActivityPanel_generate"],
[foreign91 || {}, "JavaScripts/ui-generate/module/AdModule/AdPanel_generate"],
[foreign92 || {}, "JavaScripts/ui-generate/module/CoinModule/CoinPanel_generate"],
[foreign93 || {}, "JavaScripts/ui-generate/module/CoinModule/DiamondItem_generate"],
[foreign94 || {}, "JavaScripts/ui-generate/module/CoinModule/DiamondPanel_generate"],
[foreign95 || {}, "JavaScripts/ui-generate/module/GMModule/GMHUD_generate"],
[foreign96 || {}, "JavaScripts/ui-generate/module/GMModule/GMItem_generate"],
[foreign97 || {}, "JavaScripts/ui-generate/module/HUDModule/HUDPanel_generate"],
[foreign98 || {}, "JavaScripts/ui-generate/module/HUDModule/KillTipItem_generate"],
[foreign99 || {}, "JavaScripts/ui-generate/module/RadarModule/RadarPanel_generate"],
[foreign100 || {}, "JavaScripts/ui-generate/module/RankModule/RankPanel_generate"],
[foreign101 || {}, "JavaScripts/ui-generate/module/RankModule/RoomItem_generate"],
[foreign102 || {}, "JavaScripts/ui-generate/module/RankModule/WorldItem_generate"],
[foreign103 || {}, "JavaScripts/ui-generate/module/ShopModule/ShopItem_generate"],
[foreign104 || {}, "JavaScripts/ui-generate/module/ShopModule/ShopPanel_generate"],
[foreign105 || {}, "JavaScripts/ui-generate/module/TaskModule/TaskItem_generate"],
[foreign106 || {}, "JavaScripts/ui-generate/module/TaskModule/TaskPanel_generate"],
[foreign107 || {}, "JavaScripts/ui-generate/module/TeamModule/TeamItem_generate"],
[foreign108 || {}, "JavaScripts/ui-generate/module/TeamModule/TeamPanel_generate"]]);

exports.MWFileMapping = MWFileMapping;
exports.MWModuleMap = MWModuleMap;
//# sourceMappingURL=game.js.map
