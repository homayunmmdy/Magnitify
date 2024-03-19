'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
const Admin = () => {
  const router = useRouter()
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isLoggedIn");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/')
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Admin
