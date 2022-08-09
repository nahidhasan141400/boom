import mongoose from 'mongoose'

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    /* The name of user */

    type: String,
    required: [true, 'Please provide a name for user.'],
    maxlength: [40, 'Name cannot be more than 40 characters'],
  },
  email: {
    /* The user email */

    type: String,
  },
  phone: {
    /* The phone of user */

    type: String, 
    required: [true, 'Please provide phone number of user'],
    maxlength: [16, 'Phone number cannot be more than 16 characters'],
    unique:true,
  },
  
  address: {
    /* The address of user */

    type: String,
    required: [true, 'Please provide address of user']
  },

  password: {
    /* The password of user */

    type: String,
    required: [true, 'Please provide password of user']
  },
  image: {
    /* Url to user image */

    required: [true, 'Please provide an image url for user.'],
    type: String,
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
