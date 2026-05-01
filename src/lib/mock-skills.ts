export const skills: SkillRecord[] = [
	{
		id: "skill_001",
		title: "TanStack Router Quickstart",
		slug: "tanstack-router-quickstart",
		description:
			"Creates a route structure, layouts and navigation patterns for a TanStack Router app.",
		category: "Frontend",
		tags: ["tanstack", "router", "react"],
		installCommand: "pnpm add @tanstack/react-router",
		createdAt: "2026-05-01T10:00:00.000Z",
		authorClerkId: "user_01",
		authorEmail: "dev@example.com",
	},
	{
		id: "skill_002",
		title: "Clerk Auth Setup",
		slug: "clerk-auth-setup",
		description:
			"Adds authentication providers, protected routes and session-aware UI state.",
		category: "Auth",
		tags: ["clerk", "auth", "security"],
		installCommand: "pnpm add @clerk/clerk-react",
		createdAt: "2026-05-01T11:15:00.000Z",
		authorClerkId: null,
		authorEmail: null,
	},
	{
		id: "skill_003",
		title: "Query Cache Inspector",
		slug: "query-cache-inspector",
		description:
			"Helps inspect, invalidate and hydrate TanStack Query state in complex apps.",
		category: "Data",
		tags: ["tanstack-query", "cache", "data-fetching"],
		installCommand: "pnpm add @tanstack/react-query",
		createdAt: null,
		authorClerkId: null,
		authorEmail: "ops@example.com",
	},
];
