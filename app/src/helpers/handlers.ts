import { toast } from "sonner";


export function errorHandler (err: any) {
    toast.error(err.message)
};
