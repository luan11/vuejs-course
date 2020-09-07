<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animations</h1>
        <p class="lead">Training transitions/animations in elements/components</p>
      </div>
    </div>

    <div class="container">
      <!-- <button class="btn btn-primary mb-3"
        @click="show = !show"
      >Toggle</button> -->

      <div class="form-group">
        <label class="form-label">Animations:</label>
        <select class="form-control" v-model="selectedAnimation">
          <option value="fade">Fade</option>
          <option value="zoom">Zoom</option>
          <option value="slide">Slide</option>
        </select>
      </div>

      <!-- <div class="form-group">
        <label class="form-label">Alerts:</label>
        <select class="form-control" v-model="currentAlert">
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="success">Success</option>
        </select>
      </div> -->

      <div class="form-group">
        <label class="form-label">Components:</label>
        <select class="form-control" v-model="selectedComponent">
          <option value="AppAbout">About</option>
          <option value="AppHome">Home</option>
        </select>
      </div>
      
      <!-- <transition name="slide" type="animation" :duration="{enter: 1200, leave: 500}">
        <div class="alert alert-primary" v-if="show">Animations in Vue</div>
      </transition> -->

      <!-- Customizando classes -->
      <!-- <transition
        enter-class=""
        enter-active-class="animate__animated animate__bounce"
        enter-to-class=""
        leave-class=""
        leave-active-class="animate__animated animate__bounceOutDown"
        leave-to-class=""
      >
        <div class="alert alert-primary" v-if="show">Animations in Vue</div>
      </transition> -->

      <!-- Gatilhos JavaScript -->
      <!-- <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"

        appear
      >
        <div class="alert alert-primary" v-if="show">Animations in Vue</div>
      </transition> -->

      <!-- <transition
        appear
        appear-class=""
        appear-active-class="animate__animated animate__flipInY"
        appear-to-class=""

        enter-class=""
        enter-active-class="animate__animated animate__bounceInLeft"
        enter-to-class=""

        leave-class=""
        leave-active-class="animate__animated animate__bounceOutDown"
        leave-to-class=""
      >
        <div class="alert alert-primary" v-if="show">Animations in Vue</div>
      </transition> -->

      <transition 
        :name="selectedAnimation"
        mode="out-in"
      > <!-- mode="in-out|out-in" -->
        <!-- <div :class="alertClasses" :key="currentAlert">Animations in Vue</div> -->
        <component :is="selectedComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: true,
      selectedAnimation: 'fade',
      currentAlert: 'info',
      selectedComponent: 'AppHome'
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('Before enter', el)
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('Enter', el);

      let count = 0;

      const interval = setInterval(() => {
        el.style.opacity = +el.style.opacity + 0.1;
        count++;

        if(count > 10) {
          clearInterval(interval);

          done()
        }
      }, 150);
    },
    afterEnter(el) {
      console.log('After enter', el)
    },
    enterCancelled(el) {
      console.log('Enter cancelled', el)
    },
    beforeLeave(el) {
      console.log('Before enter', el)

      el.style.transition = 'width 0.1s';
      el.style.overflow = 'hidden';
      el.style.whiteSpace = 'nowrap';
    },
    leave(el, done) {
      console.log('Enter', el);

      let count = 0;
      const size = el.offsetWidth,
        interval = setInterval(() => {
          el.style.width = (size * (1 - (count / 10))) + 'px';
          count++;

          if(count > 10) {
            clearInterval(interval);

            done()
          }
        }, 150);      
    },
    afterLeave(el) {
      console.log('After enter', el)
    },
    leaveCancelled(el) {
      console.log('Enter cancelled', el)
    }
  },
  computed: {
    alertClasses() {
      return {
        'alert': true,
        [`alert-${this.currentAlert}`]: true
      }
    }
  },
  components: {
    AppAbout: () => import('./components/About'),
    AppHome: () => import('./components/Home')
  }
}
</script>

<style>
  body {
    overflow: hidden;
  }
</style>

<style scoped>
  /* Estado inicial */
  .fade-enter, .fade-leave-to { 
    opacity: 0;
  }

  /* Como a animação irá acontecer */
  .fade-enter-active, .fade-leave-active { 
    transition: opacity 1s;
  }

  /* Estado final */
  /* .fade-enter-to, .fade-leave { 
    opacity: 1;
  } */

  .zoom-enter, .zoom-leave-to {
    transform: scale(0);
  }

  .zoom-enter-active, .zoom-leave-active {
    transition: transform 0.5s;
  }

  .zoom-enter-to, .zoom-leave {
    transform: scale(1);
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide 0.7s ease-in-out;
    transition: opacity 0.7s;
  }

  .slide-enter-to {
    opacity: 1;
  }

  .slide-leave {
    opacity: 1;
  }

  .slide-leave-active {
    animation: slide 0.7s reverse;
    transition: opacity 0.7s;
  }

  .slide-leave-to {
    opacity: 0;
  }

  @keyframes slide {
    0% {
      transform: translateX(-100px);
    }

    100% {
      transform: translateX(0);
    }
  }
</style>