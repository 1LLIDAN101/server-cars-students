const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

const students = [
  {
    id: 1,
    name: "Иван Иванов",
    age: 20,
    course: "Информатика",
    subjects: ["Математика", "Информатика"],
  },
  {
    id: 2,
    name: "Мария Петрова",
    age: 21,
    course: "Математика",
    subjects: ["Математика", "Физика"],
  },
  {
    id: 3,
    name: "Алексей Сидоров",
    age: 19,
    course: "Физика",
    subjects: ["Физика", "История"],
  },
  {
    id: 4,
    name: "Елена Кузнецова",
    age: 22,
    course: "Химия",
    subjects: ["Химия", "Биология"],
  },
  {
    id: 5,
    name: "Дмитрий Морозов",
    age: 20,
    course: "Биология",
    subjects: ["Биология", "Литература"],
  },
];

// Пример вывода списка студентов в консоль
students.forEach((student, index) => {
  console.log(
    `Студент ${index + 1}: ${student.name}, Возраст: ${student.age}, Курс: ${student.course}`,
  );
});

const subjects = [
  "Математика",
  "Физика",
  "Информатика",
  "История",
  "Литература",
  "Английский язык",
  "Химия",
  "Биология",
];

console.log(subjects);

app.get("/", (req, res) => {
  res.send("Главная страница!");
});

app.get("/contacts", (req, res) => {
  res.send("Наши контакты");
});

app.get("/about", (req, res) => {
  res.send("О нас");
});

app.get("/students", (req, res) => {
  res.send(students);
});

app.get("/students/:id", (req, res) => {
  console.log(req.params.id);
  let student = students.find((stud) => {
    return stud.id == req.params.id;
  });
  if (!student) {
    return res.status(404).json({ error: "Пользовватель не найден!!" });
  }
  res.json(student);
});
//////////////////// POST STUDENT
app.post(`/student`, (req, res) => {
  const { name, age } = req.body;
  
  const newStudent = {
    id:students.length+1,
    name: name,
    age: age,
  };

  students.push(newStudent)
  // res.status(200).json("Регистрация прошла успешно!", newStudent)
res.send(students)
});

app.get("/subjects", (req, res) => {
  res.send(subjects);
});

app.get("/authorization", (req, res) => {
  res.send(students);
});

app.get("/registration", (req, res) => {
  res.send("ssss");
});

app.listen(PORT, () => {
  console.log("Успешно запущен");
});
