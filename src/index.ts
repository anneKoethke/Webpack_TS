import { formData } from './forms'; 

const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
  e.preventDefault(); // page won't reload
  const data = formData(form); // data here is the returned values from forms.ts
  console.log(data);
});
