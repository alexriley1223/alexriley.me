<template>
  <main class="flex-auto">

    <!-- Main Hero -->
    <section id="hero" class="relative w-full h-screen">
      <!-- Full screen hero -->
      <div class="relative z-10 flex flex-col items-center justify-center h-full pb-6 md:pb-20 lg:pb-40">
        <div class="flex items-end mb-10 w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <img class="object-cover" src="~/assets/img/picofme.png" alt="Alex Riley Cutout Picture">
        </div>

        <div class="px-4 text-center lg:px-0">
          <h1 class="mb-2 text-4xl font-bold text-center md:text-5xl lg:text-6xl">Hi. I'm Alex.</h1>
          <p class="text-lg md:text-xl lg:text-2xl">Full Stack Web Developer & Tech Tinkerer</p>
        </div>

      </div>

      <!-- GitHub -->
      <a href="https://github.com/alexriley1223" target="_blank" class="absolute z-20 block right-5 top-5" aria-label="Link to GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="transition-opacity opacity-50 bi bi-github hover:opacity-100" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/alexriley1223/" target="_blank" class="absolute z-20 block right-16 top-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="transition-opacity opacity-50 bi bi-linkedin hover:opacity-100" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      </a>

      <div class="scroll-down absolute right-[calc(50%+12px)] left-[calc(50%-12px)] bottom-16 md:bottom-20 lg:bottom-10 z-10"></div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-12 bg-white" data-aos="fade-up" data-aos-delay="300">

      <div class="container px-4 mx-auto md:px-2 lg:px-0">
        <h2 class="mb-4 text-4xl font-semibold text-center">Professional Projects</h2>
        <p class="max-w-xl mx-auto text-center">I currently work at <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://sfp.net" target="_blank">SFP</a>, a web development agency located in Lafayette, Indiana. I've had the pleasure to develop, maintain, and collaborate with <strong>40+</strong> clients.</p>

        <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">

          <ElementsProjectCard
            background-hex="#FFD343"
            title="Lo Ink Specialties"
            :skills="['Laravel', 'Foundations CSS', 'Vue', 'EF3']"
            :image="require('~/assets/img/sites/loink.png')"
          >
            <p>
              I was the lead developer on <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://loink.com/" target="_blank">Lo Ink Specialties'</a> e-commerce shop redesign. I was responsible for implementing our redesign (frontend and backend), building out the e-commerce elements with our <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://sfp.net/case-study/ef3" target="_blank">in-house CMS EF3</a>, and working with product data to integrate with our systems.
            </p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#006541"
            title="Builder's Association of Greater Lafayette"
            :skills="['Laravel', 'Foundations CSS', 'EF3']"
            :image="require('~/assets/img/sites/bagl.png')"
          >
            <p>
              I was the lead developer on <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://bagl.info/" target="_blank">BAGL's</a> website redesign. I was responsible for all front-end and back-end programming to meet design and functionality specifications. The custom built Member Directory improved speed and ease of accessing association members as well as introducing a new organization system. I also built an Events system to cut reliance on Facebook for event management.
            </p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#0083FF"
            title="Stallard and Schuh"
            :skills="['Laravel', 'Foundations CSS', 'EF3']"
            :image="require('~/assets/img/sites/stallardschuh.png')"
          >
            <p>
              I was the lead developer on <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://stallardandschuh.com/" target="_blank">Stallard and Schuh's website</a>. I was responsible for implementing our design and all front-end and back-end programming. I handled SEO to boost page scores and implemented analytics platforms to track user journeys. I also developed a pre-launch splash page.
            </p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#F36B21"
            title="Grand Universe"
            :skills="['Laravel', 'Foundations CSS', 'EF3', 'Instagram API', 'Three.js', 'Animate.css']"
            :image="require('~/assets/img/sites/granduniverse.png')"
          >
            <p>I was the lead developer on <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://web.archive.org/web/20230528151104/https://granduniverse.org/" target="_blank">Grand Universe</a>. I built out a custom Events system for users to see all events in an organized place. I built out a team management system to keep track of board members for public viewing purposes. I also experimented with Three.js and Animate.css to create playful effects to match their brand.</p>
          </ElementsProjectCard>
          
          <ElementsProjectCard
            background-hex="#494949"
            title="Dave White's SitePro"
            :skills="['Laravel', 'Foundations CSS', 'EF3']"
            :image="require('~/assets/img/sites/sitepro.png')"
          >
            <p>I was the lead developer on <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://dwsitepro.com/" target="_blank">Dave White's SitePro</a> website redesign. I was responsible for all front-end and back-end programming to meet design and functionality specification. I was able to convert our in-house e-commerce CMS from a full-fledged system to just a catalog for viewing products.</p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#FFC600"
            title="Whirley Pop Shop"
            :skills="['Laravel', 'Foundations CSS', 'Vue', 'EF3', 'Zonos', 'Attentive', 'Shipping APIs']"
            :image="require('~/assets/img/sites/whirleypop.png')"
          >
            <p>
              I took over post-launch development on <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://whirleypopshop.com/" target="_blank">Whirley Pop Shop's website</a>. I have implemented <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://zonos.com/" target="_blank">Zonos</a>, a global checkout system and <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://www.attentive.com/" target="_blank">Attentive</a>, an SMS marketing platform with e-commerce journeys. I have also developed and implemented a full-fledged Rewards Program to improve customer retention and boost sales. I also lead development on their other e-commerce platforms: <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://www.wfarms.com/" target="_blank">Wabash Valley Farms</a> and <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://popcornpopper.com/" target="_blank">Popcorn Popper</a>.
            </p>
          </ElementsProjectCard>
        </div>
      </div>

    </section>

    <section class="bg-white border-b border-[#f7f7f7] py-12" data-aos="fade-up" data-aos-delay="300">
      <div class="container px-4 mx-auto md:px-2 lg:px-0">
        <h2 class="mb-4 text-4xl font-semibold text-center">Side Projects</h2>
        <p class="max-w-xl mx-auto text-center">Programming is my passion - in my free time I love exploring new technologies and ideas. These are available on my <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://github.com/alexriley1223" target="_blank">GitHub</a> alongside multiple others.</p>

        <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <ElementsProjectCard
            background-hex="#F9D7D0"
            title="The Trendy Artisan"
            :skills="['Laravel', 'Tailwind', 'Vue', 'Paypal', 'Alpine.js']"
            :image="require('~/assets/img/sites/trendyartisan.png')"
          >
            <p>
              I developed <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://www.thetrendyartisan.com/" target="_blank">The Trendy Artisan</a> for my sister-in-law as a full-fledged e-commerce solution to transition her away from Facebook and into her own space. This includes a custom dashboard with product, category, orders, and customer management. Products are managed with a custom-built attribute system to allow for infinite product combinations. All of her customers are satisfied with the site and I have new features currently in development.
            </p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#636363"
            title="The Queue"
            :skills="['Laravel', 'Sanctum', 'Tailwind', 'Vue', 'Spotify API']"
            :image="require('~/assets/img/sites/queue.png')"
          >
            <p>
              <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://queue.alexriley.me/" target="_blank">The Queue</a> is a website idea that is in its third iteration that I originally came up with in college. It is a Vue SPA integrated with Sanctum for API authentication and the Spotify API for song searching and user queue manipulation. It allows for guests to add songs to a user's queue with the use of their party code - perfect for DJs who get multiple song requests to keep everyone satisfied.
            </p>
          </ElementsProjectCard>

          <ElementsProjectCard
            background-hex="#7046FF"
            title="Bishop Discord Bot"
            :skills="['Node', 'Sequelize', 'Discord/Discord.JS', 'Riot Games API', 'Axios']"
            :image="require('~/assets/img/sites/bishop.png')"
          >
            <p>
              <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://github.com/alexriley1223/bishop" target="_blank">Bishop</a> is a Discord bot built in Node on top of the <a class="font-semibold text-red-600 transition-colors hover:text-red-500" href="https://discord.js.org/#/" target="_blank">Discord.JS</a> library. It is an asynchronous, modulated bot to handle commands, Discord events, scheduled jobs, and custom database models. It is built to my specification but is easily manipulatable. Currently, I have implemented song streaming from YouTube with full playback functionality, a points system with casino minigames and mock stocks, and a bit of integration with the League of Legends API.
            </p>
          </ElementsProjectCard>
        </div>
      </div>
    </section>

    <!-- What I Offer -->
    <section id="offer" class="py-8 lg:py-12 bg-[#fcfcfc] border-b border-[#f7f7f7]" data-aos="fade-up" data-aos-delay="300">
      <div class="container px-4 mx-auto md:px-2 lg:px-06">
        <h2 class="mb-4 text-4xl font-semibold text-center">What I Can Do For You</h2>

        <div class="grid w-full grid-cols-1 gap-4 mx-auto mt-8 md:grid-cols-2 md:w-8/12">
        
          <ElementsTableCard
          title="Full Stack Web Development"
          description="Front-to-back development built to your specification with modern web languages - from landing pages to e-commerce platforms"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="text-black bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
          </ElementsTableCard>

          <ElementsTableCard
          title="SEO, Analytics, and Web Security"
          description="Technical SEO, Google Analytics/Statcounter, page speed audits, and implementation of web conversion platforms"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="text-black bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </ElementsTableCard>

          <ElementsTableCard
          title="Web Consultation"
          description="Help with guidance and direction for your next web project. Developer code reviews too!"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="text-black bi bi-person-video" viewBox="0 0 16 16">
              <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
            </svg>
          </ElementsTableCard>

          <ElementsTableCard
          title="Server Management"
          description="Basic server setup or maintenance on existing web hosting setups: Apache, Nginx, PM2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="text-black bi bi-database-lock" viewBox="0 0 16 16">
              <path d="M13 5.698a4.92 4.92 0 0 1-.904.525C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 5.698V7c0 .374.356.875 1.318 1.313C5.234 8.729 6.536 9 8 9c.666 0 1.298-.056 1.876-.156-.43.31-.804.693-1.102 1.132A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 8.698V10c0 .374.356.875 1.318 1.313C5.234 11.729 6.536 12 8 12h.027a4.548 4.548 0 0 0-.017.8A1.9 1.9 0 0 0 8 13c-1.573 0-3.022-.289-4.096-.777A4.916 4.916 0 0 1 3 11.698V13c0 .374.356.875 1.318 1.313C5.234 14.729 6.536 15 8 15c0 .363.097.704.266.997C8.178 16 8.089 16 8 16c-1.573 0-3.022-.289-4.096-.777C2.875 14.755 2 14.007 2 13V4c0-1.007.875-1.755 1.904-2.223C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4v4.256a4.493 4.493 0 0 0-1.753-.249C12.787 7.654 13 7.289 13 7V5.698Zm-8.682-3.01C3.356 3.124 3 3.625 3 4c0 .374.356.875 1.318 1.313C5.234 5.729 6.536 6 8 6s2.766-.27 3.682-.687C12.644 4.875 13 4.373 13 4c0-.374-.356-.875-1.318-1.313C10.766 2.271 9.464 2 8 2s-2.766.27-3.682.687Z"/>
              <path d="M9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
            </svg>
          </ElementsTableCard>


        </div>
      </div>
    </section>

    <!-- Technical Experience -->
    <section id="experience" class="py-8 lg:py-12 bg-white border-b border-[#f7f7f7]" data-aos="fade-up" data-aos-delay="300">
      <div class="container px-4 mx-auto">
        <h2 class="mb-12 text-4xl font-semibold text-center">Technical Experience</h2>

        <div class="grid w-full grid-cols-1 mx-auto lg:grid-cols-2 lg:gap-x-4 md:w-3/5 lg:w-3/4">
          <div class="flex flex-col">
            <div class="mb-4">
              <h3 class="text-xs font-semibold text-red-500 uppercase">Education</h3>
              <p>B.S. Web Programming and Design - Purdue University</p>
            </div>

            <div class="mb-4">
              <h3 class="text-xs font-semibold text-red-500 uppercase">Frameworks</h3>
              <p>Nuxt, Laravel</p>
            </div>

            <div class="mb-4">
              <h3 class="text-xs font-semibold text-red-500 uppercase">Web Design</h3>
              <p>Gimp, Photoshop, Figma</p>
            </div>

            <div class="mb-4 lg:mb-0">
              <h3 class="text-xs font-semibold text-red-500 uppercase">Leadership</h3>
              <p>Hiring, Onboarding, Code reviews</p>
            </div>
            
          </div>

          <div class="flex flex-col">

            <div class="mb-4">
              <h3 class="text-xs font-semibold text-red-500 uppercase">Backend</h3>
              <p>PHP, Node.JS, WordPress, MySQL</p>
            </div>

            <div class="mb-4">
              <h3 class="text-xs font-semibold text-red-500 uppercase">Frontend</h3>
              <p>HTML5, CSS3, SASS/SCSS, Tailwind, FoundationsCSS, JS, Vue, Alpine</p>
            </div>
            
            <div class="mb-4">
              <h3 class="text-xs font-semibold text-red-500 uppercase">Unix</h3>
              <p>Nginx, Apache, PM2, Ubuntu, ArchLinux, WSL1/2</p>
            </div>

            <div>
              <h3 class="text-xs font-semibold text-red-500 uppercase">Collaboration</h3>
              <p>Asana, Slack, Google Drive, Trello, Gitlab/GitHub/Gitea</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-8 lg:py-12 bg-[#fcfcfc] border-b border-[#f7f7f7]">
      <div class="container px-4 mx-auto">
        <span class="block mb-3 text-3xl text-center lg:text-4xl">🙋‍♂️</span>
        <h4 class="mb-4 text-4xl font-semibold text-center">Let's Chat</h4>
        <p class="w-full mx-auto mb-6 text-center md:w-8/12 lg:w-5/12">New opportunities, tech chat, or if you just want to say hello - my inbox is always open! I will always reply
          as soon as possible.
        </p>

        <!-- Email Button / Resume -->
        <div class="flex justify-center space-x-6">
          <ElementsPrimaryButton href="mailto:alexriley1223@gmail.com" text="Email Me" />
          <ElementsPrimaryButton href="AlexRileyResume.pdf" target="_blank" text="View Resume" />
        </div>
      </div>
    </section>

  </main>
</template>

<script>

export default {
  name: 'IndexPage',

  mounted() {
    setTimeout(() => {
      document.querySelector('.layout-container').style.opacity = '1';
    }, 750);
  },
}
</script>