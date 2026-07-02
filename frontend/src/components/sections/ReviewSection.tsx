import React, { useState } from 'react';
import '../styles/FormSections.css';

interface FormData {
  symptoms: string[];
  symptomsOther: string;
  duration: string;
  durationOther: string;
  triggers: string;
  workImpact: string;
  previousTreatment: string;
  consentDataProcessing: boolean;
  consentPhysicianSharing: boolean;
}

interface ReviewSectionProps {
  formData: FormData;
  onEdit: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  error: string | null;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  formData,
  onEdit,
  onSubmit,
  isSubmitting,
  error,
}) => {
  const [downloadingPDF, setDownloadingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    setDownloadingPDF(true);
    try {
      // TODO: Implement PDF download functionality
      console.log('Downloading PDF preview...');
    } catch (err) {
      console.error('Failed to download PDF:', err);
    } finally {
      setDownloadingPDF(false);
    }
  };

  return (
    <div className="review-section">
      <h2>Controleer uw antwoorden</h2>
      <p className="review-intro">
        Controleer alstublieft alle informatie voordat u het formulier indient.
        Klik op "Bewerken" om terug te gaan naar een vorige sectie.
      </p>

      <div className="review-content">
        {/* Symptoms */}
        <div className="review-item">
          <h3>Huidige klachten</h3>
          <ul>
            {formData.symptoms.map((symptom) => (
              <li key={symptom}>{symptom}</li>
            ))}
          </ul>
          {formData.symptomsOther && (
            <p className="review-detail">Overig: {formData.symptomsOther}</p>
          )}
        </div>

        {/* Duration */}
        <div className="review-item">
          <h3>Duur van klachten</h3>
          <p>{formData.duration || 'Niet ingevuld'}</p>
          {formData.durationOther && (
            <p className="review-detail">{formData.durationOther}</p>
          )}
        </div>

        {/* Triggers */}
        <div className="review-item">
          <h3>Triggers & oorzaken</h3>
          <p>{formData.triggers || 'Niet ingevuld'}</p>
        </div>

        {/* Work Impact */}
        <div className="review-item">
          <h3>Invloed op het werk</h3>
          <p>{formData.workImpact || 'Niet ingevuld'}</p>
        </div>

        {/* Previous Treatment */}
        <div className="review-item">
          <h3>Eerdere behandelingen</h3>
          <p>{formData.previousTreatment || 'Niet ingevuld'}</p>
        </div>

        {/* Consent */}
        <div className="review-item">
          <h3>Privacy & Toestemming</h3>
          <div className="consent-review">
            <p>
              ✓ Gegevensverwerking: {formData.consentDataProcessing ? 'Akkoord' : 'Niet akkoord'}
            </p>
            <p>
              ✓ Delen met bedrijfsarts: {formData.consentPhysicianSharing ? 'Akkoord' : 'Niet akkoord'}
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      <div className="review-actions">
        <button
          className="btn btn-secondary"
          onClick={onEdit}
          disabled={isSubmitting}
        >
          ← Bewerken
        </button>
        <button
          className="btn btn-outline"
          onClick={handleDownloadPDF}
          disabled={isSubmitting || downloadingPDF}
        >
          📥 Preview PDF
        </button>
        <button
          className="btn btn-primary"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Bezig met indienen...' : '✓ Indienen'}
        </button>
      </div>

      <div className="review-notice">
        <p>
          Door op "Indienen" te klikken, stuurt u uw formulier naar de bedrijfsarts.
          U kunt het formulier na indienen niet meer bewerken.
        </p>
      </div>
    </div>
  );
};

export default ReviewSection;
