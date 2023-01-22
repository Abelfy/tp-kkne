/***
* Auteur : Adrien BELFY
*
*/


const inputA = document.getElementById("A");
const inputB = document.getElementById("B");
const answer = document.getElementById("answer");
console.log(inputA.value, ",", inputB.value);


function additionner() {
    const valueA = parseFloat(inputA.value, 10);
    const valueB = parseFloat(inputB.value, 10);
    const answerCalcul = valueA + valueB;
    answer.textContent = answerCalcul;
}

function soustraire() {
    const valueA = parseFloat(inputA.value, 10);
    const valueB = parseFloat(inputB.value, 10);
    const answerCalcul = valueA - valueB;
    answer.textContent = answerCalcul;
}

function multiplier() {
    const valueA = parseFloat(inputA.value, 10);
    const valueB = parseFloat(inputB.value, 10);
    // les boucles
    let answerCalcul = 0;
    for(let i = 0; i < valueB; i++) {
        console.log(`Je passe dans la boucle ${i} fois`);
        answerCalcul += valueA;   
    }

    answer.textContent = answerCalcul;
}

function diviser() {
    const valueA = parseFloat(inputA.value, 10);
    const valueB = parseFloat(inputB.value, 10);
    
    // les conditions
    let answerCalcul = "";
    // == valeur égales
    // === valeur et type égaux
    if (valueB === 0) {
        answerCalcul = "Erreur, division par 0 impossible";
    } else {
        answerCalcul = valueA / valueB;
    }
    answer.textContent = answerCalcul;
}


function reset() {
    inputA.value = "";
    inputB.value = "";
    answer.textContent = "";
}