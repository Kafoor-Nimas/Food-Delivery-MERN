import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://nimas:778945679@cluster0.3asjot8.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
