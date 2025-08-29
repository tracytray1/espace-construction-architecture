import { useState } from 'react';
import emailjs from 'emailjs-com';

import './FormInput.scss';



const FormInput = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    position: '',
    building: '',
    budget: '',
    totalSurface: '',
    siteSurface: '',
    website: '',
    comment: ''
  });

  const [status, setStatus] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_8u20don",   // ⚡ YOUR_SERVICE_ID
      "template_5dbtu7z",  // ⚡ YOUR_TEMPLATE_ID
      formData,
      "gf53-Jn6FJxdzvyd9"    // YOUR_PUBLIC_KEY
    ).then(
      () => {
        setStatus("Message envoyé ✅");
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          position: '',
          building: '',
          budget: '',
          totalSurface: '',
          siteSurface: '',
          website: '',
          comment: ''
        });
      },
      (error) => {
        setStatus("Erreur lors de l'envoi ❌ : " + error.text);
      }
    );
  };


  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact</h2>

      <div className="row">
        <label>
          Nom
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Adresse e-mail
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
      </div>

      <div className="row">
        <label>
          Nom de l'entreprise
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </label>

        <label>
          Numéro de téléphone
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
      </div>

      <div className="row">
        <label>
          Département / Poste
          <input type="text" name="position" value={formData.position} onChange={handleChange} />
        </label>

        <label>
          Type de bâtiment
          <select name="building" value={formData.building} onChange={handleChange}>
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
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} />
        </label>

        <label>
          Surface totale (㎡)
          <input type="number" name="totalSurface" value={formData.totalSurface} onChange={handleChange} />
        </label>
      </div>

      <div className="row">
        <label>
          Surface du site (㎡)
          <input type="number" name="siteSurface" value={formData.siteSurface} onChange={handleChange} />
        </label>

        <label>
          Site Web
          <input type="url" name="website" value={formData.website} onChange={handleChange} />
        </label>
      </div>

      <label>
        Demandes / Remarques
        <textarea name="comment" value={formData.comment} onChange={handleChange} rows="5" />
      </label>

      <button type="submit">Envoyer</button>

      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default FormInput;
