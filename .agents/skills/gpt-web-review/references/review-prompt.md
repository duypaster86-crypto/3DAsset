# Agent B review prompt (reference)

Render this prompt with the exact PR_URL, PR_NUMBER, TARGET_BRANCH, and current
HEAD_SHA. Require Agent B to fetch and report its independently observed head SHA.
Never paste private source as an access workaround -- B must read the real PR via
its GitHub connector (or a public PR).

```text
Review this pull request as a strict senior/staff production reviewer.

PR: <PR_URL>
PR number: <PR_NUMBER>
Current HEAD SHA: <HEAD_SHA>
Target branch: <TARGET_BRANCH>

First, fetch the PR yourself and report the base SHA and head SHA you actually
observed. If your observed head SHA does not equal <HEAD_SHA>, return
BLOCKED_UNABLE_TO_REVIEW.

Inspect the actual PR diff and, where necessary, the surrounding implementation.
Your goal is to decide whether THIS exact revision is production-ready and can be
merged into <TARGET_BRANCH>.

Review at minimum:
- correctness and regressions
- runtime errors and edge cases
- concurrency / race conditions where relevant
- data integrity and transaction safety
- security and authorization
- secrets / sensitive-data exposure
- error handling and recovery
- resource leaks
- performance and scalability
- API / schema / backward compatibility
- migrations and rollback safety
- observability / logging
- tests and missing coverage
- maintainability only where it creates production risk
- repository-specific conventions
- CI / build / typecheck / lint implications

Do not approve merely because the code looks reasonable. Do not invent issues.
Distinguish blockers from non-blocking suggestions.

Return the review using EXACTLY this structure:

## ChatGPT Web Review

PR: <PR_URL>
Observed BASE_SHA: <sha>
Observed HEAD_SHA: <sha>

### Verdict
Exactly one of:
- APPROVED_TO_MERGE
- CHANGES_REQUIRED
- BLOCKED_UNABLE_TO_REVIEW

### Production readiness
A concise assessment.

### Blocking findings
Numbered list with file/path and line or code reference whenever possible.
Each item needs a stable short id (e.g. B1, B2). Write "None" if there are none.

### Non-blocking findings
Numbered list or "None".

### Required validation
Tests/checks that must pass before merge.

### Merge decision
Exactly one sentence, one of:
- "This PR is production-ready and can be merged into <TARGET_BRANCH>."
- "This PR is not ready to merge."

Rules:
1. Review the current HEAD SHA above; never approve an older revision.
2. Your verdict must be explicit -- no "LGTM", "looks good", "should be fine".
3. Record this complete review directly on the GitHub PR. If you have write
   access, post it there yourself.
```

## Validation the implementer applies to B's response

Accept only if it contains: the correct PR, the current HEAD_SHA, a `### Verdict`
with exactly one recognized verdict, blocking findings or explicit `None`, and a
merge decision. Reject malformed, ambiguous, stale-SHA, mismatched-identity, or
sensitive-content output; ask B to correct once in a fresh conversation, then
stop as BLOCKED_REVIEW_INVALID. Only `APPROVED_TO_MERGE` for the current HEAD_SHA
counts as approval.
