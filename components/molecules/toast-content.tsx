import clsx from "clsx";
import { type ReactNode, useMemo } from "react";
import type { ViewProps } from "react-native";
import { Dimensions, Pressable, View } from "react-native";
import {
  AlertCircleIcon,
  CheckCircleIcon,
  CloseIcon,
  Icon,
  MessageCircleIcon,
} from "../ui/icon";
import { Toast, ToastTitle } from "../ui/toast";

type ToastContentProps = Readonly<
  ViewProps & {
    id: string;
    action: "error" | "warning" | "success" | "info";
    title: string;
    description?: string;
    onClose?: () => void;
  }
>;

const SCREEN_WIDTH = Dimensions.get("window").width;

export const ToastContent = (props: ToastContentProps): ReactNode => {
  const { id, action, title, description, style, onClose, children, ...rest } =
    props;

  const toastIcon = useMemo(() => {
    const icons = {
      error: {
        icon: AlertCircleIcon,
        className: "fill-error-400 text-white",
      },
      warning: {
        icon: AlertCircleIcon,
        className: "fill-warning-400 text-white",
      },
      success: {
        icon: CheckCircleIcon,
        className: "fill-success-400 text-white",
      },
      info: { icon: MessageCircleIcon, className: "fill-info-400 text-white" },
    };

    return icons[action];
  }, [action]);

  return (
    <Toast
      className="flex-row items-start gap-4"
      style={[{ width: SCREEN_WIDTH - 32 }, style]}
      nativeID={"toast-" + id}
      action={action}
      {...rest}
    >
      <Icon
        as={toastIcon.icon}
        size="xl"
        className={clsx("text-white", toastIcon.className)}
      />

      <View className="flex-1 gap-1">
        <ToastTitle>{title}</ToastTitle>

        {children}
      </View>

      <Pressable onPress={onClose}>
        <Icon as={CloseIcon} size="sm" className="text-typography-50" />
      </Pressable>
    </Toast>
  );
};
