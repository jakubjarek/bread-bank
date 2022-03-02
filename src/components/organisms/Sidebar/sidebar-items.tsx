import { BiCalculator } from 'react-icons/bi';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiReceiveMoney, GiClick } from 'react-icons/gi';
import { FaExchangeAlt } from 'react-icons/fa';

export const unauthItems = [
  {
    text: 'Starting Screen',
    icon: <AiOutlineHome />,
  },
  {
    text: 'See Locations',
    icon: <GoLocation />,
  },
  {
    text: 'Quick Loan',
    icon: <GiReceiveMoney />,
  },
  {
    text: 'Exchange Rates',
    icon: <FaExchangeAlt />,
  },
  {
    text: 'Currency Converter',
    icon: <BiCalculator />,
  },
  {
    text: 'Contact',
    icon: <AiOutlinePhone />,
  },
  {
    text: 'Make An Appointment',
    icon: <GiClick />,
  },
];

export const authItems = [
  {
    text: 'My Account',
    icon: '',
  },
  {
    text: 'Bank Accounts',
    icon: '',
  },
  {
    text: 'Notifications',
    icon: '',
  },
];
