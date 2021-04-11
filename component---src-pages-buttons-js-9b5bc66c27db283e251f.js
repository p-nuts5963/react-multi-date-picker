(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[316],{4007:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(7294),a=t(316),l=t(7821);function c(e,n,t){return[{title:"Disabling Navigate Buttons",description:"disable_buttons",code:"<Calendar \n  buttons={false} \n"+("en"===n?"/>":'  calendar="persian"\n  locale="fa"\n/>')+" ",jsx:r.createElement(l.f,Object.assign({buttons:!1},t))},{title:"Custom (function)",description:"custom_buttons",code:'<Calendar\n  renderButton={(direction, handleClick) => (\n    <button onClick={handleClick}>\n      {direction === "right" ? ">" : "<"}\n    </button>\n  )}\n'+("en"===n?"/>":'  calendar="persian"\n  locale="fa"\n/>')+" ",jsx:r.createElement(l.f,Object.assign({renderButton:function(e,n){return r.createElement("button",{onClick:n},"right"===e?">":"<")}},t))},{title:"Custom (component)",description:r.createElement("div",null,r.createElement("p",null,e("disabled_buttons")),r.createElement("p",null,e("style.css"),":"),r.createElement("pre",null,r.createElement("code",{className:"language-css"},".cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-default {\n  cursor: default;\n}")),r.createElement("p",null,e("code"),":")),code:'import { Calendar } from "react-multi-date-picker";\n\nfunction CustomButton({ direction, handleClick, disabled }) {\n  return (\n    <i\n      onClick={handleClick}\n      style={{\n        padding: "0 10px",\n        fontWeight: "bold",\n        color: disabled ? "gray" : "blue"\n      }}\n      className={disabled ? "cursor-default" : "cursor-pointer"}\n    >\n      {direction === "right" ? ">" : "<"}\n    </i>\n  )\n}\n\nexport default function Example(){\n  return (\n    <Calendar\n      minDate={new Date()} \n      renderButton={<CustomButton />} \n    '+("en"===n?"/>":'  calendar="persian"\n      locale="fa"\n    />')+"\n  )\n}",jsx:r.createElement(l.f,Object.assign({minDate:new Date,renderButton:r.createElement(i,null)},t))}]}function i(e){var n=e.direction,t=e.handleClick,a=e.disabled;return r.createElement("i",{onClick:t,style:{padding:"0 10px",fontWeight:"bold",color:a?"gray":"blue"},className:a?"cursor-default":"cursor-pointer"},"right"===n?">":"<")}function o(e){var n=e.pageContext.language||"en";return r.createElement(a.Z,{language:n,doc:c})}}}]);
//# sourceMappingURL=component---src-pages-buttons-js-9b5bc66c27db283e251f.js.map