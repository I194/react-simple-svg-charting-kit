try{
var e="storybook/measure-addon",u=`${e}/tool`;var y={RESULT:`${e}/result`,REQUEST:`${e}/request`,CLEAR:`${e}/clear`};var a=__REACT__,{Children:A,Component:g,Fragment:I,Profiler:L,PureComponent:k,StrictMode:M,Suspense:B,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:P,cloneElement:D,createContext:x,createElement:N,createFactory:v,createRef:H,forwardRef:F,isValidElement:K,lazy:W,memo:Y,useCallback:p,useContext:U,useDebugValue:G,useEffect:S,useImperativeHandle:$,useLayoutEffect:w,useMemo:V,useReducer:q,useRef:z,useState:Q,version:Z}=__REACT__;var te=__STORYBOOKAPI__,{ActiveTabs:oe,Consumer:re,ManagerContext:ae,Provider:se,addons:c,combineParameters:ne,controlOrMetaKey:le,controlOrMetaSymbol:ue,eventMatchesShortcut:ce,eventToShortcut:me,isMacLike:ie,isShortcutTaken:pe,keyToSymbol:Se,merge:Te,mockChannel:_e,optionOrAltSymbol:de,shortcutMatchesShortcut:be,shortcutToHumanString:Oe,types:T,useAddonState:Ee,useArgTypes:ye,useArgs:Ce,useChannel:fe,useGlobalTypes:Re,useGlobals:_,useParameter:he,useSharedState:Ae,useStoryPrepared:ge,useStorybookApi:d,useStorybookState:Ie}=__STORYBOOKAPI__;var Pe=__STORYBOOKCOMPONENTS__,{A:De,ActionBar:xe,AddonPanel:Ne,Badge:ve,Bar:He,Blockquote:Fe,Button:Ke,Code:We,DL:Ye,Div:Ue,DocumentWrapper:Ge,FlexBar:$e,Form:we,H1:Ve,H2:qe,H3:ze,H4:Qe,H5:Ze,H6:je,HR:Je,IconButton:b,IconButtonSkeleton:Xe,Icons:O,Img:et,LI:tt,Link:ot,ListItem:rt,Loader:at,OL:st,P:nt,Placeholder:lt,Pre:ut,ResetWrapper:ct,ScrollArea:mt,Separator:it,Spaced:pt,Span:St,StorybookIcon:Tt,StorybookLogo:_t,Symbols:dt,SyntaxHighlighter:bt,TT:Ot,TabBar:Et,TabButton:yt,TabWrapper:Ct,Table:ft,Tabs:Rt,TabsState:ht,TooltipLinkList:At,TooltipMessage:gt,TooltipNote:It,UL:Lt,WithTooltip:kt,WithTooltipPure:Mt,Zoom:Bt,codeCommon:Pt,components:Dt,createCopyToClipboardFunction:xt,getStoryHref:Nt,icons:vt,interleaveSeparators:Ht,nameSpaceClassNames:Ft,resetComponents:Kt,withReset:Wt}=__STORYBOOKCOMPONENTS__;var E=()=>{let[s,m]=_(),{measureEnabled:n}=s,i=d(),l=p(()=>m({measureEnabled:!n}),[m,n]);return S(()=>{i.setAddonShortcut(e,{label:"Toggle Measure [M]",defaultShortcut:["M"],actionName:"measure",showInMenu:!1,action:l})},[l,i]),a.createElement(b,{key:u,active:n,title:"Enable measure",onClick:l},a.createElement(O,{icon:"ruler"}))};c.register(e,()=>{c.add(u,{type:T.TOOL,title:"Measure",match:({viewMode:s})=>s==="story",render:()=>a.createElement(E,null)})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
