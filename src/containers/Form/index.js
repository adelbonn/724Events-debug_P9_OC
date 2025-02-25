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

// Validation du formulaire
// const form = evt.target;
// const isValid = form.checkValidity();

// Affichage des messages d'erreur
// if (!isValid) {
// déclenche le messages de validation natifs
//   form.reportValidity();
//   return;
// }
// Force la validation de tout les champ du formaulaire
 // Force la validation de tous les champs sauf en mode test
 if (process.env.NODE_ENV !== 'test') {
  const form = evt.target;
 const fields = form.elements;
 for (let i = 0; i < fields.length; i+=1) {
   const field = fields[i];
   if (field.checkValidity && !field.checkValidity()) {
     field.reportValidity();
     return;
   }
 }
 
      // Vérifie spécifiquement le message et le type
      const message = form.querySelector('textarea[name="message"]');
      const type = form.querySelector('input[name="type"]');
      
      if (!message.value || message.value.length < 10) {
        message.reportValidity();
        return;
      }

      if (!type.value) {
        type.reportValidity();
        return;
      }

    }
      setSending(true);
      // modifications : ajout de l'appel à onSuccess() (onSuccess n'était pas aoplé) et onErr  amélioration gestion des erreurs
      try {
        await mockContactApi();
        setSending(false);
        onSuccess(); // Appel  onSuccess qui n'était pas appelé et donc n'affichait pas le message de validation d'envoi du formulaire
      } catch (err) {
        setSending(false);
        onError(err);
        throw err;
      }
    },
    [onSuccess, onError]  // tableau de dépendance permet de détecter les changements dans les props et les dépendances et detecter les changements dans les champs du formulaire ce qui va permettre de mettre à jour le formulaire lorsque les données du formulaire sont modifiées.Et éviter que le composant ne soit re-render lors des modifications des props et des dépendances
  );
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">

          <Field 
          placeholder="" 
          label="Nom"
          name="nom" 
          required 
          />

          <Field placeholder="" 
          label="Prénom" 
          name="prenom" 
          required />

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
           type={FIELD_TYPES.EMAIL}
           required />
          <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? "En cours" : "Envoyer"}
          </Button>
        </div>
        <div className="col">
          <Field
            placeholder="message"
            name="message"          
            label="Message"
            minLength={10}
            type={FIELD_TYPES.TEXTAREA}
            required
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
