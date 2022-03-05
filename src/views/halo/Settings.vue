<template>
  <div class="halo-page">
    <ARow>
      <ACol :sm="4" :md="4">
        <div class="setting">
          <div class="halo-bottom" @click="('profile')">个人中心</div>
          <div class="halo-bottom" @click="('account')">账号设置</div>
          <div class="halo-bottom">账号安全</div>
          <div class="halo-bottom">账号设置</div>
          <div class="halo-bottom">账号设置</div>
          <div class="halo-bottom">账号设置</div>
        </div>
      </ACol>
      <ACol :xs="24" :sm="20" :md="20">
        <div class="content">
          <router-view name="profile"/>
          <router-view name="account"/>
        </div>
      </ACol>
    </ARow>
  </div>
</template>

<script lang="ts" setup>
import {Checkbox, Form, Input, Row, Col, Button, Divider} from 'ant-design-vue';

const ACol = Col;
const ARow = Row;
</script>

<style lang="less" scoped>

.halo-page {
  width: 100vw;
  max-width: 1024px;
  margin: auto;
}

.setting {
  height: 400px;
  margin: 12px 12px 0 12px;
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.content {
  margin: 12px 12px 0 0;
  background: #FFFFFF;
  padding: 20px 12px 20px 12px;
  border-radius: 8px;
}


</style>
