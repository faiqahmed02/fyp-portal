import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import TextsFieldsInput from "../../Inputs/TextsFieldsInput";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { TaskRed } from "../../../Store/rootSlice";
import SelectFieldInput from "../../Inputs/SelectFieldInput";

function AddTaskData(props) {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  const taskState = useSelector((state) => state.tasksState);
  const groupState = useSelector((state) => state.groupState);
  const dispatch = useDispatch();
  console.log(small_id);
  const [tasks, setTasks] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);

  const [taskData, setTaskData] = useState({
    taskId: small_id,
    groupId: [],
    weekNo: 0,
    tasktype: "",
    startTime: "",
    endTime: "",
    description: "",
    attachments: [],
  });
  const [subClicked, setSubClicked] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
    console.log(taskData);
  };
  // console.log(taskState);

  useEffect(() => {
    if (subClicked) {
      dispatch(TaskRed(tasks));
      setTaskData({ taskId: small_id, pName: "", groups: [] });
      console.log(tasks);
    }
  }, [tasks]);
  console.log(groupState);
  const groupOptions = groupState
    ? groupState.map((flavor) => ({
        value: flavor.groupId,
        label: flavor.gName.charAt(0).toUpperCase() + flavor.gName.slice(1), // Capitalize the first letter
      }))
    : [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ];
  const handleStudentSelect = (selectedOption) => {
    if (selectedGroups.length <= 1) {
      setSelectedGroups(selectedOption);
      setTaskData({
        ...taskData,
        groupId: selectedOption,
      });
    }
  };

  console.log(JSON.stringify(selectedGroups) + " " + JSON.stringify(tasks));

  const handleAddGroup = (e) => {
    e.preventDefault();
    if (
      taskData.weekNo &&
      taskData.tasktype &&
      taskData.startTime &&
      taskData.groupId &&
      taskData.endTime &&
      taskData.description
    ) {
      setTasks([...taskState, taskData]);

      setSubClicked(true);
    } else {
      alert("What are you doing add data first");
    }
  };

  return (
    <Form onSubmit={handleAddGroup}>
      <TextsFieldsInput
        name="tasktype"
        onTextChange={handleInputChange}
        placeholder="Task Type"
        type="text"
        ControlId="ttype"
        label="Task Type"
      />
      <TextsFieldsInput
        name="weekNo"
        onTextChange={handleInputChange}
        placeholder="week No."
        type="number"
        ControlId="weekNo"
        label="Week No."
      />

      <TextsFieldsInput
        name="startTime"
        onTextChange={handleInputChange}
        placeholder="Start Time"
        type="date"
        ControlId="startTime"
        label="Start Time"
      />

      <TextsFieldsInput
        name="endTime"
        onTextChange={handleInputChange}
        placeholder="End Time"
        type="date"
        ControlId="endTime"
        label="End Time"
      />

      <TextsFieldsInput
        name="description"
        onTextChange={handleInputChange}
        placeholder="Description"
        type="text"
        ControlId="description"
        label="Short Description"
      />

      <SelectFieldInput
        value={selectedGroups}
        isOptionDisabled={(option) =>
          selectedGroups.length >= 1 && !selectedGroups.includes(option)
        }
        onChange={handleStudentSelect}
        options={groupOptions}
        placeholder="Select Project"
      />
      <TextsFieldsInput
        name="attachments"
        onTextChange={handleInputChange}
        placeholder="File Upload"
        type="file"
        ControlId="fileupload"
        label="FIle Upload"
      />
      <Button
        type="submit"
        onClick={props.handleClose}
        style={{ marginTop: 10 }}
      >
        Add Group
      </Button>
    </Form>
  );
}

export default AddTaskData;
