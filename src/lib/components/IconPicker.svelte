<script lang="ts">
	import { Icon } from 'figblocks';
	import * as icons from 'figblocks/icons';
	import { toastMessage } from '$lib/store';
	import { tr } from '$lib/customComponent/componentLayout.svelte';

	let inputisFocused = false;
	let searchby = '';
	function splitOnCaps(str: string) {
		let strAry = str.match(/[A-Z][a-z]+/g);
		return strAry?.slice(1).join(' ');
	}

	const allIcons = Object.keys(icons).map((e) => ({
		name: splitOnCaps(e),
		svg: icons[e as keyof typeof icons],
		value: e
	}));

	let iconAry = [...allIcons];

	// copy to clipboard
	function handleClick(value: string) {
		navigator.clipboard.writeText(value);
		toastMessage.set(`The icon name "${value}" has been copied to the clipboard.`);
	}

	function handleSearch(ev: Event) {
		const query = ev.target?.value;
		if (query === '') {
			iconAry = [...allIcons];
		} else {
			iconAry = allIcons.filter((icon) => icon.name?.toLowerCase().includes(query.toLowerCase()));
		}
	}
</script>

<div class="wrapper">
	<div class="search-cnt">
		<Icon
			iconSvg={icons.IconSearch}
			color={inputisFocused ? '--color-text' : '--color-text-secondary'}
		/>
		<input
			class="search"
			type="search"
			bind:value={searchby}
			placeholder="Search Icons"
			on:input={handleSearch}
			on:focus={() => (inputisFocused = true)}
			on:blur={() => (inputisFocused = false)}
		/>
		<div class="close-icon" class:active={searchby.length > 0}>×</div>
	</div>

	{#if iconAry.length === 0}
		<p class="no-icons">No icons found</p>
	{/if}

	<section>
		{#each iconAry as icon}
			<button data-value={icon.value} on:click={() => handleClick(icon.value)}>
				<Icon iconSvg={icon.svg} />
				<span class="figma-font-ui11">{icon.name}</span>
			</button>
		{/each}
	</section>
</div>

<style>
	.wrapper {
		grid-column: span 4;
		max-width: 47rem;
	}
	.search-cnt {
		position: relative;
		width: fit-content;
	}
	.search-cnt :global(.icon-component) {
		position: absolute;
		top: 1rem;
		left: 0.125rem;
	}
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
		grid-auto-rows: 6rem;
		cursor: auto;
		width: 100%;
		margin-bottom: 5rem;
	}

	button {
		display: grid;
		justify-items: center;
		box-shadow: inset 0 0 0 1px var(--color-border);
		margin-right: -1px;
		margin-top: -1px;
		row-gap: 0.5rem;
		padding: 1rem 0.5rem 0.5rem 0.5rem;
		border: none;
		outline: none;
		background-color: var(--color-bg);
		overflow: hidden;
	}

	button:hover {
		box-shadow: inset 0 0 0 2px var(--color-border-brand-strong);
		z-index: 5;
		background-color: var(--figma-color-bg-brand-tertiary);
	}
	button:active {
		box-shadow: inset 0 0 0 2px var(--color-border);
		background-color: var(--color-bg);
	}

	span {
		color: var(--color-text-secondary);
		text-align: center;
		user-select: none;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2; /* Limit to 2 lines */
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	button:hover span {
		color: var(--color-text);
	}
	.search {
		color: var(--color-text);
		border: var(--color-border);
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: 4px;
		height: 2rem;
		grid-column: span 2;
		padding: 0 1rem;
		font-size: 0.875rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		text-indent: 1rem;
		width: 14rem;
	}
	input[type='search']::-webkit-search-cancel-button {
		-webkit-appearance: none;
		appearance: none;
		height: 1em;
		width: 4em;
	}
	.close-icon {
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		color: var(--color-text);
		display: none;
		pointer-events: none;
		cursor: default;
	}
	.close-icon.active {
		display: block;
	}

	.search:focus {
		outline: 2px solid var(--color-border-brand-strong);
	}

	.no-icons {
		text-align: center;
		color: var(--color-text-secondary);
		padding: 6rem 0;
	}
</style>
