function getLanguage(self) {
    if (!self) changePageLanguage('en');
    else changePageLanguage(self.options[self.selectedIndex].value);
}

function changePageLanguage(language) {
    if (!language) language = 'en';
    document.querySelector('#title').innerText = languages[language].name;
    document.querySelector('#body').innerText = languages[language].body;
    document.querySelector('#footer').innerText = languages[language].footer;
}

window.onload = function () {
    setTimeout(() => {
        changePageLanguage();
    }, 2000);
}