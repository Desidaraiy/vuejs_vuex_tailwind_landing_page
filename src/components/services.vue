<template>
  <section id="our_services">

    <div class="block w-full mx-auto px-4 text-center bg-gradient-to-b from-gray-800 to-gray-900 text-white font-bold pb-12 pt-12">

        <h2 class="text-white font-bold text-3xl  inline-block relative  my-5 pb-5 mb-5 heading__two ">Наша ресурсность</h2>

        <div class="flex flex-wrap justify-center w-full mt-10 mb-5">


            <div 
            class="block py-5 px-5 mb-10 mx-2 max-w-sm bg-white rounded-xl text-left"
            v-for="(service, index) in services"
            :key="index">
                <h3 class="text-gray-800 text-2xl mb-4">{{index+1}}. {{service.title}}</h3>
                <p class="text-gray-800 text-md mb-7 mt-4">{{service.subtitle}}</p>
            </div>

        </div>

    </div>

  </section>
</template>

<script>
export default {
    name: 'ourServices',

    data(){

        let services = [
            {
                title: "Мобильные приложения",
                subtitle: "Мы занимаемся разработкой мобильных приложений на гибридных технологиях уже более 6-ти лет"
            },
            {
                title: "Вебсайты",
                subtitle: "Мы занимаемся разработкой вебсайтов на гибридных технологиях уже более 6-ти лет"
            },
            {
                title: "SEO-оптимизация",
                subtitle: "И SEO-продвижение. Мы занимаемся разработкой сео-оптимизации на гибридных технологиях уже более 6-ти лет"
            },
            {
                title: "Шляпы",
                subtitle: "Мы занимаемся разработкой шляп на гибридных технологиях уже более 6-ти лет"
            },
        ];

        return{
            services
        }

    }
}
</script>
