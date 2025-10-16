

export const SideBarContentList = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--Icon-color)" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>, Name: 'Home',
        ID: 1,
        path: '/'
    },
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--Icon-color)" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>,
        Name: "New Game",
        ID: 2,
         path: '/newgame'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--Icon-color)" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
        </svg>,
        Name: "Leaderboard",
        ID: 3,
         path: '/leaderboard'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--Icon-color)" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>,
        Name: 'History',
        ID: 4,
         path: '/history'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--Icon-color)" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>,
        Name: 'Profile',
        ID: 5,
        path: '/profile'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--Icon-color)" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>,
        Name: 'About',
        ID: 6,
        path: '/about'
    }
]

export const MenuIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e5e5e5" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

export const CrossMark = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e5e5e5" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


export const TableIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8a94a8" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
</svg>




export const SideBarAppLogo = <svg className="w-20 h-20 hidden sm:flex" fill="var(--Icon-color)" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>9GAG</title><path d="m17.279 21.008 5.193-2.995V5.992l-5.193-2.996C14.423 1.348 12.048 0 12 0c-.048 0-2.423 1.348-5.279 2.996L1.528 5.992v2.354l5.193 2.996c2.856 1.648 5.232 2.996 5.28 2.996.048 0 1.469-.797 3.157-1.772a229.633 229.633 0 0 1 3.097-1.772c.016 0 .027 1.096.027 2.437l-.002 2.436-3.076 1.772c-1.692.975-3.115 1.783-3.163 1.795-.048.013-1.471-.776-3.162-1.752-1.69-.976-3.113-1.775-3.161-1.775-.155 0-4.036 2.274-4.011 2.35.031.093 10.136 5.937 10.276 5.943.057.002 2.44-1.344 5.296-2.992ZM9.847 8.391c-1.118-.65-2.033-1.2-2.033-1.222 0-.071 4.06-2.376 4.186-2.376.125 0 4.186 2.305 4.186 2.376 0 .063-4.047 2.375-4.184 2.39-.068.007-1.037-.519-2.155-1.168Z"/></svg>