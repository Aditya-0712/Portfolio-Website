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
})