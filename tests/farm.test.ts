import { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostsForCrop, 
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
} from "../farm";

describe("getYieldForPlant", () => {
    const corn = {
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

    const environmentFactors = {
        sun: "low",
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
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
        const input = {
            crop: corn,
            numCrops: 10,
        };

        const environmentFactors = {
            sun: "medium",
        };

        expect(getYieldForCrop(input, environmentFactors)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
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
        const pumpkin = {
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

        const crops = [
            { crop: corn, numCrops: 5, cost: 2 },
            { crop: pumpkin, numCrops: 2, cost: 2 },
        ];

        const environmentFactors = {
            sun: "high",
        };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(34);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const environmentFactors = {
            sun: "high",
        };
        const crops = [{ crop: corn, numCrops: 0, cost: 2}];
        expect(getTotalYield({ crops}, environmentFactors)).toBe(0);
    });
});

describe("getCostsForCrop", () => {
    test("bereken de kosten voor een crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };

        const crops = [
            { crop: corn, numCrops: 5, cost: 2 }
        ];

        expect(getCostsForCrop({ crops })).toBe(10)
    })
});
describe("getRevenueForCrop", () => {
    test("bereken inkomsten voor een crop (zonder omgevingsfactoren)", () => {
        const corn = {
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

        const crops = [
            { crop: corn, numCrops: 5, cost: 2 }
        ];

        const environmentFactors = {
            sun: "low",
        };

        expect(getRevenueForCrop({ crops }, environmentFactors)).toBe(15)
    })
});
describe("getProfitForCrop", () => {
    test("bereken de winst voor een crop (zonder omgevingsfactoren)", () => {
        const corn = {
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

        const crops = [
            { crop: corn, numCrops: 5, cost: 2 }
        ];

        const environmentFactors = {
            sun: "high",
        };

        expect(getProfitForCrop({ crops }, environmentFactors)).toBe(30)
    })
});

describe("getTotalProfit", () => {
    test("bereken de winst voor meerdere crops (zonder omgevingsfactoren)", () => {
        const corn = {
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

        const pumpkin = {
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

        const crops = [
            { crop: corn, numCrops: 5, cost: 2 },
            { crop: pumpkin, numCrops: 2, cost: 2 },
        ];

        const environmentFactors = {
            sun: "medium",
        };

        expect(getTotalProfit({ crops }, environmentFactors)).toBe(32)

    })
});