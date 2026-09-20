# PR fix (reference)

How Agent A responds to a recorded review. Independently evaluate every finding;
fix valid ones, document rejected ones on the PR. Never fake a fix.

## Decision rules

For every BLOCKING finding:

1. Inspect the cited code and surrounding context.
2. Decide whether the finding is technically valid.
3. If valid: implement the smallest correct production-grade fix, add/update
   relevant tests, and run appropriate validation.
4. If invalid or not applicable: do not make a fake fix; document the technical
   reason as a PR reply/comment so the next review has context.

For NON-BLOCKING findings: fix when low-risk and clearly beneficial; otherwise
leave them documented without expanding scope.

## Risk guardrails (hard stop -> require human decision)

Do not silently auto-change: authentication, authorization, business logic,
security boundaries, database migrations, multi-tenancy, or anything irreversible.
Flag these for explicit user direction.

## Quality gates (must pass before you consider the round done)

Run the repository's real scripts. Common examples:

```bash
# Rust backend
cargo fmt --all --check
cargo check --workspace
cargo clippy --workspace -- -D warnings
cargo test --workspace

# JS/TS frontend (use the repo's package manager: bun/pnpm/npm)
bun run typecheck
bun run lint
bun run test
```

If you only touched one crate/service, a matching subset is allowed, but log
exactly what you ran in the PR comment. If any gate fails, revert or mark manual
and STOP -- do not push a broken revision.

## After fixes

1. Confirm the worktree contains only intended changes.
2. Stage explicit paths only and commit (never `git add .`).
3. Push to the SAME source branch / SAME PR. Never open a new PR for a fix round.
4. Before pushing, confirm the remote head still equals the reviewed HEAD_SHA; a
   rejected non-fast-forward push or remote drift invalidates the round.
5. Capture the new HEAD_SHA.

If no code change is required because all findings are invalid/non-applicable,
record the reasoning on the PR and retain the current HEAD_SHA.

## Loop guard

Track normalized finding identity across rounds. Do not loop indefinitely on prose
variations of the same blocker; stop at `MAX_SAME_BLOCKER` without claiming success.
