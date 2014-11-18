---
layout: page
title: Toolkit
permalink: /components/toolkit/
resource: true
categories: Components
---

Making sure your pages adhere to WFP UI Guidelines, we have prepared a set of tools and snippets, to help you kickstart your projects.

### CSS Toolkit
To make sure your designs follow our guidelines with ease, we've created a dedicated CSS Toolkit, which you can reference in your web pages and applications. You can also [download]({{site.baseurl}}/assets/css-lib-0.1.0.zip) and use it locally, if your site is note able to access the Internet.

{% highlight html %}
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css">
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-min.css">
<link rel="stylesheet" href="http://cdn.wfp.org/brand/ui/css/main.css">
{% endhighlight %}

<div class="preview plain">
  <p>
    <a class="pure-button" href="{{ site.baseurl }}/assets/css-lib-0.1.0.zip" download>WFP UI CSS (ZIP, ~22 KB)</a>
  </p>
</div>

### SASS Toolkit
If you are working with SASS, we have prepared a small toolkit in SCSS format with the most important variables and mixins (such as media queries or colour definitions), which you can use in your themes and websites.

<div class="preview plain">
  <p>
    <a class="pure-button" href="{{ site.baseurl }}/assets/vars.scss" download>WFP UI SASS (SCSS, ~2 KB)</a>
  </p>
</div>

### Favicons
Favicons are small icons that are being often displayed in the browser address bar, stored with bookmarked pages, etc. You should only use the officialy approved favicons.

Add the following lines to the `<head>` section of your page:

{% highlight html %}
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="http://cdn.wfp.org/apple-touch-icon-152x152-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://cdn.wfp.org/apple-touch-icon-144x144-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="http://cdn.wfp.org/apple-touch-icon-120x120-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://cdn.wfp.org/apple-touch-icon-114x114-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="http://cdn.wfp.org/apple-touch-icon-76x76-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://cdn.wfp.org/apple-touch-icon-72x72-precomposed.png" />
<link rel="apple-touch-icon-precomposed" href="http://cdn.wfp.org/apple-touch-icon-precomposed.png" />
<link rel="shortcut icon" href="http://cdn.wfp.org/favicon.ico" />
{% endhighlight %}

If your application or website is not able to connect to the Internet, you can use our [favicon offline kit]({{site.baseurl}}/assets/favicon.zip) to host favicons locally. Download the ZIP file, unpack it and place its contents in the root of your site.