<script>
import { route } from '@koffeine/svelte-router';
</script>

<svelte:component this={$route.component} {...$route.params} />
