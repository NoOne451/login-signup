const forminput=document.querySelectorAll(".form-input")
forminput.forEach(element=>{
    element.addEventListener("input",()=>{
      
        if(element.value!=""){

        element.nextElementSibling.classList.add("valid")}
        else{
            element.nextElementSibling.classList.remove("valid")
        }
        })
})
const form=document.querySelector(".form")
const mainbtn=document.querySelector(".mainbtn")
 mainbtn.addEventListener("click",()=>{
    form.classList.toggle("active")
   document.body.classList.toggle("active")
   mainbtn.classList.toggle("active")
    

})
const hidebtn=document.querySelectorAll(".hidebtn")
hidebtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        var a;
     btn.children[0].name=="eye-outline"?a="eye-off-outline":a="eye-outline"
     btn.children[0].name=a
     var b;
     var intele=btn.parentElement.children[0];
    intele.type=="text"?b="password":b="text";
    intele.type=b

    })
})
const login=document.querySelector(".login")
const sign=document.querySelector(".sign")
login.addEventListener("click",(e)=>{
    e.preventDefault()
    form.classList.toggle("active")
   document.body.classList.toggle("active")
   mainbtn.checked=false;

})
sign.addEventListener("click",(e)=>{
    e.preventDefault()
    form.classList.toggle("active")
   document.body.classList.toggle("active")
   mainbtn.checked=true;

})
const face=document.querySelectorAll(".face")
face.forEach(btn=>{
    btn.addEventListener("click",()=>{
    window.location.href = "https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjkwMDQwNjM1LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D";
    })
})
const google=document.querySelectorAll(".google")
google.forEach(btn=>{
    btn.addEventListener("click",()=>{
    window.location.href = "https://accounts.google.com/InteractiveLogin/identifier?elo=1&ifkv=AeDOFXgxPvq1UuMlzyFkVeOHyl9wr0oGFod_2XdKY3gOffhThh9m3cIN_f4sHYUoC7VB3_v3byi5Xg&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
})

})