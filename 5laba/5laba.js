"use strict";
function showTime() {
    console.log(Date.now());
}
window.onload = () => {
    const timer = setInterval(() => {
        showTime();
    }, 5000);
    setTimeout(() => {
        clearInterval(timer);
        console.log("остановка");
    }, 60000);
};
// Пример замыкания
function createMessageLogger(message) {
    return function () {
        console.log(message);
    };
}
const log = createMessageLogger("аа");
log();
