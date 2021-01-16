const quizData = [


{
   question : "what is the best programming Language in 2020",

   a: "Java",
   b:"JavaScript",
   c:"Python",
   d:"C++",
   correct:"b",
},
{
   question : "what does HTML stand for",

   a: "Hyper text markup Language",
   b:"cacading style sheets",
   c:"javascript",
   d:"Dont know",

   correct:"a",
},
{
   question : "what is the largest country in the world",

   a: "India",
   b:"Australia",
   c:"Russia",
   d:"Canada",

   correct:"c",
},
{
   question : "what is the best programming Language in 2020",

   a: "Java",
   b:"JavaScript",
   c:"Python",
   d:"C++",

   correct:"b",
}

]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz () {
	const currentQuizData = quizData[currentQuiz];
     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

}

loadQuiz();


function getSelected () {

      let answer = undefined;

      answerEls.forEach((answerEL)=> {
            if(answerEL.checked)
            {
            	answer = answerEL.id;
            }
      	
      });

      return answer;

	}

function deselectAnswers () {
	answerEls.forEach(answerEL=> {
            answerEL.checked = false;
      	
      });
}

submit.addEventListener("click", ()=>{

  const answer = getSelected();
   
   if(answer){
         if(answer === quizData[currentQuiz].correct){

         	score++;
         }
         
         currentQuiz++;

         if(currentQuiz < quizData.length){
         	loadQuiz();
         }
         else{
         	quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2>`;
         }

   }











});