import{u as r,j as e}from"./index-BdR84zcS.js";const a={title:"Git Management",description:"undefined"};function s(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"git-management",children:["Git Management",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#git-management",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Coconut provides comprehensive git operations through an integrated UI and API, enabling you to manage branches, commits, worktrees, and remote synchronization without leaving your development environment."}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The Git Management system in Coconut offers:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Repository Status"})," - Real-time view of your current branch, uncommitted changes, and sync status"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Branch Management"})," - Create, switch, merge, and delete branches with visual feedback"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Commit Operations"})," - Commit changes with smart guidance for default branches"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Worktrees"})," - Work on multiple branches simultaneously in separate directories"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Remote Sync"})," - Push and pull changes with authentication status monitoring"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Settings"})," - Configure worktree paths and manage credentials"]}),`
`]}),`
`,e.jsx(n.p,{children:"All git operations are designed to work non-interactively with proper timeout protection to prevent UI hangs."}),`
`,e.jsxs(n.h2,{id:"repository-status",children:["Repository Status",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#repository-status",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The Repository Status section provides a real-time overview of your working directory:"}),`
`,e.jsxs(n.h3,{id:"current-branch-information",children:["Current Branch Information",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#current-branch-information",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Branch name with visual indicator"}),`
`,e.jsxs(n.li,{children:["Commits ahead of remote (with ",e.jsx(n.strong,{children:"unpushed indicator"})," when > 0)"]}),`
`,e.jsx(n.li,{children:"Commits behind remote"}),`
`,e.jsx(n.li,{children:"Upstream tracking branch"}),`
`]}),`
`,e.jsxs(n.h3,{id:"uncommitted-changes",children:["Uncommitted Changes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#uncommitted-changes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"List of modified, added, deleted, and untracked files"}),`
`,e.jsx(n.li,{children:"Status indicators for each file (M, A, D, U, etc.)"}),`
`,e.jsx(n.li,{children:"Quick overview of what needs to be committed"}),`
`]}),`
`,e.jsxs(n.h3,{id:"status-indicators",children:["Status Indicators",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#status-indicators",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"When you have commits that haven't been pushed to the remote, Coconut highlights them with:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Amber background highlighting on the ahead count"}),`
`,e.jsx(n.li,{children:'"unpushed" label instead of "ahead"'}),`
`,e.jsx(n.li,{children:"Visual prominence to remind you to push your changes"}),`
`]}),`
`,e.jsxs(n.h2,{id:"branch-management",children:["Branch Management",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#branch-management",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Coconut provides a complete branch workflow through the Branches section."}),`
`,e.jsxs(n.h3,{id:"creating-branches",children:["Creating Branches",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-branches",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Select a ",e.jsx(n.strong,{children:"base branch"})," to branch from (typically ",e.jsx(n.code,{children:"main"})," or your current branch)"]}),`
`,e.jsxs(n.li,{children:["Enter a ",e.jsx(n.strong,{children:"branch name"})," (e.g., ",e.jsx(n.code,{children:"feature/new-feature"}),")"]}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"Create Branch"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The branch is created locally and you can switch to it when ready."}),`
`,e.jsxs(n.h3,{id:"switching-branches",children:["Switching Branches",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#switching-branches",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Click the ",e.jsx(n.strong,{children:"Switch"})," button next to any branch to check it out. Coconut will:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Switch your working directory to the selected branch"}),`
`,e.jsx(n.li,{children:"Update the repository status"}),`
`,e.jsx(n.li,{children:"Refresh all git-related UI elements"}),`
`]}),`
`,e.jsxs(n.h3,{id:"merging-branches",children:["Merging Branches",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#merging-branches",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Merge any branch into your current branch with three strategies:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Merge commit"})," (default) - Creates a merge commit preserving full history"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Squash & merge"})," - Combines all commits into a single commit"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rebase & merge"})," - Replays commits on top of the current branch"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Select your preferred strategy in the merge dropdown, then click ",e.jsx(n.strong,{children:"Merge"})," next to the branch you want to merge."]}),`
`,e.jsxs(n.h3,{id:"deleting-branches",children:["Deleting Branches",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deleting-branches",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Remove local branches that are no longer needed by clicking the ",e.jsx(n.strong,{children:"Delete"})," button. This performs a force delete (",e.jsx(n.code,{children:"git branch -D"}),") to remove the branch even if it hasn't been merged."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," You cannot delete the currently active branch."]}),`
`,e.jsxs(n.h2,{id:"commit-changes",children:["Commit Changes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#commit-changes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The Commit Changes section lets you create commits with smart guidance."}),`
`,e.jsxs(n.h3,{id:"basic-commits",children:["Basic Commits",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#basic-commits",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Make changes to your files"}),`
`,e.jsx(n.li,{children:"Enter a commit message describing your changes"}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"Commit"})]}),`
`]}),`
`,e.jsx(n.p,{children:"By default, all uncommitted changes are included. The commit is created on your current branch."}),`
`,e.jsxs(n.h3,{id:"default-branch-protection",children:["Default Branch Protection",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#default-branch-protection",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["When you're on a default branch (",e.jsx(n.code,{children:"main"})," or ",e.jsx(n.code,{children:"master"}),"), Coconut displays a warning and suggests creating a feature branch first. This encourages best practices:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keeps your default branch stable and deployable"}),`
`,e.jsx(n.li,{children:"Makes it easier to review and test changes"}),`
`,e.jsx(n.li,{children:"Enables working on multiple features simultaneously"}),`
`,e.jsx(n.li,{children:"Simplifies collaboration with your team"}),`
`]}),`
`,e.jsxs(n.p,{children:["You can still commit directly to the default branch if needed by clicking ",e.jsx(n.strong,{children:'"Commit to main Anyway"'})," in the suggestion dialog."]}),`
`,e.jsxs(n.h3,{id:"branch-creation-suggestion",children:["Branch Creation Suggestion",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#branch-creation-suggestion",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"If you choose to create a branch from the suggestion dialog:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Enter a new branch name"}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"Create Branch & Switch"})]}),`
`,e.jsx(n.li,{children:"Coconut creates the branch from your current branch"}),`
`,e.jsx(n.li,{children:"Automatically switches to the new branch"}),`
`,e.jsx(n.li,{children:"You can then commit your changes to the feature branch"}),`
`]}),`
`,e.jsxs(n.h2,{id:"worktrees",children:["Worktrees",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#worktrees",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Git worktrees allow you to check out multiple branches simultaneously in different directories. This is perfect for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Working on multiple features in parallel"}),`
`,e.jsx(n.li,{children:"Testing changes without switching branches"}),`
`,e.jsx(n.li,{children:"Running builds on one branch while developing on another"}),`
`,e.jsx(n.li,{children:"Reviewing PRs while keeping your current work intact"}),`
`]}),`
`,e.jsxs(n.h3,{id:"creating-worktrees",children:["Creating Worktrees",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-worktrees",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Enter a branch name (existing or new)"}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"Create Worktree"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Coconut creates the worktree in the configured location (default: ",e.jsx(n.code,{children:"../worktrees/"})," relative to your project root)."]}),`
`,e.jsxs(n.h3,{id:"working-with-worktrees",children:["Working with Worktrees",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#working-with-worktrees",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Each worktree:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Has its own working directory"}),`
`,e.jsx(n.li,{children:"Can be pushed/pulled independently"}),`
`,e.jsx(n.li,{children:"Shows the associated branch name"}),`
`,e.jsx(n.li,{children:"Displays the full filesystem path"}),`
`]}),`
`,e.jsxs(n.h3,{id:"worktree-operations",children:["Worktree Operations",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#worktree-operations",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pull"})," - Fetch and merge/rebase changes from remote"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Push"})," - Push commits to remote repository"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Remove"})," - Delete the worktree directory (prompts for confirmation)"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"configuring-worktree-location",children:["Configuring Worktree Location",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuring-worktree-location",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Navigate to ",e.jsx(n.strong,{children:"Settings → Git"})," to configure where worktrees are created. The path is relative to your project root. We recommend keeping worktrees outside the repository (e.g., ",e.jsx(n.code,{children:"../worktrees"}),")."]}),`
`,e.jsxs(n.h2,{id:"push-and-pull",children:["Push and Pull",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#push-and-pull",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"top-right-actions",children:["Top-Right Actions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#top-right-actions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The Git Management page includes quick Push and Pull buttons in the top-right corner:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pull"})," - Fetch and merge/rebase changes from remote",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Choose strategy: Rebase (default), Merge, or Fast-forward only"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Push"})," - Push your current branch to the remote",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Shows spinner while pushing"}),`
`,e.jsx(n.li,{children:"Displays error if authentication fails"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Both operations include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Loading spinners during execution"}),`
`,e.jsx(n.li,{children:"Success/error toast notifications"}),`
`,e.jsx(n.li,{children:"Automatic authentication dialog on auth failures"}),`
`]}),`
`,e.jsxs(n.h3,{id:"pull-strategies",children:["Pull Strategies",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pull-strategies",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rebase"})," (recommended) - Replays your commits on top of remote changes for linear history"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Merge"})," - Creates a merge commit when integrating remote changes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fast-forward only"})," - Only succeeds if your branch can be fast-forwarded (no merge needed)"]}),`
`]}),`
`,e.jsx(n.p,{children:"Configure the default strategy in the pull dropdown on the Repository Status section."}),`
`,e.jsxs(n.h2,{id:"git-authentication",children:["Git Authentication",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#git-authentication",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Coconut requires proper git authentication to push and pull changes to remote repositories. This section covers how to configure authentication for GitHub, GitLab, and other git providers."}),`
`,e.jsxs(n.h3,{id:"why-authentication-is-required",children:["Why Authentication is Required",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-authentication-is-required",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"When you use Coconut's Git features, the underlying git commands need to authenticate with your remote repository. Without proper authentication, operations will fail with error messages like:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"terminal prompts disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"could not read Username"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Authentication required"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Coconut runs git commands non-interactively (",e.jsx(n.code,{children:"GIT_TERMINAL_PROMPT=0"}),") to prevent the UI from hanging, so credentials must be configured ahead of time."]}),`
`,e.jsxs(n.h3,{id:"authentication-methods",children:["Authentication Methods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authentication-methods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Coconut supports all standard git authentication methods. Choose the one that best fits your workflow:"}),`
`,e.jsxs(n.h4,{id:"method-1-ssh-keys-recommended",children:["Method 1: SSH Keys (Recommended)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#method-1-ssh-keys-recommended",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"SSH keys are the most secure and convenient method for git authentication. They work seamlessly with Coconut's automated git operations."}),`
`,e.jsx(n.strong,{children:"Setup SSH Keys:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Generate a new SSH key:"}),`
`]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ssh-keygen"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -t"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ed25519"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -C"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "your_email@example.com"'})]})})})}),`
`,e.jsxs(n.p,{children:["When prompted, press Enter to save the key to the default location (",e.jsx(n.code,{children:"~/.ssh/id_ed25519"}),")."]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Start the SSH agent:"}),`
`]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"eval"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "$('}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ssh-agent"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -s"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:')"'})]})})})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Add your SSH key to the agent:"}),`
`]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ssh-add"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ~/.ssh/id_ed25519"})]})})})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Copy your public key:"}),`
`]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# macOS"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"pbcopy"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" <"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ~/.ssh/id_ed25519.pub"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Linux"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cat"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ~/.ssh/id_ed25519.pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" |"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" xclip"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -selection"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clipboard"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Windows (Git Bash)"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cat"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ~/.ssh/id_ed25519.pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" |"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" clip"})]})]})})}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Add the key to your git provider:"}),`
`]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"GitHub"}),": Settings → SSH and GPG keys → New SSH key"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"GitLab"}),": Preferences → SSH Keys"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bitbucket"}),": Personal settings → SSH keys"]}),`
`]}),`
`,e.jsxs(n.ol,{start:"6",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Update your remote URL to use SSH:"}),`
`]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check current remote URL"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" remote"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -v"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# If using HTTPS, switch to SSH"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" remote"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" set-url"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" origin"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" git@github.com:username/repository.git"})]})]})})}),`
`,e.jsxs(n.h4,{id:"method-2-git-credential-manager",children:["Method 2: Git Credential Manager",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#method-2-git-credential-manager",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Git Credential Manager securely stores your credentials using your operating system's credential store."}),`
`,e.jsx(n.strong,{children:"macOS (osxkeychain):"}),`
`,e.jsx(n.p,{children:"macOS comes with built-in credential helper support:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Check if already configured"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" config"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --get"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" credential.helper"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# If not configured, set it up"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" config"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --global"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" credential.helper"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" osxkeychain"})]})]})})}),`
`,e.jsx(n.p,{children:"The next time you push/pull, you'll be prompted for your username and password (or personal access token). These credentials will be stored securely in your macOS Keychain."}),`
`,e.jsx(n.strong,{children:"Linux/Windows (Git Credential Manager):"}),`
`,e.jsx(n.p,{children:"Install Git Credential Manager for enhanced credential storage:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# macOS (via Homebrew)"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"brew"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" git-credential-manager"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Linux (Debian/Ubuntu)"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"wget"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/git-ecosystem/git-credential-manager/releases/latest/download/gcm-linux_amd64.deb"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"sudo"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" dpkg"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -i"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" gcm-linux_amd64.deb"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Windows (via winget)"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"winget"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" Git.Git-Credential-Manager"})]})]})})}),`
`,e.jsxs(n.h4,{id:"method-3-personal-access-tokens-https",children:["Method 3: Personal Access Tokens (HTTPS)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#method-3-personal-access-tokens-https",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"For HTTPS authentication, use a Personal Access Token instead of your password."}),`
`,e.jsx(n.strong,{children:"Creating a Personal Access Token:"}),`
`,e.jsx(n.strong,{children:"GitHub:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Settings → Developer settings → Personal access tokens → Tokens (classic)"}),`
`,e.jsx(n.li,{children:"Generate new token"}),`
`,e.jsxs(n.li,{children:["Select scopes: ",e.jsx(n.code,{children:"repo"})," (full control of private repositories)"]}),`
`,e.jsx(n.li,{children:"Copy the token"}),`
`]}),`
`,e.jsx(n.strong,{children:"GitLab:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Preferences → Access Tokens"}),`
`,e.jsx(n.li,{children:"Create personal access token"}),`
`,e.jsxs(n.li,{children:["Select scopes: ",e.jsx(n.code,{children:"read_repository"}),", ",e.jsx(n.code,{children:"write_repository"})]}),`
`,e.jsx(n.li,{children:"Copy the token"}),`
`]}),`
`,e.jsx(n.strong,{children:"Option A: Enter Credentials via Coconut UI (Easiest)"}),`
`,e.jsx(n.p,{children:"For HTTPS remotes, Coconut provides a convenient UI to enter your credentials:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Navigate to ",e.jsx(n.strong,{children:"Settings → Git"})," or click the auth status indicator on the Git page"]}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:'"Enter Credentials"'})," button"]}),`
`,e.jsx(n.li,{children:"Enter your username and personal access token"}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:'"Save Credentials"'})]}),`
`]}),`
`,e.jsx(n.p,{children:"Coconut will automatically:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Configure the appropriate credential helper for your OS"}),`
`,e.jsx(n.li,{children:"Store credentials securely (macOS Keychain, Windows Credential Manager, etc.)"}),`
`,e.jsx(n.li,{children:"Test the authentication"}),`
`]}),`
`,e.jsx(n.strong,{children:"Option B: Command Line Setup"}),`
`,e.jsx(n.p,{children:"When prompted for a password during git operations, use your personal access token instead:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Configure git to cache credentials"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" config"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --global"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" credential.helper"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" store"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Next push/pull will prompt for credentials"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" push"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Username: your-username"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Password: <paste-your-personal-access-token>"})})]})})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," ",e.jsx(n.code,{children:"credential.helper store"})," saves credentials in plain text at ",e.jsx(n.code,{children:"~/.git-credentials"}),". For better security, use Git Credential Manager instead."]}),`
`,e.jsxs(n.h3,{id:"checking-authentication-status",children:["Checking Authentication Status",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#checking-authentication-status",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Coconut provides built-in tools to verify your git authentication:"}),`
`,e.jsx(n.strong,{children:"In the UI:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Navigate to ",e.jsx(n.strong,{children:"Settings → Git"})]}),`
`,e.jsx(n.li,{children:'Check the "Remote Authentication" section'}),`
`,e.jsx(n.li,{children:'Click "Check Status" to verify connectivity'}),`
`]}),`
`,e.jsx(n.p,{children:"You'll see:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["✅ ",e.jsx(n.strong,{children:"Authenticated"}),": Your git credentials are properly configured"]}),`
`,e.jsxs(n.li,{children:["❌ ",e.jsx(n.strong,{children:"Not Authenticated"}),": Authentication setup required"]}),`
`]}),`
`,e.jsx(n.p,{children:"The Git Management page also shows a small authentication badge in the top-left corner that links to Settings."}),`
`,e.jsx(n.strong,{children:"Via Command Line:"}),`
`,e.jsx(n.p,{children:"Test your authentication manually:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Test SSH connection (for SSH method)"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ssh"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -T"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" git@github.com"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Test HTTPS connection (for HTTPS method)"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ls-remote"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" origin"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" HEAD"})]})]})})}),`
`,e.jsxs(n.h3,{id:"troubleshooting-authentication",children:["Troubleshooting Authentication",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#troubleshooting-authentication",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"terminal-prompts-disabled-error",children:['"terminal prompts disabled" Error',e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#terminal-prompts-disabled-error",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"This error occurs when git tries to prompt for credentials but can't because Coconut runs git commands non-interactively."}),`
`,e.jsx(n.strong,{children:"Solution:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Set up SSH keys (recommended)"}),`
`,e.jsx(n.li,{children:"Configure Git Credential Manager"}),`
`,e.jsx(n.li,{children:"Use credential helper to cache tokens"}),`
`]}),`
`,e.jsxs(n.h4,{id:"authentication-timeout",children:["Authentication Timeout",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authentication-timeout",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Coconut times out git operations after 30 seconds to prevent indefinite hangs."}),`
`,e.jsx(n.strong,{children:"Solution:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure your credentials are properly cached"}),`
`,e.jsx(n.li,{children:"Check your network connection"}),`
`,e.jsx(n.li,{children:"Verify your remote repository is accessible"}),`
`]}),`
`,e.jsxs(n.h4,{id:"pushpull-fails-but-manual-commands-work",children:["Push/Pull Fails but Manual Commands Work",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pushpull-fails-but-manual-commands-work",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"If git commands work in your terminal but fail in Coconut, you may have credential helpers that only work interactively."}),`
`,e.jsx(n.strong,{children:"Solution:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Configure SSH keys (works in all contexts)"}),`
`,e.jsx(n.li,{children:"Use Git Credential Manager (persists across sessions)"}),`
`,e.jsxs(n.li,{children:["Avoid ",e.jsx(n.code,{children:"credential.helper cache"})," (only works in active terminal sessions)"]}),`
`]}),`
`,e.jsxs(n.h4,{id:"ssh-key-not-found",children:["SSH Key Not Found",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ssh-key-not-found",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`If you see "Permission denied (publickey)", your SSH key isn't being used.`}),`
`,e.jsx(n.strong,{children:"Solution:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Verify SSH agent is running"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ssh-add"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -l"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Add your key to the agent"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ssh-add"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ~/.ssh/id_ed25519"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Configure SSH to use your key automatically"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cat"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" >>"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ~/.ssh/config"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" <<"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#ADBAC7"},children:" EOF"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"Host github.com"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  HostName github.com"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  User git"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  IdentityFile ~/.ssh/id_ed25519"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  IdentitiesOnly yes"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#ADBAC7"},children:"EOF"})})]})})}),`
`,e.jsxs(n.h2,{id:"settings",children:["Settings",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settings",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The Git Settings page (",e.jsx(n.strong,{children:"Settings → Git"}),") provides configuration for git operations."]}),`
`,e.jsxs(n.h3,{id:"remote-authentication",children:["Remote Authentication",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#remote-authentication",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Authentication Status"})," - Real-time check of remote connectivity"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Credential Helper Info"})," - Shows configured credential helper and origin file"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Credential Input"})," - For HTTPS remotes, enter username and token directly"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Setup Instructions"})," - Quick reference for SSH keys and credential managers"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"worktree-location",children:["Worktree Location",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#worktree-location",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default Worktree Path"})," - Configure where new worktrees are created"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Validation"})," - Ensures paths are relative to project root (security)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Quick Presets"})," - Use recommended path with one click"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"best-practices",children:["Best Practices",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#best-practices",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use SSH keys"})," for the most seamless experience with Coconut"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Create feature branches"})," instead of committing directly to main/master"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Commit frequently"})," with descriptive messages"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Push regularly"})," to back up your work and collaborate with others"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use worktrees"})," for parallel work on multiple features"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configure merge strategy"})," based on your team's workflow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Check authentication status"})," before starting work to avoid errors"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"related-documentation",children:["Related Documentation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#related-documentation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://git-scm.com/docs/git-worktree",children:"Git Worktrees"})," - Official git worktree documentation"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh",children:"GitHub SSH Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://docs.gitlab.com/ee/user/ssh.html",children:"GitLab SSH Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/git-ecosystem/git-credential-manager",children:"Git Credential Manager"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"need-help",children:["Need Help?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#need-help",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"If you're experiencing git-related issues:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Check the error message in the Coconut UI"}),`
`,e.jsxs(n.li,{children:["Verify authentication status in ",e.jsx(n.strong,{children:"Settings → Git"})]}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"git config --list"})," to review your git configuration"]}),`
`,e.jsx(n.li,{children:"Test operations manually with git CLI commands"}),`
`,e.jsxs(n.li,{children:["Check ",e.jsx(n.a,{href:"https://github.com/lovelybunch/coconut/issues",children:"GitHub Issues"})," for similar problems"]}),`
`]})]})}function l(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{l as default,a as frontmatter};
