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

I'm excited to share with you today what we've been cooking up for the future of Nuxt UI.
-->

---
class: 'text-center'
---

<img src="/nuxt-ui.svg" alt="Nuxt UI" width="460" height="460" class="h-16 mx-auto" />

<p class="text-center text-xl text-slate-400">A Vue component library styled with Tailwind CSS.</p>

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
Nuxt UI is a Vue UI library that provides accessible and customizable components styled with Tailwind CSS. It gives you everything you need to build modern web applications.

[click] Since its launch 18 months ago:

[click] we've reached over 4,000 GitHub stars

[click] more than 1.5 million NPM downloads

[click] and we've built an amazing community of over 150 contributors
-->

---

# What's new in Nuxt UI v3?

<p class="text-xl text-slate-400">Rebuilt from the ground up, bringing significant improvements and powerful new features.</p>

<v-clicks>

- <custom-radix-vue class="size-6" /> Radix Vue
- <logos-tailwindcss-icon class="size-6" /> Tailwind CSS v4
- <custom-tailwind-variants class="size-6" /> Tailwind Variants
- <logos-vue class="size-6" /> Vue compatibility
- <logos-nuxt-icon class="size-6" /> Nuxt Devtools
- <logos-typescript-icon class="size-6" /> TypeScript generics

</v-clicks>

<!--
For the past 7 months, we've been working on rebuilding Nuxt UI from the ground up. We now use

[click] Radix Vue as our core component foundation which provides rock-solid primitives to build on, it fixed our Headless UI pain points, and unlocked tons of new features. Radix Vue growing popularity within the Vue community makes it future-proof and a perfect fit for Nuxt UI.

[click] We've upgraded to Tailwind CSS v4 alpha announced in March 2024 which is way faster and performant and has a new CSS-first configuration approach.

[click] We've also adopted Tailwind Variants to manage our design system, it makes styling way easier and maintainable.

[click] Thanks to Daniel Roe, you can now also use Nuxt UI in any Vue project without Nuxt using a Vite plugin.

[click] We've also integrated the Nuxt Devtools to give you a better developer experience.

[click] And we took TypeScript to the next level with generics for all components.
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

2. Add the `@nuxt/ui` module in your `nuxt.config.ts`

<v-after>
```ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```
</v-after>

3. Import `tailwindcss` and `@nuxt/ui` in your CSS

<v-after>
```css
@import "tailwindcss";
@import "@nuxt/ui";
```
</v-after>

4. Wrap your app with the `<UApp>` component

<v-after>
```vue
<template>
  <UApp />
</template>
```
</v-after>

</v-clicks>

<!--
Last month, we released the first alpha version of Nuxt UI v3.

[click] You can install it using the NPM `next` tag

[click] Then, you register the `@nuxt/ui` module in your `nuxt.config.ts`

[click] And then, you import `tailwindcss` and `@nuxt/ui` in your CSS

[click] You might also want to wrap your app with the `<UApp>` component to provide global configurations.

And that's it! You can now start using all the new components.
-->

---

# Theme <v-click>[→ Tailwind CSS]</v-click>

<p v-after>Tailwind CSS v4 takes a CSS-first configuration approach.</p>

<v-clicks>

````md magic-move {lines: false}

```css
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --width-8xl: 88rem;

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

```css
@import "tailwindcss";
@import "@nuxt/ui";

@source "../content/**/*.md";
```

```css
@import "tailwindcss";
@import "@nuxt/ui";

@plugin "@tailwindcss/typography";
```

````

</v-clicks>

<!--
Now, let's talk about the theming system.

[click] Tailwind CSS v4 takes a CSS-first configuration approach,

[click] You now customize your theme with CSS variables inside a theme directive. It's the equivalent of the `theme.extend` key in Tailwind CSS v3. In this example, we're adding a new `8xl` width, we override the default font and override the default `green` color.

[click] You can use the source directive to look for Tailwind classes in files that are not automatically detected. This can be useful when using Nuxt Content for example.

[click] And you can use the plugin directive to import Tailwind CSS plugins.
-->

---

# Theme → Design System <v-click>[→ Colors]</v-click>

<p v-after>Color aliases based on Tailwind CSS colors.</p>

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

````md magic-move {lines: false}

```vue
<template>
  <UButton color="secondary">Button</UButton>
</template>
```

```vue
<template>
  <p class="text-[var(--ui-primary)]">This is a primary text</p>
