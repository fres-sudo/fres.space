<script lang="ts">
  import Separator from "./ui/separator/separator.svelte";
  import Button from "./ui/button/button.svelte";
</script>

<nav class="w-full h-20 items-start">
  <div class="flex w-full items-center justify-center font-mono text-sm">
    <div class="flex h-3 items-center space-x-2 sm:space-x-4 text-sm">
      <Button href="/blog" variant="ghost">Blog</Button>
      <Separator orientation="vertical" />
      <Button href="/" variant="outline" class="text-fres-500">
        Fres Space
      </Button>
      <Separator orientation="vertical" />
      <Button variant="ghost" href="/about">About</Button>
    </div>
  </div>
  <Separator class=" my-10" />
</nav>
