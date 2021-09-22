interface Crop {
    name: string,
    yield: number,
    factors?: {
        sun: {
            low: number,
            medium: number,
            high: number,
        }
    }
}

interface Input {
    crop: Crop,
    numCrops: number,
}

interface Crops {
    crops: {
        [index: number]: {
            crop: Crop,
            numCrops: number,
            cost: number,
        }
    },
}

interface environmentFactors {
    sun: string,
}

export const getYieldForPlant = (corn: Crop, environmentFactors: environmentFactors) => {
    const { sun: temperature } = environmentFactors;
    let factor: number | undefined;

    switch (temperature) {
        case "low":
            factor = corn.factors?.sun.low;
            break;
        case "medium":
            factor = corn.factors?.sun.medium;
            break;
        case "high":
            factor = corn.factors?.sun.high;
            break;
        default:
            console.log(`Sorry, there is no enviromentFactor found`);
    }
    factor !== undefined ? factor = (corn.yield / 100 * factor) + corn.yield : console.log("something went wrong...");
    
    return factor;
}

export const getYieldForCrop = (input: Input, environmentFactors: environmentFactors) => {
    let factor: number | undefined;
    switch (environmentFactors.sun) {
        case "low":
            factor = input.crop.factors?.sun.low;
            break;
        case "medium":
            factor = input.crop.factors?.sun.medium;
            break;
        case "high":
            factor = input.crop.factors?.sun.high;
            break;
        default:
            console.log(`Sorry, there is no enviromentFactor found`);
    }
    if(factor != undefined) {
        factor = (input.crop.yield * input.numCrops / 100 * factor) + input.crop.yield * input.numCrops;
    }
    return factor;
}

export const getTotalYield = (crops: Crops, environmentFactors: environmentFactors) => {
    const { crops: crop } = crops;
    let total = 0;
    for (const count in crop) {
        if (crop[count].crop) {
            let factor: number | undefined;
            switch (environmentFactors.sun) {
                case "low":
                    factor = crop[count].crop.factors?.sun.low;
                    break;
                case "medium":
                    factor = crop[count].crop.factors?.sun.medium;
                    break;
                case "high":
                    factor = crop[count].crop.factors?.sun.high;
                    break;
                default:
                    console.log(`Sorry, there is no enviromentFactor found`);
            }
            if(factor != undefined) {
                let c = crop[count].crop.yield * crop[count].numCrops;
                total = Math.floor((crop[count].crop.yield * crop[count].numCrops / 100 * factor + c) + total);
            }
        } else {
            total = crop[count].numCrops;
        }
    }
    return total;
};

export const getCostsForCrop = (crops: Crops) => { 
    const { crops: crop } = crops;
    let total = 0;
    for (const count in crop) {
        total = crop[count].numCrops * crop[count].cost;
    }
    return total;
};
export const getRevenueForCrop = (crops: Crops, environmentFactors: environmentFactors) => { 
    const { crops: crop } = crops;
    let total = 0;
    let factor: number | undefined;
    for (const count in crop) {
        total = crop[count].crop.yield * crop[count].numCrops * crop[count].cost;
        switch (environmentFactors.sun) {
            case "low":
                factor = crop[count].crop.factors?.sun.low;
                break;
            case "medium":
                factor = crop[count].crop.factors?.sun.medium;
                break;
            case "high":
                factor = crop[count].crop.factors?.sun.high;
                break;
            default:
                console.log(`Sorry, there is no enviromentFactor found`);
        }
    }
    if(factor != undefined){
        factor= (total / 100 * factor) + total;
    }
    return factor;
};
export const getProfitForCrop = (crops: Crops, environmentFactors: environmentFactors) => { 
    const { crops: crop } = crops;
    let factor: number | undefined;
    let sum = 0;
    for (const count in crop) {
        sum = (crop[count].crop.yield * crop[count].numCrops * crop[count].cost) - crop[count].numCrops * crop[count].cost;
        switch (environmentFactors.sun) {
            case "low":
                factor = crop[count].crop.factors?.sun.low;
                break;
            case "medium":
                factor = crop[count].crop.factors?.sun.medium;
                break;
            case "high":
                factor = crop[count].crop.factors?.sun.high;
                break;
            default:
                console.log(`Sorry, there is no enviromentFactor found`);
        }
        if(factor != undefined) {
            factor = (sum/100*factor) + sum;
        }

    }
    return factor;
};
export const getTotalProfit = (crops: Crops, environmentFactors:environmentFactors) => { 
    const { crops: crop } = crops;
    let total = 0;
    for (const count in crop) {
        const {yield: harvest, factors} = crop[count].crop;
        const {cost, numCrops} = crop[count];
        let factor: number | undefined;
        switch (environmentFactors.sun) {
            case "low":
                factor = factors?.sun.low;
                break;
            case "medium":
                factor = factors?.sun.medium;
                break;
            case "high":
                factor = factors?.sun.high;
                break;
            default:
                console.log(`Sorry, there is no enviromentFactor found`);
        }
        if(factor != undefined){
            let num = ((harvest * numCrops * cost) - numCrops * cost);
            total = (num/100*factor+num) + total;
        }

    }

    return total;
};
