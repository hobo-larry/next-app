import { z } from "zod"

const schema = z.object({
    name: z.string().min(3),
    // email: z.string().email(),
    price: z.number().min(1).max(100)
})

export default schema