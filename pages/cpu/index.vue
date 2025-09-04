<script setup lang="ts">
const props = defineProps<{ cpu: string; title: string }>()

const { data: items } = await useAsyncData(`facet-${'cpu'}`, async () => {
  const all = await queryContent('/laptops').only(['cpu']).find()
  const vals = Array.from(new Set(all.map(i => i['cpu']).filter(Boolean)))
  vals.sort((a,b) => String(a).localeCompare(String(b), 'es'))
  return vals
})
</script>

<template>
  <section class="facet-list">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="val in items" :key="val">
        <NuxtLink :to="`/cpu/${encodeURIComponent(String(val))}`">{{ val }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.facet-list {
  padding: 2rem;
  background: #f9fafb;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.facet-list h1 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
  text-align: center;
}

.facet-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.facet-list li {
  text-align: center;
}

.facet-list a {
  display: block;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  transition: all 0.2s ease;
  font-weight: 500;
  color: #2563eb;
  word-break: break-word; /* útil si el nombre del CPU es muy largo */
}

.facet-list a:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}
</style>
