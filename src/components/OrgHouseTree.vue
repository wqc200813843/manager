<template>
  <div class="tree-container">
    <el-input
      placeholder="按组织名称查询"
      prefix-icon="el-icon-search"
      v-model="searchKey" class="fuzzy-search">
    </el-input>
    <el-tree :data="treeData" :props="defaultProps"></el-tree>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchKey: '',
      treeData: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>
<style scoped>
.tree-container {
}
.fuzzy-search {
  margin: 10px;
  width: 178px;
}
</style>


