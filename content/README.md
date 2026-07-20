# Microsites

`events.socialsamosa.in` hosts one microsite per event, each under its own slug:

```
/TheMarketingPulseSummit
/TheMarketingPulseSummit/agenda
/Awards
```

`/` redirects to `DEFAULT_MICROSITE` (`config/microsites.ts`) while a single
event is live. Change that one constant to repoint it — the legacy flat-route
redirects in `next.config.ts` follow automatically.

## Adding a microsite

1. Create `content/<Slug>/index.ts` with a default export of `MicrositeConfig`
   (`config/types.ts` is the full schema; copy `TheMarketingPulseSummit` as a
   starting point).
2. Add it to the `microsites` array in `config/microsites.ts`.

That's all. **Do not add route files** — `app/[microsite]/**` already serves
every event.

## How it fits together

| Piece | Role |
| --- | --- |
| `config/types.ts` | The schema every microsite conforms to. |
| `config/microsites.ts` | Registry + `DEFAULT_MICROSITE` + `PAGE_IDS`. |
| `content/<Slug>/` | One event's content, split by domain (event, jury, agenda…). |
| `app/[microsite]/` | Generic templates. They read config, never event names. |
| `lib/microsite.ts` | Slug → config, link prefixing, theme CSS. |
| `components/layout/MicrositeProvider.tsx` | Gives client components the active config. |

Notes worth knowing before you edit:

- **Pages are opt-in.** A sub-route exists only if the config has a `pages.<id>`
  entry; otherwise it 404s. No stub pages needed.
- **The home page is composed from `home.sections`** — order and membership are
  config, resolved through `components/sections/registry.ts`.
- **Write links microsite-relative** (`/agenda`, `/#conversations`). `Button`
  and the nav prefix the slug at render time. Absolute URLs, `mailto:` and
  `tel:` pass through untouched.
- **Assets stay root-absolute** (`/logos/…`) or on a CDN, so they resolve at any
  route depth. Per-event files belong in `public/<Slug>/`.
- **Theme token _names_ live in `app/globals.css`** — that `@theme` block is what
  generates the Tailwind utilities. A microsite's `theme` overrides their
  _values_ at `:root`; omit a token to inherit the default.
- **Configs cross the server/client boundary**, so they must stay
  JSON-serialisable: no React components or functions. Map icons by string key
  inside the component (see `kindIcon` in the agenda page).
