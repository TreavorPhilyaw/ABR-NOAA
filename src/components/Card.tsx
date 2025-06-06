import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import type { Image } from '../types';

interface CardProps {
  image: Image[];
  header: string;
  subtext: string;
  alt?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ image, header, subtext, link }) => {
  const [current, setCurrent] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent(prev => (prev === 0 ? image.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent(prev => (prev === image.length - 1 ? 0 : prev + 1));
  };

  const cardContent = (
    <div className="card">
      <div className="card-image-wrapper" style={{ position: 'relative' }}>
        <img
          className="card-image"
          src={image[current].src}
          alt={image[current].alt || header}
        />
        {image.length > 1 && (
          <>
            <button className="card-arrow left" onClick={prevImage}>&lt;</button>
            <button className="card-arrow right" onClick={nextImage}>&gt;</button>
          </>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-header">{header}</h3>
        <p className="card-subtext" dangerouslySetInnerHTML={{ __html: subtext }}></p>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="card-link">
        {cardContent}
      </Link>
    );
  }
  return cardContent;
};

export default Card; 