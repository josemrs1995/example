<template>
<div class="editar">
    <div class="column is-4">
        <div class="columns is-multiline ">
            <div class="column is-full top-level colores">
            <p>Formulario</p>
            </div>
            <div class="column nested is-full is-mobile colores ">
                <form action="#" class="formulario">
                    <input type="text" v-model="nombre" class="campo text column" placeholder="Nombre">
                    <input type="text" v-model="edad" class="campo text column" placeholder="Edad ">
                    <input type="text" v-model="edocivil" class="campo text column" placeholder="Estado civil">
                    <input type="hidden" v-model="idx" class="campo text column">
                    <button @click="savePersona" class="boton column" type="submit">Guardar</button>
                </form>
            </div>  
        </div>  
    </div>     
</div>
</template>
<script>
export default {
  name: 'editar',
  data () {
    return {
       idx: '',
       nombre:'',
       edad: '',
       edocivil: '',
    }
  },

  methods: {
      savePersona: function(){
            var id = this.$store.state.idx;
          this.$store.state.personas[id].nombre=this.nombre;
          this.$store.state.personas[id].edad=this.edad;
          this.$store.state.personas[id].edocivil=this.edocivil;
          this.$router.push('/lista');
      }  
      
  },

  created(){
      var id = this.$store.state.idx;
      this.nombre=this.$store.state.personas[id].nombre;
      this.edad = this.$store.state.personas[id].edad;
      this.edocivil =this.$store.state.personas[id].edocivil; 
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
 .editar{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 600px;
        background: $palido;
        width: 100%;
    }
    .colores {
        color:$blanco;
        font-family: Arial, Helvetica, sans-serif;
         
        &:nth-of-type(1) {
            font-size: 50px;
           border-top-left-radius: 10px;
           border-top-right-radius: 10px;
            background: $naranja_oscuro;  
            height: 100px;
            text-align: center;
    
        }
        &:nth-of-type(2) {
            color:$negro;
            background: $blanco;
            height: auto;
            text-align: center;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            padding: 40px;
            
        } 
    }
    input{
        border-radius: 5px;
        }
    .campo {
        margin: 8px auto;
        background: $blanco;
        border: solid 1px $naranja_claro;
        border-radius: 5px;
        } 
    .boton {
       background: $naranja_oscuro;
       color: $blanco;
       border-radius: 5px;
       border-color: transparent;
       float: center;
       margin: 2px auto;
       
    }
</style>


