let min = 1,
	max = 10,
	winningNum = (Math.floor(Math.random()*(max-min+1)+min)),
	guessesLeft = 3;


const game = document.querySelector('#game'),
	  minNum = document.querySelector('.min-num'),
	  maxNum = document.querySelector('.max-num'),
	  guessBtn = document.querySelector('#guess-btn'),
	  guessInput = document.querySelector('#guess-input'),
	  message = document.querySelector('.message');	  

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown',function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
});


guessBtn.addEventListener('click',onClick);

function onClick(e){
	guessBtn.classList.add('magictime','vanishIn');

	let guess = parseInt(guessInput.value);
	if(isNaN(guess) || guess<min || guess>max ){
		setMessage(`Please enter a number between ${min} and ${max}`,'red');
	}

	else if(guess === winningNum)		
		gameOver(true,`${winningNum} is Correct , YOU WIN!`);
		
	else{
		guessesLeft -=1;
		if(guessesLeft===0)
			gameOver(false,`Game Over, you Lost .Correct number was ${winningNum} `);
		else{
			guessInput.style.borderColor = 'red';
			setMessage(` ${guess} is not correct ${guessesLeft} guess left `,'red');
		}
	}

}


function setMessage(msg,color){
	message.style.color = color;
	message.textContent = msg; 
}
function gameOver(won,msg){
		guessInput.disabled = true;
		let color;
		won === true?color = 'green' : color = 'red';
		guessInput.style.borderColor = color;
		setMessage(msg,color);


		guessBtn.value = 'Plain Again';
		guessBtn.className = 'play-again'; 
}


