const name = prompt('Пожалуйста, представьтесь?');
if (name) {
  document.querySelector('#welcome').innerHTML = `<b>${name}</b>, добро пожаловать на сайт!`;
} else {
  document.querySelector('#welcome').innerHTML = '<b>Гость</b>, добро пожаловать на сайт!';
};