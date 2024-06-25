---
title: Textarea
dir: components
description: A textarea allows user to create multi-line text inputs.
slug: textarea
url: /components/textarea
index: 8
---

<script> 
	import 'figblocks/globalStyles'; 
</script>

# Textarea

{description}

---

## Usage

Import the `Textarea` component from "figBlocks".

```svelte example hideScript
<script>
	import { Textarea } from 'figblocks';
</script>

<Textarea placeholder="some value here" />
```

## Textarea with label

Import `Textarea` and `Label` component from "figBlocks".

```svelte example hideScript hideStyle
<script>
	import { Textarea, Label } from 'figblocks';
</script>

<div>
	<Label for="txt1">Enter the text here</Label>
	<Textarea id="txt1" placeholder="some value here" />
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Disabled state

The textarea can be disabled by passing the `disabled` prop.

```svelte example hideScript
<script>
	import { Textarea } from 'figblocks';
</script>

<Textarea disabled value="A quick brow fox jumps over a lazy dog" />
```

## Custom rows

The number of rows can be customized using the `rows` prop. The rows value should be greater than 2.

```svelte example hideScript
<script>
	import { Textarea } from 'figblocks';
</script>

<Textarea rows="6" value="A quick brow fox jumps over a lazy dog" />
```

## Resize

Textarea can be made resizable by the `resize` prop.

```svelte example hideScript
<script>
	import { Textarea } from 'figblocks';
</script>

<Textarea resize value="A quick brow fox jumps over a lazy dog" />
```

## Props

| Prop          | Type    | Default   | Description                                                 |
| ------------- | ------- | --------- | ----------------------------------------------------------- |
| `id`          | string  | undefined | Id of the textarea.                                         |
| `rows`        | number  | 2         | Custom row count, the value should be greater than 2.       |
| `name`        | string  | undefined | The name of the input element, used when submitting a form. |
| `value`       | string  | undefined | The value of the textarea.                                  |
| `resize`      | boolean | false     | If true, the textarea will be resizable.                    |
| `disabled`    | boolean | false     | If true, the textarea will be disabled.                     |
| `placeholder` | string  | undefined | Placeholder text.                                           |
| `class`       | string  | undefined | Custom CSS classname for styling.                           |

## Events

- `on:click`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
- `on:change`
- `on:input`
- `on:keydown`
- `on:keyup`
- `on:focus`
- `on:blur`
- `on:paste`
