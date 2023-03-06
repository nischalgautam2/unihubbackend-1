"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: "830386723810-nk79gggacb4c7tr7d66nbqoqqrf4h6v1.apps.googleusercontent.com",
    clientSercet: "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",
    callbackURL: "http://localhost:5000/auth/callback",
    scope: ["profile", "email"],
}, function (acessToken, refreshToken, profile, callback, done) {
    return __awaiter(this, void 0, void 0, function* () {
        //this is where you want to store data to db
        try {
            return done(null, profile);
        }
        catch (err) {
            return done(err, null);
        }
    });
}));
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
exports.default = passport_1.default;
