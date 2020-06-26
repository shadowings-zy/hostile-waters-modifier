<template>
  <div id="about">
    <div class="about-text">
      本修改器由shadowingszy开发，我的个人主页：
      <span class="about-url" @click="openUrl('http://www.shadowingszy.top')">点击这里</span>
    </div>
    <div class="about-text">
      本修改器已开源至GitHub，源代码地址：
      <span class="about-url" @click="openUrl('http://www.shadowingszy.top')">点击这里</span>
    </div>
    <div class="about-text">开发不易，还请各位能在GitHub上为本项目点个star。</div>
    <div class="about-text">感谢百度贴吧敌对水域吧吧主@葛西一树，以及其他玩家的大力支持。</div>
    <div class="about-text">如在使用本修改器时遇到问题，或有更好的建议，</div>
    <div class="about-text">请直接在百度贴吧敌对水域吧发帖，或加入敌对水域吧吧群：214158350。</div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  methods: {
    openUrl: function(url){
      window.shell.openExternal(url);
    }
  }
};
</script>

<style>
#about {
  margin: 10px;
}
#about .about-text {
  margin: 10px 0;
  text-align: left;
}
#about .about-url {
  font-weight: bold;
}
</style>
