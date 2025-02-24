import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  EMAIL: 3, // Ajout d'un nouveau type pour le champ email
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder, required = false }) => {
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
          title={`Veuillez remplir le champ ${label} `}
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
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title={`Veuillez remplir le champ ${label} `}
        />
      );
break;
    case FIELD_TYPES.TEXTAREA:
      component = <textarea name={name} data-testid="field-testid" />;
      break;
    default:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          required={required}
          title={`Veuillez remplir le champ ${label} `}
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
