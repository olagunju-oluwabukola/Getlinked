<template>
 <Heading/>
            <hr>
            <Introduction/>
           <hr>
           <Rules/>
           <hr>
           <criteria/>
           <hr>
           <faq-comp/>
           
           <Timeline/>
           <hr>
           <Rewards/>
           <hr>
           <Partners/>
           <hr>
           <TandC/>
          
</template>

<script>
import Introduction from '@/components/Introduction.vue';
import Rules from '@/components/Rules.vue';
import Criteria from '@/components/Criteria.vue';
import FaqComp from '@/components/FaqComp.vue';
import Timeline from '@/components/Timeline.vue';
import Rewards from '@/components/Rewards.vue';
import Partners from '@/components/Partners.vue';
import TandC from '@/components/TandC.vue';
import FooterComp from '@/components/FooterComp.vue';
import Heading from '@/components/Heading.vue';

    
export default {
  components: {Heading, Introduction, Rules, Criteria,
    FaqComp, Timeline, Rewards, Partners, TandC, FooterComp},

}
</script>

<style>

</style>