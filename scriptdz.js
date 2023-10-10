// // // 1 task

// // //let name = prompt("Введите ваше имя:");
// // //if (name.charAt(0).toLowerCase() === "a") {
// //   //alert("welcome");
// // //} else {
// //   //alert("иди гуляй вася");
// // //}



// // // 2 task
// // //let b =prompt('напишите цифру я скажу четная или нет')

// // //if( b % 2 === 0) {
// //   //  alert ('welcome')
// // //}
// // //else
// // //{
// //   //  alert ('иди в садик')
// // //}

// // // 3 task

// // //let c =prompt('напишите цифру я скажу четная или нет')

// // //if( c.length % 2 === 0) {
// //   //  alert ('welcome')
// // //}
// // // //else
// // // //{
// // //   //  alert ('иди в садик')
// // // //}




// // // //...........................................................................................................................................






// // // // let name =prompt("как вас зовут?")
// // // // let account = "7777"
// // // // let money ="10000"

// // // // if(name === "Alex") {
// // // //   +prompt("number schet")
// // // //    if (name === 7777){
// // // //     alert("doog")
// // // //   }
// // // // }







// // // //.......................................................................................................................................





// // // // let guest =+prompt("сколько занято")
// // // // let name =prompt("как вас зовут")
// // // // let age =+prompt("сколько вам лет")
// // // // let money =+prompt("сколько у вас денег")
// // // // if(name.charAt(0).toLowerCase() === "a"&& age >= 20 && age <= 40 && money>=100){
// // // //   alert("welcome")
// // // // }
// // // // else{
// // // //   alert("good bye")
// // // // }

// // // // let guest=+prompt("cколько людей в клубе")
// // // // let name=prompt("как вас зовут")



// // // // if(name.charAt(0).toLowerCase() === "a"){

// // // //    let age =+prompt("сколько вам лет")

// // // //      if( age >= 20 && age <= 40){

// // // //        let money =+prompt("сколько у вас денег")

// // // //          if(money >= 100){

       
// // // //           let guestlist =+prompt("сколько вас")

// // // //              if(guest + guestlist<= 10){
// // // //                alert("welcome ")
// // // //              }

// // // //               else{
// // // //                alert("иди в другой клуб нет мест")
// // // //               }
           

// // // //            }
// // // //          else {
// // // //          alert("good bye")
// // // //          }
// // // //     }
// // // //     else {
// // // //     alert("good bye")
// // // //    }

// // // // }
// // // // else {
// // // //   alert("good bye")
// // // // }




// // // // 11111111111
// // // //// let priceList = [30000, 2000, 11000, 33000, 2000, 100000,57000, 14000, 18000, 8000]

// // // // let from = prompt('цена от')
// // // // let up = prompt('цена до')


// // // //22222222222
// // // // let students = ['baxtzod', 'xamza', 'islom', 'abdumanon', 'xojik', 'aziz'] // longest name



// // // let pricelist =[ 4000,2000,15000,23000,35000,50000,97000,40000 ]
// // //  let from = +prompt('цена от')
// // //  let up = +prompt('цена до')


// // //  if(from >  1000 && up <= 10000){
// // //   alert(" Мы можем предлажить вам такие авто как: Tico , Matiz , Nexia , Spark")

// // //  }
// // //  else if(from > 12000 && up <= 30000){
// // //   alert(" Мы можем предлажить вам такие авто как: Traker 2, Jentra, BYD ")
// // // }

// // // else if(from > 35000 && up <= 70000){
// // //   alert(" Мы можем предлажить вам такие авто как: Camaro, Corvette , Tesla, Cherry ")
// // // }

// // // else if(from > 70000 && up <= 100000){
// // //   alert(" Мы можем предлажить вам такие авто как: Taxo, Tesla X ")
// // // }




// // //  else {
// // //   alert("good bye bitch")
// // //  }

