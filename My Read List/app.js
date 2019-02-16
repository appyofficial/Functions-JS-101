//visit www.appySharma.com
//follow me on twitter @realAppySharma
//Book class: Represents a book
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}


//UI class: Handle UI class
class UI {
	static displayBooks() { 
		const books = Store.getBooks();
		books.forEach((books) => UI.addBookToList(books));
	}
	//adding book to the list
	static addBookToList(book) {
		const list = document.querySelector("#book-list");
		const row = document.createElement("tr");
		row.innerHTML = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>
			<td><a href=# class="btn btn-danger btn-sm delete">X</td>
		`;
		list.appendChild(row);
	}
	//deleting the book from the list, deleting entire parent element. check html file to understand
	static deleteBook(el) {
		if (el.classList.contains("delete")) {
			el.parentElement.parentElement.remove(); // statement
		}
	}
	//shows alert 
	static showAlert(message, className) {
		const div = document.createElement("div");
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector(".container");
		const form = document.querySelector("#book-form");
		container.insertBefore(div, form);
		//make vanish in 3 seconds
		setTimeout(() => document.querySelector(".alert").remove(), 3000);
	}

	static clearFields() {
		document.querySelector("#title").value = "";
		document.querySelector("#author").value = "";
		document.querySelector("#isbn").value = "";
	}
}


//Store class: Handles storage
class Store {
	static getBooks() {
		let books;
		if (localStorage.getItem("books") === null) {
			books = []; // statement
		} else {
			books = JSON.parse(localStorage.getItem("books"));
		}
		return books;
	}

	static addBook(book) {
		const books = Store.getBooks();
		books.push(book);
		localStorage.setItem("books", JSON.stringify(books));
	}

	static removeBook(isbn) {
		const books = Store.getBooks();

		books.forEach((book, index) => {
			if (book.isbn === isbn) {
				books.splice(index, 1); // statement
			}
		});

		localStorage.setItem("books", JSON.stringify(books));
	}
}


//Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


//Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
	//prevent actual submit
	e.preventDefault();

	//Getting form values
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;

	//Validation
	if (title === "" || author === "" || isbn === "") {
		UI.showAlert("Please fill the all fields", "danger") // statement
	} else {



		//Intantiate book
		const book = new Book(title, author, isbn);

		//Add book to UI 
		UI.addBookToList(book);

		//Add book to store
		Store.addBook(book);

		//success message
		UI.showAlert("Book has added in your list", "success");

		//clear field
		UI.clearFields();

	}

});


//Event: Remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
	UI.deleteBook(e.target);

	//
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

	//success message
	UI.showAlert("Book removed", "success");
});