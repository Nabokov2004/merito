document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const h2 = document.getElementById("h2");
    const formContainer = document.getElementById("form-container");
    const selectedCategory = document.getElementById("selected-category");
    const backButton = document.getElementById("back-button");

    // Обработчик клика на пункты меню
    menu.addEventListener("click", (e) => {
        if (e.target.classList.contains("menu-item")) {
            const category = e.target.getAttribute("data-category");
            selectedCategory.textContent = category;

            // Скрыть меню, показать форму
            menu.classList.add("hidden");
            h2.classList.add("hidden");
            formContainer.classList.remove("hidden");
        }
    });

    // Обработчик клика на кнопку "Назад"
    backButton.addEventListener("click", () => {
        // Скрыть форму, показать меню
        formContainer.classList.add("hidden");
        menu.classList.remove("hidden");
        h2.classList.remove("hidden")

        // Очистить выбранную категорию (опционально)
        selectedCategory.textContent = "";
    });
});

setTimeout(() => {
    document.querySelector('.animation').style.display = 'none'; // Скрыть анимацию
    document.querySelector('.content').classList.add('active');  // Показать основной контент
  }, 1300);
