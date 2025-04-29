import React from 'react';
import Libraries from './Libraries.jpg';

const Library = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px', lineHeight: '1.8' }}>
      <h4>Central Library</h4>
      <img
        src={Libraries}
        alt="University Profile"
        style={{ display: 'block', margin: '20px auto', maxWidth: '80%', height: 'auto', borderRadius: '10px' }}
      />
      <p>
        The Central Library is the hub for information services in the institute and serves as a major learning and
        resource centre. It is a creative and innovative partner in supporting the teaching, learning, scholarship, and
        research activities of the institute. With the fast-growing collection, both in digital and print forms using
        the state-of-the-art facilities, the Central Library is contributing at a higher extent to provide a world-class
        academic institute.
      </p>
      <p>
        It is located in a separate building comprising two storeys, ground and first floor. The location of the central
        library overlooks a beautiful landscape of lush green plants and a variety of flowers. The pleasant ambience and
        the well-furnished, well-lighted location create an atmosphere of serenity and thereby inspire learning and
        research. It has a spacious area of 13,950 Sq. mt / 150,156 sq. ft that exudes a peaceful learning environment.
      </p>
      <p>
        The collection in the library encompasses 313,760 books of 53,013 titles varying in subjects like Engineering,
        Management, Architecture & Design, Law, Pharmacy, Nursing, Dental, Basic Science & Humanities and also includes
        reference books, 3,179 CDs/DVDs, and subscriptions to 134 print journals and 100 magazines in print and
        e-resources. Major e-resources such as IEEE Journals, Science Direct, IEEE Journals and Proceedings, ASME, ASCE,
        ACM Digital Library, ProQuest Academic Complete e-Book collection, ProQuest Central e-Journal package, and Web
        of Science are accessible to the user community.
      </p>
      <p>
        The Central Library is providing 24x7 services through Knimbus Remote Access and the mLibrary mobile app. It
        facilitates users to get secure remote access to e-Resources with federated search.
      </p>
    </div>
  );
};

export default Library;
