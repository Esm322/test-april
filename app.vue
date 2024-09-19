<template>
  <header class="header">
    <NuxtLink :to="{ name: 'Main' }" class="header__homelink">
      <h1 class="header__title">Test task</h1>
    </NuxtLink>
  </header>

  <NuxtPage />

  <footer class="footer">
    <h2>
      Test task
    </h2>
  </footer>
</template>
