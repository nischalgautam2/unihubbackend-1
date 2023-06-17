"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("../controllers/multer"));
const verifyToken_1 = require("../auth/verifyToken");
const postrouter = (0, express_1.default)();
const postcontroller_1 = require("../controllers/postcontroller");
postrouter.route("/posts").post(multer_1.default, postcontroller_1.createPost).get(postcontroller_1.getHomePosts);
postrouter.route("/posts/find/").get(postcontroller_1.findPost);
postrouter.route("/posts/:id").get(postcontroller_1.getonepost);
postrouter.route("/posts/user/:id").get(postcontroller_1.getUserPosts);
postrouter.route("/posts/like/:id").post(verifyToken_1.verifyToken, postcontroller_1.likepost);
postrouter.route("/posts/unlike/:id").post(verifyToken_1.verifyToken, postcontroller_1.unlikepost);
postrouter.route("/posts/save/:id").post(postcontroller_1.savePost);
postrouter.route("/posts/unsave/:id").post(postcontroller_1.unsavePost);
postrouter.route("/posts/saved/:id").get(postcontroller_1.getSavedPosts);
exports.default = postrouter;
