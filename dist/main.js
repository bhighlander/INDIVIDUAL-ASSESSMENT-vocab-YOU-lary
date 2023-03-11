/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// NAMESPACE OBJECT: ./node_modules/@popperjs/core/lib/index.js
var lib_namespaceObject = {};
__webpack_require__.r(lib_namespaceObject);
__webpack_require__.d(lib_namespaceObject, {
  "afterMain": () => (afterMain),
  "afterRead": () => (afterRead),
  "afterWrite": () => (afterWrite),
  "applyStyles": () => (modifiers_applyStyles),
  "arrow": () => (modifiers_arrow),
  "auto": () => (auto),
  "basePlacements": () => (basePlacements),
  "beforeMain": () => (beforeMain),
  "beforeRead": () => (beforeRead),
  "beforeWrite": () => (beforeWrite),
  "bottom": () => (bottom),
  "clippingParents": () => (clippingParents),
  "computeStyles": () => (modifiers_computeStyles),
  "createPopper": () => (popper_createPopper),
  "createPopperBase": () => (createPopper),
  "createPopperLite": () => (popper_lite_createPopper),
  "detectOverflow": () => (detectOverflow),
  "end": () => (end),
  "eventListeners": () => (eventListeners),
  "flip": () => (modifiers_flip),
  "hide": () => (modifiers_hide),
  "left": () => (left),
  "main": () => (main),
  "modifierPhases": () => (modifierPhases),
  "offset": () => (modifiers_offset),
  "placements": () => (enums_placements),
  "popper": () => (popper),
  "popperGenerator": () => (popperGenerator),
  "popperOffsets": () => (modifiers_popperOffsets),
  "preventOverflow": () => (modifiers_preventOverflow),
  "read": () => (read),
  "reference": () => (reference),
  "right": () => (right),
  "start": () => (start),
  "top": () => (enums_top),
  "variationPlacements": () => (variationPlacements),
  "viewport": () => (viewport),
  "write": () => (write)
});

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_es6_assign = function() {
    tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_es6_assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

;// CONCATENATED MODULE: ./node_modules/@firebase/util/dist/index.esm.js


/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
var base64urlEncodeWithoutPadding = function (str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    var header = {
        alg: 'none',
        type: 'JWT'
    };
    var project = projectId || 'demo-project';
    var iat = token.iat || 0;
    var sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    var payload = __assign({ 
        // Set all required fields to decent defaults
        iss: "https://securetoken.google.com/" + project, aud: project, iat: iat, exp: iat + 3600, auth_time: iat, sub: sub, user_id: sub, firebase: {
            sign_in_provider: 'custom',
            identities: {}
        } }, token);
    // Unsecured JWTs use the empty string as a signature.
    var signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    return 'indexedDB' in self && indexedDB != null;
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise(function (resolve, reject) {
        try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
            var request_1 = self.indexedDB.open(DB_CHECK_NAME_1);
            request_1.onsuccess = function () {
                request_1.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist_1) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
                }
                resolve(true);
            };
            request_1.onupgradeneeded = function () {
                preExist_1 = false;
            };
            request_1.onerror = function () {
                var _a;
                reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (!navigator || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    __extends(FirebaseError, _super);
    function FirebaseError(code, message, customData) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.customData = customData;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? String(value) : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    for (var _i = 0, aKeys_1 = aKeys; _i < aKeys_1.length; _i++) {
        var k = aKeys_1[_i];
        if (!bKeys.includes(k)) {
            return false;
        }
        var aProp = a[k];
        var bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (var _a = 0, bKeys_1 = bKeys; _a < bKeys_1.length; _a++) {
        var k = bKeys_1[_a];
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var _a = token.split('='), key = _a[0], value = _a[1];
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    var queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    var fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function index_esm_async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return fnName + " failed: " + argName + " argument ";
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
var MAX_VALUE_MILLIS = (/* unused pure expression or super */ null && (4 * 60 * 60 * 1000)); // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
    if (intervalMillis === void 0) { intervalMillis = DEFAULT_INTERVAL_MILLIS; }
    if (backoffFactor === void 0) { backoffFactor = DEFAULT_BACKOFF_FACTOR; }
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    var randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return "" + i;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    var cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    var dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}


//# sourceMappingURL=index.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@firebase/component/dist/index.esm.js



/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
        this.onInstanceCreated = null;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    Component.prototype.setInstanceCreatedCallback = function (callback) {
        this.onInstanceCreated = callback;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error("Service " + this.name + " is not available");
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = __values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var services;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], __read(services
                                .filter(function (service) { return 'INTERNAL' in service; }) // legacy services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))), __read(services
                                .filter(function (service) { return '_delete' in service; }) // modularized services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service._delete(); }))))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.isInitialized = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        return this.instances.has(identifier);
    };
    Provider.prototype.getOptions = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        return this.instancesOptions.get(identifier) || {};
    };
    Provider.prototype.initialize = function (opts) {
        var e_2, _a;
        if (opts === void 0) { opts = {}; }
        var _b = opts.options, options = _b === void 0 ? {} : _b;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
        }
        if (!this.isComponentSet()) {
            throw Error("Component " + this.name + " has not been registered yet");
        }
        var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options: options
        });
        try {
            // resolve any pending promise waiting for the service instance
            for (var _c = __values(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), instanceIdentifier = _e[0], instanceDeferred = _e[1];
                var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                if (normalizedIdentifier === normalizedDeferredIdentifier) {
                    instanceDeferred.resolve(instance);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return instance;
    };
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    Provider.prototype.onInit = function (callback, identifier) {
        var _a;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        var existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return function () {
            existingCallbacks.delete(callback);
        };
    };
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    Provider.prototype.invokeOnInitCallbacks = function (instance, identifier) {
        var e_3, _a;
        var callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        try {
            for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                var callback = callbacks_1_1.value;
                try {
                    callback(instance, identifier);
                }
                catch (_b) {
                    // ignore errors in the onInit callback
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Provider.prototype.getOrInitializeService = function (_a) {
        var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
        var instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options: options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_c) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    Provider.prototype.shouldAutoInitialize = function () {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */);
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());


//# sourceMappingURL=index.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@firebase/logger/dist/index.esm.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function index_esm_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, index_esm_spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }
            this._logLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, index_esm_spreadArrays([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, index_esm_spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, index_esm_spreadArrays([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, index_esm_spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, index_esm_spreadArrays([this, LogLevel.INFO], args));
        this._logHandler.apply(this, index_esm_spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, index_esm_spreadArrays([this, LogLevel.WARN], args));
        this._logHandler.apply(this, index_esm_spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, index_esm_spreadArrays([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, index_esm_spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}


//# sourceMappingURL=index.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@firebase/app/dist/index.esm.js





/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var ERRORS = (_a$1 = {},
    _a$1["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a$1["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a$1["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a$1["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a$1["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a$1["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a$1);
var ERROR_FACTORY = new ErrorFactory('app', 'Firebase', ERRORS);

var name$c = "@firebase/app";
var version$1 = "0.6.30";

var name$b = "@firebase/analytics";

var name$a = "@firebase/app-check";

var name$9 = "@firebase/auth";

var name$8 = "@firebase/database";

var name$7 = "@firebase/functions";

var name$6 = "@firebase/installations";

var name$5 = "@firebase/messaging";

var name$4 = "@firebase/performance";

var name$3 = "@firebase/remote-config";

var name$2 = "@firebase/storage";

var name$1 = "@firebase/firestore";

var index_esm_name = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var index_esm_a;
var index_esm_DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (index_esm_a = {},
    index_esm_a[name$c] = 'fire-core',
    index_esm_a[name$b] = 'fire-analytics',
    index_esm_a[name$a] = 'fire-app-check',
    index_esm_a[name$9] = 'fire-auth',
    index_esm_a[name$8] = 'fire-rtdb',
    index_esm_a[name$7] = 'fire-fn',
    index_esm_a[name$6] = 'fire-iid',
    index_esm_a[name$5] = 'fire-fcm',
    index_esm_a[name$4] = 'fire-perf',
    index_esm_a[name$3] = 'fire-rc',
    index_esm_a[name$2] = 'fire-gcs',
    index_esm_a[name$1] = 'fire-fst',
    index_esm_a['fire-js'] = 'fire-js',
    index_esm_a[index_esm_name] = 'fire-js-all',
    index_esm_a);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = deepCopy(options);
        this.container = new ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        // populate ComponentContainer with existing components
        this.firebase_.INTERNAL.components.forEach(function (component) {
            return _this._addComponent(component);
        });
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: false,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        var _a;
        if (instanceIdentifier === void 0) { instanceIdentifier = index_esm_DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        // Initialize instance if InstatiationMode is `EXPLICIT`.
        var provider = this.container.getProvider(name);
        if (!provider.isInitialized() &&
            ((_a = provider.getComponent()) === null || _a === void 0 ? void 0 : _a.instantiationMode) === "EXPLICIT" /* EXPLICIT */) {
            provider.initialize();
        }
        // getImmediate will always succeed because _getService is only called for registered components.
        return provider.getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = index_esm_DEFAULT_ENTRY_NAME; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    FirebaseAppImpl.prototype.toJSON = function () {
        return {
            name: this.name,
            automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
            options: this.options
        };
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version = "8.10.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || index_esm_DEFAULT_ENTRY_NAME;
        if (!contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = index_esm_DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                deepExtend(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        // add the component to existing app instances
        for (var _i = 0, _a = Object.keys(apps); _i < _a.length; _i++) {
            var appName = _a[_i];
            apps[appName]._addComponent(component);
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */);
        }
        setUserLogHandler(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib_es6_assign(tslib_es6_assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: createSubscribe,
        ErrorFactory: ErrorFactory,
        deepExtend: deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        deepExtend(namespace, props);
    }
    return namespace;
}
var firebase$1 = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name$c, version$1, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase$1.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase$1.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase = firebase$1;
registerCoreComponents(firebase);

/* harmony default export */ const index_esm = (firebase);

//# sourceMappingURL=index.esm.js.map

;// CONCATENATED MODULE: ./node_modules/firebase/app/dist/index.esm.js



var dist_index_esm_name = "firebase";
var index_esm_version = "8.10.1";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
index_esm.registerVersion(dist_index_esm_name, index_esm_version, 'app');
index_esm.SDK_VERSION = index_esm_version;
//# sourceMappingURL=index.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@firebase/auth/dist/auth.esm.js
(function() {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}var ca=ba(this);
function da(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}function ea(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function fa(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}}
da("Promise",function(a){function b(g){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{g(h.resolve,h.reject)}catch(m){h.reject(m)}}function c(){this.a=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(g)};var e=ca.setTimeout;c.prototype.c=function(g){e(g,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var m=
g[h];g[h]=null;try{m()}catch(p){this.f(p)}}}this.a=null};c.prototype.f=function(g){this.c(function(){throw g;})};b.prototype.f=function(){function g(p){return function(v){m||(m=!0,p.call(h,v))}}var h=this,m=!1;return{resolve:g(this.m),reject:g(this.g)}};b.prototype.m=function(g){if(g===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.s(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.v(g):this.h(g)}};
b.prototype.v=function(g){var h=void 0;try{h=g.then}catch(m){this.g(m);return}"function"==typeof h?this.u(h,g):this.h(g)};b.prototype.g=function(g){this.i(2,g)};b.prototype.h=function(g){this.i(1,g)};b.prototype.i=function(g,h){if(0!=this.b)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.b);this.b=g;this.c=h;this.l()};b.prototype.l=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null}};var f=new c;b.prototype.s=function(g){var h=this.f();
g.Ra(h.resolve,h.reject)};b.prototype.u=function(g,h){var m=this.f();try{g.call(h,m.resolve,m.reject)}catch(p){m.reject(p)}};b.prototype.then=function(g,h){function m(A,Q){return"function"==typeof A?function(ya){try{p(A(ya))}catch(Ad){v(Ad)}}:Q}var p,v,B=new b(function(A,Q){p=A;v=Q});this.Ra(m(g,p),m(h,v));return B};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.Ra=function(g,h){function m(){switch(p.b){case 1:g(p.c);break;case 2:h(p.c);break;default:throw Error("Unexpected state: "+
p.b);}}var p=this;null==this.a?f.b(m):this.a.push(m)};b.resolve=d;b.reject=function(g){return new b(function(h,m){m(g)})};b.race=function(g){return new b(function(h,m){for(var p=fa(g),v=p.next();!v.done;v=p.next())d(v.value).Ra(h,m)})};b.all=function(g){var h=fa(g),m=h.next();return m.done?d([]):new b(function(p,v){function B(ya){return function(Ad){A[ya]=Ad;Q--;0==Q&&p(A)}}var A=[],Q=0;do A.push(void 0),Q++,d(m.value).Ra(B(A.length-1),v),m=h.next();while(!m.done)})};return b});
var ha=ha||{},l=this||self,ia=/^[\w+/_-]+[=]{0,2}$/,ja=null;function ka(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ia.test(a)?a:""}function la(){}function ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}function na(a){var b=ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}function oa(a){return"function"==ma(a)}function n(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function pa(a){return Object.prototype.hasOwnProperty.call(a,qa)&&a[qa]||(a[qa]=++ra)}var qa="closure_uid_"+(1E9*Math.random()>>>0),ra=0;function sa(a,b,c){return a.call.apply(a.bind,arguments)}function ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function q(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=sa:q=ta;return q.apply(null,arguments)}function ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var va=Date.now;function r(a,b){function c(){}c.prototype=b.prototype;a.bb=b.prototype;a.prototype=new c;a.prototype.constructor=a}function wa(a){return a};/*

 Copyright 2017 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function t(a,b,c){this.code=xa+a;this.message=b||za[a]||"";this.a=c||null}r(t,Error);t.prototype.w=function(){var a={code:this.code,message:this.message};this.a&&(a.serverResponse=this.a);return a};t.prototype.toJSON=function(){return this.w()};function Aa(a){var b=a&&a.code;return b?new t(b.substring(xa.length),a.message,a.serverResponse):null}
var xa="auth/",za={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
"captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.",
"requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.",
"internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.",
"invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.",
"unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.",
"multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
"missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
"missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
"no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
"rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.",
"too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.",
"unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.",
"web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var Ba={ld:{Ua:"https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",$a:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Xa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"b"},sd:{Ua:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",$a:"https://securetoken.googleapis.com/v1/token",Xa:"https://identitytoolkit.googleapis.com/v2/",id:"p"},ud:{Ua:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
$a:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Xa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"s"},vd:{Ua:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",$a:"https://test-securetoken.sandbox.googleapis.com/v1/token",Xa:"https://test-identitytoolkit.sandbox.googleapis.com/v2/",id:"t"}};
function Ca(a){for(var b in Ba)if(Ba[b].id===a)return a=Ba[b],{firebaseEndpoint:a.Ua,secureTokenEndpoint:a.$a,identityPlatformEndpoint:a.Xa};return null}var Da;Da=Ca("__EID__")?"__EID__":void 0;function Ea(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}r(u,Error);u.prototype.name="CustomError";function Fa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])}r(Fa,u);Fa.prototype.name="AssertionError";function Ga(a,b){throw new Fa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function Ha(a,b){this.c=a;this.f=b;this.b=0;this.a=null}Ha.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function Ia(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function Ja(){this.b=this.a=null}var La=new Ha(function(){return new Ka},function(a){a.reset()});Ja.prototype.add=function(a,b){var c=La.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function Ma(){var a=Na,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function Ka(){this.next=this.b=this.a=null}Ka.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};Ka.prototype.reset=function(){this.next=this.b=this.a=null};var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Pa(a,b){for(var c="string"===typeof a?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)}
var Qa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ra=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Sa=Array.prototype.some?function(a,
b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function Ta(a){a:{var b=Ua;for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}function Va(a,b){return 0<=Oa(a,b)}
function Wa(a,b){b=Oa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Xa(a,b){var c=0;Pa(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Ya(a){return Array.prototype.concat.apply([],arguments)}function Za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var $a=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ab=/&/g,bb=/</g,cb=/>/g,db=/"/g,eb=/'/g,fb=/\x00/g,gb=/[\x00&<>"']/;function x(a,b){return-1!=a.indexOf(b)}function hb(a,b){return a<b?-1:a>b?1:0};var ib;a:{var jb=l.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a}}ib=""}function y(a){return x(ib,a)};function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function mb(a){for(var b in a)return!1;return!0}function nb(a){var b={},c;for(c in a)b[c]=a[c];return b}var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function z(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function pb(a,b){a:{try{var c=a&&a.ownerDocument,d=c&&(c.defaultView||c.parentWindow);d=d||l;if(d.Element&&d.Location){var e=d;break a}}catch(g){}e=null}if(e&&"undefined"!=typeof e[b]&&(!a||!(a instanceof e[b])&&(a instanceof e.Location||a instanceof e.Element))){if(n(a))try{var f=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(g){f="<object could not be stringified>"}else f=void 0===a?"undefined":null===a?"null":typeof a;Ga("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
b,f)}};function qb(a,b){this.a=a===rb&&b||"";this.b=sb}qb.prototype.ta=!0;qb.prototype.sa=function(){return this.a};qb.prototype.toString=function(){return"Const{"+this.a+"}"};function tb(a){if(a instanceof qb&&a.constructor===qb&&a.b===sb)return a.a;Ga("expected object of type Const, got '"+a+"'");return"type_error:Const"}var sb={},rb={};var ub;function vb(){if(void 0===ub){var a=null,b=l.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:wa,createScript:wa,createScriptURL:wa})}catch(c){l.console&&l.console.error(c.message)}ub=a}else ub=a}return ub};function wb(a,b){this.a=b===xb?a:""}wb.prototype.ta=!0;wb.prototype.sa=function(){return this.a.toString()};wb.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function yb(a){if(a instanceof wb&&a.constructor===wb)return a.a;Ga("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ma(a));return"type_error:TrustedResourceUrl"}
function zb(a,b){var c=tb(a);if(!Ab.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(Bb,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof qb?tb(d):encodeURIComponent(String(d))});return Cb(a)}var Bb=/%{(\w+)}/g,Ab=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,xb={};
function Cb(a){var b=vb();a=b?b.createScriptURL(a):a;return new wb(a,xb)};function C(a,b){this.a=b===Db?a:""}C.prototype.ta=!0;C.prototype.sa=function(){return this.a.toString()};C.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Eb(a){if(a instanceof C&&a.constructor===C)return a.a;Ga("expected object of type SafeUrl, got '"+a+"' of type "+ma(a));return"type_error:SafeUrl"}
var Fb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Gb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Hb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Ib(a){if(a instanceof C)return a;a="object"==typeof a&&a.ta?a.sa():String(a);if(Hb.test(a))a=new C(a,Db);else{a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(Gb);a=b&&Fb.test(b[1])?new C(a,Db):null}return a}function Jb(a){if(a instanceof C)return a;a="object"==typeof a&&a.ta?a.sa():String(a);Hb.test(a)||(a="about:invalid#zClosurez");return new C(a,Db)}var Db={},Kb=new C("about:invalid#zClosurez",Db);function Lb(a,b,c){this.a=c===Mb?a:""}Lb.prototype.ta=!0;Lb.prototype.sa=function(){return this.a.toString()};Lb.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Nb(a){if(a instanceof Lb&&a.constructor===Lb)return a.a;Ga("expected object of type SafeHtml, got '"+a+"' of type "+ma(a));return"type_error:SafeHtml"}var Mb={};function Ob(a,b){pb(a,"HTMLScriptElement");a.src=yb(b);(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=l?b=ka(b.document):(null===ja&&(ja=ka(l.document)),b=ja);b&&a.setAttribute("nonce",b)}function Pb(a,b,c,d){a=a instanceof C?a:Jb(a);b=b||l;c=c instanceof qb?tb(c):c||"";return b.open(Eb(a),c,d,void 0)};function Qb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Rb(a){gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(eb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(fb,"&#0;")));return a};function Sb(a){Sb[" "](a);return a}Sb[" "]=la;function Tb(a,b){var c=Ub;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Vb=y("Opera"),Wb=y("Trident")||y("MSIE"),Xb=y("Edge"),Yb=Xb||Wb,Zb=y("Gecko")&&!(x(ib.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),$b=x(ib.toLowerCase(),"webkit")&&!y("Edge");function ac(){var a=l.document;return a?a.documentMode:void 0}var bc;
a:{var cc="",dc=function(){var a=ib;if(Zb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Xb)return/Edge\/([\d\.]+)/.exec(a);if(Wb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if($b)return/WebKit\/(\S+)/.exec(a);if(Vb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();dc&&(cc=dc?dc[1]:"");if(Wb){var ec=ac();if(null!=ec&&ec>parseFloat(cc)){bc=String(ec);break a}}bc=cc}var Ub={};
function fc(a){return Tb(a,function(){for(var b=0,c=$a(String(bc)).split("."),d=$a(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=hb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||hb(0==g[2].length,0==h[2].length)||hb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}var gc;
if(l.document&&Wb){var hc=ac();gc=hc?hc:parseInt(bc,10)||void 0}else gc=void 0;var ic=gc;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}var jc=!Wb||9<=Number(ic);function kc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function lc(a,b){lb(b,function(c,d){c&&"object"==typeof c&&c.ta&&(c=c.sa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:mc.hasOwnProperty(d)?a.setAttribute(mc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var mc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function nc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!jc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Rb(g.name),'"');if(g.type){f.push(' type="',Rb(g.type),'"');var h={};z(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=oc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):lc(f,g));2<d.length&&pc(e,f,d);return f}
function pc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(var e=2;e<c.length;e++){var f=c[e];if(!na(f)||n(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(n(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(oa(f)){g="function"==typeof f.item;break a}}g=!1}w(g?Za(f):f,d)}}}function oc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};function qc(a){l.setTimeout(function(){throw a;},0)}var rc;
function sc(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var e=oc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=q(function(m){if(("*"==h||m.origin==h)&&m.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Hb;c.Hb=null;e()}};return function(e){d.next={Hb:e};d=d.next;b.port2.postMessage(0)}}return function(e){l.setTimeout(e,0)}};function tc(a,b){uc||vc();wc||(uc(),wc=!0);Na.add(a,b)}var uc;function vc(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);uc=function(){a.then(xc)}}else uc=function(){var b=xc;!oa(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(rc||(rc=sc()),rc(b)):l.setImmediate(b)}}var wc=!1,Na=new Ja;function xc(){for(var a;a=Ma();){try{a.a.call(a.b)}catch(b){qc(b)}Ia(La,a)}wc=!1};function D(a,b){this.a=yc;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=la)try{var c=this;a.call(b,function(d){zc(c,Ac,d)},function(d){if(!(d instanceof Bc))try{if(d instanceof Error)throw d;throw Error("Promise rejected.");}catch(e){}zc(c,Cc,d)})}catch(d){zc(this,Cc,d)}}var yc=0,Ac=2,Cc=3;function Dc(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}Dc.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var Ec=new Ha(function(){return new Dc},function(a){a.reset()});
function Fc(a,b,c){var d=Ec.get();d.g=a;d.b=b;d.f=c;return d}function E(a){if(a instanceof D)return a;var b=new D(la);zc(b,Ac,a);return b}function F(a){return new D(function(b,c){c(a)})}function Gc(a,b,c){Hc(a,b,c,null)||tc(ua(b,a))}function Ic(a){return new D(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,v){d--;e[p]=v;0==d&&b(e)},g=function(p){c(p)},h=0,m;h<a.length;h++)m=a[h],Gc(m,ua(f,h),g);else b(e)})}
function Jc(a){return new D(function(b){var c=a.length,d=[];if(c)for(var e=function(h,m,p){c--;d[h]=m?{Qb:!0,value:p}:{Qb:!1,reason:p};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Gc(g,ua(e,f,!0),ua(e,f,!1));else b(d)})}D.prototype.then=function(a,b,c){return Kc(this,oa(a)?a:null,oa(b)?b:null,c)};D.prototype.$goog_Thenable=!0;k=D.prototype;k.oa=function(a,b){a=Fc(a,a,b);a.c=!0;Lc(this,a);return this};k.o=function(a,b){return Kc(this,null,a,b)};
k.cancel=function(a){if(this.a==yc){var b=new Bc(a);tc(function(){Mc(this,b)},this)}};function Mc(a,b){if(a.a==yc)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.c||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==yc&&1==d?Mc(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Nc(c),Oc(c,e,Cc,b)))}a.c=null}else zc(a,Cc,b)}function Lc(a,b){a.b||a.a!=Ac&&a.a!=Cc||Pc(a);a.f?a.f.next=b:a.b=b;a.f=b}
function Kc(a,b,c,d){var e=Fc(null,null,null);e.a=new D(function(f,g){e.g=b?function(h){try{var m=b.call(d,h);f(m)}catch(p){g(p)}}:f;e.b=c?function(h){try{var m=c.call(d,h);void 0===m&&h instanceof Bc?g(h):f(m)}catch(p){g(p)}}:g});e.a.c=a;Lc(a,e);return e.a}k.$c=function(a){this.a=yc;zc(this,Ac,a)};k.ad=function(a){this.a=yc;zc(this,Cc,a)};
function zc(a,b,c){a.a==yc&&(a===c&&(b=Cc,c=new TypeError("Promise cannot resolve to itself")),a.a=1,Hc(c,a.$c,a.ad,a)||(a.i=c,a.a=b,a.c=null,Pc(a),b!=Cc||c instanceof Bc||Qc(a,c)))}function Hc(a,b,c,d){if(a instanceof D)return Lc(a,Fc(b||la,c||null,d)),!0;if(Ea(a))return a.then(b,c,d),!0;if(n(a))try{var e=a.then;if(oa(e))return Rc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Rc(a,b,c,d,e){function f(m){h||(h=!0,d.call(e,m))}function g(m){h||(h=!0,c.call(e,m))}var h=!1;try{b.call(a,g,f)}catch(m){f(m)}}function Pc(a){a.h||(a.h=!0,tc(a.gc,a))}function Nc(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}k.gc=function(){for(var a;a=Nc(this);)Oc(this,a,this.a,this.i);this.h=!1};
function Oc(a,b,c,d){if(c==Cc&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Sc(b,c,d);else try{b.c?b.g.call(b.f):Sc(b,c,d)}catch(e){Tc.call(null,e)}Ia(Ec,b)}function Sc(a,b,c){b==Ac?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function Qc(a,b){a.g=!0;tc(function(){a.g&&Tc.call(null,b)})}var Tc=qc;function Bc(a){u.call(this,a)}r(Bc,u);Bc.prototype.name="cancel";function Uc(){0!=Vc&&(Wc[pa(this)]=this);this.ya=this.ya;this.pa=this.pa}var Vc=0,Wc={};Uc.prototype.ya=!1;function Xc(a){if(!a.ya&&(a.ya=!0,a.Da(),0!=Vc)){var b=pa(a);if(0!=Vc&&a.pa&&0<a.pa.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Wc[b]}}Uc.prototype.Da=function(){if(this.pa)for(;this.pa.length;)this.pa.shift()()};var Yc=Object.freeze||function(a){return a};var Zc=!Wb||9<=Number(ic),$c=Wb&&!fc("9"),ad=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{l.addEventListener("test",la,b),l.removeEventListener("test",la,b)}catch(c){}return a}();function G(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=!1}G.prototype.preventDefault=function(){this.defaultPrevented=!0};function bd(a,b){G.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Zb){a:{try{Sb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:cd[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}r(bd,G);var cd=Yc({2:"touch",3:"pen",4:"mouse"});bd.prototype.preventDefault=function(){bd.bb.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,$c)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};bd.prototype.g=function(){return this.a};var dd="closure_listenable_"+(1E6*Math.random()|0),ed=0;function fd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Wa=e;this.key=++ed;this.wa=this.Qa=!1}function gd(a){a.wa=!0;a.listener=null;a.proxy=null;a.src=null;a.Wa=null};function hd(a){this.src=a;this.a={};this.b=0}hd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=id(a,b,d,e);-1<g?(b=a[g],c||(b.Qa=!1)):(b=new fd(b,this.src,f,!!d,e),b.Qa=c,a.push(b));return b};function jd(a,b){var c=b.type;c in a.a&&Wa(a.a[c],b)&&(gd(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function id(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.wa&&f.listener==b&&f.capture==!!c&&f.Wa==d)return e}return-1};var kd="closure_lm_"+(1E6*Math.random()|0),ld={},md=0;function nd(a,b,c,d,e){if(d&&d.once)od(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?qd(a,b,c,n(d)?!!d.capture:!!d,e):rd(a,b,c,!1,d,e)}
function rd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=n(e)?!!e.capture:!!e,h=sd(a);h||(a[kd]=h=new hd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=td();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ad||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ud(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");md++}}
function td(){var a=vd,b=Zc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function od(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?wd(a,b,c,n(d)?!!d.capture:!!d,e):rd(a,b,c,!0,d,e)}
function xd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)xd(a,b[f],c,d,e);else(d=n(d)?!!d.capture:!!d,c=pd(c),a&&a[dd])?(a=a.v,b=String(b).toString(),b in a.a&&(f=a.a[b],c=id(f,c,d,e),-1<c&&(gd(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=sd(a))&&(b=a.a[b.toString()],a=-1,b&&(a=id(b,c,d,e)),(c=-1<a?b[a]:null)&&yd(c))}
function yd(a){if("number"!==typeof a&&a&&!a.wa){var b=a.src;if(b&&b[dd])jd(b.v,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ud(c),d):b.addListener&&b.removeListener&&b.removeListener(d);md--;(c=sd(b))?(jd(c,a),0==c.b&&(c.src=null,b[kd]=null)):gd(a)}}}function ud(a){return a in ld?ld[a]:ld[a]="on"+a}
function zd(a,b,c,d){var e=!0;if(a=sd(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.wa&&(f=Bd(f,d),e=e&&!1!==f)}return e}function Bd(a,b){var c=a.listener,d=a.Wa||a.src;a.Qa&&yd(a);return c.call(d,b)}
function vd(a,b){if(a.wa)return!0;if(!Zc){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new bd(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=zd(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=zd(d[e],a,!1,b),c=c&&f}return c}return Bd(a,
new bd(b,this))}function sd(a){a=a[kd];return a instanceof hd?a:null}var Cd="__closure_events_fn_"+(1E9*Math.random()>>>0);function pd(a){if(oa(a))return a;a[Cd]||(a[Cd]=function(b){return a.handleEvent(b)});return a[Cd]};function H(){Uc.call(this);this.v=new hd(this);this.bc=this;this.hb=null}r(H,Uc);H.prototype[dd]=!0;H.prototype.addEventListener=function(a,b,c,d){nd(this,a,b,c,d)};H.prototype.removeEventListener=function(a,b,c,d){xd(this,a,b,c,d)};
H.prototype.dispatchEvent=function(a){var b,c=this.hb;if(c)for(b=[];c;c=c.hb)b.push(c);c=this.bc;var d=a.type||a;if("string"===typeof a)a=new G(a,c);else if(a instanceof G)a.target=a.target||c;else{var e=a;a=new G(d,c);z(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=a.b=b[f];e=Dd(g,d,!0,a)&&e}g=a.b=c;e=Dd(g,d,!0,a)&&e;e=Dd(g,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)g=a.b=b[f],e=Dd(g,d,!1,a)&&e;return e};
H.prototype.Da=function(){H.bb.Da.call(this);if(this.v){var a=this.v,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,gd(d[e]);delete a.a[c];a.b--}}this.hb=null};function qd(a,b,c,d,e){a.v.add(String(b),c,!1,d,e)}function wd(a,b,c,d,e){a.v.add(String(b),c,!0,d,e)}
function Dd(a,b,c,d){b=a.v.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.wa&&g.capture==c){var h=g.listener,m=g.Wa||g.src;g.Qa&&jd(a.v,g);e=!1!==h.call(m,d)&&e}}return e&&!d.defaultPrevented};function Ed(a,b,c){if(oa(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}function Fd(a){var b=null;return(new D(function(c,d){b=Ed(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).o(function(c){l.clearTimeout(b);throw c;})};function Gd(a){if(a.X&&"function"==typeof a.X)return a.X();if("string"===typeof a)return a.split("");if(na(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Hd(a){if(a.Y&&"function"==typeof a.Y)return a.Y();if(!a.X||"function"!=typeof a.X){if(na(a)||"string"===typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function Id(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(na(a)||"string"===typeof a)w(a,b,void 0);else for(var c=Hd(a),d=Gd(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function Jd(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Jd)for(c=a.Y(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}k=Jd.prototype;k.X=function(){Kd(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.Y=function(){Kd(this);return this.a.concat()};
k.clear=function(){this.b={};this.c=this.a.length=0};function Kd(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Ld(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Ld(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}k.get=function(a,b){return Ld(this.b,a)?this.b[a]:b};k.set=function(a,b){Ld(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
k.forEach=function(a,b){for(var c=this.Y(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Ld(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Md=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Nd(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function Od(a,b){this.a=this.l=this.c="";this.g=null;this.h=this.f="";this.i=!1;var c;a instanceof Od?(this.i=void 0!==b?b:a.i,Pd(this,a.c),this.l=a.l,this.a=a.a,Qd(this,a.g),this.f=a.f,Rd(this,Sd(a.b)),this.h=a.h):a&&(c=String(a).match(Md))?(this.i=!!b,Pd(this,c[1]||"",!0),this.l=Td(c[2]||""),this.a=Td(c[3]||"",!0),Qd(this,c[4]),this.f=Td(c[5]||"",!0),Rd(this,c[6]||"",!0),this.h=Td(c[7]||"")):(this.i=!!b,this.b=new Ud(null,this.i))}
Od.prototype.toString=function(){var a=[],b=this.c;b&&a.push(Vd(b,Wd,!0),":");var c=this.a;if(c||"file"==b)a.push("//"),(b=this.l)&&a.push(Vd(b,Wd,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.g,null!=c&&a.push(":",String(c));if(c=this.f)this.a&&"/"!=c.charAt(0)&&a.push("/"),a.push(Vd(c,"/"==c.charAt(0)?Xd:Yd,!0));(c=this.b.toString())&&a.push("?",c);(c=this.h)&&a.push("#",Vd(c,Zd));return a.join("")};
Od.prototype.resolve=function(a){var b=new Od(this),c=!!a.c;c?Pd(b,a.c):c=!!a.l;c?b.l=a.l:c=!!a.a;c?b.a=a.a:c=null!=a.g;var d=a.f;if(c)Qd(b,a.g);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.a&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(x(e,"./")||x(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),
d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.b.toString();c?Rd(b,Sd(a.b)):c=!!a.h;c&&(b.h=a.h);return b};function Pd(a,b,c){a.c=c?Td(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))}function Qd(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.g=b}else a.g=null}function Rd(a,b,c){b instanceof Ud?(a.b=b,$d(a.b,a.i)):(c||(b=Vd(b,ae)),a.b=new Ud(b,a.i))}function I(a,b,c){a.b.set(b,c)}function be(a,b){return a.b.get(b)}
function J(a){return a instanceof Od?new Od(a):new Od(a,void 0)}function ce(a,b,c,d){var e=new Od(null,void 0);a&&Pd(e,a);b&&(e.a=b);c&&Qd(e,c);d&&(e.f=d);return e}function Td(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vd(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,de),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function de(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Wd=/[#\/\?@]/g,Yd=/[#\?:]/g,Xd=/[#\?]/g,ae=/[#\?@]/g,Zd=/#/g;function Ud(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}function ee(a){a.a||(a.a=new Jd,a.b=0,a.c&&Nd(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function fe(a){var b=Hd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Ud(null,void 0);a=Gd(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];Array.isArray(f)?ge(c,e,f):c.add(e,f)}return c}k=Ud.prototype;
k.add=function(a,b){ee(this);this.c=null;a=he(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function ie(a,b){ee(a);b=he(a,b);Ld(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Ld(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Kd(a)))}k.clear=function(){this.a=this.c=null;this.b=0};function je(a,b){ee(a);b=he(a,b);return Ld(a.a.b,b)}k.forEach=function(a,b){ee(this);this.a.forEach(function(c,d){w(c,function(e){a.call(b,e,d,this)},this)},this)};
k.Y=function(){ee(this);for(var a=this.a.X(),b=this.a.Y(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};k.X=function(a){ee(this);var b=[];if("string"===typeof a)je(this,a)&&(b=Ya(b,this.a.get(he(this,a))));else{a=this.a.X();for(var c=0;c<a.length;c++)b=Ya(b,a[c])}return b};k.set=function(a,b){ee(this);this.c=null;a=he(this,a);je(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
k.get=function(a,b){if(!a)return b;a=this.X(a);return 0<a.length?String(a[0]):b};function ge(a,b,c){ie(a,b);0<c.length&&(a.c=null,a.a.set(he(a,b),Za(c)),a.b+=c.length)}k.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.Y(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.X(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.c=a.join("&")};
function Sd(a){var b=new Ud;b.c=a.c;a.a&&(b.a=new Jd(a.a),b.b=a.b);return b}function he(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function $d(a,b){b&&!a.f&&(ee(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(ie(this,d),ge(this,e,c))},a));a.f=b};function ke(a){var b=[];le(new me,a,b);return b.join("")}function me(){}
function le(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),le(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ne(d,c),c.push(":"),le(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ne(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var oe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pe=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function ne(a,b){b.push('"',a.replace(pe,function(c){var d=oe[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),oe[c]=d);return d}),'"')};function qe(){var a=K();return Wb&&!!ic&&11==ic||/Edge\/\d+/.test(a)}function re(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function se(a,b){b=b||l.window;var c="about:blank";a&&(c=Eb(Ib(a)||Kb));b.location.href=c}function te(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<te(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function ue(){var a=K();a=ve(a)!=we?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!Wb||!ic||9<ic}function xe(a){a=(a||K()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function ye(a){a=a||l.window;try{a.close()}catch(b){}}
function ze(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=K().toLowerCase();d&&(b.target=d,x(c,"crios/")&&(b.target="_blank"));ve(K())==Ae&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof C?c:Ib("undefined"!=typeof c.href?c.href:String(c))||Kb;c=a.target||c.target;e=
[];for(g in a)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+a[g]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(g+"="+(a[g]?1:0))}var g=e.join(",");if((y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c)g=oc(document,"A"),pb(g,"HTMLAnchorElement"),b=b instanceof C?b:Jb(b),g.href=Eb(b),g.setAttribute("target",c),a.noreferrer&&g.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),
a.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(a),g={};else if(a.noreferrer){if(g=Pb("",d,c,g),a=Eb(b),g&&(Yb&&x(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),g.opener=null,a='<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Rb(a)+'">',a=(d=vb())?d.createHTML(a):a,a=new Lb(a,null,Mb),d=g.document))d.write(Nb(a)),d.close()}else(g=Pb(b,d,c,g))&&a.noopener&&(g.opener=null);if(g)try{g.focus()}catch(h){}return g}
function Be(a){return new D(function(b){function c(){Fd(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var Ce=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,De=/^[^@]+@[^@]+$/;function Ee(){var a=null;return(new D(function(b){"complete"==l.document.readyState?b():(a=function(){b()},od(window,"load",a))})).o(function(b){xd(window,"load",a);throw b;})}
function Fe(){return Ge(void 0)?Ee().then(function(){return new D(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):F(Error("Cordova must run in an Android or iOS file scheme."))}function Ge(a){a=a||K();return!("file:"!==He()&&"ionic:"!==He()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ie(){var a=l.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function Je(){return"undefined"!==typeof l.WorkerGlobalScope&&"function"===typeof l.importScripts}function Ke(){return index_esm.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":index_esm.INTERNAL.hasOwnProperty("node")?"Node":Je()?"Worker":"Browser"}function Le(){var a=Ke();return"ReactNative"===a||"Node"===a}function Me(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}
var Ae="Firefox",we="Chrome";
function ve(a){var b=a.toLowerCase();if(x(b,"opera/")||x(b,"opr/")||x(b,"opios/"))return"Opera";if(x(b,"iemobile"))return"IEMobile";if(x(b,"msie")||x(b,"trident/"))return"IE";if(x(b,"edge/"))return"Edge";if(x(b,"firefox/"))return Ae;if(x(b,"silk/"))return"Silk";if(x(b,"blackberry"))return"Blackberry";if(x(b,"webos"))return"Webos";if(!x(b,"safari/")||x(b,"chrome/")||x(b,"crios/")||x(b,"android"))if(!x(b,"chrome/")&&!x(b,"crios/")||x(b,"edge/")){if(x(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return we;else return"Safari";return"Other"}var Ne={md:"FirebaseCore-web",od:"FirebaseUI-web"};function Oe(a,b){b=b||[];var c=[],d={},e;for(e in Ne)d[Ne[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=Ke();"Browser"===c?(d=K(),c=ve(d)):"Worker"===c&&(d=K(),c=ve(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function K(){return l.navigator&&l.navigator.userAgent||""}
function L(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function Pe(){try{var a=l.localStorage,b=Qe();if(a)return a.setItem(b,"1"),a.removeItem(b),qe()?!!l.indexedDB:!0}catch(c){return Je()&&!!l.indexedDB}return!1}function Re(){return(Se()||"chrome-extension:"===He()||Ge())&&!Le()&&Pe()&&!Je()}function Se(){return"http:"===He()||"https:"===He()}function He(){return l.location&&l.location.protocol||null}
function Te(a){a=a||K();return xe(a)||ve(a)==Ae?!1:!0}function Ue(a){return"undefined"===typeof a?null:ke(a)}function Ve(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function We(a){if(null!==a)return JSON.parse(a)}function Qe(a){return a?a:Math.floor(1E9*Math.random()).toString()}function Xe(a){a=a||K();return"Safari"==ve(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function Ye(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Ze(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=K();b=Ke();this.b=xe(a)||"ReactNative"===b}
Ze.prototype.get=function(){var a=l.navigator;return(a&&"boolean"===typeof a.onLine&&(Se()||"chrome-extension:"===He()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function $e(){var a=l.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
function af(){var a=l.document,b=null;return $e()||!a?E():(new D(function(c){b=function(){$e()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).o(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function bf(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function cf(){return!(!L("fireauth.oauthhelper",l)&&!L("fireauth.iframe",l))}
function df(){var a=l.navigator;return a&&a.serviceWorker&&a.serviceWorker.controller||null}function ef(){var a=l.navigator;return a&&a.serviceWorker?E().then(function(){return a.serviceWorker.ready}).then(function(b){return b.active||null}).o(function(){return null}):E(null)};/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var ff={};function gf(a){ff[a]||(ff[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var hf;try{var jf={};Object.defineProperty(jf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(jf,"abcd",{configurable:!0,enumerable:!0,value:2});hf=2==jf.abcd}catch(a){hf=!1}function M(a,b,c){hf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function N(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&M(a,c,b[c])}function kf(a){var b={};N(b,a);return b}function lf(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function mf(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function nf(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)M(b,c,nf(a[c]))}return b};/*

 Copyright 2019 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function of(a){var b=a&&(a[pf]?"phone":null);if(b&&a&&a[qf]){M(this,"uid",a[qf]);M(this,"displayName",a[rf]||null);var c=null;a[sf]&&(c=(new Date(a[sf])).toUTCString());M(this,"enrollmentTime",c);M(this,"factorId",b)}else throw new t("internal-error","Internal assert: invalid MultiFactorInfo object");}of.prototype.w=function(){return{uid:this.uid,displayName:this.displayName,factorId:this.factorId,enrollmentTime:this.enrollmentTime}};function tf(a){try{var b=new uf(a)}catch(c){b=null}return b}
var rf="displayName",sf="enrolledAt",qf="mfaEnrollmentId",pf="phoneInfo";function uf(a){of.call(this,a);M(this,"phoneNumber",a[pf])}r(uf,of);uf.prototype.w=function(){var a=uf.bb.w.call(this);a.phoneNumber=this.phoneNumber;return a};function vf(a){var b={},c=a[wf],d=a[xf],e=a[yf];a=tf(a[zf]);if(!e||e!=Af&&e!=Bf&&!c||e==Bf&&!d||e==Cf&&!a)throw Error("Invalid checkActionCode response!");e==Bf?(b[Df]=c||null,b[Ef]=c||null,b[Ff]=d):(b[Df]=d||null,b[Ef]=d||null,b[Ff]=c||null);b[Gf]=a||null;M(this,Hf,e);M(this,If,nf(b))}
var Cf="REVERT_SECOND_FACTOR_ADDITION",Af="EMAIL_SIGNIN",Bf="VERIFY_AND_CHANGE_EMAIL",wf="email",zf="mfaInfo",xf="newEmail",yf="requestType",Ff="email",Df="fromEmail",Gf="multiFactorInfo",Ef="previousEmail",If="data",Hf="operation";function Jf(a){a=J(a);var b=be(a,Kf)||null,c=be(a,Lf)||null,d=be(a,Mf)||null;d=d?Nf[d]||null:null;if(!b||!c||!d)throw new t("argument-error",Kf+", "+Lf+"and "+Mf+" are required in a valid action code URL.");N(this,{apiKey:b,operation:d,code:c,continueUrl:be(a,Of)||null,languageCode:be(a,Pf)||null,tenantId:be(a,Qf)||null})}
var Kf="apiKey",Lf="oobCode",Of="continueUrl",Pf="languageCode",Mf="mode",Qf="tenantId",Nf={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",revertSecondFactorAddition:Cf,signIn:Af,verifyAndChangeEmail:Bf,verifyEmail:"VERIFY_EMAIL"};function Rf(a){try{return new Jf(a)}catch(b){return null}};function Sf(a){var b=a[Tf];if("undefined"===typeof b)throw new t("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new t("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[Uf];if(c&&"object"===typeof c){b=c[Vf];var d=c[Wf];c=c[Xf];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new t("argument-error",Wf+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new t("argument-error",Xf+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new t("argument-error",Vf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new t("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new t("argument-error",Uf+" property must be a non null object when specified.");this.f=null;if((b=a[Yf])&&"object"===
typeof b)if(b=b[Zf],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new t("argument-error",Zf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new t("argument-error",Yf+" property must be a non null object when specified.");b=a[$f];if("undefined"!==typeof b&&"boolean"!==typeof b)throw new t("argument-error",$f+" property must be a boolean when specified.");this.c=!!b;a=a[ag];if("undefined"!==typeof a&&("string"!==typeof a||"string"===
typeof a&&!a.length))throw new t("argument-error",ag+" property must be a non empty string when specified.");this.i=a||null}var Uf="android",ag="dynamicLinkDomain",$f="handleCodeInApp",Yf="iOS",Tf="url",Wf="installApp",Xf="minimumVersion",Vf="packageName",Zf="bundleId";
function bg(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;b.dynamicLinkDomain=a.i;for(var c in b)null===b[c]&&delete b[c];return b};function cg(a){return Ra(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")};var dg=null;function eg(a){var b=[];fg(a,function(c){b.push(c)});return b}function fg(a,b){function c(m){for(;d<a.length;){var p=a.charAt(d++),v=dg[p];if(null!=v)return v;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return m}gg();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function gg(){if(!dg){dg={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++)for(var d=a.concat(b[c].split("")),e=0;e<d.length;e++){var f=d[e];void 0===dg[f]&&(dg[f]=e)}}};function hg(a){var b=ig(a);if(!(b&&b.sub&&b.iss&&b.aud&&b.exp))throw Error("Invalid JWT");this.h=a;this.a=b.exp;this.i=b.sub;a=Date.now()/1E3;this.g=b.iat||(a>this.a?this.a:a);this.b=b.provider_id||b.firebase&&b.firebase.sign_in_provider||null;this.f=b.firebase&&b.firebase.tenant||null;this.c=!!b.is_anonymous||"anonymous"==this.b}hg.prototype.T=function(){return this.f};hg.prototype.l=function(){return this.c};hg.prototype.toString=function(){return this.h};
function jg(a){try{return new hg(a)}catch(b){return null}}
function ig(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{var d=eg(a);a=[];for(c=b=0;b<d.length;){var e=d[b++];if(128>e)a[c++]=String.fromCharCode(e);else if(191<e&&224>e){var f=d[b++];a[c++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=d[b++];var g=d[b++],h=d[b++],m=((e&7)<<18|(f&63)<<12|(g&63)<<6|h&63)-65536;a[c++]=String.fromCharCode(55296+(m>>10));a[c++]=String.fromCharCode(56320+(m&1023))}else f=d[b++],g=
d[b++],a[c++]=String.fromCharCode((e&15)<<12|(f&63)<<6|g&63)}return JSON.parse(a.join(""))}catch(p){}return null};var kg="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),lg=["client_id","response_type","scope","redirect_uri","state"],mg={nd:{Ja:"locale",va:700,ua:600,fa:"facebook.com",Ya:lg},pd:{Ja:null,va:500,ua:750,fa:"github.com",Ya:lg},qd:{Ja:"hl",va:515,ua:680,fa:"google.com",Ya:lg},wd:{Ja:"lang",va:485,ua:705,fa:"twitter.com",Ya:kg},kd:{Ja:"locale",va:640,ua:600,fa:"apple.com",Ya:[]}};
function ng(a){for(var b in mg)if(mg[b].fa==a)return mg[b];return null};function og(a){var b={};b["facebook.com"]=pg;b["google.com"]=qg;b["github.com"]=rg;b["twitter.com"]=sg;var c=a&&a[tg];try{if(c)return b[c]?new b[c](a):new ug(a);if("undefined"!==typeof a[vg])return new wg(a)}catch(d){}return null}var vg="idToken",tg="providerId";
function wg(a){var b=a[tg];if(!b&&a[vg]){var c=jg(a[vg]);c&&c.b&&(b=c.b)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);M(this,"providerId",b);M(this,"isNewUser",c)}function ug(a){wg.call(this,a);a=We(a.rawUserInfo||"{}");M(this,"profile",nf(a||{}))}r(ug,wg);
function pg(a){ug.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}r(pg,ug);function rg(a){ug.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");M(this,"username",this.profile&&this.profile.login||null)}r(rg,ug);function qg(a){ug.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}r(qg,ug);
function sg(a){ug.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");M(this,"username",a.screenName||null)}r(sg,ug);function xg(a){var b=J(a),c=be(b,"link"),d=be(J(c),"link");b=be(b,"deep_link_id");return be(J(b),"link")||b||d||c||a};function yg(a,b){if(!a&&!b)throw new t("internal-error","Internal assert: no raw session string available");if(a&&b)throw new t("internal-error","Internal assert: unable to determine the session type");this.a=a||null;this.b=b||null;this.type=this.a?zg:Ag}var zg="enroll",Ag="signin";yg.prototype.Ha=function(){return this.a?E(this.a):E(this.b)};yg.prototype.w=function(){return this.type==zg?{multiFactorSession:{idToken:this.a}}:{multiFactorSession:{pendingCredential:this.b}}};function Bg(){}Bg.prototype.ka=function(){};Bg.prototype.b=function(){};Bg.prototype.c=function(){};Bg.prototype.w=function(){};function Cg(a,b){return a.then(function(c){if(c[Dg]){var d=jg(c[Dg]);if(!d||b!=d.i)throw new t("user-mismatch");return c}throw new t("user-mismatch");}).o(function(c){throw c&&c.code&&c.code==xa+"user-not-found"?new t("user-mismatch"):c;})}
function Eg(a,b){if(b)this.a=b;else throw new t("internal-error","failed to construct a credential");M(this,"providerId",a);M(this,"signInMethod",a)}Eg.prototype.ka=function(a){return Fg(a,Gg(this))};Eg.prototype.b=function(a,b){var c=Gg(this);c.idToken=b;return Hg(a,c)};Eg.prototype.c=function(a,b){return Cg(Ig(a,Gg(this)),b)};function Gg(a){return{pendingToken:a.a,requestUri:"http://localhost"}}Eg.prototype.w=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}};
function Jg(a){if(a&&a.providerId&&a.signInMethod&&0==a.providerId.indexOf("saml.")&&a.pendingToken)try{return new Eg(a.providerId,a.pendingToken)}catch(b){}return null}
function Kg(a,b,c){this.a=null;if(b.idToken||b.accessToken)b.idToken&&M(this,"idToken",b.idToken),b.accessToken&&M(this,"accessToken",b.accessToken),b.nonce&&!b.pendingToken&&M(this,"nonce",b.nonce),b.pendingToken&&(this.a=b.pendingToken);else if(b.oauthToken&&b.oauthTokenSecret)M(this,"accessToken",b.oauthToken),M(this,"secret",b.oauthTokenSecret);else throw new t("internal-error","failed to construct a credential");M(this,"providerId",a);M(this,"signInMethod",c)}
Kg.prototype.ka=function(a){return Fg(a,Lg(this))};Kg.prototype.b=function(a,b){var c=Lg(this);c.idToken=b;return Hg(a,c)};Kg.prototype.c=function(a,b){var c=Lg(this);return Cg(Ig(a,c),b)};
function Lg(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;a.nonce&&!a.a&&(b.nonce=a.nonce);b={postBody:fe(b).toString(),requestUri:"http://localhost"};a.a&&(delete b.postBody,b.pendingToken=a.a);return b}
Kg.prototype.w=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);this.nonce&&(a.nonce=this.nonce);this.a&&(a.pendingToken=this.a);return a};
function Mg(a){if(a&&a.providerId&&a.signInMethod){var b={idToken:a.oauthIdToken,accessToken:a.oauthTokenSecret?null:a.oauthAccessToken,oauthTokenSecret:a.oauthTokenSecret,oauthToken:a.oauthTokenSecret&&a.oauthAccessToken,nonce:a.nonce,pendingToken:a.pendingToken};try{return new Kg(a.providerId,b,a.signInMethod)}catch(c){}}return null}function Ng(a,b){this.Qc=b||[];N(this,{providerId:a,isOAuthProvider:!0});this.Jb={};this.qb=(ng(a)||{}).Ja||null;this.pb=null}
Ng.prototype.Ka=function(a){this.Jb=nb(a);return this};function Og(a){if("string"!==typeof a||0!=a.indexOf("saml."))throw new t("argument-error",'SAML provider IDs must be prefixed with "saml."');Ng.call(this,a,[])}r(Og,Ng);function Pg(a){Ng.call(this,a,lg);this.a=[]}r(Pg,Ng);Pg.prototype.Ca=function(a){Va(this.a,a)||this.a.push(a);return this};Pg.prototype.Rb=function(){return Za(this.a)};
Pg.prototype.credential=function(a,b){var c;n(a)?c={idToken:a.idToken||null,accessToken:a.accessToken||null,nonce:a.rawNonce||null}:c={idToken:a||null,accessToken:b||null};if(!c.idToken&&!c.accessToken)throw new t("argument-error","credential failed: must provide the ID token and/or the access token.");return new Kg(this.providerId,c,this.providerId)};function Qg(){Pg.call(this,"facebook.com")}r(Qg,Pg);M(Qg,"PROVIDER_ID","facebook.com");M(Qg,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function Rg(a){if(!a)throw new t("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;n(a)&&(b=a.accessToken);return(new Qg).credential({accessToken:b})}function Sg(){Pg.call(this,"github.com")}r(Sg,Pg);M(Sg,"PROVIDER_ID","github.com");M(Sg,"GITHUB_SIGN_IN_METHOD","github.com");
function Tg(a){if(!a)throw new t("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;n(a)&&(b=a.accessToken);return(new Sg).credential({accessToken:b})}function Ug(){Pg.call(this,"google.com");this.Ca("profile")}r(Ug,Pg);M(Ug,"PROVIDER_ID","google.com");M(Ug,"GOOGLE_SIGN_IN_METHOD","google.com");function Vg(a,b){var c=a;n(a)&&(c=a.idToken,b=a.accessToken);return(new Ug).credential({idToken:c,accessToken:b})}function Wg(){Ng.call(this,"twitter.com",kg)}
r(Wg,Ng);M(Wg,"PROVIDER_ID","twitter.com");M(Wg,"TWITTER_SIGN_IN_METHOD","twitter.com");function Xg(a,b){var c=a;n(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new t("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Kg("twitter.com",c,"twitter.com")}
function Yg(a,b,c){this.a=a;this.f=b;M(this,"providerId","password");M(this,"signInMethod",c===Zg.EMAIL_LINK_SIGN_IN_METHOD?Zg.EMAIL_LINK_SIGN_IN_METHOD:Zg.EMAIL_PASSWORD_SIGN_IN_METHOD)}Yg.prototype.ka=function(a){return this.signInMethod==Zg.EMAIL_LINK_SIGN_IN_METHOD?O(a,$g,{email:this.a,oobCode:this.f}):O(a,ah,{email:this.a,password:this.f})};
Yg.prototype.b=function(a,b){return this.signInMethod==Zg.EMAIL_LINK_SIGN_IN_METHOD?O(a,bh,{idToken:b,email:this.a,oobCode:this.f}):O(a,ch,{idToken:b,email:this.a,password:this.f})};Yg.prototype.c=function(a,b){return Cg(this.ka(a),b)};Yg.prototype.w=function(){return{email:this.a,password:this.f,signInMethod:this.signInMethod}};function dh(a){return a&&a.email&&a.password?new Yg(a.email,a.password,a.signInMethod):null}function Zg(){N(this,{providerId:"password",isOAuthProvider:!1})}
function eh(a,b){b=fh(b);if(!b)throw new t("argument-error","Invalid email link!");return new Yg(a,b.code,Zg.EMAIL_LINK_SIGN_IN_METHOD)}function fh(a){a=xg(a);return(a=Rf(a))&&a.operation===Af?a:null}N(Zg,{PROVIDER_ID:"password"});N(Zg,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});N(Zg,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});function gh(a){if(!(a.fb&&a.eb||a.La&&a.ea))throw new t("internal-error");this.a=a;M(this,"providerId","phone");this.fa="phone";M(this,"signInMethod","phone")}
gh.prototype.ka=function(a){return a.gb(hh(this))};gh.prototype.b=function(a,b){var c=hh(this);c.idToken=b;return O(a,ih,c)};gh.prototype.c=function(a,b){var c=hh(this);c.operation="REAUTH";a=O(a,jh,c);return Cg(a,b)};gh.prototype.w=function(){var a={providerId:"phone"};this.a.fb&&(a.verificationId=this.a.fb);this.a.eb&&(a.verificationCode=this.a.eb);this.a.La&&(a.temporaryProof=this.a.La);this.a.ea&&(a.phoneNumber=this.a.ea);return a};
function kh(a){if(a&&"phone"===a.providerId&&(a.verificationId&&a.verificationCode||a.temporaryProof&&a.phoneNumber)){var b={};w(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(c){a[c]&&(b[c]=a[c])});return new gh(b)}return null}function hh(a){return a.a.La&&a.a.ea?{temporaryProof:a.a.La,phoneNumber:a.a.ea}:{sessionInfo:a.a.fb,code:a.a.eb}}
function lh(a){try{this.a=a||index_esm.auth()}catch(b){throw new t("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}N(this,{providerId:"phone",isOAuthProvider:!1})}
lh.prototype.gb=function(a,b){var c=this.a.a;return E(b.verify()).then(function(d){if("string"!==typeof d)throw new t("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":var e=n(a)?a.session:null,f=n(a)?a.phoneNumber:a,g;e&&e.type==zg?g=e.Ha().then(function(h){return mh(c,{idToken:h,phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:d}})}):e&&e.type==Ag?g=e.Ha().then(function(h){return nh(c,
{mfaPendingCredential:h,mfaEnrollmentId:a.multiFactorHint&&a.multiFactorHint.uid||a.multiFactorUid,phoneSignInInfo:{recaptchaToken:d}})}):g=oh(c,{phoneNumber:f,recaptchaToken:d});return g.then(function(h){"function"===typeof b.reset&&b.reset();return h},function(h){"function"===typeof b.reset&&b.reset();throw h;});default:throw new t("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
function ph(a,b){if(!a)throw new t("missing-verification-id");if(!b)throw new t("missing-verification-code");return new gh({fb:a,eb:b})}N(lh,{PROVIDER_ID:"phone"});N(lh,{PHONE_SIGN_IN_METHOD:"phone"});
function qh(a){if(a.temporaryProof&&a.phoneNumber)return new gh({La:a.temporaryProof,ea:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret,e=a&&a.nonce,f=a&&a.oauthIdToken,g=a&&a.pendingToken;try{switch(b){case "google.com":return Vg(f,c);case "facebook.com":return Rg(c);case "github.com":return Tg(c);case "twitter.com":return Xg(c,d);default:return c||d||f||g?g?0==b.indexOf("saml.")?new Eg(b,g):new Kg(b,{pendingToken:g,idToken:a.oauthIdToken,
accessToken:a.oauthAccessToken},b):(new Pg(b)).credential({idToken:f,accessToken:c,rawNonce:e}):null}}catch(h){return null}}function rh(a){if(!a.isOAuthProvider)throw new t("invalid-oauth-provider");};function sh(a,b,c,d,e,f,g){this.c=a;this.b=b||null;this.g=c||null;this.f=d||null;this.i=f||null;this.h=g||null;this.a=e||null;if(this.g||this.a){if(this.g&&this.a)throw new t("invalid-auth-event");if(this.g&&!this.f)throw new t("invalid-auth-event");}else throw new t("invalid-auth-event");}sh.prototype.getUid=function(){var a=[];a.push(this.c);this.b&&a.push(this.b);this.f&&a.push(this.f);this.h&&a.push(this.h);return a.join("-")};sh.prototype.T=function(){return this.h};
sh.prototype.w=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.w()}};function th(a){a=a||{};return a.type?new sh(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&Aa(a.error),a.postBody,a.tenantId):null};/*

 Copyright 2018 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function uh(){this.b=null;this.a=[]}var vh=null;function wh(a){var b=vh;b.a.push(a);b.b||(b.b=function(c){for(var d=0;d<b.a.length;d++)b.a[d](c)},a=L("universalLinks.subscribe",l),"function"===typeof a&&a(null,b.b))};function xh(a){var b="unauthorized-domain",c=void 0,d=J(a);a=d.a;d=d.c;"chrome-extension"==d?c=Qb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Qb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
t.call(this,b,c)}r(xh,t);function yh(a,b,c){t.call(this,a,c);a=b||{};a.Kb&&M(this,"email",a.Kb);a.ea&&M(this,"phoneNumber",a.ea);a.credential&&M(this,"credential",a.credential);a.$b&&M(this,"tenantId",a.$b)}r(yh,t);yh.prototype.w=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);this.tenantId&&(a.tenantId=this.tenantId);var b=this.credential&&this.credential.w();b&&z(a,b);return a};yh.prototype.toJSON=function(){return this.w()};
function zh(a){if(a.code){var b=a.code||"";0==b.indexOf(xa)&&(b=b.substring(xa.length));var c={credential:qh(a),$b:a.tenantId};if(a.email)c.Kb=a.email;else if(a.phoneNumber)c.ea=a.phoneNumber;else if(!c.credential)return new t(b,a.message||void 0);return new yh(b,c,a.message)}return null};function Ah(){}Ah.prototype.c=null;function Bh(a){return a.c||(a.c=a.b())};var Ch;function Dh(){}r(Dh,Ah);Dh.prototype.a=function(){var a=Eh(this);return a?new ActiveXObject(a):new XMLHttpRequest};Dh.prototype.b=function(){var a={};Eh(this)&&(a[0]=!0,a[1]=!0);return a};
function Eh(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}Ch=new Dh;function Fh(){}r(Fh,Ah);Fh.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Gh;throw Error("Unsupported browser");};Fh.prototype.b=function(){return{}};
function Gh(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseType=this.responseText=this.response="";this.status=-1;this.statusText="";this.a.onload=q(this.qc,this);this.a.onerror=q(this.Tb,this);this.a.onprogress=q(this.rc,this);this.a.ontimeout=q(this.vc,this)}k=Gh.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
k.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};k.abort=function(){this.a.abort()};k.setRequestHeader=function(){};k.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};k.qc=function(){this.status=200;this.response=this.responseText=this.a.responseText;Hh(this,4)};k.Tb=function(){this.status=500;this.response=this.responseText="";Hh(this,4)};k.vc=function(){this.Tb()};
k.rc=function(){this.status=200;Hh(this,1)};function Hh(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}k.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function Ih(a,b,c){this.reset(a,b,c,void 0,void 0)}Ih.prototype.a=null;var Jh=0;Ih.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Jh++;d||va();delete this.a};function Kh(a){this.f=a;this.b=this.c=this.a=null}function Lh(a,b){this.name=a;this.value=b}Lh.prototype.toString=function(){return this.name};var Mh=new Lh("SEVERE",1E3),Nh=new Lh("WARNING",900),Oh=new Lh("CONFIG",700),Ph=new Lh("FINE",500);function Qh(a){if(a.c)return a.c;if(a.a)return Qh(a.a);Ga("Root logger has no level set.");return null}Kh.prototype.log=function(a,b,c){if(a.value>=Qh(this).value)for(oa(b)&&(b=b()),a=new Ih(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var Rh={},Sh=null;
function Th(a){Sh||(Sh=new Kh(""),Rh[""]=Sh,Sh.c=Oh);var b;if(!(b=Rh[a])){b=new Kh(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Th(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Rh[a]=b}return b};function Uh(a,b){a&&a.log(Ph,b,void 0)};function Vh(a){this.f=a}r(Vh,Ah);Vh.prototype.a=function(){return new Wh(this.f)};Vh.prototype.b=function(a){return function(){return a}}({});function Wh(a){H.call(this);this.u=a;this.h=void 0;this.readyState=Xh;this.status=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.l=new Headers;this.b=null;this.s="GET";this.f="";this.a=!1;this.i=Th("goog.net.FetchXmlHttp");this.m=this.c=this.g=null}r(Wh,H);var Xh=0;k=Wh.prototype;
k.open=function(a,b){if(this.readyState!=Xh)throw this.abort(),Error("Error reopening a connection");this.s=a;this.f=b;this.readyState=1;Yh(this)};k.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.l,method:this.s,credentials:this.h,cache:void 0};a&&(b.body=a);this.u.fetch(new Request(this.f,b)).then(this.uc.bind(this),this.Va.bind(this))};
k.abort=function(){this.response=this.responseText="";this.l=new Headers;this.status=0;this.c&&this.c.cancel("Request was aborted.");1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Zh(this));this.readyState=Xh};
k.uc=function(a){this.a&&(this.g=a,this.b||(this.status=this.g.status,this.statusText=this.g.statusText,this.b=a.headers,this.readyState=2,Yh(this)),this.a&&(this.readyState=3,Yh(this),this.a&&("arraybuffer"===this.responseType?a.arrayBuffer().then(this.sc.bind(this),this.Va.bind(this)):"undefined"!==typeof l.ReadableStream&&"body"in a?(this.response=this.responseText="",this.c=a.body.getReader(),this.m=new TextDecoder,$h(this)):a.text().then(this.tc.bind(this),this.Va.bind(this)))))};
function $h(a){a.c.read().then(a.pc.bind(a)).catch(a.Va.bind(a))}k.pc=function(a){if(this.a){var b=this.m.decode(a.value?a.value:new Uint8Array(0),{stream:!a.done});b&&(this.response=this.responseText+=b);a.done?Zh(this):Yh(this);3==this.readyState&&$h(this)}};k.tc=function(a){this.a&&(this.response=this.responseText=a,Zh(this))};k.sc=function(a){this.a&&(this.response=a,Zh(this))};k.Va=function(a){var b=this.i;b&&b.log(Nh,"Failed to fetch url "+this.f,a instanceof Error?a:Error(a));this.a&&Zh(this)};
function Zh(a){a.readyState=4;a.g=null;a.c=null;a.m=null;Yh(a)}k.setRequestHeader=function(a,b){this.l.append(a,b)};k.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.i)&&a.log(Nh,"Attempting to get response header but no headers have been received for url: "+this.f,void 0),"")};
k.getAllResponseHeaders=function(){if(!this.b){var a=this.i;a&&a.log(Nh,"Attempting to get all response headers but no headers have been received for url: "+this.f,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Yh(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wh.prototype,"withCredentials",{get:function(){return"include"===this.h},set:function(a){this.h=a?"include":"same-origin"}});function ai(a){H.call(this);this.headers=new Jd;this.D=a||null;this.c=!1;this.C=this.a=null;this.h=this.P=this.l="";this.f=this.N=this.i=this.J=!1;this.g=0;this.s=null;this.m=bi;this.u=this.S=!1}r(ai,H);var bi="";ai.prototype.b=Th("goog.net.XhrIo");var ci=/^https?$/i,di=["POST","PUT"];
function ei(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.P=c;a.J=!1;a.c=!0;a.a=a.D?a.D.a():Ch.a();a.C=a.D?Bh(a.D):Bh(Ch);a.a.onreadystatechange=q(a.Wb,a);try{Uh(a.b,fi(a,"Opening Xhr")),a.N=!0,a.a.open(c,String(b),!0),a.N=!1}catch(g){Uh(a.b,fi(a,"Error opening Xhr: "+g.message));gi(a,g);return}b=d||"";var f=new Jd(a.headers);e&&Id(e,function(g,h){f.set(h,g)});e=Ta(f.Y());d=l.FormData&&b instanceof
l.FormData;!Va(di,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(g,h){this.a.setRequestHeader(h,g)},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.S&&(a.a.withCredentials=a.S);try{hi(a),0<a.g&&(a.u=ii(a.a),Uh(a.b,fi(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.u)),a.u?(a.a.timeout=a.g,a.a.ontimeout=q(a.Ma,a)):a.s=Ed(a.Ma,a.g,a)),Uh(a.b,fi(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(g){Uh(a.b,
fi(a,"Send error: "+g.message)),gi(a,g)}}function ii(a){return Wb&&fc(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}function Ua(a){return"content-type"==a.toLowerCase()}k=ai.prototype;k.Ma=function(){"undefined"!=typeof ha&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Uh(this.b,fi(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function gi(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;ji(a);ki(a)}
function ji(a){a.J||(a.J=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}k.abort=function(){this.a&&this.c&&(Uh(this.b,fi(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ki(this))};k.Da=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ki(this,!0));ai.bb.Da.call(this)};k.Wb=function(){this.ya||(this.N||this.i||this.f?li(this):this.Jc())};k.Jc=function(){li(this)};
function li(a){if(a.c&&"undefined"!=typeof ha)if(a.C[1]&&4==mi(a)&&2==ni(a))Uh(a.b,fi(a,"Local request error detected and ignored"));else if(a.i&&4==mi(a))Ed(a.Wb,0,a);else if(a.dispatchEvent("readystatechange"),4==mi(a)){Uh(a.b,fi(a,"Request complete"));a.c=!1;try{var b=ni(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Md)[1]||null;if(!f&&l.self&&l.self.location){var g=l.self.location.protocol;
f=g.substr(0,g.length-1)}e=!ci.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var h=2<mi(a)?a.a.statusText:""}catch(m){Uh(a.b,"Can not get status: "+m.message),h=""}a.h=h+" ["+ni(a)+"]";ji(a)}}finally{ki(a)}}}function ki(a,b){if(a.a){hi(a);var c=a.a,d=a.C[0]?la:null;a.a=null;a.C=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(Mh,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function hi(a){a.a&&a.u&&(a.a.ontimeout=null);a.s&&(l.clearTimeout(a.s),a.s=null)}function mi(a){return a.a?a.a.readyState:0}function ni(a){try{return 2<mi(a)?a.a.status:-1}catch(b){return-1}}function oi(a){try{return a.a?a.a.responseText:""}catch(b){return Uh(a.b,"Can not get responseText: "+b.message),""}}
k.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case bi:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Mh,"Response type "+this.m+" is not supported on this browser",void 0);return null}catch(b){return Uh(this.b,"Can not get response: "+b.message),null}};function fi(a,b){return b+" ["+a.P+" "+a.l+" "+ni(a)+"]"};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function pi(a){var b=qi;this.g=[];this.u=b;this.s=a||null;this.f=this.a=!1;this.c=void 0;this.v=this.C=this.i=!1;this.h=0;this.b=null;this.l=0}pi.prototype.cancel=function(a){if(this.a)this.c instanceof pi&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.l--,0>=b.l&&b.cancel())}this.u?this.u.call(this.s,this):this.v=!0;this.a||(a=new ri(this),si(this),ti(this,!1,a))}};pi.prototype.m=function(a,b){this.i=!1;ti(this,a,b)};function ti(a,b,c){a.a=!0;a.c=c;a.f=!b;ui(a)}
function si(a){if(a.a){if(!a.v)throw new vi(a);a.v=!1}}function wi(a,b){xi(a,null,b,void 0)}function xi(a,b,c,d){a.g.push([b,c,d]);a.a&&ui(a)}pi.prototype.then=function(a,b,c){var d,e,f=new D(function(g,h){d=g;e=h});xi(this,d,function(g){g instanceof ri?f.cancel():e(g)});return f.then(a,b,c)};pi.prototype.$goog_Thenable=!0;function yi(a){return Sa(a.g,function(b){return oa(b[1])})}
function ui(a){if(a.h&&a.a&&yi(a)){var b=a.h,c=zi[b];c&&(l.clearTimeout(c.a),delete zi[b]);a.h=0}a.b&&(a.b.l--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],g=e[1];e=e[2];if(f=a.f?g:f)try{var h=f.call(e||a.s,b);void 0!==h&&(a.f=a.f&&(h==b||h instanceof Error),a.c=b=h);if(Ea(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.i=!0}catch(m){b=m,a.f=!0,yi(a)||(c=!0)}}a.c=b;d&&(h=q(a.m,a,!0),d=q(a.m,a,!1),b instanceof pi?(xi(b,h,d),b.C=!0):b.then(h,d));c&&(b=
new Ai(b),zi[b.a]=b,a.h=b.a)}function vi(){u.call(this)}r(vi,u);vi.prototype.message="Deferred has already fired";vi.prototype.name="AlreadyCalledError";function ri(){u.call(this)}r(ri,u);ri.prototype.message="Deferred was canceled";ri.prototype.name="CanceledError";function Ai(a){this.a=l.setTimeout(q(this.c,this),0);this.b=a}Ai.prototype.c=function(){delete zi[this.a];throw this.b;};var zi={};function Bi(a){var b={},c=b.document||document,d=yb(a).toString(),e=oc(document,"SCRIPT"),f={Xb:e,Ma:void 0},g=new pi(f),h=null,m=null!=b.timeout?b.timeout:5E3;0<m&&(h=window.setTimeout(function(){Ci(e,!0);var p=new Di(Ei,"Timeout reached for loading script "+d);si(g);ti(g,!1,p)},m),f.Ma=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Ci(e,b.xd||!1,h),si(g),ti(g,!0,null))};e.onerror=function(){Ci(e,!0,h);var p=new Di(Fi,"Error while loading script "+
d);si(g);ti(g,!1,p)};f=b.attributes||{};z(f,{type:"text/javascript",charset:"UTF-8"});lc(e,f);Ob(e,a);Gi(c).appendChild(e);return g}function Gi(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function qi(){if(this&&this.Xb){var a=this.Xb;a&&"SCRIPT"==a.tagName&&Ci(a,!0,this.Ma)}}
function Ci(a,b,c){null!=c&&l.clearTimeout(c);a.onload=la;a.onerror=la;a.onreadystatechange=la;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var Fi=0,Ei=1;function Di(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a}r(Di,u);function Hi(a){this.f=a}r(Hi,Ah);Hi.prototype.a=function(){return new this.f};Hi.prototype.b=function(){return{}};
function Ii(a,b,c){this.c=a;a=b||{};this.l=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.m=a.secureTokenTimeout||Ji;this.g=nb(a.secureTokenHeaders||Ki);this.h=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.i=a.identityPlatformEndpoint||"https://identitytoolkit.googleapis.com/v2/";this.v=a.firebaseTimeout||Li;this.a=nb(a.firebaseHeaders||Mi);c&&(this.a["X-Client-Version"]=c,this.g["X-Client-Version"]=c);c="Node"==Ke();c=l.XMLHttpRequest||
c&&index_esm.INTERNAL.node&&index_esm.INTERNAL.node.XMLHttpRequest;if(!c&&!Je())throw new t("internal-error","The XMLHttpRequest compatibility library was not found.");this.f=void 0;Je()?this.f=new Vh(self):Le()?this.f=new Hi(c):this.f=new Fh;this.b=null}var Ni,Dg="idToken",Ji=new Ze(3E4,6E4),Ki={"Content-Type":"application/x-www-form-urlencoded"},Li=new Ze(3E4,6E4),Mi={"Content-Type":"application/json"};function Oi(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
function Pi(a,b){b&&(a.l=Qi("https://securetoken.googleapis.com/v1/token",b),a.h=Qi("https://www.googleapis.com/identitytoolkit/v3/relyingparty/",b),a.i=Qi("https://identitytoolkit.googleapis.com/v2/",b))}function Qi(a,b){a=J(a);b=J(b.url);a.f=a.a+a.f;Pd(a,b.c);a.a=b.a;Qd(a,b.g);return a.toString()}function Ri(a,b){b?(a.a["X-Client-Version"]=b,a.g["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.g["X-Client-Version"])}Ii.prototype.T=function(){return this.b};
function Si(a,b,c,d,e,f,g){ue()||Je()?a=q(a.u,a):(Ni||(Ni=new D(function(h,m){Ti(h,m)})),a=q(a.s,a));a(b,c,d,e,f,g)}
Ii.prototype.u=function(a,b,c,d,e,f){if(Je()&&("undefined"===typeof l.fetch||"undefined"===typeof l.Headers||"undefined"===typeof l.Request))throw new t("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var g=new ai(this.f);if(f){g.g=Math.max(0,f);var h=setTimeout(function(){g.dispatchEvent("timeout")},f)}qd(g,"complete",function(){h&&clearTimeout(h);var m=null;try{m=
JSON.parse(oi(this))||null}catch(p){m=null}b&&b(m)});wd(g,"ready",function(){h&&clearTimeout(h);Xc(this)});wd(g,"timeout",function(){h&&clearTimeout(h);Xc(this);b&&b(null)});ei(g,a,c,d,e)};var Ui=new qb(rb,"https://apis.google.com/js/client.js?onload=%{onload}"),Vi="__fcb"+Math.floor(1E6*Math.random()).toString();
function Ti(a,b){if(((window.gapi||{}).client||{}).request)a();else{l[Vi]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=zb(Ui,{onload:Vi});wi(Bi(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
Ii.prototype.s=function(a,b,c,d,e){var f=this;Ni.then(function(){window.gapi.client.setApiKey(f.c);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(h){window.gapi.auth.setToken(g);b&&b(h)}})}).o(function(g){b&&b({error:{message:g&&g.message||"CORS_UNSUPPORTED"}})})};
function Wi(a,b){return new D(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Si(a,a.l+"?key="+encodeURIComponent(a.c),function(e){e?e.error?d(Xi(e)):e.access_token&&e.refresh_token?c(e):d(new t("internal-error")):d(new t("network-request-failed"))},"POST",fe(b).toString(),a.g,a.m.get()):d(new t("internal-error"))})}
function Yi(a,b,c,d,e,f,g){var h=J(b+c);I(h,"key",a.c);g&&I(h,"cb",Date.now().toString());var m="GET"==d;if(m)for(var p in e)e.hasOwnProperty(p)&&I(h,p,e[p]);return new D(function(v,B){Si(a,h.toString(),function(A){A?A.error?B(Xi(A,f||{})):v(A):B(new t("network-request-failed"))},d,m?void 0:ke(Ve(e)),a.a,a.v.get())})}function Zi(a){a=a.email;if("string"!==typeof a||!De.test(a))throw new t("invalid-email");}function $i(a){"email"in a&&Zi(a)}
function aj(a,b){return O(a,bj,{identifier:b,continueUri:Se()?re():"http://localhost"}).then(function(c){return c.signinMethods||[]})}function cj(a){return O(a,dj,{}).then(function(b){return b.authorizedDomains||[]})}function P(a){if(!a[Dg]){if(a.mfaPendingCredential)throw new t("multi-factor-auth-required",null,nb(a));throw new t("internal-error");}}
function ej(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new t("internal-error");}else{if(!a.sessionInfo)throw new t("missing-verification-id");if(!a.code)throw new t("missing-verification-code");}}Ii.prototype.Ab=function(){return O(this,fj,{})};Ii.prototype.Cb=function(a,b){return O(this,gj,{idToken:a,email:b})};Ii.prototype.Db=function(a,b){return O(this,ch,{idToken:a,password:b})};var hj={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};k=Ii.prototype;
k.Eb=function(a,b){var c={idToken:a},d=[];lb(hj,function(e,f){var g=b[f];null===g?d.push(e):f in b&&(c[f]=g)});d.length&&(c.deleteAttribute=d);return O(this,gj,c)};k.wb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};z(a,b);return O(this,ij,a)};k.xb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};z(a,b);return O(this,jj,a)};k.vb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};z(a,b);return O(this,kj,a)};
k.Fb=function(a,b,c){a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:a,newEmail:b};z(a,c);return O(this,lj,a)};function oh(a,b){return O(a,mj,b)}k.gb=function(a){return O(this,nj,a)};function mh(a,b){return O(a,oj,b).then(function(c){return c.phoneSessionInfo.sessionInfo})}
function pj(a){if(!a.phoneVerificationInfo)throw new t("internal-error");if(!a.phoneVerificationInfo.sessionInfo)throw new t("missing-verification-id");if(!a.phoneVerificationInfo.code)throw new t("missing-verification-code");}function nh(a,b){return O(a,qj,b).then(function(c){return c.phoneResponseInfo.sessionInfo})}function rj(a,b,c){return O(a,sj,{idToken:b,deleteProvider:c})}function tj(a){if(!a.requestUri||!a.sessionId&&!a.postBody&&!a.pendingToken)throw new t("internal-error");}
function uj(a,b){b.oauthIdToken&&b.providerId&&0==b.providerId.indexOf("oidc.")&&!b.pendingToken&&(a.sessionId?b.nonce=a.sessionId:a.postBody&&(a=new Ud(a.postBody),je(a,"nonce")&&(b.nonce=a.get("nonce"))));return b}
function vj(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=zh(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=zh(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=zh(a)):a.errorMessage&&(b=wj(a.errorMessage));if(b)throw b;P(a)}function Fg(a,b){b.returnIdpCredential=!0;return O(a,xj,b)}function Hg(a,b){b.returnIdpCredential=!0;return O(a,yj,b)}
function Ig(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return O(a,zj,b)}function Aj(a){if(!a.oobCode)throw new t("invalid-action-code");}k.ob=function(a,b){return O(this,Bj,{oobCode:a,newPassword:b})};k.Sa=function(a){return O(this,Cj,{oobCode:a})};k.kb=function(a){return O(this,Dj,{oobCode:a})};
var Dj={endpoint:"setAccountInfo",A:Aj,Z:"email",B:!0},Cj={endpoint:"resetPassword",A:Aj,G:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b&&"VERIFY_AND_CHANGE_EMAIL"!=b)throw new t("internal-error");},B:!0},Ej={endpoint:"signupNewUser",A:function(a){Zi(a);if(!a.password)throw new t("weak-password");},G:P,V:!0,B:!0},bj={endpoint:"createAuthUri",B:!0},Fj={endpoint:"deleteAccount",O:["idToken"]},sj={endpoint:"setAccountInfo",O:["idToken","deleteProvider"],A:function(a){if(!Array.isArray(a.deleteProvider))throw new t("internal-error");
}},$g={endpoint:"emailLinkSignin",O:["email","oobCode"],A:Zi,G:P,V:!0,B:!0},bh={endpoint:"emailLinkSignin",O:["idToken","email","oobCode"],A:Zi,G:P,V:!0},Gj={endpoint:"accounts/mfaEnrollment:finalize",O:["idToken","phoneVerificationInfo"],A:pj,G:P,B:!0,Na:!0},Hj={endpoint:"accounts/mfaSignIn:finalize",O:["mfaPendingCredential","phoneVerificationInfo"],A:pj,G:P,B:!0,Na:!0},Ij={endpoint:"getAccountInfo"},jj={endpoint:"getOobConfirmationCode",O:["requestType"],A:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new t("internal-error");
Zi(a)},Z:"email",B:!0},kj={endpoint:"getOobConfirmationCode",O:["idToken","requestType"],A:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new t("internal-error");},Z:"email",B:!0},lj={endpoint:"getOobConfirmationCode",O:["idToken","newEmail","requestType"],A:function(a){if("VERIFY_AND_CHANGE_EMAIL"!=a.requestType)throw new t("internal-error");},Z:"email",B:!0},ij={endpoint:"getOobConfirmationCode",O:["requestType"],A:function(a){if("PASSWORD_RESET"!=a.requestType)throw new t("internal-error");
Zi(a)},Z:"email",B:!0},dj={mb:!0,endpoint:"getProjectConfig",Vb:"GET"},Jj={mb:!0,endpoint:"getRecaptchaParam",Vb:"GET",G:function(a){if(!a.recaptchaSiteKey)throw new t("internal-error");}},Bj={endpoint:"resetPassword",A:Aj,Z:"email",B:!0},mj={endpoint:"sendVerificationCode",O:["phoneNumber","recaptchaToken"],Z:"sessionInfo",B:!0},gj={endpoint:"setAccountInfo",O:["idToken"],A:$i,V:!0},ch={endpoint:"setAccountInfo",O:["idToken"],A:function(a){$i(a);if(!a.password)throw new t("weak-password");},G:P,
V:!0},fj={endpoint:"signupNewUser",G:P,V:!0,B:!0},oj={endpoint:"accounts/mfaEnrollment:start",O:["idToken","phoneEnrollmentInfo"],A:function(a){if(!a.phoneEnrollmentInfo)throw new t("internal-error");if(!a.phoneEnrollmentInfo.phoneNumber)throw new t("missing-phone-number");if(!a.phoneEnrollmentInfo.recaptchaToken)throw new t("missing-app-credential");},G:function(a){if(!a.phoneSessionInfo||!a.phoneSessionInfo.sessionInfo)throw new t("internal-error");},B:!0,Na:!0},qj={endpoint:"accounts/mfaSignIn:start",
O:["mfaPendingCredential","mfaEnrollmentId","phoneSignInInfo"],A:function(a){if(!a.phoneSignInInfo||!a.phoneSignInInfo.recaptchaToken)throw new t("missing-app-credential");},G:function(a){if(!a.phoneResponseInfo||!a.phoneResponseInfo.sessionInfo)throw new t("internal-error");},B:!0,Na:!0},xj={endpoint:"verifyAssertion",A:tj,Za:uj,G:vj,V:!0,B:!0},zj={endpoint:"verifyAssertion",A:tj,Za:uj,G:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new t("user-not-found");if(a.errorMessage)throw wj(a.errorMessage);
P(a)},V:!0,B:!0},yj={endpoint:"verifyAssertion",A:function(a){tj(a);if(!a.idToken)throw new t("internal-error");},Za:uj,G:vj,V:!0},Kj={endpoint:"verifyCustomToken",A:function(a){if(!a.token)throw new t("invalid-custom-token");},G:P,V:!0,B:!0},ah={endpoint:"verifyPassword",A:function(a){Zi(a);if(!a.password)throw new t("wrong-password");},G:P,V:!0,B:!0},nj={endpoint:"verifyPhoneNumber",A:ej,G:P,B:!0},ih={endpoint:"verifyPhoneNumber",A:function(a){if(!a.idToken)throw new t("internal-error");ej(a)},
G:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",zh(a);P(a)}},jh={Ib:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",A:ej,G:P,B:!0},Lj={endpoint:"accounts/mfaEnrollment:withdraw",O:["idToken","mfaEnrollmentId"],G:function(a){if(!!a[Dg]^!!a.refreshToken)throw new t("internal-error");},B:!0,Na:!0};
function O(a,b,c){if(!mf(c,b.O))return F(new t("internal-error"));var d=!!b.Na,e=b.Vb||"POST",f;return E(c).then(b.A).then(function(){b.V&&(c.returnSecureToken=!0);b.B&&a.b&&"undefined"===typeof c.tenantId&&(c.tenantId=a.b);return d?Yi(a,a.i,b.endpoint,e,c,b.Ib,b.mb||!1):Yi(a,a.h,b.endpoint,e,c,b.Ib,b.mb||!1)}).then(function(g){f=g;return b.Za?b.Za(c,f):f}).then(b.G).then(function(){if(!b.Z)return f;if(!(b.Z in f))throw new t("internal-error");return f[b.Z]})}
function wj(a){return Xi({error:{errors:[{message:a}],code:400,message:a}})}
function Xi(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new t(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",
EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",
OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",
QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",
INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",EMAIL_CHANGE_NEEDS_VERIFICATION:"email-change-needs-verification",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",
UNSUPPORTED_FIRST_FACTOR:"unsupported-first-factor",UNVERIFIED_EMAIL:"unverified-email"};z(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new t(d[e],b);!b&&a&&(b=Ue(a));return new t("internal-error",b)};function Mj(a){this.b=a;this.a=null;this.sb=Nj(this)}
function Nj(a){return Oj().then(function(){return new D(function(b,c){L("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},Pj.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function Qj(a,b){return a.sb.then(function(){return new D(function(c){a.a.send(b.type,b,c,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function Rj(a,b){a.sb.then(function(){a.a.register("authEvent",b,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var Sj=new qb(rb,"https://apis.google.com/js/api.js?onload=%{onload}"),Tj=new Ze(3E4,6E4),Pj=new Ze(5E3,15E3),Uj=null;
function Oj(){return Uj?Uj:Uj=(new D(function(a,b){function c(){Ye();L("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Ye();b(Error("Network Error"))},timeout:Tj.get()})}if(L("gapi.iframes.Iframe"))a();else if(L("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){L("gapi.load")?c():b(Error("Network Error"))};d=zb(Sj,{onload:d});E(Bi(d)).o(function(){b(Error("Network Error"))})}})).o(function(a){Uj=null;throw a;})};function Vj(a,b,c,d){this.l=a;this.h=b;this.i=c;this.g=d;this.f=null;this.g?(a=J(this.g.url),a=ce(a.c,a.a,a.g,"/emulator/auth/iframe")):a=ce("https",this.l,null,"/__/auth/iframe");this.a=a;I(this.a,"apiKey",this.h);I(this.a,"appName",this.i);this.b=null;this.c=[]}Vj.prototype.toString=function(){this.f?I(this.a,"v",this.f):ie(this.a.b,"v");this.b?I(this.a,"eid",this.b):ie(this.a.b,"eid");this.c.length?I(this.a,"fw",this.c.join(",")):ie(this.a.b,"fw");return this.a.toString()};
function Wj(a,b,c,d,e,f){this.u=a;this.s=b;this.c=c;this.m=d;this.v=f;this.i=this.g=this.l=null;this.a=e;this.h=this.f=null}Wj.prototype.zb=function(a){this.h=a;return this};
Wj.prototype.toString=function(){if(this.v){var a=J(this.v.url);a=ce(a.c,a.a,a.g,"/emulator/auth/handler")}else a=ce("https",this.u,null,"/__/auth/handler");I(a,"apiKey",this.s);I(a,"appName",this.c);I(a,"authType",this.m);if(this.a.isOAuthProvider){var b=this.a;try{var c=index_esm.app(this.c).auth().la()}catch(h){c=null}b.pb=c;I(a,"providerId",this.a.providerId);c=this.a;b=Ve(c.Jb);for(var d in b)b[d]=b[d].toString();d=c.Qc;b=nb(b);for(var e=0;e<d.length;e++){var f=d[e];f in b&&delete b[f]}c.qb&&
c.pb&&!b[c.qb]&&(b[c.qb]=c.pb);mb(b)||I(a,"customParameters",Ue(b))}"function"===typeof this.a.Rb&&(c=this.a.Rb(),c.length&&I(a,"scopes",c.join(",")));this.l?I(a,"redirectUrl",this.l):ie(a.b,"redirectUrl");this.g?I(a,"eventId",this.g):ie(a.b,"eventId");this.i?I(a,"v",this.i):ie(a.b,"v");if(this.b)for(var g in this.b)this.b.hasOwnProperty(g)&&!be(a,g)&&I(a,g,this.b[g]);this.h?I(a,"tid",this.h):ie(a.b,"tid");this.f?I(a,"eid",this.f):ie(a.b,"eid");g=Xj(this.c);g.length&&I(a,"fw",g.join(","));return a.toString()};
function Xj(a){try{return index_esm.app(a).auth().Ga()}catch(b){return[]}}function Yj(a,b,c,d,e,f){this.s=a;this.g=b;this.b=c;this.f=f;this.c=d||null;this.i=e||null;this.l=this.u=this.C=null;this.h=[];this.m=this.a=null}
function Zj(a){var b=re();return cj(a).then(function(c){a:{var d=J(b),e=d.c;d=d.a;for(var f=0;f<c.length;f++){var g=c[f];var h=d;var m=e;0==g.indexOf("chrome-extension://")?h=J(g).a==h&&"chrome-extension"==m:"http"!=m&&"https"!=m?h=!1:Ce.test(g)?h=h==g:(g=g.split(".").join("\\."),h=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(h));if(h){c=!0;break a}}c=!1}if(!c)throw new xh(re());})}
function ak(a){if(a.m)return a.m;a.m=Ee().then(function(){if(!a.u){var b=a.c,c=a.i,d=Xj(a.b),e=new Vj(a.s,a.g,a.b,a.f);e.f=b;e.b=c;e.c=Za(d||[]);a.u=e.toString()}a.v=new Mj(a.u);bk(a)});return a.m}k=Yj.prototype;k.Pb=function(a,b,c){var d=new t("popup-closed-by-user"),e=new t("web-storage-unsupported"),f=this,g=!1;return this.ma().then(function(){ck(f).then(function(h){h||(a&&ye(a),b(e),g=!0)})}).o(function(){}).then(function(){if(!g)return Be(a)}).then(function(){if(!g)return Fd(c).then(function(){b(d)})})};
k.Yb=function(){var a=K();return!Te(a)&&!Xe(a)};k.Ub=function(){return!1};
k.Nb=function(a,b,c,d,e,f,g,h){if(!a)return F(new t("popup-blocked"));if(g&&!Te())return this.ma().o(function(p){ye(a);e(p)}),d(),E();this.a||(this.a=Zj(dk(this)));var m=this;return this.a.then(function(){var p=m.ma().o(function(v){ye(a);e(v);throw v;});d();return p}).then(function(){rh(c);if(!g){var p=ek(m.s,m.g,m.b,b,c,null,f,m.c,void 0,m.i,h,m.f);se(p,a)}}).o(function(p){"auth/network-request-failed"==p.code&&(m.a=null);throw p;})};
function dk(a){a.l||(a.C=a.c?Oe(a.c,Xj(a.b)):null,a.l=new Ii(a.g,Ca(a.i),a.C),a.f&&Pi(a.l,a.f));return a.l}k.Ob=function(a,b,c,d){this.a||(this.a=Zj(dk(this)));var e=this;return this.a.then(function(){rh(b);var f=ek(e.s,e.g,e.b,a,b,re(),c,e.c,void 0,e.i,d,e.f);se(f)}).o(function(f){"auth/network-request-failed"==f.code&&(e.a=null);throw f;})};k.ma=function(){var a=this;return ak(this).then(function(){return a.v.sb}).o(function(){a.a=null;throw new t("network-request-failed");})};k.ac=function(){return!0};
function ek(a,b,c,d,e,f,g,h,m,p,v,B){a=new Wj(a,b,c,d,e,B);a.l=f;a.g=g;a.i=h;a.b=nb(m||null);a.f=p;return a.zb(v).toString()}function bk(a){if(!a.v)throw Error("IfcHandler must be initialized!");Rj(a.v,function(b){var c={};if(b&&b.authEvent){var d=!1;b=th(b.authEvent);for(c=0;c<a.h.length;c++)d=a.h[c](b)||d;c={};c.status=d?"ACK":"ERROR";return E(c)}c.status="ERROR";return E(c)})}
function ck(a){var b={type:"webStorageSupport"};return ak(a).then(function(){return Qj(a.v,b)}).then(function(c){if(c&&c.length&&"undefined"!==typeof c[0].webStorageSupport)return c[0].webStorageSupport;throw Error();})}k.Ea=function(a){this.h.push(a)};k.Ta=function(a){Xa(this.h,function(b){return b==a})};function fk(a){this.a=a||index_esm.INTERNAL.reactNative&&index_esm.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new t("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}k=fk.prototype;k.get=function(a){return E(this.a.getItem(a)).then(function(b){return b&&We(b)})};k.set=function(a,b){return E(this.a.setItem(a,Ue(b)))};k.U=function(a){return E(this.a.removeItem(a))};k.ca=function(){};k.ia=function(){};function gk(a){this.b=a;this.a={};this.f=q(this.c,this)}var hk=[];function ik(){var a=Je()?self:null;w(hk,function(c){c.b==a&&(b=c)});if(!b){var b=new gk(a);hk.push(b)}return b}
gk.prototype.c=function(a){var b=a.data.eventType,c=a.data.eventId,d=this.a[b];if(d&&0<d.length){a.ports[0].postMessage({status:"ack",eventId:c,eventType:b,response:null});var e=[];w(d,function(f){e.push(E().then(function(){return f(a.origin,a.data.data)}))});Jc(e).then(function(f){var g=[];w(f,function(h){g.push({fulfilled:h.Qb,value:h.value,reason:h.reason?h.reason.message:void 0})});w(g,function(h){for(var m in h)"undefined"===typeof h[m]&&delete h[m]});a.ports[0].postMessage({status:"done",eventId:c,
eventType:b,response:g})})}};function jk(a,b,c){mb(a.a)&&a.b.addEventListener("message",a.f);"undefined"===typeof a.a[b]&&(a.a[b]=[]);a.a[b].push(c)};function kk(a){this.a=a}kk.prototype.postMessage=function(a,b){this.a.postMessage(a,b)};function lk(a){this.c=a;this.b=!1;this.a=[]}
function mk(a,b,c,d){var e,f=c||{},g,h,m,p=null;if(a.b)return F(Error("connection_unavailable"));var v=d?800:50,B="undefined"!==typeof MessageChannel?new MessageChannel:null;return(new D(function(A,Q){B?(e=Math.floor(Math.random()*Math.pow(10,20)).toString(),B.port1.start(),h=setTimeout(function(){Q(Error("unsupported_event"))},v),g=function(ya){ya.data.eventId===e&&("ack"===ya.data.status?(clearTimeout(h),m=setTimeout(function(){Q(Error("timeout"))},3E3)):"done"===ya.data.status?(clearTimeout(m),
"undefined"!==typeof ya.data.response?A(ya.data.response):Q(Error("unknown_error"))):(clearTimeout(h),clearTimeout(m),Q(Error("invalid_response"))))},p={messageChannel:B,onMessage:g},a.a.push(p),B.port1.addEventListener("message",g),a.c.postMessage({eventType:b,eventId:e,data:f},[B.port2])):Q(Error("connection_unavailable"))})).then(function(A){nk(a,p);return A}).o(function(A){nk(a,p);throw A;})}
function nk(a,b){if(b){var c=b.messageChannel,d=b.onMessage;c&&(c.port1.removeEventListener("message",d),c.port1.close());Xa(a.a,function(e){return e==b})}}lk.prototype.close=function(){for(;0<this.a.length;)nk(this,this.a[0]);this.b=!0};function ok(){if(!pk())throw new t("web-storage-unsupported");this.c={};this.a=[];this.b=0;this.m=l.indexedDB;this.type="indexedDB";this.g=this.v=this.f=this.l=null;this.s=!1;this.h=null;var a=this;Je()&&self?(this.v=ik(),jk(this.v,"keyChanged",function(b,c){return qk(a).then(function(d){0<d.length&&w(a.a,function(e){e(d)});return{keyProcessed:Va(d,c.key)}})}),jk(this.v,"ping",function(){return E(["keyChanged"])})):ef().then(function(b){if(a.h=b)a.g=new lk(new kk(b)),mk(a.g,"ping",null,!0).then(function(c){c[0].fulfilled&&
Va(c[0].value,"keyChanged")&&(a.s=!0)}).o(function(){})})}var rk;function sk(a){return new D(function(b,c){var d=a.m.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b()};d.onerror=function(e){c(Error(e.target.error))}})}
function tk(a){return new D(function(b,c){var d=a.m.open("firebaseLocalStorageDb",1);d.onerror=function(e){try{e.preventDefault()}catch(f){}c(Error(e.target.error))};d.onupgradeneeded=function(e){e=e.target.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(e){e=e.target.result;e.objectStoreNames.contains("firebaseLocalStorage")?b(e):sk(a).then(function(){return tk(a)}).then(function(f){b(f)}).o(function(f){c(f)})}})}
function uk(a){a.i||(a.i=tk(a));return a.i}function vk(a,b){function c(e,f){uk(a).then(b).then(e).o(function(g){if(3<++d)f(g);else return uk(a).then(function(h){h.close();a.i=void 0;return c(e,f)}).o(function(h){f(h)})})}var d=0;return new D(c)}function pk(){try{return!!l.indexedDB}catch(a){return!1}}function wk(a){return a.objectStore("firebaseLocalStorage")}function xk(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}
function yk(a){return new D(function(b,c){a.onsuccess=function(d){d&&d.target?b(d.target.result):b()};a.onerror=function(d){c(d.target.error)}})}k=ok.prototype;k.set=function(a,b){var c=this,d=!1;return vk(this,function(e){e=wk(xk(e,!0));return yk(e.get(a))}).then(function(e){return vk(c,function(f){f=wk(xk(f,!0));if(e)return e.value=b,yk(f.put(e));c.b++;d=!0;var g={};g.fbase_key=a;g.value=b;return yk(f.add(g))})}).then(function(){c.c[a]=b;return zk(c,a)}).oa(function(){d&&c.b--})};
function zk(a,b){return a.g&&a.h&&df()===a.h?mk(a.g,"keyChanged",{key:b},a.s).then(function(){}).o(function(){}):E()}k.get=function(a){return vk(this,function(b){return yk(wk(xk(b,!1)).get(a))}).then(function(b){return b&&b.value})};k.U=function(a){var b=this,c=!1;return vk(this,function(d){c=!0;b.b++;return yk(wk(xk(d,!0))["delete"](a))}).then(function(){delete b.c[a];return zk(b,a)}).oa(function(){c&&b.b--})};
function qk(a){return uk(a).then(function(b){var c=wk(xk(b,!1));return c.getAll?yk(c.getAll()):new D(function(d,e){var f=[],g=c.openCursor();g.onsuccess=function(h){(h=h.target.result)?(f.push(h.value),h["continue"]()):d(f)};g.onerror=function(h){e(h.target.error)}})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=te(a.c,c);a.c=c}return d})}k.ca=function(a){0==this.a.length&&Ak(this);this.a.push(a)};
k.ia=function(a){Xa(this.a,function(b){return b==a});0==this.a.length&&Bk(this)};function Ak(a){function b(){a.f=setTimeout(function(){a.l=qk(a).then(function(c){0<c.length&&w(a.a,function(d){d(c)})}).then(function(){b()}).o(function(c){"STOP_EVENT"!=c.message&&b()})},800)}Bk(a);b()}function Bk(a){a.l&&a.l.cancel("STOP_EVENT");a.f&&(clearTimeout(a.f),a.f=null)};function Ck(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=E().then(function(){if(pk()){var d=Qe(),e="__sak"+d;rk||(rk=new ok);c=rk;return c.set(e,d).then(function(){return c.get(e)}).then(function(f){if(f!==d)throw Error("indexedDB not supported!");return c.U(e)}).then(function(){return c}).o(function(){return b.c})}return b.c}).then(function(d){b.type=d.type;d.ca(function(e){w(b.a,function(f){f(e)})});return d})}k=Ck.prototype;k.get=function(a){return this.b.then(function(b){return b.get(a)})};
k.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};k.U=function(a){return this.b.then(function(b){return b.U(a)})};k.ca=function(a){this.a.push(a)};k.ia=function(a){Xa(this.a,function(b){return b==a})};function Dk(){this.a={};this.type="inMemory"}k=Dk.prototype;k.get=function(a){return E(this.a[a])};k.set=function(a,b){this.a[a]=b;return E()};k.U=function(a){delete this.a[a];return E()};k.ca=function(){};k.ia=function(){};function Ek(){if(!Fk()){if("Node"==Ke())throw new t("internal-error","The LocalStorage compatibility library was not found.");throw new t("web-storage-unsupported");}this.a=Gk()||index_esm.INTERNAL.node.localStorage;this.type="localStorage"}function Gk(){try{var a=l.localStorage,b=Qe();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Fk(){var a="Node"==Ke();a=Gk()||a&&index_esm.INTERNAL.node&&index_esm.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}k=Ek.prototype;k.get=function(a){var b=this;return E().then(function(){var c=b.a.getItem(a);return We(c)})};k.set=function(a,b){var c=this;return E().then(function(){var d=Ue(b);null===d?c.U(a):c.a.setItem(a,d)})};k.U=function(a){var b=this;return E().then(function(){b.a.removeItem(a)})};
k.ca=function(a){l.window&&nd(l.window,"storage",a)};k.ia=function(a){l.window&&xd(l.window,"storage",a)};function Hk(){this.type="nullStorage"}k=Hk.prototype;k.get=function(){return E(null)};k.set=function(){return E()};k.U=function(){return E()};k.ca=function(){};k.ia=function(){};function Ik(){if(!Jk()){if("Node"==Ke())throw new t("internal-error","The SessionStorage compatibility library was not found.");throw new t("web-storage-unsupported");}this.a=Kk()||index_esm.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function Kk(){try{var a=l.sessionStorage,b=Qe();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Jk(){var a="Node"==Ke();a=Kk()||a&&index_esm.INTERNAL.node&&index_esm.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}k=Ik.prototype;k.get=function(a){var b=this;return E().then(function(){var c=b.a.getItem(a);return We(c)})};k.set=function(a,b){var c=this;return E().then(function(){var d=Ue(b);null===d?c.U(a):c.a.setItem(a,d)})};k.U=function(a){var b=this;return E().then(function(){b.a.removeItem(a)})};k.ca=function(){};
k.ia=function(){};function Lk(){var a={};a.Browser=Mk;a.Node=Nk;a.ReactNative=Ok;a.Worker=Pk;this.a=a[Ke()]}var Qk,Mk={F:Ek,cb:Ik},Nk={F:Ek,cb:Ik},Ok={F:fk,cb:Hk},Pk={F:Ek,cb:Hk};var Rk={rd:"local",NONE:"none",td:"session"};function Sk(a){var b=new t("invalid-persistence-type"),c=new t("unsupported-persistence-type");a:{for(d in Rk)if(Rk[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(Ke()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;case "Worker":if("session"===a||!pk()&&"none"!==a)throw c;break;default:if(!Pe()&&"none"!==a)throw c;}}
function Tk(){var a=!Xe(K())&&Ie()?!0:!1,b=Te(),c=Pe();this.m=a;this.h=b;this.l=c;this.a={};Qk||(Qk=new Lk);a=Qk;try{this.g=!qe()&&cf()||!l.indexedDB?new a.a.F:new Ck(Je()?new Dk:new a.a.F)}catch(d){this.g=new Dk,this.h=!0}try{this.i=new a.a.cb}catch(d){this.i=new Dk}this.v=new Dk;this.f=q(this.Zb,this);this.b={}}var Uk;function Vk(){Uk||(Uk=new Tk);return Uk}function Wk(a,b){switch(b){case "session":return a.i;case "none":return a.v;default:return a.g}}
function Xk(a,b){return"firebase:"+a.name+(b?":"+b:"")}function Yk(a,b,c){var d=Xk(b,c),e=Wk(a,b.F);return a.get(b,c).then(function(f){var g=null;try{g=We(l.localStorage.getItem(d))}catch(h){}if(g&&!f)return l.localStorage.removeItem(d),a.set(b,g,c);g&&f&&"localStorage"!=e.type&&l.localStorage.removeItem(d)})}k=Tk.prototype;k.get=function(a,b){return Wk(this,a.F).get(Xk(a,b))};function Zk(a,b,c){c=Xk(b,c);"local"==b.F&&(a.b[c]=null);return Wk(a,b.F).U(c)}
k.set=function(a,b,c){var d=Xk(a,c),e=this,f=Wk(this,a.F);return f.set(d,b).then(function(){return f.get(d)}).then(function(g){"local"==a.F&&(e.b[d]=g)})};k.addListener=function(a,b,c){a=Xk(a,b);this.l&&(this.b[a]=l.localStorage.getItem(a));mb(this.a)&&(Wk(this,"local").ca(this.f),this.h||(qe()||!cf())&&l.indexedDB||!this.l||$k(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
k.removeListener=function(a,b,c){a=Xk(a,b);this.a[a]&&(Xa(this.a[a],function(d){return d==c}),0==this.a[a].length&&delete this.a[a]);mb(this.a)&&(Wk(this,"local").ia(this.f),al(this))};function $k(a){al(a);a.c=setInterval(function(){for(var b in a.a){var c=l.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new bd({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Zb(c))}},1E3)}function al(a){a.c&&(clearInterval(a.c),a.c=null)}
k.Zb=function(a){if(a&&a.g){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=l.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.nb(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?Wk(this,"local").ia(this.f):al(this);if(this.m)if(c=l.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?l.localStorage.setItem(b,d):l.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==l.localStorage.getItem(b))f.b[b]=l.localStorage.getItem(b),f.nb(b)};Wb&&ic&&10==ic&&l.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else w(a,q(this.nb,this))};k.nb=function(a){this.a[a]&&w(this.a[a],function(b){b()})};function bl(a){this.a=a;this.b=Vk()}var cl={name:"authEvent",F:"local"};function dl(a){return a.b.get(cl,a.a).then(function(b){return th(b)})};function el(){this.a=Vk()};function fl(){this.b=-1};function gl(a,b){this.b=hl;this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.l=l.Int32Array?new Int32Array(64):Array(64);void 0===il&&(l.Int32Array?il=new Int32Array(jl):il=jl);this.reset()}var il;r(gl,fl);for(var hl=64,kl=hl-1,ll=[],ml=0;ml<kl;ml++)ll[ml]=0;var nl=Ya(128,ll);gl.prototype.reset=function(){this.g=this.c=0;this.a=l.Int32Array?new Int32Array(this.h):Za(this.h)};
function ol(a){for(var b=a.f,c=a.l,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}d=a.a[0]|0;e=a.a[1]|0;var h=a.a[2]|0,m=a.a[3]|0,p=a.a[4]|0,v=a.a[5]|0,B=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var A=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&h^e&h)|0;g=p&v^~p&B;f=f+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<
7))|0;g=g+(il[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=B;B=v;v=p;p=m+g|0;m=h;h=e;e=d;d=g+A|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+h|0;a.a[3]=a.a[3]+m|0;a.a[4]=a.a[4]+p|0;a.a[5]=a.a[5]+v|0;a.a[6]=a.a[6]+B|0;a.a[7]=a.a[7]+f|0}
function pl(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if("string"===typeof b)for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(ol(a),e=0);else if(na(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(ol(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var jl=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ql(){gl.call(this,8,rl)}r(ql,gl);var rl=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function sl(a,b,c,d,e,f){this.v=a;this.i=b;this.l=c;this.m=d||null;this.u=e||null;this.s=f;this.h=b+":"+c;this.C=new el;this.g=new bl(this.h);this.f=null;this.b=[];this.a=this.c=null}function tl(a){return new t("invalid-cordova-configuration",a)}k=sl.prototype;
k.ma=function(){return this.Ia?this.Ia:this.Ia=Fe().then(function(){if("function"!==typeof L("universalLinks.subscribe",l))throw tl("cordova-universal-links-plugin-fix is not installed");if("undefined"===typeof L("BuildInfo.packageName",l))throw tl("cordova-plugin-buildinfo is not installed");if("function"!==typeof L("cordova.plugins.browsertab.openUrl",l))throw tl("cordova-plugin-browsertab is not installed");if("function"!==typeof L("cordova.InAppBrowser.open",l))throw tl("cordova-plugin-inappbrowser is not installed");
},function(){throw new t("cordova-not-ready");})};function ul(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function vl(a){var b=new ql;pl(b,a);a=[];var c=8*b.g;56>b.c?pl(b,nl,56-b.c):pl(b,nl,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;ol(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return cg(a)}
k.Pb=function(a,b){b(new t("operation-not-supported-in-this-environment"));return E()};k.Nb=function(){return F(new t("operation-not-supported-in-this-environment"))};k.ac=function(){return!1};k.Yb=function(){return!0};k.Ub=function(){return!0};
k.Ob=function(a,b,c,d){if(this.c)return F(new t("redirect-operation-pending"));var e=this,f=l.document,g=null,h=null,m=null,p=null;return this.c=E().then(function(){rh(b);return wl(e)}).then(function(){return xl(e,a,b,c,d)}).then(function(){return(new D(function(v,B){h=function(){var A=L("cordova.plugins.browsertab.close",l);v();"function"===typeof A&&A();e.a&&"function"===typeof e.a.close&&(e.a.close(),e.a=null);return!1};e.Ea(h);m=function(){g||(g=Fd(2E3).then(function(){B(new t("redirect-cancelled-by-user"))}))};
p=function(){$e()&&m()};f.addEventListener("resume",m,!1);K().toLowerCase().match(/android/)||f.addEventListener("visibilitychange",p,!1)})).o(function(v){return yl(e).then(function(){throw v;})})}).oa(function(){m&&f.removeEventListener("resume",m,!1);p&&f.removeEventListener("visibilitychange",p,!1);g&&g.cancel();h&&e.Ta(h);e.c=null})};
function xl(a,b,c,d,e){var f=ul(),g=new sh(b,d,null,f,new t("no-auth-event"),null,e),h=L("BuildInfo.packageName",l);if("string"!==typeof h)throw new t("invalid-cordova-configuration");var m=L("BuildInfo.displayName",l),p={};if(K().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(K().toLowerCase().match(/android/))p.apn=h;else return F(new t("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);f=vl(f);p.sessionId=f;var v=ek(a.v,a.i,a.l,b,c,null,d,a.m,p,a.u,e,a.s);return a.ma().then(function(){var B=
a.h;return a.C.a.set(cl,g.w(),B)}).then(function(){var B=L("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof B)throw new t("invalid-cordova-configuration");var A=null;B(function(Q){if(Q){A=L("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof A)throw new t("invalid-cordova-configuration");A(v)}else{A=L("cordova.InAppBrowser.open",l);if("function"!==typeof A)throw new t("invalid-cordova-configuration");Q=K();a.a=A(v,Q.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||Q.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?
"_blank":"_system","location=yes")}})})}function zl(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function wl(a){a.f||(a.f=a.ma().then(function(){return new D(function(b){function c(d){b(d);a.Ta(c);return!1}a.Ea(c);Al(a)})}));return a.f}function yl(a){var b=null;return dl(a.g).then(function(c){b=c;c=a.g;return Zk(c.b,cl,c.a)}).then(function(){return b})}
function Al(a){function b(g){d=!0;e&&e.cancel();yl(a).then(function(h){var m=c;if(h&&g&&g.url){var p=null;m=xg(g.url);-1!=m.indexOf("/__/auth/callback")&&(p=J(m),p=We(be(p,"firebaseError")||null),p=(p="object"===typeof p?Aa(p):null)?new sh(h.c,h.b,null,null,p,null,h.T()):new sh(h.c,h.b,m,h.f,null,null,h.T()));m=p||c}zl(a,m)})}var c=new sh("unknown",null,null,null,new t("no-auth-event")),d=!1,e=Fd(500).then(function(){return yl(a).then(function(){d||zl(a,c)})}),f=l.handleOpenURL;l.handleOpenURL=function(g){0==
g.toLowerCase().indexOf(L("BuildInfo.packageName",l).toLowerCase()+"://")&&b({url:g});if("function"===typeof f)try{f(g)}catch(h){console.error(h)}};vh||(vh=new uh);wh(b)}k.Ea=function(a){this.b.push(a);wl(this).o(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new sh("unknown",null,null,null,new t("no-auth-event")),a(b))})};k.Ta=function(a){Xa(this.b,function(b){return b==a})};function Bl(a){this.a=a;this.b=Vk()}var Cl={name:"pendingRedirect",F:"session"};function Dl(a){return a.b.set(Cl,"pending",a.a)}function El(a){return Zk(a.b,Cl,a.a)}function Fl(a){return a.b.get(Cl,a.a).then(function(b){return"pending"==b})};function Gl(a,b,c,d){this.i={};this.u=0;this.D=a;this.v=b;this.m=c;this.J=d;this.h=[];this.f=!1;this.l=q(this.s,this);this.b=new Hl;this.C=new Il;this.g=new Bl(Jl(this.v,this.m));this.c={};this.c.unknown=this.b;this.c.signInViaRedirect=this.b;this.c.linkViaRedirect=this.b;this.c.reauthViaRedirect=this.b;this.c.signInViaPopup=this.C;this.c.linkViaPopup=this.C;this.c.reauthViaPopup=this.C;this.a=Kl(this.D,this.v,this.m,Da,this.J)}
function Kl(a,b,c,d,e){var f=index_esm.SDK_VERSION||null;return Ge()?new sl(a,b,c,f,d,e):new Yj(a,b,c,f,d,e)}Gl.prototype.reset=function(){this.f=!1;this.a.Ta(this.l);this.a=Kl(this.D,this.v,this.m,null,this.J);this.i={}};function Ll(a){a.f||(a.f=!0,a.a.Ea(a.l));var b=a.a;return a.a.ma().o(function(c){a.a==b&&a.reset();throw c;})}
function Ml(a){a.a.Yb()&&Ll(a).o(function(b){var c=new sh("unknown",null,null,null,new t("operation-not-supported-in-this-environment"));Nl(b)&&a.s(c)});a.a.Ub()||Ol(a.b)}function Pl(a,b){Va(a.h,b)||a.h.push(b);a.f||Fl(a.g).then(function(c){c?El(a.g).then(function(){Ll(a).o(function(d){var e=new sh("unknown",null,null,null,new t("operation-not-supported-in-this-environment"));Nl(d)&&a.s(e)})}):Ml(a)}).o(function(){Ml(a)})}function Ql(a,b){Xa(a.h,function(c){return c==b})}
Gl.prototype.s=function(a){if(!a)throw new t("invalid-auth-event");6E5<=Date.now()-this.u&&(this.i={},this.u=0);if(a&&a.getUid()&&this.i.hasOwnProperty(a.getUid()))return!1;for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.Gb(a.c,a.b)){if(b=this.c[a.c])b.h(a,d),a&&(a.f||a.b)&&(this.i[a.getUid()]=!0,this.u=Date.now());b=!0;break}}Ol(this.b);return b};var Rl=new Ze(2E3,1E4),Sl=new Ze(3E4,6E4);Gl.prototype.ra=function(){return this.b.ra()};
function Tl(a,b,c,d,e,f,g){return a.a.Nb(b,c,d,function(){a.f||(a.f=!0,a.a.Ea(a.l))},function(){a.reset()},e,f,g)}function Nl(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
function Ul(a,b,c,d,e){var f;return Dl(a.g).then(function(){return a.a.Ob(b,c,d,e).o(function(g){if(Nl(g))throw new t("operation-not-supported-in-this-environment");f=g;return El(a.g).then(function(){throw f;})}).then(function(){return a.a.ac()?new D(function(){}):El(a.g).then(function(){return a.ra()}).then(function(){}).o(function(){})})})}function Vl(a,b,c,d,e){return a.a.Pb(d,function(f){b.na(c,null,f,e)},Rl.get())}var Wl={};function Jl(a,b,c){a=a+":"+b;c&&(a=a+":"+c.url);return a}
function Xl(a,b,c,d){var e=Jl(b,c,d);Wl[e]||(Wl[e]=new Gl(a,b,c,d));return Wl[e]}function Hl(){this.b=null;this.f=[];this.c=[];this.a=null;this.i=this.g=!1}Hl.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
Hl.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.c,d=a.b,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;this.i=!(!e&&!f);"unknown"!=c||e||f?a.a?(Yl(this,!0,null,a.a),E()):b.Fa(c,d)?Zl(this,a,b):F(new t("invalid-auth-event")):(Yl(this,!1,null,null),E())}else F(new t("invalid-auth-event"))};function Ol(a){a.g||(a.g=!0,Yl(a,!1,null,null))}function $l(a){a.g&&!a.i&&Yl(a,!1,null,null)}
function Zl(a,b,c){c=c.Fa(b.c,b.b);var d=b.g,e=b.f,f=b.i,g=b.T(),h=!!b.c.match(/Redirect$/);c(d,e,g,f).then(function(m){Yl(a,h,m,null)}).o(function(m){Yl(a,h,null,m)})}function am(a,b){a.b=function(){return F(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function bm(a,b){a.b=function(){return E(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function Yl(a,b,c,d){b?d?am(a,d):bm(a,c):bm(a,{user:null});a.f=[];a.c=[]}
Hl.prototype.ra=function(){var a=this;return new D(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),cm(a))})};function cm(a){var b=new t("timeout");a.a&&a.a.cancel();a.a=Fd(Sl.get()).then(function(){a.b||(a.g=!0,Yl(a,!0,null,b))})}function Il(){}Il.prototype.h=function(a,b){if(a){var c=a.c,d=a.b;a.a?(b.na(a.c,null,a.a,a.b),E()):b.Fa(c,d)?dm(a,b):F(new t("invalid-auth-event"))}else F(new t("invalid-auth-event"))};
function dm(a,b){var c=a.b,d=a.c;b.Fa(d,c)(a.g,a.f,a.T(),a.i).then(function(e){b.na(d,e,null,c)}).o(function(e){b.na(d,null,e,c)})};function em(){this.jb=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.jb},set:function(a){this.jb=a},enumerable:!1})};function fm(a,b){this.a=b;M(this,"verificationId",a)}fm.prototype.confirm=function(a){a=ph(this.verificationId,a);return this.a(a)};function gm(a,b,c,d){return(new lh(a)).gb(b,c).then(function(e){return new fm(e,d)})};function hm(a){var b=ig(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new t("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");N(this,{token:a,expirationTime:bf(1E3*b.exp),authTime:bf(1E3*b.auth_time),issuedAtTime:bf(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,signInSecondFactor:b.firebase&&b.firebase.sign_in_second_factor?b.firebase.sign_in_second_factor:null,claims:b})}
;function im(a,b,c){var d=b&&b[jm];if(!d)throw new t("argument-error","Internal assert: Invalid MultiFactorResolver");this.a=a;this.f=nb(b);this.g=c;this.c=new yg(null,d);this.b=[];var e=this;w(b[km]||[],function(f){(f=tf(f))&&e.b.push(f)});M(this,"auth",this.a);M(this,"session",this.c);M(this,"hints",this.b)}var km="mfaInfo",jm="mfaPendingCredential";im.prototype.Rc=function(a){var b=this;return a.tb(this.a.a,this.c).then(function(c){var d=nb(b.f);delete d[km];delete d[jm];z(d,c);return b.g(d)})};function lm(a,b,c,d){t.call(this,"multi-factor-auth-required",d,b);this.b=new im(a,b,c);M(this,"resolver",this.b)}r(lm,t);function mm(a,b,c){if(a&&n(a.serverResponse)&&"auth/multi-factor-auth-required"===a.code)try{return new lm(b,a.serverResponse,c,a.message)}catch(d){}return null};function nm(){}nm.prototype.tb=function(a,b,c){return b.type==zg?om(this,a,b,c):pm(this,a,b)};function om(a,b,c,d){return c.Ha().then(function(e){e={idToken:e};"undefined"!==typeof d&&(e.displayName=d);z(e,{phoneVerificationInfo:hh(a.a)});return O(b,Gj,e)})}function pm(a,b,c){return c.Ha().then(function(d){d={mfaPendingCredential:d};z(d,{phoneVerificationInfo:hh(a.a)});return O(b,Hj,d)})}function qm(a){M(this,"factorId",a.fa);this.a=a}r(qm,nm);
function rm(a){qm.call(this,a);if(this.a.fa!=lh.PROVIDER_ID)throw new t("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");}r(rm,qm);function sm(a,b){G.call(this,a);for(var c in b)this[c]=b[c]}r(sm,G);function tm(a,b){this.a=a;this.b=[];this.c=q(this.yc,this);nd(this.a,"userReloaded",this.c);var c=[];b&&b.multiFactor&&b.multiFactor.enrolledFactors&&w(b.multiFactor.enrolledFactors,function(d){var e=null,f={};if(d){d.uid&&(f[qf]=d.uid);d.displayName&&(f[rf]=d.displayName);d.enrollmentTime&&(f[sf]=(new Date(d.enrollmentTime)).toISOString());d.phoneNumber&&(f[pf]=d.phoneNumber);try{e=new uf(f)}catch(g){}d=e}else d=null;d&&c.push(d)});um(this,c)}
function vm(a){var b=[];w(a.mfaInfo||[],function(c){(c=tf(c))&&b.push(c)});return b}k=tm.prototype;k.yc=function(a){um(this,vm(a.hd))};function um(a,b){a.b=b;M(a,"enrolledFactors",b)}k.Sb=function(){return this.a.I().then(function(a){return new yg(a,null)})};k.fc=function(a,b){var c=this,d=this.a.a;return this.Sb().then(function(e){return a.tb(d,e,b)}).then(function(e){wm(c.a,e);return c.a.reload()})};
k.bd=function(a){var b=this,c="string"===typeof a?a:a.uid,d=this.a.a;return this.a.I().then(function(e){return O(d,Lj,{idToken:e,mfaEnrollmentId:c})}).then(function(e){var f=Qa(b.b,function(g){return g.uid!=c});um(b,f);wm(b.a,e);return b.a.reload().o(function(g){if("auth/user-token-expired"!=g.code)throw g;})})};k.w=function(){return{multiFactor:{enrolledFactors:Ra(this.b,function(a){return a.w()})}}};function xm(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}xm.prototype.start=function(){this.a=this.c;ym(this,!0)};function zm(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function ym(a,b){a.stop();a.b=Fd(zm(a,b)).then(function(){return af()}).then(function(){return a.h()}).then(function(){ym(a,!0)}).o(function(c){a.i(c)&&ym(a,!1)})}
xm.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function Am(a){this.f=a;this.b=this.a=null;this.c=Date.now()}Am.prototype.w=function(){return{apiKey:this.f.c,refreshToken:this.a,accessToken:this.b&&this.b.toString(),expirationTime:this.c}};function Bm(a,b){"undefined"===typeof b&&(a.b?(b=a.b,b=b.a-b.g):b=0);a.c=Date.now()+1E3*b}function Cm(a,b){a.b=jg(b[Dg]||"");a.a=b.refreshToken;b=b.expiresIn;Bm(a,"undefined"!==typeof b?Number(b):void 0)}function Dm(a,b){a.b=b.b;a.a=b.a;a.c=b.c}
function Em(a,b){return Wi(a.f,b).then(function(c){a.b=jg(c.access_token);a.a=c.refresh_token;Bm(a,c.expires_in);return{accessToken:a.b.toString(),refreshToken:a.a}}).o(function(c){"auth/user-token-expired"==c.code&&(a.a=null);throw c;})}Am.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?F(new t("user-token-expired")):a||!this.b||Date.now()>this.c-3E4?this.a?Em(this,{grant_type:"refresh_token",refresh_token:this.a}):E(null):E({accessToken:this.b.toString(),refreshToken:this.a})};function Fm(a,b){this.a=a||null;this.b=b||null;N(this,{lastSignInTime:bf(b||null),creationTime:bf(a||null)})}function Gm(a){return new Fm(a.a,a.b)}Fm.prototype.w=function(){return{lastLoginAt:this.b,createdAt:this.a}};function Hm(a,b,c,d,e,f){N(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}
function Im(a,b,c){this.N=[];this.l=a.apiKey;this.m=a.appName;this.s=a.authDomain||null;var d=index_esm.SDK_VERSION?Oe(index_esm.SDK_VERSION):null;this.a=new Ii(this.l,Ca(Da),d);(this.u=a.emulatorConfig||null)&&Pi(this.a,this.u);this.h=new Am(this.a);Jm(this,b[Dg]);Cm(this.h,b);M(this,"refreshToken",this.h.a);Km(this,c||{});H.call(this);this.P=!1;this.s&&Re()&&(this.b=Xl(this.s,this.l,this.m,this.u));this.W=[];this.i=null;this.D=Lm(this);this.ba=q(this.ib,this);var e=this;this.za=null;this.Pa=function(f){e.xa(f.h)};
this.qa=null;this.Ba=function(f){Mm(e,f.c)};this.$=null;this.aa=[];this.Oa=function(f){Nm(e,f.f)};this.ja=null;this.S=new tm(this,c);M(this,"multiFactor",this.S)}r(Im,H);Im.prototype.xa=function(a){this.za=a;Oi(this.a,a)};function Mm(a,b){a.u=b;Pi(a.a,b);a.b&&(b=a.b,a.b=Xl(a.s,a.l,a.m,a.u),a.P&&(Ql(b,a),Pl(a.b,a)))}Im.prototype.la=function(){return this.za};function Om(a,b){a.qa&&xd(a.qa,"languageCodeChanged",a.Pa);(a.qa=b)&&nd(b,"languageCodeChanged",a.Pa)}
function Pm(a,b){a.$&&xd(a.$,"emulatorConfigChanged",a.Ba);(a.$=b)&&nd(b,"emulatorConfigChanged",a.Ba)}function Nm(a,b){a.aa=b;Ri(a.a,index_esm.SDK_VERSION?Oe(index_esm.SDK_VERSION,a.aa):null)}Im.prototype.Ga=function(){return Za(this.aa)};function Qm(a,b){a.ja&&xd(a.ja,"frameworkChanged",a.Oa);(a.ja=b)&&nd(b,"frameworkChanged",a.Oa)}Im.prototype.ib=function(){this.D.b&&(this.D.stop(),this.D.start())};
function Rm(a){try{return index_esm.app(a.m).auth()}catch(b){throw new t("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.m+"'!");}}function Lm(a){return new xm(function(){return a.I(!0)},function(b){return b&&"auth/network-request-failed"==b.code?!0:!1},function(){var b=a.h.c-Date.now()-3E5;return 0<b?b:0})}function Sm(a){a.J||a.D.b||(a.D.start(),xd(a,"tokenChanged",a.ba),nd(a,"tokenChanged",a.ba))}function Tm(a){xd(a,"tokenChanged",a.ba);a.D.stop()}
function Jm(a,b){a.Aa=b;M(a,"_lat",b)}function Um(a,b){Xa(a.W,function(c){return c==b})}function Vm(a){for(var b=[],c=0;c<a.W.length;c++)b.push(a.W[c](a));return Jc(b).then(function(){return a})}function Wm(a){a.b&&!a.P&&(a.P=!0,Pl(a.b,a))}
function Km(a,b){N(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,tenantId:b.tenantId||null,metadata:new Fm(b.createdAt,b.lastLoginAt),providerData:[]});a.a.b=a.tenantId}M(Im.prototype,"providerId","firebase");function Xm(){}function Ym(a){return E().then(function(){if(a.J)throw new t("app-deleted");})}
function Zm(a){return Ra(a.providerData,function(b){return b.providerId})}function $m(a,b){b&&(an(a,b.providerId),a.providerData.push(b))}function an(a,b){Xa(a.providerData,function(c){return c.providerId==b})}function bn(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&M(a,b,c)}
function cn(a,b){a!=b&&(N(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,tenantId:b.tenantId,providerData:[]}),b.metadata?M(a,"metadata",Gm(b.metadata)):M(a,"metadata",new Fm),w(b.providerData,function(c){$m(a,c)}),Dm(a.h,b.h),M(a,"refreshToken",a.h.a),um(a.S,b.S.b))}k=Im.prototype;k.reload=function(){var a=this;return R(this,Ym(this).then(function(){return dn(a).then(function(){return Vm(a)}).then(Xm)}))};
function dn(a){return a.I().then(function(b){var c=a.isAnonymous;return en(a,b).then(function(){c||bn(a,"isAnonymous",!1);return b})})}k.oc=function(a){return this.I(a).then(function(b){return new hm(b)})};k.I=function(a){var b=this;return R(this,Ym(this).then(function(){return b.h.getToken(a)}).then(function(c){if(!c)throw new t("internal-error");c.accessToken!=b.Aa&&(Jm(b,c.accessToken),b.dispatchEvent(new sm("tokenChanged")));bn(b,"refreshToken",c.refreshToken);return c.accessToken}))};
function wm(a,b){b[Dg]&&a.Aa!=b[Dg]&&(Cm(a.h,b),a.dispatchEvent(new sm("tokenChanged")),Jm(a,b[Dg]),bn(a,"refreshToken",a.h.a))}function en(a,b){return O(a.a,Ij,{idToken:b}).then(q(a.Kc,a))}
k.Kc=function(a){a=a.users;if(!a||!a.length)throw new t("internal-error");a=a[0];Km(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt,tenantId:a.tenantId});for(var b=fn(a),c=0;c<b.length;c++)$m(this,b[c]);bn(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length));this.dispatchEvent(new sm("userReloaded",{hd:a}))};
function fn(a){return(a=a.providerUserInfo)&&a.length?Ra(a,function(b){return new Hm(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)}):[]}k.Lc=function(a){gf("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");return this.ub(a)};
k.ub=function(a){var b=this,c=null;return R(this,a.c(this.a,this.uid).then(function(d){wm(b,d);c=gn(b,d,"reauthenticate");b.i=null;return b.reload()}).then(function(){return c}),!0)};function hn(a,b){return dn(a).then(function(){if(Va(Zm(a),b))return Vm(a).then(function(){throw new t("provider-already-linked");})})}k.Cc=function(a){gf("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");return this.rb(a)};
k.rb=function(a){var b=this,c=null;return R(this,hn(this,a.providerId).then(function(){return b.I()}).then(function(d){return a.b(b.a,d)}).then(function(d){c=gn(b,d,"link");return jn(b,d)}).then(function(){return c}))};k.Dc=function(a,b){var c=this;return R(this,hn(this,"phone").then(function(){return gm(Rm(c),a,b,q(c.rb,c))}))};k.Mc=function(a,b){var c=this;return R(this,E().then(function(){return gm(Rm(c),a,b,q(c.ub,c))}),!0)};
function gn(a,b,c){var d=qh(b);b=og(b);return kf({user:a,credential:d,additionalUserInfo:b,operationType:c})}function jn(a,b){wm(a,b);return a.reload().then(function(){return a})}k.Cb=function(a){var b=this;return R(this,this.I().then(function(c){return b.a.Cb(c,a)}).then(function(c){wm(b,c);return b.reload()}))};k.ed=function(a){var b=this;return R(this,this.I().then(function(c){return a.b(b.a,c)}).then(function(c){wm(b,c);return b.reload()}))};
k.Db=function(a){var b=this;return R(this,this.I().then(function(c){return b.a.Db(c,a)}).then(function(c){wm(b,c);return b.reload()}))};
k.Eb=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Ym(this);var b=this;return R(this,this.I().then(function(c){return b.a.Eb(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(c){wm(b,c);bn(b,"displayName",c.displayName||null);bn(b,"photoURL",c.photoUrl||null);w(b.providerData,function(d){"password"===d.providerId&&(M(d,"displayName",b.displayName),M(d,"photoURL",b.photoURL))});return Vm(b)}).then(Xm))};
k.cd=function(a){var b=this;return R(this,dn(this).then(function(c){return Va(Zm(b),a)?rj(b.a,c,[a]).then(function(d){var e={};w(d.providerUserInfo||[],function(f){e[f.providerId]=!0});w(Zm(b),function(f){e[f]||an(b,f)});e[lh.PROVIDER_ID]||M(b,"phoneNumber",null);return Vm(b)}):Vm(b).then(function(){throw new t("no-such-provider");})}))};
k.delete=function(){var a=this;return R(this,this.I().then(function(b){return O(a.a,Fj,{idToken:b})}).then(function(){a.dispatchEvent(new sm("userDeleted"))})).then(function(){for(var b=0;b<a.N.length;b++)a.N[b].cancel("app-deleted");Om(a,null);Pm(a,null);Qm(a,null);a.N=[];a.J=!0;Tm(a);M(a,"refreshToken",null);a.b&&Ql(a.b,a)})};
k.Gb=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.ga||null)==b||"reauthViaRedirect"==a&&(this.ga||null)==b?!0:!1};k.na=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.C?this.C(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C)};
k.Fa=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?q(this.Lb,this):"reauthViaPopup"==a&&b==(this.g||null)?q(this.Mb,this):"linkViaRedirect"==a&&(this.ga||null)==b?q(this.Lb,this):"reauthViaRedirect"==a&&(this.ga||null)==b?q(this.Mb,this):null};k.Ec=function(a){var b=this;return kn(this,"linkViaPopup",a,function(){return hn(b,a.providerId).then(function(){return Vm(b)})},!1)};k.Nc=function(a){return kn(this,"reauthViaPopup",a,function(){return E()},!0)};
function kn(a,b,c,d,e){if(!Re())return F(new t("operation-not-supported-in-this-environment"));if(a.i&&!e)return F(a.i);var f=ng(c.providerId),g=Qe(a.uid+":::"),h=null;(!Te()||Ie())&&a.s&&c.isOAuthProvider&&(h=ek(a.s,a.l,a.m,b,c,null,g,index_esm.SDK_VERSION||null,null,null,a.tenantId,a.u));var m=ze(h,f&&f.va,f&&f.ua);d=d().then(function(){ln(a);if(!e)return a.I().then(function(){})}).then(function(){return Tl(a.b,m,b,c,g,!!h,a.tenantId)}).then(function(){return new D(function(p,v){a.na(b,null,new t("cancelled-popup-request"),
a.g||null);a.f=p;a.C=v;a.g=g;a.c=Vl(a.b,a,b,m,g)})}).then(function(p){m&&ye(m);return p?kf(p):null}).o(function(p){m&&ye(m);throw p;});return R(a,d,e)}k.Fc=function(a){var b=this;return mn(this,"linkViaRedirect",a,function(){return hn(b,a.providerId)},!1)};k.Oc=function(a){return mn(this,"reauthViaRedirect",a,function(){return E()},!0)};
function mn(a,b,c,d,e){if(!Re())return F(new t("operation-not-supported-in-this-environment"));if(a.i&&!e)return F(a.i);var f=null,g=Qe(a.uid+":::");d=d().then(function(){ln(a);if(!e)return a.I().then(function(){})}).then(function(){a.ga=g;return Vm(a)}).then(function(h){a.ha&&(h=a.ha,h=h.b.set(nn,a.w(),h.a));return h}).then(function(){return Ul(a.b,b,c,g,a.tenantId)}).o(function(h){f=h;if(a.ha)return on(a.ha);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function ln(a){if(!a.b||!a.P){if(a.b&&!a.P)throw new t("internal-error");throw new t("auth-domain-config-required");}}k.Lb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null;c=this.I().then(function(g){return Hg(e.a,{requestUri:a,postBody:d,sessionId:b,idToken:g})}).then(function(g){f=gn(e,g,"link");return jn(e,g)}).then(function(){return f});return R(this,c)};
k.Mb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null,g=E().then(function(){return Cg(Ig(e.a,{requestUri:a,sessionId:b,postBody:d,tenantId:c}),e.uid)}).then(function(h){f=gn(e,h,"reauthenticate");wm(e,h);e.i=null;return e.reload()}).then(function(){return f});return R(this,g,!0)};
k.vb=function(a){var b=this,c=null;return R(this,this.I().then(function(d){c=d;return"undefined"===typeof a||mb(a)?{}:bg(new Sf(a))}).then(function(d){return b.a.vb(c,d)}).then(function(d){if(b.email!=d)return b.reload()}).then(function(){}))};k.Fb=function(a,b){var c=this,d=null;return R(this,this.I().then(function(e){d=e;return"undefined"===typeof b||mb(b)?{}:bg(new Sf(b))}).then(function(e){return c.a.Fb(d,a,e)}).then(function(e){if(c.email!=e)return c.reload()}).then(function(){}))};
function R(a,b,c){var d=pn(a,b,c);a.N.push(d);d.oa(function(){Wa(a.N,d)});return d.o(function(e){var f=null;e&&"auth/multi-factor-auth-required"===e.code&&(f=mm(e.w(),Rm(a),q(a.jc,a)));throw f||e;})}k.jc=function(a){var b=null,c=this;a=Cg(E(a),c.uid).then(function(d){b=gn(c,d,"reauthenticate");wm(c,d);c.i=null;return c.reload()}).then(function(){return b});return R(this,a,!0)};
function pn(a,b,c){return a.i&&!c?(b.cancel(),F(a.i)):b.o(function(d){!d||"auth/user-disabled"!=d.code&&"auth/user-token-expired"!=d.code||(a.i||a.dispatchEvent(new sm("userInvalidated")),a.i=d);throw d;})}k.toJSON=function(){return this.w()};
k.w=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.s,stsTokenManager:this.h.w(),redirectEventId:this.ga||null};this.metadata&&z(a,this.metadata.w());w(this.providerData,function(b){a.providerData.push(lf(b))});z(a,this.S.w());return a};
function qn(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName,emulatorConfig:a.emulatorConfig},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken){c[Dg]=a.stsTokenManager.accessToken;c.refreshToken=a.stsTokenManager.refreshToken||null;var d=a.stsTokenManager.expirationTime;d&&(c.expiresIn=(d-Date.now())/1E3)}else return null;var e=new Im(b,c,a);a.providerData&&w(a.providerData,function(f){f&&$m(e,kf(f))});a.redirectEventId&&(e.ga=a.redirectEventId);
return e}function rn(a,b,c,d){var e=new Im(a,b);c&&(e.ha=c);d&&Nm(e,d);return e.reload().then(function(){return e})}function sn(a,b,c,d){var e=a.h,f={};f[Dg]=e.b&&e.b.toString();f.refreshToken=e.a;b=new Im(b||{apiKey:a.l,authDomain:a.s,appName:a.m},f);c&&(b.ha=c);d&&Nm(b,d);cn(b,a);return b};function tn(a){this.a=a;this.b=Vk()}var nn={name:"redirectUser",F:"session"};function on(a){return Zk(a.b,nn,a.a)}function un(a,b){return a.b.get(nn,a.a).then(function(c){c&&b&&(c.authDomain=b);return qn(c||{})})};function vn(a){this.a=a;this.b=Vk();this.c=null;this.f=wn(this);this.b.addListener(xn("local"),this.a,q(this.g,this))}vn.prototype.g=function(){var a=this,b=xn("local");yn(this,function(){return E().then(function(){return a.c&&"local"!=a.c.F?a.b.get(b,a.a):null}).then(function(c){if(c)return zn(a,"local").then(function(){a.c=b})})})};function zn(a,b){var c=[],d;for(d in Rk)Rk[d]!==b&&c.push(Zk(a.b,xn(Rk[d]),a.a));c.push(Zk(a.b,An,a.a));return Ic(c)}
function wn(a){var b=xn("local"),c=xn("session"),d=xn("none");return Yk(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(f){return f?d:a.b.get(b,a.a).then(function(g){return g?b:a.b.get(An,a.a).then(function(h){return h?xn(h):b})})})}).then(function(e){a.c=e;return zn(a,e.F)}).o(function(){a.c||(a.c=b)})}var An={name:"persistence",F:"session"};function xn(a){return{name:"authUser",F:a}}
vn.prototype.yb=function(a){var b=null,c=this;Sk(a);return yn(this,function(){return a!=c.c.F?c.b.get(c.c,c.a).then(function(d){b=d;return zn(c,a)}).then(function(){c.c=xn(a);if(b)return c.b.set(c.c,b,c.a)}):E()})};function Bn(a){return yn(a,function(){return a.b.set(An,a.c.F,a.a)})}function Cn(a,b){return yn(a,function(){return a.b.set(a.c,b.w(),a.a)})}function Dn(a){return yn(a,function(){return Zk(a.b,a.c,a.a)})}
function En(a,b,c){return yn(a,function(){return a.b.get(a.c,a.a).then(function(d){d&&b&&(d.authDomain=b);d&&c&&(d.emulatorConfig=c);return qn(d||{})})})}function yn(a,b){a.f=a.f.then(b,b);return a.f};function Fn(a){this.l=!1;M(this,"settings",new em);M(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=index_esm.SDK_VERSION?Oe(index_esm.SDK_VERSION):null,this.a=new Ii(S(this).options&&S(this).options.apiKey,Ca(Da),a);else throw new t("invalid-api-key");this.P=[];this.s=[];this.N=[];this.Pa=index_esm.INTERNAL.createSubscribe(q(this.zc,this));this.W=void 0;this.ib=index_esm.INTERNAL.createSubscribe(q(this.Ac,this));Gn(this,null);this.i=new vn(S(this).options.apiKey+":"+S(this).name);this.D=
new tn(S(this).options.apiKey+":"+S(this).name);this.$=T(this,Hn(this));this.h=T(this,In(this));this.ba=!1;this.ja=q(this.Zc,this);this.Ba=q(this.da,this);this.qa=q(this.mc,this);this.za=q(this.wc,this);this.Aa=q(this.xc,this);this.b=null;Jn(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this.delete,this);this.INTERNAL.logFramework=q(this.Gc,this);this.u=0;H.call(this);Kn(this);this.J=[];this.R=null}r(Fn,H);function Ln(a){G.call(this,"languageCodeChanged");this.h=a}r(Ln,G);
function Mn(a){G.call(this,"emulatorConfigChanged");this.c=a}r(Mn,G);function Nn(a){G.call(this,"frameworkChanged");this.f=a}r(Nn,G);k=Fn.prototype;k.yb=function(a){a=this.i.yb(a);return T(this,a)};k.xa=function(a){this.aa===a||this.l||(this.aa=a,Oi(this.a,this.aa),this.dispatchEvent(new Ln(this.la())))};k.la=function(){return this.aa};k.fd=function(){var a=l.navigator;this.xa(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};
k.gd=function(a,b){if(!this.R){if(!/^https?:\/\//.test(a))throw new t("argument-error","Emulator URL must start with a valid scheme (http:// or https://).");b=b?!!b.disableWarnings:!1;On(b);this.R={url:a,ec:b};this.settings.jb=!0;Pi(this.a,this.R);this.dispatchEvent(new Mn(this.R))}};
function On(a){"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");l.document&&!a&&Ee().then(function(){var b=l.document.createElement("div");b.innerText="Running in emulator mode. Do not use with production credentials.";b.style.position="fixed";b.style.width="100%";b.style.backgroundColor="#ffffff";b.style.border=".1em solid #000000";b.style.color=
"#b50000";b.style.bottom="0px";b.style.left="0px";b.style.margin="0px";b.style.zIndex=1E4;b.style.textAlign="center";b.classList.add("firebase-emulator-warning");l.document.body.appendChild(b)})}k.Gc=function(a){this.J.push(a);Ri(this.a,index_esm.SDK_VERSION?Oe(index_esm.SDK_VERSION,this.J):null);this.dispatchEvent(new Nn(this.J))};k.Ga=function(){return Za(this.J)};k.zb=function(a){this.S===a||this.l||(this.S=a,this.a.b=this.S)};k.T=function(){return this.S};
function Kn(a){Object.defineProperty(a,"lc",{get:function(){return this.la()},set:function(b){this.xa(b)},enumerable:!1});a.aa=null;Object.defineProperty(a,"ti",{get:function(){return this.T()},set:function(b){this.zb(b)},enumerable:!1});a.S=null;Object.defineProperty(a,"emulatorConfig",{get:function(){if(this.R){var b=J(this.R.url);b=kf({protocol:b.c,host:b.a,port:b.g,options:kf({disableWarnings:this.R.ec})})}else b=null;return b},enumerable:!1})}
k.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).w()}};function Pn(a){return a.Oa||F(new t("auth-domain-config-required"))}function Jn(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&Re()&&(a.Oa=a.$.then(function(){if(!a.l){a.b=Xl(b,c,S(a).name,a.R);Pl(a.b,a);U(a)&&Wm(U(a));if(a.m){Wm(a.m);var d=a.m;d.xa(a.la());Om(d,a);d=a.m;Nm(d,a.J);Qm(d,a);d=a.m;Mm(d,a.R);Pm(d,a);a.m=null}return a.b}}))}
k.Gb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};k.na=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.C?this.C(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C)};k.Fa=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?q(this.ic,this):null};
k.ic=function(a,b,c,d){var e=this,f={requestUri:a,postBody:d,sessionId:b,tenantId:c};this.c&&(this.c.cancel(),this.c=null);return e.$.then(function(){return Qn(e,Fg(e.a,f))})};
k.Xc=function(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=this,c=ng(a.providerId),d=Qe(),e=null;(!Te()||Ie())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=ek(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,index_esm.SDK_VERSION||null,null,null,this.T(),this.R));var f=ze(e,c&&c.va,c&&c.ua);c=Pn(this).then(function(g){return Tl(g,f,"signInViaPopup",a,d,!!e,b.T())}).then(function(){return new D(function(g,h){b.na("signInViaPopup",
null,new t("cancelled-popup-request"),b.g);b.f=g;b.C=h;b.g=d;b.c=Vl(b.b,b,"signInViaPopup",f,d)})}).then(function(g){f&&ye(f);return g?kf(g):null}).o(function(g){f&&ye(f);throw g;});return T(this,c)};k.Yc=function(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=this,c=Pn(this).then(function(){return Bn(b.i)}).then(function(){return Ul(b.b,"signInViaRedirect",a,void 0,b.T())});return T(this,c)};
function Rn(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=Pn(a).then(function(){return a.b.ra()}).then(function(c){return c?kf(c):null});return T(a,b)}k.ra=function(){var a=this;return Rn(this).then(function(b){a.b&&$l(a.b.b);return b}).o(function(b){a.b&&$l(a.b.b);throw b;})};
k.dd=function(a){if(!a)return F(new t("null-user"));if(this.S!=a.tenantId)return F(new t("tenant-id-mismatch"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=sn(a,c,b.D,b.Ga());return T(this,this.h.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return cn(U(b),a),b.da(a);Gn(b,d);Wm(d);return b.da(d)}).then(function(){Sn(b)}))};
function Tn(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;a.R&&(c.emulatorConfig=a.R);return a.$.then(function(){return rn(c,b,a.D,a.Ga())}).then(function(d){if(U(a)&&d.uid==U(a).uid)return cn(U(a),d),a.da(d);Gn(a,d);Wm(d);return a.da(d)}).then(function(){Sn(a)})}
function Gn(a,b){U(a)&&(Um(U(a),a.Ba),xd(U(a),"tokenChanged",a.qa),xd(U(a),"userDeleted",a.za),xd(U(a),"userInvalidated",a.Aa),Tm(U(a)));b&&(b.W.push(a.Ba),nd(b,"tokenChanged",a.qa),nd(b,"userDeleted",a.za),nd(b,"userInvalidated",a.Aa),0<a.u&&Sm(b));M(a,"currentUser",b);b&&(b.xa(a.la()),Om(b,a),Nm(b,a.J),Qm(b,a),Mm(b,a.R),Pm(b,a))}k.Bb=function(){var a=this,b=this.h.then(function(){a.b&&$l(a.b.b);if(!U(a))return E();Gn(a,null);return Dn(a.i).then(function(){Sn(a)})});return T(this,b)};
function Un(a){var b=un(a.D,S(a).options.authDomain).then(function(c){if(a.m=c)c.ha=a.D;return on(a.D)});return T(a,b)}function Hn(a){var b=S(a).options.authDomain,c=Un(a).then(function(){return En(a.i,b,a.R)}).then(function(d){return d?(d.ha=a.D,a.m&&(a.m.ga||null)==(d.ga||null)?d:d.reload().then(function(){return Cn(a.i,d).then(function(){return d})}).o(function(e){return"auth/network-request-failed"==e.code?d:Dn(a.i)})):null}).then(function(d){Gn(a,d||null)});return T(a,c)}
function In(a){return a.$.then(function(){return Rn(a)}).o(function(){}).then(function(){if(!a.l)return a.ja()}).o(function(){}).then(function(){if(!a.l){a.ba=!0;var b=a.i;b.b.addListener(xn("local"),b.a,a.ja)}})}
k.Zc=function(){var a=this;return En(this.i,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return cn(U(a),b),U(a).I();if(U(a)||b)Gn(a,b),b&&(Wm(b),b.ha=a.D),a.b&&Pl(a.b,a),Sn(a)}})};k.da=function(a){return Cn(this.i,a)};k.mc=function(){Sn(this);this.da(U(this))};k.wc=function(){this.Bb()};k.xc=function(){this.Bb()};
function Qn(a,b){var c=null,d=null;return T(a,b.then(function(e){c=qh(e);d=og(e);return Tn(a,e)},function(e){var f=null;e&&"auth/multi-factor-auth-required"===e.code&&(f=mm(e.w(),a,q(a.kc,a)));throw f||e;}).then(function(){return kf({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}k.kc=function(a){var b=this;return this.h.then(function(){return Qn(b,E(a))})};k.zc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};
k.Ac=function(a){var b=this;Vn(this,function(){a.next(U(b))})};k.Ic=function(a,b,c){var d=this;this.ba&&Promise.resolve().then(function(){"function"===typeof a?a(U(d)):"function"===typeof a.next&&a.next(U(d))});return this.Pa(a,b,c)};k.Hc=function(a,b,c){var d=this;this.ba&&Promise.resolve().then(function(){d.W=d.getUid();"function"===typeof a?a(U(d)):"function"===typeof a.next&&a.next(U(d))});return this.ib(a,b,c)};
k.nc=function(a){var b=this,c=this.h.then(function(){return U(b)?U(b).I(a).then(function(d){return{accessToken:d}}):null});return T(this,c)};k.Tc=function(a){var b=this;return this.h.then(function(){return Qn(b,O(b.a,Kj,{token:a}))}).then(function(c){var d=c.user;bn(d,"isAnonymous",!1);b.da(d);return c})};k.Uc=function(a,b){var c=this;return this.h.then(function(){return Qn(c,O(c.a,ah,{email:a,password:b}))})};
k.dc=function(a,b){var c=this;return this.h.then(function(){return Qn(c,O(c.a,Ej,{email:a,password:b}))})};k.ab=function(a){var b=this;return this.h.then(function(){return Qn(b,a.ka(b.a))})};k.Sc=function(a){gf("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");return this.ab(a)};
k.Ab=function(){var a=this;return this.h.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=kf({providerId:null,isNewUser:!1});return kf({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return Qn(a,a.a.Ab()).then(function(d){var e=d.user;bn(e,"isAnonymous",!0);a.da(e);return d})})};function S(a){return a.app}function U(a){return a.currentUser}k.getUid=function(){return U(this)&&U(this).uid||null};function Wn(a){return U(a)&&U(a)._lat||null}
function Sn(a){if(a.ba){for(var b=0;b<a.s.length;b++)if(a.s[b])a.s[b](Wn(a));if(a.W!==a.getUid()&&a.N.length)for(a.W=a.getUid(),b=0;b<a.N.length;b++)if(a.N[b])a.N[b](Wn(a))}}k.cc=function(a){this.addAuthTokenListener(a);this.u++;0<this.u&&U(this)&&Sm(U(this))};k.Pc=function(a){var b=this;w(this.s,function(c){c==a&&b.u--});0>this.u&&(this.u=0);0==this.u&&U(this)&&Tm(U(this));this.removeAuthTokenListener(a)};
k.addAuthTokenListener=function(a){var b=this;this.s.push(a);T(this,this.h.then(function(){b.l||Va(b.s,a)&&a(Wn(b))}))};k.removeAuthTokenListener=function(a){Xa(this.s,function(b){return b==a})};function Vn(a,b){a.N.push(b);T(a,a.h.then(function(){!a.l&&Va(a.N,b)&&a.W!==a.getUid()&&(a.W=a.getUid(),b(Wn(a)))}))}
k.delete=function(){this.l=!0;for(var a=0;a<this.P.length;a++)this.P[a].cancel("app-deleted");this.P=[];this.i&&(a=this.i,a.b.removeListener(xn("local"),a.a,this.ja));this.b&&(Ql(this.b,this),$l(this.b.b));return Promise.resolve()};function T(a,b){a.P.push(b);b.oa(function(){Wa(a.P,b)});return b}k.hc=function(a){return T(this,aj(this.a,a))};k.Bc=function(a){return!!fh(a)};
k.xb=function(a,b){var c=this;return T(this,E().then(function(){var d=new Sf(b);if(!d.c)throw new t("argument-error",$f+" must be true when sending sign in link to email");return bg(d)}).then(function(d){return c.a.xb(a,d)}).then(function(){}))};k.jd=function(a){return this.Sa(a).then(function(b){return b.data.email})};k.ob=function(a,b){return T(this,this.a.ob(a,b).then(function(){}))};k.Sa=function(a){return T(this,this.a.Sa(a).then(function(b){return new vf(b)}))};
k.kb=function(a){return T(this,this.a.kb(a).then(function(){}))};k.wb=function(a,b){var c=this;return T(this,E().then(function(){return"undefined"===typeof b||mb(b)?{}:bg(new Sf(b))}).then(function(d){return c.a.wb(a,d)}).then(function(){}))};k.Wc=function(a,b){return T(this,gm(this,a,b,q(this.ab,this)))};
k.Vc=function(a,b){var c=this;return T(this,E().then(function(){var d=b||re(),e=eh(a,d);d=fh(d);if(!d)throw new t("argument-error","Invalid email link!");if(d.tenantId!==c.T())throw new t("tenant-id-mismatch");return c.ab(e)}))};function Xn(){}Xn.prototype.render=function(){};Xn.prototype.reset=function(){};Xn.prototype.getResponse=function(){};Xn.prototype.execute=function(){};function Yn(){this.a={};this.b=1E12}var Zn=null;Yn.prototype.render=function(a,b){this.a[this.b.toString()]=new $n(a,b);return this.b++};Yn.prototype.reset=function(a){var b=ao(this,a);a=bo(a);b&&a&&(b.delete(),delete this.a[a])};Yn.prototype.getResponse=function(a){return(a=ao(this,a))?a.getResponse():null};Yn.prototype.execute=function(a){(a=ao(this,a))&&a.execute()};function ao(a,b){return(b=bo(b))?a.a[b]||null:null}function bo(a){return(a="undefined"===typeof a?1E12:a)?a.toString():null}
function $n(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=kc(a);var c=this;this.i=function(){c.execute()};this.h?this.execute():nd(this.f,"click",this.i)}$n.prototype.getResponse=function(){co(this);return this.b};
$n.prototype.execute=function(){co(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=Me();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b)}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c()}catch(d){}a.h&&a.execute()},6E4)},500))};$n.prototype.delete=function(){co(this);this.g=!0;clearTimeout(this.a);this.a=null;xd(this.f,"click",this.i)};function co(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");};function eo(){}M(eo,"FACTOR_ID","phone");function fo(){}fo.prototype.g=function(){Zn||(Zn=new Yn);return E(Zn)};fo.prototype.c=function(){};var go=null;function ho(){this.b=l.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}var io=new qb(rb,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),jo=new Ze(3E4,6E4);
ho.prototype.g=function(a){var b=this;return new D(function(c,d){var e=setTimeout(function(){d(new t("network-request-failed"))},jo.get());if(!l.grecaptcha||a!==b.f&&!b.b){l[b.a]=function(){if(l.grecaptcha){b.f=a;var g=l.grecaptcha.render;l.grecaptcha.render=function(h,m){h=g(h,m);b.b++;return h};clearTimeout(e);c(l.grecaptcha)}else clearTimeout(e),d(new t("internal-error"));delete l[b.a]};var f=zb(io,{onload:b.a,hl:a||""});E(Bi(f)).o(function(){clearTimeout(e);d(new t("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else clearTimeout(e),
c(l.grecaptcha)})};ho.prototype.c=function(){this.b--};var ko=null;function lo(a,b,c,d,e,f,g){M(this,"type","recaptcha");this.c=this.f=null;this.J=!1;this.v=b;this.g=null;g?(go||(go=new fo),g=go):(ko||(ko=new ho),g=ko);this.m=g;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[mo])throw new t("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[no];if(!l.document)throw new t("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
if(!kc(b)||!this.i&&kc(b).hasChildNodes())throw new t("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.s=new Ii(a,f||null,e||null);this.u=d||function(){return null};var h=this;this.l=[];var m=this.a[oo];this.a[oo]=function(v){po(h,v);if("function"===typeof m)m(v);else if("string"===typeof m){var B=L(m,l);"function"===typeof B&&B(v)}};var p=this.a[qo];this.a[qo]=function(){po(h,null);if("function"===typeof p)p();else if("string"===typeof p){var v=
L(p,l);"function"===typeof v&&v()}}}var oo="callback",qo="expired-callback",mo="sitekey",no="size";function po(a,b){for(var c=0;c<a.l.length;c++)try{a.l[c](b)}catch(d){}}function ro(a,b){Xa(a.l,function(c){return c==b})}function so(a,b){a.h.push(b);b.oa(function(){Wa(a.h,b)});return b}k=lo.prototype;
k.Ia=function(){var a=this;return this.f?this.f:this.f=so(this,E().then(function(){if(Se()&&!Je())return Ee();throw new t("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.m.g(a.u())}).then(function(b){a.g=b;return O(a.s,Jj,{})}).then(function(b){a.a[mo]=b.recaptchaSiteKey}).o(function(b){a.f=null;throw b;}))};
k.render=function(){to(this);var a=this;return so(this,this.Ia().then(function(){if(null===a.c){var b=a.v;if(!a.i){var c=kc(b);b=nc("DIV");c.appendChild(b)}a.c=a.g.render(b,a.a)}return a.c}))};k.verify=function(){to(this);var a=this;return so(this,this.render().then(function(b){return new D(function(c){var d=a.g.getResponse(b);if(d)c(d);else{var e=function(f){f&&(ro(a,e),c(f))};a.l.push(e);a.i&&a.g.execute(a.c)}})}))};k.reset=function(){to(this);null!==this.c&&this.g.reset(this.c)};
function to(a){if(a.J)throw new t("internal-error","RecaptchaVerifier instance has been destroyed.");}k.clear=function(){to(this);this.J=!0;this.m.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=kc(this.v);for(var b;b=a.firstChild;)a.removeChild(b)}};
function uo(a,b,c){var d=!1;try{this.b=c||index_esm.app()}catch(g){throw new t("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new t("invalid-api-key");var e=this,f=null;try{f=this.b.auth().Ga()}catch(g){}try{d=this.b.auth().settings.appVerificationDisabledForTesting}catch(g){}f=index_esm.SDK_VERSION?Oe(index_esm.SDK_VERSION,f):null;lo.call(this,c,a,b,function(){try{var g=e.b.auth().la()}catch(h){g=
null}return g},f,Ca(Da),d)}r(uo,lo);function vo(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else{if(f)throw new t("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=wo.length)throw new t("internal-error",
"Argument validator received an unsupported number of arguments.");c=wo[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null}}if(d)throw new t("argument-error",a+" failed: "+d);}var wo="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",K:"a valid string",optional:!!b,M:function(c){return"string"===typeof c}}}
function xo(a,b){return{name:a||"",K:"a boolean",optional:!!b,M:function(c){return"boolean"===typeof c}}}function W(a,b){return{name:a||"",K:"a valid object",optional:!!b,M:n}}function yo(a,b){return{name:a||"",K:"a function",optional:!!b,M:function(c){return"function"===typeof c}}}function zo(a,b){return{name:a||"",K:"null",optional:!!b,M:function(c){return null===c}}}function Ao(){return{name:"",K:"an HTML element",optional:!1,M:function(a){return!!(a&&a instanceof Element)}}}
function Bo(){return{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return!!(a&&a instanceof Fn)}}}function Co(){return{name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return!!(a&&a instanceof index_esm.app.App)}}}function Do(a){return{name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.ka||!c)}}}
function Eo(){return{name:"multiFactorAssertion",K:"a valid multiFactorAssertion",optional:!1,M:function(a){return a?!!a.tb:!1}}}function Fo(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function Go(a,b){return n(a)&&"string"===typeof a.type&&a.type===b&&"function"===typeof a.Ha}function Ho(a){return n(a)&&"string"===typeof a.uid}
function Io(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return!(!a||"string"!==typeof a.type||"function"!==typeof a.verify)}}}function X(a,b,c,d){return{name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(e){return a.M(e)||b.M(e)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=Jo(d,a[c],b[c].j)}}function Ko(a,b){for(var c in b){var d=b[c].name;d!==c&&Object.defineProperty(a,d,{get:ua(function(e){return this[e]},c),set:ua(function(e,f,g,h){vo(e,[g],[h],!0);this[f]=h},d,c,b[c].lb),enumerable:!0})}}function Z(a,b,c,d){a[b]=Jo(b,c,d)}
function Jo(a,b,c){function d(){var g=Array.prototype.slice.call(arguments);vo(e,c,g);return b.apply(this,g)}if(!c)return b;var e=Lo(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function Lo(a){a=a.split(".");return a[a.length-1]};Y(Fn.prototype,{kb:{name:"applyActionCode",j:[V("code")]},Sa:{name:"checkActionCode",j:[V("code")]},ob:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},dc:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},hc:{name:"fetchSignInMethodsForEmail",j:[V("email")]},ra:{name:"getRedirectResult",j:[]},Bc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},Hc:{name:"onAuthStateChanged",j:[X(W(),yo(),"nextOrObserver"),yo("opt_error",!0),yo("opt_completed",!0)]},Ic:{name:"onIdTokenChanged",
j:[X(W(),yo(),"nextOrObserver"),yo("opt_error",!0),yo("opt_completed",!0)]},wb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),zo(null,!0),"opt_actionCodeSettings",!0)]},xb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},yb:{name:"setPersistence",j:[V("persistence")]},Sc:{name:"signInAndRetrieveDataWithCredential",j:[Do()]},Ab:{name:"signInAnonymously",j:[]},ab:{name:"signInWithCredential",j:[Do()]},Tc:{name:"signInWithCustomToken",j:[V("token")]},
Uc:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Vc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Wc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),Io()]},Xc:{name:"signInWithPopup",j:[Fo()]},Yc:{name:"signInWithRedirect",j:[Fo()]},dd:{name:"updateCurrentUser",j:[X(function(a){return{name:"user",K:"an instance of Firebase User",optional:!!a,M:function(b){return!!(b&&b instanceof Im)}}}(),zo(),"user")]},Bb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,
!0)]},fd:{name:"useDeviceLanguage",j:[]},gd:{name:"useEmulator",j:[V("url"),W("options",!0)]},jd:{name:"verifyPasswordResetCode",j:[V("code")]}});Ko(Fn.prototype,{lc:{name:"languageCode",lb:X(V(),zo(),"languageCode")},ti:{name:"tenantId",lb:X(V(),zo(),"tenantId")}});Fn.Persistence=Rk;Fn.Persistence.LOCAL="local";Fn.Persistence.SESSION="session";Fn.Persistence.NONE="none";
Y(Im.prototype,{"delete":{name:"delete",j:[]},oc:{name:"getIdTokenResult",j:[xo("opt_forceRefresh",!0)]},I:{name:"getIdToken",j:[xo("opt_forceRefresh",!0)]},Cc:{name:"linkAndRetrieveDataWithCredential",j:[Do()]},rb:{name:"linkWithCredential",j:[Do()]},Dc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),Io()]},Ec:{name:"linkWithPopup",j:[Fo()]},Fc:{name:"linkWithRedirect",j:[Fo()]},Lc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Do()]},ub:{name:"reauthenticateWithCredential",j:[Do()]},Mc:{name:"reauthenticateWithPhoneNumber",
j:[V("phoneNumber"),Io()]},Nc:{name:"reauthenticateWithPopup",j:[Fo()]},Oc:{name:"reauthenticateWithRedirect",j:[Fo()]},reload:{name:"reload",j:[]},vb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),zo(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},cd:{name:"unlink",j:[V("provider")]},Cb:{name:"updateEmail",j:[V("email")]},Db:{name:"updatePassword",j:[V("password")]},ed:{name:"updatePhoneNumber",j:[Do("phone")]},Eb:{name:"updateProfile",j:[W("profile")]},
Fb:{name:"verifyBeforeUpdateEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),zo(null,!0),"opt_actionCodeSettings",!0)]}});Y(Yn.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(Xn.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(D.prototype,{oa:{name:"finally"},o:{name:"catch"},then:{name:"then"}});
Ko(em.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",lb:xo("appVerificationDisabledForTesting")}});Y(fm.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});Z(Bg,"fromJSON",function(a){a="string"===typeof a?JSON.parse(a):a;for(var b,c=[Mg,dh,kh,Jg],d=0;d<c.length;d++)if(b=c[d](a))return b;return null},[X(V(),W(),"json")]);Z(Zg,"credential",function(a,b){return new Yg(a,b)},[V("email"),V("password")]);Y(Yg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});
Y(Qg.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Qg,"credential",Rg,[X(V(),W(),"token")]);Z(Zg,"credentialWithLink",eh,[V("email"),V("emailLink")]);Y(Sg.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Sg,"credential",Tg,[X(V(),W(),"token")]);Y(Ug.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});
Z(Ug,"credential",Vg,[X(V(),X(W(),zo()),"idToken"),X(V(),zo(),"accessToken",!0)]);Y(Wg.prototype,{Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Wg,"credential",Xg,[X(V(),W(),"token"),V("secret",!0)]);Y(Pg.prototype,{Ca:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),X(W(),zo()),"optionsOrIdToken"),X(V(),zo(),"accessToken",!0)]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Y(Kg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});
Y(Eg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Z(lh,"credential",ph,[V("verificationId"),V("verificationCode")]);
Y(lh.prototype,{gb:{name:"verifyPhoneNumber",j:[X(V(),function(a,b){return{name:a||"phoneInfoOptions",K:"valid phone info options",optional:!!b,M:function(c){return c?c.session&&c.phoneNumber?Go(c.session,zg)&&"string"===typeof c.phoneNumber:c.session&&c.multiFactorHint?Go(c.session,Ag)&&Ho(c.multiFactorHint):c.session&&c.multiFactorUid?Go(c.session,Ag)&&"string"===typeof c.multiFactorUid:c.phoneNumber?"string"===typeof c.phoneNumber:!1:!1}}}(),"phoneInfoOptions"),Io()]}});
Y(gh.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Y(t.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(yh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(xh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(lm.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(im.prototype,{Rc:{name:"resolveSignIn",j:[Eo()]}});
Y(tm.prototype,{Sb:{name:"getSession",j:[]},fc:{name:"enroll",j:[Eo(),V("displayName",!0)]},bd:{name:"unenroll",j:[X({name:"multiFactorInfo",K:"a valid multiFactorInfo",optional:!1,M:Ho},V(),"multiFactorInfoIdentifier")]}});Y(uo.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});Z(Jf,"parseLink",Rf,[V("link")]);Z(eo,"assertion",function(a){return new rm(a)},[Do("phone")]);
(function(){if("undefined"!==typeof index_esm&&index_esm.INTERNAL&&index_esm.INTERNAL.registerComponent){var a={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Af,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:Cf,VERIFY_AND_CHANGE_EMAIL:Bf,VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:Fn,AuthCredential:Bg,Error:t};Z(a,"EmailAuthProvider",Zg,[]);Z(a,"FacebookAuthProvider",Qg,[]);Z(a,"GithubAuthProvider",Sg,[]);Z(a,"GoogleAuthProvider",Ug,[]);Z(a,"TwitterAuthProvider",Wg,[]);
Z(a,"OAuthProvider",Pg,[V("providerId")]);Z(a,"SAMLAuthProvider",Og,[V("providerId")]);Z(a,"PhoneAuthProvider",lh,[Bo()]);Z(a,"RecaptchaVerifier",uo,[X(V(),Ao(),"recaptchaContainer"),W("recaptchaParameters",!0),Co()]);Z(a,"ActionCodeURL",Jf,[]);Z(a,"PhoneMultiFactorGenerator",eo,[]);index_esm.INTERNAL.registerComponent({name:"auth",instanceFactory:function(b){b=b.getProvider("app").getImmediate();return new Fn(b)},multipleInstances:!1,serviceProps:a,instantiationMode:"LAZY",type:"PUBLIC",onInstanceCreated:function(b){b.getProvider("auth-internal").initialize()}});
index_esm.INTERNAL.registerComponent({name:"auth-internal",instanceFactory:function(b){b=b.getProvider("auth").getImmediate();return{getUid:q(b.getUid,b),getToken:q(b.nc,b),addAuthTokenListener:q(b.cc,b),removeAuthTokenListener:q(b.Pc,b)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"});index_esm.registerVersion("@firebase/auth","0.16.8");index_esm.INTERNAL.extendNamespace({User:Im})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
})();}).apply(typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

//# sourceMappingURL=auth.esm.js.map

;// CONCATENATED MODULE: ./node_modules/firebase/auth/dist/index.esm.js

//# sourceMappingURL=index.esm.js.map

;// CONCATENATED MODULE: ./utils/auth.js



const signIn = () => {
  const provider = new index_esm.auth.GoogleAuthProvider();
  index_esm.auth().signInWithPopup(provider);
};

const signOut = () => {
  index_esm.auth().signOut();
};



;// CONCATENATED MODULE: ./components/buttons/loginButton.js


// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h1>Welcome to Vocab-YOU-Lary</h1><button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

/* harmony default export */ const buttons_loginButton = (loginButton);

;// CONCATENATED MODULE: ./utils/client.js
const client = {
  apiKey: {"ACLOCAL_PATH":"C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal","ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\Tosche Station\\AppData\\Roaming","APP_API_KEY":"AIzaSyD9X3NbI_XYYoDkdVdix_ys2cNMrqiIHu4","APP_APP_ID":"1:792920916483:web:58909c89e658bff14e8436","APP_AUTH_DOMAIN":"vocab-you-lary-6dc22.firebaseapp.com","APP_DATABASE_URL":"https://vocab-you-lary-6dc22-default-rtdb.firebaseio.com","APP_MEASUREMENT_ID":"G-8H0CR245RH","APP_PROJECT_ID":"vocab-you-lary-6dc22","APP_STORAGE_BUCKET":"vocab-you-lary-6dc22.appspot.com","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"133150130734484655","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\LOCAL\\crashpad_1140_RPVZTYYEARSJHBET","COLOR":"1","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"TOSCHE-STATION","COMSPEC":"C:\\Windows\\system32\\cmd.exe","CONFIG_SITE":"C:/Program Files/Git/etc/config.site","DISPLAY":"needs-to-be-defined","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EDITOR":"notepad.exe","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\Tosche Station","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\Tosche Station","HOSTNAME":"Tosche-Station","INFOPATH":"C:\\Program Files\\Git\\mingw64\\local\\info;C:\\Program Files\\Git\\mingw64\\share\\info;C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info","INIT_CWD":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\Tosche Station\\AppData\\Local","LOGONSERVER":"\\\\TOSCHE-STATION","MANPATH":"C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man","MINGW_CHOST":"x86_64-w64-mingw32","MINGW_PACKAGE_PREFIX":"mingw-w64-x86_64","MINGW_PREFIX":"C:/Program Files/Git/mingw64","MSYSTEM":"MINGW64","MSYSTEM_CARCH":"x86_64","MSYSTEM_CHOST":"x86_64-w64-mingw32","MSYSTEM_PREFIX":"C:/Program Files/Git/mingw64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_command":"run-script","npm_config_cache":"C:\\Users\\Tosche Station\\AppData\\Local\\npm-cache","npm_config_globalconfig":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_global_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_init_module":"C:\\Users\\Tosche Station\\.npm-init.js","npm_config_local_prefix":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_noproxy":"","npm_config_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_userconfig":"C:\\Users\\Tosche Station\\.npmrc","npm_config_user_agent":"npm/8.19.2 node/v18.12.1 win32 x64 workspaces/false","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_json":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\package.json","npm_package_name":"vocab-you-lary","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"12","OculusBase":"C:\\Program Files\\Oculus\\","OneDrive":"C:\\Users\\Tosche Station\\OneDrive","ORIGINAL_PATH":"C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","ORIGINAL_TEMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_TMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\node_modules\\.bin;C:\\Users\\Tosche Station\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Tosche Station\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW","PKG_CONFIG_PATH":"C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig","PKG_CONFIG_SYSTEM_INCLUDE_PATH":"C:/Program Files/Git/mingw64/include","PKG_CONFIG_SYSTEM_LIBRARY_PATH":"C:/Program Files/Git/mingw64/lib","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 167 Stepping 1, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"a701","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\Wired Networking\\","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/Tosche Station/workspace/foundations/inclass/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","SESSIONNAME":"Console","SHELL":"C:\\Program Files\\Git\\usr\\bin\\bash.exe","SHLVL":"2","SSH_ASKPASS":"C:/Program Files/Git/mingw64/bin/git-askpass.exe","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TERM":"xterm-256color","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.76.0","TMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TMPDIR":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","USERDOMAIN":"TOSCHE-STATION","USERDOMAIN_ROAMINGPROFILE":"TOSCHE-STATION","USERNAME":"Tosche Station","USERPROFILE":"C:\\Users\\Tosche Station","VBOX_MSI_INSTALL_PATH":"C:\\Program Files\\Oracle\\VirtualBox\\","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-45745f70ae-sock","WINDIR":"C:\\Windows","ZES_ENABLE_SYSMAN":"1","_":"C:/Program Files/nodejs/node.exe"}.APP_API_KEY,
  authDomain: {"ACLOCAL_PATH":"C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal","ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\Tosche Station\\AppData\\Roaming","APP_API_KEY":"AIzaSyD9X3NbI_XYYoDkdVdix_ys2cNMrqiIHu4","APP_APP_ID":"1:792920916483:web:58909c89e658bff14e8436","APP_AUTH_DOMAIN":"vocab-you-lary-6dc22.firebaseapp.com","APP_DATABASE_URL":"https://vocab-you-lary-6dc22-default-rtdb.firebaseio.com","APP_MEASUREMENT_ID":"G-8H0CR245RH","APP_PROJECT_ID":"vocab-you-lary-6dc22","APP_STORAGE_BUCKET":"vocab-you-lary-6dc22.appspot.com","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"133150130734484655","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\LOCAL\\crashpad_1140_RPVZTYYEARSJHBET","COLOR":"1","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"TOSCHE-STATION","COMSPEC":"C:\\Windows\\system32\\cmd.exe","CONFIG_SITE":"C:/Program Files/Git/etc/config.site","DISPLAY":"needs-to-be-defined","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EDITOR":"notepad.exe","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\Tosche Station","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\Tosche Station","HOSTNAME":"Tosche-Station","INFOPATH":"C:\\Program Files\\Git\\mingw64\\local\\info;C:\\Program Files\\Git\\mingw64\\share\\info;C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info","INIT_CWD":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\Tosche Station\\AppData\\Local","LOGONSERVER":"\\\\TOSCHE-STATION","MANPATH":"C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man","MINGW_CHOST":"x86_64-w64-mingw32","MINGW_PACKAGE_PREFIX":"mingw-w64-x86_64","MINGW_PREFIX":"C:/Program Files/Git/mingw64","MSYSTEM":"MINGW64","MSYSTEM_CARCH":"x86_64","MSYSTEM_CHOST":"x86_64-w64-mingw32","MSYSTEM_PREFIX":"C:/Program Files/Git/mingw64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_command":"run-script","npm_config_cache":"C:\\Users\\Tosche Station\\AppData\\Local\\npm-cache","npm_config_globalconfig":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_global_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_init_module":"C:\\Users\\Tosche Station\\.npm-init.js","npm_config_local_prefix":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_noproxy":"","npm_config_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_userconfig":"C:\\Users\\Tosche Station\\.npmrc","npm_config_user_agent":"npm/8.19.2 node/v18.12.1 win32 x64 workspaces/false","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_json":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\package.json","npm_package_name":"vocab-you-lary","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"12","OculusBase":"C:\\Program Files\\Oculus\\","OneDrive":"C:\\Users\\Tosche Station\\OneDrive","ORIGINAL_PATH":"C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","ORIGINAL_TEMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_TMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\node_modules\\.bin;C:\\Users\\Tosche Station\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Tosche Station\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW","PKG_CONFIG_PATH":"C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig","PKG_CONFIG_SYSTEM_INCLUDE_PATH":"C:/Program Files/Git/mingw64/include","PKG_CONFIG_SYSTEM_LIBRARY_PATH":"C:/Program Files/Git/mingw64/lib","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 167 Stepping 1, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"a701","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\Wired Networking\\","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/Tosche Station/workspace/foundations/inclass/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","SESSIONNAME":"Console","SHELL":"C:\\Program Files\\Git\\usr\\bin\\bash.exe","SHLVL":"2","SSH_ASKPASS":"C:/Program Files/Git/mingw64/bin/git-askpass.exe","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TERM":"xterm-256color","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.76.0","TMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TMPDIR":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","USERDOMAIN":"TOSCHE-STATION","USERDOMAIN_ROAMINGPROFILE":"TOSCHE-STATION","USERNAME":"Tosche Station","USERPROFILE":"C:\\Users\\Tosche Station","VBOX_MSI_INSTALL_PATH":"C:\\Program Files\\Oracle\\VirtualBox\\","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-45745f70ae-sock","WINDIR":"C:\\Windows","ZES_ENABLE_SYSMAN":"1","_":"C:/Program Files/nodejs/node.exe"}.APP_AUTH_DOMAIN,
  databaseURL: {"ACLOCAL_PATH":"C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal","ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\Tosche Station\\AppData\\Roaming","APP_API_KEY":"AIzaSyD9X3NbI_XYYoDkdVdix_ys2cNMrqiIHu4","APP_APP_ID":"1:792920916483:web:58909c89e658bff14e8436","APP_AUTH_DOMAIN":"vocab-you-lary-6dc22.firebaseapp.com","APP_DATABASE_URL":"https://vocab-you-lary-6dc22-default-rtdb.firebaseio.com","APP_MEASUREMENT_ID":"G-8H0CR245RH","APP_PROJECT_ID":"vocab-you-lary-6dc22","APP_STORAGE_BUCKET":"vocab-you-lary-6dc22.appspot.com","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"133150130734484655","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\LOCAL\\crashpad_1140_RPVZTYYEARSJHBET","COLOR":"1","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"TOSCHE-STATION","COMSPEC":"C:\\Windows\\system32\\cmd.exe","CONFIG_SITE":"C:/Program Files/Git/etc/config.site","DISPLAY":"needs-to-be-defined","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EDITOR":"notepad.exe","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\Tosche Station","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\Tosche Station","HOSTNAME":"Tosche-Station","INFOPATH":"C:\\Program Files\\Git\\mingw64\\local\\info;C:\\Program Files\\Git\\mingw64\\share\\info;C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info","INIT_CWD":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\Tosche Station\\AppData\\Local","LOGONSERVER":"\\\\TOSCHE-STATION","MANPATH":"C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man","MINGW_CHOST":"x86_64-w64-mingw32","MINGW_PACKAGE_PREFIX":"mingw-w64-x86_64","MINGW_PREFIX":"C:/Program Files/Git/mingw64","MSYSTEM":"MINGW64","MSYSTEM_CARCH":"x86_64","MSYSTEM_CHOST":"x86_64-w64-mingw32","MSYSTEM_PREFIX":"C:/Program Files/Git/mingw64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_command":"run-script","npm_config_cache":"C:\\Users\\Tosche Station\\AppData\\Local\\npm-cache","npm_config_globalconfig":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_global_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_init_module":"C:\\Users\\Tosche Station\\.npm-init.js","npm_config_local_prefix":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_noproxy":"","npm_config_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_userconfig":"C:\\Users\\Tosche Station\\.npmrc","npm_config_user_agent":"npm/8.19.2 node/v18.12.1 win32 x64 workspaces/false","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_json":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\package.json","npm_package_name":"vocab-you-lary","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"12","OculusBase":"C:\\Program Files\\Oculus\\","OneDrive":"C:\\Users\\Tosche Station\\OneDrive","ORIGINAL_PATH":"C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","ORIGINAL_TEMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_TMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\node_modules\\.bin;C:\\Users\\Tosche Station\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Tosche Station\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW","PKG_CONFIG_PATH":"C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig","PKG_CONFIG_SYSTEM_INCLUDE_PATH":"C:/Program Files/Git/mingw64/include","PKG_CONFIG_SYSTEM_LIBRARY_PATH":"C:/Program Files/Git/mingw64/lib","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 167 Stepping 1, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"a701","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\Wired Networking\\","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/Tosche Station/workspace/foundations/inclass/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","SESSIONNAME":"Console","SHELL":"C:\\Program Files\\Git\\usr\\bin\\bash.exe","SHLVL":"2","SSH_ASKPASS":"C:/Program Files/Git/mingw64/bin/git-askpass.exe","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TERM":"xterm-256color","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.76.0","TMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TMPDIR":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","USERDOMAIN":"TOSCHE-STATION","USERDOMAIN_ROAMINGPROFILE":"TOSCHE-STATION","USERNAME":"Tosche Station","USERPROFILE":"C:\\Users\\Tosche Station","VBOX_MSI_INSTALL_PATH":"C:\\Program Files\\Oracle\\VirtualBox\\","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-45745f70ae-sock","WINDIR":"C:\\Windows","ZES_ENABLE_SYSMAN":"1","_":"C:/Program Files/nodejs/node.exe"}.APP_DATABASE_URL,
  projectId: {"ACLOCAL_PATH":"C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal","ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\Tosche Station\\AppData\\Roaming","APP_API_KEY":"AIzaSyD9X3NbI_XYYoDkdVdix_ys2cNMrqiIHu4","APP_APP_ID":"1:792920916483:web:58909c89e658bff14e8436","APP_AUTH_DOMAIN":"vocab-you-lary-6dc22.firebaseapp.com","APP_DATABASE_URL":"https://vocab-you-lary-6dc22-default-rtdb.firebaseio.com","APP_MEASUREMENT_ID":"G-8H0CR245RH","APP_PROJECT_ID":"vocab-you-lary-6dc22","APP_STORAGE_BUCKET":"vocab-you-lary-6dc22.appspot.com","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"133150130734484655","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\LOCAL\\crashpad_1140_RPVZTYYEARSJHBET","COLOR":"1","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"TOSCHE-STATION","COMSPEC":"C:\\Windows\\system32\\cmd.exe","CONFIG_SITE":"C:/Program Files/Git/etc/config.site","DISPLAY":"needs-to-be-defined","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EDITOR":"notepad.exe","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\Tosche Station","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\Tosche Station","HOSTNAME":"Tosche-Station","INFOPATH":"C:\\Program Files\\Git\\mingw64\\local\\info;C:\\Program Files\\Git\\mingw64\\share\\info;C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info","INIT_CWD":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\Tosche Station\\AppData\\Local","LOGONSERVER":"\\\\TOSCHE-STATION","MANPATH":"C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man","MINGW_CHOST":"x86_64-w64-mingw32","MINGW_PACKAGE_PREFIX":"mingw-w64-x86_64","MINGW_PREFIX":"C:/Program Files/Git/mingw64","MSYSTEM":"MINGW64","MSYSTEM_CARCH":"x86_64","MSYSTEM_CHOST":"x86_64-w64-mingw32","MSYSTEM_PREFIX":"C:/Program Files/Git/mingw64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_command":"run-script","npm_config_cache":"C:\\Users\\Tosche Station\\AppData\\Local\\npm-cache","npm_config_globalconfig":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_global_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_init_module":"C:\\Users\\Tosche Station\\.npm-init.js","npm_config_local_prefix":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_noproxy":"","npm_config_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_userconfig":"C:\\Users\\Tosche Station\\.npmrc","npm_config_user_agent":"npm/8.19.2 node/v18.12.1 win32 x64 workspaces/false","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_json":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\package.json","npm_package_name":"vocab-you-lary","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"12","OculusBase":"C:\\Program Files\\Oculus\\","OneDrive":"C:\\Users\\Tosche Station\\OneDrive","ORIGINAL_PATH":"C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","ORIGINAL_TEMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_TMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\node_modules\\.bin;C:\\Users\\Tosche Station\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Tosche Station\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW","PKG_CONFIG_PATH":"C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig","PKG_CONFIG_SYSTEM_INCLUDE_PATH":"C:/Program Files/Git/mingw64/include","PKG_CONFIG_SYSTEM_LIBRARY_PATH":"C:/Program Files/Git/mingw64/lib","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 167 Stepping 1, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"a701","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\Wired Networking\\","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/Tosche Station/workspace/foundations/inclass/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","SESSIONNAME":"Console","SHELL":"C:\\Program Files\\Git\\usr\\bin\\bash.exe","SHLVL":"2","SSH_ASKPASS":"C:/Program Files/Git/mingw64/bin/git-askpass.exe","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TERM":"xterm-256color","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.76.0","TMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TMPDIR":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","USERDOMAIN":"TOSCHE-STATION","USERDOMAIN_ROAMINGPROFILE":"TOSCHE-STATION","USERNAME":"Tosche Station","USERPROFILE":"C:\\Users\\Tosche Station","VBOX_MSI_INSTALL_PATH":"C:\\Program Files\\Oracle\\VirtualBox\\","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-45745f70ae-sock","WINDIR":"C:\\Windows","ZES_ENABLE_SYSMAN":"1","_":"C:/Program Files/nodejs/node.exe"}.APP_PROJECT_ID,
  storageBucket: {"ACLOCAL_PATH":"C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal","ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\Tosche Station\\AppData\\Roaming","APP_API_KEY":"AIzaSyD9X3NbI_XYYoDkdVdix_ys2cNMrqiIHu4","APP_APP_ID":"1:792920916483:web:58909c89e658bff14e8436","APP_AUTH_DOMAIN":"vocab-you-lary-6dc22.firebaseapp.com","APP_DATABASE_URL":"https://vocab-you-lary-6dc22-default-rtdb.firebaseio.com","APP_MEASUREMENT_ID":"G-8H0CR245RH","APP_PROJECT_ID":"vocab-you-lary-6dc22","APP_STORAGE_BUCKET":"vocab-you-lary-6dc22.appspot.com","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"133150130734484655","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\LOCAL\\crashpad_1140_RPVZTYYEARSJHBET","COLOR":"1","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"TOSCHE-STATION","COMSPEC":"C:\\Windows\\system32\\cmd.exe","CONFIG_SITE":"C:/Program Files/Git/etc/config.site","DISPLAY":"needs-to-be-defined","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EDITOR":"notepad.exe","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\Tosche Station","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\Tosche Station","HOSTNAME":"Tosche-Station","INFOPATH":"C:\\Program Files\\Git\\mingw64\\local\\info;C:\\Program Files\\Git\\mingw64\\share\\info;C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info","INIT_CWD":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\Tosche Station\\AppData\\Local","LOGONSERVER":"\\\\TOSCHE-STATION","MANPATH":"C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man","MINGW_CHOST":"x86_64-w64-mingw32","MINGW_PACKAGE_PREFIX":"mingw-w64-x86_64","MINGW_PREFIX":"C:/Program Files/Git/mingw64","MSYSTEM":"MINGW64","MSYSTEM_CARCH":"x86_64","MSYSTEM_CHOST":"x86_64-w64-mingw32","MSYSTEM_PREFIX":"C:/Program Files/Git/mingw64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_command":"run-script","npm_config_cache":"C:\\Users\\Tosche Station\\AppData\\Local\\npm-cache","npm_config_globalconfig":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_global_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_init_module":"C:\\Users\\Tosche Station\\.npm-init.js","npm_config_local_prefix":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_noproxy":"","npm_config_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_userconfig":"C:\\Users\\Tosche Station\\.npmrc","npm_config_user_agent":"npm/8.19.2 node/v18.12.1 win32 x64 workspaces/false","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_json":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\package.json","npm_package_name":"vocab-you-lary","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"12","OculusBase":"C:\\Program Files\\Oculus\\","OneDrive":"C:\\Users\\Tosche Station\\OneDrive","ORIGINAL_PATH":"C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","ORIGINAL_TEMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_TMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\node_modules\\.bin;C:\\Users\\Tosche Station\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Tosche Station\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW","PKG_CONFIG_PATH":"C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig","PKG_CONFIG_SYSTEM_INCLUDE_PATH":"C:/Program Files/Git/mingw64/include","PKG_CONFIG_SYSTEM_LIBRARY_PATH":"C:/Program Files/Git/mingw64/lib","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 167 Stepping 1, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"a701","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\Wired Networking\\","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/Tosche Station/workspace/foundations/inclass/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","SESSIONNAME":"Console","SHELL":"C:\\Program Files\\Git\\usr\\bin\\bash.exe","SHLVL":"2","SSH_ASKPASS":"C:/Program Files/Git/mingw64/bin/git-askpass.exe","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TERM":"xterm-256color","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.76.0","TMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TMPDIR":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","USERDOMAIN":"TOSCHE-STATION","USERDOMAIN_ROAMINGPROFILE":"TOSCHE-STATION","USERNAME":"Tosche Station","USERPROFILE":"C:\\Users\\Tosche Station","VBOX_MSI_INSTALL_PATH":"C:\\Program Files\\Oracle\\VirtualBox\\","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-45745f70ae-sock","WINDIR":"C:\\Windows","ZES_ENABLE_SYSMAN":"1","_":"C:/Program Files/nodejs/node.exe"}.APP_STORAGE_BUCKET,
  appId: {"ACLOCAL_PATH":"C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal","ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\Tosche Station\\AppData\\Roaming","APP_API_KEY":"AIzaSyD9X3NbI_XYYoDkdVdix_ys2cNMrqiIHu4","APP_APP_ID":"1:792920916483:web:58909c89e658bff14e8436","APP_AUTH_DOMAIN":"vocab-you-lary-6dc22.firebaseapp.com","APP_DATABASE_URL":"https://vocab-you-lary-6dc22-default-rtdb.firebaseio.com","APP_MEASUREMENT_ID":"G-8H0CR245RH","APP_PROJECT_ID":"vocab-you-lary-6dc22","APP_STORAGE_BUCKET":"vocab-you-lary-6dc22.appspot.com","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"133150130734484655","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\LOCAL\\crashpad_1140_RPVZTYYEARSJHBET","COLOR":"1","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"TOSCHE-STATION","COMSPEC":"C:\\Windows\\system32\\cmd.exe","CONFIG_SITE":"C:/Program Files/Git/etc/config.site","DISPLAY":"needs-to-be-defined","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EDITOR":"notepad.exe","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\Tosche Station","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\Tosche Station","HOSTNAME":"Tosche-Station","INFOPATH":"C:\\Program Files\\Git\\mingw64\\local\\info;C:\\Program Files\\Git\\mingw64\\share\\info;C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info","INIT_CWD":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\Tosche Station\\AppData\\Local","LOGONSERVER":"\\\\TOSCHE-STATION","MANPATH":"C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man","MINGW_CHOST":"x86_64-w64-mingw32","MINGW_PACKAGE_PREFIX":"mingw-w64-x86_64","MINGW_PREFIX":"C:/Program Files/Git/mingw64","MSYSTEM":"MINGW64","MSYSTEM_CARCH":"x86_64","MSYSTEM_CHOST":"x86_64-w64-mingw32","MSYSTEM_PREFIX":"C:/Program Files/Git/mingw64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_command":"run-script","npm_config_cache":"C:\\Users\\Tosche Station\\AppData\\Local\\npm-cache","npm_config_globalconfig":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_global_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_init_module":"C:\\Users\\Tosche Station\\.npm-init.js","npm_config_local_prefix":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_noproxy":"","npm_config_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_userconfig":"C:\\Users\\Tosche Station\\.npmrc","npm_config_user_agent":"npm/8.19.2 node/v18.12.1 win32 x64 workspaces/false","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_json":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\package.json","npm_package_name":"vocab-you-lary","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"12","OculusBase":"C:\\Program Files\\Oculus\\","OneDrive":"C:\\Users\\Tosche Station\\OneDrive","ORIGINAL_PATH":"C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","ORIGINAL_TEMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_TMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\node_modules\\.bin;C:\\Users\\Tosche Station\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Tosche Station\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW","PKG_CONFIG_PATH":"C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig","PKG_CONFIG_SYSTEM_INCLUDE_PATH":"C:/Program Files/Git/mingw64/include","PKG_CONFIG_SYSTEM_LIBRARY_PATH":"C:/Program Files/Git/mingw64/lib","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 167 Stepping 1, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"a701","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\Wired Networking\\","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/Tosche Station/workspace/foundations/inclass/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","SESSIONNAME":"Console","SHELL":"C:\\Program Files\\Git\\usr\\bin\\bash.exe","SHLVL":"2","SSH_ASKPASS":"C:/Program Files/Git/mingw64/bin/git-askpass.exe","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TERM":"xterm-256color","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.76.0","TMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TMPDIR":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","USERDOMAIN":"TOSCHE-STATION","USERDOMAIN_ROAMINGPROFILE":"TOSCHE-STATION","USERNAME":"Tosche Station","USERPROFILE":"C:\\Users\\Tosche Station","VBOX_MSI_INSTALL_PATH":"C:\\Program Files\\Oracle\\VirtualBox\\","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-45745f70ae-sock","WINDIR":"C:\\Windows","ZES_ENABLE_SYSMAN":"1","_":"C:/Program Files/nodejs/node.exe"}.APP_APP_ID,
  measurementId: {"ACLOCAL_PATH":"C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal","ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\Tosche Station\\AppData\\Roaming","APP_API_KEY":"AIzaSyD9X3NbI_XYYoDkdVdix_ys2cNMrqiIHu4","APP_APP_ID":"1:792920916483:web:58909c89e658bff14e8436","APP_AUTH_DOMAIN":"vocab-you-lary-6dc22.firebaseapp.com","APP_DATABASE_URL":"https://vocab-you-lary-6dc22-default-rtdb.firebaseio.com","APP_MEASUREMENT_ID":"G-8H0CR245RH","APP_PROJECT_ID":"vocab-you-lary-6dc22","APP_STORAGE_BUCKET":"vocab-you-lary-6dc22.appspot.com","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"133150130734484655","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\LOCAL\\crashpad_1140_RPVZTYYEARSJHBET","COLOR":"1","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"TOSCHE-STATION","COMSPEC":"C:\\Windows\\system32\\cmd.exe","CONFIG_SITE":"C:/Program Files/Git/etc/config.site","DISPLAY":"needs-to-be-defined","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EDITOR":"notepad.exe","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\Tosche Station","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\Tosche Station","HOSTNAME":"Tosche-Station","INFOPATH":"C:\\Program Files\\Git\\mingw64\\local\\info;C:\\Program Files\\Git\\mingw64\\share\\info;C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info","INIT_CWD":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\Tosche Station\\AppData\\Local","LOGONSERVER":"\\\\TOSCHE-STATION","MANPATH":"C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man","MINGW_CHOST":"x86_64-w64-mingw32","MINGW_PACKAGE_PREFIX":"mingw-w64-x86_64","MINGW_PREFIX":"C:/Program Files/Git/mingw64","MSYSTEM":"MINGW64","MSYSTEM_CARCH":"x86_64","MSYSTEM_CHOST":"x86_64-w64-mingw32","MSYSTEM_PREFIX":"C:/Program Files/Git/mingw64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_command":"run-script","npm_config_cache":"C:\\Users\\Tosche Station\\AppData\\Local\\npm-cache","npm_config_globalconfig":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_global_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_init_module":"C:\\Users\\Tosche Station\\.npm-init.js","npm_config_local_prefix":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_noproxy":"","npm_config_prefix":"C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","npm_config_userconfig":"C:\\Users\\Tosche Station\\.npmrc","npm_config_user_agent":"npm/8.19.2 node/v18.12.1 win32 x64 workspaces/false","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_json":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\package.json","npm_package_name":"vocab-you-lary","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"12","OculusBase":"C:\\Program Files\\Oculus\\","OneDrive":"C:\\Users\\Tosche Station\\OneDrive","ORIGINAL_PATH":"C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm","ORIGINAL_TEMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_TMP":"C:/Users/TOSCHE~1/AppData/Local/Temp","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\INDIVIDUAL-ASSESSMENT-vocab-YOU-lary\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\inclass\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\foundations\\node_modules\\.bin;C:\\Users\\Tosche Station\\workspace\\node_modules\\.bin;C:\\Users\\Tosche Station\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Tosche Station\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Tosche Station\\bin;C:\\Python311\\Scripts;C:\\Python311;C:\\Program Files\\Oculus\\Support\\oculus-runtime;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\dotnet;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files (x86)\\GnuPG\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\Tosche Station\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Tosche Station\\AppData\\Roaming\\npm;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW","PKG_CONFIG_PATH":"C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig","PKG_CONFIG_SYSTEM_INCLUDE_PATH":"C:/Program Files/Git/mingw64/include","PKG_CONFIG_SYSTEM_LIBRARY_PATH":"C:/Program Files/Git/mingw64/lib","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 167 Stepping 1, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"a701","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\Wired Networking\\","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/Tosche Station/workspace/foundations/inclass/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary","SESSIONNAME":"Console","SHELL":"C:\\Program Files\\Git\\usr\\bin\\bash.exe","SHLVL":"2","SSH_ASKPASS":"C:/Program Files/Git/mingw64/bin/git-askpass.exe","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TERM":"xterm-256color","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.76.0","TMP":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","TMPDIR":"C:\\Users\\TOSCHE~1\\AppData\\Local\\Temp","USERDOMAIN":"TOSCHE-STATION","USERDOMAIN_ROAMINGPROFILE":"TOSCHE-STATION","USERNAME":"Tosche Station","USERPROFILE":"C:\\Users\\Tosche Station","VBOX_MSI_INSTALL_PATH":"C:\\Program Files\\Oracle\\VirtualBox\\","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\Tosche Station\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-45745f70ae-sock","WINDIR":"C:\\Windows","ZES_ENABLE_SYSMAN":"1","_":"C:/Program Files/nodejs/node.exe"}.APP_MEASUREMENT_ID,
};

/* harmony default export */ const utils_client = (client);

;// CONCATENATED MODULE: ./utils/renderToDOM.js
const renderToDOM_renderToDOM = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

/* harmony default export */ const utils_renderToDOM = (renderToDOM_renderToDOM);

;// CONCATENATED MODULE: ./components/shared/domBuilder.js


const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <div id="form-container"></div>
  <div id="filter-buttons"></div>
  <div id="cards"></div>
  </div>`;

  utils_renderToDOM('#app', domString);
};

/* harmony default export */ const shared_domBuilder = (domBuilder);

;// CONCATENATED MODULE: ./api/cardData.js


const endpoint = utils_client.databaseURL;

const getCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});



;// CONCATENATED MODULE: ./components/buttons/filterButtons.js


const filterBtn = () => {
  const domString = `
    <button id="html" class="btn btn-primary">HTML</button>
    <button id="css" class="btn btn-primary">CSS</button>
    <button id="javascript" class="btn btn-primary">JavaScript</button>
    <button id="python" class="btn btn-primary">Python</button>
    <button id="php" class="btn btn-primary">PHP</button>
    <button id="csharp" class="btn btn-primary">C#</button>
  `;

  utils_renderToDOM('#filter-buttons', domString);
};

/* harmony default export */ const filterButtons = (filterBtn);

;// CONCATENATED MODULE: ./utils/clearDom.js
const clearDom = () => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#filter-buttons').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#cards').innerHTML = '';
};

/* harmony default export */ const utils_clearDom = (clearDom);

;// CONCATENATED MODULE: ./pages/cards.js




const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#cards', domString);
};

const showCards = (array) => {
  utils_clearDom();
  filterButtons();
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.definition}</p>
            <p class="card-text">${item.language}</p>
            <hr>
            <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">📝</i>
            <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">❌</i>
            <hr>
            <p class="card-text">${item.time_submitted}</p>
        </div>
      </div>`;
  });
  utils_renderToDOM('#cards', domString);
};



;// CONCATENATED MODULE: ./components/forms/addLanguageForm.js




const languages = ['html', 'css', 'javascript', 'python', 'php', 'c#'];

const languageOptions = languages.map((language) => `<option value="${language}">${language}</option>`).join('');

const addCardForm = (user, obj = {}) => {
  utils_clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="definition">Definition</label>
      <textarea class="form-control" placeholder="Card Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
    </div>
    <div class="form-group">
      <label for="language">Language</label>
      <select class="form-control" id="language" required>
        <option value="">Select a language</option>
        ${languageOptions}
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit Card</button>
  </form>`;

  utils_renderToDOM('#form-container', domString);
  getSingleCard(user, `${obj.author_id || ''}`);
};

/* harmony default export */ const addLanguageForm = (addCardForm);

;// CONCATENATED MODULE: ./components/events/domEvents.js




const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Confirm Delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey).then(() => {
          getCards(user.uid).then(showCards);
        });
      }
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addLanguageForm(user.uid, cardObj));
    }
  });
};

/* harmony default export */ const events_domEvents = (domEvents);

;// CONCATENATED MODULE: ./components/events/formEvents.js



const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        time_submitted: new Date(),
        uid: user.uid,
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        time_submitted: new Date(),
        uid: user.uid,
        firebaseKey,
      };
      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};

/* harmony default export */ const events_formEvents = (formEvents);

;// CONCATENATED MODULE: ./components/shared/navBar.js


const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
      <div class="container-fluid">
        <a class="nav-link" href="#" id="all-cards">
          Vocab-YOU-Lary<span class="sr-only">(current)</span>
        </a>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="card-form">
                Create Entry<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
      </div>
    </nav>`;
  utils_renderToDOM('#navigation', domString);
};

/* harmony default export */ const shared_navBar = (navBar);

;// CONCATENATED MODULE: ./components/buttons/logoutButton.js


const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

/* harmony default export */ const buttons_logoutButton = (logoutButton);

;// CONCATENATED MODULE: ./components/events/navigationEvents.js





const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#card-form').addEventListener('click', () => {
    addLanguageForm(user.uid);
  });

  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });

  document.querySelector('#filter-buttons').addEventListener('click', (event) => {
    const language = event.target.id;

    getCards(user.uid).then((cards) => {
      const filteredCards = cards.filter((card) => card.language === language);
      showCards(filteredCards);
    });
  });
};

/* harmony default export */ const events_navigationEvents = (navigationEvents);

;// CONCATENATED MODULE: ./utils/startApp.js










const startApp = (user) => {
  shared_domBuilder(user);
  events_domEvents(user);
  events_formEvents(user);
  shared_navBar();
  buttons_logoutButton();
  events_navigationEvents(user);
  filterButtons();

  getCards(user.uid).then(showCards);
};
/* harmony default export */ const utils_startApp = (startApp);

;// CONCATENATED MODULE: ./utils/viewDirector.js






const ViewDirectorBasedOnUserAuthStatus = () => {
  index_esm.initializeApp(utils_client);
  index_esm.auth().onAuthStateChanged((user) => {
    if (user) {
      utils_startApp(user);
    } else {
      buttons_loginButton();
    }
  });
};

/* harmony default export */ const viewDirector = (ViewDirectorBasedOnUserAuthStatus);

;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains_contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle_getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js








function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle_getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle_getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle_getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle_getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle_getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains_contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle_getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums_top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function eventListeners_effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: eventListeners_effect,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js




function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle_getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle_getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle_getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains_contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? enums_top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/index.js









;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper-lite.js





var popper_lite_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles];
var popper_lite_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: popper_lite_defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/index.js

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/bootstrap/dist/js/bootstrap.esm.js
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)

const toType = object => {
  if (object === null || object === undefined) {
    return `${object}`;
  }

  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * Public Util API
 */


const getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

const getSelector = element => {
  let selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    let hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
      hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
    }

    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
  }

  return selector;
};

const getSelectorFromElement = element => {
  const selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

const getElementFromSelector = element => {
  const selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END));
};

const bootstrap_esm_isElement = object => {
  if (!object || typeof object !== 'object') {
    return false;
  }

  if (typeof object.jquery !== 'undefined') {
    object = object[0];
  }

  return typeof object.nodeType !== 'undefined';
};

const getElement = object => {
  // it's a jQuery object or a node element
  if (bootstrap_esm_isElement(object)) {
    return object.jquery ? object[0] : object;
  }

  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(object);
  }

  return null;
};

const isVisible = element => {
  if (!bootstrap_esm_isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'; // Handle `details` element as its content may falsie appear visible when it is closed

  const closedDetails = element.closest('details:not([open])');

  if (!closedDetails) {
    return elementIsVisible;
  }

  if (closedDetails !== element) {
    const summary = element.closest('summary');

    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }

    if (summary === null) {
      return false;
    }
  }

  return elementIsVisible;
};

const isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

const findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

const bootstrap_esm_noop = () => {};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


const reflow = element => {
  element.offsetHeight; // eslint-disable-line no-unused-expressions
};

const getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return window.jQuery;
  }

  return null;
};

const DOMContentLoadedCallbacks = [];

const onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', () => {
        for (const callback of DOMContentLoadedCallbacks) {
          callback();
        }
      });
    }

    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};

const isRTL = () => document.documentElement.dir === 'rtl';

const defineJQueryPlugin = plugin => {
  onDOMContentLoaded(() => {
    const $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};

const execute = callback => {
  if (typeof callback === 'function') {
    callback();
  }
};

const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }

  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;

  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };

  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */


const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length;
  let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
  // depending on the direction and if cycle is allowed

  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }

  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }

  return list[Math.max(0, Math.min(index, listLength - 1))];
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage

let uidEvent = 1;
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * Private methods
 */

function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}

