import React from 'react'
import AppLayout from '../layouts/AppLayout'
import ContactForm from '../../components/ContactForm';

export default function ContactUsPage() {
  return (
    <AppLayout>
        <section id="company-services" className="padding-large">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pb-3">
                        <h1 className="text-center">Contact Us</h1>
                    </div>
                    <div className="col-md-8 pb-3">
                        <ContactForm />
                    </div>
                </div>
            </div>
            </section>
    </AppLayout>
  )
}
