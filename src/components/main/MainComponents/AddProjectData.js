import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import TextsFieldsInput from "../../Inputs/TextsFieldsInput";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { ProjectRed } from "../../../Store/rootSlice";
import SelectFieldInput from "../../Inputs/SelectFieldInput";

function AddProjectData(props) {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  const projectState = useSelector((state) => state.projectsState);
  const groupState = useSelector((state) => state.groupState);
  const dispatch = useDispatch();
  console.log(small_id);
  const [projects, setGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);

  const [projectData, setProjectData] = useState({
    projectId: small_id,
    groupId: [],
    weekNo: 0,
    type: "",
    startTime: "",
    endTime: "",
    description: "",
    attachments: [],
  });
  const [subClicked, setSubClicked] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
    console.log(projectData);
  };
  // console.log(projectState);

  useEffect(() => {
    if (subClicked) {
      dispatch(ProjectRed(projects));
      setProjectData({ projectId: small_id, pName: "", groups: [] });
      console.log(projects);
    }
  }, [projects]);
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
      setProjectData({
        ...projectData,
        groupId: selectedOption,
      });
    }
  };

  console.log(JSON.stringify(selectedGroups) + " " + JSON.stringify(projects));

  const handleAddGroup = (e) => {
    e.preventDefault();
    if (
      projectData.weekNo &&
      projectData.type &&
      projectData.startTime &&
      projectData.groupId &&
      projectData.endTime &&
      projectData.description
    ) {
      setGroups([...projectState, projectData]);

      setSubClicked(true);
    } else {
      alert("What are you doing add data first");
    }
  };

  return (
    <Form onSubmit={handleAddGroup}>
      <TextsFieldsInput
        name="type"
        onTextChange={handleInputChange}
        placeholder="Project Type"
        type="text"
        ControlId="ptype"
        label="Project Type"
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

export default AddProjectData;
