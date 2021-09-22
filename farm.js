"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalProfit = exports.getProfitForCrop = exports.getRevenueForCrop = exports.getCostsForCrop = exports.getTotalYield = exports.getYieldForCrop = exports.getYieldForPlant = void 0;
var getYieldForPlant = function (corn, environmentFactors) {
    var _a, _b, _c;
    var temperature = environmentFactors.sun;
    var factor;
    switch (temperature) {
        case "low":
            factor = (_a = corn.factors) === null || _a === void 0 ? void 0 : _a.sun.low;
            break;
        case "medium":
            factor = (_b = corn.factors) === null || _b === void 0 ? void 0 : _b.sun.medium;
            break;
        case "high":
            factor = (_c = corn.factors) === null || _c === void 0 ? void 0 : _c.sun.high;
            break;
        default:
            console.log("Sorry, there is no enviromentFactor found");
    }
    factor !== undefined ? factor = (corn.yield / 100 * factor) + corn.yield : console.log("something went wrong...");
    return factor;
};
exports.getYieldForPlant = getYieldForPlant;
var getYieldForCrop = function (input, environmentFactors) {
    var _a, _b, _c;
    var factor;
    switch (environmentFactors.sun) {
        case "low":
            factor = (_a = input.crop.factors) === null || _a === void 0 ? void 0 : _a.sun.low;
            break;
        case "medium":
            factor = (_b = input.crop.factors) === null || _b === void 0 ? void 0 : _b.sun.medium;
            break;
        case "high":
            factor = (_c = input.crop.factors) === null || _c === void 0 ? void 0 : _c.sun.high;
            break;
        default:
            console.log("Sorry, there is no enviromentFactor found");
    }
    if (factor != undefined) {
        factor = (input.crop.yield * input.numCrops / 100 * factor) + input.crop.yield * input.numCrops;
    }
    return factor;
};
exports.getYieldForCrop = getYieldForCrop;
var getTotalYield = function (crops, environmentFactors) {
    var _a, _b, _c;
    var crop = crops.crops;
    var total = 0;
    for (var count in crop) {
        if (crop[count].crop) {
            var factor = void 0;
            switch (environmentFactors.sun) {
                case "low":
                    factor = (_a = crop[count].crop.factors) === null || _a === void 0 ? void 0 : _a.sun.low;
                    break;
                case "medium":
                    factor = (_b = crop[count].crop.factors) === null || _b === void 0 ? void 0 : _b.sun.medium;
                    break;
                case "high":
                    factor = (_c = crop[count].crop.factors) === null || _c === void 0 ? void 0 : _c.sun.high;
                    break;
                default:
                    console.log("Sorry, there is no enviromentFactor found");
            }
            if (factor != undefined) {
                var c = crop[count].crop.yield * crop[count].numCrops;
                total = Math.floor((crop[count].crop.yield * crop[count].numCrops / 100 * factor + c) + total);
            }
        }
        else {
            total = crop[count].numCrops;
        }
    }
    return total;
};
exports.getTotalYield = getTotalYield;
var getCostsForCrop = function (crops) {
    var crop = crops.crops;
    var total = 0;
    for (var count in crop) {
        total = crop[count].numCrops * crop[count].cost;
    }
    return total;
};
exports.getCostsForCrop = getCostsForCrop;
var getRevenueForCrop = function (crops, environmentFactors) {
    var _a, _b, _c;
    var crop = crops.crops;
    var total = 0;
    var factor;
    for (var count in crop) {
        total = crop[count].crop.yield * crop[count].numCrops * crop[count].cost;
        switch (environmentFactors.sun) {
            case "low":
                factor = (_a = crop[count].crop.factors) === null || _a === void 0 ? void 0 : _a.sun.low;
                break;
            case "medium":
                factor = (_b = crop[count].crop.factors) === null || _b === void 0 ? void 0 : _b.sun.medium;
                break;
            case "high":
                factor = (_c = crop[count].crop.factors) === null || _c === void 0 ? void 0 : _c.sun.high;
                break;
            default:
                console.log("Sorry, there is no enviromentFactor found");
        }
    }
    if (factor != undefined) {
        factor = (total / 100 * factor) + total;
    }
    return factor;
};
exports.getRevenueForCrop = getRevenueForCrop;
var getProfitForCrop = function (crops, environmentFactors) {
    var _a, _b, _c;
    var crop = crops.crops;
    var factor;
    var sum = 0;
    for (var count in crop) {
        sum = (crop[count].crop.yield * crop[count].numCrops * crop[count].cost) - crop[count].numCrops * crop[count].cost;
        switch (environmentFactors.sun) {
            case "low":
                factor = (_a = crop[count].crop.factors) === null || _a === void 0 ? void 0 : _a.sun.low;
                break;
            case "medium":
                factor = (_b = crop[count].crop.factors) === null || _b === void 0 ? void 0 : _b.sun.medium;
                break;
            case "high":
                factor = (_c = crop[count].crop.factors) === null || _c === void 0 ? void 0 : _c.sun.high;
                break;
            default:
                console.log("Sorry, there is no enviromentFactor found");
        }
        if (factor != undefined) {
            factor = (sum / 100 * factor) + sum;
        }
    }
    return factor;
};
exports.getProfitForCrop = getProfitForCrop;
var getTotalProfit = function (crops, environmentFactors) {
    var crop = crops.crops;
    var total = 0;
    for (var count in crop) {
        var _a = crop[count].crop, harvest = _a.yield, factors = _a.factors;
        var _b = crop[count], cost = _b.cost, numCrops = _b.numCrops;
        var factor = void 0;
        switch (environmentFactors.sun) {
            case "low":
                factor = factors === null || factors === void 0 ? void 0 : factors.sun.low;
                break;
            case "medium":
                factor = factors === null || factors === void 0 ? void 0 : factors.sun.medium;
                break;
            case "high":
                factor = factors === null || factors === void 0 ? void 0 : factors.sun.high;
                break;
            default:
                console.log("Sorry, there is no enviromentFactor found");
        }
        if (factor != undefined) {
            var num = ((harvest * numCrops * cost) - numCrops * cost);
            total = (num / 100 * factor + num) + total;
        }
    }
    return total;
};
exports.getTotalProfit = getTotalProfit;
