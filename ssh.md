1. download ssh and create ssh key pair
    mac and windows have different approaches, please check the links:
        https://support.atlassian.com/bitbucket-cloud/docs/set-up-personal-ssh-keys-on-windows/

        https://support.atlassian.com/bitbucket-cloud/docs/set-up-personal-ssh-keys-on-macos/

2.  check the public key:
    public key has an extension .pub

3. add ssh public key to github
    check the link
        https://www.w3schools.com/git/git_remote_add_ssh.asp?remote=github

4. if you are already using a github repo, you need to delete it and add it again:
    first test the connection:  ssh -T git@github.com  
    remove current origin: git remote rm origin 'https://github.com/takimbirprojeler/eticaret.backend.node.git' 
    add again(this time use ssh link): git remote add ssh-origin 'git@github.com:takimbirprojeler/eticaret.backend.node.git'  
    test again with git pull
