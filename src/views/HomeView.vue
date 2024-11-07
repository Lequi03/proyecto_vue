<template>
  <div class="container mt-5">
    <div class="text-center">

      <h1 class="display-4 mb-4">Bienvenido a la Aplicación de Tareas con Vue</h1>
      <p class="lead text-secondary mb-4">
        Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
      </p>
      <img src="@/assets/logo.png" class="img-fluid mb-4 logo" alt="Vue logo" />
      <h2 class="mt-4">Secciones de la Aplicación</h2>
      <p class="text-muted">
        <strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente. <br />
        <strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas. <br />
        <strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.container {
  max-width: 900px;
}

.display-4 {
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  color: #4700a6;
}

.lead {
  font-size: 1.25rem;
}

.logo {
  box-shadow: 0 0 20px rgba(204, 166, 255, 1.5);
  transition: transform 0.3s, box-shadow 0.3s;
}

.logo:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(204, 166, 255, 1.7);
}

h2 {
  font-weight: bold;
  color: #4700a6;
  text-align: left
}

.text-muted {
  font-size: 1rem;
  text-align: left;
}
</style>
