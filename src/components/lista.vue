<template>
<div class="lista">
    <div class="contenedor columns is-multiline caja">
    <div class="card column is-3" v-for="(persona, idx) in personas">
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{ persona.nombre }}</p>
                <p class="subtitle is-6"><strong>{{persona.edad}}</strong> {{persona.edocivil}}</p>
                <button class="boton " v-on:click="dropPersona(idx)">X</button> 
                <button class="boton " v-on:click="editPersona(idx)">editar</button>
            </div>
            </div>
        </div>
    </div>
   
    </div>
<button class="boton column is-2" @click="agregar">Agregar</button>
</div>
</template>

<script>
export default {
  name: 'lista',
  data () {
    return {
      personas: this.$store.state.personas,
    }
  },
  methods: {
    dropPersona: function(idx){
         this.personas.splice(idx, 1);
    },

    editPersona: function(indice){     
      this.$store.commit('setEditar', {
             idx: indice,
      });
      this.$router.push('/editar');
    },
    agregar: function(){
          this.$router.push('/ejercicio2');
    },
    updateResource(data){
      this.personas = data
    }
  }
}
</script>
<style lang="scss">
$naranja_oscuro: #E64A19;
$naranja_claro:#FF5722;
$palido:#FFCCBC;
$blanco:#fff;
$negro:#000;
$gris:#757575;
    .caja {
        width: 800px;
    }

    .lista{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 600px;
        background: $palido;
        width: 100%;
        flex-direction: column;
    }
    .boton {
       background: $naranja_oscuro;
       color: $blanco;
       border-radius: 5px;
       border-color: transparent;
       margin: 2px auto;
       
    }
    .campo {
        margin: 8px auto;
        background: $blanco;
        border: solid 1px $naranja_claro;
        border-radius: 5px;
    } 
</style>
