window.onload = function(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const intro_tit = document.querySelector("#intro h1");
    const tit_txt = document.querySelectorAll(".tit_txt");
    const from_txt= document.querySelector(".from_txt");

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight + 1000;

    ctx.font = "bold 150px Arial";
    ctx.textAlign = "center";

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let angle = Math.PI * 2;
    let radius = 580;    
    let opc = 0;

    // mousePointerCreate();

    drawTxt(ctx, centerX, centerY, "[0jo]WEBDEVELOPERWEBPUBLISHER", radius, angle);

    timeOut(intro_tit, "on", 2000);
    
    timeOut(intro_tit, "on2", 4000);

    fdIn(intro_tit, opc);

    setTimeout(()=>{
        for(let el  of tit_txt){
            el.classList.add("on");
        };
        document.querySelector("body").classList.remove("h")
        fdIn(from_txt, opc);
    }, 5000);
    
    window.addEventListener("scroll", (e)=> {
        let posY = e.currentTarget.scrollY;

        rotateTxt(canvas, posY);
    });
};

function fdIn(el, opc){
    el.style.display = "block";
    setInterval(()=>{
        if(opc<1){
            opc += 0.005;
        };
        el.style.opacity = opc;
    }, 10);
};


function timeOut(el, name, time){
    setTimeout(()=>{
        el.classList.add(name);
    }, time)
};

function drawTxt(ctx, centerX, centerY, str, radius, angle){
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(-1 * angle);
    ctx.rotate(-180 * (angle / str.length) / 2);

    for(let el of str){
        ctx.rotate(angle / str.length);
        ctx.save();
        ctx.translate(0, -1 * radius);
        ctx.strokeText(el, 0, 0);
        ctx.restore();
    };

    ctx.restore();
};

function rotateTxt(canvas, posY){
    canvas.style.transform = `translateY(7%) rotate(${posY * -0.2}deg)`
};

const menuMo = document.querySelector(".menuMo");

menuMo.addEventListener("click", ()=> {
    let isOn = menuMo.classList.contains("on");
    classToggle(menuMo, "on");
    menuMoCreate(isOn);
});

function menuMoCreate(isOn){
    let el = document.createElement("div");
    el.classList.add("menuMoCon");

    let inner_con = "<ul><li><a href=work.html>WORK</a></li><li><a href=info.html>INFO</a></li><li><a href=contact.html>CONTACT</a></li></ul>"

    if(!isOn) document.querySelector("body").append(el);

    document.querySelector(".menuMoCon").innerHTML = inner_con;

    setTimeout(()=>{
        classToggle(document.querySelector(".menuMoCon"), "on");
        classToggle(document.querySelector("body"), "h");
    }, 500);
};

function classToggle(el, className){
    let isOn = el.classList.contains(className);

    (isOn) ? el.classList.remove(className) : el.classList.add(className);
};

function mousePointerCreate(){
    const mouseCursor = document.createElement("div");
    mouseCursor.classList.add("mouse_cursor");

    document.querySelector("body").append(mouseCursor);
};

const self_list_btn = document.querySelectorAll(".self_list_btn");

for(let el of self_list_btn){
    el.addEventListener("mouseenter", (e)=>{
        let target = e.currentTarget.getAttribute("data-link");
        let frame = document.createElement("img");
        let y = el.getBoundingClientRect().top;

        frame.classList.add("self_list_frame");
        frame.setAttribute("src", target);
        frame.style.top = y + "px";

        document.querySelector("body").append(frame);

        
    });

    el.addEventListener("mouseleave", (e)=>{
        document.querySelector(".self_list_frame").remove();
    })
};

