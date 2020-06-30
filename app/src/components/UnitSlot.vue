<template>
  <div id="unit-slot">
    <el-form id="unit-slot-form" ref="form" :model="form" label-width="120px">
      <el-form-item :label="$t('unitSlot.source.title')">
        <el-select v-model="form.sourceUnitSlot" filterable :placeholder="$t('unitSlot.source.placeholder')">
          <el-option
            v-for="item in unitSlotList"
            :key="item.key"
            :label="$t(item.key)"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('unitSlot.target.title')">
        <el-select v-model="form.targetUnitSlot" filterable :placeholder="$t('unitSlot.target.placeholder')">
          <el-option
            v-for="item in unitSlotList"
            :key="item.key"
            :label="$t(item.key)"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="modifyUnitSlot">{{$t('unitSlot.button')}}</el-button>
    </el-form>
    <el-divider></el-divider>
    <div id="unit-slot-introduction">
      <p>{{$t('unitSlot.example')}}</p>
      <p class="warning">{{$t('unitSlot.warning')}}</p>
    </div>
  </div>
</template>

<script>
import unitSlotObject from "../data/unitSlotObject";

export default {
  name: "UnitSlot",
  data() {
    return {
      form: {
        sourceUnitSlot: "",
        targetUnitSlot: ""
      },
      unitSlotList: unitSlotObject,
      dialogVisible: false
    };
  },
  methods: {
    modifyUnitSlot: function() {
      const { rootPath } = this.$store.state;
      const { sourceUnitSlot, targetUnitSlot } = this.form;
      if (rootPath === undefined || rootPath === "") {
        this.$message.error(this.$i18n.tc("message.rootPathEmpty"));
        return;
      }
      if (sourceUnitSlot === "" || targetUnitSlot === "") {
        this.$message.error(this.$i18n.tc("message.unitSlotEmpty"));
        return;
      }
      window.objectBinModify(sourceUnitSlot, targetUnitSlot, rootPath);
      this.$message.success(this.$i18n.tc("message.success"));
    }
  }
};
</script>

<style>
#unit-slot {
  margin: 20px 0;
}
#unit-slot-form {
  width: 60%;
  margin: 0 auto;
}
#unit-slot-form .el-select {
  width: 100% !important;
}
#unit-slot-introduction {
  text-align: left;
  font-size: 12px;
  white-space: pre-wrap;
}
#unit-slot .warning {
  color: #f56c6c;
}
</style>
