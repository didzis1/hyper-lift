import * as yup from 'yup';

export const registerValidation = yup.object().shape({
  firstName: yup
    .string()
    .min(1, 'First name must be longer than one character')
    .max(255, 'First name cannot be this long')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(1, 'Last name must be longer than one character')
    .max(255, 'Last name cannot be this long')
    .required('Last name is required'),
  email: yup
    .string()
    .email('E-mail must be in correct format')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(5, 'Password length must be over five characters')
    .max(50, 'Password length cannot be higher than 50 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirmation is required')
});

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email('E-mail must be in correct format')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(5, 'Password length must be over five characters')
    .max(50, 'Password length cannot be higher than 50 characters')
    .required('Password is required')
});

export const routineValidation = yup.object().shape({
  description: yup.string().required('Routine title is required'),
  workouts: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Workout name is required'),
      exercises: yup
        .array()
        .min(1, 'At least one exercise is required')
        .of(
          yup.object().shape({
            exerciseName: yup.string(),
            reps: yup.string().required('Reps are required'),
            sets: yup.string().required('Sets are required')
          })
        )
    })
  )
});
