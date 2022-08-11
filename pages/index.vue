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
    <section id="projects" class="bg-red-200">

      <div class="container mx-auto px-4">
        <h3 class="text-2xl">What I've Built At <a href="https://sfp.net">SFP</a></h3>
        <p>I currently work at <a href="https://sfp.net">SFP</a>, a web development agency located in Lafayette, Indiana.
        I've had the pleasure to develop the websites for these clients.</p>

        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div>LoInk</div>
          <div>SitePro</div>
          <div>Stallard and Schuch</div>
          <div>BAGL</div>
          <div>Grand Universe</div>
          <div>CRE Rentals</div>
        </div>

        <p>With helping or maintained development with these clients.</p>
        <div class="grid grid-cols-2 lg:grid-cols-3">
          <div>Whirley Pop Shop</div>
          <div>Lafayette Interior Fashions</div>
          <div>BASi</div>
          <div>Dorma Hueppe</div>
          <div>Popcorn Popper</div>
          <div>Wabash Valley Farms</div>
        </div>
        
        <h3 class="text-center">Side Projects</h3>
        <p class="text-center">Programming is my passion - in my free time I love exploring new technologies and ideas.</p>
        <a class="block font-mono text-center" href="https://git.alexriley.me/">view my gitea</a>
      </div>
      
    </section>

    <!-- Tech Stack -->
    <section id="tech">
      <h3>Technologies</h3>
      <p></p>
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
