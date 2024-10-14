import { type Entrypoint } from "uix/providers/entrypoints.ts";
import "common/theme.ts";

export default {
	'/': <a class="text-red-500" href="/backend">
		Hello, Frontend
	</a>
} satisfies Entrypoint;