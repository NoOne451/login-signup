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