import React from 'react';
import '../styles/FormSections.css';

interface FormData {
  triggers: string;
}

interface TriggersSectionProps {
  data: FormData;
  onChange: (updates: Partial<FormData>) => void;
}

const triggerPresets = [
  { emoji: '💼', text: 'Werkstress' },
  { emoji: '😰', text: 'Angst/paniek' },
  { emoji: '😢', text: 'Verdriet/verlies' },
  { emoji: '⚡', text: 'Plotseling gebeurd' },
  { emoji: '💪', text: 'Te zware lichamelijke belasting' },
  { emoji: '🖥️', text: 'Veel achter computer' },
  { emoji: '😴', text: 'Slaapgebrek' },
  { emoji: '🍔', text: 'Ongezonde leefstijl' },
  { emoji: '🚗', text: 'Ongeluk/trauma' },
  { emoji: '❓', text: 'Onbekend' },
];

const TriggersSection: React.FC<TriggersSectionProps> = ({ data, onChange }) => {
  const handlePresetClick = (preset: string) => {
    const currentText = data.triggers;
    const newText = currentText ? `${currentText}, ${preset}` : preset;
    onChange({ triggers: newText });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ triggers: e.target.value });
  };

  const clearText = () => {
    onChange({ triggers: '' });
  };

  return (
    <div className="form-section">
      <p className="section-description">
        Wat heeft de klachten veroorzaakt of erger gemaakt? Klik op wat van toepassing is:
      </p>

      {/* Quick Preset Buttons */}
      <div className="preset-grid">
        {triggerPresets.map((preset) => (
          <button
            key={preset.text}
            className={`preset-button-large ${data.triggers.includes(preset.text) ? 'selected' : ''}`}
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
          <label htmlFor="triggers">Of beschrijf hier zelf:</label>
          {data.triggers && (
            <button className="small-link-btn" onClick={clearText}>
              Wissen
            </button>
          )}
        </div>
        <textarea
          id="triggers"
          value={data.triggers}
          onChange={handleChange}
          placeholder="Beschrijf hier wat u denkt dat de klachten veroorzaakt heeft..."
          rows={5}
          className="form-textarea"
        />
        <div className="char-count">
          {data.triggers.length} tekens
        </div>
      </div>

      {!data.triggers.trim() && (
        <div className="info">
          <p>ℹ️ Dit helpt de bedrijfsarts beter uw situatie te begrijpen</p>
        </div>
      )}
    </div>
  );
};

export default TriggersSection;
