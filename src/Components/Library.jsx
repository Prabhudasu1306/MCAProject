import React from 'react';
import Libraries from './Libraries.jpg'; // Ensure this image path is correct
import './Library.css'; // Link to your new CSS file

const Library = () => {
  return (
    <div className="library-container">
      <h2 className="library-heading">Central Library – The Heart of Academic Excellence at THOP University</h2> {/* Updated heading to include university name */}
      <img
        src={Libraries}
        alt="THOP University Library"
        className="library-image"
      />
      <p className="library-paragraph">
        The Central Library at THOP University is more than just a repository of books; it's a dynamic hub for information services, serving as a pivotal learning and resource center. We are committed to being a creative and innovative partner in supporting the diverse teaching, learning, scholarship, and research activities undertaken by our esteemed faculty and students. With its rapidly expanding collection, available in both digital and print formats, and equipped with state-of-the-art facilities, the Central Library plays a crucial role in establishing THOP University as a world-class academic institution.
      </p>
      <p className="library-paragraph">
        Strategically located in a dedicated two-storey building, encompassing both the ground and first floors, the library offers a serene and inspiring environment. Its position overlooks a beautiful landscape adorned with lush green plants and a vibrant variety of flowers, creating a truly pleasant ambiance. The thoughtfully furnished and well-lit interiors further enhance this atmosphere of serenity, making it an ideal space for deep learning and focused research. Spanning a spacious area of 13,950 Sq. Mt (150,156 sq. ft), it provides ample room for quiet study and collaborative work.
      </p>
      <p className="library-paragraph">
        Our extensive collection is a testament to our commitment to comprehensive education. It encompasses 313,760 books across 53,013 diverse titles, covering a wide array of subjects including Engineering, Management, Architecture & Design, Law, Pharmacy, Nursing, Dental, Basic Science & Humanities. Additionally, the library houses valuable reference books, 3,179 CDs/DVDs, and maintains subscriptions to 134 print journals and 100 magazines. We also provide access to major e-resources such as IEEE Journals, Science Direct, IEEE Journals and Proceedings, ASME, ASCE, ACM Digital Library, ProQuest Academic Complete e-Book collection, ProQuest Central e-Journal package, and Web of Science, all accessible to our user community.
      </p>
      <p className="library-paragraph">
        To ensure continuous access to knowledge, the Central Library proudly offers 24x7 services through the Knimbus Remote Access and the mLibrary mobile app. These platforms facilitate secure remote access to all e-Resources with federated search capabilities, allowing our users to retrieve necessary information anytime, anywhere, fostering uninterrupted learning and research beyond campus boundaries.
      </p>
    </div>
  );
};

export default Library;