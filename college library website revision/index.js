console.log("This is index.js");
// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}



let storage=[];

Display.prototype.addStorage=function (book){

    bookvalue={
        name:book.name,
        author:book.author,
        type:book.type,       
    }


    storage.push(bookvalue);

    localStorage.setItem("book",JSON.stringify(storage))
}


Display.prototype.checkStorage=function (book){

    let value=JSON.parse(localStorage.getItem("book"));

    if(value === null)
    {
        storage=[];
    }
    else
    {
        storage=JSON.parse(localStorage.getItem("book"));
        console.log("this is storage"+storage)

        tableBody = document.getElementById('tableBody');
        tableBody.innerHTML=""
        storage.forEach((element,index) => {   
        let uiString = `<tr >
                    <td>${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.type}</td>
                    <td>
                        <button type="submit" id=${index} class="btn btn-danger delete-btn" onclick={deletefunc(this.id)} >Delete Book</button>
                        </td>
                </tr>`;
        tableBody.innerHTML += uiString;
            
        });
    }

   
}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr >
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td>
                        <button type="submit"  class="btn btn-danger delete-btn">Delete Book</button>                          
                        </td>

                        
                    </tr>
                    `;
    tableBody.innerHTML += uiString;
}




function deletefunc(id) {
console.log("delet function is called");
storage=JSON.parse(localStorage.getItem("book"));
storage.splice(id,1)
localStorage.setItem("book",JSON.stringify(storage)) 

let display2 = new Display();

display2.checkStorage();


}


// implementing the delete function
Display.prototype.delete = function (id) {

    storage=JSON.parse(localStorage.getItem("book"));
    let value= storage.splice(id,1)

   
}




// search element


    let search=document.getElementById("searchTxt");
    search.addEventListener("input",searchfunc)

    function searchfunc() {

        storage=JSON.parse(localStorage.getItem("book"));

        let tableBody = document.getElementById('tableBody');


        console.log("this is search function")

        let bookNameCell;
        for (let i = 0; i < tableBody.rows.length; i++) {
            let row = tableBody.rows[i];
             bookNameCell = row.cells[0]; 
            let bookName = bookNameCell.textContent.toLowerCase();
            let searchTerm = search.value.toLowerCase();
    
            if (bookName.includes(searchTerm)) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        }
    }
    
    
    
    

        
    

   



// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}


Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}


// delete functionality
// let deletebtn =document.querySelectorAll(".delete-btn");

// deletebtn.forEach((e)=>{
// e.addEventListener("click",deletefunc())
// })

// function deletefunc(params) {
//     let delete1=new Display();
//     delete1.delete(id);
//     delete1.checkStorage();
//     // call the delete function
// }


let display = new Display();

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    // display.checkStorage(book);
   
    if (display.validate(book)) {

        display.add(book);
        display.addStorage(book);
        display.clear();
        display.checkStorage();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}




window.onload = function() {
    // Code to run when the page loads
  
    display.checkStorage();
}