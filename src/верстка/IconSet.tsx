import type { ComponentProps } from "react";
import {
  ArrowUp as LucideArrowUp,
  CreditCard,
  Clock,
  Hourglass,
  MapPin,
  Package,
  Phone,
  Truck,
} from "lucide-react";

export type IconProps = ComponentProps<"svg"> & {
  className?: string;
};

export const ArrowUpIcon = ({ className, ...props }: IconProps) => (
  <LucideArrowUp className={className} {...props} />
);

export const BankCardIcon = ({ className, ...props }: IconProps) => (
  <CreditCard className={className} {...props} />
);

export const GroupIcon = ({ className, ...props }: IconProps) => (
  <Clock className={className} {...props} />
);

export const HourglassNullIcon = ({ className, ...props }: IconProps) => (
  <Hourglass className={className} {...props} />
);

export const Icon1Icon = ({ className, ...props }: IconProps) => (
  <Truck className={className} {...props} />
);

export const LocalTwoIcon = ({ className, ...props }: IconProps) => (
  <MapPin className={className} {...props} />
);

export const PhoneCallIcon = ({ className, ...props }: IconProps) => (
  <Phone className={className} {...props} />
);

export const AdProductIcon = ({ className, ...props }: IconProps) => (
  <Package className={className} {...props} />
);
