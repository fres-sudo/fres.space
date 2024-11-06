<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
  import { ModeWatcher, setMode } from "mode-watcher";

  setMode("dark");
</script>

<ModeWatcher defaultMode="dark" />

<Navbar />

<!-- Main container with min-h-screen to keep the footer at the bottom -->
<div class="flex flex-col min-h-screen">
  <main class="p-6 sm:p-10 flex-grow flex flex-col items-center justify-center pt-48">
    <slot />
  </main>
  <Footer />
</div>
