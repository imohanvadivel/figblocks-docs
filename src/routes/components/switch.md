---
title: Switch
dir: components
description: A switch allows users to turn a setting ON or OFF.
slug: switch
url: /components/switch
index: 6
---

<script> 
	import 'figblocks/globalStyles'; 
	import Table from '$lib/components/Table.svelte';

	const props = [
		['Prop', 'Type', 'Default', 'Description'],

		['checked', 'boolean', 'false', 'If true, the switch will be turned ON.'],
		['name', 'string', 'undefined', 'The name of the input element, used when submitting a form.'],
		['value', 'string', 'undefined', 'The value of the input element, used when submitting a form.'],
		['disabled', 'boolean', 'false', 'If true, the switch will be disabled.'],
		['class', 'string', 'undefined', 'Custom CSS classname for styling.'],
	]
</script>

# Switch

{description}

---

## Usage

Import the `Switch` component from "figBlocks".

```svelte example
<script>
	import { Switch } from 'figblocks';
</script>

<Switch />
```

## Switch with label

The default slot can be used to pass the label.

```svelte example hideScript
<script>
	import { Switch, Label } from 'figblocks';
</script>

<Switch>Notifications</Switch>
```

## Disabled state

Pass the `disabled` prop to disable the switch.

```svelte example hideScript
<script>
	import { Switch } from 'figblocks';
</script>

<Switch disabled>Email Notifications</Switch>
<Switch disabled checked>Desktop Notifications</Switch>
```

## Props

| Prop       | Type    | Default   | Description                                                  |
| ---------- | ------- | --------- | ------------------------------------------------------------ |
| `checked`  | boolean | false     | If true, the switch will be turned ON.                       |
| `name`     | string  | undefined | The name of the input element, used when submitting a form.  |
| `value`    | string  | undefined | The value of the input element, used when submitting a form. |
| `disabled` | boolean | false     | If true, the switch will be disabled.                        |
| `class`    | string  | undefined | Custom CSS classname for styling.                            |

## Slots

- `default`

## Events

- `on:click`
- `on:change`
- `on:focus`
- `on:blur`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
