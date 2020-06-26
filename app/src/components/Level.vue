<template>
  <div id="level">
    <div id="level-select">
      <el-select v-model="level" filterable placeholder="请选择关卡">
        <el-option v-for="item in levelList" :key="item.key" :label="item.key" :value="item.value"></el-option>
      </el-select>
    </div>
    <div id="level-collapse">
      <el-collapse v-model="activeNames">
        <template v-for="(unitBuildingItem, index) in unitBuildingList">
          <el-collapse-item
            :title="unitBuildingItem.name"
            :name="unitBuildingItem.type"
            :key="index"
          >
            <el-checkbox
              :indeterminate="isIndeterminateList[index]"
              v-model="checkAllList[index]"
              @change="(value) => {handleCheckAllChange(value, index)}"
            >全选</el-checkbox>
            <div class="divider"></div>
            <el-checkbox-group
              v-model="checkedList[index]"
              @change="(value) => {handleCheckedChange(value, index)}"
            >
              <el-checkbox
                v-for="unit in unitBuildingItem.detail"
                :label="unit"
                :key="unit.key"
              >{{unit.description}}</el-checkbox>
            </el-checkbox-group>
          </el-collapse-item>
        </template>
      </el-collapse>
    </div>
    <el-button type="primary" @click="modifyLevelUnit">修改出场单位</el-button>
  </div>
</template>

<script>
import unitBuildingObject from "../data/unitBuildingObject";
import levelObject from "../data/levelObject";

export default {
  name: "Level",
  data() {
    return {
      activeNames: [0, 1, 2, 3, 4],
      level: "",
      unitBuildingList: unitBuildingObject,
      levelList: levelObject,
      checkAllList: [false, false, false, false, false],
      checkedList: [[], [], [], [], []],
      isIndeterminateList: [false, false, false, false, false]
    };
  },
  methods: {
    handleCheckAllChange(value, index) {
      this.checkedList[index] = value ? unitBuildingObject[index].detail : [];
      this.isIndeterminateList.splice(index, 1, false);
    },
    handleCheckedChange(value, index) {
      let checkedCount = value.length;
      this.checkAllList.splice(
        index,
        1,
        checkedCount === unitBuildingObject[index].detail.length
      );
      this.isIndeterminateList.splice(
        index,
        1,
        checkedCount > 0 &&
          checkedCount < unitBuildingObject[index].detail.length
      );
    },
    modifyLevelUnit: function() {
      const { rootPath } = this.$store.state;
      if (rootPath === undefined || rootPath === "") {
        this.$message.error("请指定敌对水域游戏根目录");
        return;
      }
      if (this.level === "") {
        this.$message.error("请选择你要修改的关卡");
        return;
      }
      const unitCodeList = [];
      for (const checkedItem of this.checkedList) {
        for (const item of checkedItem) {
          unitCodeList.push(item.value);
        }
      }
      window.levelModify(this.level, unitCodeList, rootPath);
      this.$message.success("修改成功");
    }
  }
};
</script>

<style>
#level {
  margin: 10px;
}
#level-select {
  margin: 10px;
}
#level-collapse {
  text-align: left;
  margin: 10px 0 20px 0;
}
#level .divider {
  margin: 15px 0;
}
</style>
