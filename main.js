student=[];
function submit(){
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;

    student.push(name1);
    student.push(name2);
    student.push(name3);
    student.push(name4);
    console.log(student);
    document.getElementById("div1").innerHTML=student;
    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="Inline-block";
}
function sort(){
    student.sort();
    console.log(student);
    document.getElementById("div1").innerHTML=student;
}