<template>
  <div class="container">
    <div class="mainpage">
      <Header
      roomname = "SALA DE INGENIERÍA MECÁNICA"
      />
      <Content
      :imageLeftUrl="require('~/static/red.png')"
      :imageRightUrl="require('~/static/pc.png')"
      nextConf = 'Próxima Conferencia: Prácticas Externas'
      targetDate='03/17/2021 3:00 AM'
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