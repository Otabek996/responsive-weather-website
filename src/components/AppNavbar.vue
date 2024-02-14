<template>
  <nav class="navbar">
    <div class="navbar-left">
      <h1 class="navbar-title">Weather</h1>
    </div>

    <div class="navbar-right">
      <button class="navbar-button active">°C</button>
      <button class="navbar-button">°F</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
}

.navbar-right {
  display: flex;
  gap: 15px;
}

.navbar-button {
  width: 38px;
  height: 38px;
  font-size: 15px;
  line-height: 17px;
  font-weight: var(--font-weight-bold);
  color: var(--text-color-black);
  text-align: center;
  background-color: var(--nonactive-btn-background-color-white);
  border: none;
  border-radius: 50%;
  transition: all 0.2s linear;
  cursor: pointer;
}

.navbar-button:hover {
  color: var(--text-color-white);
  background-color: var(--active-btn-background-color-black);
}

.active {
  color: var(--text-color-white);
  background-color: var(--active-btn-background-color-black);
}
</style>
