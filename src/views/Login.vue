<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <!-- <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
      >Remember me</a-checkbox>-->
      <a-input type="hidden" v-decorator="['grant_type',{
        initialValue:'password'
      }]"></a-input>
      <a class="login-form-forgot" href>Forgot password</a>
      <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>Or
      <a href>register now!</a>
    </a-form-item>
  </a-form>
</template>

<script>
import { getToken } from "../api/login";
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          getToken(values)
            .then(res => {
              const { access_token, token_type, expires_in } = res.data;
              localStorage.setItem(
                "access_token",
                `${token_type} ${access_token}`
              );
              this.$router.push("/main");
            })
            .catch(err => {
              console.log(err);
            });
          // console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
<style scoped>
#components-form-demo-normal-login {
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: 120px;
  width: 500px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
