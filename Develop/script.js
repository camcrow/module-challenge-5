const dayjs = require('dayjs')

dayjs().format()

var currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMM Do YYYY'));   
var currentHour = moment().hour();



$(".time-block").each(function(){
  var hourBlock = $(this).attr("id").split("-")[1];
  var textEntry = localStorage.getItem(hourBlock);
  var textZone = $(this).find(".description");
  textZone.val (textEntry);
  if (hourBlock < currentHour){
      $(this).find(".description").addClass("past");
  }else if(hourBlock == currentHour){
      $(this).find(".description").addClass("present");
  }else{
      $(this).find(".description").addClass("future");
   }
});

$(".saveBtn").on("click", function(){
  var key = $(this).parent().attr("id").split("-")[1];
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key,value);
});
