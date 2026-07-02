import React from 'react';
import '../styles/FormSections.css';

interface FormData {
  consentDataProcessing: boolean;
  consentPhysicianSharing: boolean;
}

interface ConsentSectionProps {
  data: FormData;
  onChange: (updates: Partial<FormData>) => void;
}

const ConsentSection: React.FC<ConsentSectionProps> = ({ data, onChange }) => {
  const handleDataProcessingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ consentDataProcessing: e.target.checked });
  };

  const handlePhysicianSharingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ consentPhysicianSharing: e.target.checked });
  };

  return (
    <div className="form-section">
      <p className="section-description section-description--prominent">
        ⚠️ Privacy & Toestemming
      </p>

      <div className="consent-box">
        <h4>Uw privacy is belangrijk</h4>
        <p>
          Voordat u dit formulier indient, moet u akkoord gaan met de volgende punten:
        </p>
      </div>

      <div className="checkbox-consent">
        <input
          type="checkbox"
          id="consent-data"
          checked={data.consentDataProcessing}
          onChange={handleDataProcessingChange}
        />
        <label htmlFor="consent-data">
          <strong>Ik ga akkoord met gegevensverwerking</strong>
          <p className="consent-description">
            Ik begrijp dat mijn antwoorden zullen worden gebruikt voor het opstellen van een rapport
            in verband met mijn consult bij de bedrijfsarts. Mijn gegevens zullen vertrouwelijk
            behandeld worden volgens de GDPR/AVG-regelgeving.
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              {' '}Lees ons privacybeleid
            </a>
          </p>
        </label>
      </div>

      <div className="checkbox-consent">
        <input
          type="checkbox"
          id="consent-physician"
          checked={data.consentPhysicianSharing}
          onChange={handlePhysicianSharingChange}
        />
        <label htmlFor="consent-physician">
          <strong>Ik ga akkoord met delen van informatie met de bedrijfsarts</strong>
          <p className="consent-description">
            Ik geef toestemming voor het verzenden van mijn ingevulde formulier en gegenereerde
            rapport naar de bedrijfsarts. Dit is nodig zodat de bedrijfsarts mijn antwoorden
            voorafgaand aan het consult kan bekijken.
          </p>
        </label>
      </div>

      <div className="consent-info">
        <p>
          <strong>Uw rechten:</strong> U hebt het recht om uw gegevens in te zien, aan te passen,
          of verwijderd te laten worden. Neem contact op met onze gegevensbeschermingsmedewerker
          voor meer informatie.
        </p>
      </div>

      {(!data.consentDataProcessing || !data.consentPhysicianSharing) && (
        <div className="warning">
          <p>
            ⚠️ U moet beide toestemmingen accepteren om het formulier in te dienen.
          </p>
        </div>
      )}
    </div>
  );
};

export default ConsentSection;
