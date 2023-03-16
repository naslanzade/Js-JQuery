$(document).ready(function () {

    let students = [];

    students = JSON.parse(localStorage.getItem("students"));


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



    $(document).on("click", ".fa-pen-to-square", function () {

        $("#submit").text("Update")

        $(document).on("click", "#submit", function () {
            students = JSON.parse(localStorage.getItem("students"));
            let name=$(this).prev().children().eq(0).text();
            let surname=$(this).prev().children().eq(1);
            let age=$(this).prev().children().eq(2);

            let newStu = {
               newname: $(".txtName").val(),
                newsurname: $(".txtSurname").val(),
                newage: $(".age").val()
            }

            name=newStu.newname;
            surname=newStu.newsurname;
            age=newStu.newage

            students.push(newStu);

            localStorage.setItem("students", JSON.stringify(students));
            showData()
            clearForm()

            $("#submit").text("Add data")

        })
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























