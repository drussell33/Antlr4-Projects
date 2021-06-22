/* Here's where to solve the problem.  Write your code in the appropriate function below.
   Return true to indicate success, false otherwise. Print out indicated output or add to
   the DOM with jQuery as shown where needed.
*/

// Our predicates
const matchSingleChar  = char => charIn => char === charIn;
const matchUndefined   = char => typeof char == 'undefined';
const matchAnything    = _ => true;
const matchNewLine     = char => '\n' === char;
const matchAtSymbol    = char => '@' === char;
const matchOctothorp   = char => '#' === char;
const matchSingleSpace = char => ' ' === char;
const matchStringChar  = char => typeof char == 'string';

// Our functions for p1
const nop = function(){}

function accumulateOneSection(charIn,context)
{
    context.acc.push(charIn);
}

function clearAccumulator(charIn,context)
{
    context.output.push(context.acc.join(""));
    context.acc = [];
}
//Actual p1 
function p1(input)
{
    const spl = input[0];

    const context = {
        output: [],
        acc: []
    };

    // Create our FSM object
    const fsm = new FSM(3,context);

    // Add rules to the state machine (in the order we want the predicates to be checked)
    fsm.addRule(0,matchSingleChar(spl),clearAccumulator,1);
    fsm.addRule(0,matchUndefined,clearAccumulator,2);
    fsm.addRule(0,matchAnything,accumulateOneSection,0);
    fsm.addRule(1,matchSingleChar(spl),clearAccumulator,0);
    fsm.addRule(1,matchUndefined,clearAccumulator,2);
    fsm.addRule(1,matchAnything,accumulateOneSection,1);
    fsm.addRule(2,matchUndefined,nop,2);
    fsm.addRule(2,matchAnything,nop,2);

    // Run the state machine on the input
    // (run it one past the end of the string to get undefined as the last char read)
    for(let i = 1; i <= input.length; i++)
    {
        fsm.advance(input[i]);
        console.log("fsm state = " + fsm.state);
    }

    alert(context.output);
    // See if we got the same as built-in split
    return context.output.equals(p1_test(input));
}

/* Function to easily compare our output with the built-in string split */
function p1_test(input)
{
    const spl = input[0];
    const test_output = input.slice(1).split(spl);
    console.log(test_output);
    return test_output;
}

// Useful utility for comparing arrays (deep comparison)
// From top answer in: https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array)
{
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++)
    {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array)
        {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i])
        {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});



//Problem 2 Functions
function accumulateOddOpening(charIn,context)
{
    context.acc.push('<p class="color1">');
    context.acc.push(++context.counter + " ");
    context.acc.push(charIn);
}

function accumulateEvenOpening(charIn,context)
{
    context.acc.push('<p class="color2">');
    context.acc.push(++context.counter + " ");
    context.acc.push(charIn);
}

function accumulateEnding(charIn,context)
{
    context.acc.push("</p>");
    context.output.push(context.acc.join(""));
    context.acc = [];
}
//Actual Problem 2
function p2(input)
{
   const context = {
       output: [],
       acc: [],
       counter: 0
   };

   //Creating the FSM
   const fsm = new FSM(4,context);

   //adding rules to the state machine.
   fsm.addRule(0,matchNewLine,clearAccumulator,2);
   fsm.addRule(0,matchAnything,accumulateOddOpening,1);
   fsm.addRule(1,matchNewLine,accumulateEnding,2);
   fsm.addRule(1,matchAnything,accumulateOneSection,1);
   fsm.addRule(2,matchNewLine,clearAccumulator,0);
   fsm.addRule(2,matchAnything,accumulateEvenOpening,3);
   fsm.addRule(3,matchNewLine,accumulateEnding,0);
   fsm.addRule(3,matchAnything,accumulateOneSection,3);

   for(let i = 0; i <= input.length; i++){
       fsm.advance(input[i]);
       console.log("fsm state = " + fsm.state);
   }

   let output = "";

   for(let i = 0; i <= context.output.length; i++){
    output+= context.output[i];
    }

    // Use jQuery to empty the previous output, if any, and append the new output
    $('#p2-output p.output').empty().append($(output));

    return true; 
}




//Problem 3 Functions

function clearAccumulators(charIn,context)
{
    context.output.push('(("https", "');
    context.output.push(context.acc.join(""));
    context.output.push('",null,null),"');
    context.output.push(context.acc2.join(""));
    context.output.push('")');
    context.acc = [];
    context.acc2 = [];
    context.found = true;
}

function accumulateOneSection2(charIn,context)
{
    context.acc2.push(charIn);
}

function reset(charIn,context)
{
    context.acc = [];
    context.acc2 = [];
    context.output = [];
}



//Actual Problem 3
function p3(input)
{
    
    const context = {
        output: [],
        acc: [],
        acc2: [],
        found: false
    };

    // Create our FSM object
    const fsm = new FSM(6,context);
    
    // Add rules to the state machine (in the order we want the predicates to be checked)
    fsm.addRule(0,matchNewLine,reset,1);
    fsm.addRule(0,matchAnything,nop,0);

    fsm.addRule(1,matchAtSymbol,nop,2);
    fsm.addRule(1,matchAnything,nop,0);

    fsm.addRule(2,matchNewLine,nop,0);
    fsm.addRule(2,matchSingleSpace,nop,3);
    fsm.addRule(2,matchStringChar,accumulateOneSection,2);
    

    fsm.addRule(3,matchOctothorp,nop,4);
    fsm.addRule(3,matchAnything,nop,0);

    fsm.addRule(4,matchNewLine,nop,0);
    fsm.addRule(4,matchStringChar,accumulateOneSection2,4);
    fsm.addRule(4,matchUndefined,clearAccumulators,5);
    
    
 
        for(let i = 0; i <= input.length; i++){
            if(fsm.context.found != true){ 
            fsm.advance(input[i]);
            console.log("fsm state = " + fsm.state);
            }
        }
    
 
    let outputFinal = "";
 
    for(let i = 0; i <= context.output.length - 1; i++){
            outputFinal+= context.output[i];      
     }

     alert(outputFinal);

    return context.found;
}

function p4(input)
{
    return false;
}

function p5(input)
{
    return false;
}

// Useful utility for comparing arrays (deep comparison)
// From top answer in: https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array)
{
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++)
    {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array)
        {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i])
        {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
