import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { LibStore } from '$lib/types.js';

export const currentPage = writable<string>('home');

export function createThemeStore() {
	const { subscribe, update } = writable<'light' | 'dark'>('light');

	if (browser) {
		document.documentElement.classList.add('figma-light');
	}

	function toggle() {
		update((theme) => {
			const root = document.documentElement.classList;

			if (theme === 'light') {
				if (root.contains('docs-theme-light')) root.remove('docs-theme-light');
				root.add('docs-theme-dark');

				if (root.contains('figma-light')) root.remove('figma-light');
				root.add('figma-dark');

				return 'dark';
			} else {
				if (root.contains('docs-theme-dark')) root.remove('docs-theme-dark');
				root.add('docs-theme-light');

				if (root.contains('figma-dark')) root.remove('figma-dark');
				root.add('figma-light');

				return 'light';
			}
		});
	}

	return {
		subscribe,
		toggle
	};
}
export const theme = createThemeStore();

function createLibStore() {
	const { subscribe, set, update } = writable<LibStore>('light');

	if (browser) {
		document.documentElement.classList.add('figma-light');
	}

	subscribe((state) => {
		if (!browser) return;
		const root = document.documentElement.classList;

		if (state === 'light') {
			if (root.contains('figma-dark')) root.remove('figma-dark');
			root.add('figma-light');
		} else {
			if (root.contains('figma-light')) root.remove('figma-light');
			root.add('figma-dark');
		}
	});

	return { subscribe, set, update };
}
export const libStore = createLibStore();

function createDrawerStore() {
	const { subscribe, update } = writable(false);

	function toggle() {
		update((state) => {
			if (!state) {
				document.documentElement.style.overflow = 'hidden';
			} else {
				document.documentElement.style.overflowY = 'auto';
			}

			return !state;
		});
	}

	return {
		subscribe,
		toggle
	};
}
export const drawer = createDrawerStore();

export const toastMessage = writable<string>('');

export const intersection = writable<string>('');

/*============== Viewport Stores ==============*/

// function createLargeViewportStore() {
// 	const { subscribe, set } = writable(false);

// 	if (browser) {
// 		set(window.innerWidth < 960 && window.innerWidth >= 640);

// 		window.addEventListener('resize', () => {
// 			set(window.innerWidth < 960 && window.innerWidth >= 640);
// 		});
// 	}

// 	return {
// 		subscribe
// 	};
// }
// export const largeViewport = createLargeViewportStore();

// function createSmallViewportStore() {
// 	const { subscribe, set } = writable(false);

// 	if (browser) {
// 		set(window.innerWidth < 640);

// 		window.addEventListener('resize', () => {
// 			set(window.innerWidth < 640);
// 		});
// 	}

// 	return {
// 		subscribe
// 	};
// }
// export const smallViewport = createSmallViewportStore();
