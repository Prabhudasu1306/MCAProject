import React, { useState } from 'react';
import axios from 'axios';

// --- Initial Data Structures for Form State ---
// Defines the default structure for a new subject's result
const initialSubject = {
  subjectName: '',
  marksOrGrade: '',
};

// Defines the default structure for a new semester's results, containing an initial empty subject
const initialSemester = {
  semester: '',
  subjectResults: [initialSubject],
};

// Defines the complete default structure for a new student's results, including personal info and one initial empty semester
const initialResults = {
  name: '',
  hallTicketNumber: '',
  year: '',
  semesterResults: [initialSemester],
};

// --- AddResult Functional Component Definition ---
const AddResult = () => {
  // State to hold all the form's data, mirroring your backend's 'Results' entity
  const [resultsData, setResultsData] = useState(initialResults);
  // State for displaying success messages to the user
  const [message, setMessage] = useState('');
  // State for displaying error messages to the user
  const [error, setError] = useState('');
  // State to manage the loading status during API calls (e.g., to disable the submit button)
  const [isLoading, setIsLoading] = useState(false);

  // --- Handlers for Input Field Changes ---

  // Handles changes for the top-level student details (name, hallTicketNumber, year)
  const handleResultsChange = (e) => {
    const { name, value } = e.target;
    setResultsData({ ...resultsData, [name]: value });
  };

  // Handles changes for a specific semester's name (e.g., "1-1", "2-1")
  const handleSemesterChange = (e, semIndex) => {
    const { name, value } = e.target;
    const updatedSemesters = resultsData.semesterResults.map((sem, index) =>
      index === semIndex ? { ...sem, [name]: value } : sem
    );
    setResultsData({ ...resultsData, semesterResults: updatedSemesters });
  };

  // Handles changes for a specific subject's name or marks within a given semester
  const handleSubjectChange = (e, semIndex, subjIndex) => {
    const { name, value } = e.target;
    const updatedSemesters = resultsData.semesterResults.map((sem, sIndex) => {
      if (sIndex === semIndex) {
        const updatedSubjects = sem.subjectResults.map((subj, subIndex) =>
          subIndex === subjIndex ? { ...subj, [name]: value } : subj
        );
        return { ...sem, subjectResults: updatedSubjects };
      }
      return sem;
    });
    setResultsData({ ...resultsData, semesterResults: updatedSemesters });
  };

  // --- Handlers for Adding and Removing Dynamic Form Sections ---

  // Adds a new blank semester section to the form
  const addSemester = () => {
    setResultsData({
      ...resultsData,
      semesterResults: [...resultsData.semesterResults, initialSemester],
    });
  };

  // Removes a specific semester section from the form based on its index
  const removeSemester = (semIndex) => {
    setResultsData({
      ...resultsData,
      semesterResults: resultsData.semesterResults.filter((_, index) => index !== semIndex),
    });
  };

  // Adds a new blank subject input field within a specific semester section
  const addSubject = (semIndex) => {
    const updatedSemesters = resultsData.semesterResults.map((sem, index) =>
      index === semIndex
        ? { ...sem, subjectResults: [...sem.subjectResults, initialSubject] }
        : sem
    );
    setResultsData({ ...resultsData, semesterResults: updatedSemesters });
  };

  // Removes a specific subject input field from a specific semester section
  const removeSubject = (semIndex, subjIndex) => {
    const updatedSemesters = resultsData.semesterResults.map((sem, sIndex) => {
      if (sIndex === semIndex) {
        return {
          ...sem,
          subjectResults: sem.subjectResults.filter((_, subIndex) => subIndex !== subjIndex),
        };
      }
      return sem;
    });
    setResultsData({ ...resultsData, semesterResults: updatedSemesters });
  };

  // --- Form Submission Handler ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default HTML form submission and page reload
    setMessage('');     // Clear any previous success message
    setError('');       // Clear any previous error message
    setIsLoading(true); // Indicate that the form is being submitted

    try {
      // Sends a POST request to your Spring Boot backend's results endpoint
      // Ensure your Spring Boot backend is running and listening on http://localhost:8080/api/results
      const response = await axios.post('http://localhost:8080/api/results', resultsData);
      setMessage(response.data); // Display success message from the backend response
      setResultsData(initialResults); // Reset the form to its initial empty state for a new entry
    } catch (err) {
      if (err.response) {
        // The server responded with a status code outside of 2xx (e.g., 400, 500)
        console.error('Error response from server:', err.response.data);
        setError(`Error: ${err.response.data || 'Failed to add results.'}`);
      } else if (err.request) {
        // The request was made, but no response was received (e.g., network issues, backend not running)
        console.error('No response received:', err.request);
        setError('No response from server. Is the backend running?');
      } else {
        // Something else went wrong during the request setup
        console.error('Error setting up request:', err.message);
        setError('Error submitting results. Please try again.');
      }
    } finally {
      setIsLoading(false); // Always reset loading state after the request completes (success or failure)
    }
  };

  // --- Component JSX (What gets rendered) ---
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Student Results</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Section for Student's General Details */}
        <div style={styles.section}>
          <h3 style={styles.subHeading}>Student Details</h3>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={resultsData.name}
              onChange={handleResultsChange}
              required // This field is mandatory
              style={styles.input}
              placeholder="e.g., Jane Doe"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Hall Ticket Number:</label>
            <input
              type="text"
              name="hallTicketNumber"
              value={resultsData.hallTicketNumber}
              onChange={handleResultsChange}
              required
              style={styles.input}
              placeholder="e.g., HTN12345"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Year:</label>
            <input
              type="text"
              name="year"
              value={resultsData.year}
              onChange={handleResultsChange}
              required
              style={styles.input}
              placeholder="e.g., 1st Year, 2nd Year"
            />
          </div>
        </div>

        {/* Section for Dynamic Semester Results */}
        <div style={styles.section}>
          <h3 style={styles.subHeading}>Semester Results</h3>
          {/* Map through each semester in the `resultsData` state to render its input fields */}
          {resultsData.semesterResults.map((sem, semIndex) => (
            <div key={semIndex} style={styles.semesterCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <label style={styles.label}>Semester Name (e.g., 1-1, 2-1):</label>
                {/* Display "Remove Semester" button only if there's more than one semester */}
                {resultsData.semesterResults.length > 1 && (
                  <button type="button" onClick={() => removeSemester(semIndex)} style={styles.removeButton}>
                    Remove Semester
                  </button>
                )}
              </div>
              <input
                type="text"
                name="semester"
                value={sem.semester}
                onChange={(e) => handleSemesterChange(e, semIndex)}
                required
                style={styles.input}
                placeholder="e.g., 1-1"
              />

              {/* Sub-section for Dynamic Subject Results within the current semester */}
              <h4 style={styles.nestedSubHeading}>Subjects for {sem.semester || 'this semester'}</h4>
              {/* Map through each subject within the current semester to render its input fields */}
              {sem.subjectResults.map((subj, subjIndex) => (
                <div key={subjIndex} style={styles.subjectCard}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                    <label style={styles.label}>Subject Name:</label>
                    {/* Display "Remove Subject" button only if there's more than one subject in this semester */}
                    {sem.subjectResults.length > 1 && (
                      <button type="button" onClick={() => removeSubject(semIndex, subjIndex)} style={styles.removeButton}>
                        Remove Subject
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    name="subjectName"
                    value={subj.subjectName}
                    onChange={(e) => handleSubjectChange(e, semIndex, subjIndex)}
                    required
                    style={styles.input}
                    placeholder="e.g., Data Structures"
                  />
                  <label style={styles.label}>Marks/Grade:</label>
                  <input
                    type="text"
                    name="marksOrGrade"
                    value={subj.marksOrGrade}
                    onChange={(e) => handleSubjectChange(e, semIndex, subjIndex)}
                    required
                    style={styles.input}
                    placeholder="e.g., A, 85, Pass"
                  />
                </div>
              ))}
              <button type="button" onClick={() => addSubject(semIndex)} style={styles.addButton}>
                + Add Subject
              </button>
            </div>
          ))}
          <button type="button" onClick={addSemester} style={styles.addButton}>
            + Add Semester
          </button>
        </div>

        {/* Form Submission Button */}
        <button type="submit" disabled={isLoading} style={styles.submitButton}>
          {isLoading ? 'Adding Results...' : 'Add Results'}
        </button>
      </form>

      {/* Display Feedback Messages */}
      {message && <p style={styles.successMessage}>{message}</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}
    </div>
  );
};

// --- Inline Styles for the Component ---
// These styles are defined as a JavaScript object for convenience.
// For larger projects, consider using CSS modules, styled-components, or a CSS framework.
const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '30px',
    fontSize: '2em',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  section: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f8f8f8',
  },
  subHeading: {
    color: '#34495e',
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: 'calc(100% - 20px)', // Account for padding
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1em',
    boxSizing: 'border-box', // Ensures padding doesn't increase total width
  },
  semesterCard: {
    border: '1px solid #cceeff',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: '#e6f7ff',
  },
  subjectCard: {
    border: '1px dashed #b3e0ff',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '15px',
    backgroundColor: '#f0faff',
  },
  addButton: {
    padding: '10px 15px',
    backgroundColor: '#28a745', // Green color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    marginTop: '10px',
    display: 'block',
    width: 'fit-content',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'background-color 0.2s ease', // Smooth hover effect
  },
  removeButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545', // Red color
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9em',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'background-color 0.2s ease', // Smooth hover effect
  },
  submitButton: {
    padding: '15px 25px',
    backgroundColor: '#007bff', // Blue color
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    alignSelf: 'center', // Centers the button horizontally
    width: '50%', // Makes the button wider
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  successMessage: {
    color: '#28a745',
    backgroundColor: '#d4edda',
    border: '1px solid #c3e6cb',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '20px',
    textAlign: 'center',
  },
  errorMessage: {
    color: '#dc3545',
    backgroundColor: '#f8d7da',
    border: '1px solid #f5c6cb',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '20px',
    textAlign: 'center',
  },
  nestedSubHeading: {
    color: '#555',
    fontSize: '1.1em',
    marginBottom: '10px',
    marginTop: '15px',
  }
};

export default AddResult;