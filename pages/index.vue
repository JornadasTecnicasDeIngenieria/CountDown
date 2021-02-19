<template>
  <div class="container">
    <div class="mainpage">
      <Header
      roomname = "SELECCIÓN DE CARRERA"
      />
      <div class="select">
        <NuxtLink to="/CountDown/informatica"><span class="info">INGENIERIA INFORMATICA</span></NuxtLink><br/>
        <NuxtLink to="/CountDown/quimica"><span class="quim">INGENIERIA QUÍMICA</span></NuxtLink><br/>
        <NuxtLink to="/CountDown/industrial"><span class="indu">INGENIERIA ELECTRONICA INDUSTRIAL</span></NuxtLink><br/>
        <NuxtLink to="/CountDown/mecanica"><span class="meca">INGENIERIA MECANICA</span></NuxtLink><br/>
      </div>
      <Footer/>

    </div>
  </div>
</template>

<style scoped>
  .mainpage{
    position: absolute;
    width: 1920px;
    height: 1080px;
    background: #5C068C;
  }
  .select{
    position: relative;
    margin-top: 15%;
    text-align: center;
  }
  span{
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 71px;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
  }
  .info{
    position: relative;
  }
</style>

