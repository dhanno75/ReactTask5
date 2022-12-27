import { useContext } from "react";

import {
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { FaPen, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DELETE_STUDENT, DELETE_TEACHER } from "../Action.types";
import { TSContext } from "../Context";

const AllUsers = () => {
  const { students, teachers, dispatch } = useContext(TSContext);
  const navigate = useNavigate();

  const deleteStudent = (id) => {
    dispatch({ type: DELETE_STUDENT, payload: id });
  };

  const deleteTeacher = (id) => {
    dispatch({ type: DELETE_TEACHER, payload: id });
  };

  return (
    <>
      {/* Student Data */}
      <Row>
        <h2 className="text-center mt-4 mb-4">Student Data</h2>
        {students.map((student) => {
          return (
            <Col sm={3} key={student.id}>
              <Card>
                <Card.Img variant="top" src={student.image} className="img" />
                <Card.Body>
                  <Card.Title className="titleColor">{student.name}</Card.Title>
                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>School - {student.school}</ListGroup.Item>
                  <ListGroup.Item>
                    Total Marks - {student.totalMarks}
                  </ListGroup.Item>
                  <ListGroup.Item>Roll no. - {student.rollNo}</ListGroup.Item>
                </ListGroup>
                <ButtonGroup>
                  <Button
                    variant="warning"
                    onClick={() =>
                      navigate(`/studentAction/${student.id}`, {
                        state: { isView: false },
                      })
                    }
                  >
                    <FaPen size={14} /> Edit
                  </Button>
                  <Button
                    variant="info"
                    onClick={() =>
                      navigate(`/studentAction/${student.id}`, {
                        state: { isView: true },
                      })
                    }
                  >
                    <FaEye size={14} /> View
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteStudent(student.id)}
                  >
                    <FaTrash size={14} /> Delete
                  </Button>
                </ButtonGroup>
              </Card>
            </Col>
          );
        })}
      </Row>
      <hr className="mt-5"></hr>
      {/* Teacher data */}
      <Row>
        <h2 className="text-center mt-4">Teacher Data</h2>
        {teachers.map((teacher) => {
          return (
            <Col sm={3} key={teacher.id} className="mt-4">
              <Card>
                <Card.Img variant="top" src={teacher.image} className="img" />
                <Card.Body>
                  <Card.Title className="titleColor">{teacher.name}</Card.Title>
                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Specialization: {teacher.specialization}
                  </ListGroup.Item>
                  <ListGroup.Item>Email: {teacher.email}</ListGroup.Item>
                </ListGroup>
                <ButtonGroup>
                  <Button
                    variant="warning"
                    onClick={() =>
                      navigate(`/teacherAction/${teacher.id}`, {
                        state: { isView: false },
                      })
                    }
                  >
                    <FaPen size={14} /> Edit
                  </Button>
                  <Button
                    variant="info"
                    onClick={() =>
                      navigate(`/teacherAction/${teacher.id}`, {
                        state: { isView: true },
                      })
                    }
                  >
                    <FaEye size={14} /> View
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteTeacher(teacher.id)}
                  >
                    <FaTrash size={14} /> Delete
                  </Button>
                </ButtonGroup>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default AllUsers;
