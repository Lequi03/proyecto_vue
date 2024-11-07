<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #4700a6;">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img
          src="@/assets/logo.png"
          alt="Vue logo"
          width="30"
          height="30"
          class="d-inline-block align-top me-2"
        />
        Gestor de Tareas
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Contenido del navbar -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <!-- Elementos de navegación con iconos y texto -->
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/addtask"
            >
              <i class="bi bi-plus-square me-2"></i>
              <span>Añadir Tarea</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/tasklist"
            >
              <i class="bi bi-list-task me-2 custom-icon"></i>
              <span>Lista de Tareas</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/combinedview"
            >
              <i class="bi bi-table me-2"></i>
              <span>Vista Combinada</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Vista de Router -->
  <router-view />
</div>


</template>

<style>
#app {
  font-family: 'Times New Roman', Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.navbar {
  margin-bottom: 20px;
}

.navbar-brand {
  color: #ffffff;
}

.navbar .nav-link {
  font-weight: bold;
  color: #ffffff;
  transition: color 0.3s;
}

.navbar .nav-link:hover {
  color: #cca6ff;
}
.navbar .nav-link.router-link-exact-active {
  color: #cca6ff;
  text-decoration: underline;
}



</style>

