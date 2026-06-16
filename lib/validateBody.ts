import { ZodError, ZodSchema } from "zod";

const validateBody = (
  body: unknown,
  schema: ZodSchema,
  partial: boolean = false,
) => {
  const validatedData = partial
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (schema as any).partial().safeParse(body)
    : schema.safeParse(body);

  if (!validatedData.success) {
    throw new ZodError(validatedData.error.issues);
  }

  return validatedData;
};

export default validateBody;
