/**
 Реалізуйте логіку видалення вибраного елементу списку при натисканні на кнопку.
 Видаляти елементи можна в будь якому порядку.
 */
myBtn.addEventListener("click", deleteUser);

function deleteUser() {
    let x = document.getElementById("nameSet");
    x.remove(x.selectedIndex);
}