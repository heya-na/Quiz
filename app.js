/**
 * Created by Heya on 2016-03-18.
 */
//create questions
var questions = [
  new Question("How many oscars did the Titanic movie got?", ["9", "10", "11", "12"], "11"),
    new Question("What is the house number of the Simpsons?", ["146", "742", "720", "782"], "742")
];

//create quiz
var quiz = new Quiz(questions);

//display next question
UI.displayNext();