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
// src/routes/showroomRoutes.ts
const express_1 = __importDefault(require("express"));
const showroomService_1 = require("../services/showroomService");
const commonService_1 = require("../services/commonService");
const router = express_1.default.Router();
router.get('/top/:location', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { location } = req.params;
        const showrooms = yield (0, showroomService_1.topShowroomsByLocation)(location); // Pass location to the fetchShowrooms function
        res.json(showrooms);
    }
    catch (err) {
        console.error('Failed to fetch top showrooms by location', err);
        res.status(500).send('Server error');
    }
}));
router.get('/:location', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { location } = req.params;
        const showrooms = yield (0, commonService_1.fetchShowroomWithVehicles)(location);
        res.json(showrooms);
    }
    catch (err) {
        console.error('Failed to fetch details for location', err);
        res.status(500).send('Server error');
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const showrooms = yield (0, showroomService_1.fetchShowrooms)();
        res.json(showrooms);
    }
    catch (err) {
        console.error('Failed to fetch showrooms', err);
        res.status(500).send('Server error');
    }
}));
exports.default = router;
