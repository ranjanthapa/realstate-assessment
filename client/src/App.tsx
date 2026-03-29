import { useState } from 'react';
import FavouritesList from './components/FavouriteList';
import Header from './components/Header';
import Properties from './components/Properties';

export default function App() {
  const [activeTab, setActiveTab] = useState<'properties' | 'favourites'>('properties');

  return (
    <div className='px-20'>
      <Header />

      <div className="flex gap-4 mt-6 pb-2">
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'properties' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
            }`}
          onClick={() => setActiveTab('properties')}
        >
          Properties
        </button>

        <button
          className={`px-4 py-2 font-medium ${activeTab === 'favourites' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
            }`}
          onClick={() => setActiveTab('favourites')}
        >
          My Favourites
        </button>
      </div>


      <div className="mt-6">
        {activeTab === 'properties' && <Properties />}
        {activeTab === 'favourites' && (
          <FavouritesList />
        )}
      </div>

    </div>
  )
}
