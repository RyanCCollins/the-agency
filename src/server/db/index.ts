import mongoose from 'mongoose';
import path from 'path';
import ProjectModel from './models/project';

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
        Astra is a game-changing personal finance app that uses cutting-edge machine learning 
        techniques to bring intelligence to your financial life. As an engineer on the first 
        release of the debut app, it was my role to build a highly interactive mobile-first user 
        interface using web technologies, including React and D3.
        # Milestones
        - Wrote well-tested code Functional / Statically Typed and Object-Oriented JavaScript.
        - Integrated the Front End with API microservices, including Machine Learning services.
        - Built a dynamic mobile-first user interface using accessibility and UX best-practices.
        - Implemented UX enhancements, including animation, accessibility and design.
        - Optimized performance at every stage of the development process.
        - Organized a very large codebase for maximum scalability following the feature-first modularization approach.
      `,
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

function createSeedProjects() {
  return new Promise((res, rej) => {
    ProjectModel.find().exec((err, docs) => {
      if (docs.length === 0) {
        ProjectModel.create(
          seedProjects(),
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
