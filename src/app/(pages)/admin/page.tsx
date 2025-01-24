'use client'
import useCheckLogin from '@/hooks/useCheckLogin';
import { Stats } from './components/sections';

const Admin = () => {
  useCheckLogin()
  return (
    <div>
       <title>The Ultimate Admin Panel Nexca Good for Agencies and Individuals</title>
      <Stats />
    </div>
  )
}

export default Admin