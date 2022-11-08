<template>
  <main class="flex-auto">

    <!-- Main Hero -->
    <section id="hero" class="relative w-full h-screen z-0">
      <div class="flex flex-col lg:flex-row justify-center lg:justify-evenly">
        <div class="self-center">
          <h1 class="font-bold text-4xl lg:text-8xl">Hi. I'm Alex.</h1>
          <h2 class="text-1xl lg:text-3xl">Full Stack Web Developer & Tech Tinkerer</h2>
          <p> </p>
        </div>

        <div class="flex items-end">
          <img class="block w-4/5 md:w-2/5 lg:w-auto lg:h-4/5 mx-auto lg:mx-0 lg:ml-auto" src="~/assets/img/alexriley_cutout_trans.png" alt="Alex Riley Cutout Picture">
        </div>
      </div> 
    </section>

    <!-- Projects -->
    <section id="projects">

      <div class="container mx-auto px-4">
        <section class="my-12 md:my-20">
          <h3 class="text-4xl font-semibold border-red-600 border-l-4 pl-6">What I've Built At SFP</h3>
          <p class="mt-2 mb-6">I currently work at <a class="font-semibold" href="https://sfp.net" target="_blank">SFP</a>, a web development agency located in Lafayette, Indiana.
          I've had the pleasure to develop these websites for our clients.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <ElementsPortfolioCard 
              link="https://loink.com/"
              title="Lo Ink Specialties"
              :image="require('~/assets/img/sites/loink.JPG')"
              description="E-commerce website for surveyors, engineers, architects, and contractors"
              :chips="['Laravel', 'Foundations', 'Vue', 'EF3']"
            />
            <ElementsPortfolioCard 
              link="https://bagl.info/"
              title="BAGL"
              :image="require('~/assets/img/sites/bagl.JPG')"
              description="Static website for a local home building association"
              :chips="['Laravel', 'Foundations', 'EF3']"
            />

            <ElementsPortfolioCard
              link="https://stallardandschuh.com/"
              title="Stallard and Schuh"
              :image="require('~/assets/img/sites/stallard.JPG')"
              description="Static website for a Real Estate & Title Insurance company"
              :chips="['Laravel', 'Foundations', 'EF3']"
            />

            <ElementsPortfolioCard
              link="https://granduniverse.org/"
              title="Grand Universe"
              :image="require('~/assets/img/sites/grand-main.JPG')"
              description="Static site with animations for a STEM Education Campus in Indiana"
              :chips="['Laravel', 'Foundations', 'EF3']"
            />

            <ElementsPortfolioCard
              link="https://grand-universe-splash.staging.sfp.net/"
              title="Grand Universe Splash"
              :image="require('~/assets/img/sites/grand-splash.JPG')"
              description="Pre-launch flipbook-esque splash page for Grand Universe"
              :chips="['Laravel', 'Foundations', 'Javascript', 'EF3']"
            />

            <ElementsPortfolioCard
              link="https://dwsitepro.com/"
              title="SitePro"
              :image="require('~/assets/img/sites/sitepro.JPG')"
              description="E-commerce product catalog for surveyors, engineers, architects, and contractors"
              :chips="['Laravel', 'Foundations', 'Vue', 'EF3']"
            />

          </div>

          <h4 class="text-2xl font-semibold mt-6 text-center">What I've Helped Maintain</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-2">
            <a href="https://www.whirleypopshop.com/" target="_blank">Whirley Pop Shop</a>
            <a href="https://myvisualizer.lafvb.com/" target="_blank">Lafayette Interior Fashions</a>
            <a href="https://www.basinc.com/products" target="_blank">BASi</a>
            <a href="https://www.dorma-hueppe.com/en-US" target="_blank">Dorma Hueppe</a>
            <a href="https://skyfold.com/en-US" target="_blank">Skyfold</a>
            <a href="https://ouibache.com/" target="_blank">Ouibache</a>
            <a href="https://popcornpopper.com/" target="_blank">Popcorn Popper</a>
            <a href="https://wfarms.com/" target="_blank">Wabash Valley Farms</a>
            <a href="https://stidhamumc.org/" target="_blank">Stidham UMC</a>
            <a href="https://mygalileo.org/" target="_blank">My Galileo</a>
            <a href="https://crerentals.com/" target="_blank">CRE Rentals</a>
            <a href="https://studentreportinglabs.org/" target="_blank">PBS Student Reporting Labs</a>
            <a href="https://www.rossvillequilts.com/" target="_blank">Rossville Quilts</a>
            <a href="https://lodfabworks.com/" target="_blank">LOD Fabworks</a>
            <a href="https://artisanelectric.net/" target="_blank">Artisan Electric</a>
          </div>
        </section>
        
        
        <section class="mt-12 md:mt-20 mb-12">
          <h3 class="text-4xl font-semibold border-red-600 border-l-4 pl-6">Side Projects</h3>
          <p class="mt-2 mb-6">Programming is my passion - in my free time I love exploring new technologies and ideas.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-grow">
            <ElementsPortfolioCard 
              link="https://github.com/alexriley1223/bishop"
              title="Bishop Discord Bot"
              visit="VIEW REPO"
              :image="require('~/assets/img/sites/bishop.png')"
              description="An all-in-one, modularized self hosted Discord bot for developers and tinkerers. Built using Discord.JS"
              :chips="['Node', 'Sequelize']"
            />

            <ElementsPortfolioCard 
              link="https://github.com/alexriley1223/bishop"
              title="The Queue"
              visit="VIEW REPO"
              :image="require('~/assets/img/sites/bishop.png')"
              description="Web application to create personal party rooms for people to request music on Spotify"
              :chips="['Laravel', 'Tailwind', 'Vue']"
            />

            <ElementsPortfolioCard 
              link="https://thetrendyartisan.com/"
              title="The Trendy Artisan"
              :image="require('~/assets/img/sites/trendyartisan.jpg')"
              description="E-commerce website for a craft store. Built from the ground up with a custom CMS and Paypal integration"
              :chips="['Laravel', 'Tailwind', 'Vue']"
            />
          </div>
        </section>
        
        <p class="text-center mb-6 font-semibold text-xl" id="tech">My Tools 🛠️</p>
        <div class="flex justify-center space-x-2">
          <a href="https://www.w3schools.com/css/" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="Css3" height="40" width="40" />
          </a>
          <a href="https://www.w3.org/html/" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="Html5" height="40" width="40" />
          </a>
          <a href="https://www.php.net" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" height="40" width="40" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" height="40" width="40" />
          </a>
          <a href="https://www.mysql.com/" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" height="40" width="40" />
          </a>
          <a href="https://laravel.com/" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="Laravel" height="40" width="40" />
          </a>
          <a href="https://nuxtjs.org/" target="blank">
            <img align="center" src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg" alt="Nuxt.js" height="40" width="40" />
          </a>
          <a href="https://vuejs.org/" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="Vue" height="40" width="40" />
          </a>
          <a href="https://nodejs.org" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" height="40" width="40" />
          </a>
          <a href="https://sass-lang.com" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="Sass" height="40" width="40" />
          </a>
          <a href="https://tailwindcss.com/" target="blank">
            <img align="center" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="TailWind" height="40" width="40" />
          </a>
          <a href="https://webpack.js.org" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="Webpack" height="40" width="40" />
          </a>
          <a href="https://www.docker.com/" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker" height="40" width="40" />
          </a>
          <a href="https://www.vagrantup.com/" target="blank">
            <img align="center" src="https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg" alt="Vagrant" height="40" width="40" />
          </a>
          <a href="https://www.nginx.com" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="Nginx" height="40" width="40" />
          </a>
          <a href="https://www.linux.org/" target="blank">
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux" height="40" width="40" />
          </a>
          <a href="https://www.gnu.org/software/bash/" target="blank">
            <img align="center" src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="Bash" height="40" width="40" />
          </a>
          <a href="https://git-scm.com/" target="blank">
            <img align="center" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" height="40" width="40" />
          </a>
        </div>
        <a class="block w-fit font-mono mx-auto mt-6 link-underline" target="_blank" href="https://github.com/alexriley1223">view my full github here</a>
      </div>
      
    </section>

    <!-- Personal About -->
    <section class="my-8 lg:my-12">
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
    <section id="contact" class="my-8 lg:my-12">
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
