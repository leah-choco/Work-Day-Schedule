

var currentTime = moment().hour();


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

//Event Listener for Save Button
$(".saveBtn").on("click", function(){
    console.log(this);
   var text = $(this).siblings(".description").val();
   var time = $(this).parent().attr("id");

    localStorage.setItem(time,text);

})

$("#8 .description").val(localStorage.getItem("8"));
//$("#9 .description").val(localStorage.getItem("9"));
//$("#10 .description").val(localStorage.getItem("10"));
//$("#11 .description").val(localStorage.getItem("11"));
//$("#12 .description").val(localStorage.getItem("12"));
//$("#13 .description").val(localStorage.getItem("13"));
//$("#14 .description").val(localStorage.getItem("14"));
//$("#15 .description").val(localStorage.getItem("15"));
//$("#16 .description").val(localStorage.getItem("16"));
//$("#17 .description").val(localStorage.getItem("17"));


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







