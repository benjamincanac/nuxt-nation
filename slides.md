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

<img src="/nuxt-nation.svg" alt="Nuxt Nation 2024" class="mx-auto text-center" width="600" />
<p class="text-center text-xl text-white">Nov. 13th 2024</p>

<SpaceBackground class="z-[-1]" />

<!--
Hello everyone! It's a pleasure to be part of Nuxt Nation 2024!
-->

---
layout: 'intro'
---

<img src="https://github.com/benjamincanac.png" alt="Benjamin Canac" width="460" height="460" class="rounded-full size-32 mb-8 ring ring-primary-400" />

# Benjamin Canac

<p>
Working at NuxtLabs. Author of Nuxt UI.
</p>

<div class="flex flex-col gap-2 mt-8">
  <div class="flex items-center gap-2">
    <a href="https://x.com/benjamincanac" target="_blank" class="flex items-center gap-2">
      <simple-icons-x class="size-5" />
      x.com/benjamincanac
    </a>
  </div>
  <div class="flex items-center gap-2">
    <a href="https://github.com/benjamincanac" target="_blank" class="flex items-center gap-2">
      <simple-icons-github class="size-5" />
      github.com/benjamincanac
    </a>
  </div>
</div>

<img src="/nuxt.svg" alt="Nuxt" width="460" height="460" class="size-[80vh] absolute -bottom-[25vh] -right-[18vh]" />

<!--
My name is Benjamin Canac, I'm a software engineer at NuxtLabs since 2020.

For the past year, I've been working full-time on Nuxt UI and today I want to talk about the future of Nuxt UI. But first, let's talk about what is Nuxt UI.
-->

---
class: 'text-center'
---

<img src="/nuxt-ui.svg" alt="Nuxt UI" width="460" height="460" class="h-16 mx-auto" />

<p class="text-center text-xl text-slate-400">A Vue UI library based on Tailwind CSS.</p>

<img v-click.hide src="/components.png" alt="Components" width="800" class="absolute mt-4 ml-8.5">

<img v-after src="/downloads.svg" alt="Downloads" class="absolute inset-x-0 -bottom-24 w-full -z-10 opacity-50" />

<dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 mt-20 max-w-2xl mx-auto">
  <v-clicks>
    <div class="flex max-w-xs flex-col gap-y-4">
      <dt class="text-base text-slate-400">GitHub Stars</dt>
      <dd class="order-first flex flex-col items-center gap-4">
        <simple-icons-github class="size-8 text-primary-400" />
        <span class="text-3xl font-semibold tracking-tight text-white sm:text-5xl">4k+</span>
      </dd>
    </div>
    <div class="flex max-w-xs flex-col gap-y-4">
      <dt class="text-base text-slate-400">NPM Downloads</dt>
      <dd class="order-first flex flex-col items-center gap-4">
        <simple-icons-npm class="size-8 text-primary-400" />
        <span class="text-3xl font-semibold tracking-tight text-white sm:text-5xl">2M+</span>
      </dd>
    </div>
    <div class="flex max-w-xs flex-col gap-y-4">
      <dt class="text-base text-slate-400">Contributors</dt>
      <dd class="order-first flex flex-col items-center gap-4">
        <heroicons-users class="size-8 text-primary-400" />
        <span class="text-3xl font-semibold tracking-tight text-white sm:text-5xl">150+</span>
      </dd>
    </div>
  </v-clicks>
</dl>

<!--
Nuxt UI is UI library that provides fully-styled, accessible and highly customizable Vue components built with Tailwind CSS.

It became pretty popular with 4k stars on GitHub and over 2M downloads on NPM since its release one and half year ago. There is an amazing community around it and we're very proud to see so many people using it.

For the past 7 months, we've been working on rebuilding Nuxt UI from scratch and finally released the first alpha package a month ago.
-->

---

# What's new in Nuxt UI v3?

