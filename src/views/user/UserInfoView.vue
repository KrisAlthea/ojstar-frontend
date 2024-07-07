<template>
  <div id="UserInfoView">
    <a-avatar>
      <img alt="avatar" :src="avatarSrc" />
    </a-avatar>
    <a-descriptions
      style="margin-top: 20px"
      :data="data"
      :size="'large'"
      title="User Info"
      :column="1"
    />
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="userName" label="Name">
        <a-input v-model="form.userName" />
      </a-form-item>
      <a-form-item field="userAvatar" label="Avatar">
        <a-input v-model="form.userAvatar" />
      </a-form-item>
      <a-form-item field="userProfile" label="Profile">
        <a-input v-model="form.userProfile" />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">修改</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { UserControllerService, UserUpdateMyRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";

const store = useStore();
const router = useRouter();
const avatarSrc =
  store.state.user?.loginUser?.userAvatar ?? "../../assets/logo.png";

const form = reactive({
  userAvatar: "",
  userName: "",
  userProfile: "",
} as UserUpdateMyRequest);

const data = [
  {
    label: "Name",
    value: store.state.user?.loginUser?.userName ?? "未登录",
  },
  {
    label: "Profile",
    value: store.state.user?.loginUser?.userProfile ?? "未登录",
  },
  {
    label: "userRole",
    value: store.state.user?.loginUser?.userRole ?? "未登录",
  },
];

const handleSubmit = async () => {
  if (form.userName === "") {
    form.userName = store.state.user?.loginUser?.userName;
  }
  if (form.userAvatar === "") {
    form.userAvatar =
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp";
  }
  if (form.userProfile === "") {
    form.userProfile = "未填写";
  }
  const res = await UserControllerService.updateMyUserUsingPost(form);
  if (res.code === 0) {
    message.success("修改成功, " + JSON.stringify(res.data));
  } else {
    message.error("修改失败, " + JSON.stringify(res.message));
  }
};
</script>
