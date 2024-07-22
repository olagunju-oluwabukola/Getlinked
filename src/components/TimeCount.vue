<template>
    <div class="v">{{timerOutput}}</div>
    </template>
    
    <script>
    export default{
        data(){
            return{
                countDownToTime : new Date("Sep 26, 2029 00:00:00").getTime(),
        timerOutput:  null
    }
        },
       
        methods: {
        startTimer: function() {
          const timeNow = new Date().getTime();
          const timeDifference = this.countDownToTime - timeNow;
          const millisecondsInOneSecond = 1000;
          const millisecondsInOneMinute = millisecondsInOneSecond * 60;
          const millisecondsInOneHour = millisecondsInOneMinute * 60;
          const millisecondsInOneDay = millisecondsInOneHour * 24;
          const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
          const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
          const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
          const remainingHours = Math.floor(remainderDifferenceInHours);
          const remainingMinutes = Math.floor(remainderDifferenceInMinutes);
          const remainingSeconds =Math.floor(remainderDifferenceInSeconds);
          this.timerOutput = remainingHours + " h " + " : " + remainingMinutes + " m" + " : " + remainingSeconds + " s";
        }
      },
      mounted() {
           setInterval(() => { this.startTimer() }, 1000);
        }
    }
    </script>