<script setup lang="ts">
const route = useRoute()

// Param: /screen/[value]  →  route.params.value
const value = computed(() =>
  decodeURIComponent(String(route.params.value ?? ""))
)

// Para que la búsqueda funcione si `screenInches` está guardado como número o string
const raw = computed(() => String(route.params.value ?? ""))
const num = computed(() => Number(raw.value))
const candidates = computed<(string | number)[]>(() => {
  const arr: (string | number)[] = [raw.value]
  if (Number.isFinite(num.value)) arr.push(num.value)
  return arr
})

const { data: docs, pending, error } = await useAsyncData(
  () => `facet-screenInches-${raw.value}`,
  () => queryContent('/laptops')
          .where({ screenInches: { $in: candidates.value } })
          .find(),
  { watch: [raw] } // si cambias /screen/valor sin recargar, vuelve a consultar
)
</script>

<template>
  <section class="facet-detail">
    <h1>Pantalla: {{ value }}″</h1>

    <div v-if="pending">Cargando…</div>
    <div v-else-if="error">Error: {{ error.message || error }}</div>
    <div v-else-if="!docs || docs.length === 0">No hay laptops para este tamaño.</div>

    <div v-else class="grid">
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
