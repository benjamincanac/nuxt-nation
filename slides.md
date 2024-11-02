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
My name is Benjamin, I'm a software engineer at NuxtLabs and the author of Nuxt UI.

Today, I want to talk about the future of Nuxt UI but first, let's talk about what is Nuxt UI.

I'm super excited to share with you today what we've been cooking up for the future of Nuxt UI. But before we dive into the exciting new features, let's quickly get everyone on the same page about what Nuxt UI is.
-->

---
class: 'text-center'
---

<img src="/nuxt-ui.svg" alt="Nuxt UI" width="460" height="460" class="h-16 mx-auto" />

<p class="text-center text-xl text-balance text-slate-400">A Vue component library styled with Tailwind CSS.</p>

<img v-click.hide src="/components.png" alt="Components" width="800" class="absolute mt-4 ml-8.5">

<img v-after src="/downloads.svg" alt="Downloads" class="absolute inset-x-0 -bottom-20 w-full -z-10 opacity-35" />

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
        <span class="text-3xl font-semibold tracking-tight text-white sm:text-5xl">1.5M+</span>
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
Nuxt UI is a Vue component library that offers accessible and customizable elements styled with Tailwind CSS.

Its goal is to provide everything you need to build beautiful user interfaces.

Since its launch 18 months ago, we've reached 4,000+ GitHub stars, over 1.5 million downloads on NPM and we have an incredible community of 150 contributors.

For the past 7 months, we've been working on rebuilding Nuxt UI from scratch and we finally released the first alpha package last month.
-->

---

# What's new in Nuxt UI v3?

<p class="text-xl text-slate-400">Rebuilt from the ground up with a focus on performance, accessibility and DX.</p>

<v-clicks>

- Radix Vue
- Tailwind CSS v4
- Tailwind Variants
- Vue compatibility
- Devtools integration
- TypeScript support

</v-clicks>

<!--
Let me walk you through the major changes coming in Nuxt UI v3:

First, we're upgrading to Tailwind CSS v4 which brings significant performance improvements and new features.

We're now powered by Radix Vue primitives - which means rock-solid accessibility - and Tailwind Variants for that sweet, sweet styling flexibility you all love.

Tailwind Variants will give us more powerful styling capabilities with variant groups and compound variants.

We've improved Vue compatibility to work seamlessly with both Vue 2 and Vue 3.

The devtools integration will provide better debugging and development experience.

And finally, we've enhanced TypeScript support for better type safety and developer experience.
-->

---

# Installation

<v-clicks>

1. Install the `v3.0.0-alpha` package

<v-after>
```bash
pnpm add @nuxt/ui@next
```
</v-after>

2. Add the module to `nuxt.config.ts`

<v-after>
```ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```
</v-after>

3. Import `tailwindcss` and `@nuxt/ui` in your CSS

<v-after>
````md magic-move {lines: false}
```vue
<style>
@import "tailwindcss";
@import "@nuxt/ui";
</style>
```

```vue
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
</v-after>

</v-clicks>

<!--
So, how do you try it out?

[click] First, install the `v3-alpha` package using the NPM `next` tag.

[click] Then, add the @nuxt/ui module to your `nuxt.config.ts`.

[click] Finally, import `tailwindcss` and `@nuxt/ui` in your CSS or in the style block of your `app.vue`.

[click] You might also want to wrap your app with the `<UApp>` component to provide global configurations.

And that's it! You can now start using all the new components.
-->

---

# Theme <v-click>[→ Tailwind CSS]</v-click>

<p v-after>Tailwind CSS v4 takes a CSS-first configuration approach.</p>

<v-clicks>

```css
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --width-8xl: 88rem;
  --breakpoint-3xl: 1920px;
  --font-family-sans: 'Public Sans', sans-serif;

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
```

</v-clicks>

<!--
Now, let's talk about the theming system.

[click] Tailwind CSS v4 takes a CSS-first configuration approach, you now customize your theme with CSS variables inside a `@theme` directive.

[click] The `@theme` directive tells Tailwind to make new utilities and variants available based on these variables. It's the equivalent of the `theme.extend` key in Tailwind CSS v3 `tailwind.config.ts` file.
-->

---

# Theme → Design System <v-click>[→ Colors]</v-click>

<p v-after>Define your colors in the `ui.colors` object in `nuxt.config.ts`.</p>

<v-clicks>

```ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      secondary: 'blue',
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
      neutral: 'slate'
    }
  }
})
```

</v-clicks>

<!--
The new theming system in Nuxt UI v3:
1. Uses Tailwind CSS v4's @theme directive for customization
2. Provides a comprehensive color system with aliases
3. Includes design tokens for consistent styling across light/dark modes
-->

---

# Theme → Design System → Tokens

<p>Design tokens are CSS variables that can be used to style your components globally.</p>

<v-clicks>

```css
:root {
  --ui-text-dimmed: var(--ui-color-neutral-400);
  --ui-text-muted: var(--ui-color-neutral-500);
  --ui-text-toned: var(--ui-color-neutral-600);
  --ui-text: var(--ui-color-neutral-700);
  --ui-text-highlighted: var(--ui-color-neutral-900);

  --ui-bg: var(--color-white);
  --ui-bg-elevated: var(--ui-color-neutral-100);
  --ui-bg-accented: var(--ui-color-neutral-200);
  --ui-bg-inverted: var(--ui-color-neutral-900);

  --ui-border: var(--ui-color-neutral-200);
  --ui-border-accented: var(--ui-color-neutral-300);
  --ui-border-inverted: var(--ui-color-neutral-900);

  --ui-radius: var(--radius);
}
```

</v-clicks>

---

# Theme → Components <v-click>[→ App Config]</v-click>

```ts
export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'font-bold'
      }
    }
  }
})
```

---

# Theme → Components → `ui` prop

---

# Theme → Components → `class`

```vue
<template>
  <UButton class="font-bold rounded-full">Button</UButton>
