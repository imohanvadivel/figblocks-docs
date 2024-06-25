<script lang="ts">
	import colorData from '$lib/utils/colorData.json';
	import ColorTable from './ColorTable.svelte';

	function parseColor(str: string): [string, string] {
		let [color, code] = str.split(':').map((e) => e.trim());
    // if(code.length === 7) code = code + 'FF';
    return [color, code];
	}

	let lightBg = colorData.light.bg.map(parseColor);
	let darkBg = colorData.dark.bg.map(parseColor);
	let lightBorder = colorData.light.border.map(parseColor);
	let darkBorder = colorData.dark.border.map(parseColor);
	let lightText = colorData.light.text.map(parseColor);
	let darkText = colorData.dark.text.map(parseColor);
	let lightIcon = colorData.light.icon.map(parseColor);
	let darkIcon = colorData.dark.icon.map(parseColor);
</script>

<section>
	<h2>Background</h2>
	<ColorTable lightColors={lightBg} darkColors={darkBg} />

	<h2>Border</h2>
	<ColorTable lightColors={lightBorder} darkColors={darkBorder} />
  
  <h2>Text</h2>
	<ColorTable lightColors={lightText} darkColors={darkText} />

  <h2>Icon</h2>
  <ColorTable lightColors={lightIcon} darkColors={darkIcon} />
</section>

<style>
</style>
