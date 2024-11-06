<script>
  import { Badge } from "$lib/components/ui/badge/index.ts";
  import Button from "./ui/button/button.svelte";
  import { ArrowUpRight } from "lucide-svelte";

  export let project ;
</script>

<div class="glassmorphism flex flex-col p-8 md:mr-4 my-4 xl:my-0 w-80 sm:w-96 justify-between">
  <p class="text-muted-foreground text-sm font-mono mb-4">March 12, 2024</p>
  <img
    class="w-16 h-16 rounded-full border-2 border-white object-cover mb-4"
    src={project.imageUrl}
    alt="project"
  />
  <h1 class="text-xl font-semibold mb-2">{project.title}</h1>
  <p class="text-muted-foreground text-sm font-thin mb-4">
    {project.description}
  </p>
  <div class="grid-flow-col-dense space-x-2 space-y-1 mb-6">
    {#each project.badges as badge}
      <Badge class="bg-muted text-muted-foreground">{badge}</Badge>
    {/each}
  </div>

  <div class="flex flex-row justify-between items-center">
    <Button href={project.githubUrl} target="_blank" variant="outline"
      ><ArrowUpRight class="w-3 h-3 mr-2" /> Github</Button
    >
    <Button
      class="bg-fres-500 hover:bg-fres-600"
      target="_blank"
      href={project.projectUrl}
      ><ArrowUpRight class="w-3 h-3 mr-2" /> Live</Button
    >
  </div>
</div>
