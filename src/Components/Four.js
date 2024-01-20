import React, { useState } from 'react';

const Four = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
    document.getElementById('imageModal').style.display = 'block';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
    document.getElementById('imageModal').style.display = 'none';
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % 3; // Assuming you have 3 images
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goToPrevious = () => {
    const previousIndex = (currentIndex - 1 + 3) % 3; // Assuming you have 3 images
    setSelectedImage(images[previousIndex]);
    setCurrentIndex(previousIndex);
  };

  const images = [
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/a1ed9bb2bc0954a2a9c483e7/pexels-photo-1231643.jpeg',
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/9c15421e79a15ce6b2230237/pexels-photo-1586141.jpeg',
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/d2322952c821563c9989f1aa/pexels-photo-3136673.jpeg'
  ];

  return (
    <div className='four'>
      {images.map((imageUrl, index) => (
        <div key={index} className='subfour' onClick={() => openModal(imageUrl, index)}>
          <img src={imageUrl} alt='' />
        </div>
      ))}

      {/* Default Modal */}
      <div id="imageModal" className="modal">
        <span className="modal-close" onClick={closeModal}>&times;</span>
        <button onClick={goToPrevious} className="modal-button left">&lt;</button>
        <img src={selectedImage} alt='' className="modal-image" />
        <button onClick={goToNext} className="modal-button right">&gt;</button>
        <button onClick={closeModal} className="modal-close-button">Close</button>
      </div>
    </div>
  );
};

export default Four;
