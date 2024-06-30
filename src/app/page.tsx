import { Home as HomeIcons, Search, Library } from 'lucide-react'

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
        <main className="flex-1 p-6">
          main
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
