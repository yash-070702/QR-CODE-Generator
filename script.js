const qrText=document.querySelector("#qr-text");
const sizes=document.querySelector("#sizes");
const generateBtn=document.querySelector("#generateBtn");
const downloadBtn=document.querySelector("#downlaodBtn");

const qrContainer=document.querySelector(".qr-body");

let size=sizes.value;
generateBtn.addEventListener("click",(event)=>{
event.preventDefault();

if(qrText.value.length>0)
generateQRCode();

else
alert("Please Enter The URL");
});

sizes.addEventListener("change",(e)=>{

    if(qrText.value==="")
        return;


    else{
        size=e.target.value;
        let img=document.querySelector(".qr-body img");
        if(img!==null)
        generateQRCode();
    }
    
});

downloadBtn.addEventListener("click",()=>{
    let img=document.querySelector(".qr-body img");

    if(img!==null)
    {
let imgATrr=img.getAttribute('src');
downloadBtn.setAttribute("href",imgATrr);
    }

    if(img===null)
    return;
})

function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",

    })
}