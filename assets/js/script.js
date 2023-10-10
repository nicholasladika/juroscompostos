// Esta linha seleciona o elemento HTML com ID 'calculate' e adiciona o ouvinte de evento do clique (click).
document.getElementById('calculate').addEventListener('click', function(){

    // Esta linha obtém o valor digitando no elemento HTML com ID 'value' e armazena na variavel 'value'.
    const value = document.getElementById('value').value;

    // Esta linha obtém o valor digitando no  elemento HTML com o ID 'fee' e o divide por 100 para obter uma taxa em decimal.
    //O resultado é armazenado na variável 'fee'.
    const fee = (document.getElementById('fee').value) / 100;

    //Esta linha obtém o valor digitado no elemento HTML com O ID 'time' e armazena na variável 'time'.
    const time = document.getElementById('time').value;

    // Esta linha calcula o total com base nos valores obyidos anteriormente. O cálculo é realizado usando a
    //fórmula de juros compostos.
    const total = value * (1 + fee)**time;

    //Esta linha atualiza o conteúdo do elemento HTML com o ID 'total' para mostrar o resulatado formatado
    //como uma string no formato "R$ X,XX".
    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.',','));
});