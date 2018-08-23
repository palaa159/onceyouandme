<template>
  <div class="_w-100pct">
    <!-- Hero -->
    <div class="container">
      <div class="row _alit-ct">
        <div class="col-6">
          <h1 class="_ttf-upc _lh-100pct">
            Become a Pro<br />
            Plant Photographer
          </h1>
        </div>
        <div class="col-6">
          <img class="_h-512px" src="~/assets/images/human-photographing-plants.svg" />
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
