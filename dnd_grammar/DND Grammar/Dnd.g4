grammar Dnd ;

/********* DND Grammar Rules *********/
file        : hdr row+ ;
hdr         : 'name' SEP 'race' SEP 'background' SEP 'date' SEP 'class' SEP 'justClass' SEP 'subclass' SEP 'level' SEP 'feats' SEP 'HP' SEP 'AC' SEP 'Str' SEP 'Dex' SEP 'Con' SEP 'Int' SEP 'Wis' SEP 'Cha' SEP 'alignment' SEP 'skills' SEP 'weapons' SEP 'spells' SEP 'day' SEP 'processedAlignment' SEP 'good' SEP 'lawful' SEP 'processedRace' SEP 'processedSpells' SEP 'processedWeapons' SEP 'levelGroup' '\r'? '\n'
            ;

row         : name SEP race SEP background SEP date SEP fclass SEP justClass SEP subclass SEP level SEP feats SEP hP SEP aC SEP str SEP dex SEP con SEP fint SEP wis SEP cha SEP alignment SEP skills SEP weapons SEP spells SEP day SEP processedAlignment SEP good SEP lawful SEP processedRace SEP processedSpells SEP processedWeapons SEP levelGroup '\r'? '\n'
            ;
name               : TOKEN ;
race               : (TOKEN SP?)+;
background         : (TOKEN SP?)+;
date               : TOKEN;
fclass             : (TOKEN SP INT PIPE?)+;
justClass          : TOKEN;
subclass           : (TOKEN SP?)*;
level              : INT;
feats              : (singleItem PIPE?)*;
hP                 : INT;
aC                 : INT;
str                : INT;
dex                : INT;
con                : INT;
fint               : INT;
wis                : INT;
cha                : INT;
alignment          : (TOKEN SP?)* ;
skills             : (singleItem PIPE?)+ ;
weapons            : (singleItem PIPE?)+ ;
spells             : (singleItem PIPE?)* ;
day                : INT SP INT SP INT;
processedAlignment : TOKEN*;
good               : TOKEN;
lawful             : TOKEN;
processedRace      : TOKEN;
processedSpells    : (singleItem PIPE?)* ;
processedWeapons   : (singleItem PIPE?)* ;
levelGroup         : TOKEN ;

singleItem         :(TOKEN SP?)+ ;



/********* Lexar Rules *********/
SEP         : '\t' ;
fragment DIGIT  : [0-9] ;
INT             : DIGIT+ ;
TOKEN           : [\-a-zA-Z0-9*+.()_,/'’="?!â€™®《çã©:]+ ; 
PIPE            : '|' ;
SP              : ' ' ;
LBRACKET        : '[' ;
RBRACKET        : ']' ;
