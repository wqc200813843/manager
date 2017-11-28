<style scoped>
.input-label{
  text-align: right;
  display: inline-block;
}
.select-input{
  margin:0 10px 10px 0;
}
</style>

<template>
  <div class="pull-left select-input">
    <label class="input-label" :style="{width:ilabelWidth}">{{name}}：</label>
    <el-select v-model="selectValue" :placeholder="placeholder" :style="{width:iinputWidth}">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        >
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectValue: ''
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
    value: {
      default: '',
      type: String
    },
    options: {
      default: [],
      type: Array
    },
    placeholder: {
      default: '暂无内容',
      type: String
    }
  },
  watch: {
    textValue: function () {
      this.$emit('input', this.selectValue)
    }
  }
}
</script>