<p class="text-center text-xl text-slate-400">Rebuilt from the ground up to create a more powerful and flexible UI development experience.</p>

<v-clicks>

- Tailwind CSS v4
- Radix Vue / Reka UI
- Tailwind Variants
- Vue compatibility
- Devtools integration
- TypeScript support

</v-clicks>

<!--
Let me walk you through the major changes coming in Nuxt UI v3:

First, we're upgrading to Tailwind CSS v4 which brings significant performance improvements and new features.

We're also integrating with Radix Vue and Reka UI for enhanced accessibility and more complex components.

Tailwind Variants will give us more powerful styling capabilities with variant groups and compound variants.

We've improved Vue compatibility to work seamlessly with both Vue 2 and Vue 3.

The devtools integration will provide better debugging and development experience.

And finally, we've enhanced TypeScript support for better type safety and developer experience.
-->

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

# Theme <v-click>[→ Tailwind CSS]</v-click>

<p v-after>Tailwind CSS v4 takes a CSS-first configuration approach.</p>

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

<!--
Tailwind CSS v4 takes a CSS-first configuration approach, you now customize your theme with CSS variables inside a `@theme` directive.

The `@theme` directive tells Tailwind to make new utilities and variants available based on these variables. It's the equivalent of the `theme.extend` key in Tailwind CSS v3 `tailwind.config.ts` file.
-->

---

# Theme → Design System <v-click>[→ Colors]</v-click>

<v-clicks>

## Color Configuration

```ts {all|2-7|9-14}
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc',
      tertiary: 'indigo'
    },

    // Define available colors in nuxt.config.ts
    theme: {
      colors: ['primary', 'secondary', 'tertiary',
              'info', 'success', 'warning', 'error']
    }
  }
})
```

## Design Tokens

```css {all|2-6|8-12|14-18}
:root {
  /* Text variants */
  --ui-text-dimmed: var(--ui-color-neutral-400);
  --ui-text: var(--ui-color-neutral-700);
  --ui-text-highlighted: var(--ui-color-neutral-900);

  /* Backgrounds */
  --ui-bg: var(--color-white);
  --ui-bg-elevated: var(--ui-color-neutral-100);
  --ui-bg-accented: var(--ui-color-neutral-200);
  --ui-bg-inverted: var(--ui-color-neutral-900);

  /* Borders */
  --ui-border: var(--ui-color-neutral-200);
  --ui-border-accented: var(--ui-color-neutral-300);
  --ui-border-inverted: var(--ui-color-neutral-900);
  --ui-radius: var(--radius-sm);
}
```

</v-clicks>

<!--
The new theming system in Nuxt UI v3:
1. Uses Tailwind CSS v4's @theme directive for customization
2. Provides a comprehensive color system with aliases
3. Includes design tokens for consistent styling across light/dark modes
-->

---

# Integrations

<p>Fully integrated with the Nuxt ecosystem.</p>

<div class="grid grid-cols-3 gap-6 mt-12">
<v-clicks>
  <div class="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
    <h3 class="text-xl font-semibold text-primary-400 mb-4 flex flex-col items-center gap-3">
      <carbon-image class="size-8" />
      Nuxt Icon
    </h3>
    <ul class="space-y-3 text-sm text-slate-300">
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>200,000+ Iconify icons</span>
      </li>
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>Zero-config integration</span>
      </li>
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span><a href="https://icones.js.org" class="text-primary-400 hover:underline">icones.js.org</a> support</span>
      </li>
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>Local collections</span>
      </li>
    </ul>
  </div>

  <div class="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
    <h3 class="text-xl font-semibold text-primary-400 mb-4 flex flex-col items-center gap-3">
      <carbon-text-font class="size-8" />
      Nuxt Fonts
    </h3>
    <ul class="space-y-3 text-sm text-slate-300">
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>Automatic optimization</span>
      </li>
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>Zero configuration</span>
      </li>
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>CSS <code class="text-primary-400">@theme</code> support</span>
      </li>
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>Auto font loading</span>
      </li>
    </ul>
  </div>

  <div class="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
    <h3 class="text-xl font-semibold text-primary-400 mb-4 flex flex-col items-center gap-3">
      <carbon-light class="size-8" />
      Nuxt Color Mode
    </h3>
    <ul class="space-y-3 text-sm text-slate-300">
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>Light/dark mode built-in</span>
      </li>
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>System preference sync</span>
      </li>
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>Easy configuration</span>
      </li>
      <li class="flex items-start gap-2">
        <heroicons-check-circle class="size-5 text-primary-400 mt-0.5" />
        <span>UI components ready</span>
      </li>
    </ul>
  </div>
