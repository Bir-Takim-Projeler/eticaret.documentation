
# Subrepo (Sub Modules) rehberi

## Subrepo nedir?
Git repository'si icinde baska bir repository olarak dusunebilir


Bir utilty reposu var diyelim bu repodaki proje baska repolarda alt yapi olarak kullanilacak diyelim. bu repoyu submodules sayesinde baska bir repoya dahil edebiliyoruz

## ornek;

app ve utils adinda iki repomuz var diyelim. Ve bu 2 repo hali hazirda githubda durdugunu varsayalim app reposu utils reposundaki kodlari bir sekilde kullanacak


```bash
#app reposunu app/ dizinine clone ladik.
git clone git@github.com:birkullanici/app app

# simdi utils reposunu app/utils yoluna dahil edelim
# ilk olarak app dizinine gidelim
cd app

# utils reposunu submodule olarak klonlayalim
git submodule add git@github.com:birkullanici/utils utils
# sub repomuz app/utils dizinine clonelanacak
```

![alt text](Capture.PNG)  
Resimde goruldugu gibi submoduller githubda bu sekilde gosteriliyor.
Artik bu klasorler sadece bir placeholder yada sembolik link gorevi goruyor o dizinlerin contenti baska bir repositorye ait


## submodule ve git iliskisi

### Parent repository de bir sey commitlenirse ne olur?
sub moduller bu commitlerden etkilenmez. sub moduledeki degisiklikler takip edilmez

### sub moduledeki degisiklikeri commitleyebilir miyim?
evet submodulun dizininde kullanilan git komutlari sub module icin gecerli olur

### sub moduldeki degisiklikleri nasil cekebilirim?
repository 0 dan clonlanmis ise, sub repositoryler submodules e eklenir ancak varsayilan olarak fetch/pull islemleri olmaz 
```bash
# taze klonlanmis bir repository'e bagli sub modulleri cekmek icin
git submodule update --init 

# submoduledeki degisiklikleri fetch icin
git submodule update --recursive

# submoduledeki degisikleri pull icin
git submodule update --remote --merge

```
submodule directorysinde normal bir sekilde git komutlarini kullanabilirsin
```bash
cd utils

git add . && git commit -m "her hangi bir commit mesaji" && git push
```