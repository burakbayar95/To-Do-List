

var sayac=0;


function newElement()
{
    var veri=document.getElementById("task").value;
    if(veri===null || veri==="" || veri===" ")
    {
      $(".error").toast("show");
        console.log("bu değer girilemez").toast("show");;

    }

    else{
      sayac++;
      $(".success").toast("show");
      const ul = document.querySelector('ul');
    
      

      const liMaker = (text) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.classList.add("close");
        li.textContent = text;
        span.textContent="×";
        ul.appendChild(li);
      
        li.appendChild(span);
        
        document.querySelectorAll('.close').forEach(item => {
          item.addEventListener('click', event => {
            item.parentElement.style.display = "none";
            localStorage.removeItem(sayac);
    sayac--;
          })
        });
      }
 for(y=sayac; y<sayac+1; y++)
        {
          localStorage.setItem(y,veri);
          var itemsArray = JSON.stringify(localStorage.getItem(y));
      var items=JSON.parse(itemsArray);
        }
      liMaker(items);


       
      
    }
 


    
}


document.querySelectorAll('.close').forEach(item => {
  item.addEventListener('click', event => {
    item.parentElement.style.display = "none";
    localStorage.removeItem(sayac);
    sayac--;
  })
});


/*
function delete()
{
    localStorage.removeItem(veri)

}
*/






   
   
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },  
  false
);





//document.querySelector("li").style.cssText="display:none"

/*
var close=document.querySelector(".close");
close.addEventListener(
    "click",
    function yap()
    {
        close.style.display="none";
    }
)

/*
var list2 = document.querySelector(".close");
list2.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.style.cssText="display:none"
    }
  },  
  false
);


*/
/*
var close = document.getElementsByClassName("close");
close.addEventListener("click",function sil()
{
  close.style.cssText("display:none");

})
*/







/*

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
*/