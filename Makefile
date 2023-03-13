target default = one

one: 
	git status

dt = $(date "+%D %T")

push:
	git add .
	git commit -m "new commit $(dt)"
	git fetch
	git merge
	git push origin develop

test:
	git commit -m "test $(dt)"
# cd .. &&
# git add .