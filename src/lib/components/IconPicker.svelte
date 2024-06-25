<script lang="ts">
	import { Icon } from 'figblocks';
	import * as icons from 'figblocks/icons';
	import { toastMessage } from '$lib/store';

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
	<input class="search" type="search" placeholder="Search Icons" on:input={handleSearch} />

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
		box-shadow: inset 0 0 0 2px var(--color-border-strong);
		z-index: 5;
		background-color: var(--color-bg-secondary);
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

	.search {
		border: var(--color-border);
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: 4px;
		height: 2rem;
		grid-column: span 2;
		/* text-indent: 1rem; */
		padding: 0 1rem;
		font-size: 0.875rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.search:focus {
		outline: 2px solid var(--color-text);
	}

	.no-icons {
		text-align: center;
		color: var(--color-text-secondary);
		padding: 6rem 0;
	}
</style>
