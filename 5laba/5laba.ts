function showTime(): void {
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

function createMessageLogger(message: string) {
    return function () {
        console.log(message);
    };
}

const log = createMessageLogger("аа");
log();