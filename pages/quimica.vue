<template>
  <div class="container">
    <div class="mainpage">
      <Header
      roomname = "SALA DE INGENIERÍA QUÍMICA"
      />
      <Content
      :imageLeftUrl="require('/CountDown/assets/images/quimica.png')"
      :imageRightUrl="require('/CountDown/assets/images/ingquimica.png')"
      nextConf = 'Próxima Conferencia: Prácticas Externas'
      targetDate='03/17/2021 3:00 PM'
      />
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
</style>