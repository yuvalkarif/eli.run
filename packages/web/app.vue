<template>
  <div class="min-h-screen bg-black overflow-hidden relative">
    <!-- Animated gradient blob with clip-path -->
    <div class="absolute inset-0 z-0 blob-blur">
      <div class="blob"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <h1 class="text-7xl font-bold text-white mb-4 relative">
          <span class="shine-effect">eli.run</span>
        </h1>

        <p class="mt-4 text-xl text-gray-300 font-light">
          Your terminal companion for quick searches
        </p>

        <div class="mt-12 w-full max-w-2xl mx-auto">
          <div class="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10">
            <div class="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div class="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div class="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div class="w-3 h-3 rounded-full bg-[#28C840]"></div>
            </div>
            <div class="p-6 font-mono text-sm">
              <div class="flex items-center gap-2 text-gray-400">
                <span class="select-none">$</span>
                <span class="text-emerald-400">npm install -g eli.run</span>
              </div>
              <div class="flex items-center gap-2 mt-4 text-gray-400">
                <span class="select-none">$</span>
                <span class="text-emerald-400">eli what is the meaning of life</span>
              </div>
              <div class="mt-2 text-emerald-400">✨ Searching for your answer...</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div class="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <div class="text-2xl mb-4">🚀</div>
            <h3 class="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
            <p class="text-gray-300">Get answers instantly from your terminal</p>
          </div>
          <div class="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <div class="text-2xl mb-4">🎯</div>
            <h3 class="text-lg font-semibold text-white mb-2">Simple</h3>
            <p class="text-gray-300">Just type 'eli' followed by your question</p>
          </div>
          <div class="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <div class="text-2xl mb-4">🛠️</div>
            <h3 class="text-lg font-semibold text-white mb-2">Modern</h3>
            <p class="text-gray-300">Built with the latest technologies</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.blob {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: linear-gradient(
    to right,
    rgba(47, 112, 255, 0.5),
    rgba(0, 255, 203, 0.5)
  );
  
  filter: blur(80px);
  opacity: 0.75;
}

.blob-blur {
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8000px);
}

@keyframes blob-breathe {
  0%, 100% {
    clip-path: circle(40% at center);
  }
  50% {
    clip-path: circle(45% at center);
  }
}

.shine-effect {
  background: linear-gradient(
    to right,
    #fff 20%,
    #7dd3fc 30%,
    #fff 70%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: shine 5s ease-in-out infinite;
}

@keyframes shine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
