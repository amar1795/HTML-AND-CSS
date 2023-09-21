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



    function swapItems(fromIndex,toIndex) {
      // swapping of two cards 
    const itemOne=listItems[fromIndex].querySelector(".draggable");
    const itemTwo=listItems[toIndex].querySelector(".draggable");
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);

  }

  function checkOrder() {
    listItems.forEach((listItem,index)=>{
      const personName=listItem.querySelector(".draggable").innerText.trim();

      if(personName !==richestPeople[index])
      {
        listItem.classList.add("wrong");
      }
      else
      {
        listItem.classList.remove("wrong");
        listItem.classList.add("right");

      }

    })
    
  }


    function addEventListeners() {
      // this will be the movable card
      const draggables=document.querySelectorAll('.draggable')

      // this will be all the other stationary card when moving the actual cards
      const dragListItems=document.querySelectorAll('.draggable-list li');

      draggables.forEach(draggable => {
        draggable.addEventListener("dragstart",dragStart)
      })


      function dragStart() {
       
        dragStartIndex = +this.closest('li').getAttribute('data-index');
        console.log(dragStartIndex)
      }

      function dragEnter() {
        
        this.classList.add('over');
      }
      
      function dragLeave() {
        
        this.classList.remove('over');
      }
      
      function dragOver(e) {
       
        e.preventDefault();
      }
      
      function dragDrop() {
       
        const dragEndIndex = +this.getAttribute('data-index');
        console.log(dragEndIndex)

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

    check.addEventListener("click",checkOrder)

