$(document).ready(function(){

$(".navarea .open").on("click",function(){  
    let sidebar=$(".navarea");
    let closeIcon=$(".navarea .close")
    $(sidebar).removeClass("hide");
    $(this).addClass("d-none");
    $(closeIcon).removeClass("d-none");
})


$(".navarea .close").on("click",function(){  
    let sidebar=$(".navarea");
    let openIcon=$(".navarea .open")
    $(sidebar).addClass("hide");
    $(this).addClass("d-none");
    $(openIcon).removeClass("d-none");
})


});