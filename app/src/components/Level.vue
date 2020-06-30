<template>
  <div id="level">
    <div id="level-collapse">
      <el-collapse v-model="activeNames">
        <el-collapse-item :title="$t('level.selectLevel.title')" :name="1" :key="1">
          <el-select v-model="level" filterable :placeholder="$t('level.selectLevel.placeholder')">
            <el-option
              v-for="item in levelList"
              :key="item.key"
              :label="item.key"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-collapse-item>
        <el-collapse-item :title="$t('level.selectUnit.title')" :name="0" :key="0">
          <template v-for="(unitBuildingItem, index) in unitBuildingList">
            <div class="level-unit-group" :key="index">
              <el-checkbox
                :indeterminate="isIndeterminateList[index]"
                v-model="checkAllList[index]"
                @change="(value) => {handleCheckAllChange(value, index)}"
              >{{$t('level.selectUnit.all')}}</el-checkbox>
              <el-checkbox-group
                v-model="checkedList[index]"
                @change="(value) => {handleCheckedChange(value, index)}"
              >
                <el-checkbox
                  v-for="unit in unitBuildingItem.detail"
                  :label="unit"
                  :key="unit.key"
                >{{$t(unit.description)}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </template>
        </el-collapse-item>
      </el-collapse>
    </div>
    <el-button type="primary" @click="modifyLevelUnit">{{$t('level.button')}}</el-button>
    <el-divider></el-divider>
    <div id="unit-slot-introduction">
      <p class="warning">{{$t('level.warning')}}
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
        this.$message.error(this.$i18n.tc("message.rootPathEmpty"));
        return;
      }
      if (this.level === "") {
        this.$message.error(this.$i18n.tc("message.levelEmpty"));
        return;
      }
      const unitCodeList = [];
      for (const checkedItem of this.checkedList) {
        for (const item of checkedItem) {
          unitCodeList.push(item.value);
        }
      }
      window.levelModify(this.level, unitCodeList, rootPath);
      this.$message.success(this.$i18n.tc("message.success"));
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
#level .unit-slot-introduction {
  white-space: pre-wrap;
}
#level .warning {
  color: #f56c6c;
}
</style>
