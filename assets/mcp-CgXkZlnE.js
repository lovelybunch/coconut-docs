import{u as a,j as s}from"./index-BdR84zcS.js";const r={title:"MCP Tools — Change Proposals",description:"How Coconut uses MCP tools in the AI Assistant to create and manage Change Proposals."};function i(n){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"mcp-tools",children:["MCP Tools",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mcp-tools",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(e.p,{children:"The AI Assistant can call MCP tools during a chat to perform actions such as listing and creating Change Proposals. This page summarizes what’s available and how to use it."}),`
`,s.jsxs(e.h2,{id:"endpoints",children:["Endpoints",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#endpoints",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"GET /api/v1/mcp"})," — Lists available tools and configured external MCP servers."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"GET /api/v1/mcp/schema"})," — Returns JSON Schemas for built‑in tools (",s.jsx(e.code,{children:"change_proposals"}),", ",s.jsx(e.code,{children:"list_proposals"}),")."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"POST /api/v1/mcp/execute"})," — Executes a tool call with shape ",s.jsx(e.code,{children:"{ tool, arguments }"}),"."]}),`
`]}),`
`,s.jsxs(e.p,{children:["These routes are served by the API package. The AI route (",s.jsx(e.code,{children:"POST /api/v1/ai"}),") can enable tools; when the model returns tool_calls, the server executes them and then asks the model for a final message with tool results included."]}),`
`,s.jsxs(e.h2,{id:"tools",children:["Tools",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tools",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"list_proposals",children:["list_proposals",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#list_proposals",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"List proposals (metadata only). Accepts optional filters."}),`
`,s.jsx(e.p,{children:"Arguments shape:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  filters?: {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    status?: 'draft' | 'proposed' | 'in-review' | 'code-complete' | 'approved' | 'merged' | 'rejected',"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    priority?: 'low' | 'medium' | 'high' | 'critical',"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    tags?: string[],"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    search?: string"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.h3,{id:"change_proposals",children:["change_proposals",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#change_proposals",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Manage proposals: ",s.jsx(e.code,{children:"list | get | create | update | delete"}),"."]}),`
`,s.jsx(e.p,{children:"Common arguments:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  operation: 'list' | 'get' | 'create' | 'update' | 'delete',"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  id?: string,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  filters?: { ... },"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  proposal?: { ... } // for create/update"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(e.p,{children:"Proposal payload (create/update):"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  intent: string,            // required"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  content: string,           // required (markdown OK)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  author?: {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    id?: string,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    name?: string,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    email?: string,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    role?: string,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    type?: 'human' | 'agent'"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  planSteps?: Array<"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    | string"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    | {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        id?: string,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        description: string,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        status?: 'pending' | 'in-progress' | 'completed' | 'failed',"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        command?: string,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        expectedOutcome?: string"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"  >,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  metadata?: {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    tags?: string[],"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    priority?: 'low' | 'medium' | 'high' | 'critical',"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    reviewers?: string[]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  releasePlan?: {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    strategy: 'immediate' | 'gradual' | 'scheduled' | 'gated'"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  status?: 'draft' | 'proposed' | 'in-review' | 'code-complete' | 'approved' | 'merged' | 'rejected',"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  productSpecRef?: string"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(e.p,{children:"Notes:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["The server normalizes ",s.jsx(e.code,{children:"planSteps"})," so strings become actionable steps; dates may be ISO strings and are normalized."]}),`
`,s.jsx(e.li,{children:"Undefined values are stripped before YAML frontmatter is written."}),`
`]}),`
`,s.jsxs(e.h2,{id:"using-in-the-ai-assistant",children:["Using in the AI Assistant",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-in-the-ai-assistant",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:"Open the sidebar and select a model that supports tools."}),`
`,s.jsx(e.li,{children:"Enable “MCP Tools (experimental)” and choose tools as needed."}),`
`,s.jsxs(e.li,{children:["Ask the assistant to “create a change proposal …” and it may call ",s.jsx(e.code,{children:"change_proposals(create)"})," using the schema above."]}),`
`]}),`
`,s.jsxs(e.p,{children:["If you want deterministic results, construct the exact ",s.jsx(e.code,{children:"proposal"})," payload per the schema and ask the assistant to call the tool with those arguments."]})]})}function c(n={}){const{wrapper:e}={...a(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{c as default,r as frontmatter};
