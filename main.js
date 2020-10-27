const quizData = [
    {
        question: 'В каком году появился JavaScript?',
        a: '2000',
        b: '1887',
        c: '1995',
        d: '2010',
        correct: 'c',

    },
    {
        question: 'Кто занимается разработкой пользовательского интерфейса?',
        a: 'Frontend Developer',
        b: 'Backend Developer',
        c: 'Hardware Developer',
        d: 'Java Developer',
        correct: 'a'

    },
    {
        question: 'Какой селектор в CSS применяет указание св-ва ко всем элементам на странице?',
        a: 'all',
        b: '%',
        c: '*',
        d: '$',
        correct: 'c',

    },
    {
        question: 'Как при открытии страницы выполнить автоматическую переадресацию на другой URL?',
        a: 'Это невозможно',
        b: 'С помощью тега <meta>',
        c: 'С помощью тега <link>',
        d: 'С помощью тега <a>',
        correct: 'b',
    },
    {
        question: 'Как объединить по горизонтали несколько ячеек таблицы?',
        a: 'С помощью атрибута ROWSPAN',
        b: 'С помощью атрибута CELLSPACING',
        c: 'С помощью атрибута HALIGN',
        d: 'С помощью атрибута COLSPAN',
        correct: 'd',
    }
]

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

submitBtn.addEventListener('click', () => {

    currentQuiz++;
    loadQuiz();
});