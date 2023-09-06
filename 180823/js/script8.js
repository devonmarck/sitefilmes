/* Objetivo: fazer o carregamento da url com filmes
Será usado o comando fetch() para localizar
e carregar os filmes e exibir em uma página html
*/

function carregarFilmes() {
    fetch("js/apiFilmes.json")

        .then((response) => response.json())
        .then((dados) => {
            console.log(dados.results);
            var saida = "<div id=filme>";
            dados.results.map((item, i) => {

                saida += `
                
                <div>
                <a href="${item.link}">
                <img src=https://image.tmdb.org/t/p/w500${item.poster_path}>
                </a>
                <p id=voto>${item.vote_average}</p>
                <h2>${item.title}</h2>
                <p id=data>${item.release_date}</p>
                </div>
            `;
            });
            saida += "</div>";
            document.body.innerHTML += saida;
        })
        .catch((erro) => console.log(`Erro ao tentar executar a API -> ${erro}`));
}