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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndicatorListControllre = exports.indicatorFilterController = exports.getStrategiesListController = void 0;
const SendToQueue_1 = require("../services/SendToQueue");
const ResponseMessageDto_1 = require("../dto/ResponseMessageDto");
const indicatorList_1 = require("../constant/indicatorList");
const indicatorFilterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("reqq", req.body);
    const response = yield (0, SendToQueue_1.sendToQueue)(req.body, "rpc_queue");
    const parsedData = JSON.parse(response);
    return res.json(parsedData);
});
exports.indicatorFilterController = indicatorFilterController;
const getIndicatorListControllre = (req, res) => {
    const responseDto = new ResponseMessageDto_1.BaseResponseMessageDto();
    responseDto.data = indicatorList_1.mobileIndicatorList;
    responseDto.message = "success";
    return res.json(responseDto);
};
exports.getIndicatorListControllre = getIndicatorListControllre;
const getStrategiesListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req", req.body);
    const response = yield (0, SendToQueue_1.sendToQueue)(req.body, "strategies_select");
    console.log("resppss", response);
    const parsedData = JSON.parse(response);
    return res.json(parsedData);
});
exports.getStrategiesListController = getStrategiesListController;
