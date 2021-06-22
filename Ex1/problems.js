// Read https://javascript.info/regular-expressions then do these

/* Here's where to solve the problem.  Write your code in the appropriate function below.
   Return true to indicate success, false otherwise. Print out to the console as directed in
   the problem statement.

   For problems 1 and 2 there are testing files available.  Paste one of these into the text field for
   the respective problem:

   Problem 1: https://wou-cs46x-resources.netlify.app/data/a1p1.json
   Problem 2: https://wou-cs46x-resources.netlify.app/data/a1p2.json
*/
function p1(input)
{
    console.log(`Running validation for problem p1 for input: "${input}"`);

    let regex = /[2-9]\d{2}-[2-9]\d{2}-\d{4}/;
    let output = regex.test(input);

    return output;
}

function p2(input)
{
    console.log(`Running validation for problem p2 for input: "${input}"`);

    let regex = /[2-9]\d{2}-[2-9](\d{2})-\d{4}/;
    let output = regex.test(input);
    
    let match = regex.exec(input);

    if(match !== null){
      if((match[1] == "11")){
        output = false;
      }
    }

    return output;
}
/*
    To test this input you'll have to replace all newlines with \n   I'll show you how to do this in VS Code.
*/
function p3(input)
{
  console.log("Running validation for problem p3 for input: problem sample set with '/n' added saved as a1p3");
    let regex = /(VideoModeDescription)\s+:\s([2-9]\d{3})\sx\s([2-9]\d{3})/gm;
    let regex2 = /^\s+\b(Name)\s+:\s(.*)$/gm;
    let output = false;

    let match = regex.exec(input);
    let match2 = regex2.exec(input);

    
   if((match !== null) && (match2 !== null)){
        console.log(`Width: ${match[2]}`);
        console.log(`Height: ${match[3]}`);
        console.log(`GPU Name: ${match2[2]}`);
        output = true;
    }
        return output;
}
/*
    You'll also need to replace newlines in this problem.
*/
function p4(input)
{
    console.log("Running validation for problem p3 for input: problem sample set with '/n' added saved as a1p4");
    let regex = /@(\w*.\w{3})\s#(\d*)/gm;
    let output = regex.test(input);

    let match = regex.exec(input);

    if((match = regex.exec(input)) !== null){
      console.log(`\(\(\"https\", \"${match[1]}\", null, null\), \"${match[2]}\"\)`);
    }
    
    return output;
}

function p5(input)
{
    let regexInts = /[-+]?(?<!\.|\-)\b\d+\b(?!\.)/g;
    let regexFloats = /[-+]?[\d]*\.[\d|e|-]+/g;
    let regexHex = /[-+]?[\d|a-f|x]{7}(?=\s|,)/g;

    let output = false;
    
    let matchInts = input.match(regexInts);
    let matchFloats = input.match(regexFloats);
    let matchHex = input.match(regexHex);

    if((matchInts !== null)&&(matchFloats !== null)&&(matchHex !== null)){
        console.log('Integers: [' + matchInts + ']');
        console.log('Floats: [' + matchFloats + ']');
        console.log('Hex: [' + matchHex + ']');
        output = true;
      }
    
    return output;
}

function p6(input)
{
    return false;
}
