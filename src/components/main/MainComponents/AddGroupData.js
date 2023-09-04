import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import TextsFieldsInput from "../../Inputs/TextsFieldsInput";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { GroupRed } from "../../../Store/rootSlice";
import SelectFieldInput from "../../Inputs/SelectFieldInput";

function AddGroupData(props) {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  const groupState = useSelector((state) => state.groupState);
  const studentState = useSelector((state) => state.studentState);
  const dispatch = useDispatch();
  console.log(small_id);
  const [groups, setGroups] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const [groupData, setGroupData] = useState({
    groupId: small_id,
    gName: "",
    students: [],
  });
  const [subClicked, setSubClicked] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGroupData({
      ...groupData,
      gName: event.target.value,
    });
    console.log(groupData);
  };
  // console.log(groupState);

  useEffect(() => {
    if (subClicked) {
      dispatch(GroupRed(groups));
      setGroupData({ groupId: small_id, gName: "", students: [] });
      console.log(groups);
    }
  }, [groups]);
  console.log(studentState);
  const studentOptions = studentState
    ? studentState.map((flavor) => ({
        value: flavor.sName,
        label: flavor.sName.charAt(0).toUpperCase() + flavor.sName.slice(1), // Capitalize the first letter
      }))
    : [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ];
  const handleStudentSelect = (selectedOption) => {
    if (selectedStudents.length <= 2) {
      setSelectedStudents(selectedOption);
      setGroupData({
        ...groupData,
        students: selectedOption,
      });
    }
  };

  console.log(JSON.stringify(selectedStudents) + " " + JSON.stringify(groups));

  const handleAddGroup = (e) => {
    e.preventDefault();
    if (groupData.gName) {
      setGroups([...groupState, groupData]);

      setSubClicked(true);
    } else {
      alert("What are you doing add data first");
    }
  };

  return (
    <Form onSubmit={handleAddGroup}>
      <TextsFieldsInput
        name="gName"
        onTextChange={handleInputChange}
        placeholder="Group Name"
        type="text"
        ControlId="groupId"
        label="Group Name"
      />

      <SelectFieldInput
        value={selectedStudents}
        isOptionDisabled={(option) =>
          selectedStudents.length >= 2 && !selectedStudents.includes(option)
        }
        onChange={handleStudentSelect}
        options={studentOptions}
        placeholder="Select Group"
      />
      <Button type="submit" onClick={props.handleClose} style={{marginTop: 10}}>
        Add Group
      </Button>
    </Form>
  );
}

export default AddGroupData;
