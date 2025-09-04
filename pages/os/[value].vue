<script setup lang="ts">
const route = useRoute()
const value = decodeURIComponent(String(route.params.value || ""))
const { data: docs } = await useAsyncData(`facet-os-` + value, () =>
  queryContent('/laptops').where({os: value}).find()
)
</script>

<template>
  <section class="facet-detail">
    <h1>Sistema Operativo: {{ value }}</h1>
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
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  color: #1e293b; /* gris oscuro */
  text-align: center;
}

.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
</style>
