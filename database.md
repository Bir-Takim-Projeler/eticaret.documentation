## Couchbase database


## installations
skip step if you have already have in your machine
1. install nodejs 18.xx
follow instructions [here](https://nodejs.org/en/) to install nodejs
2. install docker
follow instructions [here](https://docs.docker.com/engine/install/) to install docker
3. install zsh
    - macOs comes with zsh
    - [windows](https://walterteng.com/using-zsh-on-windows)
    - [ubuntu](https://linuxhint.com/installing_zsh_ubuntu/)
## install

```shell
docker run -d --name ecommerce -p 8091-8097:8091-8097 -p 9123:9123 -p 11207:11207 -p 11210:11210 -p 11280:11280 -p 18091-18097:18091-18097 couchbase
```

after container stand up
visit http://localhost:8091
to create user, use credentials below
- username = administrator
- password = administrator

## before start
delete existing containers 

```bash
 docker rm -f db db2 db3 ...
 ```
## download


```bash
# or basically `git clone` if you dont use it in other projects
npx degit https://github.com/takimbirprojeler/eticaret.scripts.git scripts
```

## usage

```bash
zsh scripts/create-db.sh [flags, ie --dev, --test] [args, ie CB_USERNAME=administrator]
```

#### flags

`--dev` run script for development enviroment , 
`--test` run script for test enviroment.  *you can ony have one of these flags* default: --test


#### arguments

`CB_USERNAME` username of couchbase cluster; default: *administrator*
`CB_PASSWORD` password of couchbase cluster; default: *administrator*
`CB_CONTAINER_PREFIX` prefix name of coucbase containers; default: *ecommerce*
`CB_CLUSTER_NAME` couchbase cluster name; default: *ecommerce*
`CB_BUCKET_NAME` couchbase bucket name; default: `CB_CLUSTER_NAME`
`CB_SCOPE_NAME` name of the scope; default: *_default*
`CB_HOST` hostname for couchbase instance; default: *localhost*
`CB_PORT` port of coucbase instance; default: *8091*
`CB_COLLECTIONS` list of collection seperated by `,` default: `user,inventory,address,cart,discount,product,category,role,session,perm`

#### example

```bash
zsh scripts/create-db.sh --dev CB_HOST=127.0.0.1 CB_PASSWORD=mysupersecretusername
```