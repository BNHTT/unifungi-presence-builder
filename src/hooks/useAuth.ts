import { useState, useEffect } from 'react';

/**
 * Hook simple para autenticación del panel de administración
 * 
 * NOTA: Esta es una implementación básica para desarrollo.
 * En producción, debería usar:
 * - JWT tokens
 * - Backend real para validación
 * - Cookies seguras httpOnly
 * - Rate limiting
 * - etc.
 */

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin'; // TODO: Cambiar en producción
const AUTH_KEY = 'unifungi_admin_auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay sesión guardada
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    logout
  };
};
