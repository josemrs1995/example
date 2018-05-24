<template>

  <div class="container is-12 columns">
    <div class="login is-4 column is-center">
      <div class="columns is-multiline is-12">
      <input type="text" class="campo text column is-full" placeholder="nombre">
      <input type="password" class="campo text column is-full" placeholder="password">
      <input type="submit" class="submit column is-8" value="Login">
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// brand colors
$blanco: #fffcf9;
$acento: #ff6978;
$fondo: #bfdce7;
$acento2: #12355b;
$negro: #272d2d;


.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  background: $negro;

  .login {
    padding: 20px;
    border-radius: 5px; 
    background: $acento;
    color: $negro;

    .columns {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    }

    .campo {
      margin: 8px auto;
      background: $blanco;
      border: solid 1px $acento;
      border-radius: 5px;
    }

    .submit {
      background: $acento2;
      color: $blanco;
      border-radius: 5px;
      border-color: transparent;
    }
  }
}

</style>
