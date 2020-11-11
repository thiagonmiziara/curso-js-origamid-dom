async function puxarDados() {
    try {
        const responseDados = await fetch('./dados.json');
        const responseClientes = await fetch('./clientes.json');

        const jsonDados = await (await responseDados).json();
        const jsonClientes = await (await responseClientes).json();

        document.body.innerText = jsonDados.aula;
        console.log(jsonClientes.nome);

    } catch (erro) {
        console.log(erro, 'um erro ocorreu')
    }
}
puxarDados();