webpackJsonp([1],{"/cNp":function(t,s,a){var i=a("VU/8")(a("F7Xw"),a("rth9"),null,null,null);t.exports=i.exports},"4n5O":function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"dark"},[a("div",{staticClass:"container"},[a("h5",{staticClass:"badge primary mb-text-md mb-text-normal"},[t._v("Please note")]),a("p",[t._v("\n\t\t\tThe Mockingbird project is fully "),a("b",[t._v("Work in Progress")]),t._v("."),a("br"),t._v("\n\t\t\tThis is a beta release. Anything may change or be removed.\n\t\t")]),a("p",[t._v("\n\t\t\tIf you experience any bugs or if you want to help improve the framework, then feel free to "),a("a",{staticClass:"mb-text-underline",attrs:{href:"https://github.com/lucas-carl/mockingbird/issues/new"}},[t._v("open an issue")]),t._v(" on GitHub.\n\t\t")])])])}]}},F7Xw:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Mnkh"),e=a.n(i);s.default={components:{BetaSection:e.a},methods:{scrollTo:function(t){var s=document.querySelector(t).getBoundingClientRect().top-64;this.animateScroll(s,200)},animateScroll:function(t,s){var a=this,i=window.pageYOffset||document.body.scrollTop,e=(t-i)/s*10;setTimeout(function(){if(window.scroll(0,i+e),0===s)return void window.scroll(0,t+1);a.animateScroll(t,s-10)},10)}}}},Mnkh:function(t,s,a){var i=a("VU/8")(null,a("4n5O"),null,null,null);t.exports=i.exports},rth9:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",[t._m(0),a("beta-section"),a("section",{staticClass:"mb-no-padding"},[a("div",{staticClass:"container"},[a("h4",[t._v("Cheat Sheet")]),a("p",[t._v("\n\t\t\t\tA complete reference to Mockingbird\n\t\t\t")]),a("div",{staticClass:"row mb-text-center"},[a("div",{staticClass:"col-xs-4"},[a("a",{staticClass:"card card-block bg-lightest",attrs:{href:"#grid"},on:{click:function(s){s.preventDefault(),t.scrollTo("#grid")}}},[t._v("\n\t\t        Mockingbird Grid\n\t\t      ")])]),a("div",{staticClass:"col-xs-4"},[a("a",{staticClass:"card card-block bg-secondary",attrs:{href:"#typo"},on:{click:function(s){s.preventDefault(),t.scrollTo("#typo")}}},[t._v("\n\t\t        Mockingbird Light\n\t\t      ")])]),a("div",{staticClass:"col-xs-4"},[a("a",{staticClass:"card card-block bg-success",attrs:{href:"#components"},on:{click:function(s){s.preventDefault(),t.scrollTo("#cards")}}},[t._v("\n\t\t        Mockingbird\n\t\t      ")])])]),t._m(1),t._m(2),t._m(3)])]),a("section",{staticClass:"mb-no-padding"},[a("div",{staticClass:"container"},[a("h4",{attrs:{id:"grid"}},[t._v("\n\t\t\t\tGrid\n\t\t\t")]),t._m(4),t._m(5),t._m(6),a("div",{staticClass:"row"},[t._m(7),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".col-{"),a("a",{attrs:{href:"#breakpoints"},on:{click:function(s){s.preventDefault(),t.scrollTo("#breakpoints")}}},[t._v("breakpoint")]),t._v("}-{n}")]),a("p",[t._v("\n\t\t\t\t\t\t\tcolumns that break to full width at specified breakpoint\n\t\t\t\t\t\t")])])])]),a("h4",{attrs:{id:"res-utils"}},[t._v("\n\t\t\t\tResponsive Utilities\n\t\t\t")]),t._m(8),t._m(9),t._m(10),t._m(11),a("h4",{attrs:{id:"modifiers"}},[t._v("\n\t\t\t\tUtilities & Modifiers\n\t\t\t")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-text-{"),a("a",{attrs:{href:"#colors"},on:{click:function(s){s.preventDefault(),t.scrollTo("#colors")}}},[t._v("color")]),t._v("}")]),a("p",[t._v("\n\t\t\t\t\t\t\tchanges the text color of the element\n\t\t\t\t\t\t")])])]),t._m(12)]),t._m(13),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-text-{"),a("a",{attrs:{href:"#align"},on:{click:function(s){s.preventDefault(),t.scrollTo("#align")}}},[t._v("align")]),t._v("}")]),a("p",[t._v("\n\t\t\t\t\t\t\taligns text to the specified value\n\t\t\t\t\t\t")])])]),t._m(14)]),t._m(15),t._m(16),t._m(17)])]),a("section",{staticClass:"secondary mb-no-padding"},[a("div",{staticClass:"container"},[a("h4",{attrs:{id:"typo"}},[t._v("\n\t\t\t\tTypography\n\t\t\t")]),t._m(18),t._m(19),t._m(20),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v("<blockquote>")]),a("p"),a("blockquote",{staticClass:"mb-no-margin"},[t._v("\n\t\t\t\t\t\t\t\tImagination is more important than knowledge.\n\t\t\t\t\t\t\t\t– Albert Einstein\n\t\t\t\t\t\t\t")]),a("p")],1)]),t._m(21)]),t._m(22),a("h4",{attrs:{id:"form"}},[t._v("\n\t\t\t\tForm elements\n\t\t\t")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".btn, <button>")]),a("p",[t._v("\n\t\t\t\t\t\t\tcreates a button that can have .mb-outline, .mb-{"),a("a",{attrs:{href:"#colors"},on:{click:function(s){s.preventDefault(),t.scrollTo("#colors")}}},[t._v("color")]),t._v("}, .link-arrow, and more classes.\n\t\t\t\t\t\t")]),t._m(23)])]),t._m(24)]),t._m(25),a("h4",{attrs:{id:"tables"}},[t._v("\n\t\t\t\tTables\n\t\t\t")]),t._m(26),t._m(27),t._m(28),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".{"),a("a",{attrs:{href:"#colors"},on:{click:function(s){s.preventDefault(),t.scrollTo("#colors")}}},[t._v("color")]),t._v("}")]),a("p",[t._v("\n\t\t\t\t\t\t\tin combination with the above class, it can color the outside border of a table\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"})])])]),t._m(29)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"lighter"},[a("div",{staticClass:"container"},[a("h2",[t._v("\n\t\t\t\tGuide\n\t\t\t\t"),a("span",[t._v("Getting started with Mockingbird")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h5",[t._v("\n\t\t\t\tExplanation\n\t\t\t\t"),a("hr")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("\n\t\t\t\ta word preceded by a dot (e.g. "),a("code",[t._v(".container")]),t._v(") means that it is a HTML class. You would use it like "),a("code",[t._v('<div class="'),a("i",[t._v("container")]),t._v('"></div>')])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("\n\t\t\t\ta word in curly brackets (e.g. "),a("code",[t._v("{size}")]),t._v(") correlates to a set of values. In this example it would be ("),a("i",[t._v("sm")]),t._v(", "),a("i",[t._v("md")]),t._v(", "),a("i",[t._v("lg")]),t._v(")\n\t\t\t")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".container")]),a("p",[t._v("\n\t\t\t\t\t\t\tcontent is centered & has a maximum width of 960px\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".container-{size}")]),a("p",[t._v("\n\t\t\t\t\t\t\txs: 600px, sm: 720px, md: 960px, lg: 1200px\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".container-fluid")]),a("p",[t._v("\n\t\t\t\t\t\t\tcontent stretches to full width of window\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".row")]),a("p",[t._v("\n\t\t\t\t\t\t\twrapper for cols, has a clearfix on it\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".flex-row")]),a("p",[t._v("\n\t\t\t\t\t\t\ta wrapper that displays as "),a("i",[t._v("flex")])])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".col")]),a("p",[t._v("\n\t\t\t\t\t\t\twrap content in columns, especially useful inside .flex-row ^^\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".col-{n}")]),a("p",[t._v("\n\t\t\t\t\t\t\twrap content with specified width (n: 1-12). The default grid consists of 12 columns\n\t\t\t\t\t\t")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-pull-left")]),a("p",[t._v("\n\t\t\t\t\t\t\tpulls content to the left (float: left)\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-pull-right")]),a("p",[t._v("\n\t\t\t\t\t\t\tpulls content to the right (float: right)\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-clearfix")]),a("p",[t._v("\n\t\t\t\t\t\t\teliminates unwanted behavior of floats. "),a("a",{attrs:{href:"http://learnlayout.com/clearfix.html",target:"_blank"}},[t._v("read more")])])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-center")]),a("p",[t._v("\n\t\t\t\t\t\t\tcenters the element its used on\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-flex-center")]),a("p",[t._v("\n\t\t\t\t\t\t\tuses flexbox to center its children vertically & horizontally\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-fullwidth")]),a("p",[t._v("\n\t\t\t\t\t\t\tlike the name suggests, it stretches to full width of parent\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-absolute")]),a("p",[t._v("\n\t\t\t\t\t\t\tpositions the element to "),a("a",{attrs:{href:"https://css-tricks.com/absolute-positioning-inside-relative-positioning/",target:"_blank"}},[t._v("absolute")])])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-fixed")]),a("p",[t._v("\n\t\t\t\t\t\t\tpositions the element to "),a("a",{attrs:{href:"https://css-tricks.com/absolute-positioning-inside-relative-positioning/",target:"_blank"}},[t._v("fixed")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-{"),a("a",{attrs:{href:"#"}},[t._v("size")]),t._v("}")]),a("p",[t._v("\n\t\t\t\t\t\t\tcan change size of an element, depending on if it supports it\n\t\t\t\t\t\t")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-outline")]),a("p",[t._v("\n\t\t\t\t\t\t\tchanges the element's style to outlined\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-no-padding, .mb-no-margin, .mb-no-border")]),a("p",[t._v("\n\t\t\t\t\t\t\tremoves given attribute from element\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-text-wrap")]),a("p",[t._v("\n\t\t\t\t\t\t\tforces a text to wrap inside its container\n\t\t\t\t\t\t")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-text-overflow")]),a("p",[t._v("\n\t\t\t\t\t\t\toverflowing text gets cut off with ellipsis\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-text-underline, .mb-text-through")]),a("p",[t._v("\n\t\t\t\t\t\t\tstyles the text with underline or line-through\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-shadow, .mb-shadow-{type}")]),a("p",[t._v("\n\t\t\t\t\t\t\tadds a box shadow to any element:\n\t\t\t\t\t\t")]),a("button",{staticClass:"mb-shadow"},[t._v("Button w/ shadow")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-shadow-hover, .mb-shadow-{type}-hover")]),a("p",[t._v("\n\t\t\t\t\t\t\thides shadow when hovering over the element:\n\t\t\t\t\t\t")]),a("button",{staticClass:"mb-shadow-hover"},[t._v("Button w/ shadow")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block"},[a("h5",{staticClass:"card-title"},[t._v(".mb-text-bold, .mb-text-bolder, .mb-text-normal")]),a("p",[t._v("\n\t\t\t\t\t\t\tchanges the thickness of the font\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v("<h1>, <h2>, ... <h6>")]),a("p",[t._v("\n\t\t\t\t\t\t\tdefault HTML headings, can contain subheadings in form of a <span> or .sub-heading\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".small, <small>")]),a("p",[t._v("\n\t\t\t\t\t\t\tmakes "),a("span",{staticClass:"small"},[t._v("smaller text")]),t._v(" (default: 87.5% of body text)\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".strong, <strong>, <b>")]),a("p",[t._v("\n\t\t\t\t\t\t\tmakes "),a("span",{staticClass:"strong"},[t._v("bold/strong")]),t._v(" text\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".mark, <mark>")]),a("p",[a("span",{staticClass:"mark"},[t._v("marks the text inside")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v("<code>")]),a("p",[t._v("\n\t\t\t\t\t\t\thighlights code inside a text:\n\t\t\t\t\t\t")]),a("code",[t._v("console.log('Hello World')")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v("<sup>, <sub>")]),a("p",[t._v("\n\t\t\t\t\t\t\tpositions text "),a("sup",[t._v("above")]),t._v(" and "),a("sub",[t._v("below")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".font-fam-{type}")]),a("p",[t._v("\n\t\t\t\t\t\t\tapplies a font family on the text. types: serif, monospace\n\t\t\t\t\t\t")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".link-arrow")]),a("p",[a("a",{staticClass:"link-arrow",attrs:{href:"#"}},[t._v("link with an arrow")])])])]),a("div",{staticClass:"col-sm-6"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("button",{staticClass:"mb-sm mb-right mb-bottom"},[t._v("Button")]),a("button",{staticClass:"primary mb-sm mb-right mb-bottom"},[t._v("Primary")]),a("button",{staticClass:"primary mb-sm outline mb-right mb-bottom"},[t._v("Outline")]),a("button",{staticClass:"primary mb-sm mb-right mb-bottom link-arrow"},[t._v("Arrow")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v("<input>, <textarea>, <select>")]),a("p"),a("div",{staticClass:"form-group"},[a("input",{staticClass:"mb-sm",attrs:{type:"text",placeholder:"text input"}})]),a("div",{staticClass:"form-group"},[a("textarea",{staticClass:"mb-sm",staticStyle:{"max-height":"3rem"},attrs:{rows:"2",placeholder:"textarea"}})]),a("div",{staticClass:"form-group"},[a("select",{staticClass:"mb-sm"},[a("option",[t._v("option 1")]),a("option",[t._v("option 2")])])]),a("p")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v("<input type=radio>, <input type=checkbox>")]),a("p",[a("label",{staticClass:"mb-right"},[a("input",{attrs:{type:"radio"}}),t._v("\n\t\t\t\t\t\t\t\tRadio button\n\t\t\t\t\t\t\t")]),a("label",[a("input",{attrs:{type:"checkbox"}}),t._v("\n\t\t\t\t\t\t\t\tCheckbox\n\t\t\t\t\t\t\t")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v("<table>")]),a("p",[t._v("\n\t\t\t\t\t\t\tif you want to know more about HTML tables, you can "),a("a",{attrs:{href:"https://www.w3schools.com/html/html_tables.asp"}},[t._v("read more here")]),t._v(".\n\t\t\t\t\t\t\t"),a("br"),t._v("\n\t\t\t\t\t\t\tMockingbird adds some more features to tables.\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".table-striped")]),a("p",[t._v("\n\t\t\t\t\t\t\tcreates a striped effect on the table, which helps with readability\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".table-hover")]),a("p",[t._v("\n\t\t\t\t\t\t\thighlights the table row when you hover over it\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".mb-sm")]),a("p",[t._v("\n\t\t\t\t\t\t\tmakes a smaller table\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".mb-no-border")]),a("p",[t._v("\n\t\t\t\t\t\t\tremoves all borders from the table\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block bg-secondary"},[a("h5",{staticClass:"card-title"},[t._v(".mb-outline")]),a("p",[t._v("\n\t\t\t\t\t\t\tdraws a border on the outside of the table\n\t\t\t\t\t\t")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"mb-no-padding"},[a("div",{staticClass:"container"},[a("h4",{attrs:{id:"legend"}},[t._v("\n\t\t\t\tLegend\n\t\t\t")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block",attrs:{id:"breakpoints"}},[a("h5",{staticClass:"card-title"},[t._v("\n\t\t\t\t\t\t\tBreakpoints\n\t\t\t\t\t\t")]),a("p",[t._v("\n\t\t\t\t\t\t\txs: 480px, sm: 576px, md: 720px, lg: 960px, xl: 1200px\n\t\t\t\t\t\t")])]),a("div",{staticClass:"card card-block",attrs:{id:"align"}},[a("h5",{staticClass:"card-title"},[t._v("\n\t\t\t\t\t\t\tText alignments\n\t\t\t\t\t\t")]),a("p",[t._v("\n\t\t\t\t\t\t\tleft, center, right, justify\n\t\t\t\t\t\t")])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card card-block",attrs:{id:"colors"}},[a("h5",{staticClass:"card-title"},[t._v("\n\t\t\t\t\t\t\tDefault Colors\n\t\t\t\t\t\t")]),a("div",[a("span",{staticClass:"badge primary mb-right mb-bottom",attrs:{title:"#338bff"}},[t._v("primary")]),a("span",{staticClass:"badge secondary mb-right mb-bottom",attrs:{title:"#e9e9ee"}},[t._v("secondary")]),a("span",{staticClass:"badge default mb-bottom",attrs:{title:"#ffffff"}},[t._v("default")])]),a("div",[a("span",{staticClass:"badge success mb-right mb-bottomt",attrs:{title:"#2ee67d"}},[t._v("success")]),a("span",{staticClass:"badge warning mb-right mb-bottom",attrs:{title:"#ffd500"}},[t._v("warning")]),a("span",{staticClass:"badge danger mb-right mb-bottom",attrs:{title:"#f05030"}},[t._v("danger")]),a("span",{staticClass:"badge dark mb-bottom",attrs:{title:"#666677"}},[t._v("dark")])]),a("div",[a("span",{staticClass:"badge light mb-right",attrs:{title:"#e1e1e3"}},[t._v("light")]),a("span",{staticClass:"badge lighter mb-right",attrs:{title:"#f5f5f7"}},[t._v("lighter")]),a("span",{staticClass:"badge lightest",attrs:{title:"#fbfbfd"}},[t._v("lightest")])])])])])])])}]}}});
//# sourceMappingURL=guide.c3be469b19ec8cc4b013.js.map