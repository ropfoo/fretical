<template>
  <div>
    <div>
      <div class="c-main-menu">
        <NuxtLink to="/explore" class="c-main-menu__explore">
          <img src="../assets/img/svg/explore-icon.svg" alt />
          <h1>Explore</h1>
        </NuxtLink>
        <NuxtLink to="/" class="c-main-menu__chords">
          <div class="c-main-menu__chords__image-container">
            <img src="../assets/img/svg/chords-icon.svg" alt />
          </div>
          <h1>Chords</h1>
        </NuxtLink>
        <NuxtLink to="/play" class="c-main-menu__learn">
          <img src="../assets/img/svg/learn-icon.svg" alt />
          <h1>Learn</h1>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
