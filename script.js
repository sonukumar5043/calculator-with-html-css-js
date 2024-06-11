let data=document.querySelector(".inputwidth");
let button=document.querySelectorAll(".data");
button.forEach(element => {
    element.addEventListener("click",(evt)=>{
        console.log(data.value);
        if(element.value!='DE' && element.value!='=')
            {
        data.value+=element.value;
            }

    else if(element.value=='AC'){
        data.value="";
    }
    else if(element.value=='DE'){
           data.value=data.value.slice(0,-1);
    }
    else if(element.value=='='){
        data.value=eval(data.value);
    }
    
    
})

})

