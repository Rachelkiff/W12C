let loggedInuser = Cookies.get("emailInput");
if(loggedInuser == undefined) {
    document.getElementById("welcome-message").innerHTML = "Login Error!";
}else{
    document.getElementById("welcome-message").innerHTML = "Welcome" , loggedInuser;
}

function getColors(){
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let color = JSON.parse(this.responseText);
            document.getElementById("color-container") .innerHTML = "";
            for(let i=0; i<color.data.length; i++){
                document.getElementById("color-container").innerHTML += "<p>" + color.data[i]. year + "</p>";
                document.getElementById("color-container").innerHTML += "<p>" + color.data[i]. name + "</p>";
            }
        }else if(this.readyState != 4) {
            let pTag = document.createElement("pTag");
            pTag.style.width = "300px";
            pTag.style.height = "300px";
            pTag.style.background = color.data[i].color;
            document.getElementById("color-container").append("pTag");
            
        }else {
            document.getElementById("color-container").innerHTML = "<p>Post fail</p";
            
        }
    }
    ajax.open("GET","https://reqres.in/api/unknown", true)
    ajax.send();
} 

getColors();
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
