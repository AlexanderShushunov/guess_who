#!/bin/sh
function printStep {
    echo "-----------------------------"
    echo "  "$1
    echo "-----------------------------"
}

function printHelp {
    echo "Usage:"
    echo " make-and-deploy.sh ip-address"
}

function parsArguments {
    deployAddress=$1
}

function checkArguments {
    if [ $# -eq 0 ]
    then
        printHelp
        exit 1
    fi
}

echo $@
checkArguments "$@"
parsArguments "$@"

projectDir=$PWD

printStep "build image"
./build-image.sh

printStep "restart on server"
ssh root@${deployAddress} 'docker stop guess'
ssh root@${deployAddress} 'docker container rm guess'
ssh root@${deployAddress} 'docker run --detach --publish=8090:80 --name=guess ashushunov/guess_how'
