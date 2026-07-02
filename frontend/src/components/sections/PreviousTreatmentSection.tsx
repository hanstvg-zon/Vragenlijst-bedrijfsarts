import React from 'react';
import '../styles/FormSections.css';

interface FormData {
  previousTreatment: string;
}

interface PreviousTreatmentSectionProps {
  data: FormData;
  onChange: (updates: Partial<FormData>) => void;
}

const treatmentPresets = [
  { emoji: '👨‍⚕️', text: 'Huisarts bezocht' },
  { emoji: '🧘', text: 'Fysiotherapie' },
  { emoji: '🧠', text: 'Psycholoog/therapeut' },
  { emoji: '💊', text: 'Medicijnen voorgeschreven' },
  { emoji: '🏥', text: 'Ziekenhuisopname' },
  { emoji: '💆', text: 'Massage/spa-behandeling' },
  { emoji: '📚', text: 'Zelfhulp/coaching' },
  { emoji: '🚫', text: 'Geen behandeling gehad' },
];

const PreviousTreatmentSection: React.FC<PreviousTreatmentSectionProps> = ({
  data,
  onChange,
}) => {
  const handlePresetClick = (preset: string) => {
    const currentText = data.previousTreatment;
    const newText = currentText ? `${currentText}, ${preset}` : preset;
    onChange({ previousTreatment: newText });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ previousTreatment: e.target.value });
  };

  const clearText = () => {
    onChange({ previousTreatment: '' });
  };

  return (
    <div className="form-section">
      <p className="section-description">
        Heeft u al hulp gezocht voor deze klachten? Selecteer wat van toepassing is:
      </p>

      {/* Quick Preset Buttons */}
      <div className="preset-grid">
        {treatmentPresets.map((preset) => (
          <button
            key={preset.text}
            className={`preset-button-large ${data.previousTreatment.includes(preset.text) ? 'selected' : ''}`}
            onClick={() => handlePresetClick(preset.text)}
          >
            <span className="preset-emoji-large">{preset.emoji}</span>
            <span className="preset-text-large">{preset.text}</span>
          </button>
        ))}
      </div>

      {/* Text Input */}
      <div className="form-group">
        <div className="label-with-action">
          <label htmlFor="previous-treatment">Details (optioneel):</label>
          {data.previousTreatment && (
            <button className="small-link-btn" onClick={clearText}>
              Wissen
            </button>
          )}
        </div>
        <textarea
          id="previous-treatment"
          value={data.previousTreatment}
          onChange={handleChange}
          placeholder="Bijvoorbeeld: Bij huisarts ben ik naar fysiotherapie verwezen, die gaf oefeningen..."
          rows={4}
        />
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
