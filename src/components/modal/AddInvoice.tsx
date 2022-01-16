import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddInvoice = (props: any) => {
  const { details } = props;

  const [formActive, setFormActive] = useState(false);

  const handleSubmit = (values: {}, setSubmitting: { (isSubmitting: boolean): void; (arg0: boolean): void }) => {
    // The user input is in values
    console.log(values);

    try {
      setSubmitting(true);
      setFormActive(true);

      // submit your form here
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      setFormActive(false);
    }
  };

  return (
    <div className="px-4 pt-6 pb-10">
      <Formik
        initialValues={{
          email: details ? details.email : "",
          fullName: details ? details.name : "",
          message: details ? details.name : "",
          gender: details ? details.name : "",
          state: details ? details.name : "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),
          fullName: Yup.string().min(6, "Name is too short").required("Required"),
          gender: Yup.string().required("Required"),
          state: Yup.string().required("Required"),
          message: Yup.string().min(20, "Message must be at least 20 characters long").required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}
      >
        <Form>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-3 text-sm font-semibold" htmlFor="Full Name">
                Full Name
              </label>
              <Field
                className="py-3 px-4 border focus:outline-none rounded shadow hover:border-primary focus:border-primary transition duration-500"
                type="text"
                name="fullName"
                placeholder="Zuki Zoe"
              />
              <div className="text-red-600 text-sm">
                <ErrorMessage name="fullName" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-3 text-sm font-semibold" htmlFor="Email">
                Email
              </label>
              <Field
                className="py-3 px-4 border focus:outline-none rounded shadow hover:border-primary focus:border-primary transition duration-500"
                type="text"
                name="email"
                placeholder="zuki@gmail.com"
              />
              <div className="text-red-600 text-sm">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-3 text-sm font-semibold" htmlFor="Gender">
                Gender
              </label>
              <Field
                className="py-3 px-4 border focus:outline-none rounded hover:border-primary focus:border-primary transition duration-500"
                type="text"
                placeholder="zuki@gmail.com"
                name="gender"
                as="select"
              >
                <option value="">Choose</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer not to say">Prefer not to say</option>
              </Field>
              <div className="text-red-600 text-sm">
                <ErrorMessage name="gender" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-3 text-sm font-semibold" htmlFor="State">
                State
              </label>
              <Field
                className="py-3 px-4 border focus:outline-none rounded hover:border-primary focus:border-primary transition duration-500"
                type="text"
                placeholder="Lagos"
                name="state"
              />
              <div className="text-red-600 text-sm">
                <ErrorMessage name="state" />
              </div>
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="mb-3 text-sm font-semibold" htmlFor="Comment">
                Message
              </label>
              <Field
                className="py-3 px-4 border focus:outline-none rounded shadow hover:border-primary focus:border-primary transition duration-500 resize-none"
                type="text"
                placeholder="Leave your message here"
                rows="4"
                as="textarea"
                name="message"
              />
              <div className="text-red-600 text-sm">
                <ErrorMessage name="message" />
              </div>
            </div>
            <div className="flex justify-center md:col-span-2 mt-6">
              <button className="bg-primary text-white py-3 w-52 rounded hover:bg-primary-dark transition duration-500" type="submit">
                {formActive ? <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i> : details ? "Edit Invoice" : "Add Invoice"}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddInvoice;
