import axios from "axios";

let students = [];

export const getStudents = () => {
  return axios
    .get("/api/students")
    .then((response) => {
      students = response.data;
    })
    .catch((error) => console.error(error));
};

export const setStudentScore = (studentId, score) => {
  const selectedStudent = students.find((student) => student.id === studentId);
  selectedStudent.score = score;
};

export const getLessonNames = (students) => {
  return students.map((student) => student.lesson);
};
