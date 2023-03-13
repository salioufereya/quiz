const quizData=[
    {
       Question:"Who is the best player in the world",
       a:"Benzema",
       b:"Modric",
       c:"Kroos",
       d:"Vini",
       correct:"a"
       
    },
    {
        Question:"Who is the best club in the world",
        a:"REAL MADRID",
        b:"Milan Ac",
        c:"Liverpool",
        d:"Boca junior",
        correct:"a"
        
     },
     {
        Question:"Who is the current champion of Africa",
        a:"Gambie",
        b:"Senegal",
        c:"Ghana",
        d:"Mali",
        correct:"b"
        
     },
     {
        Question:"Who is the best african player",
        a:"Salah",
        b:"Oshimen",
        c:"Sadio",
        d:"Mahrez",
        correct:"a"
        
     },
     {
        Question:"who i am ?",
        a:"Photograph",
        b:"Developper",
        c:"merchant",
        d:"Player",
        correct:"b"
        
     },
];

//recuperation
let quiz=document.getElementById('quiz')
let answerE1s=document.querySelectorAll('.answer')
let questionE1=document.getElementById('question')
let a_text=document.getElementById('a_text')
let b_text=document.getElementById('b_text')
let c_text=document.getElementById('c_text')
let d_text=document.getElementById('d_text')

const submitBtn=document.getElementById('submit')

//indice et score
let indice=0
let score=0


loadQuiz()
//chargement du tableau
function loadQuiz(){
    deselectAnswers()

    const indiceData=quizData[indice]
    questionE1.innerText=indiceData.Question;
    a_text.innerText=indiceData.a
    b_text.innerText=indiceData.b
    c_text.innerText=indiceData.c
    d_text.innerText=indiceData.d
}
//decocher 
function deselectAnswers(){
    answerE1s.forEach(answerE1=>answerE1.checked=false)
}
//reponses cochés
function selected(){
    let answer
    answerE1s.forEach(answerE1=>{
        if(answerE1.checked){
         answer=answerE1.id
        }
    })
    return answer
}
//boutonSoumettre
submitBtn.addEventListener('click',()=>{
    const answer=selected()
    if(answer){
        if(answer===quizData[indice].correct){
            score++
        }
        indice++

        if(indice < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=`
            <h2>t'as trouvé ${score}/${quizData.length} questions</h2>

            <button onclick="location.reload()">Rejouer </button>
            
            `
        }
    }
})


