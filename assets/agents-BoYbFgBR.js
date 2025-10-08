import{u as r,j as e}from"./index-CjZrgksJ.js";const l={title:"Agents & Registry",description:"undefined"};function i(n){const s={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"agents--registry",children:["Agents & Registry",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#agents--registry",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.p,{children:["Agents capture reusable AI personas that can be invoked from the CLI, terminal sessions, and the autonomous job scheduler. Each agent is backed by a markdown document in ",e.jsx(s.code,{children:".nut/agents/"})," with YAML frontmatter describing its capabilities, color, and the MCP servers (tools) it can access."]}),`
`,e.jsx(s.p,{children:"The Agents page provides a streamlined interface for browsing and managing your agent registry. Cards are fully clickable with hover states for easy navigation, and each agent's detail page includes quick actions for editing or launching sessions."}),`
`,e.jsxs(s.h2,{id:"configure-mcp-servers-first",children:["Configure MCP Servers First",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configure-mcp-servers-first",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Before assigning tools to an agent, register the MCP servers that should be discoverable:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Navigate to ",e.jsx(s.strong,{children:"Settings → MCP Servers"})," in the web app (",e.jsx(s.code,{children:"/settings/mcp"}),")."]}),`
`,e.jsxs(s.li,{children:["Add or edit entries. Each server lives under the ",e.jsx(s.code,{children:"mcpServers"})," key inside ",e.jsx(s.code,{children:".nut/mcp/config.json"}),"."]}),`
`,e.jsxs(s.li,{children:["Ensure ",e.jsx(s.code,{children:"enabled: true"})," for any server that should appear in the agent picker."]}),`
`]}),`
`,e.jsx(s.p,{children:"Example configuration:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "mcpServers"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "playwright"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "command"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"npx"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "args"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"@playwright/mcp@latest"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "enabled"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "firecrawl-mcp"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "command"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"npx"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "args"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"-y"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"firecrawl-mcp"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "enabled"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "env"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'        "FIRECRAWL_API_KEY"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"..."'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsx(s.p,{children:"Only enabled servers are surfaced in the agent UI. Removing or disabling a server automatically prunes it from any agent that referenced it."}),`
`,e.jsxs(s.h2,{id:"creating-an-agent-in-the-ui",children:["Creating an Agent in the UI",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-an-agent-in-the-ui",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Open ",e.jsx(s.strong,{children:"Agents → Create New"})," (",e.jsx(s.code,{children:"/agents/new"}),")."]}),`
`,e.jsxs(s.li,{children:["Complete the required fields: ",e.jsx(s.code,{children:"Name"})," (used for the filename) and ",e.jsx(s.code,{children:"Description"}),"."]}),`
`,e.jsxs(s.li,{children:["In ",e.jsx(s.strong,{children:"Tools (Optional)"})," the app now lists MCP servers discovered from the config above. Select the servers the agent should be allowed to invoke. Leave everything unchecked to inherit all available servers at runtime."]}),`
`,e.jsxs(s.li,{children:["(Optional) Provide detailed system instructions in ",e.jsx(s.em,{children:"Agent Instructions"}),"."]}),`
`,e.jsxs(s.li,{children:["Submit the form. The API persists a new markdown file in ",e.jsx(s.code,{children:".nut/agents/"}),"."]}),`
`]}),`
`,e.jsx(s.p,{children:"The stored document uses array-based frontmatter for tools:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"---"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"name"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"playwright-runner"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"description"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"Runs browser-based regression suites via Playwright MCP"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"color"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"cyan"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"tools"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  - "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"playwright"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  - "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"firecrawl-mcp"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:"---"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"You are a QA specialist..."})})]})})}),`
`,e.jsxs(s.p,{children:["Historically, tools were saved as comma-delimited strings. The backend now normalises old documents into arrays when they are read or rewritten, so downstream consumers always receive ",e.jsx(s.code,{children:"string[]"})," metadata."]}),`
`,e.jsxs(s.h2,{id:"editing-an-agent",children:["Editing an Agent",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#editing-an-agent",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Click any agent card to view its details, then click the ",e.jsx(s.strong,{children:"Edit"})," button in the top right"]}),`
`,e.jsx(s.li,{children:"The MCP server list is dynamically refreshed from the config file. Disconnected or disabled servers appear unchecked and cannot be re-selected until they are re-enabled."}),`
`,e.jsx(s.li,{children:"Removing a server from the configuration causes the agent editor to drop that selection on save, keeping the registry aligned with the live tool inventory."}),`
`]}),`
`,e.jsx(s.p,{children:"The edit page maintains the same clean layout as other agent pages, with action buttons consistently placed in the top right for easy access."}),`
`,e.jsxs(s.h2,{id:"cli-workflows",children:["CLI Workflows",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cli-workflows",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"nut agent create"})," & ",e.jsx(s.code,{children:"nut agent update"})," commands accept comma-separated ",e.jsx(s.code,{children:"--tools"})," flags. The core storage layer converts those values into arrays, so the CLI coexists with the new UI."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"nut"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" agent"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "playwright-runner"'}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "Runs Playwright checks"'}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --tools"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "playwright,firecrawl-mcp"'})]})]})})}),`
`,e.jsxs(s.h2,{id:"launching-agent-sessions",children:["Launching Agent Sessions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#launching-agent-sessions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Agents can be launched directly from the Agents page for quick, focused work sessions:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Navigate to ",e.jsx(s.strong,{children:"Agents"})," (",e.jsx(s.code,{children:"/agents"}),") and browse your agent registry"]}),`
`,e.jsx(s.li,{children:"Click any agent card to view its details"}),`
`,e.jsxs(s.li,{children:["Click ",e.jsx(s.strong,{children:"Prepare Agent"})," in the Agent Actions section"]}),`
`,e.jsxs(s.li,{children:["This opens a dedicated terminal session where you can configure:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Which CLI agent to use (Claude Code, Codex, or Gemini)"}),`
`,e.jsx(s.li,{children:"MCP servers (pre-populated from the agent's tool list)"}),`
`,e.jsx(s.li,{children:"Additional agents to include"}),`
`,e.jsx(s.li,{children:"Custom instructions for this specific session"}),`
`,e.jsx(s.li,{children:"Automation preferences"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:"Agent sessions use minimal base instructions, allowing the agent's own content and your custom instructions to drive the workflow. This makes them ideal for specialized tasks, experimentation, or working with domain-specific agents."}),`
`,e.jsxs(s.h2,{id:"how-agents-are-used",children:["How Agents Are Used",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-agents-are-used",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:'Direct launch ("Prepare Agent")'}),": Click the Prepare Agent button on any agent's detail page to start a focused session. The agent is automatically selected and its tools are pre-configured. Agent sessions appear in the Code section for easy tracking."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Change proposal workflows"}),': Select agents in the "Configure Coding Agent" modal when working on a change proposal. Agent instructions supplement the structured change proposal workflow.']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Scheduler jobs"}),": The job runner respects the agent metadata and handles devcontainer constraints by prefixing Claude invocations with ",e.jsx(s.code,{children:"IS_SANDBOX=1"})," and wrapping Codex with ",e.jsx(s.code,{children:"script(1)"})," when running as root."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Programmatic access"}),": ",e.jsx(s.code,{children:"GET /api/v1/agents"})," returns agent metadata with ",e.jsx(s.code,{children:"tools: string[]"}),", ensuring automations, the sidebar, and any future integrations see a consistent shape."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"troubleshooting",children:["Troubleshooting",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#troubleshooting",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["If a server is missing from the picker, confirm it is present and ",e.jsx(s.code,{children:"enabled"})," in ",e.jsx(s.code,{children:".nut/mcp/config.json"})," and that the API has permission to read the file."]}),`
`,e.jsxs(s.li,{children:["When working in devcontainers, make sure CLI binaries (",e.jsx(s.code,{children:"claude"}),", ",e.jsx(s.code,{children:"codex"}),", ",e.jsx(s.code,{children:"gemini"}),") are on ",e.jsx(s.code,{children:"$PATH"}),"; the scheduler performs a ",e.jsx(s.code,{children:"command -v"})," check before executing a job."]}),`
`,e.jsxs(s.li,{children:["Legacy agents still storing ",e.jsx(s.code,{children:"tools"})," as a comma-separated string will be rewritten to the new array form on the next update, or you can manually run them through the editor to update immediately."]}),`
`]})]})}function t(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{t as default,l as frontmatter};
