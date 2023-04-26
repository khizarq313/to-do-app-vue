<template>
    <div class="form">
        <input type="checkbox" 
            class="hide" 
            ref="checkbox" 
            v-model="taskStatus">
        <button class="status-btn" @click="toggleStatus">
            <tick-icon v-if="status"></tick-icon>
        </button>
        <input type="text" 
            class="task-input" 
            v-model="taskData" 
            placeholder="Enter Your Task Here."
            @keydown.enter="addTask">
        <button class="submit-btn" @click="addTask"> 
            <plus-icon></plus-icon>
        </button>
    </div>
</template>

<script lang="ts">

    import Tick from '../../assets/icons/Tick.vue';
    import Plus from '../../assets/icons/Plus.vue';

    export default {
        name: "To-Do-List",
        components: {
            "tick-icon": Tick,
            "plus-icon": Plus,
        },
        props: {
            status: {
                type: Boolean,
                required: true
            },
            task: {
                type: String,
                required: true
            }
        },
        emits: ["add-task", "status-update", "task-update"],
        methods: {
            addTask : function() {
                this.$emit("add-task");
            },
            toggleStatus: function() {
                const Checkbox = this.$refs.checkbox as HTMLInputElement;
                Checkbox.click();                
            }
        },
        computed: {
            taskStatus: {
                get: function (): boolean {
                return this.status;
            },
            set: function (value: boolean): void {
                this.$emit("status-update", value);
            },
            },
            taskData: {
            get: function (): string {
                return this.task;
            },
            set: function (value: string): void {
                this.$emit("task-update", value);
            },
            },
        }
    }

</script>

<style>
    @import url("./To-Do-Form.css");
</style>