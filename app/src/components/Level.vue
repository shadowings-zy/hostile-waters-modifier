<template>
  <div id="level">
    <div id="level-collapse">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="关卡选择" :name="1" :key="1">
          <el-select v-model="level" filterable placeholder="请选择关卡">
            <el-option
              v-for="item in levelList"
              :key="item.key"
              :label="item.key"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-collapse-item>
        <el-collapse-item title="出场单位选择" :name="0" :key="0">
          <template v-for="(unitBuildingItem, index) in unitBuildingList">
            <div class="level-unit-group" :key="index">
              <el-checkbox
                :indeterminate="isIndeterminateList[index]"
                v-model="checkAllList[index]"
                @change="(value) => {handleCheckAllChange(value, index)}"
              >全选</el-checkbox>
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
            </div>
          </template>
        </el-collapse-item>
      </el-collapse>
    </div>
    <el-button type="primary" @click="modifyLevelUnit">修改出场单位</el-button>
    <el-divider></el-divider>
    <div id="unit-slot-introduction">
      <p class="warning">
        注意：
        <br />修改当前关卡的可建造产品后，必须从上一关重新进入本关卡，修改的结果才会生效。
        <br />否则无论是直接读当前关卡还是直接读了当前关卡后再重新开始本关，修改的效果都不会体现出来。
      </p>
    </div>
  </div>
</template>

<script>
import unitBuildingObject from "../data/unitBuildingObject";
import levelObject from "../data/levelObject";

export default {
  name: "Level",
  data() {
    return {
      activeNames: [0, 1],
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
#level .level-unit-group {
  margin: 5px 0 20px 0;
}
#level .warning {
  color: #f56c6c;
}
</style>
