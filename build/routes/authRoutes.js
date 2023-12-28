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
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const otpless_node_js_auth_sdk_1 = require("otpless-node-js-auth-sdk");
const router = express_1.default.Router();
// Define authentication-related routes
router.post('/login', (req, res) => {
    // Authenticate user here, if valid credentials generate a token
    const username = req.body.username;
    // Verify user credentials...
    // If user credentials are valid, generate JWT token
    const accessToken = jsonwebtoken_1.default.sign({ username: username }, 'your_secret_key_here');
    res.json({ accessToken: accessToken });
});
router.post("/otpless", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Authenticate user here, if valid credentials generate a token
    const token = req.body.token;
    const userDetail = yield otpless_node_js_auth_sdk_1.UserDetail.verifyToken(token, config_1.default.clientId, config_1.default.clientSecret);
    console.log("User Details:", userDetail);
}));
exports.default = router;
