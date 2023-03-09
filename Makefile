target default = one

one: 
	git status

# dt = $(shell date -R)

push:
	git add .
	git commit -m "new commit $(dt)"
	git fetch
	git merge
	git push origin develop

# cd .. &&
# git add .