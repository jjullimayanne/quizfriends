const quizData = [
    {
        question: "Qual é o nome dos quadros da Phoebe?",
        a: "Gladys e Carly",
        b: "Gladys e Lilly",
        c: "Gladys e Glannis",
        d: "Gladys e Rachel",
        correct: "c",
    },


    {
        question: "Quem é o ultimo da turma que descobre que Monica e Chandler tem um caso?",
        a: "Joey",
        b: "Ross",
        c: "Phoebe",
        d: "Rachel",
        correct: "b",
    },

    {
        question: "Qual é o nome completo de Chandler?",
        a: "Chandler Meghan Bing",
        b: "Chandler Muriel Bing",
        c: "Chandler Cheese Bing",
        d: "Chandler Ice Bing",
        correct: "b",
    },

    {
        question: "Com quem Janice namorou?",
        a: "Joey",
        b: "Ross",
        c: "Phoebe",
        d: "Chandler",
        correct: "d",
    },

];const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score}/${quizData.length}</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
