<template>
  <div id="app">
    <el-button
      v-if="newVersionUrl !== ''"
      id="update"
      plain
      @click="update"
      size="mini"
      type="success"
    >{{$t("update")}}</el-button>
    <div id="main">
      <el-button id="language" plain @click="changeLanguage">{{$t("changeLanguage")}}</el-button>
      <h1 id="modifier-title">{{$t("title")}}</h1>
      <div id="root-path-input">
        <el-input :placeholder="$t('rootPath.placeholder')" v-model="gameRootPath" :disabled="true">
          <el-button
            slot="prepend"
            icon="el-icon-folder-add"
            @click="selectGameRootPath"
          >{{$t("rootPath.select")}}</el-button>
          <el-button
            slot="append"
            icon="el-icon-delete"
            @click="deleteModify"
          >{{$t("rootPath.restore")}}</el-button>
        </el-input>
      </div>
      <el-tabs type="border-card" v-model="activeTab">
        <el-tab-pane :name="tabName[0]">
          <el-tooltip slot="label" :content="$t('values.description')" placement="top">
            <div>
              <i class="el-icon-data-analysis"></i>
              <span>{{$t("values.tab")}}</span>
            </div>
          </el-tooltip>
          <Values />
        </el-tab-pane>
        <el-tab-pane :name="tabName[1]">
          <el-tooltip slot="label" :content="$t('model.description')" placement="top">
            <div>
              <i class="el-icon-files"></i>
              <span>{{$t("model.tab")}}</span>
            </div>
          </el-tooltip>
          <Model />
        </el-tab-pane>
        <el-tab-pane :name="tabName[2]">
          <el-tooltip slot="label" :content="$t('unitSlot.description')" placement="top">
            <div>
              <i class="el-icon-box"></i>
              <span>{{$t("unitSlot.tab")}}</span>
            </div>
          </el-tooltip>
          <UnitSlot />
        </el-tab-pane>
        <el-tab-pane :name="tabName[3]">
          <el-tooltip slot="label" :content="$t('level.description')" placement="top">
            <div>
              <i class="el-icon-bangzhu"></i>
              <span>{{$t("level.tab")}}</span>
            </div>
          </el-tooltip>
          <Level />
        </el-tab-pane>
        <el-tab-pane :name="tabName[4]">
          <div slot="label">
            <i class="el-icon-user"></i>
            <span>{{$t("about.tab")}}</span>
          </div>
          <About />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Values from "./components/Values";
import Model from "./components/Model";
import UnitSlot from "./components/UnitSlot";
import Level from "./components/Level";
import About from "./components/About";

export default {
  name: "App",
  components: { Values, Model, UnitSlot, Level, About },
  data() {
    return {
      tabName: ["values", "model", "unitSlot", "level", "about"],
      activeTab: "values",
      gameRootPath: "",
      newVersionUrl: ""
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
            _this.$store.commit("setRootPath", result.filePaths[0]);
          }
        })
        .catch(function(err) {
          _this.$message.error(err.toString());
        });
    },
    deleteModify: function() {
      const { rootPath } = this.$store.state;
      if (rootPath === undefined || rootPath === "") {
        this.$message.error(this.$i18n.tc("message.rootPathEmpty"));
        return;
      }
      window.deleteModifiedFile(rootPath);
      this.$message.success(this.$i18n.tc("message.clear"));
    },
    changeLanguage: function() {
      const locale = this.$i18n.locale;
      locale === "zh" ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
    },
    update: function() {
      window.shell.openExternal(this.newVersionUrl);
    }
  },
  mounted() {
    const _this = this;
    const currentVersion = window.version;

    axios
      .get("http://www.shadowingszy.top/hw-modifier")
      .then(function(response) {
        const { version, url } = response.data;
        if (version !== currentVersion) {
          _this.newVersionUrl = url;
        }
      })
      .catch(function(error) {
        console.log("检查更新失败");
      });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606266;
}
#update {
  position: absolute;
  width: 100%;
  height: 20px;
  padding: 0;
  top: 0;
  left: 0;
  border-radius: 0 !important;
}
#main {
  margin: 30px 20px;
}
#language {
  position: absolute;
  top: 33px;
  right: 30px;
  height: 40px;
}
#modifier-title {
  margin: 20px 0;
}
#root-path-input {
  margin: 20px 0 30px 0;
}
.el-input.is-disabled .el-input__inner {
  background-color: #fff !important;
  color: #606266 !important;
}
</style>
