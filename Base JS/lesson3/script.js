/** ТРЕТИЙ УРОК */

/*
    1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
    включительно, чтобы результат выглядел так:
    0 – это ноль
    1 – нечетное число
    2 – четное число
    3 – нечетное число
    …
    10 – четное число
 */

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}


/*
2. Выведите в консоль значения, указанные рядом с комментариями:
 */
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(`Автор поста: ${post.author}`);
console.log(`Дизлайки первого комментария: ${post.comments[0].rating.dislikes}`);
console.log(`Идентфикатор пользователя второго комментария: ${post.comments[1].userId}`);
console.log(`Второй комментарий: ${post.comments[1].text}`);


/*
    3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
    15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
 */

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
const newProducts = [];
products.forEach(product => {
    newProducts.push({
        id: product.id,
        price: product.price - product.price * 0.15,
    })
})

// Примечание: решил избавиться от прямой мутации объектов в массиве, хоть и неоптимально, но зато безопасно
// По возможности необходимо избегать прямой мутации массива/объекта

console.log("Продукты без скидок:", products);
console.log("Продукты со скидками", newProducts);


/*
    4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
    2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
    https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
    дополнительных видео в материалах урока.
 */

const productsWithPhotos = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const filteredProducts = productsWithPhotos.filter((product) => product.photos && product.photos.length > 0);
const sortedProducts = productsWithPhotos.sort((a, b) => a.price - b.price);

console.log("Отфильтрованный массив: ", filteredProducts);
console.log("Отсортированный массив: ", sortedProducts);

/*
    5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9,
    НЕ используя тело цикла. То есть выглядеть должно примерно так:
    for(…){ здесь пусто }
    Помните, что в первом, втором и третьем раздела цикла можно не только писать условия, или увеличивать счетчик
    например на 1, допустимы любые выражения, например вызовы функций.
 */

for(let i = 0; i < 10; console.log(`Число ${i++}`)) {}


/*
    6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
    только у вашей горки должно быть 20 рядов, а не 5:
    x
    xx
    xxx
    xxxx
    xxxxx
 */

for (let i = 0; i < 20; i++) {
    let symbols = [];
    for (let j = 0; j <= i; j++) {
        symbols.push('*');
    }
    console.log(symbols.join(''));
}

