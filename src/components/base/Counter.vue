<template>
  <div class="counter-component">
    <div class="counter-btn" @click="reduce"> - </div>
    <div class="counter-show">
      <input type="number" v-model="number" @keyup="fixNumber"/>
    </div>
    <div class="counter-btn" @click="add"> + </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    min: {
      type: Number,
      default: () => 0
    },
    max: {
      type: Number,
      default: () => 10
    }
  },
  data () {
    return {
      number: this.min
    }
  },
  methods: {
    fixNumber () {
      let fix
      if (typeof this.number === 'string') {
        fix = Number(this.number.replace(/\D/g, ''))
      } else {
        fix = this.number
      }
      if (fix > this.max) {
        fix = this.max
      }
      if (fix < this.min) {
        fix = this.min
      }
      this.number = fix
    },
    reduce () {
      if (this.number <= this.min) {
        return
      }
      this.number--
    },
    add () {
      if (this.number >= this.max) {
        return
      }
      this.number++
    }
  },
  watch: {
    number () {
      this.$emit('on-change', this.number)
    }
  }
}
</script>

<style scoped>
  .counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .counter-show {
    float: left;
  }
  .counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-indent: 4px;
  }
  .counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
  }
  .counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
