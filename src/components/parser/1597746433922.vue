<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px"
               label-position="left" inline="inline">
        <el-row>
          <el-col :span="20">
            <el-col :span="9">
              <el-form-item label="多行文本" prop="field123">
                <el-input v-model="formData.field123" placeholder="请输入多行文本多行文本" clearable
                          :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="13">
              <el-form-item label="计数器" prop="field113">
                <el-input-number v-model="formData.field113" placeholder="计数器" :step='1'></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="20">
              <el-form-item label="单行文本" prop="field129">
                <el-input v-model="formData.field129" placeholder="请输入单行文本单行文本单行文本" clearable
                          :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="4" style='position: absolute;
    right: 10px;
    bottom: 25px;
    text-align: right;'>
            <el-col :span="24">
              <el-col size="large" style="width:100%;  display: flex; flex-direction: row;">
                <el-button style="width: 100%; display: flex; " type="primary" @click="submitForm">提交
                </el-button>
                <el-button style="width: 100%; display: flex;" @click="resetForm">重置</el-button>
              </el-col>
            </el-col>
          </el-col>
        </el-row>
      </el-form>
      <el-col :span="13">
        <el-row type="" justify="undefined" align="undefined">
          <el-table mountMethods='{}' icon='"el-icon-table"' size='"medium"' :data="tableData">
            <el-table-column prop='date' label='日期' width='180'>
            </el-table-column>
            <el-table-column prop='name' label='名称' width='180'>
            </el-table-column>
            <el-table-column prop='address' label='地址' width='undefined'>
            </el-table-column>
          </el-table>
        </el-row>
      </el-col>
      <el-col :span="13">
        <el-row type="" justify="undefined" align="undefined">
          <el-table mountMethods='{}' icon='"el-icon-table"' size='"medium"' :data="tableData">
            <el-table-column prop='date' label='日期' width='180'>
            </el-table-column>
            <el-table-column prop='name' label='名称' width='180'>
            </el-table-column>
            <el-table-column prop='address' label='地址' width='undefined'>
            </el-table-column>
          </el-table>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    components: {},
    props: [],
    data() {
      return {
        formData: {
          field123: undefined,
          field113: 1,
          field129: undefined,
        },
        rules: {
          field123: [{
            required: true,
            message: '请输入多行文本多行文本',
            trigger: 'blur'
          }],
          field113: [{
            required: true,
            message: '计数器',
            trigger: 'blur'
          }],
          field129: [{
            required: true,
            message: '请输入单行文本单行文本单行文本',
            trigger: 'blur'
          }],
        },
        tableData: [{
          "date": "2016-05-02",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1518 弄"
        }, {
          "date": "2016-05-04",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1517 弄"
        }, {
          "date": "2016-05-01",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1519 弄"
        }, {
          "date": "2016-05-03",
          "name": "王小虎",
          "address": "上海市普陀区金沙江路 1516 弄"
        }],
        columns: [{
          "prop": "date",
          "label": "日期",
          "width": 180,
          "fixed": false
        }, {
          "prop": "name",
          "label": "名称",
          "width": 180,
          "fixed": false
        }, {
          "prop": "address",
          "label": "地址",
          "fixed": false
        }],
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
      submitForm() {
        this.$refs['elForm'].validate(valid => {
          if (!valid) return
          // TODO 提交表单
        })
      },
      resetForm() {
        this.$refs['elForm'].resetFields()
      },
    }
  }

</script>
<style>
</style>
