<template>
  <div id="values">
    <el-input v-model="search" :placeholder="$t('values.placeholder')">
      <template slot="prepend">
        <i class="el-icon-search"></i>
      </template>
    </el-input>
    <div id="values-table">
      <el-table :data="valuesObject.filter(data => valuesObjectFilter(data, search))" height="400">
        <el-table-column :label="$t('values.tableHeader.key')" prop="key"></el-table-column>
        <el-table-column :label="$t('values.tableHeader.description')" prop="description">
          <template slot-scope="scope">
            <p>{{$t(scope.row.description)}}</p>
          </template>
        </el-table-column>
        <el-table-column :label="$t('values.tableHeader.value')" prop="value">
          <template slot-scope="scope">
            <el-input v-model="scope.row.value"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button type="primary" @click="modifyValues">{{$t('values.button')}}</el-button>
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
      const key = data.key
      const description = this.$i18n.tc(data.description)
      return (
        !search ||
        key.toLowerCase().includes(search.toLowerCase()) ||
        description.toLowerCase().includes(search.toLowerCase())
      );
    },
    modifyValues: function() {
      const { rootPath } = this.$store.state;
      if (rootPath === undefined || rootPath === "") {
        this.$message.error(this.$i18n.tc("message.rootPathEmpty"));
        return;
      }
      const values = {};
      for (const item of this.valuesObject) {
        if (isNumber(item.value)) {
          values[item.key] = item.value;
        } else {
          this.$message.error(this.$i18n.tc("message.unknownValuesParam"));
          return;
        }
      }
      window.valuesModify(values, rootPath);
      this.$message.success(this.$i18n.tc("message.success"));
    }
  }
};
</script>

<style>
#values {
  margin: 10px 0;
}
#values-table {
  margin: 10px 0 15px 0;
}
</style>
