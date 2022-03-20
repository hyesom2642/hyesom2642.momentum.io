const quotes = [
    {
        quote: "하루하루 노력이 모여서 큰 인생을 만든다.",
        author : "박명수"
    },
    {
        quote: "늦었다고 생각할때는 이미 늦었다. 지금 당장 시작하라.",
        author : "박명수"
    },
    {
        quote: "일찍 일어나는 새가 피곤하다.",
        author : "박명수"
    },
    {
        quote: "적게 말하고 많이 들어라. 들을수록 내 편이 많아진다.",
        author : "유재석"
    },
    {
        quote: "인생에서 가장 슬픈 세 가지. 할 수 있었는데, 해야 했는데, 해야만 했는데..",
        author : "루이스 E. 분"
    },
    {
        quote: "같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.",
        author : "도서 ‘어떤 하루’ 中" 
    },
    {
        quote: "오늘은 당신의 남은 인생 중, 첫 번째 날이다.",
        author : "영화 ‘아메리칸 뷰티’ 中" 
    },
];
const quotespan = document.querySelector(".quote__container p:first-child");
const authorSpan = document.querySelector(".quote__container p:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quotespan.innerText = todayQuotes.quote;
authorSpan.innerText = `-${todayQuotes.author}`;

if(todayQuotes.author === "박명수"){
    authorSpan.classList.add("quote__bg");
}