// // //  ///////////////////////////////////////////////////////////////////////////////////////////////////
// // //  let students = [
// // //   { name: "Safir" },
// // //   { name: "Baxtzod" },
// // //   { name: "Islom" },
// // //   { name: "eva_elfi" },
// // //   { name: "Shaxzod" },
// // // ];

// // // let longestname = students.filter((student) => {

// // //   return student.name.length === Math.max(...students.map(({ name }) => name.length));
// // // })[0].name;

// // // alert(`Самое длинное имя: ${longestname}`);





// // // JS Homework 5

// // // Тест на нахождение ключей
// // // Сложить все цифры из массива с объектами в переменную `total`

// // // let arr = [
// // //   [{a: {price: 21}}],
// // //   [{a: {price: 35}}],
// // //   [{a: {price: 44}}]
// // // ]



// // // let total = 0;
// // // for (let c = 0; c < arr.length; c++) {
// // //   for (let key in arr[c][0]) {
// // //     total += arr[c][0][key].price;
// // //   }
// // // }
// // // console.log(total);






// // // let arrr = [4, 16, 19, 22, 11, 144, 967, 19124];
// // // let even = [];
// // // let odd = [];

// // // for (let c = 0; c < arrr.length; c++) {
// // //   if (arrr[c] % 2 === 0) {
// // //     even.push(arrr[c]);
// // //   } else {
// // //     odd.push(arrr[c]);
// // //   }
// // // }

// // // console.log(even); 
// // // console.log(odd); 


// // // let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

// // // let str = 0
// // // let nums = 0
// // // let others = 0

// // // let stingFiltred = arr.filter(item => typeof(item) === 'string');
// // // console.log(stingFiltred);

// // // let numsFiltred = arr.filter(num => typeof(num) === 'number' )
// // // console.log(numsFiltred);

// // // let othersFiltred = arr.filter(other => typeof(other) !== 'string' && typeof(other) !== 'number')
// // // console.log(othersFiltred);






// // let user = {
// //   passport:{
// //   name:"safir",
// //   weight: 181, 
// //   year: "2008",
// // },
// //   status:"2008 vor zakon",
// //   engine: 2.5,
// //   smartphone: "samsung",
// //   work:"Frontend-разработчик",
// //   day: 8,
// //   month: 9,
// //   car: "BMW",
// //   govno:"mercedes",
// //   type:"natural",
// // }

// // // Создаем два усложненных объектаt 
// //  let obj1 = {
// //   name: "Alice",
// //   age: 25,
// //   occupation: "Engineer",
// //   salary: 50000,
// //   hobbies: ["reading", "hiking", "photography"]
// // };

// // let  obj2 = {
// //   name: "Bob",
// //   age: 30,
// //   occupation: "Designer",
// //   salary: 60000,
// //   hobbies: ["painting", "traveling", "cooking"]
// // };

// // // Соединяем два объекта в один новый объект, не мутируя старые
// //   let newObj = { ...obj1, ...obj2 };

// // // Получаем все ключи нового объекта в отдельный массив
// // let  keys = Object.keys(newObj);

// // // Получаем все значения нового объекта в отдельный массив
// // let  values = Object.values(newObj);

// // // Объединяем два массива в один целый массив
// // let  combinedArray = [...keys, ...values];

// // // Отфильтровываем все данные по их типу (строки в строки, цифры в цифры)
// // let  filteredArray = combinedArray.filter(item => {
// //   if (typeof item === "string") {
// //     return isNaN(item);
// //   } else {
// //     return !isNaN(item);
// //   }
// // });

// // console.log(filteredArray);












