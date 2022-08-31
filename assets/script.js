var currentTime = moment().hour();

//Displaying Current Date and Time 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

//Event Listener for Save Button
$(".saveBtn").on("click", function(){
    console.log(this);
   var text = $(this).siblings(".description").val();
   var time = $(this).siblings(".description").attr("id");

    localStorage.setItem(time,text);

})

//LocalStorage displaying data input when page is reloaded
$("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));

//Color Coded Blocks based on the current time
function timeBlockColors() {
    $(".time-block").each(function() {
        var blockColors = parseInt($(this).children().eq(1).attr("id"));
        
        if (blockColors < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");

        }
        else if (blockColors === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        
    })
 
}

timeBlockColors();






