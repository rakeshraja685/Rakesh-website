var sidenavbar=document.querySelector(".side-nav")
function openNav(){

    sidenavbar.style.left="0";
 
}
function closeNav(){
        sidenavbar.style.left="-60%"
        console.log("hello")
}

//search fucntionality
var productcont=document.getElementById("products-id");
var search=document.getElementById("search");
var productlist=productcont.querySelectorAll("div")
var noresults=document.querySelector(".noresult");
search.addEventListener("keyup",function(event){
    var enteredvalue=event.target.value.toLowerCase();
    for(var count=0;count<productlist.length;count++){
       var productname=productlist[count].querySelector("h2").textContent  
    if(productname.toLowerCase().indexOf(enteredvalue)<0)
    {
        productlist[count].style.display="none";
    }
    else{
        productlist[count].style.display="block";
    }
}
});

var button=document.getElementById("myButton")
button.addEventListener("click", function() {
    window.location.href = "collection.html";
});
