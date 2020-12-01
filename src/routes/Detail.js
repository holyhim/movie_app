import { useState, useEffect } from "react";

export default function Detail(props) {
  const [location] = useState(props.location);

  useEffect(() => {
    const { history } = props;
    if (location.state === undefined) {
      history.push("/");
    }
  }, []);

  return location.state ? <span>{location.state.title}</span> : null;
}
