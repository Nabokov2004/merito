document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const h2 = document.getElementById("h2");
    const formContainer = document.getElementById("form-container");
    const selectedCategory = document.getElementById("selected-category");
    const backButton = document.getElementById("back-button");
    const topicInput = document.getElementById('topic-input');  
    const form = document.querySelector('form');
    const thankYouMessage = document.getElementById('thank-you-message');

    // Обработчик клика на пункты меню
    menu.addEventListener("click", (e) => {
        if (e.target.classList.contains("menu-item")) {
            const category = e.target.getAttribute("data-category");
            selectedCategory.textContent = category;
        
            topicInput.value = category;

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
        h2.classList.remove("hidden");

        // Очистить выбранную категорию (опционально)
        selectedCategory.textContent = "";
        topicInput.value = '';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // предотвращаем стандартное поведение отправки формы

        // Получаем данные формы
        const formData = new FormData(form);

        // Отправляем данные через fetch (асинхронно)
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
        
                
        })
        formContainer.classList.add('hidden');
        form.reset();
        thankYouMessage.classList.remove('hidden');

    });
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault(); // предотвращаем стандартное поведение отправки формы

    //     // Получаем данные формы
    //     const formData = new FormData(form);

    //     // Отправляем данные через fetch (асинхронно)
    //     fetch(form.action, {
    //         method: 'POST',
    //         body: formData,
    //     })
    //     .then(response => {
        
                
    //     })
    //     formContainer.classList.add('hidden');

    //     thankYouMessage.classList.remove('hidden');

    // });

    

    // const formData = new FormData(form);

    // // Преобразуем FormData в JSON-объект
    // const data = {
    //     topic: formData.get('topic'),
    //     question: formData.get('question'),
    // };

    // // Отправляем запрос на сервер
    // fetch('http://localhost:3000/questions', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json', // Отправляем данные в формате JSON
    //     },
    //     body: JSON.stringify(data), // Преобразуем данные в строку
    // })
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then((result) => {
    //         console.log('Успех:', result);
    //         form.reset();
    //         // Скрываем форму и показываем сообщение благодарности
    //         formContainer.classList.add('hidden');
    //         thankYouMessage.classList.remove('hidden');
    //     })
    //     .catch((error) => {
    //         console.error('Ошибка отправки:', error);
    //     });
    // });




    setTimeout(() => {
        document.querySelector('.animation').style.display = 'none'; // Скрыть анимацию
        document.querySelector('.content').classList.add('active');  // Показать основной контент
    }, 2500);
});

