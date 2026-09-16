//console.log("Javascript file loaded...");

const receptKarta = [
    ["1 dl vetemjöl", "1/4 tsk salt", "3 dl mjölk", "1 ägg"],           // Index 0 (1 portion)
    ["2 dl vetemjöl", "1/2 tsk salt", "6 dl mjölk", "2 ägg"],           // Index 1 (2 portioner)
    ["4 dl vetemjöl", "1 tsk salt", "12 dl mjölk", "4 ägg"],            // Index 2 (4 portioner)
    ["6 dl vetemjöl", "1 1/2 tsk salt", "18 dl mjölk", "6 ägg"],        // Index 3 (6 portioner)
    ["8 dl vetemjöl", "2 tsk salt", "24 dl mjölk", "8 ägg"]             // Index 4 (8 portioner)
]

// Hämta element
const selectElement = document.getElementById('portions');

//För en change event, trigga denna function
selectElement.addEventListener('change', function() {
    // Hämta indexet för det valda alternativet (börjar på 0)
    const portionsIndex = this.selectedIndex;

    document.getElementById('amount-wheet').innerText = receptKarta[portionsIndex][0];
    document.getElementById('amount-salt').innerText = receptKarta[portionsIndex][1];
    document.getElementById('amount-milk').innerText = receptKarta[portionsIndex][2];
    document.getElementById('amount-egg').innerText = receptKarta[portionsIndex][3];

});