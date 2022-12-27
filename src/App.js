import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManagementAppBar from "./components/ManagementAppBar";
import Home from "./components/Home";
import StudentAction from "./components/StudentAction";
import TeacherAction from "./components/TeacherAction";
import { TSContext } from "./Context";
import Reducer from "./Reducer";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  students: [
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
  ],
  teachers: [
    {
      createdAt: "2022-12-16T05:34:54.221Z",
      name: "Juana Ferry",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/249.jpg",
      email: "Florian.Goodwin21@example.com",
      specialization: "Physics",
      id: "1",
    },
    {
      createdAt: "2022-12-16T00:32:59.055Z",
      name: "Stephanie Kozey",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
      email: "Eda.Erdman38@example.org",
      specialization: "Chemistry",
      id: "2",
    },
    {
      createdAt: "2022-12-16T07:22:56.425Z",
      name: "Owen Haley",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/953.jpg",
      email: "Roberto.Huels@example.net",
      specialization: "Mathematics",
      id: "3",
    },
    {
      createdAt: "2022-12-15T16:46:53.945Z",
      name: "Woodrow Kertzmann",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/292.jpg",
      email: "Myriam.Pouros@example.org",
      specialization: "Biology",
      id: "4",
    },
  ],
};

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      <TSContext.Provider
        value={{ students: state.students, teachers: state.teachers, dispatch }}
      >
        <BrowserRouter>
          <ManagementAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studentAction" element={<StudentAction />} />
            <Route path="/studentAction/:id" element={<StudentAction />} />
            <Route path="/teacherAction" element={<TeacherAction />} />
            <Route path="/teacherAction/:id" element={<TeacherAction />} />
          </Routes>
        </BrowserRouter>
      </TSContext.Provider>
    </>
  );
}

export default App;
