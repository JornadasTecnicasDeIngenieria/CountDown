<template>
  <div class="container">
    <div class="mainpage">
      <Header
      roomname = "SALA DE INGENIERÍA MECÁNICA"
      />
      <Content
      :imageLeftUrl="require('~/assets/images/ingmech.png')"
      :imageRightUrl="require('~/assets/images/imech.png')"
      nextConf = 'Próxima Conferencia: Prácticas Externas'
      targetDate='03/17/2021 5:30 PM'
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