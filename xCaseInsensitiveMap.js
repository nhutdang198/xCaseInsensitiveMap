"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xCaseInsensitiveMap = void 0;
var permuteString = function (result, key, start) {
    if (result === void 0) { result = []; }
    if (start === void 0) { start = ""; }
    if (key.length === 0) {
        result.push(start);
        return;
    }
    var ch = String(key[0]).toLowerCase();
    var ch2 = String(key[0]).toUpperCase();
    key = key.substr(1);
    permuteString(result, key, start + ch);
    permuteString(result, key, start + ch2);
};
/**
 * A map implementation that supports case-insensitive keys.
 */
var xCaseInsensitiveMap = /** @class */ (function () {
    function xCaseInsensitiveMap() {
        /**
         * Internal data store for the key-value pairs.
         */
        this.data = new Map();
        /**
         * Count of items in the map.
         */
        this.count = 0;
    }
    /**
     * Sets a key-value pair in the map. The key is treated as case-insensitive.
     * @param rawKey - The key to set, can be of type T.
     * @param value - The value associated with the key.
     * @returns The XCaseInsensitiveMap instance.
     */
    xCaseInsensitiveMap.prototype.set = function (rawKey, value) {
        if (typeof rawKey === "string") {
            rawKey = rawKey;
            var keys = [];
            permuteString(keys, rawKey);
            this.count += 1;
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                this.data.set(key, value);
            }
        }
        return this;
    };
    /**
     * Retrieves the value associated with a key.
     * @param key - The key to look up, can be of type T.
     * @returns The value associated with the key, or undefined if the key is not found.
     */
    xCaseInsensitiveMap.prototype.get = function (key) {
        if (typeof key === "string") {
            key = key;
        }
        return this.data.get(key);
    };
    /**
     * Checks if a key exists in the map.
     * @param key - The key to check, can be of type T.
     * @returns True if the key exists in the map, otherwise false.
     */
    xCaseInsensitiveMap.prototype.has = function (key) {
        if (typeof key === "string") {
            key = key;
        }
        return this.data.has(key);
    };
    /**
     * Returns the number of key-value pairs in the map.
     * @returns The number of items in the map.
     */
    xCaseInsensitiveMap.prototype.size = function () {
        return this.count;
    };
    return xCaseInsensitiveMap;
}());
exports.xCaseInsensitiveMap = xCaseInsensitiveMap;
