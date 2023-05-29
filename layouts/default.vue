<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <TheHeaderCart />
        </div>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <div class="main__inner">
          <NuxtPage />
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__inner"></div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1278px;
  margin: 0 auto;

  @media (width < 1200px) {
    max-width: 95%;
  }
}

.header {
  height: 141px;

  &__inner {
    display: flex;
    justify-content: flex-end;
  }
}

.main {
  flex: 1;
}

.footer {
  &__inner {
    height: 100px;
  }
}
</style>
