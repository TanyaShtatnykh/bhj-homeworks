const widget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages');
const input = document.getElementById('chat-widget__input');
const botsAnswers = [
    'Здравствуйте', 
    'Вам тут не рады', 
    'Мы вас не ждали',
    'Заказывайте или уходите',
    'До свидания'
];

widget.addEventListener('click', () => widget.classList.add('chat-widget_active'));

let randomAnswer = (arr) => {
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

let messageTime = () => {
    let realTime = new Date();
    
    let hour = (realTime.getHours() < 10) ? hour = '0' + realTime.getHours() : realTime.getHours();
    let minute = (realTime.getMinutes() < 10) ? minute = '0' + realTime.getMinutes() : realTime.getMinutes();

    return hour + ':' + minute;
}

let userMessage = () => {
    messages.innerHTML += `
        <div class= "message message_client">
            <div class="message__time">
                ${messageTime()}
            </div>
            <div class="message__text">
                ${input.value}
            </div>
        </div>`;
        input.value = '';
}
let botMessage = (arrMessage) => {
    messages.innerHTML += `
        <div class= "message">
            <div class="message__time">
                ${messageTime()}
            </div>
            <div class="message__text">
                ${randomAnswer(arrMessage)}
            </div>
        </div>`;
}

input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter' && input.value) {
        userMessage();
        setTimeout(() => {botMessage(botsAnswers)}, 500);
    }
})
