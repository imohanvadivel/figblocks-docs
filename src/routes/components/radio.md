---
title: Radio
dir: components
description: A radio allows users to select a single item from a list of mutually exclusive options.

slug: radio
url: /components/radio
index: 5
---

<script> 
	import 'figblocks/globalStyles'; 
	import Info from '$lib/components/Info.svelte';
</script>

# Radio

{description}

---

## Usage

Import the `Radio` & `RadioGroup` component from "figBlocks".

```svelte example
<script>
	import { Radio, RadioGroup } from 'figblocks';
	let fruit = 'apple';
</script>

<RadioGroup bind:group={fruit} name="fruit">
	<Radio value="apple">Apple</Radio>
	<Radio value="orange">Orange</Radio>
</RadioGroup>
```

<Info header="Note:" type="info">
	It is recommended to use the "name" prop on the "RadioGroup" instead of individual "Radio" components.
</Info>

## Inline radio group

Pass the `inline` param to stack the radio buttons horizontally.

```svelte example hideScript
<script>
	import { Radio, RadioGroup } from 'figblocks';
	let flavours = 'pista';
</script>

<RadioGroup inline bind:group={flavours} name="flavour">
	<Radio value="vanilla">Vanilla</Radio>
	<Radio value="strawberry">Strawberry</Radio>
	<Radio value="pista">Pista</Radio>
</RadioGroup>
```

## Disabled state

Pass the `disabled` prop to disable the radio button.

```svelte example hideScript
<script>
	import { Radio } from 'figblocks';
</script>

<Radio disabled>Some Value</Radio>
```

## Radio props

| Prop       | Type    | Default   | Description                                                  |
| ---------- | ------- | --------- | ------------------------------------------------------------ |
| `group`    | string  | undefined | The initial value of the radio group.                        |
| `name`     | string  | undefined | The name of the input element, used when submitting a form.  |
| `value`    | string  | undefined | The value of the input element, used when submitting a form. |
| `disabled` | boolean | false     | If true, the radio will be disabled.                         |
| `class`    | string  | undefined | Custom CSS classname for styling.                            |

## RadioGroup props

| Prop        | Type            | Default   | Description                                                 |
| ----------- | --------------- | --------- | ----------------------------------------------------------- |
| `group`     | string          | undefined | The initial value of the radio group.                       |
| `name`      | string          | randomId  | The name of the input element, used when submitting a form. |
| `inline`    | boolean         | false     | If true, the radio buttons are stacked horizontally.        |
| `columnGap` | CSS length unit | undefined | The gap between the horizontally stacked radio buttons.     |
| `class`     | string          | undefined | Custom CSS classname for styling.                           |

## Slots

- `default`

## Radio events

- `on:change`
- `on:click`
- `on:focus`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`

## RadioGroup events

- `on:change`
- `on:focus`
