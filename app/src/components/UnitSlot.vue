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
    <el-divider></el-divider>
    <div id="unit-slot-introduction">
      <p>
        举个例子：
        <br />如果你想把游戏中秃鹰的载具插槽换成凤凰的载具插槽，那么你需要：
        <br />在初始模型中选择“秃鹰 - (vulture item box_s01.bin_n)”，
        <br />在目标模型中选择“凤凰 - (phoenix item box_s01.bin_n)”，
        <br />然后点击“修改载具装备槽”按钮，这样就完成载具插槽的修改了。
      </p>
      <p class="warning">
        注意：
        <br />读档前确保以下两点之一，否则读档时会卡退:
        <br />1.该存档是每一关数据统计结束后，过场动画前的存档点存的档。
        <br />2.该存档所有模组和卡槽数据与游戏数据文档相吻合。
      </p>
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
#unit-slot-introduction {
  text-align: left;
  font-size: 12px;
}
#unit-slot .warning {
  color: #f56c6c;
}
</style>
