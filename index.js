    
    const newTask = document.getElementById("newTask"); //bottone
    const main = document.getElementsByTagName("main")[0];
        
        // console.log(value);
        const div = document.createElement("div");
        div.className = "list";

    const form = document.getElementById("addTask");
    form.onsubmit = function(e){
        e.preventDefault();
        console.log("nuovo task");
        const taskInput = document.getElementById("task"); //input box
        // console.dir(taskInput);
        const valore = taskInput.value;
        const newButton = document.createElement("button");
        newButton.id="deleteTask";
        newButton.innerHTML="<i class=\"fas fa-minus\"></i>";
        const ul = document.createElement("ul");
        const li = document.createElement("li");

        newButton.onclick = function (e) {
            const clicked = e.target;
            const bt = clicked.parentNode;
            bt.parentNode.remove();
        }

        li.innerText = valore;
        li.appendChild(newButton);
        ul.appendChild(li);
        div.appendChild(ul);
        main.appendChild(div);
        taskInput.value = "";

        li.addEventListener("click", () => {
            li.style.textDecoration= "line-through";


        })
    }

    // newTask.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     console.log("nuovo task");
    //     const taskInput = document.getElementById("task"); //input box
    //     // console.dir(taskInput);
    //     const valore = taskInput.value;
    //     const ul = document.createElement("ul");
    //     const li = document.createElement("li");

    //     li.innerText = valore;

    //     ul.appendChild(li);
    //     div.appendChild(ul);
    //     main.appendChild(div);

    //     li.addEventListener("click", () => {
    //         li.style.textDecoration= "line-through";
    //     })


    // })
