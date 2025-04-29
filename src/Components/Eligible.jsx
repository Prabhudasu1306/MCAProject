import React from 'react';
import { Table, Container } from 'react-bootstrap';

const eligibilityData = [
  {
    id: 1,
    programme: "B.E. – Computer Science and Engineering",
    eligibility:
      "A Pass 10+2 level examination with Mathematics, Physics and any one of the subjects (Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship) with a minimum of 50% aggregate in three subjects (45% in case of students belongs to reserved category)",
  },
  {
    id: 2,
    programme: "B.E. – Computer Science and Engineering with Specialization in Artificial Intelligence",
    eligibility:
      "A Pass 10+2 level examination with Mathematics, Physics and any one of the subjects (Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship) with a minimum of 50% aggregate in three subjects (45% in case of students belongs to reserved category)",
  },
  {
    id: 3,
    programme: "B.E. – Computer Science and Engineering with Specialization in Artificial Intelligence and Machine Learning",
    eligibility:
      "A Pass 10+2 level examination with Mathematics, Physics and any one of the subjects (Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship) with a minimum of 50% aggregate in three subjects (45% in case of students belongs to reserved category)",
  },
  {
    id: 4,
    programme: "B.E. – Computer Science and Engineering with Specialization in Artificial Intelligence and Robotics",
    eligibility:
      "A Pass 10+2 level examination with Mathematics, Physics and any one of the subjects (Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship) with a minimum of 50% aggregate in three subjects (45% in case of students belongs to reserved category)",
  },
  {
    id: 5,
    programme: "B.E. – Computer Science and Engineering with Specialization in Block Chain Technology",
    eligibility:
      "A Pass 10+2 level examination with Mathematics, Physics and any one of the subjects (Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship) with a minimum of 50% aggregate in three subjects (45% in case of students belongs to reserved category)",
  },
  {
    id: 6,
    programme: "B.E. – Computer Science and Engineering with Specialization in Data Science",
    eligibility:
      "A Pass 10+2 level examination with Mathematics, Physics and any one of the subjects (Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship) with a minimum of 50% aggregate in three subjects (45% in case of students belongs to reserved category)",
  },
  {
    id: 7,
    programme: "B.E. – Computer Science and Engineering with Specialization in Internet of Things",
    eligibility:
      "A Pass 10+2 level examination with Mathematics, Physics and any one of the subjects (Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship) with a minimum of 50% aggregate in three subjects (45% in case of students belongs to reserved category)",
  },
  {
    id: 8,
    programme: "B.E. – Computer Science and Engineering with Specialization in Cyber Security",
    eligibility:
      "A Pass 10+2 level examination with Mathematics, Physics and any one of the subjects (Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship) with a minimum of 50% aggregate in three subjects (45% in case of students belongs to reserved category)",
  },
  {
    id: 9,
    programme: "B.TECH – Information Technology",
    eligibility:
      "A Pass 10+2 level examination with Mathematics, Physics and Chemistry with a minimum of 50% aggregate in three subjects (45% in case of students belongs to reserved category)",
  },
  {
    id: 10,
    programme: "B.E. – Electronics and Communication Engineering",
    eligibility:
      "A Pass 10+2 level examination with Mathematics, Physics and Chemistry with a minimum of 50% aggregate in three subjects (45% in case of students belongs to reserved category)",
  },
  // Add all other programmes similarly...
];

const Eligible = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Eligibility Criteria</h2>
      <Table bordered hover responsive>
        <thead className="table-primary">
          <tr>
            <th>S.NO.</th>
            <th>PROGRAMME</th>
            <th>ELIGIBILITY</th>
          </tr>
        </thead>
        <tbody>
          {eligibilityData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.programme}</td>
              <td>{item.eligibility}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Eligible;