function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);

    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }

        hydrateObj(event, {
          delegateTarget: target
        });

        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn);
        }

        return fn.apply(target, [event]);
      }
    }
  };
}

function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
}

function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check

  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);

  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }

  return [isDelegated, callable, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does

  if (originalTypeEvent in customEvents) {
    const wrapFunction = fn => {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };

    callable = wrapFunction(callable);
  }

  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);

  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }

  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
  const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn.delegationSelector = isDelegated ? handler : null;
  fn.callable = callable;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, isDelegated);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};

  for (const handlerKey of Object.keys(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      const event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}

function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}

const EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },

  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },

  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getElementEvents(element);
    const storeElementEvent = events[typeEvent] || {};
    const isNamespace = originalTypeEvent.startsWith('.');

    if (typeof callable !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!Object.keys(storeElementEvent).length) {
        return;
      }

      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }

    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }

    for (const keyHandlers of Object.keys(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        const event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },

  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    const $ = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    let jQueryEvent = null;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    let evt = new Event(event, {
      bubbles,
      cancelable: true
    });
    evt = hydrateObj(evt, args);

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }

    return evt;
  }

};

function hydrateObj(obj, meta) {
  for (const [key, value] of Object.entries(meta || {})) {
    try {
      obj[key] = value;
    } catch (_unused) {
      Object.defineProperty(obj, key, {
        configurable: true,

        get() {
          return value;
        }

      });
    }
  }

  return obj;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */
const elementMap = new Map();
const Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }

    const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }

    instanceMap.set(key, instance);
  },

  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }

    return null;
  },

  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }

    const instanceMap = elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
