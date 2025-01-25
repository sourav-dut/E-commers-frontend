import mongoose, {Schema, model} from 'mongoose';

const categorySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    // description: {
    //     type: String
    // },
    // subCategory_id: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "subcategories"
    // }],
    slug: {
        type: String,
        lowercase: true
    }
}, {timestamps: true});

export const categoryModel = model("categories", categorySchema);