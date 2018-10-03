<template>
  <div class="wrapper">
    <!-- <Header/> -->
    <!-- Content -->
    <main class="min-height-100vh _dp-f _alit-ct _ovfx-hd">
      <nuxt/>
    </main>
    <!-- <Footer/> -->
  </div>
</template>

<script>
  import Header from '~/components/layout/Header'
  import Footer from '~/components/layout/Footer'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss" scoped>
.wrapper {
background-color: #ddffaa;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23AE9' points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120 '/%3E%3C/svg%3E");
}
</style>
