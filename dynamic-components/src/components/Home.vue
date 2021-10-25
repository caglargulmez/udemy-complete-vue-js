<template>
    <h1> Home Page </h1>   
</template>

<script>
export default {
    unmounted() {
        // when switched to the about page, Home component will be destroyed
        console.log("Home component unmounted");
    },
    activated() {
        console.log("Home component activated");
    },
    deactivated() {
        console.log("Home component deactivated");
    }
    
}
</script>
