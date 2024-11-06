<script lang="ts">
  import { Github, Linkedin, Instagram } from "lucide-svelte";
  import Separator from "./ui/separator/separator.svelte";
</script>

<footer
  class="flex flex-col w-screen h-full justify-end items-center place-items-end"
>
  <Separator class="w-full" />
  <h1 class="pt-5 font-mono">You can find me here</h1>
  <div class="flex w-20 items-center mt-2 md:my-6 space-x-4 justify-center">
    <a
      target="_blank"
      class="hover:underline"
      href="https://github.com/fres-sudo/"
    >
      <Github class="m-1" />
    </a>

    <Separator orientation="vertical" />
    <a
      target="_blank"
      class="hover:underline"
      href="https://linkedin.com/in/francesco-calicchio/"
    >
      <Linkedin class="m-1" />
    </a>
    <Separator orientation="vertical" />
    <a
      target="_blank"
      class="hover:underline"
      href="https://instagram.com/aka_fres/"
    >
      <Instagram class="m-1" />
    </a>
  </div>
</footer>
