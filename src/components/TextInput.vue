<style scoped>
.input-label{
  text-align: right;
  display: inline-block;
}
.text-input{
  margin:0 10px 10px 0;
}
</style>

<template>
  <div class="pull-left text-input">
    <label class="input-label" :style="{width:ilabelWidth}">{{name}}：</label>
    <el-input
      :placeholder="placeholder"
      v-model="textValue"
      :style="{width:iinputWidth}"
      >
    </el-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textValue: ''
    }
  },
  computed: {
    ilabelWidth: function () {
      return this.labelWidth + 'px'
    },
    iinputWidth: function () {
      return this.inputWidth + 'px'
    }
  },
  props: {
    'label-width': {
      default: 80,
      type: Number
    },
    'input-width': {
      default: 198,
      type: Number
    },
    name: {
      default: '',
      type: String
    },
    placeholder: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    }
  },
  watch: {
    textValue: function () {
      this.$emit('input', this.textValue)
    }
  },
  created: function () {
    this.textValue = this.value
  }
}
</script>

