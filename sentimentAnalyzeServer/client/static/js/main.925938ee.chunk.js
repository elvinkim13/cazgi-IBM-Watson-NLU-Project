(this.webpackJsonpsentimentanalyzeclient=this.webpackJsonpsentimentanalyzeclient||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var i=n(2),s=n.n(i),r=n(18),c=n.n(r),a=(n(24),n(3)),o=n(4),l=n(6),u=n(5),d=(n(9),n(25),n(19)),m=n(0),b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=Object.entries(this.props.emotions).map((function(t){var e=Object(d.a)(t,2),n=e[0],i=e[1];return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:n}),Object(m.jsx)("td",{children:i})]})}));return Object(m.jsx)("div",{children:Object(m.jsx)("table",{className:"table table-bordered",children:Object(m.jsx)("tbody",{children:t})})})}}]),n}(s.a.Component),j=n(8),x=n.n(j),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={innercomp:Object(m.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderTextArea=function(){document.getElementById("textinput").value="","url"===t.state.mode&&t.setState({innercomp:Object(m.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0})},t.renderTextBox=function(){document.getElementById("textinput").value="","text"===t.state.mode&&t.setState({innercomp:Object(m.jsx)("textarea",{rows:"1",cols:"50",id:"textinput"}),mode:"url",sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e="elvin-sentime.nt-analyzer-chipper-tiger-kc.mybluemix.net";e="url"===t.state.mode?e+"/url/sentiment?url="+document.getElementById("textinput").value:e+"/text/sentiment?text="+document.getElementById("textinput").value,x.a.get(e).then((function(e){t.setState({sentimentOutput:e.data});var n=e.data;n="positive"===e.data?Object(m.jsx)("div",{style:{color:"green",fontSize:20},children:n}):"negative"===e.data?Object(m.jsx)("div",{style:{color:"red",fontSize:20},children:n}):Object(m.jsx)("div",{style:{color:"orange",fontSize:20},children:n}),t.setState({sentimentOutput:n})}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e="http:elvin-sentiment-analyzer-chipper-tiger-kc.mybluemix.net";e="url"===t.state.mode?e+"/url/emotion?url="+document.getElementById("textinput").value:e+"/text/emotion/?text="+document.getElementById("textinput").value,x.a.get(e).then((function(e){t.setState({sentimentOutput:Object(m.jsx)(b,{emotions:e.data})})}))},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("button",{className:"btn btn-info",onClick:this.renderTextArea,children:"Text"}),Object(m.jsx)("button",{className:"btn btn-dark",onClick:this.renderTextBox,children:"URL"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),this.state.innercomp,Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(m.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(m.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(s.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),i(t),s(t),r(t),c(t)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),O()},9:function(t,e,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.925938ee.chunk.js.map