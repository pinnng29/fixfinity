import { FaHammer } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbHomeShield } from 'react-icons/tb';

export const serviceItem = [
  {
    title: 'Fixing ',
    label: <FaHammer className="w-[75px] h-[75px]" />,
  },
  {
    title: 'Build ',
    label: <TbHomeShield className="w-[75px] h-[75px]" />,
  },
  {
    title: 'Other',
    label: <GiHamburgerMenu className="w-[75px] h-[75px]" />,
  },
];
