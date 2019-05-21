# Git使用笔记
推送本地分支local_branch到远程分支 remote_branch并建立关联关系
1. 远程已有remote_branch分支并且已经关联本地分支local_branch且本地已经切换到local_branch
	git push
2. 远程已有remote_branch分支但未关联本地分支local_branch且本地已经切换到local_branch
	git push -u origin/remote_branch
3. 远程没有remote_branch分支并，本地已经切换到local_branch
	git push origin local_branch:remote_branch

