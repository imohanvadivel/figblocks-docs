---
title: Section Title
dir: components
description: A Section Title renders distinct titles for various sections.
slug: section-title
url: /components/section-title
index: 11
---

# Section Title

{description}

---

<script>
	import 'figblocks/globalStyles'; 
</script>

## Usage

Import the `SectionTitle` component from "figBlocks".

```svelte example
<script>
	import { SectionTitle } from 'figblocks';
</script>

<SectionTitle>Position</SectionTitle>
```

## Variants

The `variant` prop determines the visual style of the section title.

```svelte example hideScript
<script>
	import { SectionTitle } from 'figblocks';
</script>

<SectionTitle variant="regular">Position</SectionTitle>
<SectionTitle variant="large">Position</SectionTitle>
```

## Borders

The `border` prop adds the bottom border to the section title. It applies only for the large variant.

```svelte example hideScript
<script>
	import { SectionTitle } from 'figblocks';
</script>

<SectionTitle border variant="large">Position</SectionTitle>
```

## Props

| Prop      | Type                 | Default | Description                                               |
| --------- | -------------------- | ------- | --------------------------------------------------------- |
| `variant` | "regular" \| "large" | "large" | Determines the visual style of the section title.         |
| `border`  | boolean              | false   | If true, the bottom border is added to the section title. |
