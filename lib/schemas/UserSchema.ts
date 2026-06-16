import z from "zod";

const UserSchema = z.object({
  name: z.string("Required"),
  username: z
    .string("Required")
    .min(6, { message: "Must be at least 6 characters" }),
  email: z.string("Required").email({ message: "Invalid email address" }),
  image: z.string("Required").url({ message: "Invalid URL" }),
});

export default UserSchema;
