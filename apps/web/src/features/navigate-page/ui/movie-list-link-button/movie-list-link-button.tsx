import { clsx } from "clsx";
import Link from "next/link";
import { ForwardedRef, forwardRef } from "react";

import { MovieListLinkButtonProps } from "@/features/navigate-page";
import { linkButton } from "@/features/navigate-page";
import { Text } from "@/shared/ui/text";

export const MovieListLinkButton = forwardRef(
  (props: MovieListLinkButtonProps, forwardedRef: ForwardedRef<HTMLAnchorElement>) => {
    const { href, className, ...restProps } = props;
    return (
      <Link ref={forwardedRef} {...restProps} className={clsx(className, linkButton)} href={`/movie-list/${href}`}>
        <Text size="md">더보기</Text>
      </Link>
    );
  },
);

MovieListLinkButton.displayName = "MovieListLinkButton";
