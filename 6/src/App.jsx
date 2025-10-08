import "./App.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";

const schema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().min(8, "Password should be at least 8 characters").required("Password is required"),
});

function App() {
  const [formData, setFormData] = useState(null);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      setFormData(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: "400px", margin: "50px auto" }}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name && <div style={{ color: "red" }}>{formik.errors.name}</div>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...formik.getFieldProps("password")} />
        {formik.touched.password && formik.errors.password && <div style={{ color: "red" }}>{formik.errors.password}</div>}
      </div>

      <button type="submit">Submit</button>

      {formData && (
        <div style={{ marginTop: "20px" }}>
          <strong>Submitted Data:</strong>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </form>
  );
}

export default App;