function normalizeData(value) {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (value === Number(value).toString()) {
    return Number(value);
  }

  if (value === '' || value === 'null') {
    return null;
  }

  if (typeof value !== 'string') {
    return value;
  }

  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },

  getDataAttributes(element) {
    if (!element) {
      return {};
    }

    const attributes = {};
    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }

    return attributes;
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Class definition
 */

class Config {
  // Getters
  static get Default() {
    return {};
  }

  static get DefaultType() {
    return {};
  }

  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }

  _getConfig(config) {
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);

    this._typeCheckConfig(config);

    return config;
  }

  _configAfterMerge(config) {
    return config;
  }

  _mergeConfigObj(config, element) {
    const jsonConfig = bootstrap_esm_isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

    return { ...this.constructor.Default,
      ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
      ...(bootstrap_esm_isElement(element) ? Manipulator.getDataAttributes(element) : {}),
      ...(typeof config === 'object' ? config : {})
    };
  }

  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const property of Object.keys(configTypes)) {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = bootstrap_esm_isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    }
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const VERSION = '5.2.3';
/**
 * Class definition
 */

class BaseComponent extends Config {
  constructor(element, config) {
    super();
    element = getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    this._config = this._getConfig(config);
    Data.set(this._element, this.constructor.DATA_KEY, this);
  } // Public


  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);

    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }

  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }

  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element);
    config = this._configAfterMerge(config);

    this._typeCheckConfig(config);

    return config;
  } // Static


  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }

  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  }

  static get VERSION() {
    return VERSION;
  }

  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }

  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }

  static eventName(name) {
    return `${name}${this.EVENT_KEY}`;
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const enableDismissTrigger = (component, method = 'hide') => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    const target = getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
  });
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$f = 'alert';
const DATA_KEY$a = 'bs.alert';
const EVENT_KEY$b = `.${DATA_KEY$a}`;
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$8 = 'show';
/**
 * Class definition
 */

