import './FormInput.scss';

const FormInput = () => {
  return (
    <form className="contact-form">
      <h2>Contact</h2>

      <div className="row">
        <label>
          Nom
          <input type="text" name="name" placeholder="Votre nom" required />
        </label>

        <label>
          Adresse e-mail
          <input type="email" name="email" placeholder="votre@email.com" required />
        </label>
      </div>

      <div className="row">
        <label>
          Nom de l'entreprise
          <input type="text" name="company" placeholder="Nom de l'entreprise" />
        </label>

        <label>
          Numéro de téléphone
          <input type="tel" name="phone" placeholder="+33 6 12 34 56 78" />
        </label>
      </div>

      <div className="row">
        <label>
          Département / Poste
          <input type="text" name="department" placeholder="Ex: Marketing, Direction" />
        </label>

        <label>
          Type de bâtiment
          <select name="buildingType">
            <option value="">Veuillez sélectionner</option>
            <option value="résidentiel">Résidentiel</option>
            <option value="commercial">Commercial</option>
            <option value="industriel">Industriel</option>
          </select>
        </label>
      </div>

      <div className="row">
        <label>
          Budget total (EUR)
          <input type="number" name="budget" placeholder="Montant en EUR" />
        </label>

        <label>
          Date de livraison prévue
          <input type="date" name="completionDate" />
        </label>
      </div>

      <div className="row">
        <label>
          Surface totale (㎡)
          <input type="number" name="totalFloorArea" placeholder="m²" />
        </label>

        <label>
          Surface du site (㎡)
          <input type="number" name="siteArea" placeholder="m²" />
        </label>
      </div>

      <label>
        Adresse du site
        <input type="text" name="siteAddress" placeholder="Adresse complète" />
      </label>

      <label>
        Demandes / Remarques
        <textarea name="requests" placeholder="Votre message..." rows="5" />
      </label>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default FormInput;
