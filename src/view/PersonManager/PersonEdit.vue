<template>
  <el-dialog :title="form.id?'人员编辑':'人员新增'" :visible.sync="dialogFormVisible" width="880px">
    <el-form :model="form" label-width="100px" :rules="rules">
      <el-row>
        <el-col :span="16">
          <el-row>
            <el-col :span="12">
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>  
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="save">确 定</el-button>
      <el-button @click="cancel">取 消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data () {
    return {
      form: {
        id: null,
        name: ''
      },
      dialogFormVisible: false,
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    personEdit: function (personInfo) {
      this.dialogFormVisible = true
    },
    save: function () {
      this.dialogFormVisible = false
    },
    cancel: function () {
      this.dialogFormVisible = false
    }
  }
}
</script>

