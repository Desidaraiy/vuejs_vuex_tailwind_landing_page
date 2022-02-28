<template>
  <div class="home relative antialiased">
    <hero-section/>
    <contact-small/>
    <team-info />
    <use-our-team/>
    <our-services/>
    <form-quote/>
    <blog-mini/>

    <footer-push/>
  </div>
</template>

<script>
// @ is an alias to /src
import heroSection from '@/components/hero.vue'
import contactSmall from '@/components/regals.vue'
import teamInfo from '@/components/regals_two.vue'
import useOurTeam from '@/components/useTeam.vue'
import ourServices from '@/components/services.vue'
import formQuote from '@/components/form.vue'
import blogMini from '@/components/blog_mini.vue'


import footerPush from '@/components/footer.vue'

export default {
  name: 'HomeView',
  components: {
    heroSection,
    contactSmall,
    teamInfo,
    useOurTeam,
    ourServices,
    formQuote,
    blogMini,
    footerPush
  }
}
</script>
