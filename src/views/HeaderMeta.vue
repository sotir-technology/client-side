<template>
    <div>
        <vue-headful
                :title="'W&C Console | '+title"
                :description="desc"/>
    </div>
</template>

<script>
    export default {
        name: 'HeaderMeta',
        props: {
            title: {
                type: String,
                default: 'W&C Console',
            },
            desc: {
                type: String,
                default: 'Work and Connect Console App'
            }
        }
    }
</script>
