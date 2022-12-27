import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { TSContext } from "../Context";
import { ADD_TEACHER, EDIT_TEACHER } from "../Action.types";

let intialFormValues = {
  name: "",
  email: "",
  specialization: "",
  image: "",
};

// const ariaLabel = { "aria-label": "description" };

export default function StudentAction() {
  const { teachers, dispatch } = useContext(TSContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const [formValues, setFormValues] = useState(intialFormValues);

  const handleChange = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (id) {
      dispatch({ type: EDIT_TEACHER, payload: formValues });
      setFormValues(intialFormValues);
      navigate("/");
    } else {
      dispatch({ type: ADD_TEACHER, payload: { ...formValues, id: uuidv4() } });
      setFormValues(intialFormValues);
      navigate("/");
    }
  };

  useEffect(() => {
    if (id) {
      let teacherId = id;
      const selectedTeacher = teachers.find(
        (teacher) => teacher.id === teacherId
      );
      setFormValues(selectedTeacher);
    }
  }, [id]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30rem" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <Typography
          variant="h2"
          component="h2"
          className="center"
          color="GrayText"
        >
          Teacher Form
        </Typography>
        <div>
          <TextField
            id="outlined"
            label="Teacher name"
            color="secondary"
            type="text"
            placeholder="Teacher name"
            disabled={state.isView === true ? true : false}
            name="name"
            onChange={handleChange}
            value={formValues.name}
          />
        </div>
        <div>
          <TextField
            id="outlined"
            label="Email"
            type="email"
            color="secondary"
            placeholder="Email"
            disabled={state.isView === true ? true : false}
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="outlined"
            label="Specialization"
            color="secondary"
            value={formValues.specialization}
            placeholder="Specialization"
            disabled={state.isView === true ? true : false}
            name="specialization"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="outlined"
            label="ImageUrl"
            type="text"
            color="secondary"
            placeholder="Your image url"
            disabled={state.isView === true ? true : false}
            name="image"
            value={formValues.image}
            onChange={handleChange}
          />
        </div>
        <div className="center">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => navigate(-1)}>Back</Button>
          </ButtonGroup>
          &nbsp;&nbsp;&nbsp;
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            color="secondary"
          >
            <Button
              onClick={handleSubmit}
              disabled={state.isView === true ? true : false}
            >
              Submit
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Box>
  );
}
