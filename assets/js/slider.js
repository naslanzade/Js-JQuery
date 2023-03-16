$(document).ready(function () {


    $(".main .right").on("click", function () {
        let activeImage = $(".active-image")
        $(activeImage).removeClass("active-image")
        if ($(activeImage).next().length != 0) {
            $(activeImage).next().addClass("active-image");
        } else {
            $(".img :first-child").addClass("active-image")
        }

    })



    $(".main .left").on("click", function () {

        let activeImage = $(".active-image")
        $(activeImage).removeClass("active-image")
        if ($(activeImage).next().length != 0) {
            $(activeImage).next().addClass("active-image");
        } else {
            $(".img :first-child").addClass("active-image")
        }

    })



})