var create = document.getElementById("create")
var main = document.getElementById("popmain")
var mainpop = document.getElementById("popbox")
var maincontainer = document.getElementById("checkbox")
var inputvalue2 = document.getElementById("inputvalue")
var check2 = document.getElementById("check2")
var check1 = document.getElementById("check")
var red1 = document.getElementById("red1")
var blue1 = document.getElementById("blue1")
var yellow1 = document.getElementById("yellow1")
var black1 = document.getElementById("black1")
var boxn = document.getElementById("box")
var inputarea = document.getElementById("inputarea")
var all = document.querySelector("body")
var countbox = document.querySelector("#countbox")
var addBox = document.getElementById("verifybox")
var tablehead = document.getElementById("tablehead")


var totalbox = 0;




function doning() {
    var count = 0;

    let box = document.createElement("div");
    box.setAttribute("id", "box");



    red1.onclick = function redborder() {
        box.style.borderTop = "20px solid red";
        box.classList.add("redfilter");

    }
    yellow1.onclick = function yellowborder() {
        box.style.borderTop = "20px solid yellow";
        box.classList.add("yellowfilter");
        box.classList.remove("redfilter");
    }
    blue1.onclick = function blueborder() {
        box.style.borderTop = "20px solid blue";
        box.classList.add("bluefilter");
        box.classList.remove("redfilter");
        box.classList.remove("yellowfilter");
    }
    black1.onclick = function blackborder() {
        box.style.borderTop = "20px solid black";
        box.classList.add("blackfilter");
        box.classList.remove("redfilter");
        box.classList.remove("bluefilter");
        box.classList.remove("yellowfilter");
    }


    let taskname = document.createElement("h2");
    taskname.setAttribute("id", "taskname");
    let inputvalue = document.getElementById("inputvalue").value;
    taskname.textContent = inputvalue;
    box.append(taskname);


    let icons = document.createElement("div");
    icons.classList.add("icons");
    box.append(icons);


    let action = document.createElement("div");
    action.setAttribute("id", "actionicon");
    action.classList.add("actionicon")
    action.style.display = "none";
    icons.append(action);

    let check_icon = document.createElement("i");
    check_icon.classList.add('fa', 'fa-check');
    check_icon.setAttribute("id", "check2")
    action.append(check_icon);

    let edit_icon = document.createElement("i");
    edit_icon.classList.add("fa", "fa-pencil");
    edit_icon.setAttribute("id", "edit")
    action.append(edit_icon);

    let delete_icon = document.createElement("i");
    delete_icon.classList.add('fa', 'fa-trash-o');
    delete_icon.setAttribute("id", "delete")
    action.append(delete_icon);

    let changecolor_icon = document.createElement("i");
    changecolor_icon.classList.add('fa', 'fa-square');
    changecolor_icon.setAttribute("id", "changecolors")
    action.append(changecolor_icon);


    let lock_icons = document.createElement("div");
    lock_icons.classList.add("lockicon");
    icons.append(lock_icons);

    let lock_icon = document.createElement("i");
    lock_icon.classList.add('fa', 'fa-lock');
    lock_icon.setAttribute("id", "lock");
    lock_icons.append(lock_icon);

    let unlock_icon = document.createElement("i");
    unlock_icon.classList.add('fa', 'fa-unlock');
    unlock_icon.setAttribute("id", "unlock");
    unlock_icon.style.display = "none"
    lock_icons.append(unlock_icon);

    maincontainer.append(box);



    inputvalue2.value = "";




    // main.style.display = "none"








    lock_icon.addEventListener("click", function lock() {
        action.style.display = "block";
        unlock_icon.style.display = "block";
        lock_icon.style.display = "none";
    });

    unlock_icon.onclick = function unlock() {
        action.style.display = "none";
        unlock_icon.style.display = "none";
        lock_icon.style.display = "block";
    };


    changecolor_icon.onclick = function changecolors() {
        let colors = ["yellow", "blue", "black", "red"];
        let cc = ""
        box.style.borderColor = cc + colors[count];
        changecolor_icon.style.color = cc + colors[count];
        count++
    }


    edit_icon.onclick = function editTaskName() {
        if (taskname.contentEditable != "true") {
            taskname.contentEditable = "true"
            edit_icon.style.color = "green"
        }
        else {
            taskname.contentEditable = "false";
            edit_icon.style.color = "white";
        }
    }



    delete_icon.onclick = function remove() {
        maincontainer.removeChild(box)
        totalbox--;
        countbox.textContent = totalbox;
    }

    check_icon.onclick = function checked() {
        // box.style.display = "none";
        tablehead.append(box);
        tablehead.classList.add("tableheadbox");
       


    }


    check1.onclick = function showchecked() {
        check1.style.color = "green";
        addBox.style.display = "block";
        maincontainer.style.display="none";
    }


    totalbox++;
    countbox.textContent = totalbox;




}





function show() {
    main.style.display = "block";
    maincontainer.style.opacity = ".3";
}


function closing() {
    if (main.style.display = "block") {
        main.style.display = "none";
        maincontainer.style.opacity = "1";
    }

}



console.log(boxn);














function showall(){
    maincontainer.style.display="flex";
    addBox.style.display="none";

}

