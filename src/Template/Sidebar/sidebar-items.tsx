import { BiCalculator } from 'react-icons/bi';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { BsBank, BsPiggyBank, BsClockHistory } from 'react-icons/bs';

export const unauthItems = [
  {
    text: 'Starting Screen',
    icon: <AiOutlineHome />,
    path: '/',
  },
  {
    text: 'Exchange Rates',
    icon: <FaExchangeAlt />,
    path: 'rates',
  },
  {
    text: 'Currency Converter',
    icon: <BiCalculator />,
    path: 'converter',
  },
  {
    text: 'Contact',
    icon: <AiOutlinePhone />,
    path: 'contact',
  },
];

export const authItems = [
  {
    text: 'Accounts',
    icon: <BsBank />,
    path: 'accounts',
  },
  {
    text: 'Savings',
    icon: <BsPiggyBank />,
    path: 'savings',
  },
  {
    text: 'History',
    icon: <BsClockHistory />,
    path: 'history',
  },
];
