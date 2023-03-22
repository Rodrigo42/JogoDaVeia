let tabela = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let jogada = 0;
let turns = 0;
const playerOne = "x";
const playerTwo = "o";
let playerTurn = "x";


function showGame() {
    console.clear();
    console.log(" "+ tabela[0],"|" +tabela[1],"|" +tabela[2]+ '\n', 
    "--------" + '\n',
    ""+tabela[3],"|"+tabela[4],"|"+tabela[5]+ '\n', 
    "--------" + '\n', 
    ""+tabela[6],"|"+tabela[7],"|"+tabela[8]);
};

function validatePlay (jogada){
    if(jogada < 0 || jogada > 8){
        console.log("Nummero invalído. Tente novamente.");
        return false;
    }else if(tabela[jogada] == "x" || tabela[jogada] == "o") {
        console.log("Jogada invalida. Tente novamente.");
        return false;
    }else {
        return true;
    }
};

function validateWinner(){
    
    if(tabela[0] === tabela[1] && tabela[0] === tabela[2] || 
    tabela[3] === tabela[4] && tabela[3] === tabela[5] || 
    tabela[6] === tabela[7] && tabela[6] === tabela[8] ||
    tabela[0] === tabela[3] && tabela[0] === tabela[6] ||
    tabela[1] === tabela[4] && tabela[1] === tabela[7] ||
    tabela[2] === tabela[5] && tabela[2] === tabela[8] ||
    tabela[0] === tabela[4] && tabela[0] === tabela[8] ||
    tabela[2] === tabela[4] && tabela[2] === tabela[6]){
        
        console.log("Parabéns  você venceu!");
        console.log("GAME OVER.");
        return turns = 10;
    }else if(turns >= 9){
        console.log("Empate.");
        console.log("GAME OVER.");
        return false;
    }
};

function play(){
    
    while(turns < 9){
        
        jogada = parseInt(prompt("Digite um numero para fazer uma jogada: ", _default = 0)) - 1;
        if(validatePlay(jogada) == true){
            turns++;
            tabela.splice(jogada, 1, playerTurn);
            
            changePlayer()
            showGame();
        }
        validateWinner();
    }  
            
};

function changePlayer(){
    if(turns % 2 === 0){
        playerTurn = playerOne;
        return playerTurn;
    }else{
        playerTurn = playerTwo;
        return playerTurn;
    }
};


play();

