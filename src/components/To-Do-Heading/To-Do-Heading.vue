<template>
    <div :class="isDark ? 'Header dark-head' : 'Header light-head'">
        <p class="heading">To Do</p>
        <button @click="changeTheme">
            <span v-if="isDark" class="material-symbols-rounded">
                light_mode
            </span>
            <span v-if="!isDark" class="material-symbols-rounded">
                dark_mode
            </span>
        </button>
    </div>
</template>

<script lang="ts">

    export default{
        name: "To-Do-Heading",
        props: {
            isDark: {
                type: Boolean,
                required: true
            }
        },
        emits: ["change-theme"],
        methods: {
            changeTheme: function() {
                this.$emit("change-theme")
            }
        }
    }

</script>

<style>
    @import url("./To-Do-Heading.css");
</style>