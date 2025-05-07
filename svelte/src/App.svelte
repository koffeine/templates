<script>
import { route } from '@koffeine/svelte-router';

const RouteComponent = $derived($route.component);
</script>

<RouteComponent {...$route.params} />
