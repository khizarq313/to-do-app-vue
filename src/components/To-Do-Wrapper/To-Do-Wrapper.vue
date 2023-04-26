<template>
    <div :class="isDark ? 'dark wrapper' : 'light wrapper'">
        <Heading :isDark="isDark"
            @change-theme="changeTheme">
        </Heading>
        <Form :status="status" 
            :task="task"
            @status-update="statusUpdate"
            @task-update="taskUpdate"
            @add-task="addTask">
        </Form>
        <List :all-tasks="allTasks"
            :active-tasks="activeTasks"
            :completed-tasks="completedTasks"
            @update-status="updateTaskStatus"
            @delete-task="deleteTask"
            >
        </List>
    </div>
</template>

<script lang="ts">

    import ToDoHeading from '../To-Do-Heading/To-Do-Heading.vue';
    import ToDoForm from '../To-Do-Form/To-Do-Form.vue';
    import ToDoList from '../To-Do-List/To-Do-List.vue';

    type Tasktype = {
        id: string,
        status: boolean,
        task: string,
    }

    type Datatype = {
        isDark: boolean,
        id: string,
        status: boolean,
        task: string,
        allTasks: Tasktype[],
    }
    
    export default {
        name: "To-Do-Wrapper",
        components: {
            "Heading": ToDoHeading,
            "Form": ToDoForm,
            "List": ToDoList
        },
        data: (): Datatype => {
            return{
                isDark: true,
                id: "",
                status: false,
                task: "",
                allTasks: [],
            }
        },
        methods: {
            changeTheme: function() {
                this.isDark = !this.isDark;
            },
            generateId: function() {
                this.id = Date.now().toString();
            },
            statusUpdate: function(value: boolean) {
                this.status = value;
            },
            taskUpdate: function(value: string) {
                this.task = value;
            },
            addTask: function() {
                if(this.task.trim()) {
                    this.generateId();
                    this.allTasks.unshift({
                        id:this.id,
                        status: this.status,
                        task: this.task
                    })
                this.id = "";
                this.status = false,
                this.task = ""
                }
            },
            updateTaskStatus: function(id: string) {
                const task: Tasktype| undefined = this.allTasks.find((task: Tasktype) => task.id === id);
                if (task) {
                    task.status = !task.status;                    
                }
            },
            deleteTask: function(id: string) {
                this.allTasks = this.allTasks.filter((task: Tasktype) => task.id !== id);
            }
        },
        computed: {
            activeTasks: function(): Tasktype[] {
                return this.allTasks.filter((task: Tasktype) => !task.status);
            },
            completedTasks: function(): Tasktype[] {
                return this.allTasks.filter((task: Tasktype) => task.status);
            }
        }
    }
</script>

<style>
    @import url("./To-Do-Wrapper.css");
</style>