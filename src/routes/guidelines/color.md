---
title: Color
dir: guidelines
description:
slug: color
url: /guidelines/color
index: 2
---

<script>
	import colorData from '$lib/utils/colorData.json';
  import ColorTable from "$lib/components/ColorList.svelte";
  import ColorList from "$lib/components/ColorList.svelte";
  import Info from "$lib/components/Info.svelte";
  import Code from "$lib/customComponent/Code.svelte";
</script>

# Color

Utilize color tokens to seamlessly adapt your UI colors between light & dark modes.

---

## Enabling Theme Colors
 
To grant your plugin UI to get access to the color tokens, you must enable `themeColors` by setting it to true when calling `figma.showUI()`.


```js
figma.showUI(__html__, { themeColors: true })
```

- Now you can use the below color tokens and it get dynamically updated when the mode switches from light to dark and vice versa.

- Additionally, a `figma-light` or `figma-dark` class will be applied to the `<html>` element, allowing for custom styling of elements based on the theme.

- For more information on theming, checkout [CSS Variables and theming](https://www.figma.com/plugin-docs/css-variables/).

<Info header="Tip" type="info" maxWidth="47rem">
When prototyping outside the Figma canvas, such as in a browser, the color tokens won't be accessible. In such instances, you can import the 'figmaTheme' from 'figblocks' to use those colors.

```js
import "figblocks/figmaTheme";
```
</Info>

<ColorList />
