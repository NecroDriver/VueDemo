<template>
  <div>
    <v-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">支付成功！</div>
      <div class="button" @click="checkStatus">支付失败！</div>
    </v-dialog>
    <v-dialog :is-show="isShowSuccessDialog">购买成功！</v-dialog>
    <v-dialog :is-show="isShowFailDialog">购买失败！</v-dialog>
  </div>
</template>

<script>
import VDialog from '../components/base/Dialog'

export default {
  name: 'CheckDialog',
  components: {
    VDialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: () => false
    },
    orderId: {
      type: [String, Number]
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      this.$http.post('/api/checkOrder', {orderId: this.orderId}).then(() => {
        this.isShowSuccessDialog = true
        this.$emit('on-close-check-dialog')
      }, () => {
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    }
  }
}
</script>

<style scoped>

</style>
