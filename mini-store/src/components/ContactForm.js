import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [submitted, setSubmit] = useState(false);
    
    const onSubmit = data => {
        if (data.fullName !== '' && data.email !== '' && data.message !== '') {
            // Send email
            // Show thank you
            setSubmit(true);
        }
    }

    return (
        <div className="m-3">
            {
                submitted ? (
                    <div>
                        <h2>Thanks for contacting us</h2>
                        <p>Our team will review and contact you back shortly!</p>
                        <button onClick={() => setSubmit(false)} className="btn btn-primary">Submit another one</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="fullName" class="form-label">Full Name *</label>
                            <input 
                                id="fullName" 
                                defaultValue="" 
                                {...register("fullName", { required: true })} 
                                type="text" class="form-control" 
                            />
                            {errors.fullName && <span>This field is required</span>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email *</label>
                            <input id="email" defaultValue="" {...register("fullName", { required: true })} type="email" class="form-control" />
                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input id="phone" {...register("phone")} type="text" class="form-control"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message *</label>
                            <textarea id="message" {...register("message", { required: true })} className="form-control"></textarea>
                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div className="mb-3">
                            <button className="btn btn-primary" type="submit">Send</button>
                        </div>
                    </form>
                )
            }
            
        </div>
    )
}
