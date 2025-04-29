import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const AllNonTeaching = () => {
  const [nonTeachingStaff, setNonTeachingStaff] = useState([]);
  const [editableStaff, setEditableStaff] = useState(null);

  // Fetch all non-teaching staff
  useEffect(() => {
    fetch('http://localhost:8080/api/NonTeaching/all')
      .then(response => response.json())
      .then(data => setNonTeachingStaff(data))
      .catch((error) => console.error('Error fetching non-teaching staff:', error));
  }, []);

  // Handle PUT request for updating staff details
  const handleUpdate = (id, updatedData) => {
    fetch(`http://localhost:8080/api/NonTeaching/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Updated:', data);
        setNonTeachingStaff(nonTeachingStaff.map(staff => (staff.id === id ? data : staff)));
        setEditableStaff(null); // Stop editing after update
      })
      .catch((error) => console.error('Error updating staff:', error));
  };

  // Handle DELETE request
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/NonTeaching/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Deleted');
        setNonTeachingStaff(nonTeachingStaff.filter(staff => staff.id !== id));
      })
      .catch((error) => console.error('Error deleting staff:', error));
  };

  // Handle input change for the editable staff row
  const handleInputChange = (e, field) => {
    setEditableStaff({
      ...editableStaff,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <h2>All Non-Teaching Staff</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Contact Number</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {nonTeachingStaff.map((staff) => (
            <tr key={staff.id}>
              {editableStaff?.id === staff.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editableStaff.name}
                      onChange={(e) => handleInputChange(e, 'name')}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editableStaff.designation}
                      onChange={(e) => handleInputChange(e, 'designation')}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editableStaff.department}
                      onChange={(e) => handleInputChange(e, 'department')}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={editableStaff.salary}
                      onChange={(e) => handleInputChange(e, 'salary')}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editableStaff.contactNumber}
                      onChange={(e) => handleInputChange(e, 'contactNumber')}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={editableStaff.experience}
                      onChange={(e) => handleInputChange(e, 'experience')}
                    />
                  </td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => handleUpdate(staff.id, editableStaff)}
                    >
                      Save
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => setEditableStaff(null)}
                      className="ms-2"
                    >
                      Cancel
                    </Button>
                  </td>
                </>
              ) : (
                <>
                  <td>{staff.name}</td>
                  <td>{staff.designation}</td>
                  <td>{staff.department}</td>
                  <td>{staff.salary}</td>
                  <td>{staff.contactNumber}</td>
                  <td>{staff.experience}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => setEditableStaff(staff)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(staff.id)}
                      className="ms-2"
                    >
                      Delete
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllNonTeaching;