</template>
```

````

</v-clicks>

<!--
Nuxt UI extends Tailwind CSS using a flexible design system.

[click] By default, you have access to 7 color aliases based on Tailwind CSS colors

[click] that you can change at runtime in your `app.config.ts`.

[click] You can use these color aliases in the `color` prop of components

[click] or as CSS variables to style your app in light and dark mode automatically.

-->

---

# Theme → Design System → Tokens

<p>CSS variables to style your components globally.</p>

<v-clicks>

````md magic-move {lines: false}
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

```css
.dark {
  --ui-text-dimmed: var(--ui-color-neutral-500);
  --ui-text-muted: var(--ui-color-neutral-400);
  --ui-text-toned: var(--ui-color-neutral-300);
  --ui-text: var(--ui-color-neutral-200);
  --ui-text-highlighted: var(--color-white);

  --ui-bg: var(--ui-color-neutral-900);
  --ui-bg-elevated: var(--ui-color-neutral-800);
  --ui-bg-accented: var(--ui-color-neutral-700);
  --ui-bg-inverted: var(--color-white);

  --ui-border: var(--ui-color-neutral-800);
  --ui-border-accented: var(--ui-color-neutral-700);
  --ui-border-inverted: var(--color-white);

  --ui-radius: var(--radius);
}
```
````

</v-clicks>

<!--
Nuxt UI provides a set of design tokens to style your components globally.

[click] These tokens offer control over text, background, borders and radius.

[click] You can override these tokens in your CSS for light and dark mode.
-->

---

# Theme → Components <v-click>[→ Slots]</v-click>

<p v-after>Slots represent distinct HTML elements or sections.</p>

<v-clicks>

````md magic-move {lines: false}

```vue
<template>
  <div :class="ui.root({ class: [props.class, props.ui?.root] })">
    <div :class="ui.header({ class: props.ui?.header })">
      <slot name="header" />
    </div>

    <div :class="ui.body({ class: props.ui?.body })">
      <slot />
    </div>

    <div :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" />
    </div>
  </div>
