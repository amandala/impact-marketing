import React, { useEffect } from "react";
import ReactGA, { FieldsObject } from "react-ga";
import ReactPixel from "react-facebook-pixel";
import { RouteComponentProps } from "react-router-dom";

export const withTracker = <P extends RouteComponentProps>(
  WrappedComponent: React.ComponentType<P>,
  options: FieldsObject = {}
) => {
  ReactPixel.init("653455575240390");

  ReactGA.initialize("UA-159972276-1");

  const trackPage = (page: string) => {
    ReactGA.set({ page, ...options });
    ReactGA.pageview(page);
  };

  return (props: P) => {
    useEffect(() => {
      ReactPixel.pageView();
      trackPage(props.location.pathname);
    }, [props.location.pathname]);

    return <WrappedComponent {...props} />;
  };
};
