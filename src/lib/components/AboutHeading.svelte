<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="flex flex-col sm:flex-row w-full items-center justify-center pb-5">
  <img
    class="rounded-full mx-5 md:mx-10 w-56 md:w-64 lg:w-72"
    src={"/fres-logo-notag.webp"}
    alt="profile"
    width={100}
    height={100}
  />
  <div class="flex flex-col glassmorphism p-6 md:p-10 mt-6 md:mt-0">
    <div class="flex flex-col max-w-6xl sm:flex-row mb-5 sm:mb-0">
      <h1
        class="text-center text-white font-bold text-3xl sm:text-4xl mb-5 mt-5 sm:mt-0"
      >
        <span class="text-fres-500">Francesco</span> Calicchio
      </h1>
      <Button
        class="bg-fres-500 hover:bg-fres-600 px-10 sm:px-4 sm:mx-10"
        target="_blank"
        href="/CV_FRANCESCO_CALICCHIO.pdf">👀 See CV</Button
      >
    </div>
    <div class="flex flex-col md:flex-row">
      <h2
        class="flex flex-col w-full h-full items-start gap-y-2 text-start text-muted-foreground font-thin text-sm mt-2"
      >
        <p class="flex">
          👨🏻‍💻 Software Engineer @
          <a
            class="underline decoration-neutral-400 underline-offset-2"
            target="_blank"
            href="https://www.odoo.com"
          >
            Odoo</a
          >
        </p>
        <p class="flex">📍 Benevento, Italy</p>
        <p class="flex">👤 21 years old</p>
      </h2>
      <h2
        class="flex flex-col w-full h-full items-start gap-y-2 text-start text-muted-foreground font-thin text-sm md:ml-5 mt-2"
      >
        <p
          class="flex items-center text-start text-muted-foreground font-thin text-sm"
        >
          🎓 Computer Science @ Unicam
        </p>
        <p
          class="flex items-center text-start text-muted-foreground font-thin text-sm"
        >
          💌 francescocalicchio@hotmail.com
        </p>
        <p
          class="flex items-center text-start text-muted-foreground font-thin text-sm"
        >
          ☎️ +39 377 455 2296
        </p>
      </h2>
    </div>
  </div>
</div>
