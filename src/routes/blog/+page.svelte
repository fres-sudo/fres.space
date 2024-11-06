<script lang="ts">
  import { Separator } from "$lib/components/ui/separator";
  import BlogPost from "$lib/components/BlogPost.svelte";

  export let data;
</script>

<main class="flex flex-col h-full w-full max-w-4xl items-start justify-start pt-24">
  <h1 class="font-serif font-bold text-4xl">
    <span class="text-fres-500">B</span>log
  </h1>
  <Separator class="my-4" />
  {#each data.posts as post}
    <BlogPost data={post} />
  {/each}
</main>
