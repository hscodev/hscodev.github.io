"use strict";(self.webpackChunkhscodev=self.webpackChunkhscodev||[]).push([[775],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3607:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={position:1},s="Kotlin 1.6 \ub9b4\ub9ac\uc988 \uc694\uc57d",p={unversionedId:"kotlin/release/kotlin_1.6_summary",id:"kotlin/release/kotlin_1.6_summary",title:"Kotlin 1.6 \ub9b4\ub9ac\uc988 \uc694\uc57d",description:"Kotlin 1.6\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85 : \ub9c1\ud06c",source:"@site/docs/kotlin/release/kotlin_1.6_summary.md",sourceDirName:"kotlin/release",slug:"/kotlin/release/kotlin_1.6_summary",permalink:"/docs/kotlin/release/kotlin_1.6_summary",tags:[],version:"current",frontMatter:{position:1},sidebar:"kotlinSidebar",previous:{title:"Kotlin 1.6 \ub9b4\ub9ac\uc988",permalink:"/docs/kotlin/release/kotlin_1.6"},next:{title:"Coroutine context and dispatchers",permalink:"/docs/kotlin/coroutine/coroutine_context_and_dispatchers"}},u=[{value:"Language features",id:"language-features",children:[{value:"1. Sealed (exhaustive) <code>when</code> statements",id:"1-sealed-exhaustive-when-statements",children:[],level:3},{value:"2. Suspending functions as supertypes",id:"2-suspending-functions-as-supertypes",children:[],level:3},{value:"3. Suspend conversions",id:"3-suspend-conversions",children:[],level:3},{value:"4. Improved type inference for recursive generic types",id:"4-improved-type-inference-for-recursive-generic-types",children:[],level:3},{value:"5. Builder inference improvements",id:"5-builder-inference-improvements",children:[],level:3}],level:2},{value:"Standard library",id:"standard-library",children:[{value:"1. New functions for standard input",id:"1-new-functions-for-standard-input",children:[],level:3},{value:"2. Stable Duration API",id:"2-stable-duration-api",children:[],level:3},{value:"3. Stable\xa0<code>typeOf()</code>",id:"3-stabletypeof",children:[],level:3},{value:"4. Stable collection builders",id:"4-stable-collection-builders",children:[],level:3},{value:"5. Stable bit rotation operations for integers",id:"5-stable-bit-rotation-operations-for-integers",children:[],level:3},{value:"6. Stable Regex function for splitting a string into a sequence",id:"6-stable-regex-function-for-splitting-a-string-into-a-sequence",children:[],level:3},{value:"7. compareTo in infix notation",id:"7-compareto-in-infix-notation",children:[],level:3},{value:"8. Consistent replace() and replaceFirst() on JVM and JS",id:"8-consistent-replace-and-replacefirst-on-jvm-and-js",children:[],level:3}],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kotlin-16-\ub9b4\ub9ac\uc988-\uc694\uc57d"},"Kotlin 1.6 \ub9b4\ub9ac\uc988 \uc694\uc57d"),(0,i.kt)("p",null,"Kotlin 1.6\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85 : ",(0,i.kt)("a",{parentName:"p",href:"/docs/kotlin/release/kotlin_1.6"},"\ub9c1\ud06c")),(0,i.kt)("p",null,"\ub9b4\ub9ac\uc988 \ub178\ud2b8 : ",(0,i.kt)("a",{parentName:"p",href:"https://blog.jetbrains.com/kotlin/2021/11/kotlin-1-6-0-is-released/"},"\ub9c1\ud06c")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"language-features"},"Language features"),(0,i.kt)("p",null,"Kotlin 1.5.30 \uae30\ubc18\uc73c\ub85c \uae30\ub2a5 \uc548\uc815\ud654."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"1-sealed-exhaustive-when-statements"},"1. Sealed (exhaustive) ",(0,i.kt)("inlineCode",{parentName:"h3"},"when")," statements"),(0,i.kt)("p",null,"\ub9ac\ud134\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 when \uad6c\ubb38\uc5d0\uc11c sealed class \uc0ac\uc6a9\uc2dc \ubaa8\ub4e0 \ud0c0\uc785\uc744 \uad6c\ud604\ud558\uac8c \ud558\uc5ec \uac15\uc81c\ud588\uc5c8\uc2b5\ub2c8\ub2e4. \ub9ac\ud134\uc774 \uc544\ub2cc \ub3d9\uc791\uc73c\ub85c\ub9cc \ucc98\ub9ac\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ucef4\ud30c\uc77c \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc544 \ucd94\ud6c4 \uc720\uc9c0\ubcf4\uc218 \ud560 \ub54c \ucf00\uc774\uc2a4\ub97c \ucd94\uac00\ud574\uc57c \ud560 \uc9c0\uc810\uc744 \ub193\uce60 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"1.6\uc5d0\uc11c\ub294 \ucef4\ud30c\uc77c \uacbd\uace0\ub97c \ucd9c\ub825\ud558\uace0 1.7\uc5d0\uc11c\ub294 \uc624\ub958\ub85c \uac04\uc8fc\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc5f0\ub77d \uc218\ub2e8\ubcc4\ub85c \uac01 \ub2e4\ub978 \uacb0\uacfc\ub97c \ubc18\ud658\ud558\ub294 when \uad6c\ubb38\uc744 \uc791\uc131\ud588\uc744 \ub54c, \ubaa8\ub4e0 \uc720\ud615\uc744 \uc81c\uc5b4\ud558\uc9c0 \uc54a\uc73c\uba74 \ucef4\ud30c\uc77c\ub7ec\ub294 \uc624\ub958\ub97c \ub098\ud0c0\ub0b4\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Rates.computeMessageCost(contact: Contact): Cost =\n   when (contact) { // ERROR: 'when' expression must be exhaustive\n       is Contact.PhoneCall -> phoneCallCost\n       is Contact.TextMessage -> textMessageCost\n   } \n")),(0,i.kt)("p",null,"\ucf54\ud2c0\ub9b0 1.6 \uc774\uc804\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \ubc18\ud658 \ud568\uc218\uac00 \uc544\ub2cc \ucc98\ub9ac \ud568\uc218\uc778 \uacbd\uc6b0 \uc624\ub958 \uc5c6\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ucef4\ud30c\uc77c \ub418\uc5c8\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun sendAnnouncement(contact: Contact, announcement: Announcement) {\n   when (contact) {\n       is Contact.PhoneCall -> schedulePhoneCall(contact.number, announcement)\n       is Contact.TextMessage -> sendTextMessage(contact.number, announcement)\n   }\n}\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"2-suspending-functions-as-supertypes"},"2. Suspending functions as supertypes"),(0,i.kt)("p",null,"\ub78c\ub2e4\uc640 \uac19\uc740 super interface\uc5d0\uc11c suspend\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyClickAction : suspend () -> Unit {\n   override suspend fun invoke() { doSomething() }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"public fun launchOnClick(action: suspend () -> Unit) {}\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"3-suspend-conversions"},"3. Suspend conversions"),(0,i.kt)("p",null,"Suspend \ud568\uc218\ub97c \ub9e4\uac1c\ubcc0\uc218\ub85c \ubc1b\ub294 \uacf3\uc5d0 \uc77c\ubc18 \ud568\uc218\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608) flow.collect()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val processingFunction = ::processItem\nflow.collect(::processItem)\nfun processItem(item: Item) { /* ... */ }\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"4-improved-type-inference-for-recursive-generic-types"},"4. Improved type inference for recursive generic types"),(0,i.kt)("p",null,"\ucef4\ud30c\uc77c\ub7ec\uc758 \uc7ac\uadc0\uc801 \uc81c\ub108\ub9ad \uac80\uc0ac\uac00 \ub611\ub611\ud574\uc84c\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Before 1.5.30\nval containerA = PostgreSQLContainer<Nothing>(DockerImageName.parse("postgres:13-alpine")).apply {\n    withDatabaseName("db")\n    withUsername("user")\n    withPassword("password")\n    withInitScript("sql/schema.sql")\n}\n\n// With compiler option in 1.5.30 or by default starting with 1.6.0\nval containerB = PostgreSQLContainer(DockerImageName.parse("postgres:13-alpine"))\n    .withDatabaseName("db")\n    .withUsername("user")\n    .withPassword("password")\n    .withInitScript("sql/schema.sql")\n')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"5-builder-inference-improvements"},"5. Builder inference improvements"),(0,i.kt)("p",null,"\ube4c\ub354 \ucd94\ub860 \uad00\ub828\ud558\uc5ec \uc81c\ud55c\ub41c \ud568\uc218 \ud638\ucd9c\uc744 \uc704\ud574  ",(0,i.kt)("inlineCode",{parentName:"p"},"-Xunrestricted-builder-inference"),"\uc744 \uc9c0\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"-Xenable-Builder-Inference"),"  \ucef4\ud30c\uc77c\ub7ec \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"@BuilderInference")," \uc8fc\uc11d\uc744 \uc801\uc6a9\ud558\uc9c0 \uc54a\uace0\ub3c4 \uc77c\ubc18 \ube4c\ub354\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc73c\uba70, \ud0c0\uc785 \ucd94\ub860\uc774 \ud0c0\uc785 \uc815\ubcf4\ub97c \ud310\ub2e8\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0 \ube4c\ub354 \ucd94\ub860\uc744 \uc790\ub3d9\uc73c\ub85c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"standard-library"},"Standard library"),(0,i.kt)("h3",{id:"1-new-functions-for-standard-input"},"1. New functions for standard input"),(0,i.kt)("p",null,"\ucf58\uc194\uc5d0\uc11c \uac12\uc744 \uc77d\uc744 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readIn()")," \ud568\uc218\ub294 EOF\uc5d0 \ub2e4\ub2e4\ub974\uba74 \uc608\uc678\ub97c \ubc1c\uc0dd\ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"li"},"readLine()"),"\uc758 !!\ub97c \uc0ac\uc6a9\ud558\uc5ec null \uccb4\ud06c\ud558\ub294 \ub300\uc2e0\uc5d0 \uc774 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc138\uc694."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readInOrNull()")," \ud568\uc218\ub294 null \ubc18\ud658\uc758 \ub300\uc548\uc785\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"li"},"readLine()")," \ud568\uc218\uc640 \ub3d9\uc791 \ubc29\uc2dd\uc774 \ub3d9\uc77c\ud558\uc9c0\ub9cc \uc870\uae08 \ub354 \ub300\ud45c\uc801\uc778 \uc774\ub984\uc785\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun main() {\n    println("Input two integer numbers each on a separate line")\n    val num1 = readln().toInt()\n    val num2 = readln().toInt()\n    println("The sum of $num1 and $num2 is ${num1 + num2}")\n')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"2-stable-duration-api"},"2. Stable Duration API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"toComponents")," \ud568\uc218\uc758 days \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc774\uc81c Int \ud0c0\uc785\uc73c\ub85c \uc778\ud574 \uac12\uc774 \uc9e4\ub9ac\ub294 \uac83\uc744 \ubcf4\uc644\ud558\uc5ec Long \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DurationUnit")," enum\uc740 \uc774\uc81c type alias\ub85c \uc815\uc758\ub418\uc5b4\uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. (\uae30\uc874\uc5d0\ub294 JVM\uc758 ",(0,i.kt)("inlineCode",{parentName:"li"},"java.util.concurrent.TimeUnit")," \uc758 type alias\ub85c \uc815\uc758\ub418\uc5b4 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.)"),(0,i.kt)("li",{parentName:"ul"},"\ucee4\ubba4\ub2c8\ud2f0 \ud53c\ub4dc\ubc31\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"li"},"Int.seconds"),"\uc640 \uac19\uc740 \ud655\uc7a5 \uc18d\uc131\uc744 \ub418\ub3cc\ub824\ub193\uc558\uc2b5\ub2c8\ub2e4. \uc801\uc6a9 \uac00\ub2a5\uc131\uc744 \uc81c\ud55c\ud558\uae30 \uc704\ud574 Duration Class\uc758 Companion\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val duration = 5000.seconds\nprintln("There are ${duration.inWholeMinutes} minutes in ${duration.inWholeHours} hours")\n')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"3-stabletypeof"},"3. Stable\xa0",(0,i.kt)("inlineCode",{parentName:"h3"},"typeOf()")),(0,i.kt)("p",null,"\ucf54\ud2c0\ub9b0 1.6\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"typeOf()"),"\uac00 \uc548\uc815\ud654 \ubc84\uc804\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ucef4\ud30c\uc77c\ub7ec\uac00 \uc720\ucd94\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 Kotlin Type\uc744 \ud45c\ud604\ud558\ub294 KType\uc744 \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"inline fun <reified T> renderType(): String {\n    val type = typeOf<T>()\n    return type.toString()\n}\n\nfun main() {\n    val fromExplicitType = typeOf<Int>()\n    val fromReifiedType = renderType<List<Int>>()\n}\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"4-stable-collection-builders"},"4. Stable collection builders"),(0,i.kt)("p",null,"\ucf54\ud2c0\ub9b0 1.6.0\uc5d0\uc11c \uceec\ub809\uc158 \ube4c\ub354 \ud568\uc218 ",(0,i.kt)("inlineCode",{parentName:"p"},"buildMap()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"buildList()")," \ubc0f ",(0,i.kt)("inlineCode",{parentName:"p"},"buildSet()"),"\uac00 \uc548\uc815\ud654 \ubc84\uc804\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. Builder\ub294 \uc77d\uae30 \uc804\uc6a9 Collection\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"5-stable-bit-rotation-operations-for-integers"},"5. Stable bit rotation operations for integers"),(0,i.kt)("p",null,"\ucf54\ud2c0\ub9b0 1.6.0\uc5d0\uc11c\ub294 \uc774\uc9c4\uc218\ub97c \uc9c0\uc815\ub41c \ube44\ud2b8 \uc218\ub9cc\ud07c \uc67c\ucabd \ub610\ub294 \uc624\ub978\ucabd\uc73c\ub85c \ud68c\uc804\uc2dc\ud0a4\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"rotateLeft()"),"\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"rotateRight()")," \ud568\uc218\uac00 \uc548\uc815\ud654 \ubc84\uc804\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val number: Short = 0b10001\nprintln(number.rotateRight(2).toString(radix = 2)) // 100000000000100\nprintln(number.rotateLeft(2).toString(radix = 2))  // 1000100\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"6-stable-regex-function-for-splitting-a-string-into-a-sequence"},"6. Stable Regex function for splitting a string into a sequence"),(0,i.kt)("p",null,"\ucf54\ud2c0\ub9b0 1.6.0\uc5d0\uc11c \ubb38\uc790\uc5f4\uc744 \uc815\uaddc\uc2dd\uc73c\ub85c \ubd84\ud560\ud558\uc5ec sequence\ub85c \ubcc0\ud658\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"splitToSequence()"),"\uac00 \uc548\uc815\ud654 \ubc84\uc804\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val colorsText = "green, red , brown&blue, orange, pink&green"\nval regex = "[,\\\\s]+".toRegex()\nval mixedColor = regex.splitToSequence(colorsText)\n    .onEach { println(it) }\n    .firstOrNull { it.contains(\'&\') }\nprintln(mixedColor) // "brown&blue"\n')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"7-compareto-in-infix-notation"},"7. compareTo in infix notation"),(0,i.kt)("p",null,"infix \ud45c\uae30\ubc95\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"Comparable.compareTo")," \ud568\uc218\uc5d0\uc11c \ub450 \uac1c\uccb4\ub97c \ube44\uad50\ud558\uc5ec \uc21c\uc11c\ub97c \uc9c0\uc815\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class WrappedText(val text: String) : Comparable<WrappedText> {\n    override fun compareTo(other: WrappedText): Int =\n        this.text compareTo other.text\n}\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"8-consistent-replace-and-replacefirst-on-jvm-and-js"},"8. Consistent replace() and replaceFirst() on JVM and JS"),(0,i.kt)("p",null,"\ucf54\ud2c0\ub9b0 1.6.0 \uc774\uc804\uae4c\uc9c0\ub294 \ub300\uccb4\ubb38\uc790\uc5f4\uc5d0\uc11c group reference\ub97c \ucc38\uc870\ud558\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"replace()"),"\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"replaceFirst()")," Regex \ud568\uc218\uac00 JVM\uacfc JS\uc5d0\uc11c \ub2e4\ub974\uac8c \ub3d9\uc791\ud558\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc81c Kotlin/JS\uc640 JVM\uc758 \ub3d9\uc791\uc740 \ub3d9\uc77c\ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);