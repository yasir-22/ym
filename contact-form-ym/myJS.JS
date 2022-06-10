function sentMail(params)
{
       var uName =document.getElementById("name").value;
    //  var uEmail =document.getElementById("email").value;
    var uSubject =document.getElementById("subject").value;
    var uBody =document.getElementById("message").value;

    var success = document.getElementById("form-message-success");
    var errorABC = document.getElementById("from-message-warning");

    var tempParam={
    from_name : uName,
    to_name : "yasir jamal",
    message : uBody

    };
        emailjs.send('service_0zdpkmo','template_51oeahk',tempParam)
            .then(function(response)
            {
            //suuccess
            errorABC.style.display="none";  
            success.style.display="inline-block";
            },

            function(error)
            {
             //error
            errorABC.innerHTML="Error:" + error.status;
            success.style.display="none";
            errorABC.style.display="inline-block";


        })


}
