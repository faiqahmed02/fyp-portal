export const StudentGroupsTable = ({ student }) => (
    <table>
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Name</th>

            </tr>
        </thead>
        <tbody>
            {student.map(student => (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export const TaskTable = ({ tasks }) => (
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
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.groupId}</td>
            <td>{task.weekNo}</td>
            <td>{task.type}</td>
            <td>{task.startTime}</td>
            <td>{task.endTime}</td>
            <td>{task.description}</td>
            <td>{task.attachments.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

export const ProjectTable = ({ projects }) => (
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
        {projects.map(project => (
          <tr key={project.id}>
            <td>{project.id}</td>
            <td>{project.groupId}</td>
            <td>{project.weekNo}</td>
            <td>{project.type}</td>
            <td>{project.startTime}</td>
            <td>{project.endTime}</td>
            <td>{project.description}</td>
            <td>{project.attachments.join(', ')}</td>
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
        {groups.map(group => (
          <tr key={group.id}>
            <td>{group.id}</td>
            <td>{group.name}</td>
            <td>{group.students.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );