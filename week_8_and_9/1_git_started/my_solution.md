## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
* 'add' places the filenames that you specify into the staging area for committing. Ex. git add octocat.txt

#### branch
* 'branch' - if branch is used with no arguments, it lists all the branches in the repo and the current branch you are working in. If used with the -d argument you can delete a branch specified

#### checkout
* 'checkout' -if used with no argument, checkout switches between branches in a repo. if used with -b argument, creates a new branch and switches

#### clone
* 'clone' - creates a working copy of a local repository if you pass a local directory in. For a remote server, include path to host and repository on remote server.

#### commit
* 'commit' - if used with no arguments, commits all changes to HEAD. If used with -a commits all staged files and files that had changes made to them within your repository

#### fetch
* 'fetch' - downloads changes from a repository, and stores them in your local repository, fetch does not automatically merge these committs though

#### log
* 'log' - shows all committ logs with id's and which branch they were made on.

#### merge
* 'merge' - combines all development changes from two or more histories into the same branch

#### pull
* 'pull' - combination of a fetch and a merge. git pull fetches and merges changes from a remote repository to your working local repository.

#### push
* 'push' - pushes all local changes to remote repository so that others can use them. if use with --all, pushes ALL branches to remote repo. if you put : in front of the branch name, it deletes the branch. 

#### reset
* 'reset' - resets branch HEAD to specified state, can revert to older version of repository, or reset until a certain commit was made.

#### rm
* 'rm' - removes files from the working tree or from the index

#### status
* 'status' - git status shows the current state of the staging area and files that are ready to be committed, or those that need to be committed or changed.


## Release 3: Git Workflow

- Push files to a remote repository
	* add files that you want to push to the staging area using git -add <filename>
	* use git status to see stage state of files and then decide whether you are ready to push
	* use git push origin master to sync local changes with remote repo
- Fetch changes
	* To fetch changes from a repository: 
		* check the current remote repo setting - `git remote -v`
		* set up new remote repo to fetch from - `git remote add upstream url/to/repo`
		* fetch changes - `git fetch upstream` (this has not been merged yet)
		* check to see if upstream is stored - `git branch -va`
		* make sure you are in master branch - `git branch` or `git checkout master`
		* merge changes - git merge upstream/master
		* commit changes to your remote repo on github - `git commit -m 'message'`
		* push changes to repo - git push origin master
- Commit locally
	* add files to staging - `git add <filename>`
	* commit changes (but don't push them yet) - `git commit -m 'message'`
		* this adds the changes to local repo but hasnt merged with remote yet until you use push.

#### Reflection
* For this challenge, I found it extremely useful to start using git through the command line. Previously, I had been using the app, and while I had some understanding of what the app was actually doing, this challenge helped to solidify a lot of the questions I had. I feel like I definitely understand git/github better now and am excited to start using it through the command line like a true programmer :D. 