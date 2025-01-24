'use client'
import useCheckLogin from '@/hooks/useCheckLogin';
import { Stats } from './components/sections';
import RecentPosts from './components/sections/RecentPosts';

const Admin = () => {
  useCheckLogin()
  return (
    <div>
       <title>The Ultimate Admin Panel Nexca Good for Agencies and Individuals</title>
      <Stats />
      <RecentPosts />
    </div>
  )
}

export default Admin