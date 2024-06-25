---
title: Label
dir: components
description: A label component renders the form label element.
slug: label
url: /components/label
index: 10
---

<script> 
	import 'figblocks/globalStyles'; 
</script>

# Label

{description}

---

## Usage

Import the `Label` component from "figBlocks".

```svelte example
<script>
	import { Label } from 'figblocks';
</script>

<Label>Position</Label>
```

## Props

| Prop    | Type   | Default   | Description                                           |
| ------- | ------ | --------- | ----------------------------------------------------- |
| `for`   | string | undefined | the ID of the form element associated with the label. |
| `class` | string | undefined | Custom CSS classname for styling.                     |
