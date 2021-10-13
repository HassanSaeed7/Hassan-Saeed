//This function unchecks the checkbox that toggles the navbar
// this closes the navbar when a nav-link is clicked
$(document).ready(function() {     
    $(".nav-links").click(function(){
       $(".toggler").prop("checked", false);
    });   
});