import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

// simulation d'appel API
const mockContactApi = () => new Promise((resolve) => { setTimeout(resolve, 500); })

const Form = ({ onSuccess, onError }) => {
  const [sending, setSending] = useState(false);
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();
      console.log("Form submited with data:", new FormData(evt.target));
      setSending(true);
      onSuccess(); // Appel  onSuccess après mockContactApi, mockContactApi simule un appel APi asynchrone
      // modifications : ajout de l'appel à onSuccess() (onSuccess n'était pas aoplé) et onErr  amélioration gestion des erreurs
    
      try {
        await mockContactApi();
        setSending(false);
      } catch (err) {
        setSending(false);
        onError(err);
        throw err;
      }
    },
    [onSuccess, onError]  // tableau de dépendance permet de détecter les changements dans les props et les dépendances et detecter les changements dans les champs du formulaire ce qui va permettre de mettre à jour le formulaire lorsque les données du formulaire sont modifiées.
  );
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          <Field placeholder="" 
          label="Nom" name="nom" 
          required />
          <Field placeholder="" label="Prénom" name="prenom" required />
          <Select
            selection={["Personel", "Entreprise"]}
            onChange={() => null}
            label="Personel / Entreprise"
            type="large"
            titleEmpty
            required
          />
          <Field placeholder=""
          name="email"
           label="Email"
           required />
          <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? "En cours" : "Envoyer"}
          </Button>
        </div>
        <div className="col">
          <Field
            placeholder="message"
            name="message"
            required
            label="Message"
            type={FIELD_TYPES.TEXTAREA}
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
}

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
}

export default Form;
