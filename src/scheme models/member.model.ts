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
})
