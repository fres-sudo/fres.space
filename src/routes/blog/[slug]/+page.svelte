<script lang="ts">
  //import { formatDate } from '$lib/utils'

  import Separator from "$lib/components/ui/separator/separator.svelte";
  import CopyCodeInjector from "$lib/components/CopyCodeInjector.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { ArrowLeft } from "lucide-svelte";

  export let data;
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <!-- Title -->
  <hgroup class="pt-24">
    <Button variant="outline" href="/blog"
      ><ArrowLeft class="h-4 w-4 mr-2" /> Go Back</Button
    >
    <h1>{data.meta.title}</h1>
    <p>Published at {data.meta.date}</p>
  </hgroup>

  <!-- Tags -->
  <div class="tags">
    {#each data.meta.categories as category}
      <span class="tag">&num;{category.text}</span>
    {/each}
  </div>

  <Separator class="mb-4" />

  <!-- Post -->

  <CopyCodeInjector>
    <div class="prose">
      <svelte:component this={data.content} />
    </div>
  </CopyCodeInjector>
</article>

<style>
  /* General article styling */
  article {
    max-width: 896px;
    min-width: 896px;
    margin: 2rem auto;
    padding: 2rem;
    color: #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  /* Title styling */
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
  }

  /* Date styling */
  h1 + p {
    font-size: 0.9rem;
    color: #9a9a9a;
    margin-bottom: 1.5rem;
  }

  /* Tags styling */
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tag {
    padding: 0.4rem 0.8rem;
    background-color: #333;
    color: #cfcfcf;
    border-radius: 20px;
    font-size: 0.85rem;
    transition: background-color 0.3s;
  }

  .tag:hover {
    background-color: #444;
  }

  /* Responsive adjustments */
  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }

    .prose {
      font-size: 0.95rem;
    }
  }
</style>
