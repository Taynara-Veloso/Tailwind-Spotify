import { Home as HomeIcons, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcons /> Home
            </a>

            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search /> Search
            </a>

            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library /> Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 flex flex-col p-1'>
              PlayList: Studio Glibli
              <span className="text-xs text-zinc-400">Taynara_Veloso</span>
            </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 flex flex-col p-1'>
              PlayList: Concentration Lo-Fi
              <span className="text-xs text-zinc-400">Taynara_Veloso</span>
            </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 flex flex-col p-1'>
              PlayList: Soul music
              <span className="text-xs text-zinc-400">Taynara_Veloso</span>
            </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 flex flex-col p-1'>
              PlayList: Chá de Boldo
              <span className="text-xs text-zinc-400">Taynara_Veloso</span>
            </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 flex flex-col p-1'>
              PlayList: spring gang
              <span className="text-xs text-zinc-400">Taynara_Veloso</span>
            </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 flex flex-col p-1'>
              PlayList: AKMU
              <span className="text-xs text-zinc-400">Taynara_Veloso</span>
            </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 flex flex-col p-1'>
              PlayList: D.O.
              <span className="text-xs text-zinc-400">Taynara_Veloso</span>
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-y-scroll">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <input type="search" id="search" className="relative block w-full p-4 ps-10 text-sm text-gray-100 border border-gray-900 rounded-lg bg-gray-950 placeholder-gray-300 text-white" placeholder="Search" required />
          <button 
            type="submit" 
            className="absolute text-white end-11 top-8 bg-pink-700 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-500 font-medium rounded-lg text-sm px-4 py-2">
            Search
          </button>
          
          <div className="flex items-center justify-end gap-3 mt-8 pr-1">
            <button type='button' title='button' className="rounded-full bg-black/20 p-1">
              <ChevronLeft />
            </button>
            <button type='button' title='button' className="rounded-full bg-black/20 p-1">
              <ChevronRight />
            </button>
          </div>
          
          <h1 className="font-semibold text-3xl">Good Afternoon</h1>
          
          <div className="grid grid-cols-3 gap-3 mt-4">
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/15 transition-colors">
              <Image 
                src="/D.O.jpeg"
                width={104}
                height={104} 
                alt="Foto do album D.O"
              />
              <strong>BLOSSOM - Popcorn</strong>
            
              <button 
                type='button' 
                title='button' 
                className="flex items-center p-3 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/15 transition-colors">
              <Image 
                src="/AKMU.jpg"
                width={104}
                height={104} 
                alt="Foto do album AKMU"
              />
              <strong>Love Lee - 후라이의 꿈</strong>
            
              <button 
                type='button' 
                title='button' 
                className="flex items-center p-3 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/15 transition-colors">
              <Image 
                src="/Maliya.jpg"
                width={104}
                height={104} 
                alt="Foto do album da Maliya"
              />
              <strong>faveur - 7 Signs</strong>
            
              <button 
                type='button' 
                title='button' 
                className="flex items-center p-3 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/15 transition-colors">
              <Image 
                src="/seori.jpg"
                width={104}
                height={104} 
                alt="Foto do album da Seori"
              />
              <strong>SEORI - Dive with you</strong>
            
              <button 
                type='button' 
                title='button' 
                className="flex items-center p-3 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/15 transition-colors">
              <Image 
                src="/Lo-Fi.jpg"
                width={104}
                height={104} 
                alt="Foto do album Lo-Fi"
              />
              <strong>Concentration Study - Lo Fi</strong>
            
              <button 
                type='button' 
                title='button' 
                className="flex items-center p-3 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/15 transition-colors">
              <Image 
                src="/betterPlace.jpg"
                width={104}
                height={104} 
                alt="Foto do album betterPlace"
              />
              <strong>Spring Gang - betterPlace</strong>
            
              <button 
                type='button' 
                title='button' 
                className="flex items-center p-3 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
