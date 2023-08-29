const form=document.getElementById("generate-form");
const qr=document.getElementById("qrcode");


const onGenerateSubmit=(e)=>{
    e.preventDefault();
    clearUI();

    const url=document.getElementById('url').value;
    const size=document.getElementById('size').value;
    

    if(url === ""){
        alert("please Enter a URL")
    }
    else
    {
        showSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQRcode(url,size);
            setTimeout(() => {
                // Get save url
                const saveUrl = qr.querySelector("img").src;
                // Create save button
                createSaveBtn(saveUrl);
              }, 50);
        }, 1000);
    }
};

const generateQRcode=(url,size)=>{
    const qrcode=new QRCode('qrcode',{
        text:url,
        width:size,
        height:size,
    })

}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement("a");
    link.id = "save-link";
    link.classList =
      'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.innerHTML = "Save Image";
  
    link.href = saveUrl;
    link.download = "qrcode.png";
  
    document.getElementById("generated").appendChild(link);
  };
const clearUI=()=>{
qr.innerHTML="";
link = document.createElement("a");
document.getElementById("generated").innerHTML="";
}

const showSpinner=()=>{
    document.getElementById("spinner").style.display="block";       
}

const hideSpinner=()=>{
    document.getElementById("spinner").style.display="none";       
}

form.addEventListener('submit',onGenerateSubmit)