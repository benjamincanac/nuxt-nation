---
theme: ./theme
layout: 'center'
title: The Future of Nuxt UI
titleTemplate: '%s - Nuxt Nation 2024'
author: 'Benjamin Canac'
transition: fade-out
mdc: true
monaco: false
overviewSnapshots: true
fonts:
  sans: 'Public Sans'
  weights: '300,400,500,600,700,800,900'
---

<img src="/nuxt-nation.svg" class="mx-auto text-center" width="600" />
<p class="text-center text-xl text-white">Nov. 13th 2024</p>

<SpaceBackground class="z-[-1]" />

<!--
Hello everyone! It's a pleasure to be part of Nuxt Nation 2024!
-->

---
layout: 'intro'
---

<img src="https://github.com/benjamincanac.png" width="460" height="460" class="rounded-full size-32 mb-8 ring ring-primary-400" />

# Benjamin Canac

<p>
Working at NuxtLabs. Author of Nuxt UI.
</p>

<div class="flex flex-col gap-2 mt-8">
  <div class="flex items-center gap-2">
    <simple-icons-x class="size-5" />
    <a href="https://x.com/benjamincanac" target="_blank">x.com/benjamincanac</a>
  </div>
  <div class="flex items-center gap-2">
    <simple-icons-github class="size-5" />
    <a href="https://github.com/benjamincanac" target="_blank">github.com/benjamincanac</a>
  </div>
</div>

<img src="/nuxt.svg" width="460" height="460" class="size-[80vh] absolute -bottom-[25vh] -right-[18vh]" />

<!--
My name is Benjamin Canac, I'm a software engineer at NuxtLabs since 2020.

For the past year, I've been working full-time on Nuxt UI and today I want to talk about the future of Nuxt UI.
-->

---

<img src="/nuxt-ui.svg" width="460" height="460" class="h-24 mx-auto" />

<p class="text-center text-xl text-white">A Vue component library based on Tailwind CSS.</p>

<v-click>
  <div class="my-12 border-t border-slate-800" />

  <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 mt-10">
    <div class="flex max-w-xs flex-col gap-y-4">
      <dt class="text-base/7 text-slate-400">GitHub Stars</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">4k+</dd>
    </div>
    <div class="flex max-w-xs flex-col gap-y-4">
      <dt class="text-base/7 text-slate-400">NPM Downloads</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">2M+</dd>
    </div>
    <div class="flex max-w-xs flex-col gap-y-4">
      <dt class="text-base/7 text-slate-400">Contributors</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">150+</dd>
    </div>
  </dl>
</v-click>

<!--
Nuxt UI has become pretty popular with 4k stars on GitHub and almost 2M downloads on NPM since its release in ...
-->

---

# What's new in Nuxt UI v3?

- Tailwind CSS v4
- Radix Vue / Reka UI
- Tailwind Variants
- Vue compatibility
- Devtools integration
- TypeScript support

---

# Installation

<v-clicks>

```bash
pnpm add @nuxt/ui@next
```

- `nuxt.config.ts`

````md magic-move
```ts {1,3|*}
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```
````

- `app.vue`

````md magic-move {lines: false}
```vue {1,4|2|2-3}
<style>
@import "tailwindcss";
@import "@nuxt/ui";
</style>
```

```vue {1,5|2,4|1-2,4-10}
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";
</style>
```
````

</v-clicks>

---

# Theme <v-click>[-> Tailwind CSS]</v-click>

<v-clicks>

- `app.vue`

````md magic-move
```vue {1-3,18|5,17|5-17}
<style>
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --color-green-50: #EFFDF5;
  --color-green-100: #D9FBE8;
  --color-green-200: #B3F5D1;
  --color-green-300: #75EDAE;
  --color-green-400: #00DC82;
  --color-green-500: #00C16A;
  --color-green-600: #00A155;
  --color-green-700: #007F45;
  --color-green-800: #016538;
  --color-green-900: #0A5331;
  --color-green-950: #052E16;
}
</style>
```
````

</v-clicks>

---

# Theme -> Design System

---

# Integrations

<!--
- Nuxt Icon
- Nuxt Fonts
- Nuxt Color Mode
-->

---

# What about Nuxt UI Pro?

- Rebuilt from scratch
- New components
- Prose with Tailwind CSS
- Free update

---

# Roadmap

---

# Documentation

- https://ui3.nuxt.dev/
- https://github.com/nuxt/ui/tree/v3

---
layout: 'end'
---

# Thank You!

<ParticlesBg class="absolute inset-0 z-[-1]" />
