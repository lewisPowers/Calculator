(function(root, undefined) {
    var calcDisplay = '';
    var storage = [];
    var previousAction;
    var resultSoFar;
    var savedVal;
    var calculateLastClicked = false;
    
    function clearInput() {
        calcDisplay = '';
    }
    
    function clearEntries() {
        calcDisplay = '';
        storage = [];
        calculateLastClicked = false;
    }
    
    function clearAll() {
        storage = [];
        calcDisplay = '';
        display.textContent = calcDisplay;
    }

    function storeResult(result) {
        storage[0] = result;
        storage.length = 1;
    }
    
    function toggleNegative() {

        if (!calcDisplay) {
            return;
        }

        if (calculateLastClicked === true) {
            calculateLastClicked = false;
            calcDisplay = storage[0];
        }

        calcDisplay = calcDisplay.toString();

        if (Boolean(calcDisplay.match('[-]'))) {
            calcDisplay = calcDisplay.replace('-', '')
        } else {
            calcDisplay = '-' + calcDisplay
        }
 
        display.textContent = calcDisplay;
        storage[0] = calcDisplay;
        previousAction = 'percent';
    }
    
    function calculate(a, b) { 
    
        var result = '';
            
        if (previousAction === 'add') {
            result = parseFloat(a) + parseFloat(b);
        } else if (previousAction === 'subtract') {
            result = parseFloat(a) - parseFloat(b);
        } else if (previousAction === 'multiply') {
            result = parseFloat(a) * parseFloat(b);
        } else if (previousAction === 'divide') {
            result = parseFloat(a) / parseFloat(b);
        }
        return result;
    }
    
    var main = document.querySelector('div-table');
    var table = document.querySelector('table');
    var display = document.getElementById('display-input');
    
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var zero = document.getElementById('zero');
    var decimal = document.getElementById('decimal');
    var percent = document.getElementById('percent');
    
 
    var plusMinusButton = document.getElementById('plus-minus');
        clearButton = document.getElementById('clear') 
    
    
    table.addEventListener('click', function(event) {
        // debugger;
        var elementClicked = event.target,
            action = elementClicked.dataset.action;
    
        if (isNaN(calcDisplay)) {
            calcDisplay = 0;
        }

        if (elementClicked === clearButton) {
            clearAll();
            return;
        }

        if (elementClicked === plusMinusButton) {
            toggleNegative();
            return;
        }
    
        if (elementClicked === percent && calcDisplay === '') {
            return;
        } else if (elementClicked === percent) { 
            if (calculateLastClicked === true) {
                calcDisplay = storage[0];
                calculateLastClicked = false;
            }
            // storage.push(calcDisplay);  
            calcDisplay = parseFloat(calcDisplay/* storage[0] */) / 100;
            display.textContent = calcDisplay;
            // storage[0] = calcDisplay;
            return;
        }

        if (elementClicked === one) {
            if (calculateLastClicked === true) {
                clearEntries();
            }
        //    savedVal = null;
            calcDisplay = calcDisplay + 1;
            display.textContent = calcDisplay;
        } else if (elementClicked === two) {
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 2;
            display.textContent = calcDisplay;
        } else if (elementClicked === three) {
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 3;
            display.textContent = calcDisplay;
        } else if (elementClicked === four) {
            if (calculateLastClicked === true && storage.length > 1) {
                clearEntries();
            } else if (calculateLastClicked === true) {
                clearInput();
            }
            calcDisplay = calcDisplay + 4;
            display.textContent = calcDisplay;
        } else if (elementClicked === five) {
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 5;
            display.textContent = calcDisplay;
        } else if (elementClicked === six) {
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 6;
            display.textContent = calcDisplay;
        } else if (elementClicked === seven) {
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 7;
            display.textContent = calcDisplay;
        } else if (elementClicked === eight) {
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 8;
            display.textContent = calcDisplay;
        } else if (elementClicked === nine) {
            if (calculateLastClicked === true) {
                clearEntries();
            }
            calcDisplay = calcDisplay + 9;
            display.textContent = calcDisplay;
        } else if (elementClicked === zero) {
            if (calculateLastClicked === true) {
                clearEntries();

            }
            calcDisplay = calcDisplay + 0;
            display.textContent = calcDisplay;
        } else if (elementClicked === decimal) {
            if (!calcDisplay) {
                calcDisplay = '0.';
                return display.textContent = calcDisplay;
            } else if ( Boolean(calcDisplay.match('[.]')) ) {
                return;
            }
            calcDisplay = calcDisplay + '.';
            display.textContent = calcDisplay;   
    
        } else if (action === 'add') {
            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'add';
                return;
            }

            if (previousAction === 'percent') {
                calcDisplay = storage[0];
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }
    
           if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                display.textContent = resultSoFar;
                previousAction = 'add';
                calculateLastClicked = false;
            } else {
                clearInput();
            //    display.textContent = savedVal;
                previousAction = 'add';
                calculateLastClicked = false;
            }
    
        } else if (action === 'subtract') {

            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'subtract';
                return;
            }

            if (previousAction === 'percent') {
                storage[0] = calcDisplay;
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }
    
            if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                display.textContent = resultSoFar;
                previousAction = 'subtract';
                calculateLastClicked = false;
            } else {
                clearInput();
                // display.textContent = savedVal;
                previousAction = 'subtract';
                calculateLastClicked = false;
            }
    
        } else if (action === 'multiply') {

            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'multiply';
                return;
            }
    
            if (previousAction === 'percent') {
                storage[0] = calcDisplay;
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }
    
            if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                // display.textContent = resultSoFar;
                previousAction = 'multiply';
                calculateLastClicked = false;
            } else {
                clearInput();
                display.textContent = savedVal;
                previousAction = 'multiply';
                calculateLastClicked = false;
            }
    
        } else if (action === 'divide') {

            if (calculateLastClicked === true) {
                clearInput();
                calculateLastClicked = false;
                previousAction = 'divide';
                return;
            }
    
            if (previousAction === 'percent') {
                storage[0] = calcDisplay;
                savedVal = calcDisplay;
            } else {
                storage.push(calcDisplay);
                savedVal = calcDisplay;
            }
    
            if (storage.length > 1) {
                resultSoFar = calculate(storage[0], storage[1]);
                storeResult(resultSoFar);
                clearInput();
                display.textContent = resultSoFar;
                previousAction = 'divide';
                calculateLastClicked = false;
            } else {
                clearInput();
                display.textContent = savedVal;
                previousAction = 'divide';
                calculateLastClicked = false;
            }
    
        } else if (action === 'calculate') {
            if (!calcDisplay) {
                return;
            }
            storage.push(calcDisplay);
            //savedVal = storage[1];
    
            // if (storage.length === 0 && calDisplay) {
            //     storage[0] = calcDisplay;
            //     return;
            // }
            if (calculateLastClicked === true) {
                savedVal = calculate(storage[0], storage[1]);
                display.textContent = savedVal;
                storeResult(savedVal);
                return;
            }
            
            var result = calculate(storage[0], storage[1]);
            display.textContent = result;
            storeResult(result);
            calculateLastClicked = true;
        }
       
    });

    root['calculator'] = this;

})(this);


// var divide = document.getElementById('divide'),
// multiply = document.getElementById('multiply'),
// add = document.getElementById('add'),
// subtract = document.getElementById('subtract'),
// equals = document.getElementById('equals'), 
// percentage = document.getElementById('percent');