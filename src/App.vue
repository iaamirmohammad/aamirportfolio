<template>
  <div>
    <app-header></app-header>
    <app-features></app-features>
    <app-about></app-about>
    <app-ninja></app-ninja>
    <app-experience></app-experience>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Features from './components/Features.vue';
  import AboutMe from './components/AboutMe.vue';
  import Ninja from './components/Ninja.vue';
  import Experience from './components/Experience.vue';
  import ContactUs from './components/ContactUs.vue';
  import Footer from './components/Footer.vue';

export default {
    components: {
        'app-header': Header,
        'app-features': Features,
        'app-about': AboutMe,
        'appNinja': Ninja,
        'appExperience': Experience,
        'appContact': ContactUs,
        'appFooter': Footer
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@200;300;400;500;600&family=Roboto+Slab:wght@300;400;500;600;700&display=swap');
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
*::before,
*::after{
    box-sizing: inherit;
}
:root {
    font-size: 62.5%; //1rem= 10px, 10px/16px = 62.5%
    // font-family: "Lato", sans-serif; // 3,4,7
    font-family: 'Poppins', sans-serif;  // 2,3,4,5,6
    // font-family: 'Roboto Slab', serif;   // 3,4,5,6,7
}

@media screen and (max-width: 1200px){ // 1200px/16 = 75em
    :root{
        font-size: 56.25%; //want 1rem = 9px; 9/16 = 0.5625 = 56.25%;
    }
} 
@media screen and (max-width: 900px){ // 900px/16 = 56.25em
    :root{
        font-size: 50%; //want 1rem = 8px; 8/16 = 0.5 = 50%
    }
} 
@media screen and (max-width: 600px){ // 600px/16 = 37.5em
    :root{
        font-size: 43.75%; //want 1rem = 7px; 7/16 = 0.4375 = 43.75%
    } 
} 
@media screen and (min-width: 1800px){ // 1800px/16 = 37.5em
    :root{
        font-size: 75%; // 1rem = 12px;  12/16 =0.75 = 75%
    }
} 
</style>
