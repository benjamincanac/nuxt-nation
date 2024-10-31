<template>
  <div class="absolute inset-0 overflow-hidden">
    <!-- Base dark background -->
    <div class="absolute inset-0 bg-[#0f172a]"></div>

    <!-- Moon surface texture -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] opacity-70"></div>

    <!-- Depth layers -->
    <div class="absolute inset-0">
      <!-- Deep space gradient with blue tint -->
      <div class="absolute inset-0 bg-gradient-radial from-[#0f172a] via-[#0a0d1a] to-[#0f172a] opacity-90"></div>

      <!-- Crater effects -->
      <div class="absolute inset-0">
        <div class="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
        <div class="absolute bottom-[30%] right-[15%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>
      </div>

      <!-- Atmospheric glow -->
      <div class="absolute inset-0">
        <div class="absolute top-[-10%] left-[30%] w-[800px] h-[800px] bg-indigo-500/[0.02] rounded-full blur-[120px] transform rotate-12"></div>
        <div class="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[100px] transform -rotate-12"></div>
      </div>
    </div>

    <!-- Stars layers -->
    <div class="starfield">
      <div class="star-layer-1"></div>
      <div class="star-layer-2"></div>
      <div class="star-layer-3"></div>
    </div>
  </div>
</template>

<style scoped>
.starfield {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.star-layer-1,
.star-layer-2,
.star-layer-3 {
  position: absolute;
  inset: 0;
  background-repeat: repeat;
  opacity: 0;
  animation: fade-in 2s ease-out forwards;
}

.star-layer-1 {
  background-image:
    radial-gradient(1px 1px at 10% 10%, white, transparent 100%),
    radial-gradient(1px 1px at 25% 45%, white, transparent 100%),
    radial-gradient(1px 1px at 50% 30%, white, transparent 100%),
    radial-gradient(1px 1px at 80% 15%, white, transparent 100%),
    radial-gradient(1px 1px at 65% 60%, white, transparent 100%);
  background-size: 550px 550px;
  animation: fade-in 2s ease-out forwards, twinkle 4s ease-in-out infinite;
}

.star-layer-2 {
  background-image:
    radial-gradient(1.5px 1.5px at 15% 80%, white, transparent 100%),
    radial-gradient(1.5px 1.5px at 40% 70%, white, transparent 100%),
    radial-gradient(1.5px 1.5px at 70% 85%, white, transparent 100%),
    radial-gradient(1.5px 1.5px at 85% 40%, white, transparent 100%);
  background-size: 450px 450px;
  animation: fade-in 2s ease-out forwards, twinkle 6s ease-in-out infinite 1s;
}

.star-layer-3 {
  background-image:
    radial-gradient(2px 2px at 35% 25%, white, transparent 100%),
    radial-gradient(2px 2px at 65% 45%, white, transparent 100%),
    radial-gradient(2px 2px at 90% 90%, white, transparent 100%);
  background-size: 350px 350px;
  animation: fade-in 2s ease-out forwards, twinkle 8s ease-in-out infinite 2s;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
</style>