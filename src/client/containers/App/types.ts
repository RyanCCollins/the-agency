import App from '../';

export interface NavLink { url: string; text: string; };

export interface Props extends React.Props<typeof App> {
  children: JSX.Element;
  isMobile: boolean;
  navLinks: NavLink[];
  logoText: string;
};
