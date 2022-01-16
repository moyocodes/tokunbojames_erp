import { ReactChild, ReactFragment, ReactPortal, ReactNode } from "react";
import { toast, ToastContentProps } from "react-toastify";

export const errorMessage = (err: boolean | ReactChild | ReactFragment | ReactPortal | ((props: ToastContentProps<{}>) => ReactNode) | null | undefined) =>
  toast.error(err, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const successMessage = (msg: boolean | ReactChild | ReactFragment | ReactPortal | ((props: ToastContentProps<{}>) => ReactNode) | null | undefined) =>
  toast.success(msg, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
