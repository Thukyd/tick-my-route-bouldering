const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/settings.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/history.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/settings.svelte
	[/^\/settings\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/history.svelte
	[/^\/history\/?$/, [c[0], c[5]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];