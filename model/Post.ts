import mongoose, {Schema} from "mongoose";

const postSchema = new Schema (
    {
        user : String,
        post : String
    },
    {
        timestamps : true
    }
)

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)


export default Post