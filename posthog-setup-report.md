<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the **Skilled** TanStack Start application. PostHog is initialized client-side via `PostHogProvider` in the root route (`__root.tsx`), wrapping the entire app with EU-region hosting, exception capture, and a Vite reverse proxy for reliable event ingestion. A singleton server-side `posthog-node` client was created at `src/utils/posthog-server.ts` for future API route instrumentation. Four user-action events are tracked across the home page and skill card components.

| Event | Description | File |
|---|---|---|
| `skill_install_command_copied` | User copies a skill's install command | `src/components/SkillCard.tsx` |
| `skill_opened` | User clicks the "Open" link on a SkillCard | `src/components/SkillCard.tsx` |
| `browse_registry_clicked` | User clicks the "Browse Registry" CTA on the home page | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks the "Publish Skill" CTA on the home page | `src/routes/index.tsx` |

## Files changed

- `src/routes/__root.tsx` — Added `PostHogProvider` wrapping the app with EU host, reverse proxy, and exception capture enabled
- `src/routes/index.tsx` — Added `browse_registry_clicked` and `publish_skill_clicked` event capture on CTA button clicks
- `src/components/SkillCard.tsx` — Added `skill_install_command_copied` (on copy button) and `skill_opened` (on Open link click) event capture
- `src/utils/posthog-server.ts` — New singleton `posthog-node` client for server-side tracking
- `vite.config.ts` — Added reverse proxy routes for `/ingest`, `/ingest/static`, `/ingest/array` pointing to EU PostHog endpoints
- `.env` — Added `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST`

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics](https://eu.posthog.com/project/170285/dashboard/655494)
- **Insight**: [Skill engagement over time](https://eu.posthog.com/project/170285/insights/ot1KlZxj) — Daily trend of all 4 events
- **Insight**: [Skill discovery to install funnel](https://eu.posthog.com/project/170285/insights/yb4cQgfI) — Conversion funnel: browse → open → copy
- **Insight**: [Most copied skills](https://eu.posthog.com/project/170285/insights/RPbv98Aj) — Top skills by install command copies
- **Insight**: [CTA clicks: Browse vs Publish](https://eu.posthog.com/project/170285/insights/v3foPuAk) — Home page CTA comparison
- **Insight**: [Total install commands copied (30d)](https://eu.posthog.com/project/170285/insights/nGZK29sJ) — Single KPI metric

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
