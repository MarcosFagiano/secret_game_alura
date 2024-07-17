
const maxValue = 3;
let secretNumber = 0;
let maxTry = 3;
let tryCount = 1;
let pastNumber = [];



function setElementText(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

function getInput() {
    let userNumber = parseInt(document.getElementById('inputNumber').value);
    console.log(`numero usuario: ${userNumber}`);
    return userNumber;
}

function randomValue(range) {
    secretNumber = Math.floor(Math.random() * range) + 1;
    if (range == pastNumber.length) {
        setElementText('p', `No quedan numeros en el rango de 1 a ${range}`);
        return null;
    }
    if (!pastNumber.includes(secretNumber)) {
        pastNumber.push(secretNumber);
        return secretNumber;
    }
    return randomValue(range);
}


function userTry() {
    let userNumber = getInput();
    if (userNumber === secretNumber) {
        setElementText('p', `Acertaste en ${tryCount} ` + (tryCount > 1 ? 'intentos' : 'intento'));
        resetGame();
    } else if (tryCount > maxTry) {
        setElementText('p', 'Numero de intententos superado.');
        resetGame();``
    } else {
        cleanField();
        if (userNumber > secretNumber) {
            setElementText('p', `El numero secreto es menor que ${userNumber}, intento: ${tryCount}`);
        } else {
            setElementText('p', `El numero secreto es mayor que ${userNumber}, intento: ${tryCount}`);
        }
        tryCount++;
    }
}

function resetGame() {
    document.getElementById('reiniciar').removeAttribute('disabled');
}
function initialCondition() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
    setElementText('h1', 'Juego del numero secreto');
    setElementText('p', `Elige un numero del 1 al ${maxValue}`);
    secretNumber = randomValue(maxValue);
    tryCount = 1;
}
function newGame() {
    cleanField();
    initialCondition();
}

function cleanField() {
    document.querySelector('#inputNumber').value = '';
}


initialCondition();