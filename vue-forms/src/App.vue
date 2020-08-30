<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">VueJS Forms</h1>
        <p class="lead">Training forms manupulation</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <!-- formulario -->
        <div class="col-sm-6">

          <h3>Preencha abaixo</h3>

          <form 
            @submit.prevent="send"
            @reset.prevent="reset"  
          >

            <div class="form-group">
              <label>Nome:</label>
              <input 
                type="text" 
                class="form-control" 
                placeholder="Seu nome"
                v-model.lazy.trim="dev.name"
              >
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input 
                type="email" 
                class="form-control" 
                placeholder="Seu email"
                v-model.lazy="dev.email"
              >
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input 
                type="number" 
                class="form-control" 
                placeholder="Sua idade"
                v-model.number="dev.age"
              >
            </div>

            <div class="form-group">

              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <input 
                  type="radio" 
                  class="form-check-input" 
                  value="Masculino"
                  v-model="dev.genre"
                >
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <input 
                  type="radio" 
                  class="form-check-input"  
                  value="Feminino"
                  v-model="dev.genre"
                >
                <label class="form-check-label">Feminino</label>
              </div>

            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select 
                class="form-control"
                v-model="dev.occupation"
              >
                <option value="" disabled>Selecione uma opção...</option>
                <option 
                  v-for="(occupation, i) in occupations"
                  :key="i"
                  :value="occupation"
                >
                  {{ occupation }}
                </option>
              </select>
            </div>  

            <div class="form-group">

              <p>Tecnologias:</p>

              <div class="form-check form-check-inline">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  value="JavaScript"
                  v-model="dev.tech"
                >
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline">
                <input 
                  type="checkbox" 
                  class="form-check-input"
                  value="Vue JS"
                  v-model="dev.tech"
                >
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  value="Vuex"
                  v-model="dev.tech"
                >
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  value="Vue Router"
                  v-model="dev.tech"
                >
                <label class="form-check-label">Vue Router</label>
              </div>

            </div>      

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea 
                class="form-control" 
                placeholder="Conte-nos um pouco sobre você..."
                v-model.lazy.trim="dev.about"
              ></textarea>
            </div>

            <div class="form-group">
              <AppRange
                :label="'Your price'"
                v-model.number="dev.pay"
                :min="1500"
                :max="15000"
                :step="500"
                :inputClasses="'form-control-range'"
              />
            </div>

            <div class="form-group">

              <div class="form-check form-check-inline">
                <input 
                  type="checkbox" 
                  class="form-check-input"
                  v-model="dev.notifications"
                  true-value="Sim"
                  false-value="Não"
                >
                <label class="form-check-label">Receber notificações por email</label>
              </div>

            </div>

            <button 
              type="reset"
              class="btn btn-secondary"
            >Resetar</button>

            <!-- <button 
              type="button"
              class="btn btn-success"
              @click="send"
            >Enviar</button> -->

            <button 
              type="submit"
              class="btn btn-success"
            >Enviar</button>

          </form>

        </div>

        <!-- saida -->
        <div class="col-sm-6">

          <h3>Saída</h3>

          <div class="card">

            <div class="card-header">Dados</div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Nome:</strong> {{ dev.name }}</li>
              <li class="list-group-item"><strong>Email:</strong> {{ dev.email }}</li>
              <li class="list-group-item"><strong>Idade:</strong> {{ dev.age }}</li>
              <li class="list-group-item"><strong>Gênero:</strong> {{ dev.genre }}</li>
              <li class="list-group-item"><strong>Ocupação:</strong> {{ dev.occupation }}</li>
              <li class="list-group-item"><strong>Tecnologias:</strong>
                <ul>
                  <li v-for="(tech, i) in dev.tech" :key="i">{{ tech }}</li>
                </ul>
              </li>
              <li class="list-group-item">
                <strong>Biografia:</strong> 
                <!-- <pre>{{ dev.about }}</pre> -->
                <div style="white-space: pre">{{ dev.about }}</div>
              </li>
              <li class="list-group-item"><strong>Receber notificações?</strong> {{ dev.notifications }}</li>
              <li class="list-group-item"><strong>Salário pretendido</strong> R$ {{ dev.pay.toLocaleString('pt-BR') }}</li>
            </ul>

            <div class="card-header">Model</div>

            <div class="card-body">
              <pre><code>{{ dev }}</code></pre>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppRange from './components/Range'

export default {
  name: 'App',
  components: {
    AppRange
  },
  data() {
    return {
      dev: {},
      default: {
        name: 'Luan',
        email: 'oi@luandev.ml',
        age: 21,
        about: '...',
        genre: 'Masculino',
        tech: [],
        notifications: 'Não',
        occupation: '',
        pay: 1500      
      },
      occupations: [
        'Dev Front-end Web',
        'Dev Front-end Mobile',
        'Dev Front-end Web/Mobile',
        'Dev Back-end',
        'Dev full stack'
      ]
    }
  },
  methods: {
    send() {
      const submittedForm = Object.assign({}, this.dev);

      console.log(submittedForm);     
    },
    reset() {
      this.dev = Object.assign({}, this.default);
    }
  },
  created() {
    this.reset()
  }
}
</script>

<style scoped>
  .btn {
    margin-right: 5px;
  }
</style>