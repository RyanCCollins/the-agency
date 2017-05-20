import {
  GraphQLList,
} from 'graphql';

import types from '../../types';
import ClientModel from '../../../db/models/client';

export default {
  type: new GraphQLList(types.clientType),
  args: {},
  resolve() {
    return ClientModel
      .find()
      .exec();
  },
};
