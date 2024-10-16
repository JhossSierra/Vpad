import { ReactNode } from "react";

type PropsWithChildren<P = unknown> = P & { children?: ReactNode | ReactNode[] | undefined };

export type Component<P = {}> = React.FC<PropsWithChildren<P>>;

export type UserProfile = {
    token: String,
    username: String,
    nickname?: String,
    email: String,
    profilePhotoUrl: String,
    about?: String,
    contact?: String,
    admin: Boolean
  }