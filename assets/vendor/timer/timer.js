(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        tt = String(today.getHours())
        console.log(tt)
        yyyy = today.getFullYear(),
        // nextYear = yyyy + 1,
        dayMonth = "18/12/20/",
        birthday = dayMonth + yyyy;
    
    today = tt + "/" + mm + "/" + dd + "/" + yyyy;
   
   
    if (today > birthday) {
      birthday = dayMonth
    }
    // console.log(new Date().getTime())
    //end
    
    const countDown = new Date('December 20, 2021 18:00:00').getTime(),
        x = setInterval(function() {    
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "WORKSHOP 2 IS HAPPENING TODAY";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());