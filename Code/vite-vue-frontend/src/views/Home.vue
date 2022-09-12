<template>
    <div id="homepage" class="page">
        <h1>Card Games</h1>
        <CounterButton />
    </div>
</template>

<script setup>
import CounterButton from '@/components/CounterButton.vue'

</script>

<style>
body {
    background-color: var(--color-hub-background);
}

#homepage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>