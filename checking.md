0b37b2 chore: release 0.1.2
# Todos
[✓] Survey repo structure, package.json, git state
[✓] Deep-explore core architecture (agent loop, tools, context, executor, RPC)
[✓] Verify maturity evidence (tests, CI, typecheck/lint/build)
[✓] Review sibling repos (facet, executor, launcher) for end-to-end story
[✓] Review known weaknesses (code-quality-review, roadmap)
[✓] Evaluate competition fit and identify critical advantages / gaps
+ Thought: 1m 23s
Is Lens a good fit for the AI-agent competition?
Yes, it's a strong fit. Lens is a full agent runtime, not a prompt wrapper. Its engineering depth is well above a typical entry: about 13k lines of strict TypeScript in Core, 299 commits, published on npm as @lensagent/core, plus three companion repos (the Executor that runs the tools, the Facet web UI and an Electron Launcher).
The risk isn't the technology. A fresh install currently hits config bugs, the best features don't show up in the UI, and you have no measured results yet.
What I checked
I ran the repo's own checks on a separate copy of the current code, so your working tree is untouched:
- Typecheck and lint: both clean apart from the gap below.
- Behavior tests: 245 of 245 pass.
- Not run: the 15 tests for programmatic tool calling (PTC), plus typecheck and lint on that one file. The quickjs-emscripten package isn't installed on this machine and there was no network. So these are unverified, not failing.
- Substitution: I used the local fastify 5.11.2 in place of the pinned 5.12.5.
CI runs typecheck, lint, build, a secret scan and the tests on Linux, Windows and macOS (Intel and ARM). Your local node_modules is broken (fastify link points nowhere, quickjs-emscripten missing), so run pnpm install before any demo.
Your main advantages
The common theme is trustworthy autonomy: every model request and every tool call is saved, checked against policy and auditable.
1. No repeated side effects after a crash. Model requests and tool calls are saved to SQLite before they run. After a crash nothing is re-run: calls that were in progress are marked outcome_unknown, and a record of what may have happened is added to the agent's context (src/store/store.ts:104-177, scripts/test-recovery-context.mjs). Many frameworks either lose state or re-run the interrupted step.
2. Auto-approval that resists prompt injection. A model reviews risky tool calls, but only messages that really came from the user count as permission. Tool output can never grant permission.
- The reviewer has no tools and must answer in strict JSON.
- Code enforces a ceiling: critical risk is always denied, and high risk needs explicit user permission.
- Any failure falls back to asking a human, and it re-checks if anything changed during the review (src/runtime/review.ts:9-27,108-122, src/runtime/agent.ts:561-569).
This topic is very current for judges.
3. You can see exactly what the model saw. Every model request is stored with the exact request body, tool schemas and config/context fingerprints. A test confirms a stored request rebuilds to an identical body (scripts/test-cache.mjs:286-309).
4. Users can edit and fork the context. Messages can be edited, hidden, reordered, overridden or forked at any complete turn, and tool-call/result pairs can't be broken. Summarising old history doesn't delete it: the model can still search the originals with history_search and history_read.
5. Programmatic tool calling with any model provider. The model writes JS or TS that runs in a sandbox; every tool call inside it still goes through policy and is saved. Only the result the program selects enters the context, which saves tokens. Tests exist but couldn't run here.
6. Agent and tools can run on different machines. Core and the Executor talk over a versioned gRPC contract with optional mutual TLS. The Executor keeps a history of file changes, so writes can be previewed and reverted with conflict checks.
Supporting points:
- a prompt-cache planner that explains its choices and counts cache tokens (a cost story);
- subagents that can inherit the full context, a summary or nothing;
- safe parallel tool execution;
- correct round-tripping of model reasoning (Anthropic and OpenAI);
- tools loaded on demand;
- an HTTP API with 127 routes, an OpenAPI 3.1 spec and live updates over SSE.
Fix before competing
Demo blockers (confirmed in code):
- Terminal commands are denied on a fresh install. The example config sets terminal_command_run to external (config/lens.example.jsonc:80), but the tool needs full (src/adapters/executor.ts:247), so every call gets POLICY_DENIED (src/runtime/policy.ts:13-14). Changing that value to ask or auto_approve fixes it.
- MCP tools will probably be rejected by OpenAI and Anthropic. Tool names go out as mcp:<server>/<tool> (src/runtime/model.ts:324), and those providers only allow letters, digits, _ and -. Your own review doc (Q01) flags this too. It needs a live check; until then, call MCP tools through PTC.
- The four repos are out of sync. npm has Core 0.1.1 and Executor 0.1.0 (older protocol), while the source is 0.1.2. The Launcher installs from npm, and its "Approve" button doesn't issue the access credential Core 0.1.2 needs. Freeze one set of versions and rehearse a cold start.
Presentation gaps:
- The best features are hard to show. In the UI:
- forking and editing context means typing IDs by hand on an admin page;
- there's no image display and no revert screen;
- the policy editor saves a value (project_write) that Core rejects.
If judges can't see fork, audit and review reasons, they can't score them.
- There are no measured results. No benchmark or real-provider evaluation exists yet (roadmap M3 is still a proposal). Even a small task set with numbers would help a lot: tokens saved by PTC and caching, a crash-recovery demo, injection attempts blocked.
Likely judge questions to prepare for:
- There's no OS-level sandbox for terminal commands, only folder limits and a filtered environment.
- There's no limit on how deep subagents can nest, and a subagent's permissions may be looser than its parent's (roadmap C7 lists this as still to be checked).
- Pending approvals are lost on restart, and runs are capped at 64 steps (hard-coded).
Don't claim these
- microcompact, contextCollapse and toolResultMaxTokens: they exist only in config and are flagged CONFIG_NOT_IMPLEMENTED.
- Provider-hosted PTC.
- An exact token count: the estimate is an approximation.
- Git and web-search tools: they exist in the Executor but aren't connected to Core.
Possible one-line pitch
"Lens is an agent runtime built for trust: every model request and tool call is saved, checked and auditable, so an agent can be paused, inspected, edited, forked and recovered without ever silently repeating an action."
For the demo, use one real coding task that shows a blocked injection attempt, a crash and recovery, and a context fork.
To tailor this, send me the competition's scoring rubric and rules. Two things matter most: whether existing projects are allowed (Lens started on 2026-07-18), and whether scoring weights the demo and impact or the technical depth.
