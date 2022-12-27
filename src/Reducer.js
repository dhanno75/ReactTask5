import {
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  ADD_TEACHER,
  DELETE_TEACHER,
  EDIT_TEACHER,
} from "./Action.types";

const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case EDIT_STUDENT:
      const updatedStudent = action.payload;

      const updatedStudents = state.students.map((student) => {
        if (student.id === updatedStudent.id) {
          return updatedStudent;
        }
        return student;
      });

      return {
        ...state,
        students: updatedStudents,
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    case ADD_TEACHER:
      return {
        ...state,
        teachers: [...state.teachers, action.payload],
      };
    case EDIT_TEACHER:
      const updatedTeacher = action.payload;

      const updatedTeachers = state.teachers.map((teacher) => {
        if (teacher.id === updatedTeacher.id) {
          return updatedTeacher;
        }
        return teacher;
      });

      return {
        ...state,
        teachers: updatedTeachers,
      };
    case DELETE_TEACHER:
      return {
        ...state,
        teachers: state.teachers.filter(
          (teacher) => teacher.id !== action.payload
        ),
      };
    default:
      break;
  }
};

export default Reducer;
