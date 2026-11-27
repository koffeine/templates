#!/bin/bash

for i in $(git branch --format='%(refname:short)' | grep -vx main); do
	git checkout "$i"
	git rebase --fork-point main
	git push -f
done

git checkout main