class Alert extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$f;
  } // Public


  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

    if (closeEvent.defaultPrevented) {
      return;
    }

    this._element.classList.remove(CLASS_NAME_SHOW$8);

    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  } // Private


  _destroyElement() {
    this._element.remove();

    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Alert.getOrCreateInstance(this);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * Data API implementation
 */


enableDismissTrigger(Alert, 'close');
/**
 * jQuery
 */

defineJQueryPlugin(Alert);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$e = 'button';
const DATA_KEY$9 = 'bs.button';
const EVENT_KEY$a = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
/**
 * Class definition
 */

class Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$e;
  } // Public


  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Button.getOrCreateInstance(this);

      if (config === 'toggle') {
        data[config]();
      }
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
});
/**
 * jQuery
 */

defineJQueryPlugin(Button);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },

  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },

  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
  },

  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);

    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }

    return parents;
  },

  prev(element, selector) {
    let previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },

  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  },

  focusableChildren(element) {
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
  }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$d = 'swipe';
const EVENT_KEY$9 = '.bs.swipe';
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SWIPE_THRESHOLD = 40;
const Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
};
const DefaultType$c = {
  endCallback: '(function|null)',
  leftCallback: '(function|null)',
  rightCallback: '(function|null)'
};
/**
 * Class definition
 */

