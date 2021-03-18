<template>
  <div class="container">
    <div class="mainpage">
      <Header
      roomname = "SALA DE INGENIERÍA INFORMÁTICA"
      />
      <Content
      :imageLeftUrl="require('~/assets/images/red.png')"
      :imageRightUrl="require('~/assets/images/pc.png')"
      nextConf = 'Próxima Conferencia: COITIC'
      targetDate='03/18/2021 3:00 PM'
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