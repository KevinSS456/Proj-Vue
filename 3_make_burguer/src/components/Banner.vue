<template>
    <div id="main-banner">
        <h1>Make Your Burguer</h1>
    </div>
</template>
<script>
export default {
    name: "burguer_banner"
}
</script>
<style scoped>
    #main-banner{
        background-image: url('/public/img/burger.jpg');
        background-position: 0 -250px;
        background-size: cover;
        height: 500px; 
        display: flex;
        align-items: center; 
        justify-content: flex-start;
    }   
    #main-banner h1{
        color: white;
        text-align: center;
        font-size: 60px;
        background-color: #22222267;
        padding: 20px 40px;
    }
    @media (max-width: 700px){
        #main-banner{
            background-position: 0 -125px;
            height: 250px;
        }
        #main-banner h1{
            font-size: 30px;
            padding: 10px 20px;
        }
    }
</style>