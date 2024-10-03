'use client'
import useCheckLogin from '@/hooks/useCheckLogin';
import { Stats } from './components/sections';
import RecentPosts from './components/sections/RecentPosts';

const Admin = () => {
  useCheckLogin()
  return (
    <div>
      <Stats />
      <RecentPosts />
    </div>
  )
}

export default Admin