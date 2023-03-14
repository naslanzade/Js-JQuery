$(document).ready(function () {

    let students = [];

    if (JSON.parse(localStorage.getItem("students") != null)) {
        students = JSON.parse(localStorage.getItem("students"));
    }

    $(document).on("click", ".btn-success", function () {

        let name = $(".txtName").val()
        let surname = $(".txtSurname").val()
        let age = $(".age").val()

        students.push({
            name: name,
            surname: surname,
            age: age
        });

        localStorage.setItem("students", JSON.stringify(students));

        showData()

        clearForm()
    });


    $(document).on("click", ".fa-trash-can", function (index) {
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
        showData()
    })



    $(".table").on("click", ".fa-pen-to-square", function () {
        let name = $(this).parent().parent().find(".txtName").html()
        let surname = $(this).parent().parent().find(".txtSurname").html()
        let age = $(this).parent().parent().find(".age").html()


        $("#txtName").val(name)
        $("#txtSurname").val(surname)
        $("#age").val(age)
        $("#submit").text("Update")
        localStorage.setItem("students", JSON.stringify(students));
        showData()
        
    })

})

function showData() {
    $("tbody").html("")
    let tableHtml = $("tbody").html();
    for (const stu of JSON.parse(localStorage.getItem("students"))) {
        tableHtml += ` <tr>
        <td>${stu.name}</td>
        <td>${stu.surname}</td>
        <td>${stu.age}</td>
        <td><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash-can"></i></td>
        </tr>`;
    }
    $("tbody").html(tableHtml)
}

showData()


function clearForm() {
    
    $(".txtName").val("");
    $(".txtSurname").val("");
    $(".age").val("");
}


















