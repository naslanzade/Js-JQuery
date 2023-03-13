$(document).ready(function(){


$(".main .right").on("click",function(){
    let activeImage=$(".active-image")
    $(activeImage).removeClass("active-image")
    if($(activeImage).next()!=null){
        $(activeImage).next().addClass("active-image")
    }
    else{
        $(activeImage).parent().children(0).addClass("active-image")
    }

    

})  



$(".main .left").on("click",function(){
    
    let activeImage=$(".active-image")
    $(activeImage).removeClass("active-image")
    if($(activeImage).next()!=null){
        $(activeImage).next().addClass("active-image")
    }
    else{
        $(activeImage).parent().children(3).addClass("active-image")
    }

})  























})