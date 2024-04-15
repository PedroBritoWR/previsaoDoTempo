let chave = "cebcd482eda57fa9a6714c1c2ba91885"

async function buscarCidade(cidade){
    let dados = await fetch( "https://api.openweathermap.org/data/2.5/weather?q="+cidade+"&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric")
    .then(resposta => resposta.json());
    exibirNaTela(dados)
}
function cliqueNoBotao() {
    let cidade = document.querySelector(".input").value;
    buscarCidade(cidade);
}


function exibirNaTela (dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".grau").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+dados.weather[0].icon+".png";    
    }

    
