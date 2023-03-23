target default: one
one: 
	git status

dt=$(shell $(date "+%D %T"))
current="`date +'%Y-%m-%d %H:%M:%S'`"
msg="Updated: $(current)"

push:
	git add .
	git commit -m "$(msg)"
	git fetch
	git merge
	git push origin develop	
test:
	git commit -m "$(msg)"
# cd .. &&
# git add .