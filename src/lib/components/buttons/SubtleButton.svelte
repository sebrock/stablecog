<script lang="ts">
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import type { THrefTarget } from '$ts/types/main';

	export let onClick: (() => void) | undefined = undefined;
	export let state: 'idle' | 'success' | 'danger' = 'idle';
	export let href: string | undefined = undefined;
	export let download: string | undefined = undefined;
	export let noPadding = false;
	export let prefetch = false;
	export { classes as class };
	export let disabled = false;
	export let loading = false;
	export let target: THrefTarget = '_self';
	let classes = '';
</script>

{#if href}
	<a
		on:click={onClick}
		{href}
		{download}
		{target}
		data-sveltekit-prefetch={prefetch && target === '_self' ? '' : 'off'}
		class="{state === 'success'
			? 'bg-c-success ring-c-success text-c-on-primary'
			: 'bg-c-bg-secondary ring-c-bg-tertiary text-c-on-bg'} {noPadding
			? ''
			: 'px-3 py-2.5'} shadow-lg shadow-c-shadow/[var(--o-shadow-strong)]
    	rounded-lg font-bold transition text-xs ring-2 relative overflow-hidden z-0 group {classes}"
	>
		<div class="w-[200%] h-full absolute left-0 top-0 flex items-center justify-center">
			<div
				class="{state === 'success'
					? 'bg-c-success translate-x-[-45%]'
					: 'bg-c-bg-tertiary'} w-full aspect-square origin-left rounded-full transition transform -translate-x-full {!$isTouchscreen
					? 'group-hover:translate-x-[-45%]'
					: ''} {loading ? 'translate-x-[-45%]' : ''}"
			/>
		</div>
		<div
			class="relative flex items-center justify-center text-center transition-none {state ===
			'success'
				? 'text-c-on-primary'
				: state === 'danger'
				? 'text-c-on-primary'
				: 'text-c-on-bg'}"
		>
			<slot />
		</div>
	</a>
{:else}
	<button
		type="button"
		on:click={onClick}
		disabled={disabled || loading}
		class="{state === 'success'
			? 'bg-c-success ring-c-success'
			: state === 'danger'
			? 'bg-c-danger ring-c-danger'
			: 'bg-c-bg-secondary ring-c-bg-tertiary'} {noPadding
			? ''
			: 'px-3 py-2.5'} shadow-lg shadow-c-shadow/[var(--o-shadow-strong)]
    	rounded-lg font-bold transition text-xs ring-2 relative overflow-hidden z-0 group {classes}"
	>
		<div class="w-[200%] h-full absolute left-0 top-0 flex items-center justify-center">
			<div
				class="{state === 'success'
					? 'bg-c-success translate-x-[-45%]'
					: state === 'danger'
					? 'bg-c-danger translate-x-[-45%]'
					: 'bg-c-bg-tertiary'} w-full aspect-square origin-left rounded-full transition transform -translate-x-full {!$isTouchscreen
					? 'group-enabled:group-hover:translate-x-[-45%]'
					: ''} {loading ? 'translate-x-[-45%]' : ''}"
			/>
		</div>
		<div
			class="relative flex items-center justify-center text-center transition-none {state ===
			'success'
				? 'text-c-on-primary'
				: state === 'danger'
				? 'text-c-on-primary'
				: 'text-c-on-bg'}"
		>
			<slot />
		</div>
	</button>
{/if}
