<script lang="ts">
	import '../app.css';
	import 'figblocks/figmaTheme';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Toast from '$lib/components/Toast.svelte';

	export let data;
</script>

<Header />
<Sidebar navList={data.navList} />
<slot />

<Toast />
