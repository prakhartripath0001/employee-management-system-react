import employeeData from './employee.json';

export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employeeData.employees));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(employeeData.admin));
  }
};

export const getLocalStorage = () => {
  const storedEmployees = JSON.parse(localStorage.getItem('employees'));
  const storedAdmin = JSON.parse(localStorage.getItem('admin'));
  return { employees: storedEmployees, admin: storedAdmin };
};
