import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div className='mb-12'>
            <SectionTitle
            heading="From our Menu"
            subHeading="Popular items"
            />
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className='btn btn-outline border-0 justify-center border-b-4 mt-4'>view Full Menu</button>
        </div>
    );
};

export default PopularMenu;