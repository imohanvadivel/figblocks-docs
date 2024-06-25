<script lang="ts">
	import Code from '$lib/customComponent/code.svelte';
	import { toastMessage } from '$lib/store';
	import colorData from '$lib/utils/colorData.json';

	function handleClick(value: string, type: string = 'hex') {
		value = value.toUpperCase();
		navigator.clipboard.writeText(value);
		type === 'hex'
			? toastMessage.set(`Hex code ${value} has been copied to the clipboard.`)
			: toastMessage.set(`The token "${value}" has been copied to the clipboard.`);
	}

	export let lightColors: [string, string][];
	export let darkColors: [string, string][];
	// export let light: string[];
	// export let dark: string[];

	// function parseColor(str: string): [string, string] {
	// 	let [color, code] = str.split(':').map((e) => e.trim());
	// 	// if(code.length === 7) code = code + 'FF';
	// 	return [color, code];
	// }

	// console.log(light, dark);

	// let lightColors = light.map(parseColor);
	// let darkColors = dark.map(parseColor);
</script>

<div class="table-wrapper">
	<table>
		<thead>
			<tr>
				<th>Variable</th>
				<th>Light Mode</th>
				<th>Dark Mode</th>
			</tr>
		</thead><tbody>
			{#each lightColors as color, i}
				<tr>
					<td on:click={() => handleClick(color[0], 'token')}><Code>{color[0]}</Code></td>
					<td class="hex-cnt" on:click={() => handleClick(color[1])}>
						<div class="right-part">
							<span class="color-tile" style="background-color: {color[1]};" />
							<span>{color[1]}</span>
						</div>
					</td>
					<td class="hex-cnt" on:click={() => handleClick(darkColors[i][1])}>
						<div class="right-part">
							<span class="color-tile" style="background-color: {darkColors[i][1]};" />
							<span>{darkColors[i][1]}</span>
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.color-tile {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 0.125rem;
	}

	.right-part {
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
		text-transform: uppercase;
		color: var(--color-text);
		font-feature-settings: 'kern' 1, 'tnum' 1;
	}
	td {
		cursor: default;
	}
	td:hover {
		background-color: var(--color-bg-tertiary);
		cursor: default;
	}

	/* Table */
	.table-wrapper {
		display: inline-block;
		border: 1px solid var(--color-border);
		border-radius: 4px;
		width: fit-content;
		min-width: var(--min-width);
	}
	table {
		border-collapse: collapse;
		border-style: hidden;
		width: 100%;
	}
	table :global(tbody tr:hover) {
		background-color: var(--color-bg-secondary);
	}

	table :global(tr td code) {
		margin: 0 -0.25rem;
	}
	th {
		user-select: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
		font-size: 0.75rem;
		color: var(--color-text);
		border-bottom: 1px solid var(--color-border);
		border-right: 1px solid var(--color-border);
		padding: 0.5rem 1rem;
		text-align: left;
	}
	td {
		border-bottom: 1px solid var(--color-border);
		padding: 0.5rem 1rem;
		text-align: left;
		font-size: 0.875rem;
		border-right: 1px solid var(--color-border);
	}
</style>
