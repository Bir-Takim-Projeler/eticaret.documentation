

```
src
└───main.ts
└───app.module.ts
...
└───dtos
│   └──  product.dto.ts
|    ...
└───helpers
│   └──  any.helper.ts
└───decorators
│   └──  decorator.ts
└───protos
│   └──  product.proto
└───modules
    └──  product-update
    |     └───product-update.module.ts
    |     └───product-update.controller.ts
    |     └───product-update.service.ts
    |     └───specs
    |          └───product.controller.spec.ts
    |           ...
    └──  product-add
         ...
```

___

## main.ts

entry file for microservice, creates express or fastify app

## app.module.ts

global module for microservice,

## dtos/

foldor contains all dto files to verify request body.

eg: product.dto.ts 

```ts
export class ProductCreateDto {

    @IsString()
    id: string;

    @IsNumber()
    price: number;
}
```
it might be used with n! architecture and can moved another project

## helpers/
 contains any helper functions or classes 
it might be used with n! architecture and can moved another project


## decorators/
 directory contains any typescript decorator
it might be used with n! architecture and can moved another project



## protos/ 
directory contains all proto files for grpg functions
it must be fetched from a central repository etc to avoid DIY


## modules/ 
contains all submodules of microservice
## modules/serviceName/specs 
contains test files of the module
