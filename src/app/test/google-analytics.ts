import ReactGA from "react-ga4";
import { InitOptions } from "react-ga4/types/ga4";

const initializeGA = () => {
  // Replace with your Measurement ID

  ReactGA.initialize("GTM-5NB4QGQQ");

  // console.log('GA INITIALIZED');
};

const trackGAEvent = (category: any, action: any, label: any) => {
  console.log("GA event:", category, ":", action, ":", label);
  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default initializeGA;
export { initializeGA, trackGAEvent };
