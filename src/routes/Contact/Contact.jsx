import FormInput from '../../components/FormInput/FormInput'
import './Contact.scss'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="contact-title">Formulaire de contact</h1>
        <p className="contact-subtitle">
          Remplissez simplement le formulaire ci-dessous, nous reviendrons vers vous au plus vite.
        </p>
      </div>
      <div className="contact-form-wrapper">
        <FormInput />
      </div>
    </div>
  )
}

export default Contact
