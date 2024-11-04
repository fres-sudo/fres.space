<script>
  import { page } from "$app/stores";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="flex flex-col justify-center items-center">
  <h2 class="text-center font-thin text-ml text-muted-foreground">
    Damn...something went wrong, I hope it wont happen again bro.<br />
  </h2>
  <div
    class="border rounded-lg items-center justify-center pt-4 pb-10 px-10 my-4"
  >
    <h1 class="text-center font-serif font-bold text-5xl md:text-7xl my-3">
      <span class="text-fres-500">{$page.status}</span>
    </h1>
    <h2 class="text-center font-thin text-ml">
      {$page.error.message}
    </h2>
  </div>

  <h2 class="text-center font-thin text-ml text-muted-foreground mb-4">
    C'mon just go back to the home page<br />
  </h2>
  <Button variant="outline" href="/">Home Page</Button>
</div>
