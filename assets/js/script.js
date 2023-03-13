$(function () {

    let students = [];

    if (JSON.parse(localStorage.getItem("students") != null)) {
        students=JSON.parse(localStorage.getItem("students"));
    }

    $(document).on("click", ".btn-primary", function () {
        let student = {
            name: $(".txtName").val(),
            surname: $(".txtSurname").val(),
            age: $(".age").val()
        };

       
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));

        inputTable()
    });


    $(document).on("click",".btn-danger",function(index){       
        students.splice(index,1);
        localStorage.setItem("students", JSON.stringify(students));    
        inputTable()
    })



    $(document).on("click",".btn-warning",function(index){
        let newName=$(".txtName").val()=students[index].name;
        let newSurname=$(".txtSurname").val()=students[index].surname;
        let newAge=$(".age").val()=students[index].age;
        

        students[index].name=newName.val();
        students[index].surname=newSurname.val();
        students[index].age=newAge.val();

        localStorage.setItem("students", JSON.stringify(students));
        inputTable()


    })
 
})

function inputTable() {
    $("tbody").html("")
    let tableHtml = $("tbody").html();
    for (const stu of JSON.parse(localStorage.getItem("students"))) {
        tableHtml += ` <tr>
        <td>${stu.name}</td>
        <td>${stu.surname}</td>
        <td>${stu.age}</td>
        <td><button type="button" class="btn btn-warning my-3">Edit</button> <button type="button" class="btn btn-danger my-3">Delete</button></td>
        </tr>`;
    }
    $("tbody").html(tableHtml)
}

inputTable()











    






