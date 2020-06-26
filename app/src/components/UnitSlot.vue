<template>
  <div id="unit-slot">
    <el-form id="unit-slot-form" ref="form" :model="form" label-width="120px">
      <el-form-item label="初始装备槽文件">
        <el-select v-model="form.sourceUnitSlot" filterable placeholder="请选择被更换的载具装备槽文件">
          <el-option
            v-for="item in unitSlotList"
            :key="item.key"
            :label="item.key"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="目标装备槽文件">
        <el-select v-model="form.targetUnitSlot" filterable placeholder="请选择要更换的新载具装备槽文件">
          <el-option
            v-for="item in unitSlotList"
            :key="item.key"
            :label="item.key"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="modifyUnitSlot">修改载具装备槽</el-button>
    </el-form>
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
      unitSlotList: unitSlotObject
    };
  },
  methods: {
    modifyUnitSlot: function() {
      const { rootPath } = this.$store.state;
      const { sourceUnitSlot, targetUnitSlot } = this.form;
      if (rootPath === undefined || rootPath === "") {
        this.$message.error("请指定敌对水域游戏根目录");
        return;
      }
      if (sourceUnitSlot === "" || targetUnitSlot === "") {
        this.$message.error("请选择载具装备槽文件");
        return;
      }
      window.objectBinModify(sourceUnitSlot, targetUnitSlot, rootPath);
      this.$message.success("修改成功");
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
</style>
