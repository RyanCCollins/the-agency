import {
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';

import contactInputType from '../../types/contact-input';
import ContactModel from '../../../db/models/contact';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(contactInputType),
    },
  },
  async resolve(root, params, __) { // eslint-disable-line
    const model = new ContactModel(params.data);
    const newContact = await model.save();
    if (!newContact) {
      throw new Error('Error adding contact');
    }
    return true;
  },
};
