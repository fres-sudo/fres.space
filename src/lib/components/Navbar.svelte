<script lang="ts">
  import Separator from "./ui/separator/separator.svelte";
  import Button from "./ui/button/button.svelte";
</script>

<nav class="w-full h-24 flex items-center justify-center shadow-md fixed top-0 left-0 z-10 nav-bar-glassmorphism">
  <div class="flex items-center space-x-4 font-mono text-sm">
    <Button href="/blog" variant="ghost">Blog</Button>
    <Separator orientation="vertical" class="h-6" />
    <Button href="/" variant="outline" class="text-fres-500">Fres Space</Button>
    <Separator orientation="vertical" class="h-6" />
    <Button variant="ghost" href="/about">About</Button>
  </div>
  <Separator orientation="horizontal" class="w-full absolute bottom-0" />
</nav>

