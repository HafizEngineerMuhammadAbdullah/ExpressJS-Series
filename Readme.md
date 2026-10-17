Add node_modules to .gitignore so Git won’t track or push it.
Your current node_modules entry already works; the trailing slash just makes it clear that it’s a directory.

If node_modules was already committed, .gitignore won’t untrack it. You’d need to run git rm -r --cached node_modules and then commit that change.
Use a forward slash: node_modules. Git accepts forward slashes in .gitignore on Windows too.