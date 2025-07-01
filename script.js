function sortearNomes() {
    const input = document.getElementById('nomesInput').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const resultado = document.getElementById('resultado');
    
    let nomes = input.split(',').map(nome => nome.trim()).filter(nome => nome.length > 0);
    
    if (nomes.length < quantidade) {
        resultado.innerHTML = 'Quantidade de nomes insuficiente.';
        return;
    }

    let nomesSorteados = [];

    for(let i = 0; i < quantidade; i++) {
        const indice = Math.floor(Math.random() * nomes.length);
        nomesSorteados.push(nomes[indice]);
        nomes.splice(indice, 1);
    }
    
    resultado.innerHTML = nomesSorteados.join(', ');
    
}