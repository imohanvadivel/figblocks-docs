---
title: Number Input
dir: components
description: A number input allows user to input custom numerical entries with a keyboard.
slug: number-input
url: /components/number-input
index: 8
---

<script> 
	import 'figblocks/globalStyles'; 
</script>

# Number Input

{description}

---

## Usage

Import the `Input` component from "figblocks".

```svelte example
<script>
	import { NumberInput } from 'figblocks';
</script>

<NumberInput value="42" />
```

## Min, Max, Step

The `min`, `max`, and `step` props define the minimum value, maximum value, and the increment step for the input, respectively. This allows users to input numerical values within a specified range.

```svelte example hideStyle
<script>
	import { NumberInput, Label } from 'figblocks';
</script>

<div>
	<Label for="xpos">Position</Label>
	<NumberInput min={10} max={100} step={10} id="xpos" placeholder="Enter the x position" />
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Borders

The `border` prop forces border on the input field.

```svelte example hideScript
<script>
	import { NumberInput } from 'figblocks';
</script>

<NumberInput value="13" />
<NumberInput border value="69" />
```

## Disabled state

The input can be disabled by passing the `disabled` prop.

```svelte example hideScript
<script>
	import { NumberInput } from 'figblocks';
</script>

<NumberInput disabled value={42} />
```

## Invalid state

The input state can be set to invalid by passing the `invalid` prop. Furthermore, the error message can be passed using the `errorMessage` prop.

```svelte example hideScript
<script>
	import { NumberInput } from 'figblocks';
</script>

<NumberInput invalid value={42} errorMessage="The answer to life, the universe..." />
```

## Input with icon

Input accepts `iconSvg` & `iconText` props to display icons. Refer [Icon component](/components/icon) for further detail.

```svelte example
<script>
	import { NumberInput, Icon } from 'figblocks';
	import { IconCode } from 'figblocks/icons';
</script>

<NumberInput iconSvg={IconCode} placeholder="Enter the value here" />
```

## Props

| Prop           | Type             | Default   | Description                                                 |
| -------------- | ---------------- | --------- | ----------------------------------------------------------- |
| `id`           | string           | undefined | Id of the input.                                            |
| `name`         | string           | undefined | The name of the input element, used when submitting a form. |
| `value`        | string           | undefined | The value of the input.                                     |
| `min`          | number \| string | undefined | Minimum value for the input.                                |
| `max`          | number \| string | undefined | Maximum value for the input.                                |
| `step`         | number \| string | undefined | Increment step for the input.                               |
| `border`       | boolean          | false     | Forces border on the input.                                 |
| `disabled`     | boolean          | false     | If true, the input will be disabled.                        |
| `iconSvg`      | string           | undefined | Refer [Icon component](/components/icon).                   |
| `iconText`     | string           | undefined | Refer [Icon component](/components/icon).                   |
| `spin`         | boolean          | false     | Refer [Icon component](/components/icon).                   |
| `invalid`      | boolean          | false     | If true, the input will be set to invalid state.            |
| `errorMessage` | string           | undefined | Error message for the invalid state.                        |
| `placeholder`  | string           | undefined | Placeholder text.                                           |
| `class`        | string           | undefined | Custom CSS classname for styling.                           |

## Events

- `on:change`
- `on:input`
- `on:click`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
- `on:keydown`
- `on:keyup`
- `on:focus`
- `on:blur`
- `on:paste`
