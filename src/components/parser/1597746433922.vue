<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px"
        label-position="left">
        <el-col :span="24">
          <el-form-item label="单行文本" prop="mobile">
            <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
              prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="级联选择" prop="field101">
            <el-cascader v-model="formData.field101" :options="field101Options" :props="field101Props"
              :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开关" prop="field123" required>
            <el-switch v-model="formData.field123"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="计数器" prop="field116">
            <el-input-number v-model="formData.field116" placeholder="计数器" :step='1'></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="滑块" prop="field102">
            <el-input v-model="formData.field102" placeholder="请选择下拉选择" clearable show-password
              :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单选框组" prop="field122">
            <el-radio-group v-model="formData.field122" size="medium">
              <el-radio v-for="(item, index) in field122Options" :key="index" :label="item.value"
                :disabled="item.disabled">{{item.label}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单行文本" prop="field135">
            <el-input v-model="formData.field135" placeholder="请输入单行文本" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="评分" prop="field134">
            <el-rate v-model="formData.field134" :max='5'></el-rate>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="日期范围" prop="field137">
            <el-date-picker type="daterange" v-model="formData.field137" format="yyyy-MM-dd"
              value-format="yyyy-MM-dd" :style="{width: '100%'}" start-placeholder="开始日期"
              end-placeholder="结束日期" range-separator="至" clearable></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="时间范围" prop="field138">
            <el-time-picker v-model="formData.field138" is-range format="HH:mm:ss" value-format="HH:mm:ss"
              :style="{width: '100%'}" start-placeholder="开始时间" end-placeholder="结束时间" range-separator="至"
              clearable></el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="编辑器" prop="field139">
            <tinymce v-model="formData.field139" placeholder="请输入编辑器" :height="300"></tinymce>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
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
        mobile: "13768984677",
        field101: [],
        field123: false,
        field116: 3,
        field102: 1,
        field122: undefined,
        field135: undefined,
        field134: 0,
        field137: null,
        field138: null,
        field139: null,
      },
      rules: {
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }, {
          pattern: /^1(3|4|5|7|8|9)\d{9}$/,
          message: '手机号格式错误',
          trigger: 'blur'
        }],
        field101: [{
          required: true,
          type: 'array',
          message: '请至少选择一个级联选择',
          trigger: 'change'
        }],
        field116: [{
          required: true,
          message: '计数器',
          trigger: 'blur'
        }],
        field102: [{
          required: true,
          message: '请选择下拉选择',
          trigger: 'blur'
        }],
        field122: [{
          required: true,
          message: '单选框组不能为空',
          trigger: 'change'
        }],
        field135: [{
          required: true,
          message: '请输入单行文本',
          trigger: 'blur'
        }],
        field134: [{
          required: true,
          message: '评分不能为空',
          trigger: 'change'
        }],
        field137: [{
          required: true,
          message: '日期范围不能为空',
          trigger: 'change'
        }],
        field138: [{
          required: true,
          message: '时间范围不能为空',
          trigger: 'change'
        }],
        field139: [{
          required: true,
          message: '请输入编辑器',
          trigger: 'blur'
        }],
      },
      field101Options: [],
      field102Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field122Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field101Props: {
        "multiple": false,
        "label": "label",
        "value": "value",
        "children": "children"
      },
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
    getField101Options() {
      // TODO 发起请求获取数据
      this.field101Options
    },
  }
}

</script>
<style>
.el-rate {
  display: inline-block;
  vertical-align: text-top;
}

</style>
