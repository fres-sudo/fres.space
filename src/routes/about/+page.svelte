<script lang="ts">
  import AboutHeading from "$lib/components/AboutHeading.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Education from "$lib/components/Education.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
</script>

<main class="flex flex-col h-full max-w-6xl items-center justify-start pt-24">
  <AboutHeading />
  <div class="flex flex-col items-start justify-start pb-10">
    <h1 class="mx-10 font-serif font-bold text-4xl">
      <span class="text-fres-500">Pro</span>jects
    </h1>
    <Separator class="mx-10 my-4" />
    <Projects />
  </div>
</main>
