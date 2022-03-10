import { BiCalculator } from 'react-icons/bi';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiReceiveMoney, GiClick } from 'react-icons/gi';
import { FaExchangeAlt } from 'react-icons/fa';

import { BsBank, BsPiggyBank, BsClockHistory } from 'react-icons/bs';
import { MdOutlineNotificationsActive } from 'react-icons/md';

export const unauthItems = [
  {
    text: 'Starting Screen',
    icon: <AiOutlineHome />,
    path: '/',
  },
  {
    text: 'See Locations',
    icon: <GoLocation />,
    path: 'locations',
  },
  {
    text: 'Quick Loan',
    icon: <GiReceiveMoney />,
    path: 'loans',
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
  {
    text: 'Make An Appointment',
    icon: <GiClick />,
    path: 'appointments',
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
  {
    text: 'Notifications',
    icon: <MdOutlineNotificationsActive />,
    path: 'notifications',
  },
];