</v-clicks>
</div>

<!--
Let's go through the key integrations in Nuxt UI v3:

First, Nuxt Icon gives you access to over 200k icons from Iconify with zero setup. You can use any icon from icones.js.org and even create custom local collections.

Next, Nuxt Fonts provides automatic font optimization. Just declare your fonts in CSS and it handles all the loading and optimization behind the scenes.

Finally, Nuxt Color Mode enables easy light/dark theme switching. It detects system preferences and integrates seamlessly with all UI components.
-->

---

# What about Nuxt UI Pro?

<p>Premium Vue components built on top of Nuxt UI.</p>

<v-clicks>

- Rebuilt from scratch
- New components
- Prose with Tailwind CSS
- Free update

</v-clicks>

---

# Roadmap

<p>Release timeline for Nuxt UI v3.</p>

<div class="relative mt-8">
  <div class="absolute top-8 left-0 right-0 h-0.5 bg-slate-700" />

  <div class="grid grid-cols-3 gap-8">
    <div class="relative pt-16">
      <div class="absolute top-6 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-900"></div>
      <h3 class="text-xl font-semibold">Alpha Release</h3>
      <p class="text-slate-400">Next</p>
      <p class="mt-2">Initial release with core components and new architecture</p>
    </div>
    <div class="relative pt-16">
      <div class="absolute top-6 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-900"></div>
      <h3 class="text-xl font-semibold">Beta Release</h3>
      <p class="text-slate-400">When Tailwind CSS v4 is stable</p>
      <p class="mt-2">Feature complete with all planned components</p>
    </div>
    <div class="relative pt-16">
      <div class="absolute top-6 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-900"></div>
      <h3 class="text-xl font-semibold">Stable Release</h3>
      <p class="text-slate-400">Following Beta</p>
      <p class="mt-2">Production ready with full documentation and examples</p>
    </div>
  </div>
</div>

---
layout: 'center'
class: 'text-center'
---

<div class="flex flex-col items-center gap-6">
  <heroicons-information-circle class="size-10 text-primary-400" />

  <h1 class="!m-0 border-b-2 pb-2 border-primary-400">Learn more</h1>

  <div class="flex flex-col items-center gap-2 text-lg">
    <a href="https://ui3.nuxt.dev/" target="_blank" class="flex items-center gap-2 hover:text-primary-400 transition-colors">
      <heroicons-link class="size-5" />
      ui3.nuxt.dev
    </a>
    <a href="https://github.com/nuxt/ui/tree/v3" target="_blank" class="flex items-center gap-2 hover:text-primary-400 transition-colors">
      <simple-icons-github class="size-5" />
      github.com/nuxt/ui/tree/v3
    </a>
  </div>
</div>

<!--
You can check the documentation on ui3.nuxt.dev and the source code on the `v3` branch of the `nuxt/ui` repository.
-->

---
layout: 'end'
---

<div class="flex flex-col items-center justify-center gap-4">
  <h1 class="text-6xl font-800 !text-primary-400 animate-bounce-in animate-delay-100 animate-fade-in">
    Thank You!
  </h1>
</div>

<ParticlesBg class="absolute inset-0 z-[-1]" />

<!--
Thank you for listening and see you next time!
-->
