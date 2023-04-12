import cs from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '~/components/logo';

const checkScroll = (): boolean => {
  const getCoordinateY: number = window.scrollY;
  if (getCoordinateY >= 100) return true;
  return false;
};

function Header() {
  const [isScroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScroll(checkScroll);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={cs('fixed left-0 right-0 top-0 z-10', 'bg-secondary duration-100', {
        'shadow-md': isScroll,
      })}
    >
      <div className="lib-grid l-wide">
        <div className={cs('lib-row flex-ver', 'h-80 justify-between')}>
          <section className="left">
            <Link to="/">
              <Logo size={60} />
            </Link>
          </section>
          <section className="flex text-15">
            <Link to="/auth/login" className={cs('flex-center w-80 rounded-5 p-10')}>
              Login
            </Link>
            <Link
              to="/auth/register"
              className={cs(
                'flex-center w-80 rounded-5 p-10',
                'bg-primary text-secondary hover:bg-opacity-80',
                'duration-100'
              )}
            >
              Register
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Header;
