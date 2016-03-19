/**
 * Created by Heya on 2016-03-18.
 */
var UI = {
    displayNext: function() {
        if(quiz.hasEnded()){
            this.displayScore();
        } else{
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    displayQuestion: function() {
        this.toHTML("question", quiz.getCurrentQuestion().text);
    },

    displayChoices: function () {
      var choices = quiz.getCurrentQuestion().choices;

        for(var i = 0; i<choices.length; i++){
            this.toHTML("choice" + i, choices[i]);
            this.chooseHander("answer" + i, choices[i]);
        }
    },

    displayScore: function () {
      var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2>Your score is: " + quiz.score + "</h2>";
        this.toHTML("quiz", gameOverHTML);
    },
    toHTML: function (id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },

    chooseHander: function (id, choice) {
        var button = document.getElementById(id);
        button.onclick = function () {
            quiz.choose(choice);
            UI.displayNext();
        }
    },
    displayProgress: function () {
        var currentQuestuionNum = quiz.currentQuestionIndex + 1;
        this.toHTML("progress", "Question " + currentQuestuionNum
        + " of " + quiz.questions.length);
    }
};