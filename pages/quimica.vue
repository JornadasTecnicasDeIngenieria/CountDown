<template>
  <div class="container">
    <div class="mainpage">
      <Header
      roomname = "SALA DE INGENIERÍA QUÍMICA"
      />
      <Content
      :imageLeftUrl="require('~/assets/images/quimica.png')"
      :imageRightUrl="require('~/assets/images/ingquimica.png')"
      nextConf = 'Próxima conferencia: Frimancha Canarias'
      targetDate='03/18/2021 5:30 PM'
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