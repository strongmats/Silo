# Matthew Strong — Custom Theme Package

**Fonts:** Ovo (headings/display) + Mulish (body/UI)  
**Palette:** Alabaster Grey `#D3D4D9` · Air Force Blue `#4B88A2` · Burgundy `#801928` · Carbon Black `#252627` · Snow `#FFF9FB`

---

## What's Included

| File                  | Use Case                                         |
|-----------------------|--------------------------------------------------|
| `theme.css`           | Drop-in CSS — works with any framework or vanilla |
| `tailwind.config.js`  | Tailwind CSS projects                             |
| `tokens.json`         | Framework-agnostic design tokens (Style Dictionary, Figma, etc.) |

---

## Quick Start

### Option A: Vanilla / Any Framework (theme.css)

```html
<head>
  <link rel="stylesheet" href="./theme.css">
</head>
```

Then use CSS variables anywhere:

```css
.card {
  background: var(--color-surface);
  color: var(--color-foreground);
  font-family: var(--font-body);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.card h2 {
  font-family: var(--font-display);
  color: var(--color-primary);
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-snow);
}

.btn-accent {
  background: var(--color-accent);
  color: var(--color-snow);
}
```

### Option B: Tailwind CSS

1. Replace your `tailwind.config.js` with the provided one
2. Add fonts to your main CSS or HTML:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ovo&display=swap');
   ```
3. Use in your markup:
   ```html
   <h1 class="font-display text-4xl text-carbon">Title in Ovo</h1>
   <p class="font-body text-base text-gray-700">Body text in Mulish</p>
   <button class="bg-airforce text-snow rounded-md px-4 py-2 hover:bg-airforce-hover">
     Primary Action
   </button>
   <button class="bg-burgundy text-snow rounded-md px-4 py-2 hover:bg-burgundy-hover">
     Accent Action
   </button>
   ```

### Option C: Design Tokens (tokens.json)

Use with [Style Dictionary](https://amzn.github.io/style-dictionary/) or import directly into Figma/design tools.

---

## Dark Mode

**CSS version:** Add `data-theme="dark"` or class `dark` to `<html>` or `<body>`.

**Tailwind version:** Uses `darkMode: 'class'` — add `dark` class to `<html>`.

---

## Giving This to Claude

When starting a new project with Claude (in VS Code, Claude Code, or chat), paste this at the beginning of your prompt:

> Use my custom theme: Ovo for headings, Mulish for body text. Colors: primary #4B88A2 (Air Force Blue), accent #801928 (Burgundy), neutral #D3D4D9 (Alabaster Grey), dark #252627 (Carbon Black), light #FFF9FB (Snow). Import fonts from Google Fonts. Use CSS variables or Tailwind config as appropriate.

Or just reference the theme files directly if working in a project that has them.
