var create=document.getElementById("create")
var main=document.getElementById("popmain")
var actionicon=document.getElementById("actionicon")
var unlocking=document.getElementById("unlock")
var locking=document.getElementById("lock")
var box=document.getElementById("box")
var changecoloring=document.getElementById("changecolor")
var taskname=document.getElementById("taskname")
var inputvalue=document.getElementById("inputvalue")


var count=0;

function show(){
        main.style.display="block";
}
function closing(){
    if(main.style.display ="block"){
        main.style.display="none";
    } 

}

function unlock(){
    actionicon.style.display="block";
    unlocking.style.display="block";
    locking.style.display="none";
}
function lock(){
    actionicon.style.display="none";
    unlocking.style.display="none";
    locking.style.display="block";
}

function changecolor(){
    let colors=["yellow","blue","black","red"];
    let cc=""
    box.style.borderColor=cc+colors[count];
    changecoloring.style.color=cc+colors[count];
    console.log((colors[count]));
    console.log(cc);
    count++
}


function done(){
    let values=inputvalue.value;
    console.log(inputvalue)
    // taskname.innerText=
}