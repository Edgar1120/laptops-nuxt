<template>
  <div>
    <header class="site-header">
      <nav class="nav">
        <NuxtLink to="/">Inicio</NuxtLink>
        <NuxtLink to="/brand">Marcas</NuxtLink>
        <NuxtLink to="/os">Sistema Operativo</NuxtLink>
        <NuxtLink to="/screen">Tamaño de Pantalla</NuxtLink>
        <NuxtLink to="/cpu">Procesador</NuxtLink>
      </nav>
    </header>
    <main class="site-main">
      <slot />
    </main>
  </div>
</template>

<style>
html, body {
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
  background: #f8fafc;
  color: #1e293b;
  margin: 0;
}

/* Header */
.site-header {
  padding: 1rem 2rem;
  border-bottom: 1px solid #e2e8f0;
  background: #ffffff;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.nav a {
  color: #334155;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav a:hover {
  color: #2563eb;
}

.nav a.router-link-active {
  color: #2563eb;
  font-weight: 700;
  border-bottom: 2px solid #2563eb;
  padding-bottom: 2px;
}

/* Main content */
.site-main {
  padding: 2rem;
}

/* Reusable card */
.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

/* Grid layouts */
.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill,minmax(240px,1fr));
}

/* Badge */
.badge {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  border-radius: 999px;
  background: #e0f2fe;
  color: #2563eb;
  font-weight: 600;
}
</style>
