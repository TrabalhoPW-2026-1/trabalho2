/* Desenvolva uma função chamada searchUsers que aceita como parâmetro uma string
contendo um nome de usuário do GitHub. Dentro dessa função, use a API de usuários do
GitHub para procurar pelo usuário com o nome informado.
Use a função fetch do JavaScript para fazer uma requisição à API do GitHub usando o
endpoint https://api.github.com/search/users?q=<STR>, que retorna um array chamado
items contendo a lista de usuários do GitHub cujos nomes começam com a string STR. A
resposta da API é retornada como uma Promise, e você deverá usar o await para lidar com a

resposta. Se o array items não existir na resposta, então sua Promise deverá ser rejeitada e
deverá retornar uma mensagem de erro. Se o array items existir na resposta, então você
deve procurar nesse array pelo usuário com o nome exatamente igual ao passado para a
função searchUsers. Se você encontrar o usuário, sua Promise deverá retorna true. Caso
contrário, deverá retornar false.
Adicione async à declaração da função para permitir o uso de await. Teste a função
passando o nome de um usuário como argumento e verifique se a Promise é resolvida
corretamente, returnando true ou false ou uma mensagem de erro. */

const userName = process.argv[2];
if (!userName) {
    console.error("Por favor, forneça um nome de usuário do GitHub como argumento.");
    process.exit(1);
}


async function searchUsers(userName) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${userName}`);
            if (!response.ok) {
                reject(new Error("Erro ao buscar usuários"));
                return;
            }
            const data = await response.json();
            if (!data.items) {
                reject(new Error("Erro ao buscar usuários"));
                return;
            }
            const user = data.items.find(user => user.login === userName);
            resolve(!!user);
        } catch (error) {
            reject(error);
        }
    });
}


if (require.main === module) {
    searchUsers(userName)
        .then(result => console.log(result))
        .catch(error => console.error(error));
}
