<template>
    <div class="main-footer">
        <div class="footer"></div>
        <div class="partners">
            <div class="colaboran">
                <p>COLABORAN</p>
            </div>
            <div class="whitebar"></div>
            <img src="/CountDown/assets/images/ULL_logo.png" width="375px" height="125px" class="ull">
            <img src="/CountDown/assets/images/FIFEDE_logo.png" width="375px" height="125px" class="fifede">
            <img src="/CountDown/assets/images/CABILDO_logo.png" width="375px" height="125px" class="cabildo">
        </div>
        <div class="networks">
            <div class="linkedin">
                <img src="linkedin.png" class="netimg">
                <span class="netname">linkedin.com/company/jtiesit</span>
            </div>
            <div class="insta">
                <img src="insta.png" class="netimg">
                <span class="netname">@jtiesit</span>
            </div>
            <div class="twitter">
                <img src="twitter.png" class="netimg">
                <span class="netname">@jtiesit</span>
            </div>
            <div class="mail">
                <img src="mail.png" class="netimg">
                <span class="netname">jtiesit@ull.edu.es</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    position: absolute;
    top: 834px;
    width: 1920px;
    height: 246px;

    background: linear-gradient(180deg, #5C068C 17.21%, #1D9CD8 100%), #C4C4C4;
}
.colaboran{
    position: absolute;
    top: 670px;
    left: 845px;

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
.whitebar{
    position: absolute;
    top: 746px;
    width: 1920px;
    height: 108px;

    background: #FFFFFF;
}
.ull{
    position: absolute;
    top: 741px;
    left: 185px;
}
.fifede{
    position: absolute;
    top: 741px;
    left: 760px;
}
.cabildo{
    position: absolute;
    top: 741px;
    left: 1275px;
}
.netimg{
    width: 64px;
    height: 64px;
}
.linkedin img{
    position: absolute;
    top: 940px;
    left: 100px;
}
.insta img{
    position: absolute;
    top: 940px;
    left: 530px;
}
.twitter img{
    position: absolute;
    top: 940px;
    left: 960px;
}
.mail img{
    position: absolute;
    top: 940px;
    left: 1390px;
}
.netname{
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    display: flex;

    color: #FFFFFF;
}
.linkedin .netname{
    position: absolute;
    left: 180px;
    top: 956px;
}
.insta .netname{
    position: absolute;
    left: 620px;
    top: 956px;
}
.twitter .netname{
    position: absolute;
    left: 1050px;
    top: 956px;
}
.mail .netname{
    position: absolute;
    left: 1480px;
    top: 956px;
}
</style>