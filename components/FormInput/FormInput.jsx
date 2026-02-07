'use client';

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
          address: '',
          totalSurface: '',
          building: '',
          siteSurface: '',
          budget: '',
          mission: '',
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
          Entreprise / Organisation
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </label>

        <label>
          Numéro de téléphone
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
      </div>

      <div className="row">
        <label>
          Adresse parcelle
          <input type="text" name="adresse" value={formData.address} onChange={handleChange} />
        </label>

        <label>
          Surface parcelle (㎡)
          <input type="number" name="totalSurface" value={formData.totalSurface} onChange={handleChange} />
        </label>
      </div>

      <div className="row">
        <label>
          Nature de l'ouvrage
          <select name="building" value={formData.building} onChange={handleChange}>
            <option value="">Veuillez sélectionner</option>
            <option value="maison-individuelle">Maison individuelle</option>
            <option value="logement-collectif">Logement collectif</option>
            <option value="hotellerie">Hôtellerie</option>
            <option value="bureaux">Bureaux</option>
            <option value="local-commercial">Local commercial</option>
            <option value="socio-culturel">Socio-culturel</option>
            <option value="sports-loisirs">Sports et Loisirs</option>
          </select>
        </label>

        <label>
          Surface programme (㎡)
          <input type="number" name="siteSurface" value={formData.siteSurface} onChange={handleChange} />
        </label>
      </div>

      <div className="row">
        <label>
          Budget global (EUR)
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} />
        </label>

        <label>
          Type de mission
          <select name="mission" value={formData.mission} onChange={handleChange}>
            <option value="">Veuillez sélectionner</option>
            <option value="mission-partielle">Mission partielle (permis de construire)</option>
            <option value="mission-complete">Mission complète (direction travaux)</option>
            <option value="autre">Autre</option>
          </select>
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
