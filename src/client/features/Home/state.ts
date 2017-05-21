import { ErrorType } from './types';

export interface Button {
  label: string;
  path: string;
}

export interface Section {
  text: string;
  color: string;
  button?: Button;
  isVisible: boolean;
}

export interface State {
  isLoading: boolean;
  error?: ErrorType;
  data?: string;
  sections: Section[];
}

export const initialState: State = {
  isLoading: false,
  error: null,
  data: null,
  sections: [
    {
      text: 'We are a dedicated digital agency',
      color: 'secondary',
      isVisible: false,
    },
    {
      text: 'We build scalable solutions for the web and mobile platforms',
      color: 'secondary',
      button: {
        path: '/case-studies',
        label: 'See Case Studies',
      },
      isVisible: false,
    },
    {
      text: 'Need our help?',
      color: 'primary',
      button: {
        path: '/contact',
        label: 'Get in touch',
      },
      isVisible: false,
    },
  ],
};

export default initialState;
