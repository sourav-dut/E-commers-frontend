import mongoose, {Schema, model} from 'mongoose';

const subCategorySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    // description: {
    //     type: String
    // },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    childCategory_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "childcategories"
    }],
    slug: {
        type: String,
        lowercase: true
    }
}, {timestamps: true});

export const subCategoryModel = model("subcategories", subCategorySchema);