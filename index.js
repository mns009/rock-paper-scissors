let score = JSON.parse(localStorage.getItem('score'))
        if (!score) {
            score = {
                win: 0,
                lose: 0,
                tie: 0
            }
        };
        scoreUpdater();

        function playGame(playerMove) {

            let result = ''
            let pcMove = ''
            function pcMove1() {
                let randomNumber = Math.random();
                console.log(randomNumber)

                if (randomNumber > 0 && randomNumber < 1 / 3) {
                    pcMove = 'rock'
                }
                else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
                    pcMove = 'paper'
                }
                else if (randomNumber > 2 / 3 && randomNumber < 1) {
                    pcMove = 'scissors'
                }

            }
            pcMove1()
            if (playerMove === 'rock') {

                if (pcMove === 'rock') {
                    result = 'it\'s a tie'
                }
                else if (pcMove === 'paper') {
                    result = 'you lose'
                }
                if (pcMove === 'scissors') {
                    result = 'you win'
                }

            }
            else if (playerMove === 'scissors') {
                if (pcMove === 'rock') {
                    result = 'you lose'
                }
                else if (pcMove === 'paper') {
                    result = 'you win'
                }
                if (pcMove === 'scissors') {
                    result = 'it\'s a tie'
                }

            }
            else if (playerMove === 'paper') {

                if (pcMove === 'rock') {
                    result = 'you win'
                }
                else if (pcMove === 'paper') {
                    result = 'it\'s a tie'
                }
                if (pcMove === 'scissors') {
                    result = 'you lose'
                }

            }
            if (result === 'you win') {
                score.win += 1;
            }
            else if (result === 'it\'s a tie') {
                score.tie += 1;
            }
            else if (result === 'you lose') {
                score.lose += 1;
            }
            localStorage.setItem('score', JSON.stringify(score));
            scoreUpdater()
            document.querySelector('.result-display').innerHTML=`${result}`
            document.querySelector('.result-image').innerHTML =`
             you
             <img class="image"src="images/${playerMove}-emoji.png" alt="">
             <img class="image" src="images/${pcMove}-emoji.png" alt="">
            computer`


        }
        function scoreUpdater() {
            document.querySelector('.js-score').innerHTML = `Wins : ${score.win} lose : ${score.lose} tie: ${score.tie} `

        }
