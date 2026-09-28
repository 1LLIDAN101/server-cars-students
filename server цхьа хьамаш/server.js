const express = require("express");


const app = express();

app.use(express.json());

const PORT = 3000;


const cars = [
  { id: 1, brand: "Toyota Camry", plateNumber: "А777АА77" },
  { id: 2, brand: "Hyundai Solaris", plateNumber: "В123ОО199" },
  { id: 3, brand: "Kia Rio", plateNumber: "Е456КХ777" },
  { id: 4, brand: "Lada Vesta", plateNumber: "К789ММ750" },
  { id: 5, brand: "BMW X5", plateNumber: "Х001АМ97" }
];

app.get("/", (req , res)=>{
  res.send("Главная страница")
})

app.get("/cars", (req , res)=>{
  res.send(cars)
})

app.get("/car/:id", (req , res)=>{
  console.log(req.params.id);
  let car = cars.find((car)=>{
    return car.id == req.params.id
  })
  if (!car){
    return res.status(404).json({ error:"Машина найдена"})
  }
  res.json(car);
})
app.post(`/car`, (req, res) => {
  const { brand, plateNumber } = req.body;
  
  const newCar = {
    id:cars.length+1,
    brand: brand,
    plateNumber: plateNumber,
  };

  cars.push(newCar)
  // res.status(200).json("Регистрация прошла успешно!", newStudent)
res.send(cars)
});



app.listen(PORT, () => {
  console.log("Успешно запущен");
});
