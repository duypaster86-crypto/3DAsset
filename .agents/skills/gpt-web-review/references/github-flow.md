# GitHub flow (reference)

Safe git/branch/PR workflow with zero code loss. Merge and branch-deletion honor
the caller's `merge_mode` / `delete_branch`.

## Inspect (before any git write)

- Repository root and applicable instructions (`AGENTS.md`, CONTRIBUTING, etc.).
- Current branch, `git status`, staged and unstaged changes.
- Remotes, upstream, and the REAL default branch (detect; never assume `main`).
- Existing PRs for the source branch, including fork ownership.
- Live PR node id, state, draft status, base ref/SHA, head ref/SHA.

Preserve unrelated user work. Never stash, discard, reset, or stage it. If
intended and unrelated changes overlap so they cannot be separated safely, stop
for user direction.

## Branch

If on a protected/default branch, create a short-lived task branch first:

```bash
git checkout -b feature/<task-id>-<short-desc>
# fix/... hotfix/... chore/... docs/... refactor/... as appropriate
git branch   # confirm the * is on your feature branch
```

Never commit or push directly to the protected/default branch.

## Validate and publish

1. Run repository-prescribed tests, lint, typecheck, build, migrations, or
   targeted validation appropriate to the change.
2. Inspect the COMPLETE PR diff and commit range for secrets, private data,
   generated artifacts, binaries, accidental files, and unintended scope.
3. Stage explicit intended paths only. Never use `git add .`, `git add -A`, or
   `git add --all`.
   ```bash
   git add path/to/file1 path/to/file2
   git commit -m "feat(scope): concise description"
   ```
4. Push without force. First push: `git push -u origin <branch>`; later: `git push`.
   Before pushing, confirm the remote branch has not advanced from the expected
   old head. A non-fast-forward result is a concurrency signal: stop, fetch
   read-only context, and re-evaluate rather than silently rebasing a reviewed
   change. Never force-push a shared branch.
5. Create the PR into `target_branch`, or reuse the existing PR whose repository,
   source branch owner/ref, and target branch match. Never open a duplicate PR
   for a normal fix round.
   ```bash
   gh pr create --base <target_branch> --head <branch> --title "..." --body "..."
   ```
6. PR body must state scope, validation actually run, results, and known
   limitations. Do not claim skipped checks passed.
7. After publishing, query GitHub and capture the authoritative PR node id,
   BASE_SHA, and HEAD_SHA.

## Sync with target branch (when it advances during work)

```bash
git fetch origin
git log --oneline <branch>..origin/<target_branch>   # any new commits?
git merge origin/<target_branch>    # or: git rebase origin/<target_branch>
# resolve conflicts, then:
git add <resolved-files> && git commit
git push
```

## Final readiness (before merge)

Evaluate required checks for the approved HEAD_SHA. Follow branch-protection
semantics but fail closed on pending, queued, cancelled, timed-out,
action-required, or failed mandatory checks. Verify required human/code-owner
approvals, unresolved conversations, draft state, mergeability, and conflicts.
A review-loop comment is an audit record and technical gate only -- never treat
it as a GitHub human approval.

## Merge and branch deletion (honor merge_mode / delete_branch)

Merge only when `merge_mode=auto` (or later explicit user authorization) applies
to THIS exact PR + target branch AND the final gate passes.

- `merge_mode=ready_only` (default): do NOT merge. Report `READY_TO_MERGE`; the
  user merges and deletes the branch themselves.
- `merge_mode=auto`: proceed to merge.

Steps:

1. Verify the repo's required merge method (merge / squash / rebase). If none is
   defined, ask rather than guess.
2. Re-query the full identity/base/head/gate tuple immediately before merge.
3. Execute exactly one merge. Never override branch protection.
4. Verify the resulting PR state is `MERGED` and capture the merge commit SHA.
5. Branch deletion: delete the source branch by DEFAULT whenever `merge_mode=auto`
   (i.e. `delete_branch` is not `false`), the PR is confirmed `MERGED`, and the
   branch is not protected/default/fork-owned and policy permits. Skip only when
   `delete_branch=false`. Confirm it no longer exists.

```bash
# auto-merge AND delete the source branch (default when merge_mode=auto)
gh pr merge <PR_NUMBER> --squash --delete-branch

# merge but KEEP the branch (delete_branch=false)
gh pr merge <PR_NUMBER> --squash
```

After merging, sync the local target branch read-only and clean up:

```bash
git checkout <target_branch> && git pull
git fetch --prune
git branch -d <feature-branch>   # local cleanup (safe delete)
```

Report `MERGED`, the merge commit SHA, and whether the branch was deleted.

## Never do

- Force-push to a shared/protected branch.
- `git add .` / `-A` / `--all`.
- Work directly on the default/protected branch.
- Delete the target/default branch or a fork-owned branch you do not control.
- Commit or push untested code that skips required gates.
