<template>
  <div id="app">
    <div>敌对水域修改器！</div>
    <el-button type="primary" icon="el-icon-search" @click="selectGameRootPath">选择敌对水域游戏根目录</el-button>
    <div>{{gameRootPath}}</div>
    <el-tabs v-model="activeTab">
      <el-tab-pane label="单位参数" :name="tabName[0]">通过修改敌对水域中values.txt文件，可更改单位参数。</el-tab-pane>
      <el-tab-pane label="载具模型" :name="tabName[1]">通过修改敌对水域中ObjectBin文件夹中的文件，可更改单位模型。</el-tab-pane>
      <el-tab-pane label="载具装备槽" :name="tabName[2]">通过修改敌对水域中ObjectBin文件夹中的文件，可更改单位装备槽。</el-tab-pane>
      <el-tab-pane label="关卡所用载具" :name="tabName[3]">通过修改敌对水域中各关卡文件夹中的文件，可更改每关可出场单位。</el-tab-pane>
      <el-tab-pane label="关于作者" :name="tabName[4]">关于作者</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tabName: ["values", "model", "slot", "level", "author"],
      activeTab: "values",
      gameRootPath: ""
    };
  },
  methods: {
    selectGameRootPath: function() {
      const _this = this;
      console.log("select game root path");
      window.remote.dialog
        .showOpenDialog({
          properties: ["openDirectory"]
        })
        .then(function(result) {
          if (!result.canceled) {
            _this.gameRootPath = result.filePaths[0];
          }
        })
        .catch(function(err) {
          console.log(err);
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
