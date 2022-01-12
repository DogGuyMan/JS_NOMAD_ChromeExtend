전체 드래그 금지;
```css
body { 
    -webkit-user-select:none; 
    -moz-user-select:none; 
    -ms-user-select:none; 
    user-select:none 
}

```
특정 부위만
```css
.draggable {
  -webkit-user-select:all;
  -moz-user-select:all;
  -ms-user-select:all;
  user-select:all
}
```

텍스트만 드래그를 허용하고 싶을 경우:
```css
.draggable {
  -webkit-user-select:text;
  -moz-user-select:text;
  -ms-user-select:text;
  user-select:text
}
```

[스타일 시트 CSS 접두어 webkit, moz, ms, o 의미](https://mainia.tistory.com/3671)
[민트코딩 드래그-방지](https://fresh-mint.tistory.com/entry/css-드래그-방지)