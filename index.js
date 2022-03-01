const mainEl = document.getElementById('main')


mainEl.textContent = dayjs().format("dddd D MMMM YYYY");

mainEl.insertAdjacentHTML("afterend", `<h2>${validator.isEmail('foo@bar.com')}</h2>`)