class Swipe extends Config {
  constructor(element, config) {
    super();
    this._element = element;

    if (!element || !Swipe.isSupported()) {
      return;
    }

    this._config = this._getConfig(config);
    this._deltaX = 0;
    this._supportPointerEvents = Boolean(window.PointerEvent);

    this._initEvents();
  } // Getters


  static get Default() {
    return Default$c;
  }

  static get DefaultType() {
    return DefaultType$c;
  }

  static get NAME() {
    return NAME$d;
  } // Public


  dispose() {
    EventHandler.off(this._element, EVENT_KEY$9);
  } // Private


  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX;
      return;
    }

    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX;
    }
  }

  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX;
    }

    this._handleSwipe();

    execute(this._config.endCallback);
  }

  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
  }

  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX);

    if (absDeltaX <= SWIPE_THRESHOLD) {
      return;
    }

    const direction = absDeltaX / this._deltaX;
    this._deltaX = 0;

    if (!direction) {
      return;
    }

    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
  }

  _initEvents() {
    if (this._supportPointerEvents) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));

      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
    }
  }

  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
  } // Static


  static isSupported() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$c = 'carousel';
const DATA_KEY$8 = 'bs.carousel';
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = '.data-api';
const ARROW_LEFT_KEY$1 = 'ArrowLeft';
const ARROW_RIGHT_KEY$1 = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
const EVENT_SLID = `slid${EVENT_KEY$8}`;
const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
const Default$b = {
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  ride: false,
  touch: true,
  wrap: true
};
const DefaultType$b = {
  interval: '(number|boolean)',
  // TODO:v6 remove boolean support
  keyboard: 'boolean',
  pause: '(string|boolean)',
  ride: '(boolean|string)',
  touch: 'boolean',
  wrap: 'boolean'
};
/**
 * Class definition
 */

