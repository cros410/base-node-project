git diff --name-only HEAD^ HEAD | grep ^services/ | awk -F '/' '{print $2}'  | uniq -c | awk '{print $2}'

git diff --shortstat HEAD^ HEAD | awk '{print $4+$6}'

git reset HEAD~1
