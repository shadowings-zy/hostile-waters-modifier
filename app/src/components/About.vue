<template>
  <div id="about">
    <div class="about-text">{{$t('title')}}{{` Ver${version}`}}</div>
    <div class="about-text">
      {{$t('about.author')}}
      <span
        class="about-url"
        @click="openUrl('http://www.shadowingszy.top')"
      >{{$t('about.clickHere')}}</span>
    </div>
    <div class="about-text">
      {{$t('about.github')}}
      <span
        class="about-url"
        @click="openUrl('https://github.com/shadowings-zy/hostile-waters-modifier')"
      >{{$t('about.clickHere')}}</span>
    </div>
    <div class="about-text">{{$t('about.githubStar')}}</div>
    <div class="thanks">{{$t('about.thanks')}}</div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      version: window.version
    };
  },
  methods: {
    openUrl: function(url) {
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
  line-height: 40px;
  text-align: left;
  white-space: nowrap;
}
#about .thanks {
  line-height: 40px;
  text-align: left;
  white-space: pre-wrap;
}
#about .about-url {
  font-weight: bold;
  cursor: default;
}
</style>