// // Раскидать людей в разные массивы в зависимости от их почты
// let users = [
//   {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//           "street": "Kulas Light",
//           "suite": "Apt. 556",
//           "city": "Gwenborough",
//           "zipcode": "92998-3874",
//           "geo": {
//               "lat": "-37.3159",
//               "lng": "81.1496"
//           }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//           "name": "Romaguera-Crona",
//           "catchPhrase": "Multi-layered client-server neural-net",
//           "bs": "harness real-time e-markets"
//       }
//   },
//   {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//           "street": "Victor Plains",
//           "suite": "Suite 879",
//           "city": "Wisokyburgh",
//           "zipcode": "90566-7771",
//           "geo": {
//               "lat": "-43.9509",
//               "lng": "-34.4618"
//           }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//           "name": "Deckow-Crist",
//           "catchPhrase": "Proactive didactic contingency",
//           "bs": "synergize scalable supply-chains"
//       }
//   },
//   {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "address": {
//           "street": "Douglas Extension",
//           "suite": "Suite 847",
//           "city": "McKenziehaven",
//           "zipcode": "59590-4157",
//           "geo": {
//               "lat": "-68.6102",
//               "lng": "-47.0653"
//           }
//       },
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//       "company": {
//           "name": "Romaguera-Jacobson",
//           "catchPhrase": "Face to face bifurcated interface",
//           "bs": "e-enable strategic applications"
//       }
//   },
//   {
//       "id": 4,
//       "name": "Patricia Lebsack",
//       "username": "Karianne",
//       "email": "Julianne.OConner@kory.org",
//       "address": {
//           "street": "Hoeger Mall",
//           "suite": "Apt. 692",
//           "city": "South Elvis",
//           "zipcode": "53919-4257",
//           "geo": {
//               "lat": "29.4572",
//               "lng": "-164.2990"
//           }
//       },
//       "phone": "493-170-9623 x156",
//       "website": "kale.biz",
//       "company": {
//           "name": "Robel-Corkery",
//           "catchPhrase": "Multi-tiered zero tolerance productivity",
//           "bs": "transition cutting-edge web services"
//       }
//   },
//   {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "username": "Kamren",
//       "email": "Lucio_Hettinger@annie.ca",
//       "address": {
//           "street": "Skiles Walks",
//           "suite": "Suite 351",
//           "city": "Roscoeview",
//           "zipcode": "33263",
//           "geo": {
//               "lat": "-31.8129",
//               "lng": "62.5342"
//           }
//       },
//       "phone": "(254)954-1289",
//       "website": "demarco.info",
//       "company": {
//           "name": "Keebler LLC",
//           "catchPhrase": "User-centric fault-tolerant solution",
//           "bs": "revolutionize end-to-end systems"
//       }
//   },
//   {
//       "id": 6,
//       "name": "Mrs. Dennis Schulist",
//       "username": "Leopoldo_Corkery",
//       "email": "Karley_Dach@jasper.info",
//       "address": {
//           "street": "Norberto Crossing",
//           "suite": "Apt. 950",
//           "city": "South Christy",
//           "zipcode": "23505-1337",
//           "geo": {
//               "lat": "-71.4197",
//               "lng": "71.7478"
//           }
//       },
//       "phone": "1-477-935-8478 x6430",
//       "website": "ola.org",
//       "company": {
//           "name": "Considine-Lockman",
//           "catchPhrase": "Synchronised bottom-line interface",
//           "bs": "e-enable innovative applications"
//       }
//   },
//   {
//       "id": 7,
//       "name": "Kurtis Weissnat",
//       "username": "Elwyn.Skiles",
//       "email": "Telly.Hoeger@billy.biz",
//       "address": {
//           "street": "Rex Trail",
//           "suite": "Suite 280",
//           "city": "Howemouth",
//           "zipcode": "58804-1099",
//           "geo": {
//               "lat": "24.8918",
//               "lng": "21.8984"
//           }
//       },
//       "phone": "210.067.6132",
//       "website": "elvis.io",
//       "company": {
//           "name": "Johns Group",
//           "catchPhrase": "Configurable multimedia task-force",
//           "bs": "generate enterprise e-tailers"
//       }
//   },
//   {
//       "id": 8,
//       "name": "Nicholas Runolfsdottir V",
//       "username": "Maxime_Nienow",
//       "email": "Sherwood@rosamond.me",
//       "address": {
//           "street": "Ellsworth Summit",
//           "suite": "Suite 729",
//           "city": "Aliyaview",
//           "zipcode": "45169",
//           "geo": {
//               "lat": "-14.3990",
//               "lng": "-120.7677"
//           }
//       },
//       "phone": "586.493.6943 x140",
//       "website": "jacynthe.com",
//       "company": {
//           "name": "Abernathy Group",
//           "catchPhrase": "Implemented secondary concept",
//           "bs": "e-enable extensible e-tailers"
//       }
//   },
//   {
//       "id": 9,
//       "name": "Glenna Reichert",
//       "username": "Delphine",
//       "email": "Chaim_McDermott@dana.io",
//       "address": {
//           "street": "Dayna Park",
//           "suite": "Suite 449",
//           "city": "Bartholomebury",
//           "zipcode": "76495-3109",
//           "geo": {
//               "lat": "24.6463",
//               "lng": "-168.8889"
//           }
//       },
//       "phone": "(775)976-6794 x41206",
//       "website": "conrad.com",
//       "company": {
//           "name": "Yost and Sons",
//           "catchPhrase": "Switchable contextually-based project",
//           "bs": "aggregate real-time technologies"
//       }
//   },
//   {
//       "id": 10,
//       "name": "Clementina DuBuque",
//       "username": "Moriah.Stanton",
//       "email": "Rey.Padberg@karina.biz",
//       "address": {
//           "street": "Kattie Turnpike",
//           "suite": "Suite 198",
//           "city": "Lebsackbury",
//           "zipcode": "31428-2261",
//           "geo": {
//               "lat": "-38.2386",
//               "lng": "57.2232"
//           }
//       },
//       "phone": "024-648-3804",
//       "website": "ambrose.net",
//       "company": {
//           "name": "Hoeger LLC",
//           "catchPhrase": "Centralized empowering task-force",
//           "bs": "target end-to-end models"
//       }
//   }
// ]
// let emails = {
//   org: [],
//   net: [],
//   info: []
// }
// let other = []




