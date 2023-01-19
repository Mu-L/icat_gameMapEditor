// Generated by CoffeeScript 2.6.1
var barWidth, calcBarWidth, presentHover, urlList;

import gEData from "./gameEditor_data";

import Box from "../common/box";

import Tag from "../common/tag";

import Notice from "../common/notice";

barWidth = 0;

calcBarWidth = function(dom) {
  return barWidth = getComputedStyle(dom).width.replace("px", "") * 1;
};

presentHover = "";

urlList = [
  {
    name: "操作(A)",
    url: "#",
    icon: "arrow",
    sizeRate: 1,
    power: 1
  },
  {
    name: "绘图(P)",
    url: "#",
    icon: "pen",
    sizeRate: 1,
    power: 1
  },
  {
    name: "填充(F)",
    url: "#",
    icon: "paint",
    sizeRate: 1,
    power: 1
  },
  {
    name: "自动元件",
    url: "#",
    icon: "autoUnit",
    sizeRate: 1
  },
  {
    name: "清除",
    url: "#",
    icon: "dustbin",
    sizeRate: 1,
    power: 1
  },
  {
    name: "配置",
    url: "#",
    icon: "setting2",
    sizeRate: 1,
    power: 1
  },
  {
    name: "导出",
    url: "#",
    icon: "export",
    sizeRate: 1,
    power: 1
  },
  {
    name: "存档",
    url: "#",
    icon: "save",
    sizeRate: 1,
    power: 1
  },
  {
    name: "导入",
    url: "#",
    icon: "import",
    sizeRate: 1,
    power: 1
  },
  {
    name: "撤销",
    url: "#",
    icon: "undo",
    sizeRate: 1,
    power: 1
  },
  {
    name: "重做",
    url: "#",
    icon: "redo",
    sizeRate: 1,
    power: 1
  }
];

