import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import types from '../../types';
import ClientModel from '../../../db/models/client';

export default {
  type: types.clientType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(_, args, __) {
    return ClientModel
      .findById(args.id)
      .exec();
  },
};