</template>
```

```ts
export default {
  slots: {
    root: 'bg-[var(--ui-bg)] ring ring-[var(--ui-border)] rounded-[calc(var(--ui-radius)*2)]',
    header: 'p-4 sm:px-6',
    body: 'p-4 sm:p-6',
    footer: 'p-4 sm:px-6'
  }
}
```

````

</v-clicks>

<!--
Nuxt UI components are styled using the Tailwind Variants API.

[click] They have slots which represents distinct HTML element or section within the component.

[click] Let's take the Card component as an example which has a root div and 3 children slots.

[click] Its theme is defined by the `slots` property in the component theme like this.
-->

---

# Theme → Components → Variants

<p>Variants change the style of slots based on props.</p>

<v-clicks>

```ts
export default {
  slots: {
    root: 'inline-flex items-center justify-center rounded-full bg-[var(--ui-bg-elevated)]'
  },
  variants: {
    size: {
      sm: {
        root: 'size-7 text-sm'
      },
      md: {
        root: 'size-8 text-base'
      },
      lg: {
        root: 'size-9 text-lg'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
}
```

</v-clicks>

<!--
Components can also have variants which change the style of slots based on props.

[click] Let's take the Avatar component as an example that has a `size` prop.

The size of the `root` slot will be changed based on the `size` prop value.
-->

---

# Theme → Components

<p v-after>Customize all components at once or on a per-component basis.</p>

<v-clicks>

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

```vue
<UButton :ui="{ base: 'font-bold rounded-full' }">
  Button
</UButton>
```

```vue
<template>
  <UButton class="font-bold rounded-full">
    Button
  </UButton>
</template>
```

</v-clicks>

<!--
You have 3 ways to customize the components theme.

[click] You can override them globally in your `app.config.ts`, where you define the `slots` and `variants`.

[click] You can override a component's slots using the `ui` prop.

[click] And finally, you can use the `class` prop to override the root slot of the component.

Do note that Tailwind Variants uses the `tailwind-merge` library under the hood, so the classes you provide will be smartly merged.
-->

---

# Integrations <v-click>[→ Nuxt Icon]</v-click>

<p v-after>Add 200,000+ ready to use icons to your Nuxt application, based on Iconify.</p>

<v-clicks>

```vue
<template>
  <UIcon name="i-heroicons-light-bulb" class="size-5" />
</template>
```

```vue
<template>
  <UButton icon="i-heroicons-sun">
    Button
  </UButton>
</template>
```

<a href="https://icones.js.org" target="_blank" class="flex items-center gap-2 mt-4">
  <custom-icones class="size-5" />
  icones.js.org
</a>

</v-clicks>

<!--
Nuxt UI is fully integrated with the Nuxt ecosystem. It automatically installs:

[click] the Nuxt Icon module for you, which gives access to over 200k icons from Iconify with zero setup.

Anthony made a complete refactor of the module a few months ago to better support server side rendering which you might have seen in his talk yesterday.

This lets you use:

[click] the `<UIcon>` component anywhere in your app

[click] and the `icon` props available on most Nuxt UI components

[click] You can use the icones.js.org app to browse all the icons available
-->

---

# Integrations → Nuxt Fonts

<p>Plug-and-play web font optimization and configuration.</p>

<v-click>

```css
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --font-family-sans: 'Public Sans', sans-serif;
}
```

</v-click>

<!--
Nuxt UI also integrates with Nuxt Fonts, made by Daniel Roe who gave a talk about it yesterday.

This module is automatically installed and configured to work with CSS variables, so you

[click] just have to declare your fonts in your CSS and it handles all the loading and optimization for you.
-->

---

# Integrations → Nuxt Color Mode

<p>Dark and Light mode with auto detection made easy.</p>

<v-clicks>

```vue
<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <UButton
    :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
    color="neutral"
    variant="ghost"
    @click="isDark = !isDark"
  />
</template>
```

</v-clicks>

<!--
Nuxt UI automatically installs the Nuxt Color Mode module and configure Tailwind CSS to make the dark variant work.

Since our components are styled with design tokens that work for light and dark mode, you have nothing to do to support dark mode in your application.

[click] You can easily create a color mode button to let your users switch between light and dark mode.
-->

---

# What about Nuxt UI Pro?

<p>Premium Vue components built on top of Nuxt UI.</p>

<v-click>

1. Install the `v3.0.0-alpha` package

```bash
pnpm add @nuxt/ui-pro@next
```

2. Add the `@nuxt/ui-pro` module in your `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui-pro']
})
```

3. Import `tailwindcss` and `@nuxt/ui-pro` in your CSS

```css
@import "tailwindcss";
@import "@nuxt/ui-pro";
```

</v-click>

<!--
Nuxt UI Pro is a collection of premium Vue components built on top of Nuxt UI.

We've also rebuilt it from the ground up to take advantage of Nuxt UI new features.

The major version has been increased from v1 to v3 to make it clear that Nuxt UI Pro v3 is meant to be used with Nuxt UI v3.

I'm happy to share that this will be a free update, the license you bought or will buy is compatible for both versions.

[click] Nuxt UI Pro v3 only contains the components to build the Nuxt UI documentation at the moment.

But, you can try it out now by replacing all `@nuxt/ui` occurrences by `@nuxt/ui-pro`.
-->

---

# Roadmap

<p class="text-slate-300">Development roadmap for Nuxt UI & Nuxt UI Pro v3.</p>

<div class="relative mt-12">
  <div class="absolute top-1/2 left-0 right-0 h-[2px] -mt-px bg-slate-700 rounded-full" />

  <div class="grid grid-cols-7 grid-rows-2 mx-2">
  <v-clicks>
    <div class="relative row-start-1 col-start-1">
      <div class="absolute -bottom-2 w-4 h-4 rounded-full bg-primary-400 border-4 border-slate-900"></div>
      <heroicons-cube class="size-4 mb-1" />
      <h3 class="!text-xs font-semibold">@nuxt/ui</h3>
      <p class="text-slate-400 !text-[10px]/4 !mt-1 !mb-0">Rebuild all components from scratch with Radix Vue and Tailwind Variants</p>
    </div>
    <div class="pt-7 relative row-start-2 col-start-2">
      <div class="absolute -top-2 w-4 h-4 rounded-full bg-primary-400 border-4 border-slate-900"></div>
      <heroicons-book-open class="size-4 mb-1" />
      <h3 class="!text-xs mb-1 font-semibold">Documentation</h3>
      <p class="text-slate-400 !text-[10px]/4 !mt-1 !mb-0">Write documentation for Nuxt UI</p>
    </div>
    <div class="relative row-start-1 col-start-3">
      <div class="absolute -bottom-2 w-4 h-4 rounded-full bg-primary-400 border-4 border-slate-900"></div>
      <heroicons-tag class="size-4 mb-1" />
      <h3 class="!text-xs mb-1 font-semibold">v3.0.0-alpha.x</h3>
      <p class="text-slate-400 !text-[10px]/4 !mt-1 !mb-0">Released @nuxt/ui & @nuxt/ui-pro alpha packages</p>
    </div>
    <div class="pt-7 relative row-start-2 col-start-4">
      <div class="absolute -top-2 w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center">
        <div class="rounded-full bg-white animate-pulse size-2"></div>
      </div>
      <heroicons-cube class="size-4 mb-1" />
      <h3 class="!text-xs mb-1 font-semibold">@nuxt/ui-pro</h3>
      <p class="text-slate-400 !text-[10px]/4 !mt-1 !mb-0">Finish rebuilding Nuxt UI Pro components</p>
    </div>
    <div class="relative row-start-1 col-start-5">
      <div class="absolute -bottom-2 w-4 h-4 rounded-full bg-slate-400 border-4 border-slate-900"></div>
      <heroicons-book-open class="size-4 mb-1" />
      <h3 class="!text-xs mb-1 font-semibold">Documentation</h3>
      <p class="text-slate-400 !text-[10px]/4 !mt-1 !mb-0">Write documentation for Nuxt UI Pro</p>
    </div>
    <div class="pt-7 relative row-start-2 col-start-6">
      <div class="absolute -top-2 w-4 h-4 rounded-full bg-slate-400 border-4 border-slate-900"></div>
      <heroicons-computer-desktop class="size-4 mb-1" />
      <h3 class="!text-xs mb-1 font-semibold">Migrate everything</h3>
      <ul class="text-slate-400 !mt-1 -mb-9">
        <li class="!text-[10px]/2">Templates</li>
        <li class="!text-[10px]/2">nuxt.com</li>
        <li class="!text-[10px]/2">Modules</li>
        <li class="!text-[10px]/2">Nuxt Hub</li>
        <li class="!text-[10px]/2">Nuxt Studio</li>
      </ul>
    </div>
    <div class="relative row-start-1 col-start-7">
      <div class="absolute -bottom-2 w-4 h-4 rounded-full bg-slate-400 border-4 border-slate-900"></div>
      <heroicons-tag class="size-4 mb-1" />
      <h3 class="!text-xs mb-1 font-semibold">v3.0.0</h3>
      <p class="text-slate-400 !text-[10px]/4 !mt-1 !mb-0">Official release of Nuxt UI & Nuxt UI Pro v3</p>
    </div>
  </v-clicks>
  </div>
</div>

<!--
[click] In the past 7 months, we've completely rebuilt Nuxt UI from the ground up.

In parallel, we worked on Nuxt UI Pro v3 as we needed it to actually build the Nuxt UI docs. It took a long time especially because we made the typography by hand. We're no longer using the `@tailwindcss/typography` plugin and this lets users customize the typography like any other component in the App Config.

[click] It took a lot of time to write the docs for every component from scratch but it feels way better than before with way more examples.

[click] But last month, we finally released the first alpha version of Nuxt UI v3. We're already at the alpha.8 version with lots of improvements and we'll continue shipping.

[click] We're now focused on finishing the Nuxt UI Pro components so you can start migrating your projects.

[click] We also have to write the docs for Nuxt UI Pro v3.

[click] We'll also publish a complete migration guide for both Nuxt UI and Nuxt UI Pro and start migrating all our apps. This might take a while because we have a lot, like all the Nuxt UI Pro templates, nuxt.com, all the Nuxt Modules docs, Nuxt Hub, Nuxt Studio and so on.

[click] Unfortunately, I don't have a release date for Nuxt UI v3 because we depend on Tailwind CSS v4-alpha, on Reka UI which is the next major of Radix Vue and is still in alpha. We'll only be able to make an official release once these dependencies are also official.
-->

---
layout: 'center'
class: 'text-center'
---

<div class="flex flex-col items-center gap-6">
  <heroicons-heart class="size-12 text-primary-400" />

  <h1>Thank You!</h1>

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
I hope this gave you a clear understanding of Nuxt UI v3.

You can check the documentation on ui3.nuxt.dev, and the source code on the `v3` branch of the nuxt/ui GitHub repository.

Thank you!
-->
