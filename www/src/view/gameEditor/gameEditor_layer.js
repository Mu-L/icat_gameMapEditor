// Generated by CoffeeScript 2.6.1
import Box from "../common/box";

import gEData from "./gameEditor_data";

export default function() {
  return {
    view: function() {
      return m("", {
        style: {
          overflow: "auto"
        }
      }, [
        m("",
        [
          m("",
          {
            style: {
              display: "inline-block",
              margin: "1rem",
              fontSize: "1.8rem",
              color: "#aaa"
            }
          },
          "图层1"),
          m("",
          {
            style: {
              display: "inline-block",
              margin: "1rem",
              fontSize: "1.8rem",
              color: "#aaa"
            }
          },
          "图层2")
        ]),
        m("",
        {
          style: {
            display: "flex",
            flexWrap: "wrap",
            background: "#fff"
          }
        },
        [
          gEData.divList.data.sort((x1,
          x2) => {
            return x1 - x2;
          }).map((preDiv) => {
            return m(Box,
          {
              style: {
                margin: "0.2rem",
                padding: "0.5rem 1rem",
                borderRadius: "0.2rem"
              }
            },
          preDiv.x + " " + preDiv.y);
          })
        ])
      ]);
    }
  };
};