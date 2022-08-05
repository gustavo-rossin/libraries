let moment = require("moment"); //  require - puxa a biblioteca

let brasilTetra = moment('17071994','DDMMYYYY');
let fromNow = brasilTetra.fromNow(); // criou a variável fromNow e possui a função dentro da biblioteca fromNow().

console.log('Ouvimos o "É TETRAAA" há: ' + fromNow);