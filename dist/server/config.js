"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let config = {
    'searchAndRescueApi': 'http://localhost:6000/search/api'
};
class Config {
    static get(key) {
        return config[key];
    }
}
exports.Config = Config;
