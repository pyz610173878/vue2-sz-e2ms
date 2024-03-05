<template>
  <ele-exception
    title="403"
    description="抱歉, 你无权访问该页面"
    style="margin: 145px 0"
  >
    <template v-slot:icon>
      <img
        alt=""
        src="@/assets/ic-403.svg"
        style="width: 216px; height: 250px"
      />
    </template>
    <template v-slot:extra>
      <router-link to="/">
        <el-button type="primary">返回首页{{ title }}</el-button>
        <a v-bind:href="link">4399链接</a>
        <a href="https://www.4399.com/">4399链接</a>
        <a v-if="true">123123</a>
        <a v-if="true">123123</a>
      </router-link>
    </template>
  </ele-exception>
</template>

<script>
  import { EleException } from 'ele-admin';

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Exception403',
    components: { EleException },
    data() {
      return {
        title: '测试',
        link: 'www.4399.com'
      };
    }
  };
</script>
