const resultadoInput = document.querySelector('.resultado');


function adicionarValor(valor) {
    resultadoInput.value += valor;
}
function adicionarOperacao(operacao){
    resultadoInput.value += operacao;
}
function adicionarVirgula(virgula){
    resultadoInput.value += virgula;
}
function limpar(){
    resultadoInput.value = '';
}
function adicionarVirgula(){
    resultadoInput.value += ',';
}
function calcularResultado() {
    resultadoInput.value = eval(resultadoInput.value);
}