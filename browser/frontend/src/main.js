function search() {
    document.getElementById('viewport-frame').src = `https://yandex.ru/search?q=${document.getElementById('web').value}`;
}