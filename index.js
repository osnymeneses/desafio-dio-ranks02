let saldo = dadosJogador(100, 9);
let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
let res = nivelJogador(saldo);


function dadosJogador(vitorias, derrotas) {
    return vitorias - derrotas;
}


function nivelJogador() {
    let saldoVitorias = saldo;
    
    if(saldoVitorias <= 10) {
       return niveis[0];
    } else if(saldoVitorias >= 11 && saldoVitorias <= 20) {
        return niveis[1];
    } else if(saldoVitorias >=21 && saldoVitorias <= 50) {
        return niveis[2];
    } else if(saldoVitorias >= 51 && saldoVitorias <= 80) {
        return niveis[3];
    } else if( saldoVitorias >= 81 && saldoVitorias <= 90) {
        return niveis[4];
    } else if(saldoVitorias >= 91 && saldoVitorias <= 100) {
        return niveis[5];
    } else {
        return niveis[6];
    }
}

console.log(`O Herói tem de saldo ${saldo} vitórias e está no nível de ${res}.`);

//Regras
// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal