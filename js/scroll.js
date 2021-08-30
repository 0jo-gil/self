const self_info = document.querySelector("#self_info");

const upper_content = document.querySelector(".upper_content");
const lower_content = document.querySelector(".lower_content");


window.addEventListener("scroll", (e)=>{
    let posY = e.currentTarget.scrollY;
    let self_infoY = self_info.offsetTop;
    let currentY = posY - self_infoY;
    if(posY > self_infoY){
        slideTxt(upper_content, currentY);
        slideTxt(lower_content, currentY * -1);
    }
});

function slideTxt(el, y){
    el.style.marginLeft = y + "px";
};

// window.addEventListener("mousemove", (e)=>{
//     console.log(e);
//     let x = e.x - 5;
//     let y = e.y - 5;

//     document.querySelector(".mouse_cursor").style.top = y + "px";
//     document.querySelector(".mouse_cursor").style.left = x + "px";
// });