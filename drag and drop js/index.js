const draggable_list=document.getElementById("draggable-list");
const check=document.getElementById("check");

const richestPeople=[
    'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
]

    // store listitems
    const listItems=[];
    let dragStartIndex;

    createList();


    // insert listitems into DOM

    function createList() {
      [...richestPeople]
      .map(a=>({value:a,sort:Math.random()}))
      .sort((a,b)=>a.sort-b.sort)
      .map(a=>a.value)
      .forEach((person,index)=>{
        const listItem=document.createElement("li");
        listItem.setAttribute("data-index",index);
        listItem.innerHTML=`
        <span class="number">${index+1}</span>
        <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `
        listItems.push(listItem);
        draggable_list.appendChild(listItem);

      })

      addEventListeners();
  
    }

    

    function addEventListeners() {
      const draggables=document.querySelectorAll('.draggable')
      const dragListItems=document.querySelectorAll('.draggable-list li');

      draggables.forEach(draggable => {
        draggable.addEventListener("dragstart",)
      })

      function swapItems() {
        console.log("swap Items")
        
        
      }

      function dragEnter() {
        // console.log('Event: ', 'dragenter');
        this.classList.add('over');
      }
      
      function dragLeave() {
        // console.log('Event: ', 'dragleave');
        this.classList.remove('over');
      }
      
      function dragOver(e) {
        // console.log('Event: ', 'dragover');
        e.preventDefault();
      }
      
      function dragDrop() {
        // console.log('Event: ', 'drop');
        const dragEndIndex = +this.getAttribute('data-index');
        swapItems(dragStartIndex, dragEndIndex);
      
        this.classList.remove('over');
      }


      dragListItems.forEach(item=>{
        item.addEventListener("dragover",dragOver);
         item.addEventListener("drop",dragDrop);
        

        // item.addEventListener("drop",(e)=>{
        //   const dragEndIndex=+this.getAttribute('data-index');
        //   swapItems(dragStartIndex,dragEndIndex);
        //   this.classList.remove('over');
        //   // here the arrow function acts as an event listener
        //   // should never use this inside an arrow function as arrwo function do not have their own this and hence it referes to the nearest this and causes errror


        // });

        item.addEventListener("dragenter",dragEnter);
        item.addEventListener("dragleave",dragLeave);
        
      })

      

    }