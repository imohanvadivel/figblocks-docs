<script lang="ts">
	import { drawer, theme } from '$lib/store.js';
	import DarkmodeIcon from '$lib/icons/Darkmode.svg';
	import GitHubIcon from '$lib/icons/Github.svg';
	import MenuIcon from '$lib/icons/Menu.svg';
	import SearchIcon from '$lib/icons/Search.svg';
	import { fade } from 'svelte/transition';
	import { tooltip } from '$lib/utils/tooltip.js';

	const version = `0.0.9`;
</script>

<header transition:fade>
	<div class="logo">
		<!-- Menu Icon -->
		<button class="icon-container menu-icon" on:click={drawer.toggle} aria-label="Toggle Menu">
			{@html MenuIcon}
		</button>

		<h1>Figblocks</h1>

		<span class="version">{version}</span>
	</div>

	<input
		class="global-search"
		type="search"
		placeholder="Search components, guidelines, resources..."
	/>

	<div class="right-part">
		<!-- Search Icon -->

		<!-- <button aria-label="search" type="button" title="Search" class="icon-container search">
			<span class="sr-only">Search Components, Guidelines, Resources and more</span>
			{@html SearchIcon}
		</button> -->

		<!-- GitHub Icon -->
		<a
			href="https://github.com/imohanvadivel/figblocks"
			class="icon-container"
			target="_blank"
			aria-label="View on GitHub"
			use:tooltip={`View on GitHub`}
		>
			<span class="sr-only">View on GitHub</span>
			{@html GitHubIcon}
		</a>

		<!-- DarkMode Icon -->
		<button
			use:tooltip={`Toggle Darkmode`}
			aria-label="dark mode"
			type="button"
			on:click={theme.toggle}
			class="icon-container"
		>
			<span class="sr-only">Toggle Darkmode</span>
			{@html DarkmodeIcon}
		</button>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		height: var(--sticky-header-height);
		border-bottom: 1px solid var(--color-border);
		background: var(--color-bg);
		grid-column: 1/-1;
		display: grid;
		align-items: center;
		grid-template-columns: var(--main-column);
		grid-column-gap: var(--main-column-gap);
		background-color: var(--color-bg);
		z-index: 10;
		/* padding: 0 .5rem; */
		/* margin: 0 1px; */
	}

	button {
		background-color: var(--color-bg);
		border: none;
		padding: 0;
	}

	.logo {
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
		margin-left: 1rem;
	}

	.version {
		padding: 1px 6px;
		border-radius: 4px;
		font-size: 0.875rem;
		font-weight: 400;
		user-select: none;
		color: var(--color-text-brand);
		/* color: var(--color-text-secondary); */
		background-color: var(--color-bg-brand-secondary);
		/* background-color: var(--color-bg-secondary); */
		border: 1px solid var(--color-border-brand);
		/* border: 1px solid var(--color-border); */
	}

	.icon-container.menu-icon {
		display: none;
		margin-left: -0.5rem;
		@media (--small-viewport) {
			display: block;
		}
	}

	.global-search {
		visibility: hidden;
	}

	@media (--small-viewport) {
		.icon-container {
			display: block;
		}
		.global-search {
			display: none;
		}
		/* .icon-container.search {
			display: block;
		} */
	}

	input {
		border: var(--color-border);
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: 4px;
		height: 2rem;
		grid-column: span 2;
		text-indent: 1rem;
		font-size: 0.875rem;
	}

	input::placeholder {
		color: var(--color-text-secondary);
	}

	.right-part {
		display: flex;
		column-gap: 0.5rem;
		grid-column-start: -2;
		justify-self: end;
		@media (--large-viewport) {
			justify-self: start;
		}
	}

	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 6px;
	}
	.icon-container:hover {
		background-color: var(--color-bg-secondary);
	}
	.icon-container:hover :global(path) {
		fill: var(--color-text);
	}
</style>
