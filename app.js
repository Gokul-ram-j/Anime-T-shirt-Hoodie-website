const collection=document.querySelector(".collection")
const hoodie=document.querySelector(".hoodie")
const tshirt=document.querySelector(".tshirt")
let priceList=[[],[999,559],[1299,459],[999,499],[699,449],[1449,899],[1099,759],[899,569],[1299,799],[1599,1299],[1899,1099],[1699,899],[1099,799],[999,749]]

// --------------------------------------------- HOODIE -----------------------------------------------------
for(i=2;i<=12;i++){
    const item=document.querySelector(".item").cloneNode(true)
    let dresspic=item.querySelector(".dresspic")
    dresspic.style.backgroundImage=`url(./clothimg/image${i}.jpg)`
    hoodie.append(item)
    
    let hname=item.querySelector("h4")
    hname.innerHTML=`hoodie ${i}` 

    let actualPrice=item.querySelector(".actual-price")
    let price=item.querySelector(".price")
    console.log(actualPrice,price)

    price.innerHTML=`<span>&#8377</span>${priceList[i][1]}</span>`
    actualPrice.innerHTML=`<span>&#8377</span>${priceList[i][0]}</span>`
    
}

// ----------------------------------------  TSHIRT  --------------------------------------------------------
for(i=2;i<=12;i++){
    const item=document.querySelector(".titem").cloneNode(true)
    let dresspic=item.querySelector(".tdresspic")
    dresspic.style.backgroundImage=`url(./clothimg/timage${i}.jpg)`
    tshirt.append(item)
    
    let hname=item.querySelector("h4")
    hname.innerHTML=`T-shirt ${i}` 

    let actualPrice=item.querySelector(".actual-price")
    let price=item.querySelector(".price")
    console.log(actualPrice,price)

    price.innerHTML=`<span>&#8377</span>${priceList[i][1]}</span>`
    actualPrice.innerHTML=`<span>&#8377</span>${priceList[i][0]}</span>`
    
}



