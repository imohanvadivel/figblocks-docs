---
title: Button
dir: components
description: A button allows users to trigger an action or event.
slug: button
url: /components/button
index: 1
---

<script> 
	import 'figblocks/globalStyles'; 
	import Info from '$lib/components/Info.svelte';
</script>

# Button

{description}

---

## Usage

Import the `Button` component from the figblocks.

```svelte example
<script>
	import { Button } from 'figblocks';
</script>

<Button>Label</Button>
```

## Variants

The visual style of the button can be changed using the `variant` prop.

```svelte example hideScript
<script>
	import { Button } from 'figblocks';
</script>

<Button variant="primary">Label</Button>
<Button variant="secondary">Label</Button>
<Button variant="tertiary">Label</Button>
```

## Destructive state

Pass the `destructive` prop to style the button for destructive actions.

```svelte example hideScript
<script>
	import { Button } from 'figblocks';
</script>

<Button destructive variant="primary">Label</Button>
<Button destructive variant="secondary">Label</Button>
<Button destructive variant="tertiary">Label</Button>
```

## Disabled state

Pass the `disabled` prop to disable the button.

```svelte example hideScript
<script>
	import { Button } from 'figblocks';
</script>

<Button disabled variant="primary">Label</Button>
<Button disabled variant="secondary">Label</Button>
<Button disabled variant="tertiary">Label</Button>
```

## Button with icon

For left and right icon within the button, the `Icon` component can be used with the slot labeled "left-icon" and "right-icon".

<Info header="Note:" type="info">
	When an Icon component is passed to the designated slots (either "left-icon" or "right-icon"), the component automatically adjust its padding optically. Although it can also be passed in the default slot alongside the label, it won't have these adjustments.
</Info>

```svelte example
<script>
	import { Button, Icon } from 'figblocks';
	import { IconArrowRight } from 'figblocks/icons';
</script>

<Button>
	<Icon slot="left-icon" iconSvg={IconArrowRight} /> Get Started
</Button>

<Button variant="secondary">
	<Icon slot="right-icon" iconSvg={IconArrowRight} /> Get Started
</Button>
```

## Props

| Prop          | Type                                   | Default   | Description                                                     |
| ------------- | -------------------------------------- | --------- | --------------------------------------------------------------- |
| `variant`     | "primary" \| "secondary" \| "tertiary" | "primary" | Determines the visual style of the button                       |
| `disabled`    | boolean                                | false     | If true, the button will be disabled                            |
| `destructive` | boolean                                | false     | If true, the button turns to red, indicating destructive action |
| `class`       | string                                 | undefined | Custom CSS classname for styling                                |

## Slots

- `default`
- `left-icon`
- `right-icon`

## Events

- `on:click`
- `on:focus`
- `on:blur`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
