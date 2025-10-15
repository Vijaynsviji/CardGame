

function AppLogo ({SideBarAppLogo}){
    return (
                <div className='flex flex-row items-center gap-[20px]'>
                  {SideBarAppLogo}
                  <p className='text-(--Text-color) text-3xl'>AcePoints</p>
                </div>
    );
}
export default AppLogo;