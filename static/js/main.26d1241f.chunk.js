(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(5),c=n.n(l),o=n(6),s=n(7),u=n(9),i=n(8),m=n(10),p=n(1),f=n.n(p),d=n(11),h=n(2),v=function(e){var t="";return e.born<1650&&(t="bornBefore1650"),e.died>1800&&(t="diedAfter1800"),t},b=function(e){var t=e.person,n=e.getSelect,r=e.getClassNameOfPerson;return a.a.createElement("tr",{key:t.id,className:r(t),onClick:function(){return n(t.id)}},a.a.createElement("td",null,t.id),a.a.createElement("td",{className:v(t)},t.name),a.a.createElement("td",null,t.sex),a.a.createElement("td",null,t.age),a.a.createElement("td",null,t.born),a.a.createElement("td",null,t.died),a.a.createElement("td",null,t.mother),a.a.createElement("td",null,t.father),a.a.createElement("td",{className:"person--lived-in-".concat(t.century)},t.century),a.a.createElement("td",null,t.children))},E=function(e){var t=e.people,n=e.sortBy,r=e.getSelect,l=e.getClassNameOfPerson;return a.a.createElement("table",{className:"PeopleTable"},a.a.createElement("tr",null,a.a.createElement("th",{onClick:function(){return n("id")}},"id"),a.a.createElement("th",{onClick:function(){return n("name")}},"name"),a.a.createElement("th",null,"sex"),a.a.createElement("th",{onClick:function(){return n("age")}},"age"),a.a.createElement("th",{onClick:function(){return n("born")}},"born"),a.a.createElement("th",{onClick:function(){return n("died")}},"died"),a.a.createElement("th",null,"mother"),a.a.createElement("th",null,"father"),a.a.createElement("th",null,"century"),a.a.createElement("th",null,"children")),a.a.createElement("tbody",null,t.map(function(e,t){return a.a.createElement(b,{person:e,getSelect:r,getClassNameOfPerson:l})})))},g=(n(19),n(3)),P="",y=function(e){var t=e.valueForSort,n=e.people;return P===t?Object(g.a)(n).reverse():(P=t,Object(g.a)(n).sort(function(e,t){return"name"===P?e[P].localeCompare(t[P]):e[P]-t[P]}))},O=function(){var e=Object(h.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return t=e.sent,e.abrupt("return",t.map(function(e,n){return Object(d.a)({id:n+1},e,{father:e.father||" ",mother:e.father||" ",age:e.died-e.born,century:Math.ceil(e.died/100),children:t.filter(function(t){return t.father===e.name||t.mother===e.name}).map(function(e){return e.name}).join(", ")})}));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).people=[],n.state={tempPhrase:"",valueForSort:"",visiblePeople:[],selectedPersonId:null},n.getSelect=function(e){n.setState({selectedPersonId:e})},n.getClassNameOfPerson=function(e){var t="";return t=e.id===n.state.selectedPersonId?"person selectedPerson":"person","m"===e.sex?t+=" person--male":t+=" person--female","m"===e.sex&&e.children.length>0&&(t+=" person--father"),"f"===e.sex&&e.children.length>0&&(t+=" person--mother"),e.died-e.born>65&&(t+=" livedOver65Years"),t},n.filterPhrase=function(e){var t=e.target.value.toLowerCase(),r=n.state.people.filter(function(e){return(e.name+e.father+e.mother).toLowerCase().includes(t)});n.setState({visiblePeople:r,tempPhrase:t})},n.sortBy=function(e){n.setState({valueForSort:e}),n.setState(function(e){return{visiblePeople:y(e)}})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,this.setState({people:t,visiblePeople:t,valueForSort:"id"});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.visiblePeople;return a.a.createElement("main",null,a.a.createElement("h1",null,"People table",e.length),a.a.createElement("form",null,a.a.createElement("input",{type:"text",className:"input",placeholder:"filter by name, mother and father",onInput:this.filterPhrase})),a.a.createElement(E,{people:e,getClassNameOfPerson:this.getClassNameOfPerson,selectedPersonId:this.state.selectedPersonId,getSelect:this.getSelect,sortBy:this.sortBy}))}}]),t}(a.a.Component);c.a.render(a.a.createElement(w,{test:123}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.26d1241f.chunk.js.map