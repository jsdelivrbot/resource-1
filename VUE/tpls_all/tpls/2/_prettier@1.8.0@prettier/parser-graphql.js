"use strict";function createError$1(e,n){const r=new SyntaxError(e+" ("+n.start.line+":"+n.start.column+")");return r.loc=n,r}function createCommonjsModule(e,n){return n={exports:{}},e(n,n.exports),n.exports}function parseComments(e){const n=[];let r=e.loc.startToken.next;for(;"<EOF>"!==r.kind;)"Comment"===r.kind&&(Object.assign(r,{column:r.column-1}),n.push(r)),r=r.next;return n}function removeTokens(e){if(e&&"object"==typeof e){delete e.startToken,delete e.endToken,delete e.prev,delete e.next;for(const n in e)removeTokens(e[n])}return e}function parse(e){const n=index;try{const r=n.parse(e);return r.comments=parseComments(r),removeTokens(r),r}catch(e){throw e instanceof index$2.GraphQLError?createError(e.message,{start:{line:e.locations[0].line,column:e.locations[0].column}}):e}}var parserCreateError=createError$1,location=createCommonjsModule(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getLocation=function(e,n){for(var r=/\r\n|[\n\r]/g,t=1,i=n+1,o=void 0;(o=r.exec(e.body))&&o.index<n;)t+=1,i=n+1-(o.index+o[0].length);return{line:t,column:i}}}),GraphQLError_1=createCommonjsModule(function(e,n){function r(e,n,i,o,a,u){var c=i;if(!c&&n&&n.length>0){var l=n[0];c=l&&l.loc&&l.loc.source}var s=o;!s&&n&&(s=n.filter(function(e){return Boolean(e.loc)}).map(function(e){return e.loc.start})),s&&0===s.length&&(s=void 0);var f=void 0,d=c;d&&s&&(f=s.map(function(e){return(0,t.getLocation)(d,e)})),Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:f||void 0,enumerable:!0},path:{value:a||void 0,enumerable:!0},nodes:{value:n||void 0},source:{value:c||void 0},positions:{value:s||void 0},originalError:{value:u}}),u&&u.stack?Object.defineProperty(this,"stack",{value:u.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,r):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}Object.defineProperty(n,"__esModule",{value:!0}),n.GraphQLError=r;var t=location;r.prototype=Object.create(Error.prototype,{constructor:{value:r},name:{value:"GraphQLError"}})}),syntaxError_1=createCommonjsModule(function(e,n){function r(e,n){var r=n.line,a=e.locationOffset.line-1,u=t(e,n),c=r+a,l=(c-1).toString(),s=c.toString(),f=(c+1).toString(),d=f.length,v=e.body.split(/\r\n|[\n\r]/g);return v[0]=i(e.locationOffset.column-1)+v[0],(r>=2?o(d,l)+": "+v[r-2]+"\n":"")+o(d,s)+": "+v[r-1]+"\n"+i(2+d+n.column-1+u)+"^\n"+(r<v.length?o(d,f)+": "+v[r]+"\n":"")}function t(e,n){return 1===n.line?e.locationOffset.column-1:0}function i(e){return Array(e+1).join(" ")}function o(e,n){return i(e-n.length)+n}Object.defineProperty(n,"__esModule",{value:!0}),n.syntaxError=function(e,n,i){var o=(0,a.getLocation)(e,n),c=o.line+e.locationOffset.line-1,l=t(e,o),s=o.column+l;return new u.GraphQLError("Syntax Error "+e.name+" ("+c+":"+s+") "+i+"\n\n"+r(e,o),void 0,e,[n])};var a=location,u=GraphQLError_1}),locatedError_1=createCommonjsModule(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.locatedError=function(e,n,t){if(e&&e.path)return e;var i=e?e.message||String(e):"An unknown error occurred.";return new r.GraphQLError(i,e&&e.nodes||n,e&&e.source,e&&e.positions,t,e)};var r=GraphQLError_1}),invariant_1=createCommonjsModule(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){if(!e)throw new Error(n)}}),formatError_1=createCommonjsModule(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.formatError=function(e){return e||(0,r.default)(0,"Received null or undefined error."),{message:e.message,locations:e.locations,path:e.path}};var r=function(e){return e&&e.__esModule?e:{default:e}}(invariant_1)}),index$2=createCommonjsModule(function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var r=GraphQLError_1;Object.defineProperty(n,"GraphQLError",{enumerable:!0,get:function(){return r.GraphQLError}});var t=syntaxError_1;Object.defineProperty(n,"syntaxError",{enumerable:!0,get:function(){return t.syntaxError}});var i=locatedError_1;Object.defineProperty(n,"locatedError",{enumerable:!0,get:function(){return i.locatedError}});var o=formatError_1;Object.defineProperty(n,"formatError",{enumerable:!0,get:function(){return o.formatError}})}),lexer=createCommonjsModule(function(e,n){function r(){var e=this.lastToken=this.token;if(e.kind!==m){do{e=e.next=o(this,e)}while(e.kind===F);this.token=e}return e}function t(e,n,r,t,i,o,a){this.kind=e,this.start=n,this.end=r,this.line=t,this.column=i,this.value=a,this.prev=o,this.next=null}function i(e){return isNaN(e)?m:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'+("00"+e.toString(16).toUpperCase()).slice(-4)+'"'}function o(e,n){var r=e.source,o=r.body,s=o.length,d=u(o,n.end,e),v=e.line,T=1+d-e.lineStart;if(d>=s)return new t(m,s,s,v,T,n);var C=w.call(o,d);if(C<32&&9!==C&&10!==C&&13!==C)throw(0,E.syntaxError)(r,d,"Cannot contain the invalid character "+i(C)+".");switch(C){case 33:return new t(k,d,d+1,v,T,n);case 35:return c(r,d,v,T,n);case 36:return new t(y,d,d+1,v,T,n);case 40:return new t(N,d,d+1,v,T,n);case 41:return new t(I,d,d+1,v,T,n);case 46:if(46===w.call(o,d+1)&&46===w.call(o,d+2))return new t(O,d,d+3,v,T,n);break;case 58:return new t(_,d,d+1,v,T,n);case 61:return new t(h,d,d+1,v,T,n);case 64:return new t(A,d,d+1,v,T,n);case 91:return new t(D,d,d+1,v,T,n);case 93:return new t(b,d,d+1,v,T,n);case 123:return new t(g,d,d+1,v,T,n);case 124:return new t(L,d,d+1,v,T,n);case 125:return new t(S,d,d+1,v,T,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return p(r,d,v,T,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return l(r,d,C,v,T,n);case 34:return f(r,d,v,T,n)}throw(0,E.syntaxError)(r,d,a(C))}function a(e){return 39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character "+i(e)+"."}function u(e,n,r){for(var t=e.length,i=n;i<t;){var o=w.call(e,i);if(9===o||32===o||44===o||65279===o)++i;else if(10===o)++i,++r.line,r.lineStart=i;else{if(13!==o)break;10===w.call(e,i+1)?i+=2:++i,++r.line,r.lineStart=i}}return i}function c(e,n,r,i,o){var a=e.body,u=void 0,c=n;do{u=w.call(a,++c)}while(null!==u&&(u>31||9===u));return new t(F,n,c,r,i,o,j.call(a,n+1,c))}function l(e,n,r,o,a,u){var c=e.body,l=r,f=n,d=!1;if(45===l&&(l=w.call(c,++f)),48===l){if((l=w.call(c,++f))>=48&&l<=57)throw(0,E.syntaxError)(e,f,"Invalid number, unexpected digit after 0: "+i(l)+".")}else f=s(e,f,l),l=w.call(c,f);return 46===l&&(d=!0,l=w.call(c,++f),f=s(e,f,l),l=w.call(c,f)),69!==l&&101!==l||(d=!0,43!==(l=w.call(c,++f))&&45!==l||(l=w.call(c,++f)),f=s(e,f,l)),new t(d?R:P,n,f,o,a,u,j.call(c,n,f))}function s(e,n,r){var t=e.body,o=n,a=r;if(a>=48&&a<=57){do{a=w.call(t,++o)}while(a>=48&&a<=57);return o}throw(0,E.syntaxError)(e,o,"Invalid number, expected digit but got: "+i(a)+".")}function f(e,n,r,o,a){for(var u=e.body,c=n+1,l=c,s=0,f="";c<u.length&&null!==(s=w.call(u,c))&&10!==s&&13!==s&&34!==s;){if(s<32&&9!==s)throw(0,E.syntaxError)(e,c,"Invalid character within String: "+i(s)+".");if(++c,92===s){switch(f+=j.call(u,l,c-1),s=w.call(u,c)){case 34:f+='"';break;case 47:f+="/";break;case 92:f+="\\";break;case 98:f+="\b";break;case 102:f+="\f";break;case 110:f+="\n";break;case 114:f+="\r";break;case 116:f+="\t";break;case 117:var v=d(w.call(u,c+1),w.call(u,c+2),w.call(u,c+3),w.call(u,c+4));if(v<0)throw(0,E.syntaxError)(e,c,"Invalid character escape sequence: \\u"+u.slice(c+1,c+5)+".");f+=String.fromCharCode(v),c+=4;break;default:throw(0,E.syntaxError)(e,c,"Invalid character escape sequence: \\"+String.fromCharCode(s)+".")}l=++c}}if(34!==s)throw(0,E.syntaxError)(e,c,"Unterminated string.");return f+=j.call(u,l,c),new t(K,n,c+1,r,o,a,f)}function d(e,n,r,t){return v(e)<<12|v(n)<<8|v(r)<<4|v(t)}function v(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function p(e,n,r,i,o){for(var a=e.body,u=a.length,c=n+1,l=0;c!==u&&null!==(l=w.call(a,c))&&(95===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122);)++c;return new t(C,n,c,r,i,o,j.call(a,n,c))}Object.defineProperty(n,"__esModule",{value:!0}),n.TokenKind=void 0,n.createLexer=function(e,n){var i=new t(T,0,0,0,0,null);return{source:e,options:n,lastToken:i,token:i,line:1,lineStart:0,advance:r}},n.getTokenDesc=function(e){var n=e.value;return n?e.kind+' "'+n+'"':e.kind};var E=index$2,T="<SOF>",m="<EOF>",k="!",y="$",N="(",I=")",O="...",_=":",h="=",A="@",D="[",b="]",g="{",L="|",S="}",C="Name",P="Int",R="Float",K="String",F="Comment",w=(n.TokenKind={SOF:T,EOF:m,BANG:k,DOLLAR:y,PAREN_L:N,PAREN_R:I,SPREAD:O,COLON:_,EQUALS:h,AT:A,BRACKET_L:D,BRACKET_R:b,BRACE_L:g,PIPE:L,BRACE_R:S,NAME:C,INT:P,FLOAT:R,STRING:K,COMMENT:F},String.prototype.charCodeAt),j=String.prototype.slice;t.prototype.toJSON=t.prototype.inspect=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}),source=createCommonjsModule(function(e,n){function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.Source=void 0;var t=function(e){return e&&e.__esModule?e:{default:e}}(invariant_1);n.Source=function e(n,i,o){r(this,e),this.body=n,this.name=i||"GraphQL request",this.locationOffset=o||{line:1,column:1},this.locationOffset.line>0||(0,t.default)(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||(0,t.default)(0,"column in locationOffset is 1-indexed and must be positive")}}),kinds=createCommonjsModule(function(e,n){Object.defineProperty(n,"__esModule",{value:!0});n.NAME="Name",n.DOCUMENT="Document",n.OPERATION_DEFINITION="OperationDefinition",n.VARIABLE_DEFINITION="VariableDefinition",n.VARIABLE="Variable",n.SELECTION_SET="SelectionSet",n.FIELD="Field",n.ARGUMENT="Argument",n.FRAGMENT_SPREAD="FragmentSpread",n.INLINE_FRAGMENT="InlineFragment",n.FRAGMENT_DEFINITION="FragmentDefinition",n.INT="IntValue",n.FLOAT="FloatValue",n.STRING="StringValue",n.BOOLEAN="BooleanValue",n.NULL="NullValue",n.ENUM="EnumValue",n.LIST="ListValue",n.OBJECT="ObjectValue",n.OBJECT_FIELD="ObjectField",n.DIRECTIVE="Directive",n.NAMED_TYPE="NamedType",n.LIST_TYPE="ListType",n.NON_NULL_TYPE="NonNullType",n.SCHEMA_DEFINITION="SchemaDefinition",n.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",n.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",n.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",n.FIELD_DEFINITION="FieldDefinition",n.INPUT_VALUE_DEFINITION="InputValueDefinition",n.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",n.UNION_TYPE_DEFINITION="UnionTypeDefinition",n.ENUM_TYPE_DEFINITION="EnumTypeDefinition",n.ENUM_VALUE_DEFINITION="EnumValueDefinition",n.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",n.TYPE_EXTENSION_DEFINITION="TypeExtensionDefinition",n.DIRECTIVE_DEFINITION="DirectiveDefinition"}),parser=createCommonjsModule(function(e,n){function r(e){var n=H(e,te.TokenKind.NAME);return{kind:ie.NAME,value:n.value,loc:J(e,n)}}function t(e){var n=e.token;H(e,te.TokenKind.SOF);var r=[];do{r.push(i(e))}while(!W(e,te.TokenKind.EOF));return{kind:ie.DOCUMENT,definitions:r,loc:J(e,n)}}function i(e){if($(e,te.TokenKind.BRACE_L))return o(e);if($(e,te.TokenKind.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":return o(e);case"fragment":return T(e);case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"extend":case"directive":return g(e)}throw z(e)}function o(e){var n=e.token;if($(e,te.TokenKind.BRACE_L))return{kind:ie.OPERATION_DEFINITION,operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:s(e),loc:J(e,n)};var t=a(e),i=void 0;return $(e,te.TokenKind.NAME)&&(i=r(e)),{kind:ie.OPERATION_DEFINITION,operation:t,name:i,variableDefinitions:u(e),directives:h(e),selectionSet:s(e),loc:J(e,n)}}function a(e){var n=H(e,te.TokenKind.NAME);switch(n.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw z(e,n)}function u(e){return $(e,te.TokenKind.PAREN_L)?ee(e,te.TokenKind.PAREN_L,c,te.TokenKind.PAREN_R):[]}function c(e){var n=e.token;return{kind:ie.VARIABLE_DEFINITION,variable:l(e),type:(H(e,te.TokenKind.COLON),D(e)),defaultValue:W(e,te.TokenKind.EQUALS)?k(e,!0):null,loc:J(e,n)}}function l(e){var n=e.token;return H(e,te.TokenKind.DOLLAR),{kind:ie.VARIABLE,name:r(e),loc:J(e,n)}}function s(e){var n=e.token;return{kind:ie.SELECTION_SET,selections:ee(e,te.TokenKind.BRACE_L,f,te.TokenKind.BRACE_R),loc:J(e,n)}}function f(e){return $(e,te.TokenKind.SPREAD)?E(e):d(e)}function d(e){var n=e.token,t=r(e),i=void 0,o=void 0;return W(e,te.TokenKind.COLON)?(i=t,o=r(e)):(i=null,o=t),{kind:ie.FIELD,alias:i,name:o,arguments:v(e),directives:h(e),selectionSet:$(e,te.TokenKind.BRACE_L)?s(e):null,loc:J(e,n)}}function v(e){return $(e,te.TokenKind.PAREN_L)?ee(e,te.TokenKind.PAREN_L,p,te.TokenKind.PAREN_R):[]}function p(e){var n=e.token;return{kind:ie.ARGUMENT,name:r(e),value:(H(e,te.TokenKind.COLON),k(e,!1)),loc:J(e,n)}}function E(e){var n=e.token;if(H(e,te.TokenKind.SPREAD),$(e,te.TokenKind.NAME)&&"on"!==e.token.value)return{kind:ie.FRAGMENT_SPREAD,name:m(e),directives:h(e),loc:J(e,n)};var r=null;return"on"===e.token.value&&(e.advance(),r=b(e)),{kind:ie.INLINE_FRAGMENT,typeCondition:r,directives:h(e),selectionSet:s(e),loc:J(e,n)}}function T(e){var n=e.token;return X(e,"fragment"),{kind:ie.FRAGMENT_DEFINITION,name:m(e),typeCondition:(X(e,"on"),b(e)),directives:h(e),selectionSet:s(e),loc:J(e,n)}}function m(e){if("on"===e.token.value)throw z(e);return r(e)}function k(e,n){var r=e.token;switch(r.kind){case te.TokenKind.BRACKET_L:return I(e,n);case te.TokenKind.BRACE_L:return O(e,n);case te.TokenKind.INT:return e.advance(),{kind:ie.INT,value:r.value,loc:J(e,r)};case te.TokenKind.FLOAT:return e.advance(),{kind:ie.FLOAT,value:r.value,loc:J(e,r)};case te.TokenKind.STRING:return e.advance(),{kind:ie.STRING,value:r.value,loc:J(e,r)};case te.TokenKind.NAME:return"true"===r.value||"false"===r.value?(e.advance(),{kind:ie.BOOLEAN,value:"true"===r.value,loc:J(e,r)}):"null"===r.value?(e.advance(),{kind:ie.NULL,loc:J(e,r)}):(e.advance(),{kind:ie.ENUM,value:r.value,loc:J(e,r)});case te.TokenKind.DOLLAR:if(!n)return l(e)}throw z(e)}function y(e){return k(e,!0)}function N(e){return k(e,!1)}function I(e,n){var r=e.token,t=n?y:N;return{kind:ie.LIST,values:Z(e,te.TokenKind.BRACKET_L,t,te.TokenKind.BRACKET_R),loc:J(e,r)}}function O(e,n){var r=e.token;H(e,te.TokenKind.BRACE_L);for(var t=[];!W(e,te.TokenKind.BRACE_R);)t.push(_(e,n));return{kind:ie.OBJECT,fields:t,loc:J(e,r)}}function _(e,n){var t=e.token;return{kind:ie.OBJECT_FIELD,name:r(e),value:(H(e,te.TokenKind.COLON),k(e,n)),loc:J(e,t)}}function h(e){for(var n=[];$(e,te.TokenKind.AT);)n.push(A(e));return n}function A(e){var n=e.token;return H(e,te.TokenKind.AT),{kind:ie.DIRECTIVE,name:r(e),arguments:v(e),loc:J(e,n)}}function D(e){var n=e.token,r=void 0;return W(e,te.TokenKind.BRACKET_L)?(r=D(e),H(e,te.TokenKind.BRACKET_R),r={kind:ie.LIST_TYPE,type:r,loc:J(e,n)}):r=b(e),W(e,te.TokenKind.BANG)?{kind:ie.NON_NULL_TYPE,type:r,loc:J(e,n)}:r}function b(e){var n=e.token;return{kind:ie.NAMED_TYPE,name:r(e),loc:J(e,n)}}function g(e){if($(e,te.TokenKind.NAME))switch(e.token.value){case"schema":return L(e);case"scalar":return C(e);case"type":return P(e);case"interface":return j(e);case"union":return M(e);case"enum":return V(e);case"input":return U(e);case"extend":return G(e);case"directive":return Y(e)}throw z(e)}function L(e){var n=e.token;X(e,"schema");var r=h(e),t=ee(e,te.TokenKind.BRACE_L,S,te.TokenKind.BRACE_R);return{kind:ie.SCHEMA_DEFINITION,directives:r,operationTypes:t,loc:J(e,n)}}function S(e){var n=e.token,r=a(e);H(e,te.TokenKind.COLON);var t=b(e);return{kind:ie.OPERATION_TYPE_DEFINITION,operation:r,type:t,loc:J(e,n)}}function C(e){var n=e.token;X(e,"scalar");var t=r(e),i=h(e);return{kind:ie.SCALAR_TYPE_DEFINITION,name:t,directives:i,loc:J(e,n)}}function P(e){var n=e.token;X(e,"type");var t=r(e),i=R(e),o=h(e),a=Z(e,te.TokenKind.BRACE_L,K,te.TokenKind.BRACE_R);return{kind:ie.OBJECT_TYPE_DEFINITION,name:t,interfaces:i,directives:o,fields:a,loc:J(e,n)}}function R(e){var n=[];if("implements"===e.token.value){e.advance();do{n.push(b(e))}while($(e,te.TokenKind.NAME))}return n}function K(e){var n=e.token,t=r(e),i=F(e);H(e,te.TokenKind.COLON);var o=D(e),a=h(e);return{kind:ie.FIELD_DEFINITION,name:t,arguments:i,type:o,directives:a,loc:J(e,n)}}function F(e){return $(e,te.TokenKind.PAREN_L)?ee(e,te.TokenKind.PAREN_L,w,te.TokenKind.PAREN_R):[]}function w(e){var n=e.token,t=r(e);H(e,te.TokenKind.COLON);var i=D(e),o=null;W(e,te.TokenKind.EQUALS)&&(o=y(e));var a=h(e);return{kind:ie.INPUT_VALUE_DEFINITION,name:t,type:i,defaultValue:o,directives:a,loc:J(e,n)}}function j(e){var n=e.token;X(e,"interface");var t=r(e),i=h(e),o=Z(e,te.TokenKind.BRACE_L,K,te.TokenKind.BRACE_R);return{kind:ie.INTERFACE_TYPE_DEFINITION,name:t,directives:i,fields:o,loc:J(e,n)}}function M(e){var n=e.token;X(e,"union");var t=r(e),i=h(e);H(e,te.TokenKind.EQUALS);var o=x(e);return{kind:ie.UNION_TYPE_DEFINITION,name:t,directives:i,types:o,loc:J(e,n)}}function x(e){W(e,te.TokenKind.PIPE);var n=[];do{n.push(b(e))}while(W(e,te.TokenKind.PIPE));return n}function V(e){var n=e.token;X(e,"enum");var t=r(e),i=h(e),o=ee(e,te.TokenKind.BRACE_L,B,te.TokenKind.BRACE_R);return{kind:ie.ENUM_TYPE_DEFINITION,name:t,directives:i,values:o,loc:J(e,n)}}function B(e){var n=e.token,t=r(e),i=h(e);return{kind:ie.ENUM_VALUE_DEFINITION,name:t,directives:i,loc:J(e,n)}}function U(e){var n=e.token;X(e,"input");var t=r(e),i=h(e),o=Z(e,te.TokenKind.BRACE_L,w,te.TokenKind.BRACE_R);return{kind:ie.INPUT_OBJECT_TYPE_DEFINITION,name:t,directives:i,fields:o,loc:J(e,n)}}function G(e){var n=e.token;X(e,"extend");var r=P(e);return{kind:ie.TYPE_EXTENSION_DEFINITION,definition:r,loc:J(e,n)}}function Y(e){var n=e.token;X(e,"directive"),H(e,te.TokenKind.AT);var t=r(e),i=F(e);X(e,"on");var o=Q(e);return{kind:ie.DIRECTIVE_DEFINITION,name:t,arguments:i,locations:o,loc:J(e,n)}}function Q(e){W(e,te.TokenKind.PIPE);var n=[];do{n.push(r(e))}while(W(e,te.TokenKind.PIPE));return n}function J(e,n){if(!e.options.noLocation)return new q(n,e.lastToken,e.source)}function q(e,n,r){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=r}function $(e,n){return e.token.kind===n}function W(e,n){var r=e.token.kind===n;return r&&e.advance(),r}function H(e,n){var r=e.token;if(r.kind===n)return e.advance(),r;throw(0,re.syntaxError)(e.source,r.start,"Expected "+n+", found "+(0,te.getTokenDesc)(r))}function X(e,n){var r=e.token;if(r.kind===te.TokenKind.NAME&&r.value===n)return e.advance(),r;throw(0,re.syntaxError)(e.source,r.start,'Expected "'+n+'", found '+(0,te.getTokenDesc)(r))}function z(e,n){var r=n||e.token;return(0,re.syntaxError)(e.source,r.start,"Unexpected "+(0,te.getTokenDesc)(r))}function Z(e,n,r,t){H(e,n);for(var i=[];!W(e,t);)i.push(r(e));return i}function ee(e,n,r,t){H(e,n);for(var i=[r(e)];!W(e,t);)i.push(r(e));return i}Object.defineProperty(n,"__esModule",{value:!0}),n.parse=function(e,n){var r="string"==typeof e?new ne.Source(e):e;if(!(r instanceof ne.Source))throw new TypeError("Must provide Source. Received: "+String(r));return t((0,te.createLexer)(r,n||{}))},n.parseValue=function(e,n){var r="string"==typeof e?new ne.Source(e):e,t=(0,te.createLexer)(r,n||{});H(t,te.TokenKind.SOF);var i=k(t,!1);return H(t,te.TokenKind.EOF),i},n.parseType=function(e,n){var r="string"==typeof e?new ne.Source(e):e,t=(0,te.createLexer)(r,n||{});H(t,te.TokenKind.SOF);var i=D(t);return H(t,te.TokenKind.EOF),i},n.parseConstValue=y,n.parseTypeReference=D,n.parseNamedType=b;var ne=source,re=index$2,te=lexer,ie=kinds;q.prototype.toJSON=q.prototype.inspect=function(){return{start:this.start,end:this.end}}}),visitor=createCommonjsModule(function(e,n){function r(e){return e&&"string"==typeof e.kind}function t(e,n,r){var t=e[n];if(t){if(!r&&"function"==typeof t)return t;var i=r?t.leave:t.enter;if("function"==typeof i)return i}else{var o=r?e.leave:e.enter;if(o){if("function"==typeof o)return o;var a=o[n];if("function"==typeof a)return a}}}Object.defineProperty(n,"__esModule",{value:!0}),n.visit=function(e,n,a){var u=a||i,c=void 0,l=Array.isArray(e),s=[e],f=-1,d=[],v=void 0,p=[],E=[],T=e;do{var m=++f===s.length,k=void 0,y=void 0,N=m&&0!==d.length;if(m){if(k=0===E.length?void 0:p.pop(),y=v,v=E.pop(),N){if(l)y=y.slice();else{var I={};for(var O in y)y.hasOwnProperty(O)&&(I[O]=y[O]);y=I}for(var _=0,h=0;h<d.length;h++){var A=d[h][0],D=d[h][1];l&&(A-=_),l&&null===D?(y.splice(A,1),_++):y[A]=D}}f=c.index,s=c.keys,d=c.edits,l=c.inArray,c=c.prev}else{if(k=v?l?f:s[f]:void 0,null===(y=v?v[k]:T)||void 0===y)continue;v&&p.push(k)}var b=void 0;if(!Array.isArray(y)){if(!r(y))throw new Error("Invalid AST Node: "+JSON.stringify(y));var g=t(n,y.kind,m);if(g){if((b=g.call(n,y,k,v,p,E))===o)break;if(!1===b){if(!m){p.pop();continue}}else if(void 0!==b&&(d.push([k,b]),!m)){if(!r(b)){p.pop();continue}y=b}}}void 0===b&&N&&d.push([k,y]),m||(c={inArray:l,index:f,keys:s,edits:d,prev:c},s=(l=Array.isArray(y))?y:u[y.kind]||[],f=-1,d=[],v&&E.push(v),v=y)}while(void 0!==c);return 0!==d.length&&(T=d[d.length-1][1]),T},n.visitInParallel=function(e){var n=new Array(e.length);return{enter:function(r){for(var i=0;i<e.length;i++)if(!n[i]){var a=t(e[i],r.kind,!1);if(a){var u=a.apply(e[i],arguments);if(!1===u)n[i]=r;else if(u===o)n[i]=o;else if(void 0!==u)return u}}},leave:function(r){for(var i=0;i<e.length;i++)if(n[i])n[i]===r&&(n[i]=null);else{var a=t(e[i],r.kind,!0);if(a){var u=a.apply(e[i],arguments);if(u===o)n[i]=o;else if(void 0!==u&&!1!==u)return u}}}}},n.visitWithTypeInfo=function(e,n){return{enter:function(i){e.enter(i);var o=t(n,i.kind,!1);if(o){var a=o.apply(n,arguments);return void 0!==a&&(e.leave(i),r(a)&&e.enter(a)),a}},leave:function(r){var i=t(n,r.kind,!0),o=void 0;return i&&(o=i.apply(n,arguments)),e.leave(r),o}}},n.getVisitFn=t;var i=n.QueryDocumentKeys={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["name","directives"],ObjectTypeDefinition:["name","interfaces","directives","fields"],FieldDefinition:["name","arguments","type","directives"],InputValueDefinition:["name","type","defaultValue","directives"],InterfaceTypeDefinition:["name","directives","fields"],UnionTypeDefinition:["name","directives","types"],EnumTypeDefinition:["name","directives","values"],EnumValueDefinition:["name","directives"],InputObjectTypeDefinition:["name","directives","fields"],TypeExtensionDefinition:["definition"],DirectiveDefinition:["name","arguments","locations"]},o=n.BREAK={}}),printer=createCommonjsModule(function(e,n){function r(e,n){return e?e.filter(function(e){return e}).join(n||""):""}function t(e){return e&&0!==e.length?o("{\n"+r(e,"\n"))+"\n}":"{}"}function i(e,n,r){return n?e+n+(r||""):""}function o(e){return e&&e.replace(/\n/g,"\n  ")}Object.defineProperty(n,"__esModule",{value:!0}),n.print=function(e){return(0,a.visit)(e,{leave:u})};var a=visitor,u={Name:function(e){return e.value},Variable:function(e){return"$"+e.name},Document:function(e){return r(e.definitions,"\n\n")+"\n"},OperationDefinition:function(e){var n=e.operation,t=e.name,o=i("(",r(e.variableDefinitions,", "),")"),a=r(e.directives," "),u=e.selectionSet;return t||a||o||"query"!==n?r([n,r([t,o]),a,u]," "):u},VariableDefinition:function(e){return e.variable+": "+e.type+i(" = ",e.defaultValue)},SelectionSet:function(e){return t(e.selections)},Field:function(e){var n=e.alias,t=e.name,o=e.arguments,a=e.directives,u=e.selectionSet;return r([i("",n,": ")+t+i("(",r(o,", "),")"),r(a," "),u]," ")},Argument:function(e){return e.name+": "+e.value},FragmentSpread:function(e){return"..."+e.name+i(" ",r(e.directives," "))},InlineFragment:function(e){var n=e.typeCondition,t=e.directives,o=e.selectionSet;return r(["...",i("on ",n),r(t," "),o]," ")},FragmentDefinition:function(e){var n=e.name,t=e.typeCondition,o=e.directives,a=e.selectionSet;return"fragment "+n+" on "+t+" "+i("",r(o," ")," ")+a},IntValue:function(e){return e.value},FloatValue:function(e){return e.value},StringValue:function(e){var n=e.value;return JSON.stringify(n)},BooleanValue:function(e){var n=e.value;return JSON.stringify(n)},NullValue:function(){return"null"},EnumValue:function(e){return e.value},ListValue:function(e){return"["+r(e.values,", ")+"]"},ObjectValue:function(e){return"{"+r(e.fields,", ")+"}"},ObjectField:function(e){return e.name+": "+e.value},Directive:function(e){return"@"+e.name+i("(",r(e.arguments,", "),")")},NamedType:function(e){return e.name},ListType:function(e){return"["+e.type+"]"},NonNullType:function(e){return e.type+"!"},SchemaDefinition:function(e){var n=e.directives,i=e.operationTypes;return r(["schema",r(n," "),t(i)]," ")},OperationTypeDefinition:function(e){return e.operation+": "+e.type},ScalarTypeDefinition:function(e){return r(["scalar",e.name,r(e.directives," ")]," ")},ObjectTypeDefinition:function(e){var n=e.name,o=e.interfaces,a=e.directives,u=e.fields;return r(["type",n,i("implements ",r(o,", ")),r(a," "),t(u)]," ")},FieldDefinition:function(e){var n=e.name,t=e.arguments,o=e.type,a=e.directives;return n+i("(",r(t,", "),")")+": "+o+i(" ",r(a," "))},InputValueDefinition:function(e){var n=e.name,t=e.type,o=e.defaultValue,a=e.directives;return r([n+": "+t,i("= ",o),r(a," ")]," ")},InterfaceTypeDefinition:function(e){var n=e.name,i=e.directives,o=e.fields;return r(["interface",n,r(i," "),t(o)]," ")},UnionTypeDefinition:function(e){var n=e.name,t=e.directives,i=e.types;return r(["union",n,r(t," "),"= "+r(i," | ")]," ")},EnumTypeDefinition:function(e){var n=e.name,i=e.directives,o=e.values;return r(["enum",n,r(i," "),t(o)]," ")},EnumValueDefinition:function(e){return r([e.name,r(e.directives," ")]," ")},InputObjectTypeDefinition:function(e){var n=e.name,i=e.directives,o=e.fields;return r(["input",n,r(i," "),t(o)]," ")},TypeExtensionDefinition:function(e){return"extend "+e.definition},DirectiveDefinition:function(e){var n=e.name,t=e.arguments,o=e.locations;return"directive @"+n+i("(",r(t,", "),")")+" on "+r(o," | ")}}}),index=createCommonjsModule(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.BREAK=n.getVisitFn=n.visitWithTypeInfo=n.visitInParallel=n.visit=n.Source=n.print=n.parseType=n.parseValue=n.parse=n.TokenKind=n.createLexer=n.Kind=n.getLocation=void 0;var r=location;Object.defineProperty(n,"getLocation",{enumerable:!0,get:function(){return r.getLocation}});var t=lexer;Object.defineProperty(n,"createLexer",{enumerable:!0,get:function(){return t.createLexer}}),Object.defineProperty(n,"TokenKind",{enumerable:!0,get:function(){return t.TokenKind}});var i=parser;Object.defineProperty(n,"parse",{enumerable:!0,get:function(){return i.parse}}),Object.defineProperty(n,"parseValue",{enumerable:!0,get:function(){return i.parseValue}}),Object.defineProperty(n,"parseType",{enumerable:!0,get:function(){return i.parseType}});var o=printer;Object.defineProperty(n,"print",{enumerable:!0,get:function(){return o.print}});var a=source;Object.defineProperty(n,"Source",{enumerable:!0,get:function(){return a.Source}});var u=visitor;Object.defineProperty(n,"visit",{enumerable:!0,get:function(){return u.visit}}),Object.defineProperty(n,"visitInParallel",{enumerable:!0,get:function(){return u.visitInParallel}}),Object.defineProperty(n,"visitWithTypeInfo",{enumerable:!0,get:function(){return u.visitWithTypeInfo}}),Object.defineProperty(n,"getVisitFn",{enumerable:!0,get:function(){return u.getVisitFn}}),Object.defineProperty(n,"BREAK",{enumerable:!0,get:function(){return u.BREAK}});var c=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.default=e,n}(kinds);n.Kind=c});const createError=parserCreateError;var parserGraphql=parse;module.exports=parserGraphql;
