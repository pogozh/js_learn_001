target default: one
one: 
	git status

# dt=$(shell $(date "+%D %T"))
# current=$(shell $(date))
# msg="Updated: `$(current)`"

push:
	git add .
	git commit -m "updated: $(date)"
	git fetch
	git merge
	git push origin develop	
test:
	git commit -m "`date`"
# cd .. &&
# git add .