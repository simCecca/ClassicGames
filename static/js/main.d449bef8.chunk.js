(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(62)},41:function(e,t,n){},42:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,n){},57:function(e,t,n){},58:function(e,t){function n(e){var t=null;return e.every(function(e){var n=Math.floor(e/7),r=!1;return null===t?(t=n,!0):(t-1===n&&(r=!0,t=n),r)})}function r(e){var t=Math.floor(e[0]/7);return e.every(function(e){return t===Math.floor(e/7)})}e.exports.calculateWinner=function(e){for(var t=function(e,t){return Array.from(new Array(4),function(n,r){return e-t*r})},a=e.length-1;a>=6;a-=7)for(var s=function(a){if(e[a]){if(t(a,7).every(function(t){return e[a]===e[t]}))return{v:[e[a],t(a,7)]};if(r(t(a,1))&&t(a,1).every(function(t){return e[a]===e[t]}))return{v:[e[a],t(a,1)]};if(n(t(a,8))&&t(a,8).every(function(t){return e[a]===e[t]}))return{v:[e[a],t(a,8)]};if(n(t(a,6))&&t(a,6).every(function(t){return e[a]===e[t]}))return{v:[e[a],t(a,6)]}}},o=a;o>a-7;o--){var i=s(o);if("object"===typeof i)return i.v}return null}},59:function(e,t,n){},60:function(e,t){e.exports.calculateWinner=function(e){for(var t=Math.sqrt(e.length),n=[],r=0;r<2*t+2;r++)n.push([]);for(var a=t,s=0;s<t;s++){a=t,n[2*t].push(t*s+s),n[2*t+1].push(t*(s+1)-s-1);for(var o=s*t;o<(s+1)*t;o++)n[s].push(o),n[a].push(o),a++}for(var i=function(t){var r=n[t];if(e[r[0]]&&r.every(function(t){return e[r[0]]===e[t]}))return{v:[e[r[0]],r]}},l=0;l<n.length;l++){var c=i(l);if("object"===typeof c)return c.v}return null}},62:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(24),o=n.n(s),i=(n(40),n(41),n(7)),l=n(8),c=n(11),u=n(9),h=n(12),m=(n(42),n(43),n(66)),b=n(65),f=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark"},a.a.createElement(m.a.Brand,{href:"/ClassicGames/#"},"Classic Games"),a.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),a.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},a.a.createElement(b.a,{className:"mr-auto"}),a.a.createElement(b.a,{className:"justify-content-end",activeKey:"/Home"},a.a.createElement(b.a.Item,null,a.a.createElement(b.a.Link,{eventKey:"link-1",href:"/ClassicGames/#/ConnectFour"},a.a.createElement("h5",null,"Connected Four"))),a.a.createElement(b.a.Item,null,a.a.createElement(b.a.Link,{eventKey:"link-2",href:"/ClassicGames/#/TicTacToe"},a.a.createElement("h5",null,"Tic-Tac-Toe"))))))}}]),t}(r.Component),p=n(64),v=n(67),d=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleColor",value:function(){var e=this.props.style?this.props.style(this.props.index):{};return this.props.winners.includes(this.props.index)&&(e={background:"green"}),void 0!==this.props.color&&(e.color=this.props.color),e}},{key:"render",value:function(){return a.a.createElement("button",{className:this.props.name,key:this.props.index,onClick:this.props.onClick,style:this.handleColor()},this.props.value)}}]),t}(r.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderBox",value:function(e){var t=this;return a.a.createElement(d,{index:e,name:this.props.name,color:this.props.colors?this.props.colors[e]:this.props.colors,style:this.props.style,value:this.props.boxes[e],onClick:function(){return t.props.onClick(e)},winners:this.props.winners})}},{key:"renderBoard",value:function(e){for(var t=this,n=[],r=function(r){n.push(a.a.createElement("div",{className:"board-row"},Array.from(new Array(e),function(){return r}).map(function(n,r){return t.renderBox(r+n*e)})))},s=0;s<e;s++)r(s);return n}},{key:"render",value:function(){return a.a.createElement("div",null,this.renderBoard(this.props.boardSize))}}]),t}(r.Component),x=(n(57),n(58)),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={history:[{boxes:Array.from(new Array(49),function(e,t){return null}),colors:Array.from(new Array(49),function(e,t){return null})}],stepNumber:0,boardSize:7,isXNext:!0},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"_findFreePosition",value:function(e,t){var n=e,r=t[n];n+=this.state.boardSize;for(var a=1;a<this.state.boardSize;a++){if(null==r&&null!=t[n])return n-7;if(null==t[n]&&a===this.state.boardSize-1)return n;n+=7}return null}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1],r=n.boxes.slice(),a=n.colors.slice(),s=e%this.state.boardSize,o=this._findFreePosition(s,r);x.calculateWinner(r)||null!=o&&(r[o]=this.state.isXNext?"X":"O",a[o]=this.state.isXNext?"#d70000":"#CCCC00",this.setState({history:t.concat([{boxes:r,colors:a}]),stepNumber:t.length,isXNext:!this.state.isXNext}))}},{key:"reset",value:function(){this.setState({history:[{boxes:Array.from(new Array(49),function(e,t){return null}),colors:Array.from(new Array(49),function(e,t){return null})}],stepNumber:0,isXNext:!0})}},{key:"handleHistory",value:function(e){var t=this.state.stepNumber+e;if(t<=this.state.history.length-1&&t>=0){var n={stepNumber:this.state.stepNumber+e,isXNext:!this.state.isXNext};this.setState(n)}}},{key:"render",value:function(){var e,t=this,n=[-1,-1],r=this.state.history[this.state.stepNumber],s=x.calculateWinner(r.boxes);s&&(e=s[0],n=s[1]);var o=s?"The winner is "+e:"Next Player is "+(this.state.isXNext?"X":"O");return a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"pagetitle"},a.a.createElement("h1",null,"Connect Four")),a.a.createElement("div",{className:"body"},a.a.createElement("div",{className:"status"},a.a.createElement("div",null,a.a.createElement("h3",null,o))),a.a.createElement(y,{name:"box-connect-four btn-circle",colors:r.colors,boardSize:this.state.boardSize,boxes:r.boxes,onClick:function(e){return t.handleClick(e)},winners:n}),a.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},a.a.createElement("div",{className:"btn-group-reset",role:"group","aria-label":"First group"},a.a.createElement("button",{onClick:function(){return t.reset()},className:"btn btn-danger"},"Reset")),a.a.createElement("div",{className:"btn-group-nextprevious",role:"group","aria-label":"Second group"},a.a.createElement("button",{onClick:function(){return t.handleHistory(-1)},className:"btn btn-primary"},"Precedence"),a.a.createElement("button",{onClick:function(){return t.handleHistory(1)},className:"btn btn-primary"},"Next")))))}}]),t}(r.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(N,null))}}]),t}(r.Component),O=(n(59),n(60)),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={history:[{boxes:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,numberOfBoxes:3},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].boxes.slice();O.calculateWinner(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{boxes:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"handleChange",value:function(e){var t=[0,1,2,3,4,5,6,7,8,9];e>=3&&e<=6&&this.setState({history:[{boxes:Array(t[e]*t[e]).fill(null)}],stepNumber:0,xIsNext:!0,numberOfBoxes:t[e]})}},{key:"reset",value:function(){this.setState({history:[{boxes:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,numberOfBoxes:3})}},{key:"handleHistory",value:function(e){var t=this.state.stepNumber+e;if(t<=this.state.history.length-1&&t>=0){var n={stepNumber:this.state.stepNumber+e,xIsNext:!this.state.xIsNext};this.setState(n)}}},{key:"handleStyle",value:function(e){var t={};return e%this.state.numberOfBoxes===this.state.numberOfBoxes-1&&(t.borderRight="solid black"),e<=this.state.numberOfBoxes-1&&(t.borderTop="solid black"),e%this.state.numberOfBoxes===0&&(t.borderLeft="solid black"),e>=this.state.numberOfBoxes*this.state.numberOfBoxes-this.state.numberOfBoxes&&(t.borderBottom="solid black"),t}},{key:"render",value:function(){var e=this,t=this.state.history[this.state.stepNumber],n=[-1,-1],r=O.calculateWinner(t.boxes);r&&(n=r[1],r=r[0]);var s=r?"The winner is "+r:"Next Player is "+(this.state.xIsNext?"X":"O");return a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"blackboard"},a.a.createElement("div",{className:"pagetitle-tic-tac"},a.a.createElement("h1",null,"Tic-Tac-Toe Game")),a.a.createElement("div",{className:"body-tic-tac"},a.a.createElement("div",{className:"squarenumber"},a.a.createElement("h5",null,"Number of squares (from 3 to 6)"),a.a.createElement("input",{type:"text",autoComplete:"off",name:"name",onChange:function(t){e.handleChange(t.target.value)}})),a.a.createElement("div",{className:"status"},a.a.createElement("div",null,a.a.createElement("h5",null,s))),a.a.createElement("div",{className:"game-board-tic-tac"},a.a.createElement(y,{name:"box-tic-tac",boxes:t.boxes,onClick:function(t){return e.handleClick(t)},winners:n,boardSize:this.state.numberOfBoxes,style:function(t){return e.handleStyle(t)}})),a.a.createElement("div",{className:"btn-toolbar tic-tac-buttons",role:"toolbar","aria-label":"Toolbar with button groups"},a.a.createElement("div",{className:"btn-group-reset-tic-tac",role:"group","aria-label":"First group"},a.a.createElement("button",{onClick:function(){return e.reset()},className:"btn personal-outline-danger mr-1"},"Reset")),a.a.createElement("div",{className:"btn-group-nextprevious-tic-tac",role:"group","aria-label":"Second group"},a.a.createElement("button",{onClick:function(){return e.handleHistory(-1)},className:"btn personal-outline-primary"},"Precedence"),a.a.createElement("button",{onClick:function(){return e.handleHistory(1)},className:"btn personal-outline-primary"},"Next"))))))}}]),t}(r.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(k,null))}}]),t}(r.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(p.a,null,a.a.createElement("div",null,a.a.createElement(f,null),a.a.createElement(v.a,{path:"/ConnectFour",component:E}),a.a.createElement(v.a,{path:"/TicTacToe",component:g})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.d449bef8.chunk.js.map