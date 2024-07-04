const pc_about = document.getElementById("pc_about");
const pc_exp = document.getElementById("pc_exp");
const pc_pro = document.getElementById("pc_pro");

document.addEventListener("scroll", () => {
    const topbar = document.getElementsByClassName("topbar")[0];
    const about = document.getElementById("about");
    const abpos = about.getBoundingClientRect().top;

    const exp = document.getElementById("experience");
    const expos = exp.getBoundingClientRect().top;

    const pro = document.getElementById("projects");
    const propos = pro.getBoundingClientRect().top;

    if (abpos <=1 && expos>0){
        topbar.style.opacity = "1";
        topbar.innerHTML = "ABOUT";
    }
    else if (expos <=1 && propos>0){
        topbar.style.opacity = "1";
        topbar.innerHTML = "EXPERIENCE";
    }
    else if (propos <=1){
        topbar.style.opacity = "1";
        topbar.innerHTML = "PROJECTS";
    }
    else{
        topbar.style.opacity = "0";
    }

    const pos1 = pc_about.getBoundingClientRect().bottom;
    const pos2 = pc_exp.getBoundingClientRect().bottom;
    const pos3 = pc_pro.getBoundingClientRect().top;

    if (pos1>1){
        lines[0].style.backgroundColor = "white";
        lines[0].style.width = "5vw";
        txt[0].style.color = "white";
        for (var x=1; x<3; x++){
            lines[x].style.backgroundColor = "#92a1b6";
            lines[x].style.width = "2.37vw";
            txt[x].style.color = "#92a1b6";
        }
    }
    
    if(pos1<1){
        lines[1].style.backgroundColor = "white";
        lines[1].style.width = "5vw";
        txt[1].style.color = "white";
        for (var x=0; x<3; x++){
            if (x!=1){
                lines[x].style.backgroundColor = "#92a1b6";
                lines[x].style.width = "2.37vw";
                txt[x].style.color = "#92a1b6";
            }
        }
    }
    
    if(pos2<1){
        lines[2].style.backgroundColor = "white";
        lines[2].style.width = "5vw";
        txt[2].style.color = "white";
        for (var x=0; x<3; x++){
            if (x!=2){
                lines[x].style.backgroundColor = "#92a1b6";
                lines[x].style.width = "2.37vw";
                txt[x].style.color = "#92a1b6";
            }
        }
    }
})

const sections = document.getElementsByClassName("tmp");
const lines = document.querySelectorAll(".tmp span");
const txt = document.querySelectorAll(".tmp p");

lines[0].style.backgroundColor = "white";
lines[0].style.width = "5vw";
txt[0].style.color = "white";

function highlight(i){
    return function(){
        if (i==0){
            pc_about.scrollIntoView({behavior: "smooth"});
        }
        else if (i==1){
            pc_exp.scrollIntoView({behavior:"smooth"});
        }
        else{
            pc_pro.scrollIntoView({behavior:"smooth"});
        }
    }
}

for (var i=0; i<3; i++){
    sections[i].addEventListener("click", highlight(i));
}