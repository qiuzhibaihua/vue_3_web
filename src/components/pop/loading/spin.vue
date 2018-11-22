<template>
  <span class="loading-spin" :class="{reverse}"></span>
</template>

<script>
  export default {
    props: {
      reverse: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less" scoped>
  @keyframes loadingSpin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  .loading-spin {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 0.03rem solid rgba(0,0,0,.3);
    border-top-color: rgba(0,0,0,.8);
    margin-bottom: .5rem;
    border-radius: 50%;
    animation: loadingSpin .5s linear infinite;
    &.reverse {
      border: 0.03rem solid rgba(255,255,255,.3);
      border-top-color: #ff3333;
    }
  }
</style>