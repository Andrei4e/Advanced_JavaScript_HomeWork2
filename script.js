// Урок 2. Продвинутая работа с функциями и классами
// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг,
// а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке,
// выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке,
// выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того,
// есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь,
// что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

// class library {
//     #books = [];

//     get books() {
//         return this.#books;
//     };

//     addBook(title) {
//         if (this.#books.includes(title)) {
//             console.log("Такая книга уже есть в библиотеке");
//         } else {
//             this.#books.push(title);
//             console.log("Книга добавлена в библиотеку");
//         }
//     };

//     removeBook(title) {
//         if (this.#books.includes(title)) {
//             let index = this.#books.indexOf(title);
//             if (index !== -1) {
//                 this.#books.splice(index, 1);
//               }
//             console.log("Книга удалена из библиотеки");
//         } else {
//             this.#books.push(title);
//             console.log("Книги нет в библиотеке");
//         }
//     };

//     hasBook(title) {
//         return this.#books.includes(title);
//     };

//     constructor (books) {
//         const tmpBooks = new Set(books);
//         if (books.length !== tmpBooks.size) {
//             console.log("Список книг содержит дубликаты");
//         } else {
//             this.#books = books;
//         }
//     }
// }

// const books = ["Война и мир", "Идиот", "Руслан и Людмила"];
// let lib = new library(books);
// console.log(lib.books);
// lib.addBook("Три товарища");
// console.log(lib.books);
// lib.removeBook("Идиот");
// console.log(lib.books);
// console.log(lib.hasBook("Идиот"));
// console.log(lib.hasBook("Три товарища"));

/*Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, 
но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов,
функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.*/

const comments = [
  {
    id: 1,
    text: "Отличный телефон! Батарея держится долго.",
  },
  {
    id: 2,
    text: "Камера супер, фото выглядят просто потрясающе.",
  },
  {
    id: 3,
    text: "Интересный дизайн, но дорогой.",
  },
  {
    id: 4,
    text: "Люблю android",
  },
];

const maxNumber = (numbers) => {
    let max = 0;
    numbers.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    return max;
}

let containerEl = document.querySelector('.container');
const buttonEl = document.querySelector('.button');

comments.forEach(element => {
    const commentEl = document.createElement('p');
    commentEl.textContent = element.text;
    containerEl.appendChild(commentEl);
});

buttonEl.addEventListener('click', function (e) {
    const commentEl = document.querySelector('.comment');
    if (commentEl.value.length < 50) {
        alert("Комментарий слишком короткий");
    } else if (commentEl.value.length > 500) {
        alert("Комментарий слишком длинный");
    } else {
        comments.push({
            id: maxNumber(comments.map(c => c.id)) + 1,
            text: commentEl.value,
        });
        const newCommentEl = document.createElement('p');
        newCommentEl.textContent = commentEl.value;
        containerEl.appendChild(newCommentEl);
        commentEl.value = "";
    }
});


