import { Schema, model, Document } from 'mongoose';

interface ISchema extends Document {
  fullName: string;
  email: string;
  password:String;
}

const NoteSchema = new Schema<ISchema>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required:true}
});

export const User = model<ISchema>('Note', NoteSchema);