import React, { useEffect, useState } from 'react';
import { Certification, CertificationProps} from '../../../controllers/Interfaces';
import { getFirebaseImage } from '../../../controllers/Firebase';
import '../../../shared/Certification.css'

const CertificationCard: React.FC<CertificationProps> = ({ certification }) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  const fetchData = async (data: Certification) => {
    try {
      // Obtener la URL de la imagen desde Firebase Storage
      const url = await getFirebaseImage(data!.imagenURL!);
      setImageUrl(url!);
    } catch (error) {
      console.error('Error al obtener datos de la persona:', error);
    }
  };

  useEffect(() => {
    fetchData(certification);
  }, []);

  const handleCertificationClick = () => {
    window.open(certification.id, '_blank');
  }
  return (
    <div className="card-container cursor-pointer" onClick={handleCertificationClick} style={{ cursor: 'pointer' }}>
      <div className="card mb-3 shadow-lg text-center">
        <div className="row g-0">
          <div className="col-md-12">
            <img
              src={imageUrl}
              alt={certification.nombre}
              className="img-fluid rounded-top mx-auto"
              style={{ width: '50%', maxHeight: '170px' }}
            />
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title mb-3">{certification.nombre}</h5>
              <p className="card-text mb-3">{certification.entidad}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
