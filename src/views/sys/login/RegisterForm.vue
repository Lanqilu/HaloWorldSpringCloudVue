<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef">
      <!-- 账号输入框 -->
      <FormItem name="account" class="enter-x">
        <Input
          class="fix-auto-fill"
          size="large"
          v-model:value="formData.account"
          :placeholder="t('sys.login.userName')"
        />
      </FormItem>
      <!-- 邮箱输入框 -->
      <FormItem name="email" class="enter-x">
        <Input
          size="large"
          v-model:value="formData.email"
          :placeholder="t('sys.login.email')"
          class="fix-auto-fill"
        />
      </FormItem>
      <!-- 验证码输入框 -->
      <FormItem name="code" class="enter-x">
        <CountdownInput
          size="large"
          class="fix-auto-fill"
          v-model:value="formData.code"
          :placeholder="t('sys.login.emailCode')"
          :sendCodeApi="()=>{getCode();return true;}"
        />
      </FormItem>
      <!-- 密码输入框 -->
      <FormItem name="password" class="enter-x">
        <StrengthMeter
          size="large"
          v-model:value="formData.password"
          :placeholder="t('sys.login.password')"
        />
      </FormItem>
      <!-- 确认密码输入框 -->
      <FormItem name="confirmPassword" class="enter-x">
        <InputPassword
          size="large"
          visibilityToggle
          v-model:value="formData.confirmPassword"
          :placeholder="t('sys.login.confirmPassword')"
        />
      </FormItem>
      <!-- 隐私政策单项框 -->
      <FormItem class="enter-x" name="policy">
        <!-- No logic, you need to deal with it yourself -->
        <Checkbox v-model:checked="formData.policy" size="small">
          {{ t("sys.login.policy") }}
        </Checkbox>
      </FormItem>

      <Button
        type="primary"
        class="enter-x"
        size="large"
        block
        @click="handleRegister"
        :loading="loading"
      >
        {{ t("sys.login.registerButton") }}
      </Button>
      <Button size="large" block class="mt-4 enter-x" @click="handleBackLogin">
        {{ t("sys.login.backSignIn") }}
      </Button>
    </Form>
  </template>
</template>
<script lang="ts" setup>
import { reactive, ref, unref, computed } from "vue";
import LoginFormTitle from "./LoginFormTitle.vue";
import { Form, Input, Button, Checkbox } from "ant-design-vue";
import { StrengthMeter } from "/@/components/StrengthMeter";
import { CountdownInput } from "/@/components/CountDown";
import { useI18n } from "/@/hooks/web/useI18n";
import { useLoginState, useFormRules, useFormValid, LoginStateEnum } from "./useLogin";
import { getEmailCode, newUser } from "/@/api/system/user";
import { getCaptcha } from "/@/api/sys/user";
import { defHttp } from "/@/utils/http/axios";
import { GetCaptchaModel } from "/@/api/sys/model/userModel";
import axios from "axios";
import { useMessage } from "/@/hooks/web/useMessage";

const { createMessage } = useMessage();
const FormItem = Form.Item;
const InputPassword = Input.Password;
const { t } = useI18n();
const { handleBackLogin, getLoginState } = useLoginState();

const formRef = ref();
const loading = ref(false);

const formData = reactive({
  account: "halo",
  password: "123456",
  code: "",
  email: "885240677@qq.com",
  confirmPassword: "123456",
  // mobile: '',
  // sms: '',
  policy: true
});

const { getFormRules } = useFormRules(formData);
const { validForm } = useFormValid(formRef);

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER);

async function getCode() {
  const email = formData.email;
  if (email !== "") {
    await getEmailCode(email).then(() => {
      createMessage.success(t("sys.register.emailSuccess"));
      console.log(email);
    });
  }
}


async function handleRegister() {
  const data = await validForm();
  if (!data) return;
  await newUser(formData).then(() => {
    createMessage.success(t("sys.register.success"));
  });
  createMessage.loading("正在跳转到登录页面");
  setTimeout(() => {
    location.reload();
  }, 1000);
}
</script>
