// 全局共享的用户状态
import { defineStore } from 'pinia'
import { 
  reactive,
  ref
} from 'vue'
// hooks 函数
export const useUserStore = defineStore('user', () => {
  const isLogin = ref(false);
  const doLogin = () => {
    isLogin.value = true;
  }
  const doLogout = () => {
    isLogin.value = false;
  }

  const userInfo = reactive({
    name: '',
    avatar: '',
    message: 0,
    uid: null
  })
  const setUserInfo = () => {
    userInfo.name = 'Asuka';
    userInfo.avatar = "https://p9-passport.byteacctimg.com/img/user-avatar/b51898da170910850c5570dd647230da~150x150.awebp"
    userInfo.message = 10;
    userInfo.uid = 123;
  }
  return {
    isLogin,
    doLogin,
    doLogout,
    userInfo,
    setUserInfo
  }
})
