import { ErrorType } from './types';

export interface Project {
  title: string;
  image: string;
}

export interface Data {
  items: Project[],
}

export interface State {
  isLoading: boolean;
  error?: ErrorType;
  data?: Data;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  data: {
    items: [
      {
        title: 'HPE Brand Central',
        image: 'https://github.com/RyanCCollins/cdn/blob/master/brand-central/bcmain.png?raw=true',
      },
      {
        title: 'Grommet CMS',
        image: 'https://github.com/RyanCCollins/cdn/blob/master/cms/main.png?raw=true',
      },
      {
        title: 'HPE Datacenter Care',
        image: 'https://github.com/RyanCCollins/cdn/blob/master/datacenter-care/main.png?raw=true',
      },
      {
        title: 'Astra Finance',
        image: 'https://github.com/RyanCCollins/cdn/blob/master/astra.jpg?raw=true',
      },
      {
        title: 'Udacity Mentor Calendar',
        image: 'https://github.com/RyanCCollins/cdn/blob/master/'
          + 'portfolio-image-gallery-images/mentor-calendar/main-mockup.jpg?raw=true',
      },
    ],
  },
};

export default initialState;
