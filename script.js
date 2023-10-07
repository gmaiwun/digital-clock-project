




var userName = prompt("Input your name please!!")
document.getElementsByClassName("header")[0].innerHTML = "Hey, " + userName +"! the time is:"

function digitalClock (){

  var today = new Date();
  var hours = today.getHours();
  
  
  
  
  document.querySelectorAll(".hours .top")[0].innerHTML = hours;
  document.querySelectorAll(".minutes .top")[0].innerHTML = today.getMinutes();
  document.querySelectorAll(".seconds .top")[0].innerHTML = today.getSeconds();
  
  
  
  
  
  var hourContent = document.getElementById("reference").innerHTML;
  var messageDisplay = document.getElementById("message");
  
  var messageMorning = "A smile to start your day… A prayer to bless your way… A song to lighten your burden … A message to wish you a good day … Good Morning " + userName + "! you are a blessing to the world.";
  var messageAfternoon = "You never put off until tomorrow or even this afternoon what you can do this morning. Attack the objective when your desire is strongest. Good Afternoon " + userName + "! you are a blessing to the world.";
  var messageEvening = "Be thou the rainbow in the storms of life. The evening beam that smiles the clouds away, and tints tomorrow with prophetic ray. Enjoy the evening " + userName + "! you are a blessing to the world.";
  var messageNight = "The night is darker than you think but do not ignore the shining stars. Dream big and have a great sleep so that tomorrow you can work hard to make your dreams come true. Enjoy your night " + userName + "! you are a blessing to the world.";
  
  
  // Trigger for message content
  
  if (hourContent >=0 && hourContent <=12  ){
    document.getElementsByClassName("wrapper")[0].style.backgroundImage = "url(./assets/sunrise.jpg)";
    messageDisplay.innerHTML = messageMorning;
    periodOfDayContent = document.getElementsByClassName("periodOfDay")[0].innerHTML = "AM";
  
  
  } else if (hourContent > 12 && hourContent < 17 ){
    document.getElementsByClassName("wrapper")[0].style.backgroundImage = "url(./assets/afternoon.jpg)";
    messageDisplay.innerHTML = messageAfternoon;
    periodOfDayContent = document.getElementsByClassName("periodOfDay")[0].innerHTML = "PM";
  } else if(hourContent > 17 && hourContent < 20 ){
    document.getElementsByClassName("wrapper")[0].style.backgroundImage = "url(./assets/sunset.jpg)";
    periodOfDayContent = document.getElementsByClassName("periodOfDay")[0].innerHTML = "PM";
    messageDisplay.innerHTML = messageEvening;
  }else{
    document.getElementsByClassName("wrapper")[0].style.backgroundImage = "url(./assets/night.jpg)";
    messageDisplay.innerHTML = messageNight;
    periodOfDayContent = document.getElementsByClassName("periodOfDay")[0].innerHTML = "PM"; 
  };
  

}

setInterval(digitalClock,1000)

