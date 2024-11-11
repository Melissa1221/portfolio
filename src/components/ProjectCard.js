import React from 'react';
import { Card } from 'react-bootstrap';

export const ProjectCard = ({ title, description, img, link }) => {
  return (
    <Card className="project-card h-100">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
        <div className="img-container d-flex align-items-center justify-content-center p-4">
          <Card.Img 
            variant="top" 
            src={img} 
            alt={title} 
            className="project-img w-50 h-auto"
          />
        </div>
        <Card.Body className="text-center">
          <Card.Title className="fw-bold mb-3">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
        </Card.Body>
      </a>
      <style jsx>{`
        .project-card {
          border: none;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          background: #fff;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .img-container {
          height: 200px;
          overflow: hidden;
          border-radius: 8px 8px 0 0;
        }

        .project-img {
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .card-body {
          padding: 1.5rem;
        }

        .card-title {
          color: #333;
          font-size: 1.25rem;
        }

        .card-text {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>
    </Card>
  );
};