<script lang="ts">
  import AboutHeading from "$lib/components/AboutHeading.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Education from "$lib/components/Education.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
</script>

<main class="flex flex-col h-full max-w-6xl items-center justify-start pt-0 sm:pt-24">
  <AboutHeading />
  
    <Projects />
  
</main>
