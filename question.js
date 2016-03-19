/**
 * Created by Heya on 2016-03-18.
 */
function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isAnswerCorrect = function(choice){
    return this.answer === choice;
}