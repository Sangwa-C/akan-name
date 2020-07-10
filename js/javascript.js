
$(document).ready(function ($) {
    $("#submit").click(function() {
        $("#results").show();
    });

});

function calculator(form) {
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    // var gender = document.getElementById("gender").value;

    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleNames = ["kosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Satruday"]

    var dd = parseInt(date);
    var mm = parseInt(month);
    var yy = parseInt(year);
    var cc = (yy - 1) / 100 + 1;
    var name = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    //(math.round(name)

    if (document.getElementById("gender").checked) {
      var gender = 'male';
    } else {
      var gender = 'female'
    }


    if (date === "" || month === "" || year === "") {
      alert("please fill all the tabs");
    } else if (date < 1 || date > 31) {
      alert("please fill in the correct answers!");
    } else if (month < 1 || month > 12) {
      alert("please write the correct month");
    } else if (mm == 2 && dd > 29 && yy % 4 == o) {
      alert("Invalid date")
    } else if (year === "" || gender === "") {
      alert("please fill all tabs");
    } else if (Math.round(name) == 0 && gender === "female") {
      document.getElementById("name").innerHTML = ("You were born on Sunday,your name is Kosua!")
    } else if (Math.round(name) == 0 && gender === "male") {
      document.getElementById("name").innerHTML = ("You were born on Sunday,your name is Kwasi!")
    } else if (Math.round(name) == 1 && gender === "female") {
      document.getElementById("name").innerHTML = ("You were born on Monday,your name is Adoa!")
    } else if (Math.round(name) == 1 && gender === "male") {
      document.getElementById("name").innerHTML = ("You were born on Monday,your name is Kwando!")
    } else if (Math.round(name) == 2 && gender === "female") {
      document.getElementById("name").innerHTML = ("You were born on Tuesday,your name is Abenaa!")
    } else if (Math.round(name) == 2 && gender === "male") {
      document.getElementById("name").innerHTML = ("You were born on Tuesday,your name is Kwabena!")
    } else if (Math.round(name) == 3 && gender === "female") {
      document.getElementById("name").innerHTML = ("You were born on Wednesday, and your name is Akua!")
    } else if (Math.round(name) == 3 && gender === "male") {
      document.getElementById("name").innerHTML = ("You were born on Wednesday, your name is Kwaku!")
    } else if (Math.round(name) == 4 && gender === "female") {
      document.getElementById("name").innerHTML = ("You were born on Thursday, your name is Yaa!")
    } else if (Math.round(name) == 4 && gender === "male") {
      document.getElementById("name").innerHTML = ("You were born on Thursday, your name is Yaw!")
    } else if (Math.round(name) == 5 && gender === "female") {
      document.getElementById("name").innerHTML = ("You were born on Friday, your name is Afua!")
    } else if (Math.round(name) == 5 && gender === "male") {
      document.getElementById("name").innerHTML = ("You were born on Friday, your name is Kofi!")
    } else if (Math.round(name) == 6 && gender === "female") {
      document.getElementById("name").innerHTML = ("You were born on Saturday, your name is Ama!")
    } else if (Math.round(name) == 6 && gender === "male") {
      document.getElementById("name").innerHTML = ("You were born on Saturday, your name is Kwame!")
    } else {
      document.getElementById("name").innerHTML = ("The data entered are wrong!")
    }
  }
