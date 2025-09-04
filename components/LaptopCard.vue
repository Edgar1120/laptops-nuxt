<template>
  <article class="card">
    <h3><NuxtLink :to="`/laptops/${doc._path.split('/').pop()}`">{{ doc.title }}</NuxtLink></h3>
    <p class="badge">{{ doc.brand }}</p>
    <ul>
      <li>CPU: {{ doc.cpu || 'N/D' }}</li>
      <li>OS: {{ doc.os || 'N/D' }}</li>
      <li>Pantalla: {{ doc.screenInches ?? 'N/D' }}″</li>
      <li>RAM: {{ doc.ramGB ?? 'N/D' }} GB</li>
      <li>Almacenamiento: {{ doc.storageMB ?? 'N/D' }} MB</li>
      <li v-if="doc.price">Precio: {{ doc.price }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
defineProps<{ doc: any }>()
</script>
<style scoped>
.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.12);
  border-color: #dbe3ea;
}

/* Título */
h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  line-height: 1.4;
}

h3 a {
  color: #0f172a; /* gris muy oscuro */
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

h3 a:hover {
  color: #2563eb; /* azul */
}

/* Marca en badge */
.badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.3rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #2563eb;
  background: #e0f2fe;
  border-radius: 9999px;
}

/* Lista de especificaciones */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 0.45rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.95rem;
  color: #334155; /* gris azulado */
}

li:last-child {
  border-bottom: none;
  font-weight: 700;
  color: #111827; /* resalta el precio */
}

/* Responsive para pantallas pequeñas */
@media (max-width: 480px) {
  .card {
    padding: 1rem;
  }
  h3 {
    font-size: 1rem;
  }
  li {
    font-size: 0.9rem;
  }
}
</style>

