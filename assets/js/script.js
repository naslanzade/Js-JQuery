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



    $(document).on("click", ".fa-pen-to-square", function (index) {
        $("#submit").text("Update")

        let name = $(".txtName").val()
        let surname = $(".txtSurname").val()
        let age = $(".age").val()

        
      
        
             
        localStorage.setItem("students", JSON.stringify(students));

      
        clearForm()

        
        
        
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



function updateData(index){
    $("#submit").text("Update")
}
















