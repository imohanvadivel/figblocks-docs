---
title: Icon
dir: components
description: A wrapper component for rendering icons.
slug: icon
url: /components/icon
---

<script>
	import 'figblocks/globalStyles';
</script>

# Icon

{description}

---

## Setup

Import the `Icon` component from "figblocks" and your preferred icons from "figblocks/icons".

```svelte example hideToolbar
<script>
	import { Icon } from 'figblocks';
	import { IconCode } from 'figblocks/icons';
</script>

<Icon iconSvg={IconCode} />
```

## SVG icon

Figblocks offers a pre-defined collection of icons accessible from "figblocks/icons". Explore the [icon gallery](/guidelines/icons) to see all available icons. Render these SVG icons by passing them to the `iconSvg` prop.

```svelte example hideToolbar hideScript
<script>
	import { Icon } from 'figblocks';
	import {
		IconArrowLeft,
		IconArrowRight,
		IconArrowTop,
		IconArrowBottom,
		IconCode,
		IconKey,
		IconRotate
	} from 'figblocks/icons';
</script>

<Icon iconSvg={IconArrowLeft} />
<Icon iconSvg={IconArrowTop} />
<Icon iconSvg={IconArrowRight} />
<Icon iconSvg={IconArrowBottom} />
<Icon iconSvg={IconKey} />
<Icon iconSvg={IconCode} />
<Icon iconSvg={IconRotate} />
```

## Custom icon

For rendering custom icons, the SVG code can be passed as a string to the `iconSvg` prop. Also the color-token can be passed to the `color` prop for overriding default color.

```svelte example hideToolbar
<script>
	import { Icon } from 'figblocks';
	const svgString = `<svg width="24" height="22" viewBox="0 0 24 22"><path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"/></svg>`;
</script>

<Icon iconSvg={svgString} />
<Icon iconSvg={svgString} color="--figma-color-icon-brand" />
```

## Text icons

For rendering icons based on the text glyphs, the `iconText` prop can be used.

```svelte example hideToolbar hideScript
<script>
	import { Icon } from 'figblocks';
</script>

<Icon iconText="X" />
<Icon iconText="→" />
<Icon iconText="Y" />
```

## Spin

Pass the `spin` prop to enable rotation of the icon, this can be useful for indicating loading states.

```svelte example hideToolbar
<script>
	import { Icon } from 'figblocks';
	import { IconSpinner } from 'figblocks/icons';
</script>

<Icon spin iconSvg={IconSpinner} />
```

## Props

| Prop       | Type    | Default   | Description                               |
| ---------- | ------- | --------- | ----------------------------------------- |
| `iconSvg`  | string  | undefined | SVG code as string                        |
| `iconText` | string  | undefined | Text glyph as string                      |
| `spin`     | boolean | false     | Enables the rotation of the icon          |
| `color`    | string  | false     | Color token to override the default color |
| `class`    | string  | undefined | Custom CSS classname for styling          |
