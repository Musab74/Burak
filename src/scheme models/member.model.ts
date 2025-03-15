// all models are classes "modellar";
import mongoose, {Schema} from 'mongoose';
import { memberStatus, memberType } from '../libs/enums/member.enum';

//schema first % code first
const memberSchema = new Schema({
    memberType: {
        type: String,
        enum: memberType,
        default: memberType.USER

    },

    memberStatus: {
        type: String,
        enum: memberStatus,
        default:memberStatus.ACTIVE

    },

    memberNick: {
        type: String,
        index: {unique: true, sparse: true},
        required: true,
    },

    memberPhone: {
        type: String,
        index: {unique: true, sparse: true},
        required: true,
    },

    memberPassword: {
        type: String,
        select:false,
        required: true,
    },
    memberAdress: {
        type:String,
    },
    memberDescription: {
        type: String,
    },
    memberImage: {
        type: String,
    },
    memberPoints: {
        type: Number,
        default: 0,
    },

}, {timestamps: true} // UpdatedAd 
);
export default mongoose.model("member",memberSchema);
