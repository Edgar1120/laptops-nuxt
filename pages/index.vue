<template>
  <section class="grid">
    <div class="card">
      <h2>Explorar por Marca</h2>
      <NuxtLink to="/brand">Ver marcas →</NuxtLink>
    </div>
    <div class="card">
      <h2>Explorar por Sistema Operativo</h2>
      <NuxtLink to="/os">Ver sistemas →</NuxtLink>
    </div>
    <div class="card">
      <h2>Explorar por Tamaño de Pantalla</h2>
      <NuxtLink to="/screen">Ver tamaños →</NuxtLink>
    </div>
    <div class="card">
      <h2>Explorar por Procesador</h2>
      <NuxtLink to="/cpu">Ver procesadores →</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #1e293b; /* gris oscuro */
}

.card a {
  display: inline-block;
  margin-top: 0.5rem;
  color: #2563eb; /* azul */
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.card a:hover {
  color: #1d4ed8; /* azul más oscuro */
  text-decoration: underline;
}
</style>