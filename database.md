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
use credentials below
- username = administrator
- password = administrator


create buckets and collections under _default scope run script below

`npx run-url https://raw.githubusercontent.com/takimbirprojeler/eticaretmain/main/create-db.js`



