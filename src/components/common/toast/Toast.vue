<template>
  <div  v-show="isShow" class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
  },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration = 1500) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
      }, duration)
    }

  }
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  z-index: 9999;
  background-color: rgba($color: #000000, $alpha: 0.5)
}
</style>
