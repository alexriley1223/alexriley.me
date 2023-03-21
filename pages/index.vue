<template>
  <main class="flex-auto">

    <!-- Main Hero -->
    <section id="hero" class="relative w-full h-screen z-0">
      <div class="flex flex-col lg:flex-row justify-center lg:justify-evenly">
        <div class="self-center">
          <h1 class="font-bold text-4xl lg:text-8xl">Hi. I'm Alex.</h1>
          <p class="text-1xl lg:text-3xl">Full Stack Web Developer & Tech Tinkerer</p>
          <p> </p>
        </div>

        <div class="flex items-end">
          <img class="block w-4/5 md:w-2/5 lg:w-auto lg:h-4/5 mx-auto lg:mx-0 lg:ml-auto" src="~/assets/img/alexriley_cutout_trans.png" alt="Alex Riley Cutout Picture">
        </div>
      </div> 
    </section>

    <!-- Projects -->
    <section id="projects" class="bg-[#fcfcfc] py-12">

      <div class="container mx-auto px-4 md:px-2 lg:px-0">
        <h2 class="text-center font-semibold mb-4 text-4xl">Professional Projects</h2>
        <p class="text-center max-w-xl mx-auto">I currently work at <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://sfp.net" target="_blank">SFP</a>, a web development agency located in Lafayette, Indiana. I've had the pleasure to develop, maintain, and collaborate with <strong>40+</strong> clients.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">

          <ElementsProjectCard
            background-hex="#FFD343"
            title="Lo Ink Specialties"
            :skills="['Laravel', 'Foundations CSS', 'Vue', 'EF3']"
            :image="require('~/assets/img/sites/loink.png')"
          >
            <p>
              I was the lead developer on <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://loink.com/" target="_blank">Lo Ink Specialties'</a> e-commerce shop redesign. I was responsible for implementing our redesign (frontend and backend), building out the e-commerce elements with our <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://sfp.net/case-study/ef3" target="_blank">in-house CMS EF3</a>, and working with product data to support our systems.
            </p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#006541"
            title="Builder's Association of Greater Lafayette"
            :skills="['Laravel', 'Foundations CSS', 'EF3']"
            :image="require('~/assets/img/sites/bagl.png')"
          >
            <p>
              I was the lead developer on <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://bagl.info/" target="_blank">BAGL's</a> website redesign. I was responsible for all front-end and back-end programming to meet design and functionality specification. The custom built Member Directory improved speed and ease of accessing association members as well as introducing a new organization system. I also built an Events system to cut reliance on Facebook for event management.
            </p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#0083FF"
            title="Stallard and Schuh"
            :skills="['Laravel', 'Foundations CSS', 'EF3']"
            :image="require('~/assets/img/sites/stallardschuh.png')"
          >
            <p>
              I was the lead developer on <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://stallardandschuh.com/" target="_blank">Stallard and Schuh's website</a>. I was responsible for implementing our design and all front-end and back-end programming. I handled SEO to boost page scores and analytics implementation to track user journeys. I also developed a pre-launch splash page.
            </p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#F36B21"
            title="Grand Universe"
            :skills="['Laravel', 'Foundations CSS', 'EF3', 'Instagram API', 'Three.js', 'Animate.css']"
            :image="require('~/assets/img/sites/granduniverse.png')"
          >
            <p>I was the lead developer on <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://www.granduniverse.org/" target="_blank">Grand Universe</a> and it's previous <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://grand-universe-splash.staging.sfp.net/" target="_blank">splash page</a>. I built out a custom Events system for users to see all events in an organized place. I built out a team management system to keep track of board members for public viewing purposes. I also experimented with Three.js and Animate.css to create playful effects to match their brand.</p>
          </ElementsProjectCard>
          
          <ElementsProjectCard
            background-hex="#494949"
            title="Dave White's SitePro"
            :skills="['Laravel', 'Foundations CSS', 'EF3']"
            :image="require('~/assets/img/sites/sitepro.png')"
          >
            <p>I was the lead developer on <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://dwsitepro.com/" target="_blank">Dave White's SitePro</a> website redesign. I was responsible for all front-end and back-end programming to meet design and functionality specification. I was able to convert our in-house e-commerce CMS from a full-fledged system to just a catalog for viewing products.</p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#FFC600"
            title="Whirley Pop Shop"
            :skills="['Laravel', 'Foundations CSS', 'Vue', 'EF3', 'Zonos', 'Attentive', 'Shipping APIs']"
            :image="require('~/assets/img/sites/whirleypop.png')"
          >
            <p>
              I took over post-launch development on <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://stallardandschuh.com/" target="_blank">Whirley Pop Shop's website</a>. I have implemented <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://zonos.com/" target="_blank">Zonos</a>, a global checkout system and <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://www.attentive.com/" target="_blank">Attentive</a>, an SMS marketing platform with e-commerce journeys. I have also developed and implemented a full-fledged Rewards Program to improve customer retention and boost sales. I also lead development on their other e-commerce platforms: <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://www.wfarms.com/" target="_blank">Wabash Valley Farms</a> and <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://popcornpopper.com/" target="_blank">Popcorn Popper</a>.
            </p>
          </ElementsProjectCard>
        </div>
      </div>

    </section>

    <section class="bg-[#fcfcfc] border-b border-[#f7f7f7] py-12">
      <div class="container mx-auto px-4 md:px-2 lg:px-0">
        <h2 class="text-center font-semibold mb-4 text-4xl">Side Projects</h2>
        <p class="text-center max-w-xl mx-auto">Programming is my passion - in my free time I love exploring new technologies and ideas. These are available on my <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://github.com/alexriley1223" target="_blank">GitHub</a>.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">

        </div>
      </div>
    </section>

    <!-- Personal About -->
    <section class="my-8 lg:my-12 bg-white border-b border-[#f7f7f7]">
      <div class="container mx-auto px-4">
        <div class="flex justify-between">
          <div>
            <p>picture here</p>
          </div>
          <div>
            <h3>Who is Alex Riley?</h3>
            <p></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="my-8 lg:my-12 b-[#fcfcfc] border-b border-[#f7f7f7]">
      <div class="container mx-auto px-4">
        <span class="block text-center text-3xl lg:text-4xl mb-3">🙋‍♂️</span>
        <h3 class="text-center text-4xl lg:text-5xl font-bold mb-6">Let's Chat</h3>
        <p class="text-center mb-8 w-8/12 lg:w-5/12 mx-auto">New opportunities, tech chat, or if you just want to say hello - my inbox is always open! I will always reply
          as soon as possible.
        </p>

        <!-- Email Button / Resume -->
        <div class="flex justify-center space-x-4">
          <ElementsPrimaryButton href="mailto:alexriley1223@gmail.com" text="Email Me" />
          <ElementsPrimaryButton href="~/assets/pdf/alexriley_resume.pdf" text="Resume" target="_blank" />
        </div>
      </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
