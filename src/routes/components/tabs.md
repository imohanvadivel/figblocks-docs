---
title: Tabs
dir: components
description: Tabs organize content into multiple sections and allow users to navigate between them.
slug: tabs
url: /components/tabs
---

<script>
	import 'figblocks/globalStyles';
</script>

# Tabs

{description}

---

## Usage

- Import the `Tab` & `TabItem` components from "figBlocks".
- The `open` prop can be passed to open the `TabItem` by default.

```svelte example hideScript
<script>
	import { Tabs, TabItem } from 'figblocks';
</script>

<Tabs>
	<TabItem title="Design">First tab</TabItem>
	<TabItem title="Code" open>Second tab</TabItem>
</Tabs>
```

## Tab props

| Prop    | Type   | Default   | Description                      |
| ------- | ------ | --------- | -------------------------------- |
| `class` | string | undefined | Custom CSS classname for styling |

## TabItem props

| Prop    | Type    | Default | Description                                     |
| ------- | ------- | ------- | ----------------------------------------------- |
| `title` | string  | false   | Title of the tab.                               |
| `open`  | boolean | false   | If true, the TabItem will be opened by default. |

## TabItem events

- `on:click`
- `on:focus`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