// // users.forEach(item=>{
// //     if(item.email.includes('org')){
// //         emails.org.push(item.email)
// //     }else if (item.email.includes('net')){
// //         emails.net.push(item.email)
// //     }else if(item.email.includes('info')){
// //         emails.info.push(item.email)
// //     }else{
// //         other.push(item.email)
// //     }
// // })

 

// Отфильтровать задачи в переменные а и b
    // Сохранить количество в ключе count
    // Сохранить сами задачи в массиве-ключе arr
    let arr = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
  
            "completed": 
true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]
       

    let a = {
        count: 0,
        arr: []
      };
      
      let b = {
        count: 0,
        arr: []
      };
      

 for (let i = 0; i< arr.length; i++)
 {
    let task = arr[i];
    if(task.completed){
        b.count++;
        b.arr.push(task)
    }
    else{
        a.count++;
        a.arr.push(task)
    }
 }
 let aa = {
    count: 0,
    arr: []
  };
  
  let bb = {
    count: 0,
    arr: []
  };
  
  for (let task of arr) {
    if (task.completed) {
      bb.count++;
      bb.arr.push(task);
    } else {
      aa.count++;
      aa.arr.push(task);
    }
  }

  


  console.log(aa);
  console.log(bb);

      
      console.log(arr);
      console.log(a);
      console.log(b);
   /////////////////////////////////////////////////////////////////////////////

   
     // Раскидать людей в разные массивы в зависимости от их почты
    let users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
            }
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
            }
        }
    ]
   
      
      let emails = {
        org: [],
        net: [],
        info: []
      };
      
      let other = [];
      
      for (let user of users) {
        let email = user.email.split('.')[1];
        switch (email) {
          case 'org':
            emails.org.push(user);
            break;
          case 'net':
            emails.net.push(user);
            break;
          case 'info':
            emails.info.push(user);
            break;
          default:
            other.push(user);
        }
      }

console.log(emails,other);



