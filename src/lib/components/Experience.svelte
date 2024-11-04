<script lang="ts">
  import { CalendarRange } from "lucide-svelte";
  import Button from "./ui/button/button.svelte";
  import { Separator } from "./ui/separator";
  import { Badge } from "$lib/components/ui/badge/index.js";
</script>

<div class="flex flex-col h-full items-start mx-1">
  <div class="flex flex-row items-start w-full">
    <h1 class="font-mono text-2xl mb-3">
      <span class="text-fres-500">Exp</span>erience
    </h1>
  </div>
  <h2 class="mx-4 font-semibold mb-2">
    - Software Engineer Intern
    <span class="inline-block text-muted-foreground font-thin">
      📅 Oct 2024 - Jan 2025
    </span>
  </h2>
  <ul class="list-disc list-inside mx-10">
    <li class="text-muted-foreground font-thin pb-1">In progress</li>
    <Badge class="bg-muted text-muted-foreground">Tyepscript</Badge>
    <Badge class="bg-muted text-muted-foreground">Python</Badge>
  </ul>

  <h2 class="mx-4 font-semibold my-2">
    - Mobile Developer Freelance <span
      class="inline-block font-thin text-muted-foreground"
    >
      📅 Sept 2023 - Now
    </span>
  </h2>
  <ul class="list-disc list-inside mx-10">
    <li class="text-muted-foreground">
      Engineered high-performance <span class="text-white">cross-platform</span>
      mobile applications for iOS and Android using
      <span class="text-white">Flutter</span>.
    </li>
    <li class="text-muted-foreground">
      Result in a <span class="text-white">40% increase</span> in user
      engagement and a
      <span class="text-white">25% improvement</span> in app loading speed.
    </li>
    <li class="text-muted-foreground pb-1">
      Integrated REST APIs, structured mobile application architecture using <span
        class="text-white">Bloc</span
      >/Cubit pattern, Provider, <br /> Dio, Retrofit and other well known packages.
    </li>
    <Badge class="bg-muted text-muted-foreground">Flutter</Badge>
    <Badge class="bg-muted text-muted-foreground">Dart</Badge>
  </ul>
</div>
