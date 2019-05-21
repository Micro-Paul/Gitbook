# Introduction


在你未做成功每件事之前，没有人会在乎你的感受！！！

### hexo写博客步骤

1. 安装相应的软件和搭建环境
2. 如果本地电脑上没有Micro-Paul.github.io文件夹，则使用git从GitHub上先拉取一份hexo分支项目
	https://github.com/Micro-Paul/Micro-Paul.github.io.git
3. 将_config.yml文件备份，git bash进入到Micro-Paul.github.io目录下，执行$ npm install，然后将_config.yml文件替换。
4. git bash进入到Micro-Paul.github.io目录下执行相关hexo 或git命令。
5. hexo clean #清除缓存 网页正常情况下可以忽略此条命令
6. hexo g #生成静态网页
7. hexo s #启动项目
8. hexo d #开始部署
9. hexo new xxx #直接在_posts文件夹下面生成对应的xxx.md文件
10. hexo new page "tag" #在source目录下生成tag文件夹和index.md文件
11. git status 查看本地库状态
12. git add --all 添加修改或删除文件到本地库
13. git commit -m "commit message" 提交到本地库
14. git push 推送到远程对应分支

### Gitbook写笔记书

1. 安装相应的软件和搭建环境
2. 新建对应的目录和笔记文件：xxx.md
3. 执行$ gitbook build 构建
4. 执行$ gitbook serve 预览
5. 执行$ node index.js 生成Docsets
6. 添加生成的Docsets导Zeal中
