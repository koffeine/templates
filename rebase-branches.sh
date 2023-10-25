#!/bin/bash

for i in $(git branch | grep -v master | awk '{print $1}'); do
	git checkout "$i"
	git rebase master
	git push -f
done

git checkout master
