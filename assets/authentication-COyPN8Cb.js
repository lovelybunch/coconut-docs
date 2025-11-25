import{u as r,j as s}from"./index-CVCt1zak.js";const a={title:"Authentication",description:"undefined"};function n(i){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"authentication",children:["Authentication",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authentication",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.p,{children:["Coconut includes an optional, file-based authentication system for team deployments. Authentication is ",s.jsx(e.strong,{children:"disabled by default"})," and completely opt-in."]}),`
`,s.jsxs(e.h2,{id:"design-philosophy",children:["Design Philosophy",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#design-philosophy",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Opt-in by default"})," - Works without authentication for local/solo use"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"File-based storage"})," - No database required, auth config lives in ",s.jsx(e.code,{children:".nut/auth.json"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Email whitelist model"})," - Admins pre-configure allowed users"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Role-based access"})," - Support for multiple team roles"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Non-breaking"})," - Existing projects work identically with or without auth"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"quick-start",children:["Quick Start",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quick-start",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"initialize-authentication",children:["Initialize Authentication",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#initialize-authentication",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# From your project root"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"nut"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" auth"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" init"})]})]})})}),`
`,s.jsx(e.p,{children:"You'll be prompted for:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Admin email address"}),`
`,s.jsx(e.li,{children:"Admin name"}),`
`,s.jsx(e.li,{children:"Admin password (minimum 8 characters)"}),`
`]}),`
`,s.jsxs(e.p,{children:["This creates ",s.jsx(e.code,{children:".nut/auth.json"})," with ",s.jsx(e.code,{children:"enabled: false"})," by default."]}),`
`,s.jsxs(e.h3,{id:"enable-authentication",children:["Enable Authentication",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enable-authentication",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"nut"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" auth"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" toggle"})]})})})}),`
`,s.jsxs(e.p,{children:["Confirms the action and enables authentication. ",s.jsx(e.strong,{children:"Important:"})," This regenerates the session secret, invalidating all existing sessions."]}),`
`,s.jsxs(e.h3,{id:"add-users",children:["Add Users",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#add-users",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"nut"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" auth"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add-user"})]})})})}),`
`,s.jsx(e.p,{children:"You'll be prompted for:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Email address (must be whitelisted before they can register)"}),`
`,s.jsx(e.li,{children:"Full name"}),`
`,s.jsx(e.li,{children:"Role (admin, manager, engineer, designer, product_manager, viewer)"}),`
`]}),`
`,s.jsx(e.p,{children:"To skip the prompts and supply details in one go, provide the flags explicitly:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"nut"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" auth"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" add-user"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --email"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "jordan@example.com"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --name"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "Jordan Rivers"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --role"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" manager"})]})]})})}),`
`,s.jsxs(e.h3,{id:"list-users",children:["List Users",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#list-users",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"nut"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" auth"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" list-users"})]})})})}),`
`,s.jsx(e.p,{children:"Shows all configured users with their roles and registration status."}),`
`,s.jsxs(e.h2,{id:"web-ui-management",children:["Web UI Management",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#web-ui-management",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"settings--authentication",children:["Settings > Authentication",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settings--authentication",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Access at ",s.jsx(e.code,{children:"/settings/authentication"})," to:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Toggle authentication"})," on/off"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Toggle self-registration"})," - Allow whitelisted users to self-register"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Manage users"})," - Add, update roles, reset passwords, delete users"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Configure session settings"})," - Expiration time, cookie settings"]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Note:"})," This page is accessible when auth is disabled (for setup) or when logged in as an admin."]}),`
`,s.jsxs(e.h3,{id:"settings--api-keys",children:["Settings > API Keys",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settings--api-keys",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Access at ",s.jsx(e.code,{children:"/settings/api-keys"})," to:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Create API keys"})," for programmatic access (CI/CD, automation)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Set expiration dates"})," - 30 days, 90 days, 1 year, or never"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"View active keys"})," - See masked previews, creation dates, last used"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Delete keys"})," - Revoke access immediately"]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Security:"})," API keys are only shown once on creation. Store them securely."]}),`
`,s.jsxs(e.h2,{id:"authentication-methods",children:["Authentication Methods",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authentication-methods",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"user-sessions-jwt",children:["User Sessions (JWT)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#user-sessions-jwt",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Email/password authentication"}),`
`,s.jsx(e.li,{children:"JWT tokens stored in HTTP-only cookies"}),`
`,s.jsx(e.li,{children:"Default expiration: 7 days (configurable)"}),`
`,s.jsx(e.li,{children:"Automatic token refresh on requests"}),`
`]}),`
`,s.jsx(e.strong,{children:"Login Flow:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:["Visit ",s.jsx(e.code,{children:"/login"})," when auth is enabled"]}),`
`,s.jsx(e.li,{children:"Enter email and password"}),`
`,s.jsx(e.li,{children:"Optionally register if email is whitelisted and self-registration is enabled"}),`
`,s.jsx(e.li,{children:"Redirected to dashboard on success"}),`
`]}),`
`,s.jsxs(e.h3,{id:"api-keys",children:["API Keys",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#api-keys",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"For programmatic access (CI/CD, scripts, automation):"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Include in requests"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"curl"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -H"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "X-API-Key: your-key-here"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  http://localhost:3000/api/v1/proposals"})})]})})}),`
`,s.jsx(e.strong,{children:"Features:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Separate from user sessions"}),`
`,s.jsx(e.li,{children:"Scoped permissions (future)"}),`
`,s.jsx(e.li,{children:"Expiration dates"}),`
`,s.jsx(e.li,{children:"Last used tracking"}),`
`,s.jsx(e.li,{children:"One-time display on creation"}),`
`]}),`
`,s.jsxs(e.h2,{id:"role-based-access-control",children:["Role-Based Access Control",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#role-based-access-control",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"available-roles",children:["Available Roles",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#available-roles",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Role"}),s.jsx(e.th,{children:"Description"}),s.jsx(e.th,{children:"Access Level"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"admin"})}),s.jsx(e.td,{children:"Full system access"}),s.jsx(e.td,{children:"Can manage auth, users, all resources"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"manager"})}),s.jsx(e.td,{children:"Team management"}),s.jsx(e.td,{children:"Can manage proposals, users (limited)"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"engineer"})}),s.jsx(e.td,{children:"Developer access"}),s.jsx(e.td,{children:"Can create/edit proposals, code"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"designer"})}),s.jsx(e.td,{children:"Design access"}),s.jsx(e.td,{children:"Can create/edit proposals, resources"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"product_manager"})}),s.jsx(e.td,{children:"Product access"}),s.jsx(e.td,{children:"Can create/edit proposals, specs"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"viewer"})}),s.jsx(e.td,{children:"Read-only access"}),s.jsx(e.td,{children:"Can view but not modify"})]})]})]}),`
`,s.jsxs(e.h3,{id:"admin-only-features",children:["Admin-Only Features",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#admin-only-features",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Authentication settings management"}),`
`,s.jsx(e.li,{children:"User management (add, remove, reset passwords)"}),`
`,s.jsx(e.li,{children:"API key management"}),`
`,s.jsx(e.li,{children:"System configuration"}),`
`]}),`
`,s.jsxs(e.h2,{id:"security-considerations",children:["Security Considerations",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#security-considerations",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"password-security",children:["Password Security",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#password-security",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Bcrypt hashing with 10 salt rounds"}),`
`,s.jsx(e.li,{children:"Minimum 8 characters required"}),`
`,s.jsx(e.li,{children:"Admin can reset user passwords"}),`
`]}),`
`,s.jsxs(e.h3,{id:"token-security",children:["Token Security",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-security",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"JWT tokens signed with auto-generated secret"}),`
`,s.jsx(e.li,{children:"HTTP-only cookies prevent XSS attacks"}),`
`,s.jsx(e.li,{children:"SameSite attribute prevents CSRF"}),`
`,s.jsx(e.li,{children:"Configurable expiration (default 7 days)"}),`
`]}),`
`,s.jsxs(e.h3,{id:"api-key-security",children:["API Key Security",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#api-key-security",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Keys hashed with bcrypt before storage"}),`
`,s.jsx(e.li,{children:"Only shown once on creation"}),`
`,s.jsx(e.li,{children:"Tracked: last used timestamp, expiration date"}),`
`,s.jsx(e.li,{children:"Can be revoked immediately"}),`
`]}),`
`,s.jsxs(e.h3,{id:"session-invalidation",children:["Session Invalidation",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#session-invalidation",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"When toggling authentication on/off, all sessions are automatically invalidated:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Session secret is regenerated"}),`
`,s.jsx(e.li,{children:"All users must re-authenticate"}),`
`,s.jsx(e.li,{children:"Ensures clean security state"}),`
`]}),`
`,s.jsxs(e.h3,{id:"file-permissions",children:["File Permissions",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#file-permissions",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Important:"})," Add ",s.jsx(e.code,{children:".nut/auth.json"})," to your ",s.jsx(e.code,{children:".gitignore"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"echo"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' ".nut/auth.json"'}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" >>"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" .gitignore"})]})})})}),`
`,s.jsx(e.p,{children:"This file contains:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Password hashes"}),`
`,s.jsx(e.li,{children:"Session secrets"}),`
`,s.jsx(e.li,{children:"API key hashes"}),`
`]}),`
`,s.jsxs(e.h2,{id:"production-deployment",children:["Production Deployment",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#production-deployment",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"required-for-internet-use",children:["Required for Internet Use",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#required-for-internet-use",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"HTTPS/TLS"})," - Absolutely required"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Without HTTPS, passwords and tokens are sent in cleartext"}),`
`,s.jsx(e.li,{children:"Use nginx/Caddy with SSL cert, or platform like Render/Railway"}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Enable Secure Cookies"})," - Set in auth.json:"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"session"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "secure"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "cookieName"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"nut-session"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "expiresIn"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"7d"'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Environment Variables"})," - For production secret:"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" NUT_SESSION_SECRET"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"your-long-random-secret-here"'})]})})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"CORS Configuration"})," - Restrict allowed origins in production"]}),`
`]}),`
`]}),`
`,s.jsxs(e.h3,{id:"recommended",children:["Recommended",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#recommended",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Rate limiting for login attempts"}),`
`,s.jsx(e.li,{children:"Account lockout after failed attempts"}),`
`,s.jsx(e.li,{children:"Audit logging for security events"}),`
`,s.jsx(e.li,{children:"Regular session secret rotation"}),`
`,s.jsx(e.li,{children:"Monitor failed authentication attempts"}),`
`]}),`
`,s.jsxs(e.h2,{id:"configuration-file-structure",children:["Configuration File Structure",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration-file-structure",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:".nut/auth.json"})," (created by ",s.jsx(e.code,{children:"nut auth init"}),"):"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "version"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"1.0"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "enabled"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "allowRegistration"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "providers"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "local"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "enabled"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "users"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'          "id"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"user-123"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'          "email"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"admin@example.com"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'          "name"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Admin User"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'          "role"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"admin"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'          "passwordHash"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"$2b$10$..."'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'          "registered"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'          "createdAt"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"2025-01-15T10:00:00Z"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'          "updatedAt"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"2025-01-15T10:00:00Z"'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      ]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "oauth"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "google"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'        "enabled"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'        "clientId"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'""'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'        "clientSecret"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'""'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'        "callbackUrl"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'""'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "session"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "secret"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"auto-generated-secret"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "expiresIn"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"7d"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "cookieName"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"nut-session"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "secure"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "apiKeys"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": []"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.h2,{id:"troubleshooting",children:["Troubleshooting",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#troubleshooting",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"cant-access-after-enabling-auth",children:["Can't access after enabling auth",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cant-access-after-enabling-auth",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solution:"})," Clear your browser cookies and log in again. Or run ",s.jsx(e.code,{children:"nut auth toggle"})," twice to regenerate sessions."]}),`
`,s.jsxs(e.h3,{id:"403-forbidden-on-auth-routes",children:["403 Forbidden on auth routes",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#403-forbidden-on-auth-routes",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.strong,{children:"Check:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Are you logged in?"}),`
`,s.jsxs(e.li,{children:["Is your user role ",s.jsx(e.code,{children:"admin"}),"?"]}),`
`,s.jsx(e.li,{children:"Try logging out and back in"}),`
`]}),`
`,s.jsxs(e.h3,{id:"sessions-not-persisting",children:["Sessions not persisting",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sessions-not-persisting",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.strong,{children:"Check:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Is HTTPS enabled in production?"}),`
`,s.jsx(e.li,{children:"Are cookies enabled in your browser?"}),`
`,s.jsxs(e.li,{children:["Check ",s.jsx(e.code,{children:"secure"})," flag in ",s.jsx(e.code,{children:"auth.json"})," matches your deployment (true for HTTPS, false for HTTP)"]}),`
`]}),`
`,s.jsxs(e.h3,{id:"forgot-admin-password",children:["Forgot admin password",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forgot-admin-password",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Solution:"})," Use CLI to reset:"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:["Edit ",s.jsx(e.code,{children:".nut/auth.json"})," directly to add a new admin user"]}),`
`,s.jsxs(e.li,{children:["Or delete ",s.jsx(e.code,{children:".nut/auth.json"})," and run ",s.jsx(e.code,{children:"nut auth init"})," again"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"api-reference",children:["API Reference",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#api-reference",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"authentication-endpoints",children:["Authentication Endpoints",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authentication-endpoints",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"POST   /api/v1/auth/login              # Email/password login"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"POST   /api/v1/auth/register           # Self-registration (if enabled)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"POST   /api/v1/auth/logout             # Clear session"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET    /api/v1/auth/me                 # Get current user"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"POST   /api/v1/auth/change-password    # Change password"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET    /api/v1/auth/status             # Check if auth enabled (public)"})})]})})}),`
`,s.jsxs(e.h3,{id:"admin-endpoints-requires-admin-role",children:["Admin Endpoints (requires admin role)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#admin-endpoints-requires-admin-role",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET    /api/v1/auth-settings           # Get auth config"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"PUT    /api/v1/auth-settings           # Update auth settings"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"POST   /api/v1/auth-settings/users     # Add user to whitelist"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"PUT    /api/v1/auth-settings/users/:id # Update user"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"POST   /api/v1/auth-settings/users/:id/reset-password  # Reset password"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"DELETE /api/v1/auth-settings/users/:id # Remove user"})})]})})}),`
`,s.jsxs(e.h3,{id:"api-key-endpoints",children:["API Key Endpoints",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#api-key-endpoints",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET    /api/v1/api-keys                # List API keys"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"POST   /api/v1/api-keys                # Create API key"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"DELETE /api/v1/api-keys/:id            # Delete API key"})})]})})}),`
`,s.jsxs(e.h2,{id:"future-enhancements",children:["Future Enhancements",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#future-enhancements",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.strong,{children:"Planned for v2:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"OAuth providers (Google, GitHub, GitLab, Azure AD)"}),`
`,s.jsx(e.li,{children:"SAML/SSO for enterprise"}),`
`,s.jsx(e.li,{children:"Two-factor authentication (TOTP)"}),`
`,s.jsx(e.li,{children:"Password reset via email"}),`
`,s.jsx(e.li,{children:"WebSocket authentication"}),`
`,s.jsx(e.li,{children:"Audit logging"}),`
`,s.jsx(e.li,{children:"Session management UI"}),`
`,s.jsx(e.li,{children:"Rate limiting"}),`
`,s.jsx(e.li,{children:"Account lockout"}),`
`,s.jsx(e.li,{children:"IP whitelisting"}),`
`]}),`
`,s.jsxs(e.h2,{id:"related-documentation",children:["Related Documentation",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#related-documentation",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"/cli",children:"CLI Reference"})," - Command-line authentication management"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"/api",children:"API Reference"})," - Authentication API endpoints"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"/contributing#security",children:"Security Best Practices"})," - Secure deployment guidelines"]}),`
`]})]})}function d(i={}){const{wrapper:e}={...r(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(n,{...i})}):n(i)}export{d as default,a as frontmatter};
