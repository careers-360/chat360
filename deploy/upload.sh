#!bin/bash
#!bin/bash
#Ideally these keys should be taken from env
export $(grep -v '^#' .env | xargs)

# aws s3 rm --recursive s3://production-cnext/frontend/_react

aws s3 sync ./dist s3://staging-cnext/frontend-chat360
