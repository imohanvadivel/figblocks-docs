---
title: Text Input
dir: components
description: A text input allows user to input custom text entries with a keyboard.
slug: text-input
url: /components/text-input
index: 7
---

<script> 
	import 'figblocks/globalStyles'; 
</script>

# Text Input

{description}

---

## Usage

Import the `Input` component from "figblocks".

```svelte example
<script>
	import { TextInput } from 'figblocks';
</script>

<TextInput value="42" />
```

## Input with label

Import `TextInput` & `Label` component from "figblocks".

```svelte example hideStyle
<script>
	import { TextInput, Label } from 'figblocks';
</script>

<div>
	<Label for="xpos">Position</Label>
	<TextInput id="xpos" placeholder="Enter the x position" />
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
	import { TextInput } from 'figblocks';
</script>

<TextInput value="some value here" />
<TextInput border value="some value here" />
```

## Disabled state

The input can be disabled by passing the `disabled` prop.

```svelte example hideScript
<script>
	import { TextInput } from 'figblocks';
</script>

<TextInput disabled value={42} />
```

## Invalid state

The input state can be set to invalid by passing the `invalid` prop. Furthermore, the error message can be passed using the `errorMessage` prop.

```svelte example hideScript
<script>
	import { TextInput } from 'figblocks';
</script>

<TextInput invalid value={42} errorMessage="The answer to life, the universe..." />
```

## Input with icon

Input accepts `iconSvg` & `iconText` props to display icons. Refer [Icon component](/components/icon) for further detail.

```svelte example
<script>
	import { TextInput, Icon } from 'figblocks';
	import { IconCode } from 'figblocks/icons';
</script>

<TextInput iconSvg={IconCode} placeholder="Enter the value here" />
```

## Props

| Prop           | Type    | Default   | Description                                                 |
| -------------- | ------- | --------- | ----------------------------------------------------------- |
| `id`           | string  | undefined | Id of the input.                                            |
| `name`         | string  | undefined | The name of the input element, used when submitting a form. |
| `value`        | string  | undefined | The value of the input.                                     |
| `border`       | boolean | false     | Forces border on the input.                                 |
| `disabled`     | boolean | false     | If true, the input will be disabled.                        |
| `iconSvg`      | string  | undefined | Refer [Icon component](/components/icon).                   |
| `iconText`     | string  | undefined | Refer [Icon component](/components/icon).                   |
| `spin`         | boolean | false     | Refer [Icon component](/components/icon).                   |
| `invalid`      | boolean | false     | If true, the input will be set to invalid state.            |
| `errorMessage` | string  | undefined | Error message for the invalid state.                        |
| `placeholder`  | string  | undefined | Placeholder text.                                           |
| `class`        | string  | undefined | Custom CSS classname for styling.                           |

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
