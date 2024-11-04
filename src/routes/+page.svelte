<script lang="ts">
  import { Separator } from "$lib/components/ui/separator";
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    Github,
    Linkedin,
    Instagram,
    ChevronLeft,
    ChevronRight,
  } from "lucide-svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<main class="items-center justify-center px-12 sm:px-24 py-10">
  <div class="w-full h-full items-start">
    <div class="relative flex flex-col items-center place-items-center">
      <h2 class="text-center font-thin text-ml text-muted-foreground">
        Hi, I am <br />
      </h2>
      <h1
        class="text-center text-white font-serif font-bold text-5xl md:text-7xl"
      >
        <span class="text-fres-500">Francesco</span> Calicchio
      </h1>
      <div class="flex flex-col w-[15rem] md:w-[25rem]">
        <p class="font-thin text-center text-sm md:text-ml py-6">
          Welcome to my space, here you can find more <a
            class="text-fres-500 hover:underline"
            href="/about">about me</a
          >, my interest, and you can broswe through my mind.
        </p>
        <p
          class="font-mono text-muted-foreground text-center text-[12px] md:text-ml"
        >
          You can also call me <span class="hover:text-fres-500">fres</span>.
        </p>
      </div>
      <div class="flex flex-row items-center justify-center gap-4 mt-6">
        <Button variant="outline" href="/blog"
          ><ChevronLeft class="h-4 w-4 mr-2" /> Blog</Button
        >
        <Button variant="outline" href="/about">
          About<ChevronRight class="h-4 w-4 ml-2" /></Button
        >
      </div>
    </div>
  </div>
</main>
