<template>
  <div class="chooser-component">
    <div class="chooser-list">
      <ul>
        <li v-for="(item, index) in choosers" :key="item.label" :class="{active: index === nowIndex}" @click="choose(index)">{{ item.label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chooser',
  props: {
    choosers: {
      type: Array,
      default: () => [
        {
          label: 'default',
          value: 0
        }
      ]
    }
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  methods: {
    choose (index) {
      this.nowIndex = index
      this.$emit('on-change', this.choosers[index])
    }
  }
}
</script>

<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
