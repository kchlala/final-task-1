
 var mainLi =document.querySelectorAll(".main-li")
 var dropUl=document.querySelectorAll(" .drop-ul-1, .drop-ul-2, .drop-ul-3")
 for (let i = 0; i < mainLi.length; i++) {
     mainLi[i].onclick = function() {
         for (let j = 0; j < dropUl.length; j++)
          {
            dropUl[j].classList.remove("active")         
          }
       this.nextElementSibling.classList.add("active")
     }
 }

