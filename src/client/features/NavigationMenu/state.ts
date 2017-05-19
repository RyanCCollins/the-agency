export interface NavLink {
  path: string;
  label: string;
}

export interface State {
  isVisible: boolean;
  navLinks: NavLink[];
}

export const initialState: State = {
  isVisible: false,
  navLinks: [
    {
      path: '/case-studies',
      label: 'Case Studies',
    },
    {
      path: '/clients',
      label: 'Clients',
    },
    {
      path: '/contact',
      label: 'Contact',
    },
  ],
};

export default initialState;
