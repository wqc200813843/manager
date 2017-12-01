<template>
  <div class="person-manager">
    <org-house-tree class="org-house-tree"></org-house-tree>
    <div class="tree-view-container flex">
      <div class="operation pb10 clearfix"><!-- 操作栏 -->
        <el-button type="primary" @click="personEdit">人员导入</el-button>
        <el-button>导入</el-button>
        <el-button>导出</el-button>
        <el-button type="danger">批量删除</el-button>
      </div>
      <div class="search p10 clearfix"><!-- 查询条件 -->
        <div class="search-condition">
          <text-input name="姓名" v-model="searchCondition.name"></text-input>
          <select-input name="人员类型" v-model="searchCondition.personType" :options="personTypeList"></select-input>
          <select-input name="性别" v-model="searchCondition.sex" :options="sexList"></select-input>
        </div>
        <div class="search-button">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </div>
      </div>
      <div class="person-list"><!-- 带分页表格 -->
        <pager-table
        :pageSize="searchCondition.pageSize"
        :currentPage="searchCondition.currentPage"
        :total="searchCondition.total"
        hasSelect
        :tableData="personList">
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
                  @click="personEdit(scope)"
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
      <person-edit ref="personEdit"></person-edit>
    </div>
    
  </div>
</template>
<script>
import OrgHouseTree from '../../components/OrgHouseTree'
import TextInput from '../../components/TextInput'
import SelectInput from '../../components/SelectInput'
import PagerTable from '../../components/PagerTable'
import PersonEdit from './PersonEdit'
export default {
  data () {
    return {
      searchCondition: {
        name: '',
        personType: '',
        sex: '',
        pageSize: 10,
        currentPage: 1,
        total: 1
      },
      personTypeList: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '业主',
          value: '1'
        },
        {
          label: '租户',
          value: '2'
        }
      ],
      sexList: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '男',
          value: '1'
        },
        {
          label: '女',
          value: '2'
        }
      ],
      personList: [
        {
          name: '周程',
          personType: '业主',
          sex: '男',
          age: '25',
          idCardType: '身份证',
          idCardNumber: '339005199205954234543543543543543534543543543543543534543',
          houseAddress: 'xx小区1幢1单元101',
          phone: '15105857130'
        }
      ]
    }
  },
  components: {
    OrgHouseTree,
    TextInput,
    SelectInput,
    PagerTable,
    PersonEdit
  },
  methods: {
    /** @author wangqichao
     * @description 重置查询条件
     */
    resetSearchCondition: function () {
      this.searchCondition.name = ''
      this.searchCondition.personType = ''
      this.searchCondition.sex = ''
      this.searchCondition.name = ''
    },
    personEdit: function (data) {
      this.$refs['personEdit'].personEdit(data || null)
    }
  }
}
</script>
<style scoped>
.operation .el-button {
  float: left;
}
.person-list {
  flex: 1;
  margin-top: 10px;
  position: relative;
}
</style>
