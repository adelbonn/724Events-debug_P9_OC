import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  EMAIL: 3, // Ajout d'un nouveau type pour le champ email
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder, required = false }) => {
  const getAutoComplete = (fieldName, fieldType) => {

    // si c'est un textarea, on retourne "off" par default
    if (fieldType === FIELD_TYPES.TEXTAREA) {
      return "off";
    }

    // sinon, pour les autres type de champs : 
    switch (fieldName) {
      case "nom":
        return "family-name";
      case "prenom":
        return "given-name";
      case "email":
        return "email";
        case "message":
        return "off";
      default:
        return "off"; // par defaut je desactive l'autocompletion car React s'attend a recevoir un string et non un booleen ce qui a provoquer une erreur en console
    }
  };

  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          required={required}
          minLength={2}
          title={`Veuillez remplir le champ ${label} `}
          autoComplete={getAutoComplete(name)}
        />
      );
      break;
// Ajout  le champ email
case FIELD_TYPES.EMAIL:
      component = (
        <input
          type="email"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          required={required}
          title="Veullez remplir un email valide (ex: nom@domain.com)"
           autoComplete="email"
        />
      );
break;
    case FIELD_TYPES.TEXTAREA:
      component = <textarea 
      name={name} 
      data-testid="field-testid"
      required
      minLength={10}
      title={`Veuillez remplir le champ ${label}, 
            le message doit contenir minimum 10 caractères `}
            autoComplete={getAutoComplete(name, type)}
      />;
      break;
    default:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          required={required}
        />
      );
      break;
  }
  return (
    <div className="inputField">
      <span>{label}</span>
      {component}

    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool // Ajout d'un nouveau prop pour le champ requis
};
 Field.defaultProps = {
   label: "",
   placeholder: "",
   type: FIELD_TYPES.INPUT_TEXT,
   name: "field-name",
   required: false, // Ajout d'un nouveau défaut pour le champ requis
 }

export default Field;
