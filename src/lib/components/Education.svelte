<script lang="ts">
  import { CalendarRange } from "lucide-svelte";
  import Button from "./ui/button/button.svelte";
  import { Separator } from "./ui/separator";
</script>

<div class="flex flex-col h-full items-start mb-5">
  <div class="flex flex-row items-center justify-between">
    <h1 class="font-mono text-2xl mb-3">
      <span class="text-fres-500">Edu</span>cation
    </h1>
  </div>
  <h2 class="mx-8 font-semibold mb-2">
    Bachelor of <span class="text-fres-500">Computer Science</span>
    <span class="inline-block font-thin text-muted-foreground">
      📅 Oct 2022 - Jul 2025
    </span>
  </h2>
  <ul class="list-disc list-inside mx-10">
    <li class="text-muted-foreground">
      <span class="text-white">GPA: </span>3.5/4.0
    </li>
    <li class="text-muted-foreground">
      <span class="text-white">Main Course: </span>Algorithm and Data Structure,
      OOP, Computer Architecture, Linear Algebra, Probability and Statistics.
    </li>
  </ul>
</div>
