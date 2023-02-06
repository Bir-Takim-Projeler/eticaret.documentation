

/**
 * @description create couchdb buckets and collections
 * curl -v -X POST http://10.143.201.101:8091/pools/default/buckets \
 */

(async () => {

    // create bucket if not exist
    await fetch("http://127.0.0.1:8091/pools/default/buckets", {
        method: "POST",
        mode: "no-cors",
        headers: {
            Authorization: `Basic ${Buffer.from("administrator:administrator"/** adjust the credential of yours */).toString("base64")}`
        },
        body: new URLSearchParams({
            name: "ecommerce",
            bucketType: "couchbase",
            ramQuota: "512"
        })
    }).then(data => data.text()).then(data => console.log("bucket created"))

    // create collections on default scope
    for await (const collection of ["Users", "Invertory", "Addresses", "Carts", "Discounts", "Products", "Roles", "Sessions"]) {
        await fetch("http://localhost:8091/pools/default/buckets/ecommerce/scopes/_default/collections", {
            method: "POST",
            mode: "no-cors",
            headers: {
                Authorization: `Basic ${Buffer.from("administrator:administrator"/** adjust the credential of yours */).toString("base64")}`
            },
            body: new URLSearchParams({
                name: collection,
                maxTTL: "0"
            
            })
        }).then(data => data.text()).then(data => console.log("collection %s created on default _scope", collection))
    }
})()

