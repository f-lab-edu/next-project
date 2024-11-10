import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

import { makePlugOf, OutletCompProps, withOutlet } from "@/shared/hoc";
import { Col } from "@/shared/ui/col";
import { Container } from "@/shared/ui/container";
import { Row } from "@/shared/ui/row";

const outletNames = ["filter", "content"] as const;

const MovieListWithFilterRoot = forwardRef(
  (props: OutletCompProps<typeof outletNames>, forwardedRef: ForwardedRef<HTMLElement>) => {
    const { outlets, className } = props;
    return (
      <article className={clsx(className)} ref={forwardedRef}>
        <Container>
          <Row>
            <Col lg={3} md={4} sm={2}>
              {outlets.filter}
            </Col>

            <Col lg={9} md={8} sm={2}>
              {outlets.content}
            </Col>
          </Row>
        </Container>
      </article>
    );
  },
);

MovieListWithFilterRoot.displayName = "MovieListWithFilter.Outlet";

const MovieListWithFilterOutlet = withOutlet(outletNames, MovieListWithFilterRoot);

export const MovieListWithFilter = Object.assign(MovieListWithFilterOutlet, {
  Filter: makePlugOf("filter"),
  Content: makePlugOf("content"),
});
