$(document).ready(function() {
    $("#voters-reg").submit(function(event){
        const fullname1 = $("#fullname-1").Val();
        const email1 = $("#email-1").val();
        const address1 = $("#address-1").val();
        const phone1 = $("#phone-1").val();
        const age1 = $("#age-1").val();

        $(".fullname-1").text(fullname1);
        $(".email-1").text(email1);
        $(".address-1").text(address1);
        $(".phone-1").text(phone1);
        $(".age-1").text(age1);

        const age = 18;

        if( age < 18 ){
            
            window.location.href ="apology.html";
        }
        else 
        {
            window.location.href = "election.html";
        }

        $("#register-voter").show();

        event.preventDefault();


    });












});