<template>
  <!-- Contenedor principal del ítem de tarea -->
  <div class="task-container">
    <!-- Contenedor del título y el estado de la tarea -->
    <div>
      <!-- Muestra el título de la tarea y aplica un estilo tachado si la tarea está completada -->
      <h5 :style="{ textDecoration: completed ? 'line-through' : 'none' }">
        {{ title }}
      </h5>

      <!-- Muestra si la tarea está Completada o Pendiente -->
      <span>
      
        {{ completed ? "Completada" : "Pendiente" }}
      </span>
    </div>

    <!-- Contenedor de botones de acción -->
    <div>
      <!-- Botón para marcar la tarea como completada o pendiente -->
      <button @click="$emit('toggle-completion')">
        <span v-if="completed">
          <i class="bi bi-slash-circle-fill"></i>
        </span>
        <span v-else>
          <i class="bi bi-check-square"></i>
        </span>
      </button>

      <!-- Botón para eliminar la tarea de la lista -->
      <button @click="$emit('delTodo')">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // Define el nombre del componente
  name: "TodoItem",

  // Define las propiedades que este componente recibirá del componente padre
  props: {
    title: String, // Título de la tarea
    completed: Boolean, // Estado de la tarea (completada o pendiente)
  },
};
</script>

<style scoped>
/* Estilo para el contenedor de cada tarea */
.task-container {
  border: 2px solid #4700a6; /* Borde de color #4700a6 */
  border-radius: 8px; /* Bordes redondeados */
  padding: 15px; /* Relleno interno para separar el contenido del borde */
  margin-bottom: 15px; /* Espacio entre las tareas */
  background-color: #f9f9f9; /* Fondo gris claro para las tareas */
  transition: box-shadow 0.3s ease-in-out; /* Transición suave para el cambio de sombra */
}

/* Efecto de sombra cuando pasamos el ratón por encima */
.task-container:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Estilo para los botones dentro de cada tarea */
button {
  margin-top: 10px;
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  background-color: #4700a6;
  color: white;
  transition: background-color 0.3s ease;
  margin-right: 10px; /* Añade separación entre los botones */
}

/* Estilo para los botones al pasar el ratón */
button:hover {
  background-color: #cca6ff; /* Color al pasar el ratón */
}
</style>
