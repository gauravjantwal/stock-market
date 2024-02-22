import { toast } from 'react-toastify';

export function toastSuccess(message)
{
    toast.success(message);
}

export function toastError(message)
{
    toast.error(message);
}