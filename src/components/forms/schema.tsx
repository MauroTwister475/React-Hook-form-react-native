import * as z from "zod";

export const schema = z.object({
  username: z.string().nonempty("Campo obrigatório").email("Email inválido"),

  password: z
    .string()
    .nonempty("Campo obrigatório")
    .min(6, "A password deve ter no mínimo 6 caracteres"),
});

export type SchemaType = z.infer<typeof schema>;
