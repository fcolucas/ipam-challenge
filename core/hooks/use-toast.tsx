import { ToastContent } from "@/components/molecules/toast-content";
import { ToastPlacement } from "@gluestack-ui/toast/lib/types";
import { useId } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useToast as useUIToast } from "@/components/ui/toast";

type ToastProps = {
  show: (content: {
    action: "error" | "warning" | "success" | "info";
    title: string;
    placement?: ToastPlacement;
    duration?: number;
    description?: string;
  }) => void;
};

export const useToast = (): ToastProps => {
  const id = useId();
  const toast = useUIToast();

  const show = ({
    action,
    title,
    description = "",
    placement = "bottom",
    duration = 3000,
  }: {
    action: "error" | "warning" | "success" | "info";
    placement?: ToastPlacement;
    duration?: number;
    title: string;
    description?: string;
  }): void => {
    if (!toast.isActive(String(id))) {
      toast.show({
        id,
        placement,
        duration,
        render: ({ id }) => (
          <ToastContent
            id={id}
            action={action}
            title={title}
            description={description}
            onClose={() => toast.close(id)}
          />
        ),
      });
    }
  };

  return { show };
};
