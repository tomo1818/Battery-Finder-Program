// ここから書いてください。
const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }]
;

const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }]
;

// batteryをソート
battery.sort(function (a, b) {
    let nameA = a["batteryName"].toLowerCase();
    let nameB = b["batteryName"].toLowerCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});

let cameraHashmap = {};
for (let i = 0; i < camera.length; i++) {
    if (cameraHashmap[camera[i]["brand"]] === undefined) {
        cameraHashmap[camera[i]["brand"]] = 1;
    }
}

console.log(battery);
console.log(camera);

const mainContainer = document.getElementById("mainContainer");

let form = document.createElement("div");

let step1 = document.createElement("div");
step1.classList.add("mb-2");
let step1Title = document.createElement("div");
let s1ttl = document.createElement("p");
s1ttl.innerHTML = "Step1: Select your brand";
step1Title.append(s1ttl);

let s1Selector = document.createElement("select");
for (key in cameraHashmap) {
    let option = document.createElement("option");
    option.value = key;
    option.text = key;
    s1Selector.append(option);
}

step1.append(step1Title);
step1.append(s1Selector);
form.append(step1);

let step2 = document.createElement("div");
step2.classList.add("mb-2");
let step2Title = document.createElement("div");
let s2ttl = document.createElement("p");
s2ttl.innerHTML = "Step2: Select your model";
step2Title.append(s2ttl);

let s2Selector = document.createElement("select");
let currentBrand = s1Selector.value;
for (let i = 0; i < camera.length; i++) {
    if (camera[i]["brand"] === currentBrand) {
        let option = document.createElement("option");
        option.value = camera[i]["powerConsumptionWh"];
        option.text = camera[i]["model"];
        s2Selector.append(option);
    }
}

let currentPowerConsumption = s2Selector.value;
console.log(currentPowerConsumption);

step2.append(step2Title);
step2.append(s2Selector);
form.append(step2);

let step3 = document.createElement("div");

step3.classList.add("mb-2");
let step3Title = document.createElement("div");
let s3ttl = document.createElement("p");
s3ttl.innerHTML = "Step3: Input accessory power consumption";
step3Title.append(s3ttl);

let consumption = document.createElement("input");
consumption.type = "number";
consumption.value = 55;

let currentAccessoryConsumption = consumption.value;

step3.append(step3Title);
step3.append(consumption);
form.append(step3);

let step4 = document.createElement("div");
let step4Title = document.createElement("div");
let s4ttl = document.createElement("p");
s4ttl.innerHTML = "Step4: Choose your battery";
step4Title.append(s4ttl);

let batteryList = document.createElement("div");
displayBattery(currentPowerConsumption, currentAccessoryConsumption);

step4.append(step4Title);
step4.append(batteryList);
form.append(step4);

mainContainer.appendChild(form);

s1Selector.addEventListener("change", function() {
    brandChange();
});

s2Selector.addEventListener("change", function() {
    modelChange();
});

consumption.addEventListener("change", function() {
    powerConsumption();
});

function brandChange() {
    s2Selector.innerHTML = "";
    let currentBrand = s1Selector.value;
    for (let i = 0; i < camera.length; i++) {
        if (camera[i]["brand"] === currentBrand) {
            let option = document.createElement("option");
            option.value = camera[i]["powerConsumptionWh"];
            option.text = camera[i]["model"];
            s2Selector.append(option);
        }
    }

    currentPowerConsumption = s2Selector.value;

    displayBattery(currentPowerConsumption, currentAccessoryConsumption);
}

function modelChange() {
    currentPowerConsumption = s2Selector.value;

    displayBattery(currentPowerConsumption, currentAccessoryConsumption);
}

function powerConsumption() {
    currentAccessoryConsumption = consumption.value;

    displayBattery(currentPowerConsumption, currentAccessoryConsumption);
}

function displayBattery(currentPowerConsumption, currentAccessoryConsumption) {
    currentPowerConsumption = Number(currentPowerConsumption);
    currentAccessoryConsumption = Number(currentAccessoryConsumption);
    batteryList.innerHTML = "";
    for (let i = 0; i < battery.length; i++) {
        let powerCapacity = battery[i]["capacityAh"] * battery[i]["voltage"];
        let maximumDischargePower = battery[i]["maxDraw"] * battery[i]["endVoltage"];

        if (maximumDischargePower > currentPowerConsumption + currentAccessoryConsumption) {
            let batteryBox = document.createElement("div");
            batteryBox.classList.add("border", "border-dark", "d-flex", "justify-content-between", "p-2");
            let batteryName = document.createElement("h5");
            batteryName.classList.add("m-0");
            batteryName.innerHTML = battery[i]["batteryName"];
            let estimateH = document.createElement("p");
            estimateH.classList.add("m-0");
            estimateH.innerHTML = "Estimate " + parseFloat(Math.round((powerCapacity / (currentPowerConsumption + currentAccessoryConsumption)) * 10) / 10) + " hours";

            batteryBox.append(batteryName);
            batteryBox.append(estimateH);
            batteryList.append(batteryBox);
        }
    }
}
