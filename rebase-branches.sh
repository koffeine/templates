#!/bin/bash

for i in $(git branch | grep -v main | awk '{print $1}'); do
	git checkout "$i"
	git rebase main
	git push -f
done

git checkout main
