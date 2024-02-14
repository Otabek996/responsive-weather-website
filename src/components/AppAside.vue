<template>
  <aside class="aside">
    <div class="aside-header"></div>

    <div class="aside-body">
      <div class="aside-body__top">
        <img class="aside-icon" src="" alt="Weather icon" />
        <p class="aside-temperature">12°C</p>
        <p class="aside-text">
          <span class="aside-text__day">Monday</span>,
          <span class="aside-text__time">16:00</span>
        </p>
      </div>

      <div class="aside-body__bottom">
        <div class="condition">
          <img class="condition-icon" src="" alt="Condition icon" />
          <p class="condition-text">Mostly cloudy</p>
        </div>
        <div class="condition">
          <img class="condition-icon" src="" alt="Condition icon" />
          <p class="condition-text">Rain - 30%</p>
        </div>
      </div>
    </div>

    <div class="aside-footer">
      <p class="aside-city">Tashkent</p>
    </div>
  </aside>
</template>

<style scoped>
.aside {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: var(--body-background-color-white);
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  padding: 50px;
}

.aside-body__top {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 2px solid var(--border-color-gray);
  padding: 20px 0;
}

.aside-body__bottom {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
}

.condition {
  display: flex;
  align-items: center;
  gap: 5px;
}

.aside-temperature {
  font-size: 80px;
  font-weight: var(--font-weight-bold);
}
</style>
