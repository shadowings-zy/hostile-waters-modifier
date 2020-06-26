<template>
  <div id="app">
    <h1 id="modifier-title">敌对水域修改器</h1>
    <div id="root-path-input">
      <el-input placeholder="游戏根目录路径" v-model="gameRootPath" :disabled="true">
        <el-button slot="prepend" icon="el-icon-folder-add" @click="selectGameRootPath">选择游戏根目录</el-button>
      </el-input>
    </div>
    <el-tabs type="border-card" v-model="activeTab">
      <el-tab-pane :name="tabName[0]">
        <el-tooltip slot="label" content="通过修改敌对水域中values.txt文件，可更改单位参数。" placement="top">
          <div>
            <i class="el-icon-data-analysis"></i>
            <span>&nbsp;单位参数</span>
          </div>
        </el-tooltip>
        <Values />
      </el-tab-pane>
      <el-tab-pane :name="tabName[1]">
        <el-tooltip slot="label" content="通过修改敌对水域中ObjectBin文件夹中的文件，可更改载具模型。" placement="top">
          <div>
            <i class="el-icon-files"></i>
            <span>&nbsp;载具模型</span>
          </div>
        </el-tooltip>
        <Model />
      </el-tab-pane>
      <el-tab-pane :name="tabName[2]">
        <el-tooltip slot="label" content="通过修改敌对水域中ObjectBin文件夹中的文件，可更改载具装备槽。" placement="top">
          <div>
            <i class="el-icon-box"></i>
            <span>&nbsp;载具插槽</span>
          </div>
        </el-tooltip>
        <UnitSlot />
      </el-tab-pane>
      <el-tab-pane :name="tabName[3]">
        <el-tooltip slot="label" content="通过修改敌对水域中各关卡文件夹中的文件，可更改每关可出场单位。" placement="top">
          <div>
            <i class="el-icon-bangzhu"></i>
            <span>&nbsp;出场单位</span>
          </div>
        </el-tooltip>
        <Level />
      </el-tab-pane>
      <el-tab-pane :name="tabName[4]">
        <el-tooltip slot="label" content="开发者信息及贡献指南" placement="top">
          <div>
            <i class="el-icon-user"></i>
            <span>&nbsp;关于作者</span>
          </div>
        </el-tooltip>
        <Author />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Values from "./components/Values";
import Model from "./components/Model";
import UnitSlot from "./components/UnitSlot";
import Level from "./components/Level";
import Author from "./components/Author";

export default {
  name: "App",
  components: { Values, Model, UnitSlot, Level, Author },
  data() {
    return {
      tabName: ["values", "model", "unitSlot", "level", "author"],
      activeTab: "values",
      gameRootPath: ""
    };
  },
  methods: {
    selectGameRootPath: function() {
      const _this = this;
      window.remote.dialog
        .showOpenDialog({
          properties: ["openDirectory"]
        })
        .then(function(result) {
          if (!result.canceled) {
            _this.gameRootPath = result.filePaths[0];
            _this.$store.commit("setRootPath", result.filePaths[0])
          }
        })
        .catch(function(err) {
          _this.$message.error(err.toString());
        });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303133;
  margin: 20px;
}
#modifier-title {
  margin: 20px 0;
}
#root-path-input {
  margin: 20px 0 30px 0;
}
.el-input.is-disabled .el-input__inner {
  background-color: #fff !important;
  color: #303133 !important;
}
</style>
