---
title: Option Button
dir: components
description: A option button enables users to toggle between two options.
slug: option-button
url: /components/option-button
index: 2
---

<script> 
	import 'figblocks/globalStyles'; 
</script>

# Option Button

{description}

---

## Usage

- Import the `OptionButton` and your preferred icons from "figBlocks".

- The OptionButton can display two distinct icons based on its state. These icons can be specified using the `iconSvg`, `iconText`, `inactiveIconSvg`, and `inactiveIconText` props.

- Refer [Icon component](/components/icon) for further details.

```svelte example
<script>
	import { OptionButton } from 'figblocks';
	import { IconLinkBroken, IconLinkConnected } from 'figblocks/icons';
</script>

<OptionButton iconSvg={IconLinkConnected} inactiveIconSVG={IconLinkBroken} />
```

## Active state

Pass the `active` prop to set the button state to active.

```svelte example hideScript
<script>
	import { OptionButton } from 'figblocks';
	import { IconLinkBroken, IconLinkConnected } from 'figblocks/icons';
</script>

<OptionButton active iconSvg={IconLinkConnected} inactiveIconSVG={IconLinkBroken} />
```

## Disabled state

Pass the `disabled` prop to disable the button.

```svelte example hideScript
<script>
	import { OptionButton } from 'figblocks';
	import { IconLinkBroken, IconLinkConnected } from 'figblocks/icons';
</script>

<OptionButton disabled iconSvg={IconLinkConnected} inactiveIconSVG={IconLinkBroken} />
```

## Inactive icon fallback

If an inactive icon is not provided, the active icon will be used for both states.

```svelte example hideScript
<script>
	import { OptionButton } from 'figblocks';
	import { IconAdjust } from 'figblocks/icons';
</script>

<OptionButton iconSvg={IconAdjust} />
```

## Props

| Prop               | Type    | Default   | Description                                 |
| ------------------ | ------- | --------- | ------------------------------------------- |
| `active`           | boolean | false     | If true, the button state is set to active. |
| `disabled`         | boolean | false     | If true, the button will be disabled.       |
| `iconSvg`          | string  | undefined | Refer [Icon component](/components/icon).   |
| `iconText`         | string  | undefined | Refer [Icon component](/components/icon).   |
| `inactiveIconSVG`  | string  | undefined | Refer [Icon component](/components/icon).   |
| `inactiveIconText` | string  | undefined | Refer [Icon component](/components/icon).   |
| `class`            | string  | undefined | Custom CSS classname for styling            |

## Events

- `on:click`
- `on:focus`
- `on:blur`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
