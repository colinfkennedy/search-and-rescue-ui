"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let config = {
    'searchAndRescueApi': 'http://bearshark.advertising.aol.com:8081/nlp-backend/search'
};
class Config {
    static get(key) {
        return config[key];
    }
}
exports.Config = Config;
