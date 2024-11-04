<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { type Post } from "$lib/types";
  import { formatDate } from "$lib/utils";

  export let data: Post;

  const { title, description, date, image, categories, slug } = data;
</script>

<a href={`/blog/${slug}`} class="w-full mb-4">
  <Card.Root class="hover:bg-fres-900/20 w-full">
    <Card.Header class="grid sm:flex sm:flex-row sm:justify-between w-full ">
      <div class="space-y-1">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </div>
      <p class="text-muted-foreground text-sm">Updated {formatDate(date)}</p>
    </Card.Header>
    <Card.Content>
      <div class="flex flex-col">
        <div class="text-muted-foreground flex space-x-4 text-sm">
          {#each categories as category}
            <div class="flex items-center justify-center">
              <div
                class={`rounded-full w-3 h-3 mr-2 border-2 bg-${category.color}-500`}
              />
              {category.text}
            </div>
          {/each}
        </div>
      </div>
    </Card.Content>
  </Card.Root>
</a>
