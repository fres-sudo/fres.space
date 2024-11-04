<script lang="ts">
  import { Check, Copy } from "lucide-svelte";

  let copyButton: HTMLButtonElement;
  let showCheckmark = false;

  function handleClick() {
    const preTagSibling = copyButton.nextElementSibling as HTMLPreElement;

    navigator.clipboard.writeText(preTagSibling.innerText);

    showCheckmark = true;

    setTimeout(() => (showCheckmark = false), 1000);
  }
</script>

<button
  bind:this={copyButton}
  on:click={handleClick}
  class={`p-2 absolute top-2 right-2 rounded-md
  shadow-md text-sm font-thin border flex flex-row items-center justify-center
  ${showCheckmark ? "bg-green-900" : "bg-gray-700 hover:bg-gray-600"}`}
>
  {#if showCheckmark}
    <Check class="w-4 h-4 fill-green-300 mr-1" /> Copied!
  {:else}
    <Copy class="w-4 h-4 fill-white" />
  {/if}
</button>
