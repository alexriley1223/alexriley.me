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
    <section id="projects" class="bg-white py-12">

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
              I took over post-launch development on <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://whirleypopshop.com/" target="_blank">Whirley Pop Shop's website</a>. I have implemented <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://zonos.com/" target="_blank">Zonos</a>, a global checkout system and <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://www.attentive.com/" target="_blank">Attentive</a>, an SMS marketing platform with e-commerce journeys. I have also developed and implemented a full-fledged Rewards Program to improve customer retention and boost sales. I also lead development on their other e-commerce platforms: <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://www.wfarms.com/" target="_blank">Wabash Valley Farms</a> and <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://popcornpopper.com/" target="_blank">Popcorn Popper</a>.
            </p>
          </ElementsProjectCard>
        </div>
      </div>

    </section>

    <section class="bg-white border-b border-[#f7f7f7] py-12">
      <div class="container mx-auto px-4 md:px-2 lg:px-0">
        <h2 class="text-center font-semibold mb-4 text-4xl">Side Projects</h2>
        <p class="text-center max-w-xl mx-auto">Programming is my passion - in my free time I love exploring new technologies and ideas. These are available on my <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://github.com/alexriley1223" target="_blank">GitHub</a> alongside multiple others.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <ElementsProjectCard
            background-hex="#F9D7D0"
            title="The Trendy Artisan"
            :skills="['Laravel', 'Tailwind', 'Vue', 'Paypal', 'Alpine.js']"
            :image="require('~/assets/img/sites/trendyartisan.png')"
          >
            <p>
              I developed <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://www.thetrendyartisan.com/" target="_blank">The Trendy Artisan</a> for my sister-in-law as a full-fledged e-commerce solution to transition her away from Facebook and into her own space. This includes a custom dashboard with product, category, orders, and customer management. Products are managed with a custom-built attribute system to allow for infinite product combinations to be made easy. All of her customers are satisfied and I have new features currently in development.
            </p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#636363"
            title="The Queue"
            :skills="['Laravel', 'Sanctum', 'Tailwind', 'Vue', 'Spotify API']"
            :image="require('~/assets/img/sites/queue.png')"
          >
            <p>
              <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://queue.alexriley.me/" target="_blank">The Queue</a> is a website idea that is in its third iteration that I originally came up with in college. It is a Vue SPA integrated with Sanctum for API authentication and the Spotify API for song searching and queue manipulation. It allows for users to add songs to a user's queue with the use of their party code - perfect for DJs who get multiple song requests to keep everyone satisfied.
            </p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#7046FF"
            title="Bishop Discord Bot"
            :skills="['Node', 'Sequelize', 'Discord/Discord.JS', 'Riot Games API', 'Axios']"
            :image="require('~/assets/img/sites/bishop.png')"
          >
            <p>
              <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://www.thetrendyartisan.com/" target="_blank">Bishop</a> is a Discord bot built in Node on top of the <a class="font-semibold text-red-600 hover:text-red-500 transition-colors" href="https://discord.js.org/#/" target="_blank">Discord.JS</a> library. It is an asynchronous, modulated bot to handle commands, Discord events, scheduled jobs, and custom database models. It is built to my specification but is easily manipulatable. Currently, I have implemented song streaming from YouTube with full playback functionality, a points system with casino minigames and mock stocks, and a bit of integration with the League of Legends API.
            </p>
          </ElementsProjectCard>
        </div>
      </div>
    </section>

    <!-- What I Offer -->
    <section class="my-8 lg:my-12 bg-[#fcfcfc] border-b border-[#f7f7f7]">
      <div class="container mx-auto px-4 md:px-2 lg:px-06">
        <h2 class="text-center font-semibold mb-4 text-4xl">What I Can Do For You</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full md:w-8/12 mx-auto">
        
          <ElementsTableCard
          title="Full Stack Web Development"
          description="Front-to-back development built to your specification with modern web languages - from landing pages to e-commerce platforms"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-code-slash text-black" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
          </ElementsTableCard>

          <ElementsTableCard
          title="SEO, Analytics, and Web Security"
          description="Technical SEO, Google Analytics/Statcounter, page speed audits, and implementation of web conversion platforms"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-search text-black" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </ElementsTableCard>

          <ElementsTableCard
          title="Web Consultation"
          description="Help with guidance and direction for your next web project. Developer code reviews too!"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-person-video text-black" viewBox="0 0 16 16">
              <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
            </svg>
          </ElementsTableCard>

          <ElementsTableCard
          title="Server Management"
          description="Basic server setup or maintenance on existing web hosting setups: Apache, Nginx, PM2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-database-lock text-black" viewBox="0 0 16 16">
              <path d="M13 5.698a4.92 4.92 0 0 1-.904.525C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 5.698V7c0 .374.356.875 1.318 1.313C5.234 8.729 6.536 9 8 9c.666 0 1.298-.056 1.876-.156-.43.31-.804.693-1.102 1.132A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 8.698V10c0 .374.356.875 1.318 1.313C5.234 11.729 6.536 12 8 12h.027a4.548 4.548 0 0 0-.017.8A1.9 1.9 0 0 0 8 13c-1.573 0-3.022-.289-4.096-.777A4.916 4.916 0 0 1 3 11.698V13c0 .374.356.875 1.318 1.313C5.234 14.729 6.536 15 8 15c0 .363.097.704.266.997C8.178 16 8.089 16 8 16c-1.573 0-3.022-.289-4.096-.777C2.875 14.755 2 14.007 2 13V4c0-1.007.875-1.755 1.904-2.223C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4v4.256a4.493 4.493 0 0 0-1.753-.249C12.787 7.654 13 7.289 13 7V5.698Zm-8.682-3.01C3.356 3.124 3 3.625 3 4c0 .374.356.875 1.318 1.313C5.234 5.729 6.536 6 8 6s2.766-.27 3.682-.687C12.644 4.875 13 4.373 13 4c0-.374-.356-.875-1.318-1.313C10.766 2.271 9.464 2 8 2s-2.766.27-3.682.687Z"/>
              <path d="M9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
            </svg>
          </ElementsTableCard>


        </div>
      </div>
    </section>

    <!-- Technical Experience -->
    <section class="my-8 lg:my-12 bg-white border-b border-[#f7f7f7]">
    </section>

    <!-- About Me -->
    <section class="my-8 lg:my-12 bg-[#fcfcfc] border-b border-[#f7f7f7]">
    </section>

    <!-- Contact -->
    <section id="contact" class="my-8 lg:my-12 bg-white border-b border-[#f7f7f7]">
      <div class="container mx-auto px-4">
        <span class="block text-center text-3xl lg:text-4xl mb-3">🙋‍♂️</span>
        <h2 class="text-center font-semibold mb-4 text-4xl">Let's Chat</h2>
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
