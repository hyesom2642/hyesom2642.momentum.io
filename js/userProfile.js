const section1 = document.querySelector(".section1");
const imgContainer = document.querySelector(".user__img");
const img = document.querySelector(".section1 img");
const images = ["1.png", "2.png", "3.png", "4.png", "5.png"];

const userForm = document.querySelector("#user__name__form");
const userInput = document.querySelector("#user__name__input");

const userName = document.querySelector("#user__name");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

// localStorage에서 username 가져오기
const saveUser = localStorage.getItem(USERNAME_KEY);
userForm.classList.remove(HIDDEN_CLASS);

function profile(){
    // 프로필
    const imgChoose = images[Math.floor(Math.random()*images.length)];
    img.src=`./img/${imgChoose}`;
}

function printName(username){
    // h1에 input에 쓴 이름 출력
    userName.innerText = `${username}`;
    userName.classList.remove(HIDDEN_CLASS);

    imgContainer.classList.remove(HIDDEN_CLASS);
    img.classList.remove(HIDDEN_CLASS);
    profile();
}
function handleSubmit(e){
    e.preventDefault();

    // 로그인하면 h1에 input내용 출력, form은 숨기기
    const userInputValue = userInput.value;
    printName(userInputValue);
    userForm.classList.add(HIDDEN_CLASS);

    // input에 쓴 이름을 localStorage에 저장
    localStorage.setItem(USERNAME_KEY, userInputValue);
}

if( saveUser === null){ // localStorage에 username이 없으면 handleSubmit실행하고
    img.classList.add(HIDDEN_CLASS);
    imgContainer.classList.add(HIDDEN_CLASS);
    userForm.classList.remove(HIDDEN_CLASS);
    userForm.addEventListener("submit", handleSubmit);

} else { //  아니면 h1계속실행
    printName(saveUser);
    userForm.classList.add(HIDDEN_CLASS);
}