export default {
  oninit: function() {},
  oncreate: function({dom}) {
    return calcBarWidth(dom);
  },
  onupdate: function({dom}) {
    return calcBarWidth(dom);
  },
  view: function(v) {
    var index, item;
    return m("", {
      style: {
        display: "flex",
        position: "fixed",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        right: "3rem",
        top: "50%",
        transform: "translate(0,-50%)",
        zIndex: 999999
      }
    }, [
      m("",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(215,215,215,0.7)",
          //backgroundImage:"url(./statics/nav_bg.png)"
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "bottom",
          borderRadius: "2rem",
          //height:if Mob then "80vw" else "auto"
          //height:if Mob then "6rem" else "7rem"
          padding: "1rem 0",
          //marginBottom:"0.5rem"

          //border:"0.1rem solid #909090"
          backdropFilter: "blur(10px)",
          "-webkit-backdrop-filter": "blur(10px)",
          transition: "all ease 1s"
        }
      },
      [
        //boxShadow:"0 0 1rem rgba(0,0,0,0.4)"
        m("",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }
        },
        [
          m("img[src=/statics/back2.png]",
          {
            style: {
              marginLeft: "1rem",
              marginRight: "1rem",
              height: "3rem",
              cursor: "pointer",
              transition: "all 0.5s"
            },
            title: "返回",
            onmouseover: (e) => {
              return e.target.style.transform = "scale(1.2)";
            },
            onmouseout: (e) => {
              return e.target.style.transform = "scale(1)";
            },
            onclick: function() {
              return ROUTE.back();
            }
          })
        ]),
        m("",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%"
          }
        },
        [
          (function() {
            var i,
          len,
          results;
            results = [];
            for (index = i = 0, len = urlList.length; i < len; index = ++i) {
              item = urlList[index];
              results.push((function(item,
          index) {
                return m(".animated.bounceIn",
          {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    width: !m.route.get().match("home") && item.url === "/plus" ? "1%" : "100%",
                    transition: "width 1s ease"
                  },
                  onbeforeremove: function(v) {
                    v.dom.classList.add("bounceOut");
                    return new Promise(function(res,
          rej) {
                      //v1.dom.addEventListener "animationend",res
                      return setTimeout(function() {
                        return res();
                      },
          700);
                    });
                  },
                  onmouseover: (e) => {
                    var ref,
          ref1,
          ref2,
          ref3;
                    urlList.forEach((item) => {
                      return item.sizeRate = 0.8;
                    });
                    if ((ref = urlList[index - 1]) != null) {
                      ref.sizeRate = 1;
                    }
                    if ((ref1 = urlList[index + 1]) != null) {
                      ref1.sizeRate = 1;
                    }
                    if ((ref2 = urlList[index - 2]) != null) {
                      ref2.sizeRate = 0.9;
                    }
                    if ((ref3 = urlList[index + 2]) != null) {
                      ref3.sizeRate = 0.9;
                    }
                    urlList[index].sizeRate = 1.15;
                    return presentHover = item.name;
                  },
                  onmouseout: (e) => {
                    urlList.forEach((item) => {
                      return item.sizeRate = 1;
                    });
                    return presentHover = "";
                  }
                },
          [
                  m("",
                  {
                    style: {
                      display: "inline-block",
                      position: "relative",
                      //margin:if !Mob then "0 3.5rem"
                      margin: "0.5rem 2rem"
                    }
                  },
                  [
                    m(`img[src=/statics/navbar/${item.icon}.svg]`,
                    {
                      title: item.name,
                      style: {
                        display: "relative",
                        width: !m.route.get().match("home") && item.url === "/plus" ? "0rem" : Mob ? `${3.5 * item.sizeRate}rem` : `${4 * item.sizeRate}rem`,
                        height: Mob ? `${3.5 * item.sizeRate}rem` : `${4 * item.sizeRate}rem`,
                        /*
                        transform:"translateZ(0) #{
                          if editorData.show is true and item.url is "/plus"
                            "rotate(225deg)"
                          else
                            ""
                        }"
                        */
                        cursor: "pointer",
                        transition: "all 0.5s"
                      },
                      onclick: (e) => {
                        var SetHeight,
                    SetWidth;
                        switch (item.name) {
                          case "操作(A)":
                            return gEData.mouseState = "mouse";
                          case "绘图(P)":
                            return gEData.mouseState = "pen";
                          case "填充(F)":
                            return gEData.divList.fillRect();
                          case "清除":
                            return gEData.divList.delSelectedItems();
                          case "配置":
                            SetWidth = new Box();
                            SetHeight = new Box();
                            return Notice.launch({
                              tip: "配置",
                              content: function() {
                                return {
                                  view: function() {
                                    return m("",
                    [
                                      m(Box,
                                      {
                                        color: "red"
                                      },
                                      "画布尺寸"),
                                      m(Box,
                                      {
                                        isBlock: true
                                      },
                                      "配置画布尺寸不会影响当前已经绘制好的元素，只影响导出区域"),
                                      m(Box,
                                      `宽${gEData.canvasWidth}px`),
                                      m(Box,
                                      "x"),
                                      m(Box,
                                      `高${gEData.canvasHeight}px`),
                                      m("",
                                      [
                                        m(SetWidth,
                                        {
                                          tagName: "input[type=number]",
                                          ext: {
                                            placeholder: "画布宽/像素"
                                          }
                                        }),
                                        m(SetHeight,
                                        {
                                          tagName: "input[type=number]",
                                          ext: {
                                            placeholder: "画布高/像素"
                                          }
                                        })
                                      ]),
                                      m("",
                                      [
                                        m(Box,
                                        {
                                          color: "red"
                                        },
                                        "关于"),
                                        m(Box,
                                        ["©版权所有 喵宅苑/啦沐达",
                                        m("a[href=https://www.o-o.space/#!/home/4312][target=_blank]",
                                        "【交流社区】")])
                                      ])
                                    ]);
                                  }
                                };
                              },
                              confirm: function() {
                                gEData.canvasHeight = SetHeight.data.value;
                                gEData.canvasWidth = SetWidth.data.value;
                                return void 0;
                              }
                            });
                          case "导出":
                            return gEData.divList.export();
                          case "撤销":
                            return gEData.divList.undo();
                          case "重做":
                            return gEData.divList.redo();
                          case "自动元件":
                            return gEData.autoDraw = !gEData.autoDraw;
                          case "存档":
                            return gEData.divList.save();
                          case "导入":
                            return gEData.divList.import();
                        }
                      }
                    }),
                    
                    //小红点
                    gEData.mouseState === "mouse" && item.name === "操作(A)" || gEData.mouseState === "pen" && item.name === "绘图(P)" || gEData.autoDraw && item.name === "自动元件" ? m("",
                    {
                      style: {
                        position: "absolute",
                        right: "-0.5rem",
                        top: "-0.5rem",
                        width: "1.2rem",
                        height: "1.2rem",
                        background: "#DD7263",
                        borderRadius: "50%"
                      }
                    }) : void 0
                  ]),
                  //指示条
                  m("",
                  {
                    style: {
                      position: "absolute",
                      left: "-4rem",
                      display: "block",
                      marginTop: "0.5rem",
                      height: presentHover === item.name ? "2rem" : "0",
                      width: presentHover === item.name ? "5rem" : "0",
                      background: "rgba(0,0,0,0.5)",
                      borderRadius: "1rem",
                      transition: "all 0.6s",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transform: "scale(0.8)"
                    }
                  },
                  [
                    presentHover === item.name ? m("span",
                    {
                      oninit: function(e) {
                        return setTimeout(() => {
                          return e.dom.style.opacity = 1;
                        },
                    200);
                      },
                      style: {
                        opacity: 0,
                        transition: "all 1s",
                        fontSize: "1rem",
                        lineHeight: "2rem",
                        color: "white"
                      }
                    },
                    item.name) : void 0
                  ])
                ]);
              })(item,
          index));
            }
            return results;
          })()
        ])
      ])
    ]);
  }
};
