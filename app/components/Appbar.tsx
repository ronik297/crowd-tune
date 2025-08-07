'use client';
import { Menu, Music, X } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react'

const Appbar = () => {
  const session = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex justify-between'>
      <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CrowdTune</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
              {session.data?.user ? <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all" onClick={() => signOut()}>
                    Logout
                </button>
                  : <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all" onClick={() => signIn()}>
                    Sign In
                </button>}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 p-6 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors">How it Works</a>
              
              {session.data?.user ? <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all" onClick={() => signOut()}>
                    Logout
                </button>
                  : <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all" onClick={() => signIn()}>
                    Sign In
                </button>}
            </div>
          )}
          
        </nav>
      
      
    </div>
  )
}

export default Appbar