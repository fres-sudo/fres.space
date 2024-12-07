## Load function

In #Svelte we can have two different way to load data from a #database or whatever, the function that handle this kind of calls is `load` function, in #SvelteKit we can find this function in two differente places:

- `+page.serve.ts` : in this file the load function runs only on the server instance and its is suitable for making #api calls and db query (SSR, Server Side Rendering).
- `+page.ts` : in this file the load function will run in both server and browser.

In both cases the load function returns an `object`:

```ts
export const load = async () => {
  return {} // the object we want to pass
}
```

If we want to retrive these data in the`+page.svelte` we can easy fetch these data via:

```html
<script>
  export let data : PageData;
</script>
```

by declaring `data`variable we basically retrieving the object that we passed from the `+page.server.ts`.

As i said before the `load` function is a very handy function that ensure the possibility of returning an object from the client or the server side of the application.

### Example

```ts
export const load = async ({ fetch }) => {
  fetch()
  return {} // the object we want to pass
}
```

If we want to retrive these data in the`+page.svelte` we can easy fetch these data via:

```html
<script>
  export let data : PageData;
</script>
```

What is importante is to notice that the `load` function will NOT being called when i force the navigation to a certain route, for example if i refresh the page.

In this particular case the fetch will not be made again, but the content (in this case the object we are trying to pass to the client) will be only re-rendered, but
