---
title: Checkbox
dir: components
description: A checkbox allows users to select multiple items from a list (or) to mark an item as selected.
slug: checkbox
url: /components/checkbox
index: 4
---

# Checkbox

{description}

---

<script> 
	import 'figblocks/globalStyles'; 
</script>

## Usage

Import the `Checkbox` component from "figBlocks".

```svelte example
<script>
	import { Checkbox } from 'figblocks';
	let isChecked = false;
</script>

<Checkbox bind:checked={isChecked}>I haven't read the TOC</Checkbox>
```

## Group Checkbox

The Group Checkbox allows users to select multiple options, binding the selections to a shared array.

```svelte example hideStyle
<script>
	import { Checkbox } from 'figblocks';
	let fruits = ['apple'];
</script>

<Checkbox bind:group={fruits} value="apple">Apple</Checkbox>
<Checkbox bind:group={fruits} value="orange">Orange</Checkbox>
```

## Disabled state

Pass the `disabled` prop to disable the checkbox.

```svelte example hideScript hideStyle
<script>
	import { Checkbox } from 'figblocks';
</script>

<Checkbox disabled checked>Apple</Checkbox>
<Checkbox disabled>Orange</Checkbox>
```

## Mixed state

Pass the `mixed` prop to set the checkbox state to mixed.

```svelte example hideScript hideStyle
<script>
	import { Checkbox } from 'figblocks';
</script>

<Checkbox mixed checked>Apple</Checkbox>
<Checkbox mixed>Orange</Checkbox>
```

## Props

| Prop       | Type                 | Default   | Description                                                  |
| ---------- | -------------------- | --------- | ------------------------------------------------------------ |
| `checked`  | boolean              | false     | If true, the checkbox will be checked.                       |
| `group`    | (string \| number)[] | undefined | The initial value of the checkbox group.                     |
| `name`     | string               | undefined | The name of the input element, used when submitting a form.  |
| `value`    | string \| number     | undefined | The value of the input element, used when submitting a form. |
| `mixed`    | boolean              | false     | If true, the checkbox state is set to mixed.                 |
| `disabled` | boolean              | false     | If true, the checkbox will be disabled.                      |
| `class`    | string               | undefined | Custom CSS classname for styling                             |

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
