import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your JS here:

const customJs = `
  (function() {
      var a = document.createElement("script"),
          t = Date.now() - Date.now() % 432e5;
      a.async = true;
      a.src = "https://form.boardcrm.io/widgets/form-boardcrm.js?t=" + t;
      document.body.appendChild(a);
  })()

`;

const EmbedJS = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		const script = document.createElement("script");
		script.innerHTML = customJs;
		ref.current.appendChild(script);
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedJS)({
	name: "EmbedJS",
	normalize: true,
	mixins: true
});