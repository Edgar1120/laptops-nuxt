<script setup lang="ts">
const props = defineProps<{ brand: string; title: string }>()

const { data: items } = await useAsyncData(`facet-${'brand'}`, async () => {
  const all = await queryContent('/laptops').only(['brand']).find()
  const vals = Array.from(new Set(all.map(i => i['brand']).filter(Boolean)))
  vals.sort((a,b) => String(a).localeCompare(String(b), 'es'))
  return vals
})
</script>

<template>
  <section class="facet-list">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="val in items" :key="val">
        <NuxtLink :to="`/brand/${encodeURIComponent(String(val))}`">{{ val }}</NuxtLink>
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
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
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
}

.facet-list a:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}
</style>