class Carousel extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._interval = null;
    this._activeElement = null;
    this._isSliding = false;
    this.touchTimeout = null;
    this._swipeHelper = null;
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);

    this._addEventListeners();

    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle();
    }
  } // Getters


  static get Default() {
    return Default$b;
  }

  static get DefaultType() {
    return DefaultType$b;
  }

  static get NAME() {
    return NAME$c;
  } // Public


  next() {
    this._slide(ORDER_NEXT);
  }

  nextWhenVisible() {
    // FIXME TODO use `document.visibilityState`
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }

  prev() {
    this._slide(ORDER_PREV);
  }

  pause() {
    if (this._isSliding) {
      triggerTransitionEnd(this._element);
    }

    this._clearInterval();
  }

  cycle() {
    this._clearInterval();

    this._updateInterval();

    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }

  _maybeEnableCycle() {
    if (!this._config.ride) {
      return;
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
      return;
    }

    this.cycle();
  }

  to(index) {
    const items = this._getItems();

    if (index > items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }

    const activeIndex = this._getItemIndex(this._getActive());

    if (activeIndex === index) {
      return;
    }

    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

    this._slide(order, items[index]);
  }

  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose();
    }

    super.dispose();
  } // Private


  _configAfterMerge(config) {
    config.defaultInterval = config.interval;
    return config;
  }

  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
    }

    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
    }

    if (this._config.touch && Swipe.isSupported()) {
      this._addTouchEventListeners();
    }
  }

  _addTouchEventListeners() {
    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
      EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
    }

    const endCallBack = () => {
      if (this._config.pause !== 'hover') {
        return;
      } // If it's a touch-enabled device, mouseenter/leave are fired as
      // part of the mouse compatibility events on first tap - the carousel
      // would stop cycling until user tapped out of it;
      // here, we listen for touchend, explicitly pause the carousel
      // (as if it's the second time we tap on it, mouseenter compat event
      // is NOT fired) and after a timeout (to allow for mouse compatibility
      // events to fire) we explicitly restart cycling


      this.pause();

      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout);
      }

      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
    };

    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    };
    this._swipeHelper = new Swipe(this._element, swipeConfig);
  }

  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    const direction = KEY_TO_DIRECTION[event.key];

    if (direction) {
      event.preventDefault();

      this._slide(this._directionToOrder(direction));
    }
  }

  _getItemIndex(element) {
    return this._getItems().indexOf(element);
  }

  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return;
    }

    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
    activeIndicator.removeAttribute('aria-current');
    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
      newActiveIndicator.setAttribute('aria-current', 'true');
    }
  }

  _updateInterval() {
    const element = this._activeElement || this._getActive();

    if (!element) {
      return;
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
    this._config.interval = elementInterval || this._config.defaultInterval;
  }

  _slide(order, element = null) {
    if (this._isSliding) {
      return;
    }

    const activeElement = this._getActive();

    const isNext = order === ORDER_NEXT;
    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);

    if (nextElement === activeElement) {
      return;
    }

    const nextElementIndex = this._getItemIndex(nextElement);

    const triggerEvent = eventName => {
      return EventHandler.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      });
    };

    const slideEvent = triggerEvent(EVENT_SLIDE);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      // todo: change tests that use empty divs to avoid this check
      return;
    }

    const isCycling = Boolean(this._interval);
    this.pause();
    this._isSliding = true;

    this._setActiveIndicatorElement(nextElementIndex);

    this._activeElement = nextElement;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
    nextElement.classList.add(orderClassName);
    reflow(nextElement);
    activeElement.classList.add(directionalClassName);
    nextElement.classList.add(directionalClassName);

    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
      this._isSliding = false;
      triggerEvent(EVENT_SLID);
    };

    this._queueCallback(completeCallBack, activeElement, this._isAnimated());

    if (isCycling) {
      this.cycle();
    }
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE);
  }

  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  }

  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element);
  }

  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  _directionToOrder(direction) {
    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }

    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  }

  _orderToDirection(order) {
    if (isRTL()) {
      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }

    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Carousel.getOrCreateInstance(this, config);

      if (typeof config === 'number') {
        data.to(config);
        return;
      }

      if (typeof config === 'string') {
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
  const target = getElementFromSelector(this);

  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return;
  }

  event.preventDefault();
  const carousel = Carousel.getOrCreateInstance(target);
  const slideIndex = this.getAttribute('data-bs-slide-to');

  if (slideIndex) {
    carousel.to(slideIndex);

    carousel._maybeEnableCycle();

    return;
  }

  if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
    carousel.next();

    carousel._maybeEnableCycle();

    return;
  }

  carousel.prev();

  carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel);
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(Carousel);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$b = 'collapse';
const DATA_KEY$7 = 'bs.collapse';
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = '.data-api';
const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const Default$a = {
  parent: null,
  toggle: true
};
const DefaultType$a = {
  parent: '(null|element)',
  toggle: 'boolean'
};
/**
 * Class definition
 */

