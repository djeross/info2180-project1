/* Add your JavaScript to this file */
window.addEventListener('load',function(){
    document.getElementsByClassName("btn")[1].addEventListener("click",doit);


    function doit(event){
        event.preventDefault();
        var emailaddr=document.getElementById("email").value;
        if(emailaddr.length==0){
            document.getElementsByClassName("message")[0].innerHTML="Please enter a valid email address.";

        }
        else{
            document.getElementsByClassName("message")[0].innerHTML="Thank you! Your email address "+emailaddr+" has been added to our mailing list.";
        }
    }
})