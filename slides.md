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

For the past year, I've been working full-time on Nuxt UI and today I want to talk about the future of Nuxt UI. But first, let's talk about what is Nuxt UI.
-->

---
layout: 'center'
class: 'text-center'
---

<img src="/nuxt-ui.svg" width="460" height="460" class="h-18 -mt-4 mx-auto" />

<p v-click class="text-center text-xl text-slate-400">A Vue UI library based on Tailwind CSS.</p>

<dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 mt-12">
  <v-clicks>
    <div class="flex max-w-xs flex-col gap-y-4">
      <dt class="text-base text-slate-400">GitHub Stars</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">4k+</dd>
    </div>
    <div class="flex max-w-xs flex-col gap-y-4">
      <dt class="text-base text-slate-400">NPM Downloads</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">2M+</dd>
    </div>
    <div class="flex max-w-xs flex-col gap-y-4">
      <dt class="text-base text-slate-400">Contributors</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">150+</dd>
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

<p v-click class="text-center text-xl text-slate-400">Rebuilt from the ground up to create a more powerful and flexible UI development experience.</p>

- Tailwind CSS v4
- Radix Vue / Reka UI
- Tailwind Variants
- Vue compatibility
- Devtools integration
- TypeScript support

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

### Color Configuration

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

### Design Tokens

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
layout: 'center'
---

# Learn more

- https://ui3.nuxt.dev/
- https://github.com/nuxt/ui/tree/v3

<!--
You can check the documentation on ui3.nuxt.dev and the source code on the `v3` branch of the GitHub repository.
-->

---
layout: 'end'
---

# Thank You!

<ParticlesBg class="absolute inset-0 z-[-1]" />

<!--
Thank you for listening and see you next time!
-->
