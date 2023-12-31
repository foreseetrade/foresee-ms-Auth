"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const profileRoutes_1 = __importDefault(require("./profileRoutes"));
const middlewares_1 = require("../middlewares");
const router = express_1.default.Router();
console.log('routes loaded');
router.use('/auth', authRoutes_1.default);
router.use('/profile', middlewares_1.authenticateToken, profileRoutes_1.default);
exports.default = router;
