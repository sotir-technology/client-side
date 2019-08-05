<template>
    <div class="row justify-content-center">
        <vue-topprogress ref="topbar" color="#FF0078"></vue-topprogress>
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent pb-5">
                    <div class="btn-wrapper text-center">
                        <img width="120" src="img/brand/logow.png"/>
                    </div>
                </div>
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>Sign in with credentials</small>
                    </div>
                    <form role="form">
                        <base-input :disabled="dataLoading" class="input-group-alternative mb-3"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="model.email">
                        </base-input>

                        <base-input :disabled="dataLoading" class="input-group-alternative"
                                    placeholder="Password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="model.password">
                        </base-input>
                        <small>{{msg}}</small>
                        <base-checkbox class="custom-control-alternative">
                            <span class="text-muted">Remember me</span>
                        </base-checkbox>
                        <div class="text-center">
                            <base-button ref="btn" :disabled="dataLoading" v-on:click="btnLogin" type="danger"
                                         class="my-5">{{btnText}}
                            </base-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <router-link to="forgot-pw">
                        <small class="text-white">Forgot Password</small>
                    </router-link>
                </div>
                <div class="col-6 text-right">
                    <small style="cursor: default">RSC Byte Limited</small>
                </div>
            </div>
        </div>
        <HeaderMeta title="Login"/>
    </div>
</template>
<script>
    import {CFG} from './../ServerKeys';
    import HeaderMeta from "./HeaderMeta";

    export default {
        mounted() {
            this.$refs.topbar.start();
            setTimeout(() => {
                this.$refs.topbar.done();
            }, 300);
        },
        name: 'login',
        components: {HeaderMeta},
        data() {
            return {
                msg: '',
                btnText: 'Login Now',
                dataLoading: false,
                model: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {btnLogin: btnLogin}
    }

    //start login thing
    function btnLogin() {
        this.msg = '';
        this.$refs.topbar.start();
        this.dataLoading = true;
        this.btnText = "Processing...";
        //start network call
        this.axios.post(CFG.API_URI + '/auth/login/', {
            ssk: CFG.SSK,
            email: this.model.email,
            password: this.model.password
        })
            .then((res) => {
                //check success
                if (res.data.status) {
                    //is logged
                    if (res.data.data.s_token != null) {
                        //store login details
                        this.$cookie.set(CFG.COOKIE_NAME, res.data.data.s_token, 5);
                        this.$router.push({name: 'dashboard'});
                    }
                    return;
                }
                this.msg = res.data.msg;
                this.$refs.topbar.done();
                this.dataLoading = false;
                this.btnText = "Re-Login";
            });
    }
</script>
<style>
</style>
