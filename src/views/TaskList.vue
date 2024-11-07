<template>
    <div class="container mt-4">
        <!-- Título con el color solicitado -->
        <h1 class="text-center mb-4 title">Lista de Tareas</h1>

        <!-- Botón con icono centrado -->
        <div class="text-center mb-3">
            <button @click="fetchTasks" class="btn-custom d-inline-flex justify-content-center align-items-center">
                <i class="bi bi-cloud-download me-2"></i>Cargar Tareas
            </button>
        </div>

        <!-- Mostrar las tareas traídas de la API -->
        <div class="row">
            <div class="col-12 mb-4" v-for="task in tasks" :key="task.id">
                <TodoItem :title="task.todo" :completed="task.completed" @toggle-completion="toggleTaskCompletion(task)"
                    @delTodo="deleteTask(task)" />
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import axios from "axios";

export default {
    name: "TaskList",
    components: { TodoItem },
    data() {
        return {
            tasks: [],
        };
    },
    methods: {
        fetchTasks() {
            axios
                .get("https://dummyjson.com/todos")
                .then((response) => {
                    this.tasks = response.data.todos; 
                })
                .catch((error) => {
                    console.error("Error fetching tasks:", error);
                });
        },
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 800px;
    padding: 20px;
}

.title {
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 30px;
    color: #4700a6; /* Color del título */
}

/* Estilo personalizado para el botón */
.btn-custom {
    background-color: #4700a6;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.btn-custom:hover {
    background-color: #cca6ff; /* Color de fondo al pasar el ratón */
    color: #4700a6; /* Color del texto al hacer hover */
}

.btn-custom i {
    margin-right: 0.5rem; /* Espacio entre el icono y el texto */
}
</style>
