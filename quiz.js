/**
 * Created by Heya on 2016-03-18.
 */
function Quiz(questions){
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
}

Quiz.prototype.choose = function(answer){
    if(this.getCurrentQuestion().isAnswerCorrect(answer)){
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function(){
    return this.currentQuestionIndex >= this.questions.length;
};