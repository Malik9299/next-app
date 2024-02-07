import { ReactNode, SVGProps, FC } from "react";

export type { MenuProps } from "antd/lib/menu/menu";

export type authSession = {
  user?:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
        first_name?: string | null | undefined; // Add this line
      }
    | null
    | undefined;
};

export type SVGIconProps = SVGProps<SVGSVGElement>;
