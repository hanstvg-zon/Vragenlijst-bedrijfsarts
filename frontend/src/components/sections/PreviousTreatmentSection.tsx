import React from 'react';
import '../styles/FormSections.css';

interface FormData {
  previousTreatment: string;
}

interface PreviousTreatmentSectionProps {
  data: FormData;
  onChange: (updates: Partial<FormData>) => void;
}

const PreviousTreatmentSection: React.FC<PreviousTreatmentSectionProps> = ({
  data,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ previousTreatment: e.target.value });
  };

  return (
    <div className="form-section">
      <p className="section-description">
        Heeft u al eerdere behandelingen of adviezen ontvangen voor deze klachten?
        Denk aan bijvoorbeeld huisarts, fysiotherapeut, psycholoog, of andere medische professionals.
      </p>

      <div className="form-group">
        <label htmlFor="previous-treatment">
          Eerdere behandelingen en adviezen:
        </label>
        <textarea
          id="previous-treatment"
          value={data.previousTreatment}
          onChange={handleChange}
          placeholder="Beschrijf welke behandelingen of adviezen u al hebt ontvangen..."
          rows={6}
          className="form-textarea"
        />
        <div className="char-count">
          {data.previousTreatment.length} tekens
        </div>
      </div>

      {!data.previousTreatment.trim() && (
        <div className="info">
          <p>ℹ️ Dit veld is optioneel. Vul in als van toepassing.</p>
        </div>
      )}
    </div>
  );
};

export default PreviousTreatmentSection;
