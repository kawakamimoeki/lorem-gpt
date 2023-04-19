"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompt = void 0;
var prompt = function (language, type, num) {
    switch (language) {
        case "en":
            return "Please generate ".concat(num, " words\n        type: ").concat(type, "\n        language: ").concat(language, "\n        delimiter: \",\"\n        word:");
        case "ja":
            return "".concat(num, "\u500B\u306E\u5358\u8A9E\u3092\u751F\u6210\u3057\u3066\u304F\u3060\u3055\u3044\n        \u7A2E\u985E: ").concat(type, "\n        \u8A00\u8A9E: ").concat(language, "\n        \u533A\u5207\u308A\u6587\u5B57: \",\"\n        \u5358\u8A9E:");
        default:
            return "Please generate ".concat(num, " words\n        type: ").concat(type, "\n        language: ").concat(language, "\n        delimiter: \",\"\n        word:");
    }
};
exports.prompt = prompt;
