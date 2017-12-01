<template>
  <div class="org-manager">
    <org-tree class="org-view-tree"></org-tree>
      <div class="tree-view-container flex">
        <div class="operation pb10 clearfix"><!-- 操作栏 -->
          <el-button type="primary">添加</el-button>
          <el-button>导入</el-button>
          <el-button>导出</el-button>
          <el-button type="danger">批量删除</el-button>
        </div>
        <div class="org-list"><!-- 带分页表格 -->
          <pager-table
          :pageSize="searchCondition.pageSize"
          :currentPage="searchCondition.currentPage"
          :total="searchCondition.total"
          hasSelect
          :tableData="orgList">
            <template slot="table-column">
              <el-table-column
                label="姓名"
                prop="name"
                width="80">
              </el-table-column>
              <el-table-column
                label="人员类型"
                prop="personType"
                width="80">
              </el-table-column>
              <el-table-column
                label="性别"
                prop="sex"
                width="80">
              </el-table-column>
              <el-table-column
                label="年龄"
                prop="age"
                width="80">
              </el-table-column>
              <el-table-column
                label="证件类型"
                prop="idCardType"
                width="80">
              </el-table-column>
              <el-table-column
                prop="idCardNumber"
                show-overflow-tooltip
                label="证件号码">
              </el-table-column>
              <el-table-column
                prop="houseAddress"
                show-overflow-tooltip
                label="房屋地址">
              </el-table-column>
              <el-table-column
                prop="phone"
                show-overflow-tooltip
                label="电话号码">
              </el-table-column>
              <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                  <el-button
                    size="mini">
                    编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger">
                    删除</el-button>
                </template>
              </el-table-column>
            </template>
          </pager-table>
        </div>
      </div>
  </div>
</template>
<script>
import OrgTree from '../../components/OrgTree'
import TextInput from '../../components/TextInput'
import PagerTable from '../../components/PagerTable'
export default {
  data () {
    return {
      // searchKey: ''
      searchCondition: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      orgList: []
    }
  },
  components: {
    OrgTree,
    TextInput,
    PagerTable
  }
}
</script>
<style scoped>
.operation .el-button {
  float: left;
}
.search-button {
  float: right;
  width: 200px;
}
.org-list {
  flex: 1;
  position: relative;
}
</style>


