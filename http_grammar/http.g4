grammar http;

// Lexar Rules 

http_message: start_line (header_field CRLF)* CRLF message_body;

start_line: request_line | status_line;

request_line: method SP request_target SP HTTP_version CRLF;

status_line : HTTP_version SP status_code SP reason_phrase CRLF;

header_field : field_name ':' OWS field_value OWS ;

message_body : OCTET* ;

method:
	'GET'
	| 'HEAD'
	| 'POST'
	| 'PUT'
	| 'DELETE'
	| 'CONNECT'
	| 'OPTIONS'
	| 'TRACE'; 

request_target: (TOKEN | Slash)+ ;

HTTP_version: 'HTTP/'DIGIT ('.' DIGIT )?;

status_code: DIGIT DIGIT DIGIT;

reason_phrase: (VCHAR | SP | TAB)+;

field_name: TOKEN+ ;

field_value: TOKEN+ ;
//field_value: TOKEN+  ;





//TOKENS

SP : ' ';

CRLF : '\n';

TAB : '\t';

OWS : (SP | TAB) ;

DIGIT : [0-9];

ALPHA : [a-zA-Z];



TCHAR:
	  ExclamationMark
	| DollarSign
	| Hashtag
	| Percent
	| Ampersand
	| SQuote
	| Star
	| Plus
    | Minus
	| Dot
	| Caret
    | Underscore
	| BackQuote
	| VBar
	| Tilde
	| DIGIT
	| ALPHA;

TOKEN   : TCHAR+;

VTOKEN : (TCHAR | ["(),/:;<=>?@[\]{}])+ ; 

LColumn:'(';
RColumn:')';
SemiColon:';';
Equals:'=';
Period:',';


Minus :'-';
Dot   : '.';
Underscore: '_';
Tilde : '~';
QuestionMark :'?';
Slash :'/';
ExclamationMark: '!';
Colon:':';
At: '@';
DollarSign:'$';
Hashtag:'#';
Ampersand:'&';
Percent:'%';
SQuote:'\'';
Star:'*';
Plus:'+';
Caret:'^';
BackQuote:'`';
VBar:'|';


VCHAR:
	ExclamationMark
	| '"'
	| Hashtag
	| DollarSign
	| Percent
	| Ampersand
	| SQuote
	| LColumn
	| RColumn
	| Star
	| Plus
	| Period
	| Minus
	| Dot
	| Slash
	| Colon
	| SemiColon
	| '<'
	| Equals
	| '>'
	| QuestionMark
	| At
	| '['
	| '\\'
	| Caret
	| Underscore
	| ']'
	| BackQuote
	| '{'
	| '}'
	| VBar
	| Tilde;


OBS_TEXT: '\u0080' ..'\u00ff';



OCTET: '\u0000' .. '\u001f' | VCHAR | '\u007f' .. '\u00ff' ;