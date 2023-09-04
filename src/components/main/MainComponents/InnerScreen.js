export const StudentGroupsTable = ({ student }) => (
  <table>
    <thead>
      <tr>
        <th>Student ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {student.map((student) => (
        <tr key={student.studentId}>
          <td>{student.studentId}</td>
          <td>{student.sName}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const TaskTable = ({ tasks, taskState }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Group ID</th>
        <th>Week No</th>
        <th>Type</th>
        <th>Start Time</th>
        <th>End Time</th>
        <th>Description</th>
        <th>Attachments</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <tr key={task.taskId}>
          <td>{task.taskId}</td>
          <td>
            {taskState.length > 0
              ? task.groupId.map((d) => {
                  return d.label;
                })
              : task.groupId}
          </td>
          <td>{task.weekNo}</td>
          <td>{task.type}</td>
          <td>{task.startTime}</td>
          <td>{task.endTime}</td>
          <td>{task.description}</td>
          <td>
            {taskState.length > 0
              ? task.attachments
              : task.attachments.join(", ")}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const ProjectTable = ({ projects, projectState }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Group ID</th>
        <th>Week No</th>
        <th>Type</th>
        <th>Start Time</th>
        <th>End Time</th>
        <th>Description</th>
        <th>Attachments</th>
      </tr>
    </thead>
    <tbody>
      {projects.map((project) => (
        <tr key={project.projectId}>
          <td>{project.projectId}</td>
          <td>
            {projectState.length > 0
              ? project.groupId.map((d) => {
                  return d.label;
                })
              : project.groupId}
          </td>
          <td>{project.weekNo}</td>
          <td>{project.type}</td>
          <td>{project.startTime}</td>
          <td>{project.endTime}</td>
          <td>{project.description}</td>
          <td>
            {projectState.length > 0
              ? project.attachments
              : project.attachments.join(", ")}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const GroupTable = ({ groups }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Students</th>
      </tr>
    </thead>
    <tbody>
      {groups.map((group) => (
        <tr key={group.groupId}>
          <td>{group.groupId}</td>
          <td>{group.gName}</td>
          <td>
            {group.students.map((d) => {
              return <span style={{ margin: 5 }}>{d.value}</span>;
            })}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
