 //[id , brand , model , type , pricePerDay, available]
 carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima', 'Sedan' ,45 ,12]
];
//1)Print all car brand
console.log('car names:');
carBooking.forEach(item => {
    console.log(item[1]);
});
//2)Print total number of cars available
console.log(`total number of car is:${carBooking.length}`);
//3)Print sedan car details
console.log('sedan car details:');

sedan=carBooking.find(car=>car[3]=='Sedan')
console.log(sedan);


//4)    Print car with price per day greater than 60
console.log('car with price per day greater than 60');

carBooking.filter((car)=>car[4]>60).forEach((item)=>console.log(item[1])
)

//5)    Print details of jeep wrangler
console.log('jeep wrangler  details');
Wrangler=carBooking.find(car=>car[2]=='Wrangler')
console.log(Wrangler);



//6)    Arrange cars based on the descending order of price per day
console.log(' cars based on the descending order of price per day');

sort=carBooking.sort((item1,item2)=>item2[4]-item1[4])
console.log(sort);
//7)    Sort car based on ascending order of available cars.
console.log(' cars based on the ascending order of available cars.');
sort=carBooking.sort((item1,item2)=>item1[4]-item2[4])
console.log(sort);

//8)    Find the car with highest availability
console.log('car with highest availability:');

highestd=carBooking.reduce((item1,item2)=>item1[5]>item2[5]?item1:item2)
console.log(highestd[1]);
//9)    Find the revenue if all the cars are rented for a day

//10)   Count the number of sedan car available


//11)    Find the car with lowest availability
console.log('car with lowest availability:');

highestd=carBooking.reduce((item1,item2)=>item1[5]<item2[5]?item1:item2)
console.log(highestd[1]);
//12)   Print all car models
console.log('car models:');
carBooking.forEach(item => {
    console.log(item[2]);
});

//13)   Print total type of cars available

//14)   Find the details of the car with type – mustang
console.log('mustang details');
mustang=carBooking.find(car=>car[2]=='Mustang')
console.log(mustang);
//15)   Check if there is any car with price per day exactly*/