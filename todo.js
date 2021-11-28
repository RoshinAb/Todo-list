
function validate(checkSuccess){
    const userNode = document.querySelector("#username").value;
    const passNode = document.querySelector("#password").value;
    
    checkSuccess(userNode,passNode);

}
function onSuccess(uname,pwd){
    if (uname == "admin" && pwd == "12345") {
       document.querySelector("form").action = "todo.html";
       //window.location = "todo.html";
    }
    else {
        alert("Invalid login");
    }

}

function Login(){
    validate(onSuccess);
}

function showTodo(){
    
    url = "https://jsonplaceholder.typicode.com/todos";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    var output="";
    if(this.readyState == 4 && this.status==200){
        var response = JSON.parse(this.responseText);
        var myCheck;
        for(var i=0;i<response.length;i++){ 

             // when completed = true, disable it         
            if(response[i].completed===true)
                myCheck = "<input type = 'checkbox' checked disabled>";
            else
                myCheck = "<input type = 'checkbox' id = 'checkbox' onchange = 'countCheckBox()' >";
            
            output += "<li>"+myCheck+response[i].title+"</li>";
            
        }
        document.getElementById("ul-list").innerHTML = output;       
    }     
}; 

    xhttp.open("GET",url,true);
    xhttp.send();
}

function countCheckBox(){

    let count=0;
    var checks = document.querySelectorAll('#checkbox');
    for(let i=0;i<checks.length;i++){
        if(checks[i].checked){
            count+=1;
            console.log(count);
        }
        if(count>=5)
           { alert('Congrats. 5 Tasks have been Successfully Completed');
            break;
           }
    }
}