class Collapse extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isTransitioning = false;
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (const elem of toggleList) {
      const selector = getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);

      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem);
      }
    }

    this._initializeChildren();

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }

    if (this._config.toggle) {
      this.toggle();
    }
  } // Getters


  static get Default() {
    return Default$a;
  }

  static get DefaultType() {
    return DefaultType$a;
  }

  static get NAME() {
    return NAME$b;
  } // Public


  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }

    let activeChildren = []; // find active children

    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
        toggle: false
      }));
    }

    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return;
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);

    if (startEvent.defaultPrevented) {
      return;
    }

    for (const activeInstance of activeChildren) {
      activeInstance.hide();
    }

    const dimension = this._getDimension();

    this._element.classList.remove(CLASS_NAME_COLLAPSE);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    this._addAriaAndCollapsedClass(this._triggerArray, true);

    this._isTransitioning = true;

    const complete = () => {
      this._isTransitioning = false;

      this._element.classList.remove(CLASS_NAME_COLLAPSING);

      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      this._element.style[dimension] = '';
      EventHandler.trigger(this._element, EVENT_SHOWN$6);
    };

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;

    this._queueCallback(complete, this._element, true);

    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }

  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);

    if (startEvent.defaultPrevented) {
      return;
    }

    const dimension = this._getDimension();

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

    for (const trigger of this._triggerArray) {
      const element = getElementFromSelector(trigger);

      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }

    this._isTransitioning = true;

    const complete = () => {
      this._isTransitioning = false;

      this._element.classList.remove(CLASS_NAME_COLLAPSING);

      this._element.classList.add(CLASS_NAME_COLLAPSE);

      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
    };

    this._element.style[dimension] = '';

    this._queueCallback(complete, this._element, true);
  }

  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$7);
  } // Private


  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle); // Coerce string values

    config.parent = getElement(config.parent);
    return config;
  }

  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  }

  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }

    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);

    for (const element of children) {
      const selected = getElementFromSelector(element);

      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    }
  }

  _getFirstLevelChildren(selector) {
    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth

    return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
  }

  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }

    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
      element.setAttribute('aria-expanded', isOpen);
    }
  } // Static


  static jQueryInterface(config) {
    const _config = {};

    if (typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false;
    }

    return this.each(function () {
      const data = Collapse.getOrCreateInstance(this, _config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  const selector = getSelectorFromElement(this);
  const selectorElements = SelectorEngine.find(selector);

  for (const element of selectorElements) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(Collapse);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$a = 'dropdown';
const DATA_KEY$6 = 'bs.dropdown';
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const TAB_KEY$1 = 'Tab';
const ARROW_UP_KEY$1 = 'ArrowUp';
const ARROW_DOWN_KEY$1 = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SHOW$6 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR = '.navbar';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const PLACEMENT_TOPCENTER = 'top';
const PLACEMENT_BOTTOMCENTER = 'bottom';
const Default$9 = {
  autoClose: true,
  boundary: 'clippingParents',
  display: 'dynamic',
  offset: [0, 2],
  popperConfig: null,
  reference: 'toggle'
};
const DefaultType$9 = {
  autoClose: '(boolean|string)',
  boundary: '(string|element)',
  display: 'string',
  offset: '(array|string|function)',
  popperConfig: '(null|object|function)',
  reference: '(string|element|object)'
};
/**
 * Class definition
 */

class Dropdown extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._popper = null;
    this._parent = this._element.parentNode; // dropdown wrapper
    // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
    this._inNavbar = this._detectNavbar();
  } // Getters


  static get Default() {
    return Default$9;
  }

  static get DefaultType() {
    return DefaultType$9;
  }

  static get NAME() {
    return NAME$a;
  } // Public


  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }

  show() {
    if (isDisabled(this._element) || this._isShown()) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._createPopper(); // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, 'mouseover', bootstrap_esm_noop);
      }
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.add(CLASS_NAME_SHOW$6);

    this._element.classList.add(CLASS_NAME_SHOW$6);

    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
  }

  hide() {
    if (isDisabled(this._element) || !this._isShown()) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };

    this._completeHide(relatedTarget);
  }

  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }

    super.dispose();
  }

  update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
      this._popper.update();
    }
  } // Private


  _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    } // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support


    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, 'mouseover', bootstrap_esm_noop);
      }
    }

    if (this._popper) {
      this._popper.destroy();
    }

    this._menu.classList.remove(CLASS_NAME_SHOW$6);

    this._element.classList.remove(CLASS_NAME_SHOW$6);

    this._element.setAttribute('aria-expanded', 'false');

    Manipulator.removeDataAttribute(this._menu, 'popper');
    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
  }

  _getConfig(config) {
    config = super._getConfig(config);

    if (typeof config.reference === 'object' && !bootstrap_esm_isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }

    return config;
  }

  _createPopper() {
    if (typeof lib_namespaceObject === 'undefined') {
      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
    }

    let referenceElement = this._element;

    if (this._config.reference === 'parent') {
      referenceElement = this._parent;
    } else if (bootstrap_esm_isElement(this._config.reference)) {
      referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === 'object') {
      referenceElement = this._config.reference;
    }

    const popperConfig = this._getPopperConfig();

    this._popper = popper_createPopper(referenceElement, this._menu, popperConfig);
  }

  _isShown() {
    return this._menu.classList.contains(CLASS_NAME_SHOW$6);
  }

  _getPlacement() {
    const parentDropdown = this._parent;

    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
      return PLACEMENT_TOPCENTER;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
      return PLACEMENT_BOTTOMCENTER;
    } // We need to trim the value because custom properties can also include spaces


    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }

    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }

  _detectNavbar() {
    return this._element.closest(SELECTOR_NAVBAR) !== null;
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(value => Number.parseInt(value, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    }; // Disable Popper if we have a static display or Dropdown is in Navbar

    if (this._inNavbar || this._config.display === 'static') {
      Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove

      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }

    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _selectMenuItem({
    key,
    target
  }) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));

    if (!items.length) {
      return;
    } // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY


    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Dropdown.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

  static clearMenus(event) {
    if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
      return;
    }

    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);

    for (const toggle of openToggles) {
      const context = Dropdown.getInstance(toggle);

      if (!context || context._config.autoClose === false) {
        continue;
      }

      const composedPath = event.composedPath();
      const isMenuTarget = composedPath.includes(context._menu);

      if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
        continue;
      } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


      if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
        continue;
      }

      const relatedTarget = {
        relatedTarget: context._element
      };

      if (event.type === 'click') {
        relatedTarget.clickEvent = event;
      }

      context._completeHide(relatedTarget);
    }
  }

  static dataApiKeydownHandler(event) {
    // If not an UP | DOWN | ESCAPE key => not a dropdown command
    // If input/textarea && if key is other than ESCAPE => not a dropdown command
    const isInput = /input|textarea/i.test(event.target.tagName);
    const isEscapeEvent = event.key === ESCAPE_KEY$2;
    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);

    if (!isUpOrDownEvent && !isEscapeEvent) {
      return;
    }

    if (isInput && !isEscapeEvent) {
      return;
    }

    event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
    const instance = Dropdown.getOrCreateInstance(getToggleButton);

    if (isUpOrDownEvent) {
      event.stopPropagation();
      instance.show();

      instance._selectMenuItem(event);

      return;
    }

    if (instance._isShown()) {
      // else is escape and we check if it is shown
      event.stopPropagation();
      instance.hide();
      getToggleButton.focus();
    }
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * jQuery
 */

