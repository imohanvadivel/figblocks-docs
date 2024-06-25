---
title: Select
dir: components
description: A select allows user to pick a value from predefined options.
slug: select
url: /components/select
index: 9
---

# Select

{description}

---

<script>
	import 'figblocks/globalStyles';
</script>

## Usage

- Import the `Select` component from "figBlocks".
- The options for the select can be passed using the `menuItems` prop.
- Refer to the type definition of the menuItems below.

```svelte example
<script>
	import { Select } from 'figblocks';

	let menuItems = [
		{ label: 'Apple', value: 'apple', selected: false },
		{ label: 'Mango', value: 'mango', selected: false },
		{ label: 'Banana', value: 'banana', selected: false }
	];
</script>

<Select bind:menuItems />
```

```ts
// Type definitions
type Menu = {
	value: string;
	label: string;
	selected: boolean;
	group?: string;
	id?: number;
};

type MenuItems = Menu[];
```

## Placeholder

The default placeholder ("Choose an option") can be overridden by using `placeholder` prop.

```svelte example hideScript
<script>
	import { Select } from 'figblocks';

	let menuItems = [
		{ label: 'Apple', value: 'apple', selected: false },
		{ label: 'Mango', value: 'mango', selected: false },
		{ label: 'Banana', value: 'banana', selected: false }
	];
</script>

<Select bind:menuItems placeholder="choose a fruit" />
```

## Select with icon

Select accepts `iconSvg` & `iconText` props to display icons. Refer [Icon component](/components/icon) for further detail.

```svelte example hideScript
<script>
	import { Select } from 'figblocks';
	import { IconCode } from 'figblocks/icons';

	let menuItems = [
		{ label: 'Apple', value: 'apple', selected: false },
		{ label: 'Mango', value: 'mango', selected: false },
		{ label: 'Banana', value: 'banana', selected: false }
	];
</script>

<Select bind:menuItems iconSvg={IconCode} />
```

## Disabled state

The select can be disabled by passing the `disabled` prop.

```svelte example hideScript
<script>
	import { Select } from 'figblocks';

	let menuItems = [
		{ label: 'Apple', value: 'apple', selected: false },
		{ label: 'Mango', value: 'mango', selected: false },
		{ label: 'Banana', value: 'banana', selected: false }
	];
</script>

<Select bind:menuItems disabled />
```

## Option grouping

The options in the select can be grouped by using the group property in `menuItems`.

```svelte example
<script>
	import { Select } from 'figblocks';

	let menuItems = [
		{ label: 'Apple', group: 'fruit', value: 'apple', selected: false },
		{ label: 'Mango', group: 'fruit', value: 'mango', selected: false },
		{ label: 'Carrot', group: 'veg', value: 'carrot', selected: false },
		{ label: 'Beetroot', group: 'veg', value: 'beetroot', selected: false }
	];
</script>

<Select bind:menuItems />
```

## Option grouping with labels

The `showGroupLabel` prop can be passed to explicitly display the group label.

```svelte example
<script>
	import { Select } from 'figblocks';

	let menuItems = [
		{ label: 'Apple', group: 'fruit', value: 'apple', selected: false },
		{ label: 'Mango', group: 'fruit', value: 'mango', selected: false },
		{ label: 'Carrot', group: 'veg', value: 'carrot', selected: false },
		{ label: 'Beetroot', group: 'veg', value: 'beetroot', selected: false }
	];
</script>

<Select bind:menuItems showGrouplabels />
```

## Props

<style>
	pre.language-ts{
		border: 1px solid var(--color-border);
    border-radius: 6px;
	}
</style>

| Prop              | Type         | Default            | Description                                            |
| ----------------- | ------------ | ------------------ | ------------------------------------------------------ |
| `iconSvg`         | string       | undefined          | Refer [Icon component](/components/icon).              |
| `iconText`        | string       | undefined          | Refer [Icon component](/components/icon).              |
| `menuItems`       | Menu[]       | []                 | The options for the select in an array.                |
| `value`           | Menu \| null | null               | The value of the select.                               |
| `placeholder`     | string       | "choose an option" | Placeholder text.                                      |
| `showGrouplabels` | boolean      | false              | If true, the label for the option groups is displayed. |
| `class`           | string       | undefined          | Custom CSS classname for styling.                      |

## Events

- `on:change`
- `on:focus`
- `on:blur`
