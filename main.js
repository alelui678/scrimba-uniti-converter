/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

20 meters = 65.616 feet | 20 feet = 6.096 meters
20 liters = 5.284 gallons | 20 gallons = 75.708 liters
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/

const selectedVal = document.querySelector(".input-display");
const convertionBtn = document.querySelector(".btn");
const resultSection = document.querySelector(".results");

convertionBtn.addEventListener("click", function() {
    resultSection.innerHTML = "";
    const resObj = converter(selectedVal.value);
    renderResults(resObj);
});

function converter(num) {
    const _num = Number(num);
    const meterCoeff = 3.281;
    const kiloCoeff = 2.204;
    const literCoeff = 0.264;

    const obj = {
        valInserted: _num,
        unity: {
            length: ["meters", "feet"],
            volume: ["liters", "gallons"],
            mass: ["kilograms", "pounds"]
        },
        rsultsVals:{
            feetRes: (_num * meterCoeff).toFixed(3),
            meterRes: (_num / meterCoeff).toFixed(3),
            kiloRes: (_num * kiloCoeff).toFixed(3),
            poundRes: (_num / kiloCoeff).toFixed(3),
            literRes: (_num * literCoeff).toFixed(3),
            gallonRes: (_num / literCoeff).toFixed(3)
        },
        labels: {
            length: "Length (Meter/Feet)",
            volume: "Volume (Liters/Gallons)",
            mass: "Mass (Kilograms/Pounds)"
        }
    }
    return obj;
}


function renderResults(resObj) {
    resultSection.innerHTML = `
        <section class="results">
            <div class="card">
                <h2>${resObj.labels.length}</h2>
                <p class="desc">
                    <span>${resObj.valInserted} meters = ${resObj.rsultsVals.feetRes} feet | ${resObj.valInserted} feet = ${resObj.rsultsVals.meterRes} meters</span>
                </p>
            </div>

            <div class="card">
                <h2>${resObj.labels.volume}</h2>
                <p class="desc">
                    <span>${resObj.valInserted} liters = ${resObj.rsultsVals.gallonRes} gallons | ${resObj.valInserted} gallons = ${resObj.rsultsVals.literRes} liters</span>
                </p>
            </div>

            <div class="card">
                <h2>${resObj.labels.mass}</h2>
                <p class="desc">
                    <span>${resObj.valInserted} kilos = ${resObj.rsultsVals.kiloRes} pounds | ${resObj.valInserted} pounds = ${resObj.rsultsVals.poundRes} kilos</span>
                </p>
            </div>
        </section>
    `;
}