defineJQueryPlugin(Dropdown);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';
const PROPERTY_PADDING = 'padding-right';
const PROPERTY_MARGIN = 'margin-right';
/**
 * Class definition
 */

class ScrollBarHelper {
  constructor() {
    this._element = document.body;
  } // Public


  getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }

  hide() {
    const width = this.getWidth();

    this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


    this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);

    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
  }

  reset() {
    this._resetElementAttributes(this._element, 'overflow');

    this._resetElementAttributes(this._element, PROPERTY_PADDING);

    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);

    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
  }

  isOverflowing() {
    return this.getWidth() > 0;
  } // Private


  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow');

    this._element.style.overflow = 'hidden';
  }

  _setElementAttributes(selector, styleProperty, callback) {
    const scrollbarWidth = this.getWidth();

    const manipulationCallBack = element => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }

      this._saveInitialAttribute(element, styleProperty);

      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
  }

  _saveInitialAttribute(element, styleProperty) {
    const actualValue = element.style.getPropertyValue(styleProperty);

    if (actualValue) {
      Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
  }

  _resetElementAttributes(selector, styleProperty) {
    const manipulationCallBack = element => {
      const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero

      if (value === null) {
        element.style.removeProperty(styleProperty);
        return;
      }

      Manipulator.removeDataAttribute(element, styleProperty);
      element.style.setProperty(styleProperty, value);
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
  }

  _applyManipulationCallback(selector, callBack) {
    if (bootstrap_esm_isElement(selector)) {
      callBack(selector);
      return;
    }

    for (const sel of SelectorEngine.find(selector, this._element)) {
      callBack(sel);
    }
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$9 = 'backdrop';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
const Default$8 = {
  className: 'modal-backdrop',
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: 'body' // give the choice to place backdrop under different elements

};
const DefaultType$8 = {
  className: 'string',
  clickCallback: '(function|null)',
  isAnimated: 'boolean',
  isVisible: 'boolean',
  rootElement: '(element|string)'
};
/**
 * Class definition
 */

class Backdrop extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  } // Getters


  static get Default() {
    return Default$8;
  }

  static get DefaultType() {
    return DefaultType$8;
  }

  static get NAME() {
    return NAME$9;
  } // Public


  show(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }

    this._append();

    const element = this._getElement();

    if (this._config.isAnimated) {
      reflow(element);
    }

    element.classList.add(CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
      execute(callback);
    });
  }

  hide(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }

    this._getElement().classList.remove(CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
      this.dispose();
      execute(callback);
    });
  }

  dispose() {
    if (!this._isAppended) {
      return;
    }

    EventHandler.off(this._element, EVENT_MOUSEDOWN);

    this._element.remove();

    this._isAppended = false;
  } // Private


  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement('div');
      backdrop.className = this._config.className;

      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$4);
      }

      this._element = backdrop;
    }

    return this._element;
  }

  _configAfterMerge(config) {
    // use getElement() with the default "body" to get a fresh Element on each instantiation
    config.rootElement = getElement(config.rootElement);
    return config;
  }

  _append() {
    if (this._isAppended) {
      return;
    }

    const element = this._getElement();

    this._config.rootElement.append(element);

    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
      execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }

  _emulateAnimation(callback) {
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$8 = 'focustrap';
const DATA_KEY$5 = 'bs.focustrap';
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
const TAB_KEY = 'Tab';
const TAB_NAV_FORWARD = 'forward';
const TAB_NAV_BACKWARD = 'backward';
const Default$7 = {
  autofocus: true,
  trapElement: null // The element to trap focus inside of

};
const DefaultType$7 = {
  autofocus: 'boolean',
  trapElement: 'element'
};
/**
 * Class definition
 */

class FocusTrap extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  } // Getters


  static get Default() {
    return Default$7;
  }

  static get DefaultType() {
    return DefaultType$7;
  }

  static get NAME() {
    return NAME$8;
  } // Public


  activate() {
    if (this._isActive) {
      return;
    }

    if (this._config.autofocus) {
      this._config.trapElement.focus();
    }

    EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
    this._isActive = true;
  }

  deactivate() {
    if (!this._isActive) {
      return;
    }

    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$5);
  } // Private


  _handleFocusin(event) {
    const {
      trapElement
    } = this._config;

    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return;
    }

    const elements = SelectorEngine.focusableChildren(trapElement);

    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }

  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return;
    }

    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$7 = 'modal';
const DATA_KEY$4 = 'bs.modal';
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const DATA_API_KEY$2 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_SHOW$4 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const OPEN_SELECTOR$1 = '.modal.show';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const Default$6 = {
  backdrop: true,
  focus: true,
  keyboard: true
};
const DefaultType$6 = {
  backdrop: '(boolean|string)',
  focus: 'boolean',
  keyboard: 'boolean'
};
/**
 * Class definition
 */

class Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();

    this._addEventListeners();
  } // Getters


  static get Default() {
    return Default$6;
  }

  static get DefaultType() {
    return DefaultType$6;
  }

  static get NAME() {
    return NAME$7;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    this._isTransitioning = true;

    this._scrollBar.hide();

    document.body.classList.add(CLASS_NAME_OPEN);

    this._adjustDialog();

    this._backdrop.show(() => this._showElement(relatedTarget));
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;
    this._isTransitioning = true;

    this._focustrap.deactivate();

    this._element.classList.remove(CLASS_NAME_SHOW$4);

    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
  }

  dispose() {
    for (const htmlElement of [window, this._dialog]) {
      EventHandler.off(htmlElement, EVENT_KEY$4);
    }

    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  }

  handleUpdate() {
    this._adjustDialog();
  } // Private


  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }

  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }

  _showElement(relatedTarget) {
    // try to append dynamic modal
    if (!document.body.contains(this._element)) {
      document.body.append(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;
    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOW$4);

    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }

      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
        relatedTarget
      });
    };

    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
  }

  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
      if (event.key !== ESCAPE_KEY$1) {
        return;
      }

      if (this._config.keyboard) {
        event.preventDefault();
        this.hide();
        return;
      }

      this._triggerBackdropTransition();
    });
    EventHandler.on(window, EVENT_RESIZE$1, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog();
      }
    });
    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
      // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
      EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
        if (this._element !== event.target || this._element !== event2.target) {
          return;
        }

        if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();

          return;
        }

        if (this._config.backdrop) {
          this.hide();
        }
      });
    });
  }

  _hideModal() {
    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);

      this._resetAdjustments();

      this._scrollBar.reset();

      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
    });
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  }

  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed

    if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return;
    }

    if (!isModalOverflowing) {
      this._element.style.overflowY = 'hidden';
    }

    this._element.classList.add(CLASS_NAME_STATIC);

    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC);

      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY;
      }, this._dialog);
    }, this._dialog);

    this._element.focus();
  }
  /**
   * The following methods are used to handle overflowing modals
   */


  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    const scrollbarWidth = this._scrollBar.getWidth();

    const isBodyOverflowing = scrollbarWidth > 0;

    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL() ? 'paddingLeft' : 'paddingRight';
      this._element.style[property] = `${scrollbarWidth}px`;
    }

    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? 'paddingRight' : 'paddingLeft';
      this._element.style[property] = `${scrollbarWidth}px`;
    }
  }

  _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  } // Static


  static jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      const data = Modal.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](relatedTarget);
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  const target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$4, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$4, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  }); // avoid conflict when clicking modal toggler while another one is open

  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide();
  }

  const data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * jQuery
 */

defineJQueryPlugin(Modal);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$6 = 'offcanvas';
const DATA_KEY$3 = 'bs.offcanvas';
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const DATA_API_KEY$1 = '.data-api';
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
const ESCAPE_KEY = 'Escape';
const CLASS_NAME_SHOW$3 = 'show';
const CLASS_NAME_SHOWING$1 = 'showing';
const CLASS_NAME_HIDING = 'hiding';
const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const OPEN_SELECTOR = '.offcanvas.show';
const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const Default$5 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
const DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  scroll: 'boolean'
};
/**
 * Class definition
 */

class Offcanvas extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();

    this._addEventListeners();
  } // Getters


  static get Default() {
    return Default$5;
  }

  static get DefaultType() {
    return DefaultType$5;
  }

  static get NAME() {
    return NAME$6;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown) {
      return;
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;

    this._backdrop.show();

    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.classList.add(CLASS_NAME_SHOWING$1);

    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate();
      }

      this._element.classList.add(CLASS_NAME_SHOW$3);

      this._element.classList.remove(CLASS_NAME_SHOWING$1);

      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };

    this._queueCallback(completeCallBack, this._element, true);
  }

  hide() {
    if (!this._isShown) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._focustrap.deactivate();

    this._element.blur();

    this._isShown = false;

    this._element.classList.add(CLASS_NAME_HIDING);

    this._backdrop.hide();

    const completeCallback = () => {
      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      if (!this._config.scroll) {
        new ScrollBarHelper().reset();
      }

      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    };

    this._queueCallback(completeCallback, this._element, true);
  }

  dispose() {
    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  } // Private


  _initializeBackDrop() {
    const clickCallback = () => {
      if (this._config.backdrop === 'static') {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }

      this.hide();
    }; // 'static' option will be translated to true, and booleans will keep their value


    const isVisible = Boolean(this._config.backdrop);
    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible ? clickCallback : null
    });
  }

  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }

  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
      if (event.key !== ESCAPE_KEY) {
        return;
      }

      if (!this._config.keyboard) {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }

      this.hide();
    });
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Offcanvas.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  const target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  EventHandler.one(target, EVENT_HIDDEN$3, () => {
    // focus on trigger when it is closed
    if (isVisible(this)) {
      this.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide();
  }

  const data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
    Offcanvas.getOrCreateInstance(selector).show();
  }
});
EventHandler.on(window, EVENT_RESIZE, () => {
  for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
    if (getComputedStyle(element).position !== 'fixed') {
      Offcanvas.getOrCreateInstance(element).hide();
    }
  }
});
enableDismissTrigger(Offcanvas);
/**
 * jQuery
 */

defineJQueryPlugin(Offcanvas);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

const allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
    }

    return true;
  } // Check if a regular expression validates the attribute.


  return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
};

const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFunction && typeof sanitizeFunction === 'function') {
    return sanitizeFunction(unsafeHtml);
  }

  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase();

    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }

    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    }
  }

  return createdDocument.body.innerHTML;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$5 = 'TemplateFactory';
const Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: '',
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: '<div></div>'
};
const DefaultType$4 = {
  allowList: 'object',
  content: 'object',
  extraClass: '(string|function)',
  html: 'boolean',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  template: 'string'
};
const DefaultContentType = {
  entry: '(string|element|function|null)',
  selector: '(string|element)'
};
/**
 * Class definition
 */

class TemplateFactory extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
  } // Getters


  static get Default() {
    return Default$4;
  }

  static get DefaultType() {
    return DefaultType$4;
  }

  static get NAME() {
    return NAME$5;
  } // Public


  getContent() {
    return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
  }

  hasContent() {
    return this.getContent().length > 0;
  }

  changeContent(content) {
    this._checkContent(content);

    this._config.content = { ...this._config.content,
      ...content
    };
    return this;
  }

  toHtml() {
    const templateWrapper = document.createElement('div');
    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

    for (const [selector, text] of Object.entries(this._config.content)) {
      this._setContent(templateWrapper, text, selector);
    }

    const template = templateWrapper.children[0];

    const extraClass = this._resolvePossibleFunction(this._config.extraClass);

    if (extraClass) {
      template.classList.add(...extraClass.split(' '));
    }

    return template;
  } // Private


  _typeCheckConfig(config) {
    super._typeCheckConfig(config);

    this._checkContent(config.content);
  }

  _checkContent(arg) {
    for (const [selector, content] of Object.entries(arg)) {
      super._typeCheckConfig({
        selector,
        entry: content
      }, DefaultContentType);
    }
  }

  _setContent(template, content, selector) {
    const templateElement = SelectorEngine.findOne(selector, template);

    if (!templateElement) {
      return;
    }

    content = this._resolvePossibleFunction(content);

    if (!content) {
      templateElement.remove();
      return;
    }

    if (bootstrap_esm_isElement(content)) {
      this._putElementInTemplate(getElement(content), templateElement);

      return;
    }

    if (this._config.html) {
      templateElement.innerHTML = this._maybeSanitize(content);
      return;
    }

    templateElement.textContent = content;
  }

  _maybeSanitize(arg) {
    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
  }

  _resolvePossibleFunction(arg) {
    return typeof arg === 'function' ? arg(this) : arg;
  }

  _putElementInTemplate(element, templateElement) {
    if (this._config.html) {
      templateElement.innerHTML = '';
      templateElement.append(element);
      return;
    }

    templateElement.textContent = element.textContent;
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$4 = 'tooltip';
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$2 = 'show';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = 'hide.bs.modal';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
const EVENT_HIDE$2 = 'hide';
const EVENT_HIDDEN$2 = 'hidden';
const EVENT_SHOW$2 = 'show';
const EVENT_SHOWN$2 = 'shown';
const EVENT_INSERTED = 'inserted';
const EVENT_CLICK$1 = 'click';
const EVENT_FOCUSIN$1 = 'focusin';
const EVENT_FOCUSOUT$1 = 'focusout';
const EVENT_MOUSEENTER = 'mouseenter';
const EVENT_MOUSELEAVE = 'mouseleave';
const AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
const Default$3 = {
  allowList: DefaultAllowlist,
  animation: true,
  boundary: 'clippingParents',
  container: false,
  customClass: '',
  delay: 0,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  html: false,
  offset: [0, 0],
  placement: 'top',
  popperConfig: null,
  sanitize: true,
  sanitizeFn: null,
  selector: false,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  title: '',
  trigger: 'hover focus'
};
const DefaultType$3 = {
  allowList: 'object',
  animation: 'boolean',
  boundary: '(string|element)',
  container: '(string|element|boolean)',
  customClass: '(string|function)',
  delay: '(number|object)',
  fallbackPlacements: 'array',
  html: 'boolean',
  offset: '(array|string|function)',
  placement: '(string|function)',
  popperConfig: '(null|object|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  selector: '(string|boolean)',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string'
};
/**
 * Class definition
 */

class Tooltip extends BaseComponent {
  constructor(element, config) {
    if (typeof lib_namespaceObject === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    super(element, config); // Private

    this._isEnabled = true;
    this._timeout = 0;
    this._isHovered = null;
    this._activeTrigger = {};
    this._popper = null;
    this._templateFactory = null;
    this._newContent = null; // Protected

    this.tip = null;

    this._setListeners();

    if (!this._config.selector) {
      this._fixTitle();
    }
  } // Getters


  static get Default() {
    return Default$3;
  }

  static get DefaultType() {
    return DefaultType$3;
  }

  static get NAME() {
    return NAME$4;
  } // Public


  enable() {
    this._isEnabled = true;
  }

  disable() {
    this._isEnabled = false;
  }

  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }

  toggle() {
    if (!this._isEnabled) {
      return;
    }

    this._activeTrigger.click = !this._activeTrigger.click;

    if (this._isShown()) {
      this._leave();

      return;
    }

    this._enter();
  }

  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this._element.getAttribute('data-bs-original-title')) {
      this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
    }

    this._disposePopper();

    super.dispose();
  }

  show() {
    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (!(this._isWithContent() && this._isEnabled)) {
      return;
    }

    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
    const shadowRoot = findShadowRoot(this._element);

    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);

    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    } // todo v6 remove this OR make it optional


    this._disposePopper();

    const tip = this._getTipElement();

    this._element.setAttribute('aria-describedby', tip.getAttribute('id'));

    const {
      container
    } = this._config;

    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
    }

    this._popper = this._createPopper(tip);
    tip.classList.add(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, 'mouseover', bootstrap_esm_noop);
      }
    }

    const complete = () => {
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));

      if (this._isHovered === false) {
        this._leave();
      }

      this._isHovered = false;
    };

    this._queueCallback(complete, this.tip, this._isAnimated());
  }

  hide() {
    if (!this._isShown()) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));

    if (hideEvent.defaultPrevented) {
      return;
    }

    const tip = this._getTipElement();

    tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, 'mouseover', bootstrap_esm_noop);
      }
    }

    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    this._isHovered = null; // it is a trick to support manual triggering

    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }

      if (!this._isHovered) {
        this._disposePopper();
      }

      this._element.removeAttribute('aria-describedby');

      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
    };

    this._queueCallback(complete, this.tip, this._isAnimated());
  }

  update() {
    if (this._popper) {
      this._popper.update();
    }
  } // Protected


  _isWithContent() {
    return Boolean(this._getTitle());
  }

  _getTipElement() {
    if (!this.tip) {
      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
    }

    return this.tip;
  }

  _createTipElement(content) {
    const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6


    if (!tip) {
      return null;
    }

    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only

    tip.classList.add(`bs-${this.constructor.NAME}-auto`);
    const tipId = getUID(this.constructor.NAME).toString();
    tip.setAttribute('id', tipId);

    if (this._isAnimated()) {
      tip.classList.add(CLASS_NAME_FADE$2);
    }

    return tip;
  }

  setContent(content) {
    this._newContent = content;

    if (this._isShown()) {
      this._disposePopper();

      this.show();
    }
  }

  _getTemplateFactory(content) {
    if (this._templateFactory) {
      this._templateFactory.changeContent(content);
    } else {
      this._templateFactory = new TemplateFactory({ ...this._config,
        // the `content` var has to be after `this._config`
        // to override config.content in case of popover
        content,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      });
    }

    return this._templateFactory;
  }

  _getContentForTemplate() {
    return {
      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
    };
  }

  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
  } // Private


  _initializeOnDelegatedTarget(event) {
    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }

  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
  }

  _isShown() {
    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
  }

  _createPopper(tip) {
    const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
    const attachment = AttachmentMap[placement.toUpperCase()];
    return popper_createPopper(this._element, tip, this._getPopperConfig(attachment));
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(value => Number.parseInt(value, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _resolvePossibleFunction(arg) {
    return typeof arg === 'function' ? arg.call(this._element) : arg;
  }

  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: 'flip',
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: 'preSetPlacement',
        enabled: true,
        phase: 'beforeMain',
        fn: data => {
          // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
          // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
          this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
        }
      }]
    };
    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _setListeners() {
    const triggers = this._config.trigger.split(' ');

    for (const trigger of triggers) {
      if (trigger === 'click') {
        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);

          context.toggle();
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
        EventHandler.on(this._element, eventIn, this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);

          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;

          context._enter();
        });
        EventHandler.on(this._element, eventOut, this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);

          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);

          context._leave();
        });
      }
    }

    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };

    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
  }

  _fixTitle() {
    const title = this._element.getAttribute('title');

    if (!title) {
      return;
    }

    if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
      this._element.setAttribute('aria-label', title);
    }

    this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility


    this._element.removeAttribute('title');
  }

  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = true;
      return;
    }

    this._isHovered = true;

    this._setTimeout(() => {
      if (this._isHovered) {
        this.show();
      }
    }, this._config.delay.show);
  }

  _leave() {
    if (this._isWithActiveTrigger()) {
      return;
    }

    this._isHovered = false;

    this._setTimeout(() => {
      if (!this._isHovered) {
        this.hide();
      }
    }, this._config.delay.hide);
  }

  _setTimeout(handler, timeout) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(handler, timeout);
  }

  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(true);
  }

  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);

    for (const dataAttribute of Object.keys(dataAttributes)) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
        delete dataAttributes[dataAttribute];
      }
    }

    config = { ...dataAttributes,
      ...(typeof config === 'object' && config ? config : {})
    };
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);

    this._typeCheckConfig(config);

    return config;
  }

  _configAfterMerge(config) {
    config.container = config.container === false ? document.body : getElement(config.container);

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    return config;
  }

  _getDelegateConfig() {
    const config = {};

    for (const key in this._config) {
      if (this.constructor.Default[key] !== this._config[key]) {
        config[key] = this._config[key];
      }
    }

    config.selector = false;
    config.trigger = 'manual'; // In the future can be replaced with:
    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
    // `Object.fromEntries(keysWithDifferentValues)`

    return config;
  }

  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();

      this._popper = null;
    }

    if (this.tip) {
      this.tip.remove();
      this.tip = null;
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Tooltip.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * jQuery
 */


defineJQueryPlugin(Tooltip);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$3 = 'popover';
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
const Default$2 = { ...Tooltip.Default,
  content: '',
  offset: [0, 8],
  placement: 'right',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
  trigger: 'click'
};
const DefaultType$2 = { ...Tooltip.DefaultType,
  content: '(null|string|element|function)'
};
/**
 * Class definition
 */

class Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }

  static get DefaultType() {
    return DefaultType$2;
  }

  static get NAME() {
    return NAME$3;
  } // Overrides


  _isWithContent() {
    return this._getTitle() || this._getContent();
  } // Private


  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    };
  }

  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Popover.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * jQuery
 */


defineJQueryPlugin(Popover);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY = '.data-api';
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_CLICK = `click${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_TARGET_LINKS = '[href]';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const Default$1 = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: '0px 0px -25%',
  smoothScroll: false,
  target: null,
  threshold: [0.1, 0.5, 1]
};
const DefaultType$1 = {
  offset: '(number|null)',
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: 'string',
  smoothScroll: 'boolean',
  target: 'element',
  threshold: 'array'
};
/**
 * Class definition
 */

class ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper

    this._targetLinks = new Map();
    this._observableSections = new Map();
    this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
    this._activeTarget = null;
    this._observer = null;
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    };
    this.refresh(); // initialize
  } // Getters


  static get Default() {
    return Default$1;
  }

  static get DefaultType() {
    return DefaultType$1;
  }

  static get NAME() {
    return NAME$2;
  } // Public


  refresh() {
    this._initializeTargetsAndObservables();

    this._maybeEnableSmoothScroll();

    if (this._observer) {
      this._observer.disconnect();
    } else {
      this._observer = this._getNewObserver();
    }

    for (const section of this._observableSections.values()) {
      this._observer.observe(section);
    }
  }

  dispose() {
    this._observer.disconnect();

    super.dispose();
  } // Private


  _configAfterMerge(config) {
    // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
    config.target = getElement(config.target) || document.body; // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only

    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;

    if (typeof config.threshold === 'string') {
      config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
    }

    return config;
  }

  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return;
    } // unregister any previous listeners


    EventHandler.off(this._config.target, EVENT_CLICK);
    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
      const observableSection = this._observableSections.get(event.target.hash);

      if (observableSection) {
        event.preventDefault();
        const root = this._rootElement || window;
        const height = observableSection.offsetTop - this._element.offsetTop;

        if (root.scrollTo) {
          root.scrollTo({
            top: height,
            behavior: 'smooth'
          });
          return;
        } // Chrome 60 doesn't support `scrollTo`


        root.scrollTop = height;
      }
    });
  }

  _getNewObserver() {
    const options = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver(entries => this._observerCallback(entries), options);
  } // The logic of selection


  _observerCallback(entries) {
    const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);

    const activate = entry => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;

      this._process(targetElement(entry));
    };

    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = parentScrollTop;

    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null;

        this._clearActiveClass(targetElement(entry));

        continue;
      }

      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop

      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration

        if (!parentScrollTop) {
          return;
        }

        continue;
      } // if we are scrolling up, pick the smallest offsetTop


      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry);
      }
    }
  }

  _initializeTargetsAndObservables() {
    this._targetLinks = new Map();
    this._observableSections = new Map();
    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);

    for (const anchor of targetLinks) {
      // ensure that the anchor has an id and is not disabled
      if (!anchor.hash || isDisabled(anchor)) {
        continue;
      }

      const observableSection = SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible

      if (isVisible(observableSection)) {
        this._targetLinks.set(anchor.hash, anchor);

        this._observableSections.set(anchor.hash, observableSection);
      }
    }
  }

  _process(target) {
    if (this._activeTarget === target) {
      return;
    }

    this._clearActiveClass(this._config.target);

    this._activeTarget = target;
    target.classList.add(CLASS_NAME_ACTIVE$1);

    this._activateParents(target);

    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }

  _activateParents(target) {
    // Activate dropdown parents
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
      return;
    }

    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      // Set triggered links parents as active
      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  }

  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE$1);
    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);

    for (const node of activeNodes) {
      node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = ScrollSpy.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy);
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(ScrollSpy);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const CLASS_DROPDOWN = 'dropdown';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const SELECTOR_OUTER = '.nav-item, .list-group-item';
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`

const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
/**
 * Class definition
 */

class Tab extends BaseComponent {
  constructor(element) {
    super(element);
    this._parent = this._element.closest(SELECTOR_TAB_PANEL);

    if (!this._parent) {
      return; // todo: should Throw exception on v6
      // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
    } // Set up initial aria attributes


    this._setInitialAttributes(this._parent, this._getChildren());

    EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
  } // Getters


  static get NAME() {
    return NAME$1;
  } // Public


  show() {
    // Shows this elem and deactivate the active sibling if exists
    const innerElem = this._element;

    if (this._elemIsActive(innerElem)) {
      return;
    } // Search for active tab on same parent to deactivate it


    const active = this._getActiveElem();

    const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
      relatedTarget: innerElem
    }) : null;
    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
      relatedTarget: active
    });

    if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
      return;
    }

    this._deactivate(active, innerElem);

    this._activate(innerElem, active);
  } // Private


  _activate(element, relatedElem) {
    if (!element) {
      return;
    }

    element.classList.add(CLASS_NAME_ACTIVE);

    this._activate(getElementFromSelector(element)); // Search and activate/show the proper section


    const complete = () => {
      if (element.getAttribute('role') !== 'tab') {
        element.classList.add(CLASS_NAME_SHOW$1);
        return;
      }

      element.removeAttribute('tabindex');
      element.setAttribute('aria-selected', true);

      this._toggleDropDown(element, true);

      EventHandler.trigger(element, EVENT_SHOWN$1, {
        relatedTarget: relatedElem
      });
    };

    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }

  _deactivate(element, relatedElem) {
    if (!element) {
      return;
    }

    element.classList.remove(CLASS_NAME_ACTIVE);
    element.blur();

    this._deactivate(getElementFromSelector(element)); // Search and deactivate the shown section too


    const complete = () => {
      if (element.getAttribute('role') !== 'tab') {
        element.classList.remove(CLASS_NAME_SHOW$1);
        return;
      }

      element.setAttribute('aria-selected', false);
      element.setAttribute('tabindex', '-1');

      this._toggleDropDown(element, false);

      EventHandler.trigger(element, EVENT_HIDDEN$1, {
        relatedTarget: relatedElem
      });
    };

    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }

  _keydown(event) {
    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
      return;
    }

    event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page

    event.preventDefault();
    const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
    const nextActiveElement = getNextActiveElement(this._getChildren().filter(element => !isDisabled(element)), event.target, isNext, true);

    if (nextActiveElement) {
      nextActiveElement.focus({
        preventScroll: true
      });
      Tab.getOrCreateInstance(nextActiveElement).show();
    }
  }

  _getChildren() {
    // collection of inner elements
    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
  }

  _getActiveElem() {
    return this._getChildren().find(child => this._elemIsActive(child)) || null;
  }

  _setInitialAttributes(parent, children) {
    this._setAttributeIfNotExists(parent, 'role', 'tablist');

    for (const child of children) {
      this._setInitialAttributesOnChild(child);
    }
  }

  _setInitialAttributesOnChild(child) {
    child = this._getInnerElement(child);

    const isActive = this._elemIsActive(child);

    const outerElem = this._getOuterElement(child);

    child.setAttribute('aria-selected', isActive);

    if (outerElem !== child) {
      this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
    }

    if (!isActive) {
      child.setAttribute('tabindex', '-1');
    }

    this._setAttributeIfNotExists(child, 'role', 'tab'); // set attributes to the related panel too


    this._setInitialAttributesOnTargetPanel(child);
  }

  _setInitialAttributesOnTargetPanel(child) {
    const target = getElementFromSelector(child);

    if (!target) {
      return;
    }

    this._setAttributeIfNotExists(target, 'role', 'tabpanel');

    if (child.id) {
      this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`);
    }
  }

  _toggleDropDown(element, open) {
    const outerElem = this._getOuterElement(element);

    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
      return;
    }

    const toggle = (selector, className) => {
      const element = SelectorEngine.findOne(selector, outerElem);

      if (element) {
        element.classList.toggle(className, open);
      }
    };

    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
    outerElem.setAttribute('aria-expanded', open);
  }

  _setAttributeIfNotExists(element, attribute, value) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, value);
    }
  }

  _elemIsActive(elem) {
    return elem.classList.contains(CLASS_NAME_ACTIVE);
  } // Try to get the inner element (usually the .nav-link)


  _getInnerElement(elem) {
    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
  } // Try to get the outer element (usually the .nav-item)


  _getOuterElement(elem) {
    return elem.closest(SELECTOR_OUTER) || elem;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Tab.getOrCreateInstance(this);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  Tab.getOrCreateInstance(this).show();
});
/**
 * Initialize on focus
 */

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    Tab.getOrCreateInstance(element);
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(Tab);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
const Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
/**
 * Class definition
 */

class Toast extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;

    this._setListeners();
  } // Getters


  static get Default() {
    return Default;
  }

  static get DefaultType() {
    return DefaultType;
  }

  static get NAME() {
    return NAME;
  } // Public


  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }

    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);

      EventHandler.trigger(this._element, EVENT_SHOWN);

      this._maybeScheduleHide();
    };

    this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  hide() {
    if (!this.isShown()) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);

      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };

    this._element.classList.add(CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  dispose() {
    this._clearTimeout();

    if (this.isShown()) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }

    super.dispose();
  }

  isShown() {
    return this._element.classList.contains(CLASS_NAME_SHOW);
  } // Private


  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }

    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }

    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }

  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case 'mouseover':
      case 'mouseout':
        {
          this._hasMouseInteraction = isInteracting;
          break;
        }

      case 'focusin':
      case 'focusout':
        {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
    }

    if (isInteracting) {
      this._clearTimeout();

      return;
    }

    const nextElement = event.relatedTarget;

    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }

    this._maybeScheduleHide();
  }

  _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
  }

  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Toast.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      }
    });
  }

}
/**
 * Data API implementation
 */


enableDismissTrigger(Toast);
/**
 * jQuery
 */

defineJQueryPlugin(Toast);


//# sourceMappingURL=bootstrap.esm.js.map

;// CONCATENATED MODULE: ./public/main.js





const init = () => {
  viewDirector();
};

init();

/******/ })()
;