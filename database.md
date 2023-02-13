## Couchbase database
## prerequests

- docker installed on local machine
- nodejs 18 or later

## install

```shell
docker run -d --name ecommerce -p 8091-8097:8091-8097 -p 9123:9123 -p 11207:11207 -p 11210:11210 -p 11280:11280 -p 18091-18097:18091-18097 couchbase
```

after container stand up
visit http://localhost:8091
to create user, use credentials below
- username = administrator
- password = administrator


## create buckets, collections, and seed with data

#### clone eticaret.scripts repo

```bash
npx degit https://github.com/takimbirprojeler/eticaret.scripts.git scripts
```
-degit clones git repositories without create local referance

#### run script

*Use git bash on windows*

```bash
cd scripts
```

```bash
bash create-db.sh .
```
*"." is relative path of create-db.sh script, if your terminal in same directory leave it as "."*
