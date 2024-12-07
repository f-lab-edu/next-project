import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type LinkPropsWithoutChildren = Omit<ComponentPropsWithoutRef<typeof Link>, "children">;

export interface MovieListLinkButtonProps extends LinkPropsWithoutChildren {}
