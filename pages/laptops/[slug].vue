<template>
  <article class="laptop-detail">
    <ContentDoc path="" v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <p class="badge">{{ doc.brand }}</p>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>

<style scoped>
.laptop-detail {
  padding: 2rem;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.laptop-detail h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1e293b; /* gris oscuro */
  text-align: center;
}

.badge {
  display: inline-block;
  margin: 0 auto 1.5rem auto;
  padding: 0.35rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #2563eb;
  background: #e0f2fe;
  border-radius: 9999px;
  text-align: center;
}

.laptop-detail :deep(h2) {
  margin-top: 1.5rem;
  font-size: 1.3rem;
  color: #334155;
}

.laptop-detail :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.laptop-detail :deep(li) {
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.laptop-detail :deep(li:last-child) {
  border-bottom: none;
}
</style>
