<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>Choose your team:</h3>
        <nuxt-link 
          class="bio-button _dp-f _jtfct-spbtw _alit-ct _cl-white-hover -primary _mgv-16px" 
          to="/play/bride">
          <div 
            v-lazy:background-image="require('~/assets/images/bride.png')" 
            class="_w-64px _h-64px _bdrd-50pct"/>
          <h3>#teambride</h3>
        </nuxt-link>
        <nuxt-link 
          class="bio-button _dp-f _jtfct-spbtw _alit-ct _cl-white-hover -primary _mgv-16px" 
          to="/play/groom">
          <div 
            v-lazy:background-image="require('~/assets/images/groom.png')" 
            class="_w-64px _h-64px _bdrd-50pct"/>
          <h3>#teamgroom</h3>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
