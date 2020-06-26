<template>
  <div id="values">
    <el-input v-model="search" placeholder="输入关键字搜索">
      <template slot="prepend">
        <i class="el-icon-search"></i>
      </template>
    </el-input>
    <div id="values-table">
      <el-table :data="valuesObject.filter(data => valuesObjectFilter(data, search))" height="400">
        <el-table-column label="参数" prop="key"></el-table-column>
        <el-table-column label="描述" prop="description"></el-table-column>
        <el-table-column label="值" prop="value">
          <template slot-scope="scope">
            <el-input v-model="scope.row.value"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button type="primary" @click="modifyValues">修改单位参数</el-button>
  </div>
</template>

<script>
import valuesDefaultObject from "../data/valuesObject";
import valuesObject from "../data/valuesObject";
import { isNumber } from "../tools";

export default {
  name: "Values",
  data() {
    return {
      valuesObject: valuesDefaultObject,
      search: ""
    };
  },
  methods: {
    valuesObjectFilter: function(data, search) {
      return (
        !search ||
        data.description.toLowerCase().includes(search.toLowerCase()) ||
        data.key.toLowerCase().includes(search.toLowerCase())
      );
    },
    modifyValues: function() {
      const { rootPath } = this.$store.state;
      if (rootPath === undefined || rootPath === "") {
        this.$message.error("请指定敌对水域游戏根目录");
        return;
      }
      const values = {};
      for (const item of this.valuesObject) {
        if (isNumber(item.value)) {
          values[item.key] = item.value;
        } else {
          this.$message.error(`[数据不合法] ${item.key} - ${item.value}`);
          return;
        }
      }
      window.valuesModify(values, rootPath);
      this.$message.success("修改成功");
    }
  }
};
</script>

<style>
#values{
  margin: 10px 0;
}
#values-table {
  margin: 10px 0 15px 0;
}
</style>
