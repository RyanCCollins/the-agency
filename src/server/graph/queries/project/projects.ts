import {
  GraphQLList,
} from 'graphql';

import types from '../../types';
import ProjectModel from '../../../db/models/project';

export default {
  type: new GraphQLList(types.projectType),
  args: {},
  resolve() {
    return ProjectModel
      .find()
      .exec();
  },
};
