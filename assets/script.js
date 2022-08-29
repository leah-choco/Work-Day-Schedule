

var currentTime = moment().hour();


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

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
    return
}






//Event Listener for Save Button
$(".saveBtn").on("click", function(){
    console.log(this);


})


//Saving textarea input to localStorage
localStorage.setItem("mytest", "hello world")
console.log(localStorage.getItem("mytest"))
