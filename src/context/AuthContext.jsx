import React, { createContext, useState, useEffect } from 'react';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [admin, setAdmin] = useState([]);

  // Initialize data on mount
  useEffect(() => {
    setLocalStorage();
    const data = getLocalStorage();
    if (data) {
      setEmployees(data.employees || []);
      setAdmin(data.admin || []);
    }

    // Check if there is an active session
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      setUser(parsed.data);
    }
  }, []);

  const loginUser = (email, password) => {
    // Check if admin matches
    const matchedAdmin = admin.find(a => a.email === email && a.password === password);
    if (matchedAdmin) {
      const sessionData = { role: 'admin', data: matchedAdmin };
      localStorage.setItem('loggedInUser', JSON.stringify(sessionData));
      setUser(matchedAdmin);
      return { success: true, role: 'admin', user: matchedAdmin };
    }

    // Check if employee matches
    const matchedEmployee = employees.find(e => e.email === email && e.password === password);
    if (matchedEmployee) {
      const sessionData = { role: 'employee', data: matchedEmployee };
      localStorage.setItem('loggedInUser', JSON.stringify(sessionData));
      setUser(matchedEmployee);
      return { success: true, role: 'employee', user: matchedEmployee };
    }

    return { success: false, message: 'Invalid email or password' };
  };

  const logoutUser = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  const updateEmployeeTasks = (employeeId, updatedTasks) => {
    // Calculate new task counts
    const active = updatedTasks.filter(t => t.active).length;
    const newTask = updatedTasks.filter(t => t.newTask).length;
    const completed = updatedTasks.filter(t => t.completed).length;
    const failed = updatedTasks.filter(t => t.failed).length;

    const updatedEmployees = employees.map(emp => {
      if (emp.id === employeeId) {
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: { active, newTask, completed, failed }
        };
      }
      return emp;
    });

    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // If the updated employee is the currently logged-in user, update their state too
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      if (parsed.role === 'employee' && parsed.data.id === employeeId) {
        const updatedCurrentEmployee = {
          ...parsed.data,
          tasks: updatedTasks,
          taskCounts: { active, newTask, completed, failed }
        };
        setUser(updatedCurrentEmployee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: updatedCurrentEmployee })
        );
      }
    }
  };

  const addEmployeeTask = (employeeId, newTaskObj) => {
    const targetEmployee = employees.find(emp => emp.id === employeeId);
    if (!targetEmployee) return;

    const updatedTasks = [...targetEmployee.tasks, newTaskObj];
    updateEmployeeTasks(employeeId, updatedTasks);
  };

  return (
    <AuthContext.Provider value={{
      user,
      employees,
      loginUser,
      logoutUser,
      updateEmployeeTasks,
      addEmployeeTask
    }}>
      {children}
    </AuthContext.Provider>
  );
};
