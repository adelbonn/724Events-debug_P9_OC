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
        id={name}
        // id={name}  // ajout 'un id pour l'attribut htmlFor'
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          required={required}
          minLength={2}
          title={`Veuillez remplir le champ ${label} `}
    
        />
      );
      break;
// Ajout  le champ email
case FIELD_TYPES.EMAIL:
      component = (
        <input
        id={name}
        // id={name}  // ajout 'un id pour l'attribut htmlFor'
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
      id={name}
      // id={name}  // ajout 'un id pour l'attribut htmlFor'
      data-testid="field-testid"
      required
      minLength={10}
      title={`Veuillez remplir le champ ${label}, 
            le message doit contenir minimum 10 caractères `}
 
      />;
      break;
    default:
      component = (
        <input
        id={name}
        // id={name}  // ajout 'un id pour l'attribut htmlFor'
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          required={required}
        />
      );
      break;
  }

  // ajout de label et htmlFor a la place de span
  return (
    <div className="inputField">
      <label htmlFor={name}>{label}</label>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool // Ajout d'un nouveau prop pour les champs requis
};
 Field.defaultProps = {
   label: "",
   placeholder: "",
   type: FIELD_TYPES.INPUT_TEXT,
   name: "field-name",
   required: false, // Ajout d'un nouveau défaut pour le champ requis
 }

export default Field;
