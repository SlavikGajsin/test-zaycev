

const goods = [
    {id: 1, type: 'mango', price: 53},
    {id: 2, type: 'mango', price: 77},
    {id: 3, type: 'potato', price: 48},
    {id: 4, type: 'potato', price: 52},
    {id: 5, type: 'mango', price: 33},
    {id: 6, type: 'apple', price: 50},
    {id: 7, type: 'mango', price: 89},
    {id: 8, type: 'apple', price: 60},
    {id: 9, type: 'mango', price: 51},
    {id: 10, type: 'apple', price: 80},
];

// Первый метод (меняем сам массив goods)

goods.sort(function(obj) {
    if (obj.type == "mango") {
        return 1;
    }
    else return -1;
}).map(function(obj) {
    switch (obj.type) {
        case "apple" : {
            obj.price *= 3;
            return obj;
        }
        default : {
            return obj;
        }
    }
});

for (i = goods.length - 1; i >= 0; i--) {
    if (goods[i].type === 'mango') {
        goods.pop();
    }
}
console.log(goods);




// Второй метод - создаем новый массив

let newGoods = JSON.parse(JSON.stringify(goods)).filter(obj => {
    switch(obj.type) {
        case "apple" : {
            obj.price *= 3;
            return obj;
        }
        default: {
            if (obj.type != "mango") {
                return obj;
            }
            break;
        }
    }
});

console.log(newGoods);