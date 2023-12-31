import { Logout, ModeToggle } from '../..'

export const Header = ({ title }:{title: string}) => {
  return (
    <>
      <Logout />
      <ModeToggle />
      <div className='header-container'>
        <img
          src='/storial-logo.png'
          alt='Storial Logo'
          className='header-logo'
        />
        <h1 className='header-title'>{title}</h1>
      </div>
    </>
  )
}