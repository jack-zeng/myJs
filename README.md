目前只有8个方法可用 更过方法在补充中
<div>
<h1>1.$.fn.ZtSlide</h1>
<p>为显示阴影方法:具体用法</p>
<h4>html</h4>
<code><<span>div class="ZtSlide"</span>> < <span> /div </span> > </code>
<h4>css</h4>
<pre>.ZtSlide{position: relative; height:100px; width:100px; overflow: hidden;background:#f12}</pre> 
<h4>js</h4>
<pre>$(".ZtSlide").ZtSlide()</pre> 
</div>

<div>
<h1>2.$.fn.ZtSlideMark</h1>
<p>为阴影滑动方法:具体用法</p>
<h4>html</h4>
<pre>
<ul>
	<li>
		<img src="poster.jpg">
		<div class="mark"></div>
	</li>
</ul>
<pre>
<h4>css</h4>
<pre>ul{ width:1400px;margin:0 auto;}
	li{position: relative; float:left; width:320px; margin:15px; height:180px; list-style: none;overflow: hidden;}
	.mark{position: absolute;left:0;top:100%;  width:100%; height:100%; background-color:rgba(0,0,0,0.5);}
	li img{width:100%; height:100%;}
	.ZtSlide{position: relative; height:100px; width:100px; overflow: hidden;background:#f12}</pre> 
<h4>js</h4>
<pre>$("ul").ZtSlideMark();</pre> 
</div>

