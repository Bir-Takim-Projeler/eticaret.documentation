
# Yarn monorepository guideline

## Neden monorepository kullanmalıyım?

- Butun projeler bağımlılık olarak bir birine bağlanabilir.
- Bağımlılıklar birlikte yüklenir ve yarn bunları daha iyi bir şekilde optimize eder (Circular dependency installation) önüne geçer. 
- Her proje için farklı repository kullanmak yerine. Bütün projeleri tek bir noktada kontrol etme imkanı verir.

## Monorepo kurulumu

### Yarn workspace

Genel olarak monorepo yapısı aşağıdaki gibidir.
```
root dizin
│   package.json 
│
└───project-1
│   │   index.js
|   |   package.json
└───project-2
    │   index.js
    |   package.json
```


 root dizindeki package.json dosyası

- private fieldinin true olmasi gerekli
- workspaces fieldi ise hangi dizinlerin proje dizini oldugunu belirtiyor. ` workspaces: ["package_name", "..."] ` seklinde değer alıyor
```json
 {
  "private": true,
  "workspaces": ["proje-1", "proje-2"] 
 }
```


Şimdi projelerimizi oluşturalım

/project-1/package.json
```json

{
  "name": "proje-1",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "proje-2": "1.0.0"
  }
}
```



/project-2/package.json
```json

{
  "name": "proje-2",
  "version": "1.0.0",
  "main": "index.js"
}
```

`yarn install` komutunu calıştırdığımızda herşey yolunda giderse proje yapısı aşağıdaki gibi olmalıdır.


```
/package.json
/yarn.lock

/node_modules
/node_modules/cross-env
/node_modules/proje-1 -> /proje-2

/workspace-a/package.json
/workspace-b/package.json
```

not: Başka bir paket "proje-1" i istemedekçe proje-1 `node_modules` içinde yayınlanmayacaktır.


---
Yarn workspace kullanarak olusturdugumuz bir paketi npmde yayınlamadan dogrudan bağımlılık havuzunun icine kattık. Bu şekilde berzer bağımlılıkları kullanan paketler. Ortak bir havuzdan bu bağımlılıklara ulaşma imkanı sağladı 