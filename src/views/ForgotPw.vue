<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-transparent pb-5">
                        <div class="btn-wrapper text-center">
                            <img width="120" src="img/brand/logow.png"/>
                        </div>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-2">
                            <small>Reset Your Password</small>
                        </div>
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>
                            <div class="text-center">
                                <base-button type="danger" class="my-5">Verify & Reset</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-xl-4 mb-xl-5">
                    <div class="col-6">
                        <router-link to="login">
                            <small class="text-white">Account Login</small>
                        </router-link>
                    </div>
                    <div class="col-6 text-right">
                        <small style="cursor: default">RSC Byte Limited</small>
                    </div>
                </div>
            </div>
            <HeaderMeta title="Forgot Password"/>
        </div>
</template>
<script>
  import HeaderMeta from "./HeaderMeta";
  export default {
    name: 'login',
      components: {HeaderMeta},
      data() {
      return {
        model: {
          email: '',
          password: ''
        }
      }
    }
  }
</script>
<style>
</style>
