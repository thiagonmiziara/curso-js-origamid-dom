const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        resolve({ nome: 'Thiago', idade: 33 });
    } else {
        reject(Error('Um erro ocoreu na promise'));
    }
});
promessa.then(resolucao => console.log(resolucao));

const promessa1 = new Promise((resolve, reject) => {
    let condicao = false;
    if (condicao) {
        setTimeout(() => {
            resolve({ carro: 'supra', valor: 'R$100.000' });
        }, 1000);
    } else {
        reject(Error('Um erro ocorreu!'));
    }
});
const retorno = promessa1
    .then(resolucao => {
        resolucao.camionete = "Amarok", resolucao.price = "R$200.000";
        return resolucao;
    })
    .then(resolucao => {
        console.log(resolucao);
    })
    .catch(rejeitada => {
        console.log(rejeitada);
    });

///////////////// then(resolve , reject);

const promessa2 = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        resolve('Estou pronto!');
    } else {
        reject(Error('Ocorreu um erro!'));
    }
});
promessa2.then(resolucao => {
    console.log(resolucao);
}, reject => {
    console.log(reject);
}).finally(() => {
    console.log('Acabou!')
});

////////////////////Promise.all()/////////////////////////////

const login = new Promise(resolve => {
    setTimeout(() => {
        resolve('Login Efetuado');
    }, 1000);
});
const dados = new Promise(resolve => {
    setTimeout(() => {
        resolve('Dados Carregados');
    }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(respostas => {
    console.log(respostas); // Array com ambas respostas
});