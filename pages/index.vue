<template>
  <div class="_w-100pct">
    <!-- Hero -->
    <div class="container">
      <!-- row 1 -->
      <div class="row">
        <div class="col-6 col-sm-4 col-md-3">
          <div>
            <h1 class="_lh-100pct _fs-5 _fs-1-md">Title something</h1>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
          y
        </div>
        <div class="col-6 col-sm-4 col-md-3">
          z
        </div>
        <div class="col-6 col-sm-4 col-md-3">
          z
        </div>
        <div class="col-6 col-sm-4 col-md-3">
          z
        </div>
        <div class="col-6 col-sm-4 col-md-3">
          z
        </div>
      </div>
      <!-- row 2 -->
      <div class="row">
        <div class="col-12">
          <div 
            v-lazy:background="`https://images.unsplash.com/photo-1492374448689-f2b527f2a23b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c7a040d5f56c356199d7823debf0c57&auto=format&fit=crop&w=564&q=80`" 
            class="_h-128px _w-128px _bgrp-nrp _bgpst-ct _bgs-cv"/>
        </div>
      </div>
      <!-- Slider -->
      <div class="row">
        <div class="col-12">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div 
                v-for="(banner, i) in banners" 
                :key="i"
                class="swiper-slide">
                <!-- <img :src="banner"> -->
                <div 
                  v-lazy:background="banner" 
                  class="_h-512px _bgrp-nrp _bgs-cv _bgpst-ct">xxx</div>
              </div>
            </div>
            <div class="swiper-pagination"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    banners: [
      'https://images.unsplash.com/photo-1529835299686-53bd13fb3ee1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acef595b97346a9bf062c9e8661e8bf1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1529772942463-35a62ea332b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70760fa9ad67d66ba9ca71825026a794&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1529786192234-3b32063c9e4b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=015c09878b5a3e1d4f2b7cab57b33b28&auto=format&fit=crop&w=675&q=80'
    ],
    swiperOption: {
      pagination: {
        el: '.swiper-pagination'
      }
    },
  })
}
</script>

<style lang="scss" scoped>
</style>
