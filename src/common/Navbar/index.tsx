import { Crumbs } from 'kodim-cms/esm/content/resource';
import Brand from '../Brand';
import Breadcrumbs from '../Breadcrumbs';
import NavbarUser from './NavbarUser';
import './styles.scss';

interface Props {
  crumbs?: Crumbs,
  showBrand: boolean,
}

const Navbar = ({ crumbs, showBrand }: Props) => {
  return (
    <div className="container navbar">
      <div className="navbar-menu">
        {showBrand
          ? <Brand size="small" />
          : <div />}
        <NavbarUser />
      </div>

      {crumbs !== undefined && <Breadcrumbs steps={crumbs} />}
    </div>
  );
};

export default Navbar;
