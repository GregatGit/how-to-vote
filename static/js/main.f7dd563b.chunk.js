(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e){e.exports=[{name:"Jon_Snow",house:"Stark",party:"BTKNP",details:"Bastard That Know Nothing Party  ",position:0,img:"http://amazingpict.com/wp-content/uploads/2017/05/jon_snow_game_of_thrones_season_7-1600x900-150x150.jpg"},{name:"Daenerys_Targaryen",house:"Targaryen",party:"DUP",details:"Dragons United Party",position:0,img:"https://media1.popsugar-assets.com/files/thumbor/a9ilhFHizmWYHUCjfuIKjeWRJvQ/160x160/filters:format_auto-!!-:strip_icc-!!-:sharpen-!1,0,true!-/2015/04/27/878/n/1922283/b3775998_gameofthrones15_27/i/Daenerys-Targaryen-Played-Emilia-Clarke.jpg"},{name:"Sansa_Stark",house:"Stark",party:"CRR",details:"Crazy Redhed Revolution Party",position:0,img:"https://media1.popsugar-assets.com/files/thumbor/BlicZPaV3Yc22Gg4i3t87ULvits/160x160/filters:format_auto-!!-:extract_cover-!!-:strip_icc-!!-:sharpen-!1,0,true!-/2016/12/28/798/n/41306527/f26f983046788051_sansa/i/Sansa-Stark.gif"},{name:"Arya_Stark",house:"Stark",party:"SKG",details:"Secret Killer Girls Party",position:0,img:"https://cdn.hiptoro.com/wp-content/uploads/2019/04/Arya-Stark-Maisie-Willaims-Google-Trends-Game-of-Thrones-Season-8-180x180.png"},{name:"Brandon_'Bran'_Stark",house:"Stark",party:"CBAOFS",details:"Crows, Bats and other flying Stuff Front",position:0,img:"https://img.cncenter.cz/img/12/rect160/5668249_hra-o-truny-game-of-thrones-serial-hbo-fotografie-trailer-spoiler-v0.jpg"},{name:"Tyrion_Lannister",house:"Lannister",party:"POP",details:"Pants off Party",position:0,img:"https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/tyrion-lannister-512x512.jpg/_jcr_content/renditions/cq5dam.web.130.130.jpeg"},{name:"Davos_Seaworth",house:"Onion",party:"MF",details:"Missing Fingers Party",position:0,img:"https://img.buzzfeed.com/buzzfeed-static/static/2015-10/16/18/enhanced/webdr08/enhanced-buzz-13019-1445033297-15.jpg"},{name:"Brienne_of_Tarth",house:"Tarth",party:"ATSL",details:"All the Singles Ladies Party",position:0,img:"https://media1.popsugar-assets.com/files/thumbor/SQl3SrPht0Bxh5Fi0ddlxE3sJk0/160x160/filters:format_auto-!!-:extract_cover-!!-:strip_icc-!!-:sharpen-!1,0,true!-/2016/12/28/798/n/41306527/19502166de9c0b09_brienne/i/Brienne-Tarth.gif"},{name:"Grey_Worm",house:"Unsullied",party:"WMW",details:"Where's My Wang Party",position:0,img:"https://i1.wp.com/brainsandcareers.com/wp-content/uploads/2017/05/landscape-1469706129-grey-worm.jpg?w=154&h=154&crop=1"}]},23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},29:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),i=a.n(r),o=(a(28),a(9)),c=a(1),l=a(2),m=a(4),u=a(3),d=a(5),h=(a(29),a(18)),p=a(8),E=function(e){return e.replace(/_/g," ").toUpperCase()},g=function(e){var t=e.name,a=e.img,n=e.party,r="100";return 1===e.position&&(r=200),s.a.createElement("div",{className:"item"},s.a.createElement("div",{className:"ui tiny bordered image"},s.a.createElement("img",{width:r,height:r,src:a,className:"ui image",alt:t})),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"header"},E(t)),s.a.createElement("div",{className:"description"},s.a.createElement("h3",null,n))))},f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).showCandidates=function(e){return e.map(function(e){var t=e.name,a=e.img,n=e.party,r=e.position;return s.a.createElement(g,{key:t,name:t,img:a,party:n,position:r})})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"You "),s.a.createElement("h2",null,this.props.user," of Westeros "),s.a.createElement("h2",null,"Have choosen"),s.a.createElement("div",{className:"ui link items"},this.showCandidates(this.props.list)))}}]),t}(n.Component),y=Object(p.b)(function(e,t){return{list:e.candidateList}})(f),b=function(e){var t=e.name,a=e.img,n=e.party,r=e.choice,i=e.position,o=e.details;return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"content"},s.a.createElement("img",{width:"70",height:"70",className:"right floated mini ui image",src:a,alt:E(t)}),s.a.createElement("div",{className:"header"},E(t)),s.a.createElement("div",{className:"meta"},n),s.a.createElement("div",{className:"description"},o)),s.a.createElement("div",{className:"extra content"},s.a.createElement("div",{className:"ui two buttons"},0===i?s.a.createElement("button",{onClick:r,className:"ui huge blue button"},"Vote"):s.a.createElement("button",{className:"ui huge button"},i))))},v="ADD_CANDIDATE",N="RESET_CANDIDATES";var w=a(15),O=a.n(w),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={positions:[],showBallot:!1},a.pickCandidate=function(e){var t=Object(o.a)(a.state.positions),n=t.shift(),s=Object(h.a)({},a.state.ladder);return s[e].position=n,a.setState({positions:t,ladder:s}),n},a.theReset=function(){var e=Object(h.a)({},a.state.ladder);Object.keys(e).forEach(function(t){return e[t].position=0}),a.setState({positions:a.state.resetPositions,ladder:e}),a.props.resetCandidates()},a.displayCanidates=function(e){return e.map(function(e){var t=e.name,n=e.img,r=e.party,i=e.details;return s.a.createElement(b,{choice:function(){a.props.addCandidate(e),a.pickCandidate(t)},key:t,name:t,img:n,party:r,details:i,position:a.state.ladder[t].position})})},a.showBallotChoice=function(){a.setState({showBallot:!0})},a.redoAll=function(){a.theReset(),a.props.redo()},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.props.candidates.length;t++)e.push(t+1);var a=O.a.mapKeys(this.props.candidates,"name");this.setState({positions:e,resetPositions:e,ladder:a})}},{key:"render",value:function(){var e=this;return this.state.showBallot?s.a.createElement(n.Fragment,null,s.a.createElement(y,{user:this.props.user}),s.a.createElement("div",{className:"ui fade reveal"},s.a.createElement("div",{onClick:this.redoAll,className:"visible content ui button"},"RESET EVERYTHING"),s.a.createElement("div",{className:"hidden content ui button"},"CLICK TO START AGAIN"))):s.a.createElement("div",null,s.a.createElement("h2",null,"WELCOME ",s.a.createElement("b",null,this.props.user,"!")," PICK"),s.a.createElement("h2",null,"Candidates"),s.a.createElement("div",{className:"ui one cards"},this.state.ladder?this.displayCanidates(this.props.candidates):""),s.a.createElement("button",{onClick:this.theReset,className:"ui button"},"RESET"),0!==this.state.positions.length?s.a.createElement("div",null,"select all"):s.a.createElement("button",{onClick:function(){return e.showBallotChoice()},className:"ui button"},"CAST YOUR BALLOT"),s.a.createElement("div",{className:"ui fade reveal"},s.a.createElement("div",{onClick:this.redoAll,className:"visible content ui button"},"RESET EVERYTHING"),s.a.createElement("div",{className:"hidden content ui button"},"CLICK TO START AGAIN")))}}]),t}(n.Component),_=Object(p.b)(function(e,t){return{candidates:e.canditates,candidateList:e.candidateList}},{addCandidate:function(e){var t=e.name,a=e.party,n=e.img;return{type:v,payload:{name:t,party:a,img:n}}},resetCandidates:function(){return{type:N,payload:!0}}})(C),S={width:"100%",opacity:.9},k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={name:"",checked:!1},a.onNameChange=function(e){a.setState({name:e.target.value,checked:!1})},a.handleCheckboxChange=function(e){return a.setState({checked:e.target.checked})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t="Your name please";return this.state.checked||""===this.state.name||(t="Swear below"),s.a.createElement("div",{className:"ui raised segment",style:S},s.a.createElement("h2",null,"WELCOME!"),s.a.createElement("p",null,"It is time for the people to choose who shall sit on the Iron Throne."),s.a.createElement("p",null,"Vote wisely"),s.a.createElement("div",{className:"ui input"},s.a.createElement("input",{onChange:this.onNameChange,type:"text",placeholder:"your name here..."})),s.a.createElement("div",null,this.state.checked?s.a.createElement("button",{style:{margin:20},onClick:function(){return e.props.func(e.state.name)},className:"ui button"},"THAT BE I"):s.a.createElement("button",{style:{margin:20},className:"ui button"},t)),""!==this.state.name?s.a.createElement("div",{className:"ui segment"},s.a.createElement("p",null,"Do you swear by the the Old Gods and New that you are:"," ",this.state.name),s.a.createElement("div",{className:"ui checkbox"},s.a.createElement("input",{onChange:this.handleCheckboxChange,type:"checkbox",name:"swear",checked:this.state.checked}),s.a.createElement("label",null,"I SWEAR"))):"",s.a.createElement("div",{style:{margin:20},className:"ui fitted divider"}))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={user:"none",users:[]},a.chooseUser=function(e){var t=Object(o.a)(a.state.users);a.state.users.indexOf(e)>-1&&t.push(e),a.setState({user:e,users:t})},a.handleRedo=function(){console.log("hi"),a.setState({user:"none"})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(n.Fragment,null,s.a.createElement("h1",{style:{textAlign:"center"}},"THE IRON THRONE"),"none"===this.state.user?s.a.createElement("div",{style:{margin:"15%"}},s.a.createElement(k,{func:this.chooseUser})):s.a.createElement(_,{redo:this.handleRedo,user:this.state.user}))}}]),t}(n.Component),T=a(6),A=a(21),R=a.n(A),x=a(22),P=Object(T.c)({canditates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;arguments.length>1&&arguments[1];return e||(e=x),e},candidateList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var a=e.length+1,n=t.payload,s={name:n.name,position:a,party:n.party,img:n.img};return[].concat(Object(o.a)(e),[s]);case N:return[];default:return e}}}),B=Object(T.a)(R.a)(T.d);i.a.render(s.a.createElement(p.a,{store:B(P,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},s.a.createElement(j,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f7dd563b.chunk.js.map