function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    const dropdownToggle = document.querySelector(".dropdown_toggle");

    dropdownContent.classList.toggle("show");
    dropdownToggle.classList.toggle("active"); // Добавляем/удаляем класс для вращения стрелки
}

function setLanguage(lang) {
    document.getElementById("current-lang").textContent = lang;
    toggleDropdown(); // Закрыть dropdown после выбора
}

// Закрываем dropdown при клике вне его
window.onclick = function (event) {
    if (!event.target.closest(".dropdown_toggle")) {
        const dropdownContent = document.getElementById("dropdown-content");
        const dropdownToggle = document.querySelector(".dropdown_toggle");

        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
            dropdownToggle.classList.remove("active"); // Убираем класс, когда меню закрывается
        }
    }
};

