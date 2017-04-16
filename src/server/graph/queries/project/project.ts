import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import types from '../../types';
import ProjectModel from '../../../db/models/project';

export default {
  type: types.projectType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(_, args, __) {
    return ProjectModel
      .findById(args.id)
      .populate('comments')
      .exec();
  },
};
