<template>
  <div class="chooser-component">
    <div class="chooser-list">
      <ul>
        <li v-for="(item, index) in choosers" :key="item.label" :class="{active: checkIndex(index)}" @click="toggleIndex(index)">{{ item.label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'MultiplyChooser',
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
      nowIndexes: []
    }
  },
  methods: {
    toggleIndex (index) {
      if (this.nowIndexes.indexOf(index) !== -1) {
        // 存在，删除
        this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
          return idx !== index
        })
      } else {
        // 不存在，新增
        this.nowIndexes.push(index)
      }
      let nowArray = _.map(this.nowIndexes, (idx) => {
        return this.choosers[idx]
      })
      this.$emit('on-change', nowArray)
    },
    checkIndex (index) {
      return this.nowIndexes.indexOf(index) !== -1
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
