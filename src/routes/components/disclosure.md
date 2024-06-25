---
title: Disclosure
dir: components
description: A disclosure allows users to expland/collapse the high-level options to reveal more information.
slug: disclosure
url: /components/disclosure
---

# Disclosure

{description}

---

<script>
	import 'figblocks/globalStyles'; 
  import Table from '$lib/components/Table.svelte';

	const disclosureProps = [
		['Prop', 'Type', 'Default', 'Description'],

		['border', 'boolean', 'true', 'If true, the border separator between the sections is displayed.'],
		['class', 'string', 'undefined', 'Custom CSS classname for styling.'],
	]

	const disclosureItemProps = [
		['Prop', 'Type', 'Default', 'Description'],

		['title', 'string', '""', 'Title of the disclosure item.'],
		['open', 'boolean', 'false', 'If true, the DisclosureItem will be opened by default.'],
	]
</script>

## Usage

- Import the `Disclosure`, `DisclosureItem` components from "figBlocks".
- The `open` prop can be passed to open the `disclosureItem` by default.

```svelte example
<script>
	import { Disclosure, DisclosureItem } from 'figblocks';
</script>

<Disclosure>
	<DisclosureItem title="First" open>First item</DisclosureItem>
	<DisclosureItem title="Second">Second item</DisclosureItem>
</Disclosure>
```

## Borders

The border separator between sections can be removed by setting the `border` prop to false.

```svelte example hideScript
<script>
	import { Disclosure, DisclosureItem } from 'figblocks';
</script>

<Disclosure border={false}>
	<DisclosureItem title="First" open>First item</DisclosureItem>
	<DisclosureItem title="Second">Second item</DisclosureItem>
</Disclosure>
```

## Section

The disclosure title can be made bold by passing the `section` prop.

```svelte example hideScript
<script>
	import { Disclosure, DisclosureItem } from 'figblocks';
</script>

<Disclosure>
	<DisclosureItem title="Disclosure" section>disclousure item</DisclosureItem>
</Disclosure>
```

## Disclosure props

| Prop     | Type    | Default   | Description                                                      |
| -------- | ------- | --------- | ---------------------------------------------------------------- |
| `border` | boolean | true      | If true, the border separator between the sections is displayed. |
| `class`  | string  | undefined | Custom CSS classname for styling.                                |

## DisclosureItem props

| Prop      | Type    | Default | Description                                              |
| --------- | ------- | ------- | -------------------------------------------------------- |
| `title`   | string  | ""      | Title of the disclosure item.                            |
| `open`    | boolean | false   | If true, the DisclosureItem will be opened by default.   |
| `section` | boolean | false   | If true, the Disclosure header will be rendered in bold. |

## Disclosure slots

- `default`

## DisclosureItem slots

- `default`

## DisclosureItem events

- `on:animationend`
- `on:click`
- `on:focus`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
- `on:keydown`
