//Using JQuery to toggle the navbar on/off whenever someone clicks anywhere (a link, on the side to exit out of nav, etc)
$(document).ready(function() {     
    $(".nav-links").click(function(){
       $(".toggler").prop("checked", false);
    });   
});