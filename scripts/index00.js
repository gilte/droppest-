var countDownDate = new Date("august 04, 2022 12:00:00").getTime();
 var y = setInterval(function() {  var now = new Date().getTime();
 var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)); var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("dday").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
     if (distance < 0) { clearInterval(y); document.getElementById("dday").innerHTML = "FIM DO TESTE GRATUITO"; } }, 1000);