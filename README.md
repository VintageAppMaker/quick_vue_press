

# vuepress 빠르게 시작하기 
> vuepress는 static한 페이지를 만드는 도구로 사용하면 좋다. **개발자문서 또는 강의문서에 최적화** 되어있다. 깃헙의 jekyll처럼 markdown을 홈페이지로 만드는 기능을 제공한다. 그러나 깃헙처럼 md 파일을 레포지토리에 올리고 자동변환이 되는 것이 아니다. 로컬PC에서 빌드한 정적파일을 올리는 것이다. 그럼에도 쓸만하고 강력한 기능이 많다. 

***이 문서에서 사용한 예제는 [참고사이트](https://snipcart.com/blog/vuepress-tutorial-vuejs-documentation)
의 소스를 수정했다.*** 


### vuepress의 장점 
----

0. markdown 문서에서 html 문법을 사용할 수 있다. 

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/zqnX0Iwk_is" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```

결과:

<iframe width="560" height="315" src="https://www.youtube.com/embed/zqnX0Iwk_is" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. markdown 문서에서 vue 문법을 사용할 수 있다.

``` vue{3,5}
<ul>
    <li v-for="n in 10">
      {{n}}
    </li>

</ul>
```

결과: 


<ul>
    <li v-for="n in 10">
      {{n}}
    </li>

</ul>


2. 당연히 vue 컴포넌트를 만들어 사용할 수 있다. 

<<< @/.vuepress/components/Test.vue 
<Test/>

### vuepress 설치  
----

  - npm install -g vuepress  

### vuepress 설정   
----

1. config.js(.vuepress.config.js) 설정하기 

<<< @/.vuepress/config.js


  - nav는 상단메뉴(이름, 링크) 
  - siedbar는 좌측메뉴(링크)
  - 링크가 폴더일 경우, README.md가 그 폴더의 index.html의 역할을 한다. 

2. static 파일은 .vuepress 하위 public 폴더에 넣는다. 그곳이 /가 된다. 


### vuepress 실행 & 배포    
----

 - 반드시 프로젝트의 루트에서 **vuepress dev**를 실행 
 - 배포는 **vuepress build** 

