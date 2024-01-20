import React, { useState } from 'react';

const Contactfive = () => {
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
    const nextIndex = (currentIndex + 1) % 8; // Assuming you have 8 images
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goToPrevious = () => {
    const previousIndex = (currentIndex - 1 + 8) % 8; // Assuming you have 8 images
    setSelectedImage(images[previousIndex]);
    setCurrentIndex(previousIndex);
  };

  const images = [
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/44245cf9679e5017b215a35d/pexels-photo-5325840.jpeg?version=',
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/4cc90d3473295d748721bb23/pexels-photo-6892628.jpeg?version=',
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/341614f7646b5ffd8cb65497/pexels-photo-3137073.jpeg?version=',
    'https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/6d8fc6fd39ec5deca8ce264f/pexels-photo-2438210.jpeg?version=',
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/027eaba6a2745bc9b9b6636e/pexels-photo-3850989.jpeg?version=',
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/37138dac11be51968115dc74/pexels-photo-6003915.jpeg?version=',
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/ed3cc5da2da45d4088a233f1/pexels-photo-6651114.jpeg?version=',
    'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/d100a05986dc5c1c86ceae89/pexels-photo-5191390.jpeg?version='
  ];

  return (
    <div className='contactfive'>
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

export default Contactfive;
