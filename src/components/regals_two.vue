<template>
  <section id="team_info">

    <div class="flex flex-col justify-around mx-auto px-4 bg-gray-800 text-white font-bold pb-12 pt-16 bg-fixed bg-center bg-cover info__section_bg">

        <h2 class="font-bold text-white text-2xl md:text-3xl text-center mb-6">Разработка мобильных приложений и сайтов<br><span class="text-green-400">без границ</span></h2>
        <!-- <p class="font-bold md:w-1/3 w-full mx-auto text-gray-400 text-md text-center mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur laudantium pariatur quidem facere in.</p> -->
        <p class="font-bold md:w-1/3 w-full mx-auto text-gray-300 text-md text-center mb-12">Мы используем новейшие технологии мира айти, такие как vuejs, cordova, framework7, webpack, react, angular, laravel</p>

        <div class="flex flex-wrap md:flex-nowrap justify-center mx-auto md:w-1/3 w-full text-white font-bold">
            <div 
                class="flex flex-col items-center mx-5 my-2"
                v-for="(item, index) in regals"
                :key="index">
            <p 
              class="text-4xl text-green-400 font-bold mb-2">
              {{item.digit}}
            </p>
                <p class="text-mb text-green-400 text-center">{{item.text}}</p>
            </div>
        
        </div>

    </div>


  </section>
</template>

<script>
export default {
  name: 'teamInfo',

  data(){

      let regals = [
          {digit: '7+', text: "лет на рынке"},
          {digit: '1000+', text: "проектов начато"},
          {digit: '100%', text: "гарантия"},
          {digit: '24/7', text: "поддержка"}
      ];

      return{
        regals
      }
  }
}
</script>
