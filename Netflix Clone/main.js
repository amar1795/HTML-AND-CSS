const tabItems=document.querySelectorAll('.tab-item');
const tabContensItems=document.querySelectorAll('.tab-content-item');


function selectitem (e){
    removeborder();
    removeShow();
    // e.target.classList.add('tab-border')
    // e.target will also work but will target the exact element where do you click like even inside the icon it will add the tab-border 
    this.classList.add('tab-border')
    console.log("click has been clicked")
    console.log(`"id is"+ ${this.id}`)
    // const tabContensItem=document.querySelector(`#${e.target.id}-content`)
    const tabContensItem=document.querySelector(`#${this.id}-content`)
    // adding the show class to the content for it to be displayed
    tabContensItem.classList.add('show');
}

function removeShow(e) {
    // tabItems.classList.remove('tab-border')
    // the above will not work as the tabitems needs to iteratre over the nodelisst of the tab and remove them one by one
    tabContensItems.forEach(item=>item.classList.remove('show'))
    
}
function removeborder(e) {
    // tabItems.classList.remove('tab-border')
    // the above will not work as the tabitems needs to iteratre over the nodelisst of the tab and remove them one by one
    tabItems.forEach(item=>item.classList.remove('tab-border'))
    
}


// iterating over the tabitems
tabItems.forEach(item=>item.addEventListener('click',selectitem));  