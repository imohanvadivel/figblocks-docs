---
title: Icon Button
dir: components
description: A icon button renders an icon within a button.
slug: icon-button
url: /components/icon-button
index: 3
---

<script> 
	import 'figblocks/globalStyles'; 
</script>

# Icon Button

{description}

---

## Usage

- Import the `IconButton` and your preferred icons from "figBlocks".
- The `iconSvg` & `iconText` props can be used to specify the icons.
- Refer [Icon component](/components/icon) for further details.

```svelte example
<script>
	import { IconButton } from 'figblocks';
	import { IconStyles } from 'figblocks/icons';
</script>

<IconButton iconSvg={IconStyles} />
<IconButton iconSvg={IconStyles} active />
```

## Active state

Pass the `active` prop to set the button state to active.

```svelte example hideScript
<script>
	import { IconButton } from 'figblocks';
	import { IconStyles } from 'figblocks/icons';
</script>

<IconButton iconSvg={IconStyles} active />
```

## Disabled state

Pass the `disabled` prop to disable the button.

```svelte example hideScript
<script>
	import { IconButton } from 'figblocks';
	import { IconStyles } from 'figblocks/icons';
</script>

<IconButton disabled iconSvg={IconStyles} />
```

## Props

| Prop       | Type    | Default   | Description                               |
| ---------- | ------- | --------- | ----------------------------------------- |
| `active`   | boolean | false     | If true, sets the button state to active. |
| `disabled` | boolean | false     | If true, the button will be disabled.     |
| `iconSvg`  | string  | undefined | Refer [Icon component](/components/icon). |
| `iconText` | string  | undefined | Refer [Icon component](/components/icon). |
| `class`    | string  | undefined | Custom CSS classname for styling          |

## Events

- `on:click`
- `on:focus`
- `on:blur`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
