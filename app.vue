<script setup lang="ts">

</script>

<template>
  <div 
    id="app" 
    class="bg-primary-400 dark:bg-primary-950"
  >
    <!-- Html Head -->
    <Head>
      <Title>Lian Robin</Title>
    </Head>
    <!-- Header -->
    <Header></Header>
    
    <!-- Main Content  -->
    <Banner></Banner>

    <!-- Content -->
    <main 
      v-if="false"
      class="
        md:hidden
        md:top-0
        md:right-0
        md:max-w-[45%]
        text-primary-950 dark:text-primary-200
        h-full
        transition-all ease-out
        overflow-auto
        bg-primary-200/90
      "
    >
      <!-- Grain -->
      <div 
        class="
          transition
          absolute top-0 left-0 opacity-20
          animate-grain
          w-full h-full
          bg-[length:300%]
          bg-[url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png)]
        " 
      ></div>
      <div class="mt-20 relative">
        asdadasdasdasio hasdioha dsiopah ioashd apiosdh apioh dapiosh apsiodh asiopdh paiosdh
        <!-- About -->
        <ContentAboutSection></ContentAboutSection>
      </div>
    
    </main>
    
  </div>
</template>





