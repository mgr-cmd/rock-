console.log("Hello") ; 
const myArr=["rock","paper","scissors"]; 

//computer choice 

function getComputerChoice(){

let random = Math.floor(Math.random()*myArr.length);

return myArr[random]  ; 

}

// human choice 

function getHumanChoice(){
     
    const userChoice = prompt("Rock Paper Scissors") ; 
     const userIndex = myArr.findIndex(item => new RegExp(userChoice,'i').test(item)); //checking if the userChoice is valid or not ;
    if(userIndex == -1 ) {
        alert("Please enter a valid choice - ROCK PAPER SCISSORS")
        getHumanChoice() ;   
    } else {

        alert("Valid Choice") ; 
        return myArr[userIndex] ; 
    }

}



function playGame(){

//scoreboard 


    let userScore = 0  ; 
    let computerScore = 0;


//each round


    function playRound(computerChoice,humanChoice) {

            if (computerChoice===humanChoice) {

                    console.log(`Draw : ${humanChoice} ${computerChoice} `) ; 

            }else if (computerChoice==='rock' && humanChoice==='scissors' ){
                   
                computerScore++ ; 
                console.log(`You Lose ! ${computerChoice} beats ${humanChoice} ` ); 
            
            }else if (computerChoice==='paper' && humanChoice==='rock'){
                    
                computerScore++ ; 
                console.log(`You Lose ! ${computerChoice} beats ${humanChoice} ` ); 

            }else if (computerChoice === 'scissors' && humanChoice ==='paper'){
                    
                computerScore++ ; 
                console.log(`You Lose ! ${computerChoice} beats ${humanChoice} ` ); 

            } else if (humanChoice==='rock' && computerChoice==='scissors' ){
                    console.log(`You win ! ${humanChoice} beats ${computerChoice}`);
                    userScore++ ; 

            }else if (humanChoice==='paper' && computerChoice==='rock'){
                     console.log(`You win ! ${humanChoice} beats ${computerChoice}`);
                    userScore++;


            }else if (humanChoice=== 'scissors' && computerChoice ==='paper'){
                    console.log(`You win ! ${humanChoice} beats ${computerChoice}`);
    
                    userScore++ ; 
            } 


    }
    
        let round = 1 ;
        // 5 rounds !! 5 calls 
        
        while (round<=5 ) { 
                
            alert(`ROUND ${round}`) ;
                
                if (round==5){
                   
                    alert("LAST ROUND") ; 
                } 
                
            playRound(getComputerChoice(),getHumanChoice());
            round++ ; 
        
        }

        alert(`Game oVer`) ; 

        //Declaring the winner 
        // if draw 
        if(userScore==computerScore){
            
            alert("GAME DRAW ") ; 
            alert(`User Score = ${userScore}` + " |" + `ComputerSore= ${computerScore}` ) ; 
            
            alert("DeciderMatch"); 
           
                //one more round Decider
                playRound(getComputerChoice(),getHumanChoice()) ; 
                if(userScore > computerScore ) {
                    alert(`User Score = ${userScore}` + " |" + `ComputerSore= ${computerScore}` ) ; 
                    alert("WINNER WINNER CHICKEN DINNER"); 

                }
                else { 
                        alert(`User Score = ${userScore}` + "|" + `ComputerSore= ${computerScore}` ) ; 
            
                        alert ("NO CHICKEN DINNER"); 
                }

        }else if(userScore > computerScore ) {
            alert(`User Score = ${userScore}` + " |" + `ComputerSore= ${computerScore}` ) ; 
            alert("WINNER WINNER CHICKEN DINNER"); 
        } else if (computerScore > userScore){
            alert(`User Score = ${userScore}` + "|" + `ComputerSore= ${computerScore}` ) ; 

            alert ("NO CHICKEN DINNER"); 
        }
    }


// let game = prompt("would you like to play a game ? ") ; 

/*  
//if cancel pressed,prompt returns null
if(game != null) {
    playGame() ; 

}
else {

    alert("Reload to play ") ; 
}
*/ 


    let button = document.querySelectorAll(".choice") ;

    for ( let i of button ) {

    i.addEventListener("click",(e)=>{

                let playerChoice = i.textContent ;  
                console.log(`${playerChoice}`) ;       
                 
            
     });
}
