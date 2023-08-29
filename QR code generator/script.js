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

const clearUI=()=>{
qr.innerHTML="";
}

const showSpinner=()=>{
    document.getElementById("spinner").style.display="block";       
}

const hideSpinner=()=>{
    document.getElementById("spinner").style.display="none";       
}

form.addEventListener('submit',onGenerateSubmit)