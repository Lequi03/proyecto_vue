<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Añadir Tarea</h1>
    <!-- Título -->
    <div class="input-group mb-3">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Añadir nueva tarea"
        class="form-control task-input"
        aria-label="Nueva tarea"
      />
      <!-- Botón -->
      <button @click="addTask" class="btn btn-add">Añadir</button>
    </div>

    <div class="row mt-4" v-if="tasks.length > 0">
      <div class="col-12 mb-4" v-for="task in tasks" :key="task.id">
        <div class="card mb-3 border-2 border-[#4700a6]">
          <div
            class="card-body d-flex justify-content-between align-items-center"
          >
            <div class="flex-grow-1 me-2">
              <h5
                class="card-title m-0"
                :class="{
                  'text-decoration-line-through-black': task.completed
                }"
              >
                {{ task.todo }}
              </h5>
              <span
                class="badge status-badge"
                :class="{
                  'bg-success': task.completed,
                  'bg-warning': !task.completed,
                }"
              >
                {{ task.completed ? "Completada" : "Pendiente" }}
              </span>
            </div>
            <div class="d-flex">
              <!-- Botón para marcar la tarea como completada o pendiente -->
              <button
                @click="toggleTaskCompletion(task)"
                :class="[ 
                  'p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2', 
                  { 'btn btn-outline-warning': task.completed, 'btn btn-outline-success': !task.completed }
                ]"
              >
                <i
                  :class="[
                    { 'bi bi-slash-circle-fill': task.completed, 'bi bi-check-square': !task.completed }
                  ]"
                ></i>
              </button>
              <button
                @click="deleteTask(task)"
                class="btn btn-outline-danger"
                aria-label="Eliminar tarea"
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === "") return;

      const newTask = {
        todo: this.newTask,
        completed: false,
        id: Date.now(),
      };

      this.tasks.unshift(newTask); // Añadir a la lista local
      this.newTask = "";
    },
    deleteTask(task) {
      // Filtrar la tarea a eliminar
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },
    toggleTaskCompletion(task) {
      task.completed = !task.completed;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4700a6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  text-align: center; /* Centrar el título */
}

/* Cambiar el color del botón */
.btn-add {
  background-color: #4700a6;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
}

.btn-add:hover {
  background-color: #cca6ff;
}

button {
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
}

.task-input {
  border-radius: 25px;
  transition: border-color 0.2s;
}

.task-input:focus {
  outline: none;
  box-shadow: 0 0 30px rgba(204, 166, 255, 1.2);
}

.card {
  border-color: #4700a6 !important;
}

.card-title {
  font-weight: bold;
  overflow-wrap: break-word;
  max-height: 3em;
  overflow: hidden;
  text-align: center; /* Centrar el texto dentro de la tarjeta */
}

.text-decoration-line-through-black {
  text-decoration: line-through;
  text-decoration-color: black; /* Cambiar el color del tachado a negro */
}

.text-gray-500 {
  color: #4700a6;
}

/* Estilos para el badge (estado completada/pendiente) */
.status-badge {
  display: inline-block;
  width: 100px;
  text-align: center;
  font-size: 0.9rem;
  padding: 5px;
  border-radius: 12px;
  font-weight: bold;
}

</style>
