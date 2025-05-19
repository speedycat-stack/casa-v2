import React, { useEffect, useState } from 'react';
import './Form.css';

export const Form = ({
  onSubmit,
  children,
  initialValues = {},
  validationSchema,
  className = ''
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const validateField = async (name, value) => {
    if (!validationSchema) return '';

    try {
      await validationSchema.validateAt(name, { [name]: value });
      return '';
    } catch (error) {
      return error.message;
    }
  };

  const validateForm = async (formValues) => {
    if (!validationSchema) return {};

    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      return {};
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach(err => {
        validationErrors[err.path] = err.message;
      });
      return validationErrors;
    }
  };

  const handleChange = async (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setValues(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    if (touched[name]) {
      const fieldError = await validateField(name, fieldValue);
      setErrors(prev => ({
        ...prev,
        [name]: fieldError
      }));
    }
  };

  const handleBlur = async (event) => {
    const { name, value } = event.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const fieldError = await validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: fieldError
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setIsSubmitting(true);
    const validationErrors = await validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await onSubmit(values);
      } catch (error) {
        setErrors(prev => ({
          ...prev,
          submit: error.message
        }));
      }
    }
    setIsSubmitting(false);
  };

  const formContextValue = {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    setFieldValue: (name, value) => {
      setValues(prev => ({
        ...prev,
        [name]: value
      }));
    },
    setFieldError: (name, error) => {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    },
    setFieldTouched: (name, isTouched = true) => {
      setTouched(prev => ({
        ...prev,
        [name]: isTouched
      }));
    }
  };

  const formClasses = ['form', className].filter(Boolean).join(' ');

  return (
    <form className={formClasses} onSubmit={handleSubmit} noValidate>
      <FormContext.Provider value={formContextValue}>
        {typeof children === 'function' ? children(formContextValue) : children}
      </FormContext.Provider>
    </form>
  );
};

export const FormContext = React.createContext({});

export const useFormContext = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error('Form field components must be used within a Form component');
  }
  return context;
};

export const FormField = ({
  name,
  label,
  type = 'text',
  required = false,
  className = '',
  ...props
}) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur
  } = useFormContext();

  const fieldClasses = [
    'form-field',
    errors[name] && touched[name] ? 'form-field-error' : '',
    className
  ].filter(Boolean).join(' ');

  const inputProps = {
    id: name,
    name,
    type,
    value: values[name] || '',
    onChange: handleChange,
    onBlur: handleBlur,
    required,
    'aria-required': required,
    'aria-invalid': errors[name] && touched[name],
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    ...props
  };

  return (
    <div className={fieldClasses}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="form-required">*</span>}
        </label>
      )}
      <input className="form-input" {...inputProps} />
      {errors[name] && touched[name] && (
        <div className="form-error" id={`${name}-error`}>
          {errors[name]}
        </div>
      )}
    </div>
  );
};

export const FormTextArea = ({
  name,
  label,
  required = false,
  className = '',
  ...props
}) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur
  } = useFormContext();

  const fieldClasses = [
    'form-field',
    errors[name] && touched[name] ? 'form-field-error' : '',
    className
  ].filter(Boolean).join(' ');

  const textareaProps = {
    id: name,
    name,
    value: values[name] || '',
    onChange: handleChange,
    onBlur: handleBlur,
    required,
    'aria-required': required,
    'aria-invalid': errors[name] && touched[name],
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    ...props
  };

  return (
    <div className={fieldClasses}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="form-required">*</span>}
        </label>
      )}
      <textarea className="form-textarea" {...textareaProps} />
      {errors[name] && touched[name] && (
        <div className="form-error" id={`${name}-error`}>
          {errors[name]}
        </div>
      )}
    </div>
  );
};

export const FormSelect = ({
  name,
  label,
  options = [],
  required = false,
  className = '',
  ...props
}) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur
  } = useFormContext();

  const fieldClasses = [
    'form-field',
    errors[name] && touched[name] ? 'form-field-error' : '',
    className
  ].filter(Boolean).join(' ');

  const selectProps = {
    id: name,
    name,
    value: values[name] || '',
    onChange: handleChange,
    onBlur: handleBlur,
    required,
    'aria-required': required,
    'aria-invalid': errors[name] && touched[name],
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    ...props
  };

  return (
    <div className={fieldClasses}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="form-required">*</span>}
        </label>
      )}
      <select className="form-select" {...selectProps}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && touched[name] && (
        <div className="form-error" id={`${name}-error`}>
          {errors[name]}
        </div>
      )}
    </div>
  );
};

export default Form;