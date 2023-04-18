<template>
    <div>
        <button @click="$emit('mudarImagem')">Mudar imagem do perfil</button>
    </div>
</template>
<script>
export default {
    name: "Mudar_imagem",
    emits: ['mudarImagem']
}
</script>