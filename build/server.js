"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const config_1 = __importDefault(require("./config"));
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
const PORT = config_1.default.port;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Server running');
});
app.use(middlewares_1.authenticateToken);
app.use('/api', routes_1.default);
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on Port http://localhost:${PORT}`);
});
