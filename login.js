function validate(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    if(username=="User1003974"&& password=="099745BTU1XXX")
    {
        alert("Sie sind Angemeldet.");
               
        window.open("adminsite.html");
        
    }
    else
    {
        alert("Login fehlgeschlagen!");
    }

}

function back(){
   history.go(-1)

}