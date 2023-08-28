import Events from "./Events";
import Header from "./Header";
import Priests from "./Priests";
import Quotes from "./Quotes";
import Slider from "./Slider";
import Welcome from "./Welcome";

export default function Page() {
  return (
    <>
      <Header />
      <Slider />
      <Welcome />
      <Priests />
      <Quotes />
      <Events />
    </>
  );
}
