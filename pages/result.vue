<template>
  <div class="container">
    <div class="row">
      <div class="col-12 _mgv-48px">
        <h1 class="_tal-ct cdt">{{ countdownText }}</h1>
      </div>
      <div class="col-12 _dp-f _jtfct-spbtw">
        <div @click="reset">
          <h3>#teambride 👰🏻</h3>
        </div>
        <div>
          <h3>#teamgroom 🤵</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 _dp-f _jtfct-spbtw">
        <Player 
          :ratio="_brideR"
          role="bride"/>
        <Player 
          :ratio="_groomR" 
          :right="true"
          role="groom"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h5 class=" _tal-ct">
          Bride shakes: {{ b }}
          <br >
          Groom shakes: {{ g }}
        </h5>
        <div class="_dp-f _alit-ct _jtfct-ct">
          <img 
            src="/images/qr.png" 
            class="_mgt-24px _h-256px _mgr-24px"
            alt="">
          <h2 class="_lh-100pct">Join us at <br><strong>www.onceyouand.me</strong></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Player from '~/components/Player'
import * as firebase from 'firebase/app'
import Countdown from 'vuejs-countdown'
export default {
  components: {
    Player,
    Countdown
  },
  data: () => ({
    fbDb: null,
    g: 0,
    b: 0,
    countdownText: 'GO',
    start: false,
    counting321: false,
    stopFactor: 1
  }),
  computed: {
    _brideR () {
      return this.b/(this.b + this.g) || 0.5
    },
    _groomR () {
      return this.g/(this.b + this.g) || 0.5
    }
  },
  async mounted () {
    this.fbDb = await firebase.database()
    // this.fbDb.bride = await firebase.database().ref('bride').child('count')
    this.fbDb.ref('bride').child('count').on('value', (s) => {
      this.b = s.val()
    })
    this.fbDb.ref('groom').child('count').on('value', (s) => {
      this.g = s.val()
    })
    this.reset()
  },
  methods: {
    async reset () {
      // Click R to reset score
      this.fbDbBride = await firebase.database().ref('bride')
      this.fbDbGroom = await firebase.database().ref('groom')
      this.fbDbBride.set({
        count: 1
      })
      this.fbDbGroom.set({
        count: 1
      })
      alert('resetted')
      this.countdownText = 3
      this.start = true
      if (this.countdownText === 3 && this.start) {
        this.start = false
        this.counting321 = true
        setInterval(() => {
          if (this.countdownText === 0 && this.counting321) {
            this.counting321 = false
            this.countdownText = 30
          } 
          if (this.countdownText === 0 && !this.counting321) {
            this.countdownText = `#team${(this.g > this.b)? 'groom': 'bride'} wins!`
          }
          if (Number.isInteger(this.countdownText)) {
            this.countdownText -= 1
          }
        }, 1000)
      }
      
    },
  },
}
</script>

<style lang="scss" scoped>
.cdt {
  font-size: 7em;
}
</style>
