import axios from 'axios';

// 1. Функція, що створює та повертає Promise
const getComment = function () {
    return new Promise((resolve, reject) => {

        setTimeout(() => {// Використовуємо setTimeout для затримки

            axios.get('https://jsonplaceholder.typicode.com/comments/1')// Робимо запит за допомогою axios
                .then(response => {
                    // Якщо запит успішний, передаємо дані далі
                    resolve(response.data);
                })
                .catch(error => {// Якщо сталася помилка, відхиляємо проміс

                    reject(error);
                });
        }, 4000); // 1 секунда затримки
    });
};

let func1 = async () => {
    try {
        let result = await getComment();
        console.log("Comment are : ", result);
    } catch (error) {
        console.error("Comment not find :", error);
    };
}
func1();



let getByPost = function () {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            axios.get("https://jsonplaceholder.typicode.com/posts/2").then(response => 
            {
                resolve(response.data);

            }).catch(error => 
                {

                reject(error);
                });
            
        }, 2000)
    })
}

let func2 = async () => {
    try {
        let result2 = await getByPost();
        console.log("Post are : ", result2);
    } catch (error) {
        console.error("Post are not find ", error);
    }
}
func2();