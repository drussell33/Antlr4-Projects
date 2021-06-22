const antlr4 = require('antlr4/index');
const ProductLexer = require('./ProductLexer').ProductLexer;
const ProductParser = require('./ProductParser').ProductParser;
const ProductVisitorMaterials = require('./ProductVisitorMaterials').ProductVisitorMaterials;

let fs = require('fs');

// Run like this:
//    node main.js uniqueTable.tsv out.json
//    node main.js testing_table.tsv out.json

let chars = antlr4.CharStreams.fromPathSync(process.argv[2],{ encoding: 'utf8' });
let lexer = new ProductLexer(chars);
let tokens  = new antlr4.CommonTokenStream(lexer);
let parser = new ProductParser(tokens);
parser.buildParseTrees = true;
let tree = parser.file();

let visitor = new ProductVisitorMaterials();
let output = visitor.visitFile(tree);

let outputFile = process.argv[3];
fs.writeFile(outputFile,output, (err) => {
    if(err) throw err;
    console.log('Output written to file.');
});