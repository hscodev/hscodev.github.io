"use strict";(self.webpackChunkhscodev=self.webpackChunkhscodev||[]).push([[155],{574:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={},c="Coroutine context and dispatchers",u={unversionedId:"kotlin/coroutine/coroutine_context_and_dispatchers",id:"kotlin/coroutine/coroutine_context_and_dispatchers",isDocsHomePage:!1,title:"Coroutine context and dispatchers",description:"\ucf54\ub8e8\ud2f4\uc740 \uc5ec\ub7ec \uc720\ud615\ub4e4\uc774 CoroutineContext\uac00 \uc788\uc73c\uba70, \uc774\uac83\uc774 \uc81c\uacf5\ud558\ub294 context\uc5d0\uc11c \uc2e4\ud589 \ub429\ub2c8\ub2e4.",source:"@site/docs/kotlin/coroutine/coroutine_context_and_dispatchers.md",sourceDirName:"kotlin/coroutine",slug:"/kotlin/coroutine/coroutine_context_and_dispatchers",permalink:"/docs/kotlin/coroutine/coroutine_context_and_dispatchers",tags:[],version:"current",frontMatter:{},sidebar:"kotlinSidebar",previous:{title:"Index",permalink:"/docs/kotlin/coroutine/index"}},s=[{value:"<strong>Dispatchers and threads</strong>",id:"dispatchers-and-threads",children:[],level:2},{value:"<strong>Unconfined vs confined dispatcher</strong>",id:"unconfined-vs-confined-dispatcher",children:[],level:2},{value:"<strong>Jumping between threads</strong>",id:"jumping-between-threads",children:[],level:2},{value:"<strong>Job in the context</strong>",id:"job-in-the-context",children:[],level:2},{value:"<strong>Children of a coroutine</strong>",id:"children-of-a-coroutine",children:[],level:2},{value:"<strong>Parental responsibilities</strong>",id:"parental-responsibilities",children:[],level:2},{value:"<strong>Combining context elements</strong>",id:"combining-context-elements",children:[],level:2},{value:"<strong>Coroutine scope</strong>",id:"coroutine-scope",children:[{value:"<strong>Thread-local data</strong>",id:"thread-local-data",children:[],level:3}],level:2}],d={toc:s};function p(n){var e=n.components,t=(0,r.Z)(n,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coroutine-context-and-dispatchers"},"Coroutine context and dispatchers"),(0,o.kt)("p",null,"\ucf54\ub8e8\ud2f4\uc740 \uc5ec\ub7ec \uc720\ud615\ub4e4\uc774 CoroutineContext\uac00 \uc788\uc73c\uba70, \uc774\uac83\uc774 \uc81c\uacf5\ud558\ub294 context\uc5d0\uc11c \uc2e4\ud589 \ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"context\ub294 \uc5ec\ub7ec \uc694\uc18c\uc758 \uc9d1\ud569\uc778\ub370, \uc8fc \uc694\uc18c\ub294 \ucf54\ub8e8\ud2f4\uc758 Job\uacfc Dispatcher\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"dispatchers-and-threads"},(0,o.kt)("strong",{parentName:"h2"},"Dispatchers and threads")),(0,o.kt)("p",null,"\ucf54\ub8e8\ud2f4 \ub514\uc2a4\ud328\ucc98\ub294 \ucf54\ub8e8\ud2f4 \uc2e4\ud589\uc744 \ud2b9\uc815 \uc2a4\ub808\ub4dc\ub85c \uc81c\ud55c\ud558\uac70\ub098 \uc2a4\ub808\ub4dc \ud480\uc5d0 \ub514\uc2a4\ud328\uce58\ud558\uac70\ub098 \uc81c\ud55c \uc5c6\uc774 \uc2e4\ud589\ub418\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"launch")," \ubc0f ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"\uc640 \uac19\uc740 \ubaa8\ub4e0 \ucf54\ub8e8\ud2f4 \ube4c\ub354\ub294 \uc0c8 \ucf54\ub8e8\ud2f4 \ubc0f \uae30\ud0c0 \ucee8\ud14d\uc2a4\ud2b8 \uc694\uc18c\uc5d0 \ub300\ud55c \ub514\uc2a4\ud328\ucc98\ub97c \uc9c0\uc815\ud558\ub294  CoroutineContext \ub9e4\uac1c\ubcc0\uc218\ub97c \ud5c8\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'launch { // context of the parent\n    println("main runBlocking      : I\'m working in thread ${Thread.currentThread().name}")\n}\nlaunch(Dispatchers.Unconfined) { // not confined -- will work with main thread\n    println("Unconfined            : I\'m working in thread ${Thread.currentThread().name}")\n}\nlaunch(Dispatchers.Default) { // will get dispatched to DefaultDispatcher \n    println("Default               : I\'m working in thread ${Thread.currentThread().name}")\n}\nlaunch(newSingleThreadContext("MyOwnThread")) { // will get its own new thread\n    println("newSingleThreadContext: I\'m working in thread ${Thread.currentThread().name}")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"Unconfined            : I'm working in thread main\nDefault               : I'm working in thread DefaultDispatcher-worker-1\nnewSingleThreadContext: I'm working in thread MyOwnThread\nmain runBlocking      : I'm working in thread main\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"launch"),"\uac00 \ub9e4\uac1c\ubcc0\uc218 \uc5c6\uc774 \uc0ac\uc6a9\ub418\uba74 \uc2dc\uc791\ub418\ub294 CoroutineScope\uc758 \ucee8\ud14d\uc2a4\ud2b8(\ub514\uc2a4\ud328\ucc98)\ub97c \uc0c1\uc18d\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-unconfined.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Dispatchers.Unconfined")),"\ub294 \uba54\uc778 \uc2a4\ub808\ub4dc\uc5d0\uc11c\ub3c4 \uc2e4\ud589\ub418\ub294 \uac83\ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc \uc2e4\uc81c\ub85c\ub294 \ud2b9\uc218\ud55c \ub514\uc2a4\ud328\ucc98\ub85c\uc11c \ub4a4\uc5d0 \uc124\uba85\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-default.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Dispatchers.Default")),"\ub294 \uc2a4\ucf54\ud504\uc5d0 \uba85\ud655\ud788 \uc120\uc5b8 \ud560 \ub514\uc2a4\ud328\ucc98\uac00 \uc5c6\uc744 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uacf5\uc720 \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc2a4\ub808\ub4dc\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/new-single-thread-context.html"},(0,o.kt)("inlineCode",{parentName:"a"},"newSingleThreadContext")),"\ub294 \ucf54\ub8e8\ud2f4\uc774 \uc2e4\ud589\ud560 \uc2a4\ub808\ub4dc\ub97c \uac1c\ubcc4\uc801\uc73c\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc804\uc6a9 \uc2a4\ub808\ub4dc\ub294 \ube44\uc6a9\uc774 \ud070 \ub9ac\uc18c\uc2a4\uc785\ub2c8\ub2e4. \ub354 \uc774\uc0c1 \ud544\uc694\ud558\uc9c0 \uc54a\uc744 \ub54c ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud574\uc81c\ud558\uac70\ub098 \ucd5c\uc0c1\uc704 \ubcc0\uc218\uc5d0 \uc800\uc7a5\ud558\uace0 \ud504\ub85c\uadf8\ub7a8 \uc804\uccb4\uc5d0\uc11c \uc7ac\uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\uac83\uc740 \uad6c\uc2dd API\uc774\uba70 ",(0,o.kt)("inlineCode",{parentName:"p"},"Executors.newSingleThreadExecutor().asCoroutineDispatcher()"),"\ub97c \uc0ac\uc6a9\ud558\uba70 \uad00\ub9ac\ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'CoroutineScope(Dispatchers.IO).launch {\n    work1()\n    Log.e("CCOOVV", "IO1 work1 called ${Thread.currentThread().name}")\n}\nCoroutineScope(Dispatchers.IO).launch {\n    work1()\n    Log.e("CCOOVV", "IO2 work1 called ${Thread.currentThread().name}")\n}\nCoroutineScope(Executors.newSingleThreadExecutor().asCoroutineDispatcher()).launch {\n        work1()\n    Log.e("CCOOVV", "Custom work1 called ${Thread.currentThread().name}")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"2021-11-06 16:43:36.570 9373-9474/ IO2 work1 called DefaultDispatcher-worker-1\n2021-11-06 16:43:36.574 9373-9477/ IO1 work1 called DefaultDispatcher-worker-4\n2021-11-06 16:43:37.563 9373-9479/ Custom work1 called pool-1-thread-1\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"unconfined-vs-confined-dispatcher"},(0,o.kt)("strong",{parentName:"h2"},"Unconfined vs confined dispatcher")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-unconfined.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Dispatchers.Unconfined")),"\ub294 \ud638\ucd9c\ud55c \uc2a4\ub808\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \ucf54\ub8e8\ud2f4 \ub514\uc2a4\ud328\ucc98 \uc785\ub2c8\ub2e4. \ub2e8, \uc911\ub2e8 \ud568\uc218\ub97c \ub9cc\ub098\uae30 \uc804\uae4c\uc9c0\ub9cc \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc911\ub2e8 \ud568\uc218\ub97c \ub9cc\ub098\uace0 \ubcf5\uadc0\ud588\uc744 \ub54c\ub294 \uc911\ub2e8 \ud568\uc218\uc5d0\uc11c \uc2e4\ud589\ub41c \uc4f0\ub808\ub4dc\uc5d0\uc11c \uacc4\uc18d \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ub514\uc2a4\ud328\ucc98\ub294 CPU \uc2dc\uac04\uc744 \uc18c\ube44\ud558\uc9c0 \uc54a\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud2b9\uc815 \uc4f0\ub808\ub4dc\uc5d0 \uad6d\ud55c\ub41c \uacf5\uc720 \ub370\uc774\ud130\ub97c \uac31\uc2e0\ud558\uc9c0 \uc54a\ub294 \ucf54\ub8e8\ud2f4\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubc18\uba74\uc5d0 \ub514\uc2a4\ud328\ucc98\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc678\ubd80 CoroutineScope\uc5d0\uc11c \uc0c1\uc18d\ub429\ub2c8\ub2e4. runBlocking \ucf54\ub8e8\ud2f4\uc5d0 \ub300\ud55c \uae30\ubcf8 \ub514\uc2a4\ud328\ucc98\ub294 \ud638\ucd9c\uc790 \uc2a4\ub808\ub4dc\ub85c \uc81c\ud55c\ub418\ubbc0\ub85c \uc774\ub97c \uc0c1\uc18d\ud558\uba74 \uc608\uce21 \uac00\ub2a5\ud55c FIFO \uc2a4\ucf00\uc904\ub9c1\uc73c\ub85c \uc2e4\ud589\uc744 \uc774 \uc2a4\ub808\ub4dc\ub85c \uc81c\ud55c\ud558\ub294 \ud6a8\uacfc\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'launch(Dispatchers.Unconfined) { // not confined -- will work with main thread\n    println("Unconfined      : I\'m working in thread ${Thread.currentThread().name}")\n    delay(500)\n    println("Unconfined      : After delay in thread ${Thread.currentThread().name}")\n}\nlaunch { // context of the parent, main runBlocking coroutine\n    println("main runBlocking: I\'m working in thread ${Thread.currentThread().name}")\n    delay(1000)\n    println("main runBlocking: After delay in thread ${Thread.currentThread().name}")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"Unconfined      : I'm working in thread main @coroutine#2\nmain runBlocking: I'm working in thread main @coroutine#3\nUnconfined      : After delay in thread kotlinx.coroutines.DefaultExecutor @coroutine#2\nmain runBlocking: After delay in thread main @coroutine#3\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ube44\uc81c\ud55c \ub514\uc2a4\ud328\ucc98\ub294 \uc77c\ubd80 \uc791\uc5c5\uc774 \uc989\uc2dc \uc218\ud589\ub418\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \ub098\uc911\uc5d0 \uc2e4\ud589\uc744 \uc704\ud574 \ucf54\ub8e8\ud2f4\uc744 \ub514\uc2a4\ud328\uce58\ud560 \ud544\uc694\uac00 \uc5c6\uac70\ub098 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\uac00 \ubc1c\uc0dd\ud558\ub294 \ud2b9\uc815 \ucf00\uc774\uc2a4\uc5d0 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 \uace0\uae09 \uba54\ucee4\ub2c8\uc998\uc785\ub2c8\ub2e4. \ube44\uc81c\ud55c \ub514\uc2a4\ud328\ucc98\ub294 \uc77c\ubc18 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\uba74 \uc548 \ub429\ub2c8\ub2e4.")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"jumping-between-threads"},(0,o.kt)("strong",{parentName:"h2"},"Jumping between threads")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'newSingleThreadContext("Ctx1").use { ctx1 ->\n    newSingleThreadContext("Ctx2").use { ctx2 ->\n        runBlocking(ctx1) {\n            log("Started in ctx1")\n            withContext(ctx2) {\n                log("Working in ctx2")\n            }\n            log("Back to ctx1")\n        }\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"[Ctx1 @coroutine#1] Started in ctx1\n[Ctx2 @coroutine#1] Working in ctx2\n[Ctx1 @coroutine#1] Back to ctx1\n")),(0,o.kt)("p",null,"\uc704\uc5d0\ub294 \uba87\uac00\uc9c0 \uae30\uc220\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ud558\ub098\ub294 \uba85\uc2dc\uc801\uc73c\ub85c \uc9c0\uc815\ub41c \ucee8\ud14d\uc2a4\ud2b8\uc640 \ud568\uaed8 runBlocking\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\uace0 \ub2e4\ub978 \ud558\ub098\ub294 \uc544\ub798 \ucd9c\ub825\uc5d0\uc11c \ubcfc \uc218 \uc788\ub4ef\uc774 \ub3d9\uc77c\ud55c \ucf54\ub8e8\ud2f4\uc5d0 \uacc4\uc18d \uc720\uc9c0\ud558\uba74\uc11c withContext \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucf54\ub8e8\ud2f4\uc758 \ucee8\ud14d\uc2a4\ud2b8\ub97c \ubcc0\uacbd\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"job-in-the-context"},(0,o.kt)("strong",{parentName:"h2"},"Job in the context")),(0,o.kt)("p",null,"\ucf54\ub8e8\ud2f4\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"Job"),"\uc740 context\uc758 \uc77c\ubd80\uc774\uace0, \ub2e4\uc74c\uacfc \uac19\uc774 \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"coroutineContext[Job]")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun main() = runBlocking{\n    val job = CoroutineScope(Dispatchers.Unconfined).launch {\n        delay(10)\n    }\n\n    println("My job is " + coroutineContext[job.key])\n\n    delay(1000)\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'My job is "coroutine#1":BlockingCoroutine{Active}@32a1bec0\n')),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"children-of-a-coroutine"},(0,o.kt)("strong",{parentName:"h2"},"Children of a coroutine")),(0,o.kt)("p",null,"\ub2e4\ub978 \ucf54\ub8e8\ud2f4\uc758 \uc2a4\ucf54\ud504 \uc548\uc5d0\uc11c \ucf54\ub8e8\ud2f4\uc774 \uc2e4\ud589\ub418\uba74 \ucee8\ud14d\uc2a4\ud2b8\ub97c \ubb3c\ub824\ubc1b\uace0 \uc0c8\ub85c\uc6b4 \ucf54\ub8e8\ud2f4\uc758 \uc7a1\uc740 \ubd80\ubaa8 \ucf54\ub8e8\ud2f4\uc758 \uc7a1\uc758 \uc790\uc2dd\uc73c\ub85c \uc2dc\uc791\ub429\ub2c8\ub2e4. \ubd80\ubaa8 \ucf54\ub8e8\ud2f4\uc774 \ucde8\uc18c\ub418\uba74 \ubaa8\ub454 \uc790\uc2dd\ub4e4\ub3c4 \ucde8\uc18c\ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val scope = CoroutineScope(Dispatchers.IO)\n\nval parentJob = scope.launch {\n    println("parent start")\n\n    val childJob = launch {\n        println("child start")\n        }\n}\n')),(0,o.kt)("p",null,"\uadf8\ub7ec\ub098 \ubd80\ubaa8-\uc790\uc2dd \uad00\uacc4\ub294 \ub2e4\uc74c \ub450\uac00\uc9c0 \ubc29\ubc95 \uc911 \ud558\ub098\ub85c \uc7ac\uc815\uc758\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\ucf54\ub8e8\ud2f4\uc744 \uc2dc\uc791\ud560 \ub54c \ub2e4\ub978 \uc2a4\ucf54\ud504\ub85c \uc2e4\ud589\ub418\uba74(\uc608: GlobalScope.launch) \uc0c1\uc704 \uc2a4\ucf54\ud504\uc5d0\uc11c Job\uc744 \uc0c1\uc18d\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val scope = CoroutineScope(Dispatchers.IO)\n\nval parentJob = scope.launch {\n    println("parent start")\n\n    val isNotChildJob = CoroutineScope(Dispatchers.IO).launch {\n        println("is not child start")\n        }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\ub2e4\ub978 Job \uac1d\uccb4\uac00 \uc0c8 \ucf54\ub8e8\ud2f4\uc5d0 \ub300\ud55c \ucee8\ud14d\uc2a4\ud2b8\ub85c \uc804\ub2ec\ub418\uba74 \uc0c1\uc704 \ubc94\uc704\uc758 Job\uc744 \uc7ac\uc815\uc758\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val scope = CoroutineScope(Dispatchers.IO)\n\nval parentJob = scope.launch {\n    println("parent start")\n\n    val isNotChildJob = launch(Job()) {\n        println("is not child start")\n        }\n}\n')))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"parental-responsibilities"},(0,o.kt)("strong",{parentName:"h2"},"Parental responsibilities")),(0,o.kt)("p",null,"\ubd80\ubaa8 \ucf54\ub8e8\ud2f4\uc740 \ud56d\uc0c1 \ubaa8\ub4e0 \uc790\uc2dd \uc791\uc5c5\uc774 \uc644\ub8cc\ub418\uae30\ub97c \uae30\ub2e4\ub9bd\ub2c8\ub2e4. \ubd80\ubaa8\ub294 \uc2dc\uc791\ud558\ub294 \ubaa8\ub4e0 \uc790\uc2dd\uc744 \uba85\uc2dc\uc801\uc73c\ub85c \ucd94\uc801\ud560 \ud544\uc694\uac00 \uc5c6\uc73c\uba70 \ub9c8\uc9c0\ub9c9\uc5d0 \uc790\uc2dd\uc744 \uae30\ub2e4\ub9ac\uae30 \uc704\ud574 Job.join\uc744 \uc0ac\uc6a9\ud560 \ud544\uc694\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// launch a coroutine to process some kind of incoming request\nval request = launch {\n    repeat(3) { i -> // launch a few children jobs\n        launch  {\n            delay((i + 1) * 200L) // variable delay 200ms, 400ms, 600ms\n            println("Coroutine $i is done")\n        }\n    }\n    println("request: I\'m done and I don\'t explicitly join my children that are still active")\n}\nrequest.join() // wait for completion of the request, including all its children\nprintln("Now processing of the request is complete")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"request: I'm done and I don't explicitly join my children that are still active\nCoroutine 0 is done\nCoroutine 1 is done\nCoroutine 2 is done\nNow processing of the request is complete\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"combining-context-elements"},(0,o.kt)("strong",{parentName:"h2"},"Combining context elements")),(0,o.kt)("p",null,"\ub54c\ub54c\ub85c \uc6b0\ub9ac\ub294 \ucf54\ub8e8\ud2f4 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uc5ec\ub7ec \uc694\uc18c\ub97c \uc815\uc758\ud560 \ud544\uc694\uac00 \uc788\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"+")," \uc624\ud37c\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc815\uc758 \uac00\ub2a5\ud558\ub2e4."),(0,o.kt)("p",null,"\uc608\ub97c\ub4e4\uc5b4 \ucf54\ub8e8\ud2f4\uc744 \uc2e4\ud589\ud560 \ub54c Dispatcher\ub97c \uc815\uc758\ud558\uace0 \ucf54\ub8e8\ud2f4\uc758 \uc774\ub984\uc744 \uc801\uc758\ud558\uace0 \uc2f6\uc744 \ub54c \ub2e4\uc74c\uacfc \uac19\uc774 \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'launch(Dispatchers.Default + CoroutineName("test")) {\n    println("I\'m working in thread ${Thread.currentThread().name}")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"I'm working in thread DefaultDispatcher-worker-1 @test#2\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"coroutine-scope"},(0,o.kt)("strong",{parentName:"h2"},"Coroutine scope")),(0,o.kt)("p",null,"Context, children, Job \uc758 \uc815\ubcf4\ub97c \ud569\uccd0 \ubd05\uc2dc\ub2e4. \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc218\uba85 \uc8fc\uae30\uac00 \uc788\ub294 \uac1d\uccb4\uac00 \uc788\uace0, \uadf8 \uac1d\uccb4\ub294 \ucf54\ub8e8\ud2f4\uc774 \uc544\ub2c8\ub77c\uace0 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc548\ub4dc\ub85c\uc774\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc791\uc131\ud558\uace0 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0, \uc5c5\ub370\uc774\ud2b8\ud558\uace0, \uc560\ub2c8\uba54\uc774\uc158\uc744 \ucc98\ub9ac\ud558\ub294 \ub4f1\uc758 \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \ud558\uae30 \uc704\ud574 \uc561\ud2f0\ube44\ud2f0 \ucee8\ud14d\uc2a4\ud2b8\uc5d0\uc11c \ub2e4\uc591\ud55c \ucf54\ub8e8\ud2f4\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ucf54\ub8e8\ud2f4\uc740 \uba54\ubaa8\ub9ac \ub204\uc218\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc561\ud2f0\ube44\ud2f0\uac00 \ud30c\uad34\ub418\uba74 \ubaa8\ub450 \ucde8\uc18c\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubb3c\ub860 Context\uc640 Job\uc744 \uc9c1\uc811 \uc870\uc791\ud558\uc5ec \uc561\ud2f0\ube44\ud2f0\uc640 \ucf54\ub8e8\ud2f4\uc758 \uc218\uba85 \uc8fc\uae30\ub97c \uc5f0\uacb0\ud560 \uc218 \uc788\uc9c0\ub9cc, kotlinx.coroutines\ub294 CoroutineScope\ub97c \ucea1\uc290\ud654\ud558\ub294 \ucd94\uc0c1\ud654\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ucf54\ub8e8\ud2f4 \ube4c\ub354\uac00 \ud655\uc7a5\ud568\uc218\ub85c \uc120\uc5b8\ub418\ubbc0\ub85c \ucf54\ub8e8\ud2f4 \uc2a4\ucf54\ud504\uc5d0 \uc775\uc219\ud574\uc838\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc6b0\ub9ac\ub294 \uc561\ud2f0\ube44\ud2f0\uc758 \uc0dd\uba85\uc8fc\uae30\uc5d0 \uc5f0\uacb0\ub41c CoroutineScope \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\uc5ec \ucf54\ub8e8\ud2f4 \uc0dd\uba85\uc8fc\uae30\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4. SoroutineScope \uc778\uc2a4\ud134\uc2a4\ub294 CoroutineScope() \ub610\ub294 MainScope() \ud329\ud1a0\ub9ac \ud568\uc218\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc804\uc790\ub294 \ubc94\uc6a9 \ubc94\uc704\ub97c \uc0dd\uc131\ud558\uace0 \ud6c4\uc790\ub294 Dispatchers.Main \ub514\uc2a4\ud328\ucc98\ub97c \uc0ac\uc6a9\ud558\uc5ec UI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc704\ud55c Scope\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Activity {\n    private val mainScope = MainScope()\n\n    fun destroy() {\n        mainScope.cancel()\n    }\n")),(0,o.kt)("p",null,"\uc815\uc758\ud55c \ucf54\ub8e8\ud2f4 \uc2a4\ucf54\ud504\uc5d0\uc11c \ucf54\ub8e8\ud2f4\uc744 \uc2e4\ud589 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun doSomething() {\n    // launch ten coroutines for a demo, each working for a different time\n    repeat(10) { i ->\n        mainScope.launch {\n            delay((i + 1) * 200L) // variable delay 200ms, 400ms, ... etc\n            println("Coroutine $i is done")\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\uc561\ud2f0\ube44\ud2f0\uac00 \uc0dd\uc131\ub41c \ud6c4\uc5d0 \ud568\uc218\ub97c \uc2e4\ud589\ud558\uace0, 500ms \ud6c4\uc5d0 \uc561\ud2f0\ube44\ud2f0\ub97c \ud30c\uad34\ud558\ub294 \uacbd\uc6b0 \ud568\uc218\ub294 \uc911\ub2e8\ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val activity = Activity()\nactivity.doSomething() // run test function\nprintln("Launched coroutines")\ndelay(500L) // delay for half a second\nprintln("Destroying activity!")\nactivity.destroy() // cancels all coroutines\ndelay(1000) // visually confirm that they don\'t work\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"Launched coroutines\nCoroutine 0 is done\nCoroutine 1 is done\nDestroying activity!\n")),(0,o.kt)("p",null,"\uc548\ub4dc\ub85c\uc774\ub4dc\uc5d0\uc11c\ub294 first-party\ub85c \uc0dd\uba85\uc8fc\uae30\uc5d0 \ub300\ud55c \ucf54\ub8e8\ud2f4 \uc2a4\ucf54\ud504\ub97c \uc9c0\uc6d0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/topic/libraries/architecture/coroutines#lifecyclescope"},"https://developer.android.com/topic/libraries/architecture/coroutines#lifecyclescope")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"thread-local-data"},(0,o.kt)("strong",{parentName:"h3"},"Thread-local data")),(0,o.kt)("p",null,"\ucf54\ub8e8\ud2f4\uac04\uc5d0 \ud639\uc740 \uc2a4\ub808\ub4dc \ub85c\uceec\uac04\uc5d0 \ub370\uc774\ud130\ub97c \uac04\ud3b8\ud558\uac8c \uc804\ub2ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub7ec\ub098 \ud2b9\uc815 \uc2a4\ub808\ub4dc\uc5d0 \ubc14\uc778\ub529\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc218\ub3d9\uc73c\ub85c \uc218\ud589\ud558\uba74 \ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8\ub85c \uc774\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub97c \uc704\ud574 ThreadLocal\uc740 asContextElement \ud655\uc7a5 \ud568\uc218\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 ThreadLocal\uc758 \uac12\uc744 \uc720\uc9c0\ud558\uace0 \ucf54\ub8e8\ud2f4\uc774 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc804\ud658\ud560 \ub54c\ub9c8\ub2e4 \uc774\ub97c \ubcf5\uc6d0\ud558\ub294 \ucd94\uac00 \ucee8\ud14d\uc2a4\ud2b8 \uc694\uc18c\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun main() = runBlocking {\n    val threadLocal = ThreadLocal<String>()\n    threadLocal.set("main")\n    println("Pre-main, current thread: ${Thread.currentThread()}, thread local value: \'${threadLocal.get()}\'")\n    val job = launch(Dispatchers.Default + threadLocal.asContextElement(value = "launch")) {\n        println("Launch start, current thread: ${Thread.currentThread()}, thread local value: \'${threadLocal.get()}\'")\n        yield()\n        println("After yield, current thread: ${Thread.currentThread()}, thread local value: \'${threadLocal.get()}\'")\n    }\n    job.join()\n    println("Post-main, current thread: ${Thread.currentThread()}, thread local value: \'${threadLocal.get()}\'")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"Pre-main, current thread: Thread[main @coroutine#1,5,main], thread local value: 'main'\nLaunch start, current thread: Thread[DefaultDispatcher-worker-1 @coroutine#2,5,main], thread local value: 'launch'\nAfter yield, current thread: Thread[DefaultDispatcher-worker-1 @coroutine#2,5,main], thread local value: 'launch'\nPost-main, current thread: Thread[main @coroutine#1,5,main], thread local value: 'main'\n")),(0,o.kt)("p",null,"\uc704 \uc608\uc81c\uc5d0\uc11c\ub294 \uc0c8\ub85c\uc6b4 \ucf54\ub8e8\ud2f4\uc744 Dispatcher.Default\uc758 \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc2a4\ub808\ub4dc \ud480\uc744 \uc0ac\uc6a9\ud558\uc600\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub3d9\uc791\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ucf54\ub8e8\ud2f4\uc774 \uc2e4\ud589\ub418\ub294 \uc2a4\ub808\ub4dc\uc5d0 \uad00\uacc4\uc5c6\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},'threadLocal.asContextElement(value = "launch")'),"\ub97c \uc0ac\uc6a9\ud558\uc5ec thread local \ubcc0\uc218\ub294 \uc5ec\uc804\ud788 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ucee8\ud14d\uc2a4\ud2b8 \uc694\uc18c\ub97c \uc124\uc815\ud558\ub294 \uac83\uc744 \uc78a\ud600\uc9c0\uae30 \uc27d\uc2b5\ub2c8\ub2e4. \ucf54\ub8e8\ud2f4\uc744 \uc2e4\ud589\ud558\ub294 \uc2a4\ub808\ub4dc\uac00 \ub2e4\ub978 \uacbd\uc6b0 \uc561\uc138\uc2a4\ud558\ub294 \uc2a4\ub808\ub4dc \ub85c\uceec \ubcc0\uc218\uc5d0 \uc608\uae30\uce58 \uc54a\uc740 \uac12\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc0c1\ud669\uc744 \ud53c\ud558\ub824\uba74 surePresent \uba54\uc11c\ub4dc\uc640 fail-fast\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"ThreadLocal\uc740 \ucd5c\uace0 \uc218\uc900\uc758 \uc9c0\uc6d0\uc744 \uc81c\uacf5\ud558\uba70 \ubaa8\ub4e0 \uae30\ubcf8 kotlinx.coroutines\uac00 \uc81c\uacf5\ud558\ub294 \uac83\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ud55c \uac00\uc9c0 \uc8fc\uc694 \uc81c\ud55c \uc0ac\ud56d\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc2a4\ub808\ub4dc \ub85c\uceec\uc774 \ubcc0\uacbd\ub418\uba74 \uc0c8 \uac12\uc774 \ucf54\ub8e8\ud2f4 \ud638\ucd9c\uc790\uc5d0\uac8c \uc804\ud30c\ub418\uc9c0 \uc54a\uace0 \uc5c5\ub370\uc774\ud2b8\ub41c \uac12\uc774 \ub2e4\uc74c \uc77c\uc2dc \uc911\ub2e8 \uc2dc \uc190\uc2e4\ub429\ub2c8\ub2e4.(\ucee8\ud14d\uc2a4\ud2b8 \uc694\uc18c\uac00 \ubaa8\ub4e0 ThreadLocal \uac1c\uccb4 \uc561\uc138\uc2a4\ub97c \ucd94\uc801\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0)"),(0,o.kt)("p",null,"withContext\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucf54\ub8e8\ud2f4\uc5d0\uc11c \uc2a4\ub808\ub4dc \ub85c\uceec \uac12\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uc138\uc694. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 asContextElement\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,o.kt)("p",null,"\ub610\ub294 Counter(var i: Int) \ud074\ub798\uc2a4\uc640 \uac19\uc740 mutable box\uc5d0 \uac12\uc744 \uc800\uc7a5\ud560 \uc218 \uc788\uc73c\uba70, \uc774\ub294 \ucc28\ub840\ub85c \uc2a4\ub808\ub4dc \ub85c\uceec \ubcc0\uc218\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774 \uacbd\uc6b0 mutable box\uc5d0 \ub300\ud55c \uc7a0\uc7ac\uc801\uc778 \ub3d9\uc2dc\uc131 \ubb38\uc81c\uc5d0 \ub300\ud574\uc11c\ub294 \uac1c\ubcc4\uc801\uc778 \ucc98\ub9ac\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uace0\uae09 \uc0ac\uc6a9\ubc95\uc73c\ub85c\uc11c\ub294 \uad6c\ud604\ud574\uc57c \ud558\ub294 ThreadContextElement \uc778\ud130\ud398\uc774\uc2a4\uc758 \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624. (\ub85c\uae45 MDC, \ud2b8\ub79c\uc7ad\uc158 \ucee8\ud14d\uc2a4\ud2b8, \ub370\uc774\ud130 \uc804\ub2ec\uc744 \uc704\ud574 \ub0b4\ubd80\uc801\uc73c\ub85c \uc2a4\ub808\ub4dc \ub85c\uceec\uc744 \uc0ac\uc6a9\ud558\ub294 \uae30\ud0c0 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640\uc758 \ud1b5\ud569)"))}p.isMDXComponent=!0}}]);