</template>
```

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
Nuxt UI automatically install 3 modules for you:

[click] Nuxt Icon gives you access to over 200k icons from Iconify with zero setup. You can use any icon from icones.js.org and even create custom local collections.

[click] Nuxt Fonts provides automatic font optimization. Just declare your fonts in CSS and it handles all the loading and optimization behind the scenes.

[click] Nuxt Color Mode enables easy light/dark theme switching. It detects system preferences and integrates seamlessly with all UI components.
-->

---

# What about Nuxt UI Pro?

<p>Premium Vue components built on top of Nuxt UI.</p>

<v-clicks>

- Rebuilt from scratch
- Nuxt UI Pro v3 (bumped from v1)
- Free update

</v-clicks>

---

# Roadmap

<p class="text-slate-300">Development roadmap for Nuxt UI & Nuxt UI Pro v3.</p>

<div class="relative mt-20">
  <div class="absolute top-1/2 left-0 right-0 h-[2px] -mt-px bg-slate-700 rounded-full" />

  <div class="grid grid-cols-6 grid-rows-2 mx-2">
    <div class="relative row-start-1 col-start-1">
      <div class="absolute -bottom-2 w-4 h-4 rounded-full bg-primary-400 border-4 border-slate-900"></div>
      <heroicons-cube class="size-4 mb-1" />
      <h3 class="!text-sm font-semibold">@nuxt/ui</h3>
      <p class="text-slate-400 !text-xs !mt-1 !mb-0">Rebuild all components from scratch with Radix Vue and Tailwind Variants</p>
    </div>
    <div class="pt-7 relative row-start-2 col-start-2">
      <div class="absolute -top-2 w-4 h-4 rounded-full bg-primary-400 border-4 border-slate-900"></div>
      <heroicons-book-open class="size-4 mb-1" />
      <h3 class="!text-sm mb-1 font-semibold">Documentation</h3>
      <p class="text-slate-400 !text-xs !mt-1 !mb-0">Write the documentation for all Nuxt UI components</p>
    </div>
    <div class="relative row-start-1 col-start-3">
      <div class="absolute -bottom-2 w-4 h-4 rounded-full bg-primary-400 border-4 border-slate-900"></div>
      <heroicons-tag class="size-4 mb-1" />
      <h3 class="!text-sm mb-1 font-semibold">v3.0.0-alpha.x</h3>
      <p class="text-slate-400 !text-xs !mt-1 !mb-0">Released @nuxt/ui & @nuxt/ui-pro alpha packages</p>
    </div>
    <div class="pt-7 relative row-start-2 col-start-4">
      <div class="absolute -top-2 w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center">
        <div class="rounded-full bg-white animate-pulse size-2"></div>
      </div>
      <heroicons-cube class="size-4 mb-1" />
      <h3 class="!text-sm mb-1 font-semibold">@nuxt/ui-pro</h3>
      <p class="text-slate-400 !text-xs !mt-1 !mb-0">Finish rebuilding all Nuxt UI Pro components </p>
    </div>
    <div class="relative row-start-1 col-start-5">
      <div class="absolute -bottom-2 w-4 h-4 rounded-full bg-slate-400 border-4 border-slate-900"></div>
      <heroicons-book-open class="size-4 mb-1" />
      <h3 class="!text-sm mb-1 font-semibold">Documentation</h3>
      <p class="text-slate-400 !text-xs !mt-1 !mb-0">Write the documentation for all Nuxt UI Pro components</p>
    </div>
    <div class="pt-7 relative row-start-2 col-start-6">
      <div class="absolute -top-2 w-4 h-4 rounded-full bg-slate-400 border-4 border-slate-900"></div>
      <heroicons-puzzle-piece class="size-4 mb-1" />
      <h3 class="!text-sm mb-1 font-semibold">New components</h3>
      <p class="text-slate-400 !text-xs !mt-1 !mb-0">Create new components like DatePicker, PinInput, etc.</p>
    </div>
  </div>
</div>

<!--
Hey everyone! Let me share what we've accomplished over these past 7 months - and trust me, it's been quite a journey!

In the past 7 months, we've completely rebuilt Nuxt UI from the ground up, and I'm really excited about this.

Along the way, we also crafted a streamlined version of Nuxt UI Pro. Why? Well, we needed it to build our docs, but it also gave us a chance to show you what enterprise-grade Nuxt components can look like.

And speaking of docs - we've been pouring our hearts into creating the most comprehensive, developer-friendly documentation possible. Because at the end of the day, great tools deserve great docs, right?

I can't wait for you all to get your hands on this and see what you'll build with it!
-->

---
layout: 'center'
class: 'text-center'
---

<div class="flex flex-col items-center gap-6">
  <heroicons-heart class="size-12 text-primary-400" />

  <h1 class="">Thank You!</h1>

  <div class="flex items-center gap-4 text-lg">
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

<ParticlesBg class="absolute inset-0 z-[-1]" />

<!--
Thanks for listening today!

You can find all the code on GitHub, and our docs will help you get started.

Have fun building with Nuxt UI and see you next time!
-->