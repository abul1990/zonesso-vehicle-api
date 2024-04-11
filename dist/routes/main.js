"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainRouter = (0, express_1.Router)();
mainRouter.get('/main', (req, res) => {
    res.send('API route: GET /');
});
mainRouter.post('/', (req, res) => {
    res.send('API route: POST /');
});
exports.default = mainRouter;
