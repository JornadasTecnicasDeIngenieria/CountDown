<template>
    <div class="header">
        <div>
            <img class="logo" src="~/assets/images/logo.png" width="500px" height="317px">
        </div>
        <div class="roomname">
            <p>{{roomname}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        roomname: {
            type: String,
            required: true,
        },
    }
}
</script>

<style scoped>
.header{
    position: absolute;
    width: 1920px;
    height: 324px;

    background: linear-gradient(180deg, #1D9CD8 -7.41%, #5C068C 87.65%);
}
.roomname p{
    position: absolute;
    top: 46px;
    left:1230px;
    width: 642px;
    height: 71px;

    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 71px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
}
.logo{
    position: absolute;
    top: -50px;
    left: -25px;
}
</style>