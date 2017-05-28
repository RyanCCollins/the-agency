/* tslint:disable */
import mongoose from 'mongoose';
import path from 'path';
import Models from './models';

function seedClients() {
  return [
    {
      name: 'Hewlett Packard Enterprise',
      image: 'https://github.com/RyanCCollins/cdn/blob/master/clients/hpe.png?raw=true',
      url: 'https://www.hpe.com',
    },
    {
      name: 'Grommet',
      image: 'https://github.com/RyanCCollins/cdn/blob/master/clients/grommet.png?raw=true',
      url: 'https://grommet.github.io/',
    },
    {
      name: 'Astra Finance',
      image: 'https://github.com/RyanCCollins/cdn/blob/master/clients/astra-finance.png?raw=true',
      url: 'https://astra.finance/',
    },
    {
      name: 'Udacity Blitz',
      image: 'https://github.com/RyanCCollins/cdn/blob/master/clients/udacity-blitz.png?raw=true',
      url: 'https://blitz.com/',
    },
  ];
}

function seedProjects() {
  return [
    {
      title: 'HPE Brand Central',
      image: 'https://github.com/RyanCCollins/cdn/blob/master/brand-central/bcmockup.jpg?raw=true',
      content: '# About \n HPE Brand Central is a cornerstone web application for HPE employees ' +
        'and clients.  We were brought onto this project to deliver a modern progressive web ' +
        'application that could be fully managed by the client.',
    },
    {
      title: 'Grommet CMS',
      image: 'https://github.com/RyanCCollins/cdn/blob/master/cms/bccmsmockup.jpg?raw=true',
      content: '# About \n As part of our work on the HPE Brand Central site, we '
        + 'sought out to build a content management system that was as '
        + 'modern and progressive as the site we built from it.',
    },
    {
      title: 'HPE Datacenter Care',
      image: 'https://github.com/RyanCCollins/cdn/blob/master/datacenter-care/datacentercaremockup.jpg?raw=true',
      content: '# About \n Coming soon.',
    },
    {
      title: 'Astra Finance',
      image: 'https://github.com/RyanCCollins/cdn/blob/master/astra.jpg?raw=true',
      content: `# About 

Astra is a game-changing personal finance app that uses cutting-edge deep learning algorithms to bring intelligence to your financial life. As a core part of the engineering team, we worked tirelessly to make this app truly special.  

## Features

### Intelligent
Astra is constantly learning from you – we create a customized deep learning model to tailor Astra’s smarts just for you.

### Holistic
See the big picture by connecting all of your various accounts across multiple institutions all in one place.

### Secure
Astra is built using state-of-the-art security practices. Your personal data is fully encrypted and securely stored.

### Projections
See what next month looks like. And sleep better at night knowing how well you’re improving your financial health.

### Trends
Follow the money – and find out how much you spent on coffee last month (if you’re up for facing the truth).

### Goals
Whether it’s a rainy day fund or a vacation, set your financial goals and easily plan how you’re going to fund them.

## Tech Stack

### Front End
Astra provided us with a unique opportunity to stretch the limits of the web platform.  We built this mobile-first app using only web technologies.  ES6 JavaScript, React and D3 were some of the core technologies used.

### Back End
The back end included a number of different services, all built using Python.  The core server application was built on top of Flask.

### Machine Learning
The bread and butter of Astra is Deep Learning.  A number of state-of-the-art machine learning techniques were used. You can read about the deep learning technology used in [this medium article](https://medium.com/udacity/launching-astra-fab2b76b6420) posted by Gil Akos, Astra's founder.

## Milestones
- Utilized the feature-first architecture
- Built dynamic data visualizations
- Built a dynamic mobile-first user interface using accessibility and UX best-practices.
- Optimized performance at every stage of the development process.
- Wrote well-tested code Functional / Statically Typed and Object-Oriented JavaScript.`,
    },
    {
      title: 'Udacity Mentor Calendar',
      image: 'https://github.com/RyanCCollins/cdn/blob/master/'
        + 'portfolio-image-gallery-images/mentor-calendar/main-mockup.jpg?raw=true',
      content: `# About
        An application that will be used by hundreds of thousands of students 
        and mentors from around the world.  Much like calendly, this app 
        simplifies the process of scheduling mentoring sessions.  Built 
        as my time as a contractor with the Udacity Blitz platform.
        # Milestones
        - Built a dynamic web application using the most advanced technologies available.
        - Incorporated complex business logic for the administrative dashboard and implemented
        multi-tenant features.
        - Wrote hundreds of unit-tests, boasting near 100% test coverage.
        - Wrote cutting edge JavaScript code, following the feature-first 
        architectural pattern and implementing a style-guide.
      `,
    },
  ];
}

const seeds = {
  ClientModel: seedClients,
  ProjectModel: seedProjects,
};

function createSeedProjects() {
  return new Promise((res, rej) => {
    Object.keys(Models).forEach((key) => {
      Models[key].find().exec((err, docs) => {
        if (docs.length === 0) {
          Models[key].create(
            seeds[key](),
            (err, data) => {
              if (err) {
                rej(err);
              }
              res(data);
            },
          );
        }
      });
    });
  });
}

function createSeedData() {
  return new Promise((res, rej) => {
    createSeedProjects().then(() => {
      res();
    }).catch((err) => rej(err));
  });
}

const env = require('node-env-file');

env(path.join(process.cwd(), '.env'));

const dbUri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;

mongoose.connect(dbUri);
mongoose.connection.on('connected', () => {
  console.info(`Mongoose connection open to ${dbUri}`);
  createSeedData();
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.info('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});
