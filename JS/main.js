a=document.getElementById("textear");
function GRAS(){
    if(a.style.fontWeight=="bold")
    {
        a.style.fontWeight=="normal";
    }
    else{   
         a.style.fontWeight="bold";
}
    

}

function ITAlic() {
    if(a.style.fontStyle=="italic")
    {
        a.style.fontStyle=="normal";
    }
    else{   
         a.style.fontStyle="italic";
}
    

}

function SOULIGNE() {
    if(a.style.textDecoration=="underline")
    {
        a.style.textDecoration=="normal";
    }
    else{   
         a.style.textDecoration="underline";
}
    

}

function taille(){
    x=document.f.s.selectedIndex;
    y=document.f.s.options[x].value+"px";
    a.style.fontSize=y;
}

function police(){
    x=document.f.s1.selectedIndex;
    y=document.f.s2.options[x].value;
    a.style.fontFamily=y;
}