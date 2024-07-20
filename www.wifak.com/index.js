let container = document.querySelector(".formcontainer");
// WORNING : just change the content of url form 
let urlForm = "https://docs.google.com/forms/d/e/1FAIpQLScGEiSrAGwVB3MdBgs761adNxRoixfi3jYMyu3CwLAI7LN55Q/viewform?embedded=true";
let newContainer = `<iframe src=${urlForm} class="contact"   frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;

container.innerHTML = newContainer;
let contant = document.querySelector(".contact");
let value = getComputedStyle(contant).height;


console.clear();

// <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGEiSrAGwVB3MdBgs761adNxRoixfi3jYMyu3CwLAI7LN55Q/viewform?embedded=true" width="640" height="2207" frameborder="0" marginheight="0" marginwidth="0">جارٍ التحميل…</iframe>


document.addEventListener("scroll",(eve)=>{
    // if(document === eve.target){

    // }else{
    //     console.log(eve.target);
    // }
    console.log("done");
})