<template>
<div class="container ">
    <div class="column is-4">
        <div class="columns is-multiline ">
            <div class="column is-full top-level colores">
                <p>Formulario</p>
            </div>
            <div class="column nested is-full is-mobile colores ">
                <form action="#" class="formulario">
                    <p><input class="campo text column" type="text" placeholder="Nombre" id="Nombre"></p>
                    <p><input class="campo text column" type="text" placeholder="Apellido" id="Apellido"></p>
                    <p><input class="campo text column" type="number" placeholder="Cedula" id="Cedula"></p>
                    <p><input class="campo text column" type="mail" placeholder="Correo" id="Correo"></p><br>
                    <p><button type="submit" class="boton column" >Guardar</button></p>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'ejercicio1',
}
</script>
<style lang="scss">
    $oliva:#C2185B;
    $verde:#cddc39;
    $amarillo:#F0F4C3;
    $negro: #212121;
    $gris: #9E9A99;
    $blanco: #fffcf9;
    $rosado:#F8BBD0;
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 600px;
        background: $negro;
        width: 100%;
    }

    .colores {
        color:$blanco;
        font-family: Arial, Helvetica, sans-serif;
         
        &:nth-of-type(1) {
            font-size: 50px;
           border-top-left-radius: 10px;
           border-top-right-radius: 10px;
            background: $oliva;  
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
    input{
        border-radius: 5px;
        }
    .campo {
        margin: 8px auto;
        background: $blanco;
        border: solid 1px $rosado;
        border-radius: 5px;
        } 
    .boton {
       background: $oliva;
       color: $blanco;
       border-radius: 5px;
       border-color: transparent;
       float: center;
       margin: 2px auto;
       
    }
}
</style>
