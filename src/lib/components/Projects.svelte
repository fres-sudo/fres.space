<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
  import ProjectCard from "./ProjectCard.svelte";
	import { Separator } from "./ui/separator";

  const projects = [
    {
      title: "Pomo",
      description:
        "A simpler and minimal way to organize your study and your project. ",
      imageUrl: "/pomo.png",
      projectUrl: "https://pomo.fres.space",
      githubUrl: "https://github.com/fres-sudo/pomo",
      badges: ["Flutter", "Dart", "Hono", "Bun", "PostgreSQL"],
    },
    {
      title: "Form Wizard",
      description: "Build and share form in a snap.",
      imageUrl: "/form-wizard.png",
      projectUrl: "https://formwizard.fres.space",
      githubUrl: "https://github.com/fres-sudo/form-wizard",
      badges: ["NextJs", "Typescript", "React", "Prisma", "PostgreSQL"],
    },
    {
      title: "Arduino Speedometer",
      description:
        "Blazing fast Bicycle Arduino Speedometer built with direct register access and timer interrupts.",
      imageUrl: "/arduino.png",
      projectUrl: "https://wokwi.com/projects/370181612744975361",
      githubUrl: "https://github.com/fres-sudo/arduino.speedometer",
      badges: ["Arduino", "Assembly", "C++"],
    },
  ];
</script>

<div class="flex flex-col items-start justify-start pb-10">
    <h1 class="font-serif font-bold text-4xl">
      <span class="text-fres-500">Pro</span>jects
    </h1>
    <Separator class="my-4" />
<div class="flex flex-col h-full items-start mx-0 md:mx-8">
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-0 md:space-x-2">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</div>
</div>
