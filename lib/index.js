"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fitText = exports.useTextFit = void 0;
var react_1 = require("react");
function useTextFit(_a, deps) {
    var _b = _a === void 0 ? {} : _a, _c = _b.min, min = _c === void 0 ? 1 : _c, _d = _b.max, max = _d === void 0 ? 100 : _d;
    if (deps === void 0) { deps = []; }
    var ref = (0, react_1.useRef)(null);
    var fit = (0, react_1.useCallback)(function () { return void (ref.current && fitText(ref.current, min, max)); }, [min, max]);
    (0, react_1.useEffect)(fit, __spreadArray([fit], deps, true));
    return [ref, fit];
}
exports.useTextFit = useTextFit;
function fitText(el, min, max) {
    var height = el.clientHeight;
    var isFit = function () { return el.scrollHeight - 1 <= height; };
    var low = min;
    var high = max;
    var mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        el.style.fontSize = "".concat(mid, "px");
        if (isFit())
            low = mid + 1;
        else
            high = mid - 1;
    }
    mid = Math.min(low, high);
    mid = Math.max(mid, min);
    mid = Math.min(mid, max);
    el.style.fontSize = "".concat(mid, "px");
}
exports.fitText = fitText;
