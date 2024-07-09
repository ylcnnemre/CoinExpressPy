"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indicatorRouter = void 0;
const express_1 = __importDefault(require("express"));
const _ndicatorController_1 = require("../controller/\u0130ndicatorController");
const StrategyList_1 = require("../constant/StrategyList");
const indicatorRouter = express_1.default.Router();
exports.indicatorRouter = indicatorRouter;
indicatorRouter.post("/", _ndicatorController_1.indicatorFilterController);
indicatorRouter.get("/indicatorList", _ndicatorController_1.getIndicatorListControllre);
indicatorRouter.post("/strategies", _ndicatorController_1.getStrategiesListController);
indicatorRouter.get("/strategies", (req, res) => {
    return res.json({
        data: StrategyList_1.tarama_listesi
    });
});
