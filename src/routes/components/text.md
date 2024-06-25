---
title: Text
dir: components
description: A text component offers customization for rendering various types of textual content.
slug: text
url: /components/text
---

<script>
	import 'figblocks/globalStyles';
	import Info from '$lib/components/Info.svelte';
</script>

# Text

{description}

---

## Usage

Import the `Text` component from "figBlocks".

```svelte example hideToolbar
<script>
	import { Text } from 'figblocks';
</script>

<Text>Hamburger</Text>
```

## Font size

The `size` prop determines the font-size, "small" is the default value.

```svelte example hideToolbar hideScript
<script>
	import { Text } from 'figblocks';
</script>

<Text size="xsmall">Hamburger</Text>
<Text size="small">Hamburger</Text>
<Text size="large">Hamburger</Text>
<Text size="xlarge">Hamburger</Text>
```

## Font weight

The `weight` prop determines the font-weight, "normal" is the default value.

```svelte example hideToolbar hideScript
<script>
	import { Text } from 'figblocks';
</script>

<Text weight="normal">Hamburger</Text>
<Text weight="medium">Hamburger</Text>
<Text weight="bold">Hamburger</Text>
```

## Font color

The `color` prop accepts color tokens (CSS custom variables) for overriding the default color.

```svelte example hideToolbar hideScript
<script>
	import { Text } from 'figblocks';
</script>

<Text color="--figma-color-text-brand">Hamburger</Text>
```

## Inline

Text is inherently a block level element; passing the `inline` prop will render it inline.

```svelte example hideToolbar hideScript
<script>
	import { Text } from 'figblocks';
</script>

<Text inline>Hamburger</Text>
```

## Inverse

The `inverse` prop manually adjusts the letter spacing to match the negative application (light text on a dark background) in light mode and the positive application (dark text on a light background) in dark mode.

<Info header="Note:" type="info">
	The Text component will automatically adjust the letter spacing for dark mode. Use the "inverse" prop only to manually switch the letter spacing.
</Info>

```svelte example hideToolbar hideScript
<script>
	import { Text } from 'figblocks';
</script>

<Text inverse size="xlarge">Hamburger</Text>
```

## Props

| Prop      | Type                                       | Default              | Description                                                                                              |
| --------- | ------------------------------------------ | -------------------- | -------------------------------------------------------------------------------------------------------- |
| `size`    | "xsmall" \| "small" \| "large" \| "xlarge" | "small"              | Determines the font size.                                                                                |
| `weight`  | "normal" \| "medium" \| "bold"             | "normal"             | Determines the font weight.                                                                              |
| `inverse` | boolean                                    | false                | Adjusts the letter-spacing for negative application in light mode and positive application in dark mode. |
| `color`   | color token                                | "--figma-color-text" | Overrides the default text color.                                                                        |
| `inline`  | boolean                                    | false                | If true, the text is rendered as an inline element.                                                      |
| `class`   | string                                     | undefined            | Custom CSS classname for styling.                                                                        |
