"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
const express_1 = __importDefault(require("express"));
const vehicleRoutes_1 = __importDefault(require("./vehicleRoutes"));
const showroomRoutes_1 = __importDefault(require("./showroomRoutes"));
const router = express_1.default.Router();
router.use('/vehicles', vehicleRoutes_1.default);
router.use('/showrooms', showroomRoutes_1.default);
exports.default = router;
