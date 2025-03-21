import { type Entrypoint } from "uix/providers/entrypoints.ts";
import "common/theme.ts";

export default {
	'/': <a class="text-yellow-500" href="/backend">
		Hello, Frontend
	</a>
} satisfies Entrypoint;