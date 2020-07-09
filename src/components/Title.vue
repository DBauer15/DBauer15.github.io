<template>
    <div class="title-container">
        <div class="text-primary text-h1 desktop-only" style="grid-area: name">
            <router-link to="/">David Bauer</router-link>
        </div>
        <div class="text-primary text-h1 mobile-only" style="grid-area: name">
            <router-link to="/">DB</router-link>
        </div>
        <Navigation style="grid-area: nav; visibility: hidden;"/>
    </div>
</template>

<script>
import Navigation from './Navigation'

export default {
    components: {
        Navigation
    }
}
</script>

<style>

.title-container {
    display: grid;
    grid-template-columns: 1fr 0.25fr 0.75fr;
    grid-template-areas: "name . nav";

    padding: 50px 0;

    background-color: var(--background-translucent);
    backdrop-filter: blur(8px);
}

.title-container >  div {
    padding: 5px 0;
}

.title-container >  div > a{
    text-decoration: none;
    color: inherit;
}

@media (max-width: 850px) {
    .title-container {
        grid-template-columns: 1fr 0.75fr;
        grid-template-areas: "name nav";
        padding: 15px 0 0 0;
    }
}
</style>