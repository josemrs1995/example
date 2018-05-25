import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({

state: {
    personas: [],
    nombre:'',
    edad:'',
    edocivil:'',
    idx:'',
},

mutations: {
    setNombre (state, payload) 
    {
        state.personas.push({
            nombre: payload.nombre,
            edad: payload.edad,
            edocivil: payload.edocivil
        });
        //state.nombre = payload.newString;
    },
    setEditar (state, payload){
        state.idx = payload.idx
    },
    updatePersona(state, payload){
        state.idx = payload.idx
        store.personas[this.idx].nombre = payload.nombre;
        store.personas[this.idx].edad = payload.edad;
        store.personas[this.idx].edocivil = payload.edocivil;
    },
    /*savePersona(state, payload){
        index: payload.idx
        nombre: store.personas[this.idx].nombre;
        edad:store.personas[this.idx].edad;
        edocivil:store.personas[this.idx].edocivil;
    }*/
}


});