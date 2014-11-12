---
layout: page
title: Fonts & Content
permalink: /components/fonts-and-content/
resource: true
categories: Components
---

<div class="side-nav">
  <h4>Contents</h4>
  <ol>
    <li><a href="#typekit">Typekit</a></li>
    <li><a href="#headings">Headings</a></li>
    <li><a href="#links">Links</a></li>
    <li><a href="#blockquotes">Blockquotes</a></li>
    <li><a href="#lists">Lists</a></li>
  </ol>
</div>

### Typekit
To get Myriad Pro & Calluna, you need to load them from Typekit.

Copy the code below, and paste it into the pages where the fonts will be used, just before the closing `</head>` tag of your website.

{% highlight html %}
<script type="text/javascript" src="//use.typekit.net/zqp4jvz.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
{% endhighlight %}

Typekit also offers an advanced embed code, which loads the fonts asynchronously, without blocking the rendering of a given page. This code is recommended for large pages, but it also requires more development time. For details, visit [Typekit support page](http://help.typekit.com/customer/portal/articles/649336-embed-code).

<div class="notice">
  <h6>Notice</h6>
  <p>This kit works for all hostnames under <em>*.wfp.org</em>. If you need to use Typekit on a site that is not under the <em>wfp.org</em> domain name, then send an e-mail to <a href="mailto:webmaster@wfp.org">webmaster@wfp.org</a> requesting your domain name to be added to the kit.</p>
</div>

###### Sans-serif
{% highlight css %}
font-family: "myriad-pro", "Myriad Pro", Helvetica, Arial, sans-serif;
{% endhighlight %}

###### Serif
{% highlight css %}
font-family: "calluna", "Georgia", serif;
{% endhighlight %}

However, if your web domain doesn't fall into _*.wfp.org_ wildcard, please contact WFP Communications Division, to get your domain approved for use with our official kit.

### Headings
Headings are a useful tool to markup important sections of a given page, such as headlines, chapters, etc. Any heading elements may include links or anchors.

<div class="type-sizes headings">
  <h4 class="label">H1</h4>
  <h1 class="example">The quick brown fox jumps over the lazy dog.</h1>
  <h4 class="label">H2</h4>
  <h2 class="example">The quick brown fox jumps over the lazy dog.</h2>
  <h4 class="label">H3</h4>
  <h3 class="example">The quick brown fox jumps over the lazy dog.</h3>
  <h4 class="label">H4</h4>
  <h4 class="example">The quick brown fox jumps over the lazy dog.</h4>
  <h4 class="label">H5</h4>
  <h5 class="example">The quick brown fox jumps over the lazy dog.</h5>
  <h4 class="label">H6</h4>
  <h6 class="example">The quick brown fox jumps over the lazy dog.</h6>
</div>

### Links
Links are special elements that point reader to other places on the Web, therefore they have to stand out from other text. Use only meaningful text for your links; words such as "here", "click here" don't tell the reader where they lead.

<div class="preview paragraph">
  <p>The Zero Hunger Challenge, launched by UN Secretary General Ban Ki-moon, encourages everyone - whether in government, business or civil society - to focus their energies on ending hunger in our lifetimes. By partnering with WFP and supporting its work, major global companies such as <a href="https://www.wfp.org/how-to-help/companies/partner/unilever">Unilever</a>, <a href="https://www.wfp.org/partners/private-sector/meet-our-partners/dsm">DSM</a> and <a href="https://www.wfp.org/about/partners/companies/meet-our-partners/mastercard">MasterCard</a> have already started to do this, joining with <a href="https://www.wfp.org/partners/governments"></a>governments</a> and civil society in the quest for zero hunger.</p>
</div>

### Blockquotes
Whenever you need to use a quote from another source on your page, use a `blockquote` tag.

<div class="preview paragraph">
  <blockquote>The Zero Hunger Challenge, launched by UN Secretary General Ban Ki-moon, encourages everyone - whether in government, business or civil society - to focus their energies on ending hunger in our lifetimes. By partnering with WFP and supporting its work, major global companies such as Unilever, DSM and MasterCard have already started to do this, joining with governments and civil society in the quest for zero hunger.</blockquote>
</div>

### Lists
We have two types of lists for use within the body text: _ordered_ and _unordered_.

###### Ordered list
<div class="preview paragraph">
  <ol>
    <li>First list item.</li>
    <li>Second list item.</li>
    <li>Third list item.</li>
  </ol>
</div>

###### Unordered list
<div class="preview paragraph">
  <ul>
    <li>First list item.</li>
    <li>Second list item.</li>
    <li>Third list item.</li>
  </ul>
</div>