<template>
  <div 
    :style="`width: ${ratio* 100}%;`" 
    class="_dp-f _alit-ct _mgt-24px _mgbt-64px wrapper">
    <!-- indicator -->
    <div 
      :class="`_h-64px _dp-f _jtfct-ct _alit-ct role _${role} _f-8`">
      <h4 class="_cl-white">{{ (ratio * 100).toFixed(0) }}%</h4>
    </div>
    <div 
      v-lazy:background-image="require(`~/assets/images/${role}.png`)"
      :class="{'order-first': right}" 
      class="_w-64px _h-64px _bdrd-50pct"/>
  </div>
</template>

<script>
export default {
  props: {
    role: {
      type: String,
      default: 'bride'
    },
    ratio: {
      type: Number,
      default: 0.5
    },
    right: {
      type: Boolean,
      default: false
    }
  }  
}
</script>


<style lang="scss" scoped>
.wrapper {
  min-width: 10%;
  transition: 0.1s;
}
.role {
  transition: 0.1s;
  border-radius: 16px;
}
._groom {
  background: navy;
}
._bride {
  background: pink;
}
</style>
