<template>
  <div id="app" class="bg-gray-800">
    <header class="px-2 sm:px-4 transition-all duration-500 sticky top-0 z-50" :class="activeClassList == 1 ? classListOne : classListTwo">
      <div class="container flex flex-wrap justify-around items-center mx-auto ">
        <a href="#" id="logotype">
          <img src="./assets/logo_light.png" class="h-8 pl-2" alt="pushmobile - разработка лучших айти решений!">
        </a>
        <div class="flex md:order-2">
          <button type="button" class="text-white border-2 uppercase bg-amber-500 border-white hover:bg-green-300 font-bold rounded-md text-sm px-5 py-1 text-center mr-3 md:mr-0">Заказать звонок</button>

          <a 
            data-collapse-toggle="mobile-menu-4" 
            type="button" 
            class="inline-flex 
                    items-center 
                    p-2 
                    text-3xl
                    text-white
                    rounded-lg 
                    md:hidden"
            aria-controls="mobile-menu-4" 
            aria-expanded="false"
            @click="menuOpened = !menuOpened">

            <span class="sr-only">Open main menu</span>
            <font-awesome-icon :icon="menuOpened === true ? 'times' : 'bars'"></font-awesome-icon>
          </a>
        </div>
        <div id="menu" :class="menuOpened === false ? 'hidden' : ''" class="justify-between w-full md:flex md:w-auto md:order-1">
          <ul 
            class="flex flex-col md:flex-row uppercase md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="#hero" v-smooth-scroll class="block cool-link py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-white md:p-0 transition duration-500 ease-in-out" aria-current="page">наверх</a>
            </li>
            <li>
              <a href="#team_info" v-smooth-scroll class="block cool-link py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-white md:p-0 transition duration-500 ease-in-out" >Возможности</a>
            </li>
            <li>
              <a href="#use_our_team" v-smooth-scroll class="block cool-link py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-white md:p-0 transition duration-500 ease-in-out" >Разработка</a>
            </li>
            <li>
              <a href="#our_services" v-smooth-scroll class="block cool-link py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-white md:p-0 transition duration-500 ease-in-out" >О нас</a>
            </li>
            <li>
              <a href="#" class="block cool-link py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-white md:p-0 transition duration-500 ease-in-out " >Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>

export default{
  components: {},
  data(){
    let classListOne = "bg-transparent py-8";
    let classListTwo = "bg-gradient-to-r from-green-500 to-indigo-800 py-4";
    let activeClassList = 1;
    return{
      menuOpened: false,
      classListOne,
      classListTwo,
      activeClassList
    }
  },
  mounted(){
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll(){
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        this.activeClassList = 2;
      } else {
        this.activeClassList = 1;
      }
    }
  }

}

</script>


