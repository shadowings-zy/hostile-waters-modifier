<template>
  <div id="model">
    <el-form id="model-form" ref="form" :model="form" label-width="120px">
      <el-form-item :label="$t('model.source.title')">
        <el-select v-model="form.sourceModel" filterable :placeholder="$t('model.source.placeholder')">
          <el-option
            v-for="item in unitModelList"
            :key="item.key"
            :label="item.key"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('model.target.title')">
        <el-select v-model="form.targetModel" filterable :placeholder="$t('model.target.placeholder')">
          <el-option
            v-for="item in unitModelList"
            :key="item.key"
            :label="item.key"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="modifyModel">{{$t('model.button')}}</el-button>
    </el-form>
    <el-divider></el-divider>
    <div id="model-introduction">
      <p>{{$t('model.example')}}</p>
      <p class="warning">{{$t('model.warning')}}</p>
    </div>
  </div>
</template>

<script>
import unitModelObject from "../data/unitModelObject";

export default {
  name: "Model",
  data() {
    return {
      form: {
        sourceModel: "",
        targetModel: ""
      },
      unitModelList: unitModelObject
    };
  },
  methods: {
    modifyModel: function() {
      const { rootPath } = this.$store.state;
      const { sourceModel, targetModel } = this.form;
      if (rootPath === undefined || rootPath === "") {
        this.$message.error(this.$i18n.tc("message.rootPathEmpty"));
        return;
      }
      if (sourceModel === "" || targetModel === "") {
        this.$message.error(this.$i18n.tc("message.modelEmpty"));
        return;
      }
      window.objectBinModify(sourceModel, targetModel, rootPath);
      this.$message.success(this.$i18n.tc("message.success"));
    }
  }
};
</script>

<style>
#model {
  margin: 20px 0;
}
#model-form {
  width: 60%;
  margin: 0 auto;
}
#model .el-select {
  width: 100% !important;
}
#model-introduction {
  text-align: left;
  font-size: 12px;
  white-space: pre-wrap;
}
#model .warning {
  color: #f56c6c;
}
</style>
