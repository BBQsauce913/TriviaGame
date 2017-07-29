$(document).ready(function() {

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}
initialScreen();

$("body").on("click", ".start-button", function(event){
	generateHTML();
	timerWrapper();
}); 

$("body").on("click", ".answer", function(event){

	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){

	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='https://media.giphy.com/media/hz69YUpLt247u/giphy.gif'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-correct' src='https://68.media.tumblr.com/c874bcb98cb3493c92448640030c61de/tumblr_o9fxxmGrkn1tja9y3o1_500.gif'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='https://media.giphy.com/media/xUA7aMmcPXrwL91fUc/giphy.gif'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is Ned Starks' sister's Name?", "Who gave the would-be-killer the knife in the attempted killing of Bran Stark?", "Who is the Sword of the Morning?","What do you say to the God of Death", "Where does the best wine in the world come from?", "Where do the White Walkers come from?", "What does Tyrion Lannister do?", "Who holds the door?"];
var answerArray = [["Lysa", "Lyanna", "Catlyn", "Sansa"], ["Jaime Lannister","Tywin Lannister","Cersai Lannister","Petyr Baelish"], ["Sir Duncan the Tall", "Sir Illin Payne", "The Many Faced God", "Sir Arthur Dayne"], ["Damn it","You know nothing","Not today","The night is dark and full of terrors"], ["The Summer Isles", "Dorne", "Essos", "The Reach"], ["North of the Wall","The Children of the Forest","The Shivering Sea","The First Men"], ["Hand of the Queen", "Drinks and knows things", "Be an Dwarf", "Be an embarrassment to his father and family, have his sister want to kill him, and kill his own father."], ["Ghost","Drogon","The Night King","Hodor"]];
var correctAnswers = ["B. Lyanna", "D. Petyr Baelish", "D. Sir Arthur Dayne", "C. Not Today", "A. The Summer Isles", "D. The First Men", "B. Drinks and knows things", "A. Hodor"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

