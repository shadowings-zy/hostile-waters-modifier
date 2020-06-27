<template>
  <div id="model">
    <el-form id="model-form" ref="form" :model="form" label-width="120px">
      <el-form-item label="初始模型文件">
        <el-select v-model="form.sourceModel" filterable placeholder="请选择被更换的模型文件">
          <el-option
            v-for="item in unitModelList"
            :key="item.key"
            :label="item.key"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="目标模型模型">
        <el-select v-model="form.targetModel" filterable placeholder="请选择要更换的新模型文件">
          <el-option
            v-for="item in unitModelList"
            :key="item.key"
            :label="item.key"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="modifyModel">修改载具模型</el-button>
    </el-form>
    <el-divider></el-divider>
    <div id="model-introduction">
      <p>
        举个例子：
        <br />如果你想把游戏中鲨鱼的模型换成火蜥蜴的模型，那么你需要：
        <br />1、在初始模型中选择“SuperHover.bin_b”，在目标模型中选择“HoverTank.bin_b”，点击修改载具模型按钮。
        <br />2、在初始模型中选择“SuperHover.bin_c”，在目标模型中选择“HoverTank.bin_c”，点击修改载具模型按钮。
        <br />3、在初始模型中选择“SuperHover.bin_n”，在目标模型中选择“HoverTank.bin_n”，点击修改载具模型按钮。
        <br />这样进入游戏你就会发现鲨鱼的模型已经被换成火蜥蜴的模型了。
        <br />由于敌对水域模型太多，本功能实际上只是将选定的初始模型和目标模型的文件进行了一个替换。
        <br />所以这里还需要各位使用者自行探索。
      </p>
      <p class="warning">
        注意：
        <br />读档前确保以下两点之一，否则读档时会卡退:
        <br />1.该存档是每一关数据统计结束后，过场动画前的存档点存的档。
        <br />2.该存档所有模组和卡槽数据与游戏数据文档相吻合。
        <br />
        <br />比如存档里鲨鱼的模型（SuperHover.bin_b）换成了火蜥蜴的模型（HoverTank.bin_b），
        <br />若游戏文件里鲨鱼的模型（SuperHover.bin_b）和存档里的数据（SuperHover.bin_b）一样，这种情况可正常读档。
        <br />若游戏文件里鲨鱼的模型（SuperHover.bin_b）和存档里的数据（HoverTank.bin_b）不一样，这种情况读档会卡退。
      </p>
    </div>
  </div>
</template>

<script>
import unitModelObject from "../data/unitModelObject";

export default {
  name: "Model",
  data() {
    return {
      form: {
        sourceModel: "",
        targetModel: ""
      },
      unitModelList: unitModelObject
    };
  },
  methods: {
    modifyModel: function() {
      const { rootPath } = this.$store.state;
      const { sourceModel, targetModel } = this.form;
      if (rootPath === undefined || rootPath === "") {
        this.$message.error("请指定敌对水域游戏根目录");
        return;
      }
      if (sourceModel === "" || targetModel === "") {
        this.$message.error("请选择模型文件");
        return;
      }
      window.objectBinModify(sourceModel, targetModel, rootPath);
      this.$message.success("修改成功");
    }
  }
};
</script>

<style>
#model {
  margin: 20px 0;
}
#model-form {
  width: 60%;
  margin: 0 auto;
}
#model .el-select {
  width: 100% !important;
}
#model-introduction {
  text-align: left;
  font-size: 12px;
}
#model .warning {
  color: #f56c6c;
}
</style>
