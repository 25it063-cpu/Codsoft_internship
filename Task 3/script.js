const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {

        if (item.id === 'clear') {
            display.innerText = '';

        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);

        } else if (item.id === 'equal') {
            if (display.innerText !== '') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                    setTimeout(() => (display.innerText = ''), 1500);
                }
            } else {
                display.innerText = 'Empty!';
                setTimeout(() => (display.innerText = ''), 1500);
            }

        } else {
            display.innerText += item.id;
        }
    };
});


//const themeToggleBtn = document.querySelector('.theme-toggler');
//const calculator = document.querySelector('.calculator');

//themeToggleBtn.onclick = () => {
  //  calculator.classList.toggle('dark');
    //themeToggleBtn.classList.toggle('active');
//};

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
};


const cat = document.querySelector('.cat');
const equalBtn = document.getElementById('equal');

equalBtn.addEventListener('click', () => {
    cat.classList.add('happy');

    setTimeout(() => {
        cat.classList.remove('happy');
    }, 600);
});


document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/().".includes(key)) {
        display.innerText += key;
    }

    if (key === 'Enter') {
        document.getElementById('equal').click();
    }

    if (key === 'Backspace') {
        document.getElementById('backspace').click();
    }

    if (key === 'Escape') {
        document.getElementById('clear').click();
    }
});


