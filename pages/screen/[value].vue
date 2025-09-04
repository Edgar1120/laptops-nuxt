<script setup lang="ts">
const route = useRoute()
const raw = String(route.params.value ?? "")
const num = Number(raw)
const candidates = [raw]
if (Number.isFinite(num)) candidates.push(num)

// Buscar si screenInches es number o string en el contenido
const { data: docs } = await useAsyncData(`facet-screenInches-${raw}`, () =>
  queryContent('/laptops').where({
    screenInches: { $in: candidates }     // coincide si está como 15.6 (number) o "15.6" (string)
  }).find()
)
</script>

<template>
  <section class="facet-detail">
    <h1>Pantalla: {{ value }}″</h1>
    <div class="grid">
      <LaptopCard v-for="d in docs" :key="d._path" :doc="d" />
    </div>
  </section>
</template>

<style scoped>
.facet-detail {
  padding: 2rem;
}

.facet-detail h1 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
  text-align: center;
}

.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
</style>
