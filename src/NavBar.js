const NavBar = () => {
  return (
    <nav className='bg-gray-500 content-center'>
      <div className='container mx-auto px-4 py-4 flex justify-between '>
        <h1 className='text-3xl text-white font-bold py-1'>Demo APP</h1>
        <img
          src='https://pacmann.io/wp-content/themes/pacmann-custom/img/layout/small-logo.png'
          alt='pacman logo'
          className='w-40 object-scale-down'
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          alt='foto profile'
          className='w-14 object-scale-down'
        />
      </div>
    </nav>
  );
};

export default NavBar;
