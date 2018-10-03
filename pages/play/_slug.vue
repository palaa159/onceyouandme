<template>
  <div class="container">
    <div class="row">
      <div class="col-12 _tal-ct">
        <div 
          v-lazy:background-image="require('~/assets/images/shake.png')" 
          class="_w-256px _h-256px _mgh-at _mgv-16px"/>
        <h2 class="_lh-100pct">SHAKE YOUR PHONE!</h2>
        <p>to score your team</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
export default {
  data: () => ({
    fbDb: null
  }),
  async mounted () {
    this.fbDb = await firebase.database().ref(this.$route.params.slug).child('count')
    let myShakeEvent = new Shake({
      threshold: 5, // optional shake strength threshold
      timeout: 100 // optional, determines the frequency of event generation
    })
    myShakeEvent.start()
    window.addEventListener('shake', this.shakeEventDidOccur, false)
    // 
    this.shakeEventDidOccur()
  },
  methods: {
    shakeEventDidOccur () {
      //put your own code here etc.
      // alert('shake!');
      this.fbDb.transaction((count) => {
        return (count || 0) + 1
      })
    }
  }
}
</script>
