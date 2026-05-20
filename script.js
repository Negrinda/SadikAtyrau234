document.addEventListener("DOMContentLoaded", () => {
    // Связываем разделы сайта
    const pages = {
        menu1: document.getElementById("page1"),
        menu2: document.getElementById("page2"),
        menu3: document.getElementById("page3"),
        menu4: document.getElementById("page4")
    };

    // Связываем кнопки меню
    const links = {
        menu1: document.getElementById("menu1-link"),
        menu2: document.getElementById("menu2-link"),
        menu3: document.getElementById("menu3-link"),
        menu4: document.getElementById("menu4-link")
    };

    // Функция переключения страниц
    function showPage(pageKey) {
        for (let key in pages) {
            pages[key].classList.add("id-hidden"); // Прячем все блоки
            links[key].classList.remove("active"); // Снимаем активный класс со всех ссылок
        }
        pages[pageKey].classList.remove("id-hidden"); // Открываем нужный блок
        links[pageKey].classList.add("active"); // Подсвечиваем нужную ссылку в меню
        
        window.scrollTo(0, 0); // Автоматически скроллим вверх страницы
    }

    // Слушатели кликов по меню
    links.menu1.addEventListener("click", (e) => { e.preventDefault(); showPage("menu1"); });
    links.menu2.addEventListener("click", (e) => { e.preventDefault(); showPage("menu2"); });
    links.menu3.addEventListener("click", (e) => { e.preventDefault(); showPage("menu3"); });
    links.menu4.addEventListener("click", (e) => { e.preventDefault(); showPage("menu4"); });
});