<template>
    <div class="list-container">
        <ul class="lists">
            <p v-if="taskList.length === 0" class="hint-text">
                Please Add Some Task!
            </p>
            <li class="list" v-for="task of taskList" :key="task.id">
                <button @click="updateTaskStatus(task.id)" class="status-btn">
                    <tick-icon v-if="task.status"></tick-icon>    
                </button>
                <p :class="task.status ? 'task highlighted' : 'task'">{{ task.task }}</p>
                <button @click="deleteTask(task.id)" class="delete-btn">
                    <wrong-icon></wrong-icon>
                </button>
            </li>
        </ul>
        <div class="panel-buttons">
            <button :class="panel === 'all' ? 'active-panel' : 'panel-btn'" @click="changePanel('all')">All</button>
            <button :class="panel === 'active' ? 'active-panel' : 'panel-btn'" @click="changePanel('active')">Active</button>
            <button :class="panel === 'completed' ? 'active-panel' : 'panel-btn'" @click="changePanel('completed')">Completed</button>
        </div>
    </div>
</template>

<script lang="ts">

    import Tick from '../../assets/icons/Tick.vue'
    import Wrong from '../../assets/icons/Wrong.vue'

    type Tasktype = {
        id: string,
        status: boolean,
        task: string,
    }

    type Datatype = {
        panel: string
    }

    export default {
        name: "To-Do-List",
        components: {
            "tick-icon": Tick,
            "wrong-icon": Wrong,
        },
        props: {
            allTasks: {
                type : Array as () => Tasktype[],
                required: true
            },
            activeTasks: {
                type : Array as () => Tasktype[],
                required: true
            },
            completedTasks: {
                type : Array as () => Tasktype[],
                required: true
            }
        },
        emits: ["update-status", "delete-task"],
        data: function(): Datatype {
            return {
                panel: "all"
            }
        },
        methods: {
            changePanel: function(panel: string) {
                this.panel = panel;
            },
            updateTaskStatus: function(id: string) {
                this.$emit("update-status", id);
            },
            deleteTask: function(id: string) {
                this.$emit("delete-task", id);
            }
        },
        computed: {
            taskList: function(): Tasktype[] {
                switch (this.panel) {
                    case "all":
                        return this.allTasks;
                    case "active":
                        return this.activeTasks;
                    case "completed":
                        return this.completedTasks;
                    default:
                        console.log("there has been some error");
                        break;
                }
            }
        }
    }

</script>

<style>
    @import url("./To-Do-List.css");
</style>