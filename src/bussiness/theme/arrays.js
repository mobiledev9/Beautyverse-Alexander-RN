import {Images} from './images';
import {Strings} from './strings';

export const services = [
  {id: 1, icon: Images.hair, label: Strings.hair},
  {id: 2, icon: Images.makeuppm, label: Strings.makeup},
  {id: 3, icon: Images.skinpm, label: Strings.skincare},
  {id: 4, icon: Images.nailspm, label: Strings.nails},
  {id: 5, icon: Images.hair_removepm, label: Strings.hairRemoval},
  {id: 6, icon: Images.tanningpm, label: Strings.tanning},
];

export const bookings = [
  {
    label: 'Straight Hair',
    service: 'Hair',
    time: '23 March, 2022 (from 1:00-2:00)',
    location: 'Home',
    banner: Images.banner,
    s_icon: Images.hair,
    l_icon: Images.location,
    t_icon: Images.date,
    reschedule: false,
  },
  {
    label: 'Straight Hair',
    service: 'Hair',
    time: '23 March, 2022 (from 1:00-2:00)',
    location: 'Home',
    banner: Images.banner,
    s_icon: Images.hair,
    l_icon: Images.location,
    t_icon: Images.date,
    reschedule: false,
  },
  {
    label: 'Straight Hair',
    service: 'Hair',
    time: '23 March, 2022 (from 1:00-2:00)',
    location: 'Home',
    banner: Images.banner,
    s_icon: Images.hair,
    l_icon: Images.location,
    t_icon: Images.date,
    reschedule: false,
  },
  {
    label: 'Straight Hair',
    service: 'Hair',
    time: '23 March, 2022 (from 1:00-2:00)',
    location: 'Home',
    banner: Images.banner,
    s_icon: Images.hair,
    l_icon: Images.location,
    t_icon: Images.date,
    reschedule: true,
  },
];

export const addOns = [
  {add: 'Add On 1', Duration: '10 minutes', price: '$10.00'},
  {add: 'Add On 2', Duration: '10 minutes', price: '$10.00'},
  {add: 'Add On 3', Duration: '10 minutes', price: '$10.00'},
  {add: 'Add On 4', Duration: '10 minutes', price: '$10.00'},
  {add: 'Add On 5', Duration: '10 minutes', price: '$10.00'},
];

export const timeSlot = [
  {
    id: 1,
    time: '1:00 - 2:00',
  },
  {
    id: 2,
    time: '11:00 - 12:00',
  },
  {
    id: 3,
    time: '5:00 - 9:00',
  },
  {
    id: 4,
    time: '2:00 - 5:00',
  },
  {
    id: 5,
    time: '1:00 - 2:00',
  },
  {
    id: 6,
    time: '1:00 - 2:00',
  },
  {
    id: 7,
    time: '1:00 - 2:00',
  },
  {
    id: 8,
    time: '1:00 - 2:00',
  },
  {
    id: 9,
    time: '1:00 - 2:00',
  },
  {
    id: 10,
    time: '1:00 - 2:00',
  },
  {
    id: 11,
    time: '1:00 - 2:00',
  },
  {
    id: 12,
    time: '1:00 - 2:00',
  },
];

export const selectService = [
  {service: 'Straight Hair', Duration: '45 minutes', price: '$60.00'},
  {service: 'Buzz Cut', Duration: '45 minutes', price: '$60.00'},
  {service: 'Hair Cut 3', Duration: '45 minutes', price: '$60.00'},
  {service: 'Hair Cut 4', Duration: '45 minutes', price: '$60.00'},
  {service: 'Hair Cut 5', Duration: '45 minutes', price: '$60.00'},
];

export const professionals = [
  {
    icon: Images.hairpm,
    label: Strings.hair,
    desc: Strings.professionalListed,
    leftIcon: Images.option,
  },
  {
    icon: Images.skinpm,
    label: Strings.skincare,
    desc: Strings.professionalListed,
    leftIcon: Images.option,
  },
  {
    icon: Images.nailspm,
    label: Strings.nails,
    desc: Strings.professionalListed,
    leftIcon: Images.option,
  },
];

export const hairProfessional = [
  {name: 'Johnathan Morrison', rating: '5.0', review: '(121 Reviews)'},
  {name: 'Maria Kevin', rating: '5.0', review: '(100 Reviews)'},
  {name: 'Linda Johnson', rating: '5.0', review: '(99 Reviews)'},
  {name: 'JKevin Frank', rating: '5.0', review: '(80 Reviews)'},
  {name: 'Dwayne Jackson', rating: '5.0', review: '(60 Reviews)'},
  {name: 'Tom Cameron', rating: '5.0', review: '(45 Reviews)'},
  {name: 'Conor Charlie', rating: '5.0', review: '(40 Reviews)'},
];
