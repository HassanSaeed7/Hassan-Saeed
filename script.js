//This function unchecks the checkbox that toggles the navbar, closing the navbar when a nav-link is clicked
$(document).ready(function() {     
    $(".nav-links").click(function(){
       $(".toggler").prop("checked", false);
    });   
});