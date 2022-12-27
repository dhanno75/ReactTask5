import { useState } from "react";
import { TSContext } from "./Context";
import { useNavigate } from "react-router-dom";

const Provider = (props) => {
  const navigate = useNavigate();
  // const [teacher, setTeacher] = useState([]);
  const [students, setStudent] = useState([
    {
      createdAt: "2022-12-16T14:30:38.435Z",
      name: "Maureen Cronin",
      rollNo: "88",
      totalMarks: "361",
      school: "Sacred Heart High School",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/205.jpg",
      id: "1",
    },
    {
      createdAt: "2022-12-15T20:54:43.712Z",
      name: "Rosie Weimann",
      rollNo: "84",
      totalMarks: "237",
      school: "St. Xaviers High School",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/696.jpg",
      id: "2",
    },
    {
      createdAt: "2022-12-15T15:21:29.999Z",
      name: "Grace Doyle",
      rollNo: "59",
      totalMarks: "398",
      school: "DBMS",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1006.jpg",
      id: "3",
    },
    {
      createdAt: "2022-12-16T12:29:20.946Z",
      name: "Joel Renner",
      rollNo: "11",
      totalMarks: "434",
      school: "Loyola high school",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/693.jpg",
      id: "4",
    },
  ]);

  const addStudent = (studentInput) => {
    setStudent([...students, studentInput]);
    navigate("/");
  };

  const getStudentById = (id) => {
    const stud = students.filter((val) => val.id === id);
    return stud[0];
  };

  const updateStudent = (uStudent) => {
    const updatedStudents = students.map((student) => {
      if (student.id === uStudent.id) {
        return uStudent;
      }
      return student;
    });

    // setStudent([...updatedStudents]);
    console.log(updatedStudents);
  };

  const deleteByStudentId = (id) => {
    setStudent(students.filter((val) => val.id !== id));
  };

  // const updateStudent = (id) => {
  //   const stud =
  // }

  return (
    <TSContext.Provider
      value={{
        students,
        addStudent,
        getStudentById,
        deleteByStudentId,
        updateStudent,
      }}
    >
      {props.children}
    </TSContext.Provider>
  );
};

export default Provider;
