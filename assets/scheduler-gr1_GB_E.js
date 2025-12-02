import{u as r,j as e}from"./index-BdR84zcS.js";const d={title:"Schedule Autonomous Jobs",description:"Automate recurring Coconut tasks with the built-in scheduler."};function i(s){const n={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"schedule-autonomous-jobs",children:["Schedule Autonomous Jobs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#schedule-autonomous-jobs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Coconut ships with a file-first job scheduler that can run Claude, Gemini, or Code CLI agents on an automated cadence. Jobs live in ",e.jsx(n.code,{children:".nut/jobs/"}),", so they version with the rest of your project."]}),`
`,e.jsxs(n.h2,{id:"prerequisites",children:["Prerequisites",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prerequisites",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Install the CLI you want to run (",e.jsx(n.code,{children:"claude"}),", ",e.jsx(n.code,{children:"gemini"}),", or ",e.jsx(n.code,{children:"codex"}),") and make sure it is on your ",e.jsx(n.code,{children:"PATH"}),"."]}),`
`,e.jsxs(n.li,{children:["Launch ",e.jsx(n.code,{children:"nut serve"})," (or the API package) so the scheduler boots and watches ",e.jsx(n.code,{children:".nut/jobs/"}),"."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"creating-or-editing-jobs",children:["Creating or Editing Jobs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-or-editing-jobs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Open the ",e.jsx(n.strong,{children:"Schedule"})," page in the Coconut UI sidebar."]}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"New Scheduled Job"})," (or ",e.jsx(n.strong,{children:"Edit"})," beside an existing job)."]}),`
`,e.jsxs(n.li,{children:["Provide:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prompt"})," – the instruction the agent should run autonomously."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Model"})," – ",e.jsx(n.code,{children:"Claude"}),", ",e.jsx(n.code,{children:"Gemini"}),", or ",e.jsx(n.code,{children:"Code"}),". The CLI dropdown mirrors the Configure Coding Agent flow."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cadence"})," – select days of the week, an hourly interval (minimum one hour), and optional anchor hour."]}),`
`,e.jsxs(n.li,{children:["Toggle ",e.jsx(n.strong,{children:"Start active"})," if you want the job to begin immediately."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Save. The job is persisted to ",e.jsx(n.code,{children:".nut/jobs/<id>.md"})," and scheduled immediately."]}),`
`]}),`
`,e.jsx(n.p,{children:"The UI shows the most recent run inline and exposes the full history in a modal so you can review summaries without leaving the page. Tags defined in frontmatter render as chips for quick filtering."}),`
`,e.jsxs(n.h2,{id:"reliability--safety",children:["Reliability & Safety",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reliability--safety",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CLI guardrails"})," – Coconut validates the chosen CLI binary with ",e.jsx(n.code,{children:"command -v"})," before launching a run. Missing binaries result in a clear failure state instead of a crash."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timeouts"})," – Runs default to a 30 minute maximum. You can override the limit with ",e.jsx(n.code,{children:"COCONUT_JOB_MAX_RUNTIME_MS"})," if you need longer tasks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Backlog catch-up"})," – If Coconut restarts after a scheduled window passes, the scheduler immediately executes the missed job once and recalculates the next run."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Frontmatter normalization"})," – Interval schedules are normalized (hours, sorted days, anchor hour) so Markdown diffs stay readable and API payloads remain valid."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"logs--artifacts",children:["Logs & Artifacts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#logs--artifacts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Each run streams stdout/stderr to ",e.jsx(n.code,{children:".nut/jobs/logs/<jobId>/<runId>.log"}),". Summaries are also stored in the job’s Markdown frontmatter (latest 50 entries) for quick reference."]}),`
`,e.jsxs(n.h2,{id:"api-endpoints",children:["API Endpoints",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#api-endpoints",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Method"}),e.jsx(n.th,{children:"Path"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"GET"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"/api/v1/jobs"})}),e.jsx(n.td,{children:"List scheduled jobs."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"POST"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"/api/v1/jobs"})}),e.jsx(n.td,{children:"Create a job."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"PATCH"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"/api/v1/jobs/:id"})}),e.jsx(n.td,{children:"Update an existing job (interval schedules via UI)."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"DELETE"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"/api/v1/jobs/:id"})}),e.jsx(n.td,{children:"Remove a job."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"POST"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"/api/v1/jobs/:id/run"})}),e.jsx(n.td,{children:"Trigger a manual run."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"GET"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"/api/v1/jobs/status"})}),e.jsx(n.td,{children:"Inspect scheduler health, next runs, and active timers."})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Cron schedules can still be authored manually in ",e.jsx(n.code,{children:".nut/jobs/<id>.md"}),"; the UI currently supports interval-based jobs."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"troubleshooting",children:["Troubleshooting",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#troubleshooting",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Missing CLI binary"})," – Install the requested CLI globally and confirm ",e.jsx(n.code,{children:"command -v claude"})," (or ",e.jsx(n.code,{children:"gemini"}),", ",e.jsx(n.code,{children:"codex"}),") resolves."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Job stuck running"})," – Check the per-run log in ",e.jsx(n.code,{children:".nut/jobs/logs/<jobId>/"}),". Long-running jobs terminate automatically after the configured timeout."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No runs after restart"})," – Ensure ",e.jsx(n.code,{children:"nut serve"})," is running from the repo root so the scheduler can locate ",e.jsx(n.code,{children:".nut/"}),". The ",e.jsx(n.code,{children:"/api/v1/jobs/status"})," endpoint is useful for verifying timers are active."]}),`
`]}),`
`,e.jsx(n.p,{children:"With these guardrails, Coconut’s scheduler gives you a safe, repeatable way to automate documentation updates, evidence gathering, or any other repetitive agent task."})]})}function o(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{o as default,d as frontmatter};
