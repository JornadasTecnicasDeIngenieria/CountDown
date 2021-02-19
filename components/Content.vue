<template>
    <div class="content-elements">
        <p class="nextconf">Próxima Conferencia: Prácticas Externas</p>
        <p class="startsin">Comienza en...</p>

        <div class="img-left">
            <img :src="imageLeftUrl" width="483" height="412">
        </div>

        <div class="timer minutes">
            <span class="timernumber" id="countMinutes"></span><br/>
            <span class="timertext">MINUTOS</span>
        </div>

        <div class="timer seconds">
            <span class="timernumber" id="countSeconds"></span><br/>
            <span class="timertext">SEGUNDOS</span>
        </div>

        <div class="img-right">
            <img :src="imageRightUrl" width="300" height="300">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageLeftUrl: {
        type: String,
        required: true,
        },
        imageRightUrl: {
        type: String,
        required: true,
        },
        nextConf: {
        type: String,
        required: true,
        },
        targetDate: {
            type: String,
            required: true,
        }
    },
    beforeMount() {
        var endDate = new Date(this.targetDate);
        var _seconds = 1000;
        var _minutes = _seconds * 60;
        var _hours = _minutes * 60;
        var _days = _hours * 24;
        var _timer;

        function printTime() {
            var now = new Date();
            var distance = endDate - now;
            if(distance <= 0) {
                clearInterval(_timer);
                document.getElementById('countHours').innerHTML = '00';
                document.getElementById('countMinutes').innerHTML = '00';
                document.getElementById('countSeconds').innerHTML = '00';
                return;
            }
            var days = Math.floor(distance / _days);
            var hours = Math.floor((distance % _days) / _hours );
            var minutes = Math.floor((distance % _hours) / _minutes);
            var seconds = Math.floor((distance % _minutes) / _seconds);

            //document.getElementById('countHours').innerHTML = hours;
            document.getElementById('countMinutes').innerHTML = minutes;
            document.getElementById('countSeconds').innerHTML = seconds;
        }
        _timer = setInterval(printTime, 1000);
    }
}




</script>



<style scoped>
.content-elements .nextconf{
    position: absolute;
    top: 220px;
    left: 457px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 95px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
.content-elements .startsin{
    position: absolute;
    top: 331px;
    left: 828px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 71px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
.timer{
    position: absolute;

    background: #1D9CD8;
    border-radius: 50px;
}
.timernumber{
    position: relative;
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 142px;

    color: #FFFFFF;
}
.timertext{
    position: relative;
    margin-top: 80%;
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;

    color: #FFFFFF;
}
.minutes{
    position: absolute;
    text-align: center;
    left: 710px;
    top: 440px;
    width: 200px;
    height: 200px;
}
.seconds{
    position: absolute;
    text-align: center;
    left: 1010px;
    top: 440px;
    width: 200px;
    height: 200px;
}
.img-left{
    position: absolute;
    left: 20px;
    top: 305px;
}
.img-right{
    position: absolute;
    top: 407px;
    left: 1400px;
}
</style>