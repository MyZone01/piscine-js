#/bin/bash

email=barsaliou1998@gmail.com
username=serignmbaye
git config --global credential.helper store
git config --global user.email "$email"
git config --global user.name "$username"
git config --list
