"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var farm_1 = require("../farm");
describe("getYieldForPlant", function () {
    var corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };
    var environmentFactors = {
        sun: "low",
    };
    test("Get yield for plant with no environment factors", function () {
        expect((0, farm_1.getYieldForPlant)(corn, environmentFactors)).toBe(15);
    });
});
describe("getYieldForCrop", function () {
    test("Get yield for crop, simple", function () {
        var corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        var input = {
            crop: corn,
            numCrops: 10,
        };
        var environmentFactors = {
            sun: "medium",
        };
        expect((0, farm_1.getYieldForCrop)(input, environmentFactors)).toBe(30);
    });
});
describe("getTotalYield", function () {
    test("Calculate total yield with multiple crops", function () {
        var corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        var pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        var crops = [
            { crop: corn, numCrops: 5, cost: 2 },
            { crop: pumpkin, numCrops: 2, cost: 2 },
        ];
        var environmentFactors = {
            sun: "high",
        };
        expect((0, farm_1.getTotalYield)({ crops: crops }, environmentFactors)).toBe(34);
    });
    test("Calculate total yield with 0 amount", function () {
        var corn = {
            name: "corn",
            yield: 3,
        };
        var environmentFactors = {
            sun: "high",
        };
        var crops = [{ crop: corn, numCrops: 0, cost: 2 }];
        expect((0, farm_1.getTotalYield)({ crops: crops }, environmentFactors)).toBe(0);
    });
});
describe("getCostsForCrop", function () {
    test("bereken de kosten voor een crop", function () {
        var corn = {
            name: "corn",
            yield: 3,
        };
        var crops = [
            { crop: corn, numCrops: 5, cost: 2 }
        ];
        expect((0, farm_1.getCostsForCrop)({ crops: crops })).toBe(10);
    });
});
describe("getRevenueForCrop", function () {
    test("bereken inkomsten voor een crop (zonder omgevingsfactoren)", function () {
        var corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        var crops = [
            { crop: corn, numCrops: 5, cost: 2 }
        ];
        var environmentFactors = {
            sun: "low",
        };
        expect((0, farm_1.getRevenueForCrop)({ crops: crops }, environmentFactors)).toBe(15);
    });
});
describe("getProfitForCrop", function () {
    test("bereken de winst voor een crop (zonder omgevingsfactoren)", function () {
        var corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        var crops = [
            { crop: corn, numCrops: 5, cost: 2 }
        ];
        var environmentFactors = {
            sun: "high",
        };
        expect((0, farm_1.getProfitForCrop)({ crops: crops }, environmentFactors)).toBe(30);
    });
});
describe("getTotalProfit", function () {
    test("bereken de winst voor meerdere crops (zonder omgevingsfactoren)", function () {
        var corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        var pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        var crops = [
            { crop: corn, numCrops: 5, cost: 2 },
            { crop: pumpkin, numCrops: 2, cost: 2 },
        ];
        var environmentFactors = {
            sun: "medium",
        };
        expect((0, farm_1.getTotalProfit)({ crops: crops }, environmentFactors)).toBe(32);
    });
});
