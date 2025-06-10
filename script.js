
            let score = JSON.parse(localStorage.getItem('score')) || {
                Wins : 0,
                Losses : 0,
                Ties : 0,
            };
            scoreUpdate();
            let autogame = false;
            let intervalid;
            function autoPlay(){
                if(autogame == false){
                intervalid = setInterval(function(){
                    playGame(getComputerPick())},1000
                );
                autogame = true;}
                else{
                    clearInterval(intervalid);
                    autogame = false;
                }
            }
            document.querySelector(".js-rock-button").addEventListener('click',()=>{playGame('rock')});
            function playGame(choice){
            let result = '';
            const computerPick = getComputerPick();
            if(choice == 'paper'){
                if(computerPick === 'rock') result = 'you win';
                else if(computerPick === 'paper') result = 'tie';
                else result = 'you lose';

            }

            else if(choice == 'scissor'){
                if(computerPick === 'rock') result = 'you lose';
                else if(computerPick === 'paper') result = 'you win';
                else result = 'tie';

            }

            else if(choice == 'rock'){
                if(computerPick === 'rock') result = 'tie';
                else if(computerPick === 'paper') result = 'you lose';
                else result = 'you win';

            }
            if(result == 'you win') {
                score.Wins +=1;
            }
            else if(result == 'you lose') {
                score.Losses +=1;
            }
            else if(result == 'tie') {
                score.Ties +=1;
            }
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-choice').innerHTML = `You <img src="images/${choice}-emoji.png" class="move-icon"> <img src="images/${computerPick}-emoji.png" class="move-icon"> Computer`;
            localStorage.setItem('score',JSON.stringify(score));
            scoreUpdate();
            }
            
            function scoreUpdate(){
                document.querySelector('.js-score').innerHTML = `Wins :${score.Wins}, Losses :${score.Losses}, Ties :${score.Ties}`;
            }
            function getComputerPick(){
                const number = Math.random();
                let computerPick = '';
                if(number >= 0 && number < 1/3){
                    computerPick = 'rock';
                } else if(number >= 1/3 && number < 2/3){
                    computerPick = 'paper';
                } else {computerPick = 'scissor';}
                return computerPick ;}
